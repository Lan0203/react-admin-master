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
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import City from './pages/city';
import Order from './pages/order';
import Common from './common';
import OrderDetail from './pages/order/detail';
export default class IRouter extends Component{

    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path="/common" render={()=>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        } />
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
                                    <Route path='/form/login' component={FormLogin} />
                                    <Route path='/form/register' component={FormRegister} />
                                    <Route path='/table/basic' component={BasicTable} />
                                    <Route path='/table/high' component={HighTable} />
                                    <Route path='/city' component={City} />
                                    <Route path='/order' component={Order} />
                                    {/* <Route component={NoMatch} />   */}
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                    {/* <Route path='/order/detail' component={Login} /> */}
                </App>
            </Router>
        )
    }
}