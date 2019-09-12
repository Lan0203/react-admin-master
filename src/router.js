import React,{Component} from 'react';
import {HashRouter as Router , Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons.js';
import NoMatch from './pages/nomatch';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
export default class IRouter extends Component{

    render(){
        return(
            <Router>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/ui/buttons' component={Buttons} />
                                <Route path='/ui/modals' component={Modals} />
                                <Route path='/ui/loading' component={Loadings} />
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