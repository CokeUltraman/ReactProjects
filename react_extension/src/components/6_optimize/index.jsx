import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    
    state={carName:'benz'}
    
    changeCar=()=>{
        this.setState({carName:'g63'})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     return !this.state.carName===nextState.carName
        
    // }
    render() {
        const {carName}=this.state
        return (
            
            <div className='parent'>
                <h3>I am parent component</h3>
                <span>My car is {carName}</span><br/>
                <button onClick={this.changeCar}>rouch me and change cars</button>
                <Child carName={carName}/>
            </div>
        )
    }
}
 class Child extends PureComponent {
    render() {
        return (
            <div className='child'>
                <h3>I am Child component</h3>
                <span>I got the car is {this.props.carName}</span>
            </div>
        )
    }
}
