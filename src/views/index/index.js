import React from 'react';
import { Layout } from 'antd';
import './index.css';
import Container from './components/container'
import Navbar from './components/navbar'
import Head from './components/head'

const { Header, Content, Sider } = Layout;

export const {Provider,Consumer} = React.createContext("");

class Index extends React.Component {
	data = {
		title: '源码时代',
		des: '学习资料'
	}
	render() {
		return (
			<Provider value={this.data}>
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
			</Provider>
		)
	}
}

export default Index;