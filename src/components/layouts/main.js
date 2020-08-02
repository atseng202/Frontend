import Head from 'next/head'
import Headers from './headers';
import { Layout } from 'antd';
// import Wrapper from './Wrapper'
// import Nav from 'components/Nav'
// import Footer from 'components/Footer'
const { Content, Footer } = Layout;

const Main = ({ children, title = 'This is the default title' }) => (
    <Layout className="layout">
        <Headers />
        <Content>
            <div className="site-layout-content">
                {children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
)

export default Main;