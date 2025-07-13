import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'

export default function Registration() {
  return (
    <>
    <div className='login'>
        <section className='box'>
            <h4>Sign in</h4>
            <div className='uid'>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter your username' />
            </div>
            <div className='uid'>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter your Password' />
            </div>
            <div className='uid'>
                <label htmlFor="">Email ID</label>
                <input type="text" placeholder='Enter your Email' />
            </div>
            <Button label="Sign In" css="button" />
            <p className='text_sm'>Already have an account? <Link to ={"/login"}>Login</Link> </p>          
        </section>
    </div>
    </>
  )
}
