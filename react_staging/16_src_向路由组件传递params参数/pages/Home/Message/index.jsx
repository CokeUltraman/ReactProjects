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
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/ddd/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                  </ul>
                  <hr/>
                  {/* 声明接收params参数 */}
                  <Route path='/ddd/home/message/detail/:id/:title' component={Detail}></Route>

            </div>
        )
    }
}
