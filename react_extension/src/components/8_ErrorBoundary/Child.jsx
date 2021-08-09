import React, { Component } from 'react'
 
export default class Child extends Component {
     
    state={
        users:[
            {id:'001',name:'Tom',age:18},
            {id:'002',name:'To2m',age:128},
            {id:'003',name:'Toqm',age:118}
        ]
    }
    
    render() {
         return (
             <div>
                 <h2>I am child component</h2>
                 {
                     this.state.users.map((userObj)=>{
                            return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
                     })
                 }
             </div>
         )
     }
}