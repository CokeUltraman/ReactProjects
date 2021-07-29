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
    replaceShow=(id,title)=>{
        //编写代码，让其实现跳转到Detail组件，且为replace跳转,携带params参数
        //this.props.history.replace(`/ddd/home/message/detail/${id}/${title}`)
        //编写代码，让其实现跳转到Detail组件，且为replace跳转,携带query参数
        //this.props.history.replace(`/ddd/home/message/detail?id=${id}&title=${title}`)
        //编写代码，让其实现跳转到Detail组件，且为replace跳转,携带state参数
        this.props.history.replace(`/ddd/home/message/detail`,{id,title})

    }
    pushShow=(id,title)=>{
        //编写代码，让其实现跳转到Detail组件，且为push跳转
        //this.props.history.push(`/ddd/home/message/detail/${id}/${title}`)

        //编写代码，让其实现跳转到Detail组件，且为push跳转,携带state参数
        this.props.history.push(`/ddd/home/message/detail`,{id,title})
    }
    back=()=>{
        this.props.history.goBack()
    }
    
    forward=()=>{
        this.props.history.goForward()
    }
    go=()=>{
        this.props.history.go(2)
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
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/ddd/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
                                    
                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/ddd/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/ddd/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                    
                                    &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                                    <button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
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

                  <button onClick={this.back}>back</button>
                  <button onClick={this.forward}>forward</button>
                  <button onClick={this.go}>go</button>
            </div>
    )
    } 
}
