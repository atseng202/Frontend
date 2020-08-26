import React, { Component } from "react";
import { AnalysisTabWrapper } from "../styles/dashboard-style";
import { Row, Col } from "antd";
import { Pie } from "react-chartjs-2";

class EmotionAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "anger",
          "sadness",
          "fear",
          "joy",
          "interest",
          "surprise",
          "disgust",
          "shame0",
        ],
        datasets: [
          {
            data: [300, 50, 100, 300, 50, 100, 300, 50],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FFA500",
              "#800080",
              "#008000",
              "#00FFFF",
              "#FF00FF",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FFA500",
              "#800080",
              "#008000",
              "#00FFFF",
              "#FF00FF",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <AnalysisTabWrapper>
        <Row justify="center">
          <Col md={12}>
            <Pie data={this.state.data} legend={false} />
          </Col>
        </Row>
      </AnalysisTabWrapper>
    );
  }
}

export default EmotionAnalysis;
