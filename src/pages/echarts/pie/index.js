import React,{Component} from 'react';
import {Card} from 'antd';
import echarts from 'echarts';
import echartsTheme from '../echartTheme';


export default class Pie extends Component{

    componentDidMount(){
        this.getOption();
        this.getOption2();
        this.getOption3()
    }
    getOption(){
        var myCharts=echarts.init(document.getElementById('pie1'));
        let option1={
            title:{
                text:'用户骑行订单',
                x : 'center'
            },
            tooltip:{
                trigger : 'item',
                formatter : "{a} <br/>{b} : {c} ({d}%)"
            },
            color:echartsTheme.color,
            legend:{
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            series: [
                {
                    name : '订单量',
                    type : 'pie',
                    radius : '55%',
                    center : [
                        '50%', '60%'
                    ],
                    data:[
                        {value:1000,name:'周一'},
                        {value: 1000,name: '周二'},
                        {value: 2000,name: '周三'},
                        {value: 1500,name: '周四'},
                        {value: 3000,name: '周五'},
                        {value: 2000, name: '周六'},
                        {value: 1200, name: '周日'},
                    ],
                    itemStyle : {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        myCharts.setOption(option1);
    }
    getOption2(){
        var myCharts=echarts.init(document.getElementById('pie2'));
        let option={
            title:{
                text: '用户骑行订单',
                x: 'center'
            },
            tooltip:{
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:echartsTheme.color,
            legend:{
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            series: [
                {
                    name: '订单量',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: [
                        '50%', '60%'
                    ],
                    data: [
                        {
                            value: 1000,
                            name: '周一'
                        }, {
                            value: 1000,
                            name: '周二'
                        }, {
                            value: 2000,
                            name: '周三'
                        }, {
                            value: 1500,
                            name: '周四'
                        }, {
                            value: 3000,
                            name: '周五'
                        }, {
                            value: 2000,
                            name: '周六'
                        }, {
                            value: 1200,
                            name: '周日'
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        myCharts.setOption(option);
    }
    getOption3(){
        var myCharts=echarts.init(document.getElementById('pie3'));
        let option = {
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '订单量',
                    type: 'pie',
                    radius: '55%',
                    center: [
                        '50%', '50%'
                    ],
                    data: [
                        {
                            value: 1000,
                            name: '周一'
                        }, {
                            value: 1000,
                            name: '周二'
                        }, {
                            value: 2000,
                            name: '周三'
                        }, {
                            value: 1500,
                            name: '周四'
                        }, {
                            value: 3000,
                            name: '周五'
                        }, {
                            value: 2000,
                            name: '周六'
                        }, {
                            value: 1200,
                            name: '周日'
                        }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        }
        myCharts.setOption(option);
    }
    render(){
        return(
            <div>
                <Card title="饼形图表之一">
                    <div id='pie1' style={{ width: '100%', height: '500px'}}></div>
                </Card>
                <Card title="柱形图表之二" style={{marginTop:10}}>
                    <div id='pie2' style={{ width: '100%', height: '500px'}}></div>
                </Card>
                <Card title="折线图表之三" style={{marginTop:10}}>
                    <div id='pie3' style={{ width: '100%', height: '500px'}}></div>
                </Card>
            </div>
        )
    }
}