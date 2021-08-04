import React, { Component } from 'react'
import { nanoid } from 'nanoid'
export default class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const personObj={id:nanoid,name,age}
    }
    
    
    render() {
        return (
            <div>
                <h2>I am person component</h2>
                <input  ref={c=this.nameNode=c} type='test' placeholder='input name'></input>
                <input  ref={c=this.ageNode=c} type='test' placeholder='input age'></input>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    <li>name: age:</li>
                    <li>name: age:</li>
                    <li>name: age:</li>
                </ul>
            </div>
        )
    }
}
