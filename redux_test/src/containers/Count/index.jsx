//引入count的ui组件
import CountUI from '../../components/Count'

//引入action
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

//引入redux中store 不能自己引
//import store from '../../redux/store'
//引入connect用于连接UI组件与redux
import  {connect} from 'react-redux'


//mapStateToProps函数返回的是一个对象，其中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---状态
//react_redux库已经将state传给a函数了
//mapStateToProps用于传递状态
function mapStateToProps(state){
    return {count:state}
}
//mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value---操作状态的方法
function mapDispatchToProps(dispatch){
    return {jia:(number)=>{
        // 通知redux执行加法
        dispatch(createIncrementAction(number))
        
    },
    jian:number=>dispatch(createDecrementAction(number)),
    jiaAsyn:(number,time)=>dispatch(createIncrementAsyncAction(number,time)),}
}

//使用connect()() 创建并暴露一个Count的容器组件
const CountContainer=connect(mapStateToProps,mapDispatchToProps)(CountUI)
export default CountContainer