import React, { Component } from 'react'



export default class Count extends Component {
    // componentDidMount(){
    //     //检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    



    //state={count:0}
    increment=(params) => {
        const {value}=this.selectNumber
        this.props.jia(value*1)
    }
    decrement=(params) => {
        const {value}=this.selectNumber
        this.props.jian(value*1)
        
    }
    //奇数再加 if odd ,then plus
    incrementIfOdd=(params) => {
        const {value}=this.selectNumber
        if(this.props.count%2!==0){
            this.props.jia(value*1)
    
        }
        
        
    }
    //异步加
    incrementAsync=(params) => {
        const {value}=this.selectNumber
        
        //setTimeout(()=>{
            //store.dispatch(createIncrementAsyncAction(value*1))
        //},500)
        this.props.jiaAsyn(value*1,500)
    }
    
    
    
    render() {
        return (
            <div>
                <h1>current sum is :{this.props.count}</h1>
                <select ref={c =>this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                
                </select> &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
