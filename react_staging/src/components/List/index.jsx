import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class List extends Component {

    static propTypes={
        //对接收的props进行类型 必要性的限制
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        
        const {todos,updateTodo,deleteTodo}=this.props
        
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>

                    })
                }
                    
            </ul>
        )
    }
}
