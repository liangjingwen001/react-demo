import React, {Component} from 'react';
import './login.css';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component {
	constructor() {
		super()
		this.state = {}
	}

	onFinish = values => {
		console.log('Received values of form: ', values);
	}

	toogleForm = () => {
		this.props.switchForm('register')
	}

	render() {
		return (
			<div className="container">
				<div className="title"><span>登录</span><span onClick={this.toogleForm}>账号注册</span></div>
				<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
				>
					<Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
						<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
					</Form.Item>
					<Form.Item name="code" rules={[{ required: true, message: 'Please input your code!' }]}>
						<Row gutter={13}>
							<Col span={14}>
								<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Code"/>
							</Col>
							<Col span={8}>
								<Button type="danger">获取验证码</Button>
							</Col>
						</Row>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}

}
 
export default Login;