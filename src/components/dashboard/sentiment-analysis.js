import React, { Component } from 'react';
import { AnalysisTabWrapper } from '../styles/dashboard-style';
import { Row, Col } from 'antd';
import { Pie } from 'react-chartjs-2';

class SentimentAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [
                    'Negative',
                    'Positive',
                    'Neutral'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            }
        }
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

export default SentimentAnalysis;