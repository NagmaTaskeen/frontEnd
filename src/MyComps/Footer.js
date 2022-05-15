import React from 'react'
import './footer.css'


export const Footer= () => {
  let footerStyle = {
    position:"relative",
    top:"70vh",
    width:"100%",
    border:"2xp solid red"

  }

  return (
    <footer className='bg-dark text-light py-3'
        style={footerStyle}>
            <p className='text-center'>
                Copyright &copy; MyTodoList.com
            </p>


        </footer>

)
}