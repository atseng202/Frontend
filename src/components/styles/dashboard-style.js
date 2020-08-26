import styled from "styled-components";
import { Row, Collapse, Tag, Tabs } from "antd";

export const VideoBannerRow = styled.div`
    background-color: #f9f9f9;
    padding: 50px;
    margin:0 !important;
`
export const VideoTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 30px;
`;

export const VideoInfo = styled.span`
    color: #4E7080;
    font-weight: 500;

    & > span{
        margin-right: 10px;
    }

    & > span > .anticon{
        margin-left: 5px;
    }
`
export const SideLink = styled.a`
    color: #1D2830;
    display: flex;
    line-height: 1;
    align-items: center;
    font-weight: 600;
    & .anticon{
        color: #f00;
        font-size:30px;
        margin-right:10px;
    }
`
export const MoreInfoCollapse = styled(Collapse)`

`

export const MoreInfoPanel = styled(Collapse.Panel)`

    & .ant-collapse-header{
        background-color: #1D2830;
        color: white !important;
        text-align: center;
        padding: 0px !important;
    }
    & .ant-collapse-content{
        background-color: #F9F9F9;
        font-size: 16px;
    }
`;

export const VideoTag = styled(Tag)`
    margin-top: 12px;
    background-color: #DCE8E7;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    color: #1D2830;
`;
export const AnalysisTabs = styled(Tabs)`
    & .ant-tabs-nav{
        background-color:#f9f9f9;

        & .ant-tabs-tab .ant-tabs-tab-btn{
            color: #1D2830;
            padding-left: 20px;
            padding-right: 20px;
        }
        & .ant-tabs-ink-bar{
            background-color: #1D2830;
            height:4px;
        }
    }
`;
export const AnalysisTabPane = styled(Tabs.TabPane)`
    padding-left: 50px;
    padding-right: 50px;
`;
export const AnalysisTabWrapper = styled.div`
    width:100%;
    background-color:#f9f9f9;
    padding-top:20px;
    padding-bottom:20px;
`

export const NERTablesContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const NERTableItem = styled.div`
    flex: 0 0 25%;
    padding: 0 10px;
`