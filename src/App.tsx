import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/index'


export type Todo = {
  id: number;
  title: string;
  compled: boolean;
}
export default function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storeTodos = localStorage.getItem('@Todo_list:todos')
    if (storeTodos) {
      return JSON.parse(storeTodos)
    }
    return []
  })
  useEffect(() => {
    localStorage.setItem('@Todo_list:todos', JSON.stringify(todos))
  }, [todos])
  function addTodo() {
    setTodos((previusTodos) => [...previusTodos, { id: Math.random(), title: todoInput, compled: false }])
    setTodoInput(' ')
  }
  function completeTodo(id: number) {
    setTodos((previusTodos) => previusTodos.map((todo) => todo.id !== id ? todo : { ...todo, compled: !todo.compled }))
  }
  function handleImputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value)
  }
  function deleteTodo(id: number) {
    setTodos((previusTodos) => previusTodos.filter((todo) => todo.id !== id))
  }
  return (
    <div className='container'>
      <div className='Add'>
        <div className='add-todo'>
          <input placeholder='Digite a sua anotação: ' value={todoInput} onChange={handleImputChange} />
          <button onClick={addTodo}>Adicionar</button>
        </div>
        {
          todos.map((todo) => (
            <Card key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
          ))
        }
      </div>

    </div>
  )
}


