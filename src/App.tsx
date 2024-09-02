import { useState } from 'react'
import './App.css'
import {TodoItem}  from './types'
import {Todo} from './Todo'


function App() {

  const [todos,setTodos] = useState<TodoItem[]>([]);
  const [input,setInput] = useState('');

  const addTodo = (text:string) : void =>{
    const newTodo:TodoItem = {
      id:Date.now(),
      text,
      isCompleted:false
    }
    setTodos([...todos,newTodo])
  }

  const toggleTodo = (id:number) => {

      const newTodos = todos.map(todo =>{
        if(todo.id === id){
          return{...todo , isCompleted:!todo.isCompleted} 
        }
        return todo;
      })
      setTodos(newTodos)
  };


  return (
    <main>
      <div>
      <h2>My TODO List</h2>
      <input
       type = 'text'
       value={input}
       onChange={e=>setInput(e.target.value)}
      />
      <button onClick={()=>addTodo(input)}>
        Add
      </button>
      <ul>
        {todos.map(todo =>(
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}></Todo>
        ))}
      </ul>
      </div>
    </main>
  )
}

export default App
