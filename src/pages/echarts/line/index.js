import React,{Component} from 'react';
import {Card} from 'antd';
import echarts from 'echarts';
import echartsTheme from '../echartTheme';

export default class Line extends Component{

    componentDidMount(){
        echarts.registerTheme("YLL",echartsTheme);
        this.getOption();
        this.getOption2();
        this.getOption3()
    }
    getOption(){
        var myCharts=echarts.init(document.getElementById('line1'));
        let option={
            title:{
                text:'用户骑行订单'
            },
            tooltip:{
                trigger:'axis'
            },
            color:echartsTheme.color,
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:"订单量",
                    type:'line',
                    data:[1000,2000,1500,3000,2000,1200,800]
                }
            ]
        }
        myCharts.setOption(option);
    }
    getOption2(){
        var myCharts=echarts.init(document.getElementById('line2'));
        let option={
            title:{
                text:'用户骑行订单'
            },
            tooltip:{
                trigger:'axis'
            },
            color:echartsTheme.color,
            legend:{
                data:['OFO订单量','摩拜订单量']
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:"OFO订单量",
                    type:'line',
                    stack:'总量',
                    data:[1000,2000,1500,3000,2000,1200,8000]
                },
                {
                    name:"摩拜订单量",
                    type:'line',
                    stack:'总量',
                    data:[1500,3000,4500,6000,8000,10000,15000]
                },
            ]
        }
        myCharts.setOption(option);
    }
    getOption3(){
        var myCharts=echarts.init(document.getElementById('line3'));
        let option={
            title:{
                text:'用户骑行订单'
            },
            tooltip:{
                trigger:'axis'
            },
            color:echartsTheme.color,
            legend:{
                data:['OFO订单量','摩拜订单量']
            },
            xAxis:{
                type:'category',
                boundaryGap: false,
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
               
                {
                    name:"订单量",
                    type:'line',
                    data:[1000,2000,2500,2000,600,300,800],
                    areaStyle: {}
                }
            ]
        }
        myCharts.setOption(option);
    }
    render(){
        return(
            <div>
                <Card title="折线图表之一">
                    <div id='line1' style={{ width: '100%', height: '500px'}}></div>
                </Card>
                <Card title="柱形图表之二" style={{marginTop:10}}>
                    <div id='line2' style={{ width: '100%', height: '500px'}}></div>
                </Card>
                <Card title="折线图表之三" style={{marginTop:10}}>
                    <div id='line3' style={{ width: '100%', height: '500px'}}></div>
                </Card>
            </div>
        )
    }
}