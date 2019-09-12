import React,{Component} from 'react';
import {Button,Row,Col,Card,Dropdown,Icon,Menu} from 'antd';


const ButtonGroup = Button.Group;

export default class Buttons extends Component{
    constructor(){
        super();
        this.state={
            loading: false,
            iconLoading: false,
        }
    }
    enterLoading = () => {
        this.setState({ loading: true });
    }
    
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item key="1">1st item</Menu.Item>
              <Menu.Item key="2">2nd item</Menu.Item>
              <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return(
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={11}>
                        <div className='gutter-box'>
                            <Card>
                                <Button type='primary'>Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="danger">Danger</Button>
                            </Card>
                        </div>    
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <div className='gutter-box'>
                            <Card>
                                <Button type="primary">primary</Button>
                                <Button>secondary</Button>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Actions <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </Card>
                        </div>    
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <div className='gutter-box'>
                            <Card>
                                <Button type="primary" shape="circle" icon="search" />
                                <Button type="primary" icon="search">Search</Button>
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <br />
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <Button type="dashed" shape="circle" icon="search" />
                                <Button type="dashed" icon="search">Search</Button>
                            </Card>
                        </div>  
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <div className='gutter-box'>
                            <Card>
                                <Button type="primary" loading>Loading</Button>
                                <Button type="primary" size="small" loading>Loading</Button>
                                <br />
                                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
                                <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me!</Button>
                                <br />
                                <Button shape="circle" loading />
                                <Button type="primary" shape="circle" loading />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <div>
                            <Card>
                                <h4>Basic</h4>
                                <ButtonGroup>
                                    <Button disabled>L</Button>
                                    <Button disabled>M</Button>
                                    <Button disabled>R</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>L</Button>
                                    <Button>M</Button>
                                    <Button>R</Button>
                                </ButtonGroup>
                                <h4>With Icon</h4>
                                <ButtonGroup>
                                    <Button type="primary">
                                        <Icon type="left" />Go back
                                    </Button>
                                    <Button type="primary">
                                        Go forward<Icon type="right" />
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button type="primary" icon="cloud" />
                                    <Button type="primary" icon="cloud-download" />
                                </ButtonGroup>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
 }