import React,{Component} from 'react';
import {HashRouter as Router , Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/index'
import Buttons from './pages/ui/buttons.js';
import NoMatch from './pages/nomatch';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notice';
import Messages from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
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
                                <Route path='/ui/notification' component={Notification} />
                                <Route path='/ui/messages' component={Messages} />
                                <Route path='/ui/tabs' component={Tabs} />
                                <Route path='/ui/gallery' component={Gallery} />
                                <Route path='/ui/carousel' component={Carousels} />
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