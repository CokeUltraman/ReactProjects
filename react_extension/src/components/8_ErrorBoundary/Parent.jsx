 import React, { Component } from 'react'
 import Child from './Child'
 
 
  
 export default class Parent extends Component {
    
    state={
        hasError:''//用于标识子组件是否产生错误
    }
    
    //当parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error){
        return {hasError:error}
    }
    
    render() {
         return (
             <div>
                 <h2>I am parent component</h2>
                 
                 {this.state.hasError? <h2>internet erro,please try later</h2>:<Child/>} 
             </div>
         )
     }
 }
 