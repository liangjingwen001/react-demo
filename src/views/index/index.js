import React from 'react';
import { Layout } from 'antd';
import './index.css';
import Container from './components/container'
import Navbar from './components/navbar'
import Head from './components/head'

const { Header, Content, Sider } = Layout;

class Index extends React.Component {
	
	render() {
		return (
			<Layout className="layout-warp">
				<Header className="header">
					<Head />
				</Header>
				<Layout>
					<Sider width={250} className="site-layout-background">
						<Navbar />
					</Sider>
					<Content className="layout-container">
						<Container />
					</Content>	
				</Layout>
			</Layout>
		)
	}
}

export default Index;