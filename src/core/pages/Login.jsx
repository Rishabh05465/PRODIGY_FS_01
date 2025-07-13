import { useState } from 'react'
import { Link } from 'react-router-dom' 
import Button from '../atoms/Button';

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");   
   
  return (
    <>
    <div className='login'>
        <section className='box'>
            <h4>Login</h4>
            <div className='uid'>
                <label htmlFor="">Username</label>
                <input type="text" 
                value={username}
                placeholder='Enter your username'                
                onChange={ (e)=> setUserName(e.target.value)} />                
                {username.length > 20 && (
                <div className="error">Name should be 3 to 20 char</div>
                )}
            </div>
            <div className='uid2'>
                <label htmlFor="">Password</label>
                <input type="password"
                value={password}
                placeholder='Enter your Password'
                onChange={ (e)=> setPassword(e.target.value)} />
                {password.length > 10 && (
                <div className="error">Password should be 5 to 10 char</div>
                )}
            </div>
            <div className='fgp'>
                <Link to={"/forgot_password"}>forgot password?</Link>
            </div>
            <Button label="Login" css="button" />
            <p className='text_sm'>Don't have an account? <Link to ={"/registration"}>Sign in</Link> </p>              
        </section>
    </div>
    </>
  )
}
