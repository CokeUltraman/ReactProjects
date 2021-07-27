import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'news 01'},
            {id:'02',title:'news 02'},
            {id:'03',title:'news 03'},

        ]
    }
    
    
    render() {
        const {messageArr}=this.state
        return (
            <div>
                  <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return(
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数
                                    <Link to={`/ddd/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/ddd/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/ddd/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

                                </li>
                            )
                        })
                    }
                  </ul>
                  <hr/>
                  {/* 声明接收params参数 */}
                  {/* <Route path='/ddd/home/message/detail/:id/:title' component={Detail}></Route> */}
                  {/* 声明接收search参数 无需声明接收 正常注册即可*/}
                  {/* <Route path='/ddd/home/message/detail' component={Detail}></Route> */}
                  {/* 声明接收state参数 无需声明接收 正常注册即可*/}
                  <Route path='/ddd/home/message/detail' component={Detail}></Route>


            </div>
        )
    }
}
