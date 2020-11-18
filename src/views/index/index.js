import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.css';
import Router from '../../router/asideRouter';
import {Link} from 'react-router-dom';
import Container from './components/container'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends React.Component {

	renderMenu = ({key, title}) => {
		return (
			<Menu.Item key={key}>
				<Link to={key}>{title}</Link>
			</Menu.Item>
		)
	}

	renderSubMenu = ({key, title, child}) => {
		return (
			<SubMenu key={key} icon={<UserOutlined />} title={title}>
				{
					child && child.map((firstItem) => {
						return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
					})
				}
			</SubMenu>
		)
	}
	
	render() {
		return (
			<Layout className="layout-warp">
				<Header className="header">
				</Header>
				<Layout>
					<Sider width={250} className="site-layout-background">
						<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
						>
							{
								Router && Router.map((firstItem) => {
									return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
								})
							}
						</Menu>
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