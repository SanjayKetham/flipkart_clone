import React from 'react'
import Login from './Login'
import Register from './Register'
import TodoList from './TodoList'
import Results from './Results'
import { MyProvider } from '../Mycontext'
const Practise = () => {
  return (
    <div>
      <MyProvider>
      <Register/>
        <Login/>
        <TodoList/>
      </MyProvider>
      <Results/>
    </div>
  )
}

export default Practise
