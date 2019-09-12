import React,{Component} from 'react';
import {Card,Spin,Icon,Alert} from 'antd';
import './ui.less';

export default class Loadings extends Component{


    render(){
        const icon=<Icon type='loading' style={{fontSize:26}}/>
        return(
            <div>
                <Card title="Spin用法" className='card-wrap'>
                    <Spin size='small' />
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin indicator={icon} />
                </Card>
                <Card title="内容遮照" className='card-wrap'>
                    <Alert message="React" description="欢迎" type="warning" />
                    <Alert message="React" description="欢迎" type="success" />

                    <Spin>
                        <Alert message="React" description="欢迎" type="error" />
                    </Spin>
                    <Spin tip="记载中..." indicator={icon}>
                        <Alert message="React" description="欢迎" type="info" />
                    </Spin>
                </Card>
            </div>
        )
    }
}