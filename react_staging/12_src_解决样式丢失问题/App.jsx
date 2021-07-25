import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'    //Home About是路由组件
import Header from './components/Header'  //Header是一般组件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/* 原生html中，靠<a>跳转不同的页面 */}
                                {/* <a className="list-group-item" href="./about.html">About</a>
                                <a className="list-group-item active" href="./home.html">Home</a> */}
                                
                                {/* 在react中靠路由链接实现切换组件---编写路由连接 */}
                                
                                    
                                    <MyNavLink to="/ddd/about">About</MyNavLink>
                                    <MyNavLink to="/ddd/home">Home</MyNavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                               
                                    {/* 注册路由 */}
                                    <Switch>
                                        <Route path='/ddd/about' component={About}></Route>
                                        <Route path='/ddd/home' component={Home}></Route>
                                    </Switch>
                                    
                               
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
