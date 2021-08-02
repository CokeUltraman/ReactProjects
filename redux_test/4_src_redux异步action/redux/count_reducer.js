// 1.该文件是用于创建一个为count组件服务的reducer,reducer的本质就是一个函数
// 2.reducer函数会接到两个参数，分别为：之前的状态（prestate）,动作对象（action）
import {INCREMENT,DECREMENT} from './constant'
const initState = 0
//给preState设置初始值
export default function countReducer(preState=initState,action){
    
    const {type,data}=action
    //根据type决定如何加工数据
    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        
        default:
            return preState
            
    }

}