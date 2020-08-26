const axios = require('axios');
const META_API_URL = process.env.REACT_APP_META_API_ENDPOINT;

class ApiUtils {
    constructor() {
        this.axios = axios.create({})
        this.axios.interceptors.request.use(function (config) {
            config = {
                ...config,
                url: process.env.API_BASEURL + config.url
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    }
    videoInfo = (videoId) => {
        return this.axios({
            method: 'GET',
            url: `/video/${videoId}`,
        })
    }
    videoDescription = (videoId) => {
        return this.axios({
            method: 'GET',
            url: `/video/${videoId}/description`,
        })
    }
    videoTag = (videoId) => {
        return this.axios({
            method: 'GET',
            url: `/video/${videoId}/keywords`,
        })
    }
    //to be changed when backend lda completed
    topics = (videoId, numTopics) => {
        return this.axios({
            method: 'GET',
            url: `/components/schemas/${videoId}/?n=${numTopics}`,
        })
    }
}
export default ApiUtils;
