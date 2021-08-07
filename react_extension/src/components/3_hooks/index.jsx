import React, { Component } from 'react'
//类式组件
// export default class Demo extends Component {
    
//     state = {count:0}

//     add=()=>{
//         this.setState(state=>({count:state.count+1}))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>touch plus one</button>
//             </div>
//         )
//     }
// }

//函数式组件
function Demo(){
    const [count,setCount]=React.useState(0)   
   //加的回调
    function add(){
        //setCount(count+1)//第一种写法
        setCount(count=>count+1)
    }
    return (
        <div>
            <h2>当前求和为{this.state.count}</h2>
            <button onClick={add}>touch plus one</button>
        </div>
    )
}
export default Demo
