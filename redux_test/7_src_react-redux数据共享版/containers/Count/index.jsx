// //引入count的ui组件
// import CountUI from '../../components/Count'

import React, { Component } from 'react'




//引入action
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count'

//引入redux中store 不能自己引
//import store from '../../redux/store'
//引入connect用于连接UI组件与redux
import  {connect} from 'react-redux'
//定义UI组件
 class Count extends Component {
    


    //state={count:0}
    increment=(params) => {
        const {value}=this.selectNumber
        this.props.jia(value*1)
    }
    decrement=(params) => {
        const {value}=this.selectNumber
        this.props.jian(value*1)
        
    }
    //奇数再加 if odd ,then plus
    incrementIfOdd=(params) => {
        const {value}=this.selectNumber
        if(this.props.count%2!==0){
            this.props.jia(value*1)
    
        }
        
        
    }
    //异步加
    incrementAsync=(params) => {
        const {value}=this.selectNumber
        
        //setTimeout(()=>{
            //store.dispatch(createIncrementAsyncAction(value*1))
        //},500)
        this.props.jiaAsyn(value*1,500)
    }
    
    
    
    render() {
        return (
            <div>
                <h2>I am count component</h2>
                <h4>current sum is :{this.props.count},below component total people is :{this.props.renshu}</h4>
                <select ref={c =>this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                
                </select> &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

//mapStateToProps函数返回的是一个对象，其中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---状态
//react_redux库已经将state传给a函数了
//mapStateToProps用于传递状态
//const mapStateToProps=state=>({count:state})

//mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---操作状态的方法
// const mapDispatchToProps=dispatch=>(
//      {jia:(number)=>{
//         // 通知redux执行加法
//         dispatch(createIncrementAction(number))
        
//     },
//     jian:number=>dispatch(createDecrementAction(number)),
//     jiaAsyn:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),})

//使用connect()() 创建并暴露一个Count的容器组件
export default connect(state=>({
    count:state.he,
    renshu:state.rens.length}),
//   dispatch=>(
    //mapDispatchToProps的一般写法
//     {jia:(number)=>{
//       通知redux执行加法
//        dispatch(createIncrementAction(number))},
//    jian:number=>dispatch(createDecrementAction(number)),
//    jiaAsyn:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),})

//      mapDispatchToProps的简写 ,API 级优化，react-redux帮你dispatch

{
           jia:createIncrementAction,
           jian:createDecrementAction,
           jiaAsyn:createIncrementAsyncAction,
           
}

)(Count)
