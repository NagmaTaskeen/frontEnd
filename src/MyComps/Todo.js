import React from 'react'
import { TodosList } from '../MyComps/TodosList'

export const Todo = (props) => {
   return (
    <div className='container' >
        <h3 className='my-3'>
          TodosList is here  xcx
            </h3>
            {props.todos.length===0? "No todo to display":
            props.todos.map((todo)=>{
              return <TodosList  todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
            })
            }
         </div>
  )
}
