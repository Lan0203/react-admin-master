import React,{Component} from 'react';
import './index.less'

export default class Life extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.handleAdd=this.handleAdd.bind(this)
    }
    handleAdd(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div className="content">
                <p>React生命周期</p>
                <button onClick={this.handleAdd}>点击</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}