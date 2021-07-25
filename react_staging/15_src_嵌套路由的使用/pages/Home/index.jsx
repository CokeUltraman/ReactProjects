import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route,Switch,Redirect } from 'react-router-dom'

import News from './News'
import Message from './Message'
export default class Home extends Component {
    render() {
        return (
            <div>
              <h2>我是home的内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                    <MyNavLink to='/ddd/home/news'>News</MyNavLink>
                  </li>
                  <li>
                    {/* <a className="list-group-item" href="./home-message.html">Message</a> */}
                    <MyNavLink to='/ddd/home/message'>Message</MyNavLink>
                  </li>
                </ul>
                {/* 注册路由 */}

                <Switch>
                      <Route path='/ddd/home/news' component={News}></Route>
                      <Route path='/ddd/home/message' component={Message}></Route>
                      <Redirect to='/ddd/home/news'/>
                </Switch>
                
                


                
              </div>
            </div>
        )
    }
}
