import React,{Component} from 'react';
import {Card,Form} from 'antd';
import axios from '../../axios/index';
import BaseForm from '../../components/BaseForm';

export default class BikeMap extends Component{

    state={}
    map=""
    formList=[
        {
            type:'城市',
            label:"城市",
            field:"city",
            placeholder:"请选择城市",
            initialValue:"0",
            list:[{id:'0',name:'全部'},{id:'1',name:'北京'},{id:'2',name:'郑州'},{id:'3',name:"上海"},{id:"4",name:"广州"}],
            width:80
        },{
            type:'时间查询'
        },{
            type:'SELECT',
            label:'订单状态',
            field:'order_status',
            placeholder:"请选择订单状态",
            initialValue:'0',
            list:[{id:'0',name:'全部'},{id:'1',name:'进行中'},{id:'2',name:'订单结束'}],
            width:100
        }
    ]
    requestList = ()=>{
        axios.ajax({
            url:"/map/bike_list",
            data:{
                params:this.params
            }
        }).then((res)=>{
            if(res.code === 0){
                this.setState({
                    total_count:res.result.total_count
                })
                this.renderMap(res)
            }
        })
    }
    componentDidMount(){
        this.requestList()
    }
    handleFilterSubmit =(filterParams)=>{
        this.params=filterParams;
        this.requestList();
    }
    //渲染地图数据
    renderMap =(res)=>{
        let list=res.result.route_list;
        this.map= new window.BMap.Map('container');
        let gps1=list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0],gps1[1]);
        let gps2=list[list.length-1].split(',');
        let endPoint = new window.BMap.Point(gps2[0],gps2[1]);
        // this.map.centerAndZom(endPoint,11);

        let startPointIcon = new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor: new window.BMap.Size(18, 42)
        })
        let startMarker = new window.BMap.Marker(startPoint, { icon: startPointIcon});
        this.map.addOverlay(startMarker);
        let endPointIcon = new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor: new window.BMap.Size(18, 42)
        })
        let endMarker = new window.BMap.Marker(endPoint, { icon: endPointIcon });
        this.map.addOverlay(endMarker);

        //绘制路线
        let routeList = [];
        list.forEach((item)=>{
            let p=item.split(',');
            routeList.push(new window.BMap.Point(p[0],p[1]))
        })
        

        let polyline = new window.BMap.Polyline(routeList,{
            strokeColor:'#ef4136',
            strokeWeight:3,
            strokeOpacity:1
        })
        this.map.addOverlay(polyline);
        this.map.centerAndZoom(endPoint, 11);

        //绘制服务区
        let servicePointList=[];
        let serviceList=res.result.service_list;
        serviceList.forEach((item)=>{
            servicePointList.push(new window.BMap.Point(item.lon,item.lat))
        })
        // 绘制服务区
        let polyServiceLine = new window.BMap.Polygon(servicePointList, {
            strokeColor: '#ef4136',
            strokeWeight: 4,
            strokeOpacity: 1,
            fillColor: '#ff8605',
            fillOpacity:0.4
        })
        this.map.addOverlay(polyServiceLine);

        //添加地图中的自行车图标
        let bikeList=res.result.bike_list;
        let bikeIcon = new window.BMap.Icon('/assets/bike.jpg',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor: new window.BMap.Size(18, 42),
        })
       
        bikeList.forEach((item)=>{
            let q=item.split(',');
            let point =new window.BMap.Point(q[0],q[1]);
            let bikeMarker = new window.BMap.Marker(point,{icon:bikeIcon})
            this.map.addOverlay(bikeMarker)
        })
    }
    render(){
        return(
            <div>
                <Card>
                    <BaseForm formList={this.formList} 
                        filterSubmit={this.handleFilterSubmit}/>
                </Card>
                <Card style={{marginTop:10}}>
                    <div>共{this.state.total_count}辆车</div>
                    <div id="container" style={{height:500}}></div>
                </Card>
            </div>
        )
    }
}