import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom'
import MenuConfig from '../../config/menuConfig.js';
import './index.less'

const { SubMenu } = Menu;

export default class NavLeft extends Component{

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
    render(){
        return(
            <div>
                <div className="logo">
                    <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
                    <h1>兰木落</h1>
                </div>
                <Menu theme="dark"  mode="inline">
                    {this.state.menuList}
                </Menu>
            </div>
        )
    }
}