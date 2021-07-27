import React, { Component } from 'react'

export default class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'news 01'},
            {id:'02',title:'news 02'},
            {id:'03',title:'news 03'},

        ]
    }
    
    
    render() {
        const {messageArr}=this.state
        return (
            <div>
                  <ul>
                    {
                        messageArr.map(()=>{
                            return(
                                
                            )
                        })
                    }
                  </ul>
            </div>
        )
    }
}
