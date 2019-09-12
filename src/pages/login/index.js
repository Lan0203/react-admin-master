import React, { Component } from 'react';
import {Form, Icon, Input, Button, message, Row, Col, Card} from 'antd';

class Login extends Component {
	constructor(){
		super();
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if(values.username === 'admin' && values.password === 'admin'){
                    //this.props.GOLOGIN(values.username,values.password,this.props.history);
                }
                else{
                    message.error("用户名或密码错误，请重新输入！");
                }
			}
		  });
	}
	
	componentDidMount() {
		  console.log("Login渲染完毕");
		  console.log("this.props==",this.props)
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Row>
				<Col span={4} offset={10}>
					<Card title={<div style={{textAlign:'center'}}>用户登录</div>} style={{marginTop:"70%"}}>
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item>
								{getFieldDecorator('username', {
									rules: [{ required: true, message: '请输入用户名!' }],
								})(
									<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />,
								)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('password', {
									rules: [{ required: true, message: '请输入密码!' }],
								})(
									<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>,
								)}
							</Form.Item>
							<Form.Item>
								<Button block type="primary" htmlType="submit" className="login-form-button">
									登录
								</Button>
							</Form.Item>
						</Form>
					</Card>
				</Col>
			</Row>
		
		);
	}
	
}


export default Form.create()(Login)