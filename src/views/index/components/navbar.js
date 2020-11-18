import React from 'react';
import { Menu } from 'antd';
import Router from '../../../router/asideRouter';
import {Link} from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Navbar extends React.Component {

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
        )
    }
}
export default Navbar