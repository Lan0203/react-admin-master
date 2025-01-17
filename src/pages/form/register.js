import React,{Component} from 'react';
import {Card, Form,Button,Input,message, Upload,Icon,InputNumber,
    Checkbox,Radio,Select,Switch,DatePicker,TimePicker} from 'antd';
import moment from 'moment'

const FormItem=Form.Item;
const RadioGroup=Radio.Group;
const Option=Select.Option;
const TextArea=Input.TextArea;

class FormRegister extends Component{

    state={
        loading:'' ,
        userImg:''
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
                userImg:imageUrl,
              loading: false,
            }),
          );
        }
    };
    handleSubmit = ()=>{
        let userInfo =this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success('注册成功')
            }
        })
    }
    render(){
        const { getFieldDecorator } =this.props.form;
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4,
            },
            wrapperCol:{
                xs:24,
                sm:12,
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,offset:4
                }
            }
        }
        return(
            <div>
                <Card title="注册表单">
                   <Form>
                        <FormItem label='用户名' {...formItemLayout}>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' },],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />,
							)}
                        </FormItem>   
                        <FormItem label='密码' {...formItemLayout}>
                            {getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>,
							)}
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {getFieldDecorator('sex', {
                                initialValue:'1'
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>
							)}
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {getFieldDecorator('age', {
								initialValue:18
							})(
								<InputNumber />	
							)}
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {getFieldDecorator('state', {
								initialValue:'2'
							})(
								<Select>
                                    <Option value="1">咸鱼一条</Option>
                                    <Option value="2">风华浪子</Option>
                                    <Option value="3">北大才子一枚</Option>
                                    <Option value="4">百度FE</Option>
                                    <Option value="5">创业者</Option>
                                </Select>
							)}
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {getFieldDecorator('interest', {
								initialValue:['2','3','5']
							})(
								<Select mode="multiple">
                                    <Option value="1">游泳</Option>
                                    <Option value="2">篮球</Option>
                                    <Option value="3">唱歌</Option>
                                    <Option value="4">跑步</Option>
                                    <Option value="5">爬山</Option>
                                    <Option value="6">看书</Option>
                                    <Option value="7">足球</Option>
                                    <Option value="8">桌球</Option>
                                </Select>
							)}
                        </FormItem>
                        <FormItem label='是否已婚' {...formItemLayout}>
                            {getFieldDecorator('isMarried', {
                                valuePropName:"checked",
								initialValue:true
							})(
								<Switch />
							)}
                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {getFieldDecorator('birthday', {
								initialValue:moment('2019-09-16 15:01:30')
							})(
								<DatePicker  showTime format="YYYY-MM-DD HH:mm:ss"/>
							)}
                        </FormItem>
                        <FormItem label='联系地址' {...formItemLayout}>
                            {getFieldDecorator('address', {
								initialValue:'河南省郑州市'
							})(
								<TextArea autosize={{minRows:2,maxRows:6}} />
							)}
                        </FormItem>
                        <FormItem label='早起时间' {...formItemLayout}>
                            {getFieldDecorator('time', {
							})(
								<TimePicker placeholder="选择时间" />
							)}
                        </FormItem>
                        <FormItem label='头像' {...formItemLayout}>
                            {getFieldDecorator('userImg', {
							})(
                                <Upload listType="picture-card" showUploadList={false} 
                                    onChange={this.handleChange}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                >
                                    {this.state.userImg ? <img src={this.state.userImg} alt=""/> : <Icon type="plus"/> } 
                                </Upload>
							)}
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {getFieldDecorator('read')(
                                <Checkbox>我已阅读过<a href="#">协议</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form> 
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister);