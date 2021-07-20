import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search=()=>{
        //获取用户的输入(解构赋值的连续写法+重命名)
        const {keyWordElement:{value:keyWord}}=this
        //console.log(keyWord)
        //发送网络请求
        axios.get(`api1/search/users?q=${keyWord}`).then(
            response=>{
                this.props.saveUsers(response.data.items)},
            error=>{console.log('fail',error);}
        )

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
                </section>
        )
    }
}
