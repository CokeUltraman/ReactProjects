// 该文件用于汇总所有的reducer 为一个总的reducer

//引入combineReducers,用于汇总多个reducer
import {combineReducers} from 'redux'

//引入为count组件服务的reducer
import count from './count'
import person from './person'

//汇总所有的reducer变成一个总的reducer
export default combineReducers({
    count,
    persons:person
})

