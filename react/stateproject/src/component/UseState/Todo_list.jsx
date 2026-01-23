import React, { useState } from 'react'

function Todo_List() {
  const[task,setTask]=useState("");
  const[tasks,setTasks]=useState([]);
  const[edit,setEdit]=useState(null);


  const addTask=()=>{
    if(task=="")return;
    setTasks([...tasks,task]);
    setTask("");
  }

    const handleDel=(index)=>{
      setTasks(tasks.filter((tasks,i)=>i!==index));
    }

    const handleEdit=(index)=>{
      setTask(tasks[index])
      setEdit(index);
      console.log("hello");
    }


    const updateTask=()=>{
      if(task=="") return;


      setTasks(
        tasks.map((value,index)=>
          index === edit? task:value)
      );
      setEdit(null);
      setTask("");

    }

  return (
    <>
    <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} />

    {edit === null ? (
          <button onClick={addTask}>add task</button> 
        ):(
          <button onClick={updateTask}>update</button>
    )
    }

        <ul>
          {tasks.map((value,index)=>
            (
            <li key={index}>{value}
            <button onClick={()=>handleDel(index)}>del</button>
            <button onClick={()=>handleEdit(index)}>EDit</button>
            </li>
          )
          )}
        </ul>
    </>
  )
}

export default Todo_List