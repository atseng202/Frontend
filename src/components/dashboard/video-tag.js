import React, { Component } from 'react';
import ApiUtils from '../helpers/apiUtils';
import { VideoTag } from '../styles/dashboard-style';
const api = new ApiUtils();

class VideoTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        }
    }
    componentDidMount() {
        if (this.props.id) {
            this.getVideoTag();
        }
    }
    getVideoTag = async () => {
        try {
            const res = await api.videoTag(this.props.id);
            this.setState({ tags: res.data.keywords });
        } catch (error) {
            notification.error({
                message: "Error",
                description: "Something went wrong!"
            })
        }
    }
    render() {
        return (
            <>
                {this.state.tags.map(t => (
                    <VideoTag>{t}</VideoTag>
                ))

                }
            </>
        );
    }
}

export default VideoTags;