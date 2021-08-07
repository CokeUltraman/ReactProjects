import React, { Component } from 'react'
import ReactDom from 'react-dom'
//类式组件
// export default class Demo extends Component {
    
//     state = {count:0}

//     add=()=>{
//         this.setState(state=>({count:state.count+1}))
//     }
//     unMount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     componentDidMount(){
//         this.timer=setInterval(()=>{
//             this.setState(state=>({count:count+1}))
//         },1000)
        
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>touch plus one</button>
//                 <button onClick={this.unMount}>REMOVE </button>
//             </div>
//         )
//     }
// }

//函数式组件
function Demo(){
    const [count,setCount]=React.useState(0)   

    React.userEffect(()=>{
        let timer=setInterval(()=>{
            setCount(count=>count+1)
        },1000) 
        return ()=>{
            clearInterval(timer)
        }  
    },[])

   //加的回调
    function add(){
        //setCount(count+1)//第一种写法
        setCount(count=>count+1)
    }
    //卸载组件的回调
    function unMount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return (
        <div>
            <h2>当前求和为{this.state.count}</h2>
            <button onClick={add}>touch plus one</button>
            <button onClick={unMount}>REMOVE </button>
        </div>
    )
}
export default Demo
