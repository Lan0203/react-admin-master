import React,{Component} from 'react';
import { Card, Button, Table, Form, Select, Modal, message,DatePicker } from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

export default class Order extends Component{

    constructor(){
        super();
        this.state={
            pagination:'',
            list:[
                {id:'1001',order_sn:'1001',bike_sn:"b1001",user_name:'admin',mobile:"12345678909",distance:10,total_time:'1h',status:'已还车',start_time:'2019-09-17 09:00:00',end_time:'2019-09-17 10:00:00',total_fee:'2',user_pay:'1'}
            ],
            selectedItem:'',
            orderInfo:{},
            orderConfirmVisble:false
        }
        this.params={
            page:1,
        }
        this.columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
    }
    componentDidMount(){

        //this.requestList();
    }
    requestList = () =>{
        let _this=this;
        axios.ajax({
            url:'/order/list',
            data:{
                params:{
                    page:this.params.page
                },
                //isShowLoading:false
            }
        }).then((res)=>{
            let list=res.result.item_list.map((item,index)=>{
                item.key=index;
                return item
            });
            this.setState({
                list:list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page=current;
                    _this.requestList();
                })
            })
        })
    }
    handleConfirm = ()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        axios.ajax({
            url:'/order/ebike_info',
            data:{
                params:{
                    orderId: item.id
                },
                
            }
        }).then((res)=>{
            if(res.code ===0 ){
                this.setState({
                    orderInfo:res.result,
                    orderConfirmVisble: true
                })
            }
        })
    }
    // 结束订单
    handleFinishOrder = ()=>{
        let item = this.state.selectedItem;
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisble: false
                })
                this.requestList();
            }
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    handleRowSelectionChange = (selectedRowKeys, selectedRows) =>{
        let selectKey = selectedRowKeys;
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: selectedRows[0]
        })
    }
    openOrderDetail = ()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请先选择一条订单'
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    render(){
        const formItemLayout = {
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange:(selectedRowKeys, selectedRows)=>{
                this.handleRowSelectionChange(selectedRowKeys, selectedRows)
            }
        }
        return(
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table columns={this.columns} 
                        bordered
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        // onRow={(record, index) => {
                        //     return {
                        //         onClick: () => {
                        //             this.onRowClick(record, index);
                        //         }
                        //     };
                        // }}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisble}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisble:false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

class FilterForm extends Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                    <span style={{marginLeft:5}}>~</span>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker style={{marginLeft:5}} showTime format="YYYY-MM-DD HH:mm:ss" />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);