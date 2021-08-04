// 该文件专门为count组件生成action对象
import {INCREMENT,DECREMENT} from '../constant'


//同步action,就是指action的值为object类型的一般对象
export const Increment = data => ({type:INCREMENT,data})
// export function createDecrementAction(data){
//     return {type:DECREMENT,data:data}
// }
export const Decrement = data => ({type:DECREMENT,data})

//异步action,就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
export const IncrementAsync = (data,time) =>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(Increment(data))
        },time)
    }
} 