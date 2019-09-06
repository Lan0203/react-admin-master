import React,{Component} from 'react';
import { Row , Col } from 'antd';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import NavLeft from './components/NavLeft/index.js';

export default class Admin extends Component{

    render(){
        return(
            <Row className="">
                <Col span={4}>
                    <NavLeft />
                </Col>
                <Col span={20}>
                    <Header/>
                    <Row>
                        content
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}