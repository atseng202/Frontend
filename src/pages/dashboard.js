import React from 'react'
import Main from '../components/layouts/main'
import { Row, Col } from 'antd'
import { CheckCircleFilled, YoutubeFilled, DownOutlined } from "@ant-design/icons";
import { VideoTitle, VideoBannerRow, VideoInfo, SideLink, MoreInfoCollapse, MoreInfoPanel, VideoTag, AnalysisTabs, AnalysisTabPane, AnalysisTabWrapper } from '../components/styles/dashboard-style'
import SentimentAnalysis from '../components/dashboard/sentiment-analysis';

function Dashboard() {
    return (
        <Main title="Dashboard">
            <VideoBannerRow>
                <Row gutter={20}>
                    <Col md={8}>
                        <iframe width="100%" height="200" src="https://www.youtube.com/embed/L7OLY4HCctQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col md={12}>
                        <VideoTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </VideoTitle>
                        <VideoInfo>
                            <span className="channel-name">ABS News <CheckCircleFilled /></span>
                            <span className="views">6.4 views</span>
                            <span className="posted-at">3 years ago</span>
                        </VideoInfo>
                    </Col>
                    <Col md={4}>
                        <SideLink>
                            <YoutubeFilled /> View on YouTube
                    </SideLink>
                    </Col>
                </Row>
                <Row>
                    <Col md={20}>
                        <MoreInfoCollapse bordered={false}>
                            <MoreInfoPanel header={<DownOutlined />} showArrow={false}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </MoreInfoPanel>
                        </MoreInfoCollapse>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <VideoTag>Lorem</VideoTag>
                        <VideoTag>Lorem</VideoTag>
                        <VideoTag>Lorem</VideoTag>
                        <VideoTag>Lorem</VideoTag>
                        <VideoTag>Lorem</VideoTag>
                    </Col>
                </Row>
            </VideoBannerRow>
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
    )
}

export default Dashboard
