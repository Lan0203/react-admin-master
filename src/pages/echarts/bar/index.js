import React,{Component} from 'react';
import {Card} from 'antd';
import echarts from 'echarts';
import echartsTheme from '../echartTheme';

export default class Bar extends Component{

    componentDidMount(){
        echarts.registerTheme("YLL",echartsTheme);
        this.getOption();
        this.getOption2();
    }
    getOption(){
        var myCharts=echarts.init(document.getElementById('bar1'));
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
                    type:'bar',
                    data:[1000,2000,1500,3000,2000,1200,800]
                }
            ]
        }
        myCharts.setOption(option);
    }
    getOption2(){
        var myCharts=echarts.init(document.getElementById('bar2'));
        let option={
            title:{
                text:'用户骑行订单'
            },
            tooltip:{
                trigger:'axis'
            },
            color:echartsTheme.color,
            legend:{
                data:['OFO','摩拜','小蓝']
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:"OFO",
                    type:'bar',
                    data:[1000,2000,1500,3000,2000,1200,8000]
                },
                {
                    name:"摩拜",
                    type:'bar',
                    data:[1500,3000,4500,6000,8000,10000,15000]
                },
                {
                    name:"小蓝",
                    type:'bar',
                    data:[1000,2000,2500,4000,6000,7000,8000]
                }
            ]
        }
        myCharts.setOption(option);
    }
    render(){
        return(
            <div>
                <Card title="柱形图表之一">
                    <div id='bar1' style={{ width: '100%', height: '500px'}}></div>
                </Card>
                <Card title="柱形图表之二" style={{marginTop:10}}>
                    <div id='bar2' style={{ width: '100%', height: '500px'}}></div>
                </Card>
            </div>
        )
    }
}