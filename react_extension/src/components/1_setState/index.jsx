import React, { Component } from 'react'

export default class Demo extends Component {
    state ={count:0}
    
    add=()=>{

        // //对象式的setState
        // //1.获取原来的count值
        // const {count}=this.state
        // //2.更新状态
        // this.setState({count:count+1 },()=>{})

        //  函数式的setState
        //this.setState(state=> ({count:state.count+1})
        //)
        this.setState({count:this.state.count+1})
    }

    render() {
        return (
            <div>
                <h1>current sum is :{this.state.count}</h1>
                <button onClick={this.add}>press me and plus one </button>
            </div>
        )
    }
}
