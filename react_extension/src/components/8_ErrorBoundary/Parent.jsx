 import React, { Component } from 'react'
 import Child from './Child'

 export default class Parent extends Component {
     
    
    
    render() {
         return (
             <div>
                 <h2>I am parent component</h2>
                 <Child/>
             </div>
         )
     }
 }
 