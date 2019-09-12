import React,{Component} from 'react';
import {HashRouter as Router ,Route ,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Main from './Main';
export default class IRouter extends Component{

    render(){
        return(
            <Router>
                <Home>
                    <Route path="/main" component={Main}/>
                    <Route path="/about" component={About}/>
                </Home>
            </Router>
        )
    }
}