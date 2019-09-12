import React,{Component} from 'react';
import {HashRouter as Router ,Route ,Link} from 'react-router-dom';
export default class Home extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/main'>Main</Link>
                    </li>
                    <li>
                        <Link to='/imooc'>imooc</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}