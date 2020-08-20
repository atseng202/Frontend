import React, { Component } from "react";
import { AnalysisTabWrapper } from "../styles/dashboard-style";
import { Row, Col, notification } from "antd";
import AntTable from "./antd_table";
// import { Pie } from "react-chartjs-2";
//import { youtubeParser } from '../components/helpers/urlParser';
import ApiUtils from "../helpers/apiUtils";

//TODO add topic name to header, add total sum for a topic to header, interact with api, fix table background overlapping on ipad
const api = new ApiUtils();
class TopicModelling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTopics: 5,
      colSpace: 0,
      data: {
        labels: ["Negative", "Positive", "Neutral"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      id: null,
      apiTopics: null,
    };
    this.state.colSpace = 8; //24 / this.state.numTopics;
    this.state.topics = {
      music: ["billie jean", "queen", "eminem", "eminem"],
      sports: [
        "golf",
        "michael jorden",
        "michael jorden",
        "basketball",
        "basketball",
        "basketball",
      ],
      gaming: ["gaming controller", "playstation 5", "call of duty", "skyrim"],
      movies_and_shows: ["big bang theory", "star wars", "cinama"],
      news: ["covid19"],
      live: ["stream", "ninja"],
      fashion_and_beauty: ["jeffree star", "james charles"],
      learning: ["pencil", "test"],
      spotlight: [],
    };
    //rearrange topics to name and count, and then to data for antd column
    //return topics as data for antd col, and return total num keywords per topic
    [this.state.sortedTopics, this.state.topicTotals] = this.processTopics();
  }

  componentDidMount() {
    this.setState({ id: this.props.router?.query?.id }, async () => {
      await this.getTopics();
    });
  }
  getTopics = async () => {
    try {
      const res = await api.getTopics(this.state.id, 5);
      this.setState({ apiTopics: res.data }, () => console.log(this.state.apiTopics));
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong!",
      });
    }
  };

  processTopics = () => {
    let sortedTopics = {};
    let topicTotals = {};

    Object.keys(this.state.topics).forEach((topic) => {
      topicTotals[topic] = 0;
      let nameToSum = this.state.topics[topic].reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        topicTotals[topic] += 1;
        return prev;
      }, {});
      sortedTopics[topic] = [];
      let keyCount = 0;
      Object.keys(nameToSum).forEach((name) => {
        sortedTopics[topic].push({
          key: keyCount,
          name: name,
          sum: nameToSum[name],
        });
        keyCount += 1;
      });
    });
    return [sortedTopics, topicTotals];
  };

  render() {
    return (
      <AnalysisTabWrapper>
        <Row justify="center" gutter={[16, 16]}>
          {Object.keys(this.state.topics).map((topic, index) => (
            <Col key={index} md={this.state.colSpace}>
              <AntTable data={this.state.sortedTopics[topic]} nameColTitle={topic} sumColTitle={this.state.topicTotals[topic]}/>
            </Col>
          ))}
        </Row>
      </AnalysisTabWrapper>
    );
  }
}

export default TopicModelling;
