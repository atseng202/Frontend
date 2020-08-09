import React from 'react'
import { Row, Col, notification } from 'antd'
import { withRouter } from 'next/router'
import { CheckCircleFilled, YoutubeFilled, DownOutlined } from "@ant-design/icons";
import moment from "moment";
import Main from '../components/layouts/main'
import { VideoTitle, VideoBannerRow, VideoInfo, SideLink, MoreInfoCollapse, MoreInfoPanel, VideoTag, AnalysisTabs, AnalysisTabPane, AnalysisTabWrapper } from '../components/styles/dashboard-style'
import SentimentAnalysis from '../components/dashboard/sentiment-analysis';
import { youtubeParser } from '../components/helpers/urlParser';
import ApiUtils from '../components/helpers/apiUtils';
import VideoDescripiton from '../components/dashboard/video_description';
import VideoTags from '../components/dashboard/video-tag';
const api = new ApiUtils();
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            videoInfo: null
        }
    }
    static async getInitialProps() {
        return {};
    }
    componentDidMount() {
        this.setState({ id: this.props.router?.query?.id }, async () => {
            await this.getVideoInfo();
        });
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (this.props.router?.query?.id != newProps.router?.query?.id && newProps.router?.query?.id) {
            this.setState({
                id: newProps.router?.query?.id,
                videoInfo: null,
            }, async () => {
                await this.getVideoInfo();
            })
        }
    }
    getVideoInfo = async () => {
        try {
            const res = await api.videoInfo(this.state.id);
            this.setState({ videoInfo: res.data });
        } catch (error) {
            notification.error({
                message: "Error",
                description: "Something went wrong!"
            })
        }
    }
    render() {
        return (
            <Main title="Dashboard">
                {this.state.id && this.state.videoInfo &&
                    <VideoBannerRow>
                        <Row gutter={20}>
                            <Col md={8}>
                                <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${this.state.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Col>
                            <Col md={12}>
                                <VideoTitle>
                                    {this.state.videoInfo.title}
                                </VideoTitle>
                                <VideoInfo>
                                    <span className="channel-name">{this.state.videoInfo.channelTitle}
                                        {/* <CheckCircleFilled /> */}
                                    </span>
                                    <span className="views">{this.state.videoInfo.viewCount} views</span>
                                    <span className="posted-at">{moment.utc(this.state.videoInfo.publishedAt).local().fromNow()}</span>
                                </VideoInfo>
                            </Col>
                            <Col md={4}>
                                <SideLink href={`https://www.youtube.com/watch?v=${this.state.id}`} target="_blank"><YoutubeFilled /> View on YouTube</SideLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={20}>
                                <MoreInfoCollapse bordered={false}>
                                    <MoreInfoPanel header={<DownOutlined />} showArrow={false}>
                                        <VideoDescripiton id={this.state.id} />
                                    </MoreInfoPanel>
                                </MoreInfoCollapse>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <VideoTags id={this.state.id} />
                            </Col>
                        </Row>
                    </VideoBannerRow>
                }
                <Row>
                    <Col span={24}>
                        <AnalysisTabs centered>
                            <AnalysisTabPane tab="Sentiment Analysis" key="sa">
                                <SentimentAnalysis />
                            </AnalysisTabPane>
                            <AnalysisTabPane tab="Comments" key="cm">
                                Content of Tab Pane 1
                        </AnalysisTabPane>
                            <AnalysisTabPane tab="Emotion Analysis" key="ea">
                                Content of Tab Pane 1
                        </AnalysisTabPane>
                            <AnalysisTabPane tab="NER" key="ner">
                                Content of Tab Pane 1
                        </AnalysisTabPane>
                            <AnalysisTabPane tab="LDA" key="lda">
                                Content of Tab Pane 1
                        </AnalysisTabPane>
                            <AnalysisTabPane tab="Wordcloud" key="wc">
                                Content of Tab Pane 1
                        </AnalysisTabPane>
                        </AnalysisTabs>
                    </Col>
                </Row>
            </Main>
        );
    }
}

export default withRouter(Dashboard);
