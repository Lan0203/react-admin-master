import React,{Component} from 'react';
import {HashRouter as Router ,Route ,Switch} from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import About from '../router1/About'
import Main from './Main';
import NoMatch from './NoMatch'
export default class IRouter extends Component{

    render(){
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/main/:value" component={Info}/>
                            </Main>
                        }/>
                        <Route path="/about" component={About}/>
                        <Route component={NoMatch}/>
                    </Switch>
                   
                </Home>
            </Router>
        )
    }
}