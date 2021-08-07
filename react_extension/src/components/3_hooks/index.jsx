import React, { Component } from 'react'
import ReactDom from 'react-dom'
//类式组件
// export default class Demo extends Component {
    
//     state = {count:0}

//     myRef=React.createRef()
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
//     show=()=>{
//         this.myRef.current.value
//     }
//     render() {
//         return (
//             <div>
//                 <input type='text' ref= {this.myRef}></input>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>touch plus one</button>
//                 <button onClick={this.unMount}>REMOVE </button>
//                 <button onClick={this.show} >press and show the data</button>
//             </div>
//         )
//     }
// }

//函数式组件
function Demo(){
    const [count,setCount]=React.useState(0)   

    const myRef=React.useRef()
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
    //提示输入的回调
    function show(){
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type='test' ref={myRef}></input>
            <h2>当前求和为{this.state.count}</h2>
            <button onClick={add}>touch plus one</button>
            <button onClick={unMount}>REMOVE </button>
            <button onClick={show}>show</button>
        </div>
    )
}
export default Demo
