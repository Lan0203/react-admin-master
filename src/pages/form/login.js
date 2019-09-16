import React,{Component} from 'react';
import {Card, Form,Button,Input,message, Icon,Checkbox} from 'antd';

const FormItem=Form.Item;

class FormLogin extends Component{

    handleSubmit=()=>{
        let userInfo =this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.username}, 恭喜通过本次表单验证,当前密码是:${userInfo.password}`)
            }
        })
    }
    render(){
        const { getFieldDecorator } =this.props.form;
        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="水平表单" style={{marginTop:"10px"}}>
                    <Form style={{width:'300px'}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' },
                                        {min:5,max:10,message:'长度不在范围内'},
                                        {pattern:new RegExp('^\\w+$','g'),message:'用户名必须为英文字母或数字'}
                                    ],
								})(
									<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />,
							)}
                            
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
									rules: [{ required: true, message: '请输入密码!' }],
								})(
									<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>,
							)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                    valuePropName:'checked',
									initialValue:true
								})(
									<Checkbox>记住密码</Checkbox>
                            )}
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default Form.create()(FormLogin);