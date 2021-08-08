import React, { Component } from 'react'
import './index.css'
export default class A extends Component {
    
    state={username:'Tom'}
    
    render() {
        return (
            <div className='parent'>
                <h3> I am A component</h3>
                <h4>My username is {this.state.username}</h4>
                <B username={this.state.username}/>
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
    render() {
        return (
            <div className='grand'>
                <h3> I am C component</h3>
                <h4>I get username from B Component:</h4>
                
            </div>
        )
    }
}