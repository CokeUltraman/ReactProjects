import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>I am parent componrnt</h3>
                <A render={(name)=><B name={name}/>}/>
            </div>
        )
    }
}
class A extends Component {
    state={name:'tom'}
    render() {
        const {name}=this.state
        return (
            <div className='a'>
                <h3>I am A componrnt</h3>
                {this.props.render(name)}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='b'>
                <h3>I am B componrnt {this.props.name}</h3>
                
            </div>
        )
    }
}