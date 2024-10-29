import React from 'react'

const Button = () => {
    const handlesignup =() =>{
        let buttons =document.getElementsByClassName("btn");
        if (buttons.length > 0) {
            buttons[0].innerText = "You have signed up";
        }
        
    }
  return (
    <div>
        <button onClick={handlesignup} className='btn'>Sign Up</button>
    </div>
  )
}

export default Button
