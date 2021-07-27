import React, { Component } from 'react'


const Detaildata=[
    {id:'01',content:"a"},
    {id:'02',content:"b"},
    {id:'03',content:"c"},
]
export default class Detail extends Component {
    
    
    render() {
        const {id, title}=this.props.match.params
        const findResult= Detaildata.find((detailObj)=>{
            return detailObj.id===id

        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
