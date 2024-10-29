import React ,{useContext} from 'react'
import { countercontext } from '../context/context'

const Blog = () => {
    const counter =useContext(countercontext);
  return (
    <div>
      <h1>Welcome to Blog Page</h1>
      <h2>This is the blog page of this website.</h2>
      count is{counter}
    </div>
  )
}

export default Blog
