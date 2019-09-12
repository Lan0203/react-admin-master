import React,{Component} from 'react';
import {Card,Button ,Modal} from 'antd';
import './ui.less'
export default class Modals extends Component{
    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,

    }
    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    }
    handleCancel1=()=>{
        this.setState({
            showModal1:false
        })
    }
    handleCancel2=()=>{
        this.setState({
            showModal2:false
        })
    }
    handleCancel3=()=>{
        this.setState({
            showModal3:false
        })
    }
    handleCancel4=()=>{
        this.setState({
            showModal4:false
        })
    }
    handleOk1=()=>{
        this.setState({
            showModal1:false
        })
    }
    handleOk2=()=>{
        this.setState({
            showModal2:false
        })
    }
    handleOk3=()=>{
        this.setState({
            showModal3:false
        })
    }
    handleOk4=()=>{
        this.setState({
            showModal4:false
        })
    }
    handleConfirm =(type)=>{
        Modal[type]({
            title:'确认',
            content:'你确定吗',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type='primary' onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal2')}>自定义按钮</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal title="React" visible={this.state.showModal1} 
                    onCancel={this.handleCancel1} onOk={this.handleOk1}
                >
                    <p>兰木落</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal2} 
                    onCancel={this.handleCancel2} onOk={this.handleOk2}>
                    <p>兰木落</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal3} 
                    onCancel={this.handleCancel3} onOk={this.handleOk3}
                    style={{top:20}}
                >
                    <p>兰木落</p>
                </Modal>
                <Modal title="React" visible={this.state.showModal4} 
                    onCancel={this.handleCancel4} onOk={this.handleOk4}
                    wrapClassName="vertical-center-modal"
                >
                    <p>兰木落</p>
                </Modal>
                <Card title="信息确认框" className="card-wrap">
                    <Button type='primary' onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type='primary' onClick={()=>this.handleConfirm('warn')}>Warn</Button>
                </Card>
            </div>
        )
    }
}