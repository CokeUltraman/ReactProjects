import React, { Component } from 'react'
import Count from './containers/Count' //引入count的容器组件
import Person from './containers/Person'//引入person的容器组件

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递store */}
                <Count/>
                <hr/>
                <Person/>
            </div>
        )
    }
}
