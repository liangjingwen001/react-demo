import React, {Component} from 'react';
import './login.css';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {validate_password} from '../../utils/validate';
import {login} from '../../api/account'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: ''
		}
	}

	onFinish = (val) => {
		login(val)
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		})
	}

	toogleForm = () => {
		this.props.switchForm('register')
	}

	getCode = () => {
		console.log(this.state.email)
	}

	getPassword = (e) => {
		this.setState({
			email: e.target.value
		})
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
					<Form.Item name="username" rules={[{ required: true, message: '邮箱不能为空!' }, {type: 'email', message: '邮箱格式不正确！'}]}>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={this.getPassword}/>
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: '密码不能为空!' }]}>
					{/* <Form.Item name="password" rules={[{ required: true, message: '密码不能为空!' }, {min: 6, message: '密码不能小于6位'}, {max: 8, message: '密码不能大于8位'}, {pattern: validate_password, message: '请输入数字'}]}> */}
						<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
					</Form.Item>
					<Form.Item name="code" rules={[{ required: true, message: '验证码不能为空!'}]}>
						<Row gutter={13}>
							<Col span={14}>
								<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Code"/>
							</Col>
							<Col span={8}>
								<Button type="danger" onClick={this.getCode}>获取验证码</Button>
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