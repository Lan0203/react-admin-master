import React,{Component} from 'react';
import {HashRouter as Router , Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons.js';
import NoMatch from './pages/nomatch';
export default class IRouter extends Component{

    render(){
        return(
            <Router>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons} />
                                <Route component={NoMatch} />  
                            </Switch>
                        </Admin>
                    } />
                    <Route path='/order/detail' component={Login} />
                </App>
            </Router>
        )
    }
}