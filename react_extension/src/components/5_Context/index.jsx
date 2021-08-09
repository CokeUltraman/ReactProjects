import React, { Component } from 'react'
import './index.css'

//创建Context对象
const MyContext= React.createContext()
const {Provider}=MyContext
export default class A extends Component {
    
    state={username:'Tom'}
    
    render() {
        const {username} = this.state
        return (
            <div className='parent'>
                <h3> I am A component</h3>
                <h4>My username is {username}</h4>
                <Provider value={username}>
                   <B />
                </Provider>
                
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                 <h3> I am B component</h3>
                <h4>I get username from A Component:{this.props.username}</h4>
                <C/>
            </div>
        )
    }
}

class C extends Component {
    //声明接收
    static contextType=MyContext
    
    render() {
        return (
            <div className='grand'>
                <h3> I am C component</h3>
                <h4>I get username from B Component:{this.context}</h4>
                
            </div>
        )
    }
}