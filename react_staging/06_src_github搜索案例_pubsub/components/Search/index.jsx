import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {

    search=async ()=>{
        
        //获取用户的输入(解构赋值的连续写法+重命名)
        const {keyWordElement:{value:keyWord}}=this
        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish("aaa",{isFirst:false,isLoading:true})
        //console.log(keyWord)
        //#region 发送网络请求---使用axios发送
        // axios.get(`api1/search/users?q=${keyWord}`).then(
        //     response=>{
        //         //请求成功后通知List更新状态
        //         // this.props.updateAppState({isLoading:false,users:response.data.items})
        //         PubSub.publish("aaa",{isLoading:false,users:response.data.items})
        //     },

        //     error=>{
        //         //请求失败后通知App更新状态
        //         //this.props.updateAppState({isLoading:false,err:error.message})
        //         PubSub.publish("aaa",{isLoading:false,err:error.message})
        //     }
        // )
        //#endregion

        // //发送网络请求 fetch发送 (未优化)
        //   fetch('api1/search/users?q=${keyWord}').then(
        //       response=>{
        //           console.log('联系服务器成功了')
        //           return response.json
        //       },
        //       error=>{
        //           console.log('联系服务器失败了',error)
        //           return new Promise(()=>{})
        //          }
        //   ).then(
        //       response=>{console.log('获取数据成功了',response);},
        //       error=>{console.log('获取数据失败了',error);}
        //   )

        //发送网络请求 fetch发送 (优化)
          try {
            const response=await fetch('api1/search/users?q=${keyWord}')
            const data=await response.json()
            PubSub.publish("aaa",{isLoading:false,err:error.message.items})
  
          } catch (error) {
              console.log('request error',error)
              PubSub.publish("aaa",{isLoading:false,err:error.message})
          }
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
