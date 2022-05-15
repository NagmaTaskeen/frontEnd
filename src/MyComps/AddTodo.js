import React, { useState } from 'react'

export const AddTodo = (addTodo)=> {
   const [title,setTitle]= useState("");
   const [desc,setDesc]=useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or desc cant be empty")
    }
    addTodo(title,desc);

    }

  return (
    <div className='container my-3'>
      <h3>Add a todo</h3>
<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title">TodoTitle</label>
    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Todo Task" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc">Description</label>
    <input type="desc" onChange={(e)=>setDesc(e.target.value)} value={desc} className="form-control" id="desc" placeholder="Enter Description" />
  </div>
 
  <button type="submit" className="btn btn-success"  onClick={submit}>Add Todo</button>
</form>


    </div>
  )
}
