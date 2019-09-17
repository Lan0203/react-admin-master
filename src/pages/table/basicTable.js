import React,{Component} from 'react';
import { Card, Table, Modal, Button, message} from 'antd';
import axios from '../../axios/index';
import Untils from '../../utils/utils'
export default class BasicTable extends Component{

    constructor(){
        super();
        this.state={
            dataSource:[],
            dataSource2:[
                // {id:'0',userName:'Jack',sex:'1',state:'5',interest:'3',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'},
                // {id:'1',userName:'Tom',sex:'2',state:'4',interest:'5',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'},
                // {id:'2', userName:'Lily',sex:'1',state:'2',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'},
                // {"id": 1,"userName": "侯静","sex": 2,"state": 3,"interest": 6,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 2,"userName": "胡秀兰", "sex": 2,"state": 5, "interest": 8,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 3,"userName": "田静","sex": 2,"state": 5,"interest": 4,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 4,"userName": "唐娟","sex": 1,"state": 2,"interest": 5,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 5,"userName": "梁芳","sex": 2,"state": 2,"interest": 4,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 6,"userName": "方磊","sex": 1, "state": 5,"interest": 4,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 7,"userName": "卢娜","sex": 1,"state": 1,"interest": 2,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 8,"userName": "于超","sex": 1,"state": 2,"interest": 4,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 9,"userName": "李强","sex": 2,"state": 4,"interest": 6,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"},
                // {"id": 10,"userName": "谭娜","sex": 2,"state": 3,"interest": 4,"birthday": "1995-09-03","address": "河南郑州","time": "06:00"}
            ],
            selectedRowKeys:[],
            selectedItem:''
        }
        this.columns = [
            {
                title:'ID',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex){
                    return sex ===1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
    }
    componentDidMount(){
        const data = [
            {id:'0',userName:'Jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ];
        data.map((item,index)=>{
            item.key = index;
            return item
        })
        let data1=this.state.dataSource2;
        data1.map((item,index)=>{
            item.key = index+1;
            return item
        })
        console.log("data1==",data1)
        this.setState({
            dataSource: data,
            dataSource2:data1
        })
        this.request();
    }
    //动态获取
    request =()=>{
        let _this = this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                },
                //isShowLoading:false
            },
            
        }).then((res)=>{
            if(res.code ===0){
                let list=res.result.list.map((item,index)=>{
                    item.key=index;
                    return item
                })
                this.setState({
                    dataSource2:list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination: Untils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                    
                })
            }
        })
    }
    onRowClick = (record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem: record
        })
    }
    handleDelete = (()=>{
        let rows=this.state.selectedRowKeys;
        let ids=[]
        rows.map((item)=>ids.push(item.id))
        Modal.confirm({
            title:'删除提示',
            content:'确定要删除这些数据吗',
            onOk:()=>{
                message.success('删除成功');
                //this.request();
            }
        })
    })
    render(){
        const {selectedRowKeys} =this.state
        const rowSelection={
            type:"radio",
            selectedRowKeys,
            
        }
        const rowCheckSelection={
            type:"checkbox",
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return(
            <div>
                <Card title="基础表格">
                    <Table bordered columns={this.columns} pagination={false}
                        dataSource={this.state.dataSource}/>
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table bordered columns={this.columns} pagination={false}
                        dataSource={this.state.dataSource2}/>
                </Card>
                <Card title="Mock-单选表格" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            };
                        }}
                        columns={this.columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选表格" style={{margin:'10px 0'}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table 
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={this.columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-分页表格" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        columns={this.columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}