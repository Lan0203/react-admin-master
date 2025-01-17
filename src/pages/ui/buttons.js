import React,{Component} from 'react';
import {Card,Button ,Radio} from 'antd';
import './ui.less'

export default class Buttons extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            buttonSize:'default'
        }
        this.handleCloseLoading=this.handleCloseLoading.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleCloseLoading(){
        this.setState({
            loading:false
        })
    }
    handleChange(e){
        this.setState({
            buttonSize:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>default</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon='plus'>创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon='search' shape='circle'></Button>
                    <Button icon='search'type="primary">搜索</Button>
                    <Button icon='download'type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape='circle' loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                   <Button.Group>
                       <Button type='primary' icon="left">返回</Button>
                       <Button type='primary' icon="right">前进</Button>
                   </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.buttonSize}>Primary</Button>
                    <Button size={this.state.buttonSize}>default</Button>
                    <Button type="dashed" size={this.state.buttonSize}>Dashed</Button>
                    <Button type="danger" size={this.state.buttonSize}>Danger</Button>
                    <Button disabled size={this.state.buttonSize}>default</Button>
                </Card>
            </div>
        )
    }
}