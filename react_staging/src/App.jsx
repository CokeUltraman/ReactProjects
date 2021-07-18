import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
    
    state={state:[users:]}//初始化状态，users初始值为数组.
    
    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        )
    }
}
