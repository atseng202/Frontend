import React from 'react'
import { Layout, Menu, Row, Col, Button, Input, notification } from 'antd';
import { withRouter } from "next/router";
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { HeaderSearch } from '../styles/dashboard-style';
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { youtubeParser } from '../helpers/urlParser';

const { Header } = Layout;
class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: false
        }
    }
    handleAnalyzeClick = () => {
        this.setState({ showSearch: !this.state.showSearch });
    }
    handleOnSearch = (value) => {
        const id = youtubeParser(value);
        if (id) {
            this.props.router.push(`/dashboard?id=${id}`);
            this.setState({ showSearch: false })
        } else {
            notification.error({
                message: "Error",
                description: "Invalid URL Enterd"
            })
        }
    }
    render() {
        return (
            <>
                <Header>
                    <Row justify="space-between">
                        <Col>
                            <div className="logo" />
                        </Col>
                        <Col>
                            <Button type="primary" onClick={this.handleAnalyzeClick}>Analyze {!this.state.showSearch && <DownOutlined />}{this.state.showSearch && <UpOutlined />}</Button>
                        </Col>
                    </Row>
                    {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}

                </Header>
                {this.state.showSearch &&
                    <Header>
                        <HeaderSearch
                            placeholder="Enter Video URL"
                            size="large"
                            onSearch={this.handleOnSearch} />
                    </Header>
                }
            </>
        );
    }
}

export default withRouter(Headers);

