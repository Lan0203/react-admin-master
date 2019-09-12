import React,{Component} from 'react';

export default class Info extends Component{

    render(){
        return(
            <div>
                this is info page.
                动态路由的值是{this.props.match.params.value}
            </div>
        )
    }
}