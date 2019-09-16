import React, { Component } from 'react'
import { Card, Row , Col , Modal} from 'antd'
import './ui.less';

const { Meta } = Card;

export default class Gallery extends Component{

    constructor(){
        super();
        this.state={
            currentImg:'',
            visible:false
        }
    }
    openGallery= (item)=>{
        this.setState({
            currentImg:'/gallery/' + item,
            visible:true
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        })
    }
    handleOk =()=>{
        this.setState({
            visible:false
        })
    }
    render(){
        const imgs=[
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','20.png'],
            ['21.png','22.png','23.png','24.png','25.png'],
        ]
        const imgList=imgs.map((list) =>{
            return list.map((item)=>
                <Card cover={<img src={'/gallery/' + item} onClick={()=>this.openGallery(item)}/>} style={{marginBottom:"10px"}}>
                    <Meta title="React" description="兰木落"/>
                </Card>
            )
        })
        return(
            <div className="card-wrap">
                <Row gutter={16}>
                    <Col md={4}>
                        {imgList[0]}
                    </Col>
                    <Col md={4}>
                        {imgList[1]}
                    </Col>
                    <Col md={4}>
                        {imgList[2]}
                    </Col>
                    <Col md={4}>
                        {imgList[3]}
                    </Col>
                    <Col md={5}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal title="图片画廊" visible={this.state.visible} 
                    onCancel={this.handleCancel} onOk={this.handleOk}
                    width={300} height={500}
                >
                    {<img src={this.state.currentImg} width="250px" height="360px"/>}
                </Modal>
            </div>
        )
    }
}