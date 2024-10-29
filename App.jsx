import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import Services from './components/Services'
import Help from './components/Help'
import SignUp from './components/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { countercontext } from './context/context'

const App = () => {
  const [count,setCount] =useState(0);
  const router =createBrowserRouter([
    {
      path:'/',
      element: <> <Navbar /><Home /></>
    },
    {
      path:'/services',
      element: <> <Navbar /><Services /></>
    },
    {
      path:'/blog',
      element: <> <Navbar /><Blog /></>
    },
    {
      path:'/help',
      element: <> <Navbar /><Help /></>
    },
    {
      path:'/signup',
      element: <> <Navbar /><SignUp /></>
    }
  ])
  return (
    <>
     <countercontext.Provider value={count}>
      <RouterProvider router = {router}></RouterProvider>
      <button onClick={()=>{setCount(count+1)}}>count is{count}</button>
      </countercontext.Provider>
    </>
  )
}

export default App
