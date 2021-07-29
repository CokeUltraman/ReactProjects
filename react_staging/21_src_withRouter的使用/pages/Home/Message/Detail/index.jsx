import React, { Component } from 'react'

//import qs from 'querystring'
const Detaildata=[
    {id:'01',content:"a"},
    {id:'02',content:"b"},
    {id:'03',content:"c"},
]
export default class Detail extends Component {
    
    
    render() {
        //接收params参数
        //const {id, title}=this.props.match.params
        //接收search参数
        // const {search}=this.props.location
        // const {id, title}=qs.parse(search.slice(1))
        //接收state参数
         const {id,title}=this.props.location.state || {}
        const findResult= Detaildata.find((detailObj)=>{
            return detailObj.id===id
        
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
