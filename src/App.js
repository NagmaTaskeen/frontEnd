import './App.css';
import Header from './MyComps/Header';
import { Footer } from './MyComps/Footer'; 
import { Todo } from './MyComps/Todo';
import { TodosList } from './MyComps/TodosList';
import { useState } from 'react';
import { AddTodo } from './MyComps/AddTodo';

function App() {
  const onDelete = (todo)=>{
    console.log("I am on delete of todo", todo);

    setTodos(todos.filter((e)=>{
        return e!==todo;
    }
    ));
    localStorage.getItem("todos");
  }

  const addTodo=(title,desc)=>{
    console.log("adding todo",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",todos);
    }else{
      
    }
  }
  const [todos,setTodos]=useState([]);

  return (
  <><h1>im before</h1>
  <Header 
  title="My todos List" search={true} />
  <AddTodo addTodo={addTodo} />
  <Footer />
  <Todo todos={todos}  onDelete={onDelete} /> 
  
  </>

  );
}

export default App;
