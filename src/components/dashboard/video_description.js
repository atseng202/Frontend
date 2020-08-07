import React, { Component } from 'react';
import ApiUtils from '../helpers/apiUtils';

const api = new ApiUtils();
class VideoDescripiton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: null
        }
    }
    componentDidMount() {
        if (this.props.id) {
            this.getDescription();
        }
    }
    getDescription = async () => {
        try {
            const res = await api.videoDescription(this.props.id);
            this.setState({ description: res.data.description });
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
                {this.state.description &&
                    <p dangerouslySetInnerHTML={{ __html: this.state.description.replace(/\n/g, '<br />') }} >

                    </p>
                }
            </>
        );
    }
}

export default VideoDescripiton;