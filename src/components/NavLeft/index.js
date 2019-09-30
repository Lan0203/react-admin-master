import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom';
import MenuConfig from '../../config/menuConfig.js';
import './index.less'

const { SubMenu } = Menu;
export default class NavLeft extends Component{

    constructor(){
        super();
        this.state={
          openKeys:'',
          firstHide: true,
        }
    }
    UNSAFE_componentWillMount(){
        const menuTreeNode=this.renderMenu(MenuConfig);
        this.setState({
            menuList:menuTreeNode
        })
    }
    //菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={<span><Icon type={item.icon} />{item.title}</span>} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return  <Menu.Item title={item.title} key={item.key}>
                        <NavLink to={item.key}><Icon type={item.icon} />{item.title}</NavLink>
                    </Menu.Item>
        })
    }
    onOpenChange = (v) =>{
        this.setState({
          openKey: v[v.length - 1],
          firstHide: false,
        })
    }
    
    render(){
        return(
            <div>
                <div className="logo">
                    <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
                    <h1>兰木落</h1>
                </div>

                <Menu theme="dark"  mode="inline" openKeys={this.state.firstHide ? null : [this.state.openKey]} 
                    onOpenChange={this.onOpenChange} defaultSelectedKeys={['/home']}
                    >
                    {this.state.menuList}
                </Menu>
            </div>
        )
    }
}