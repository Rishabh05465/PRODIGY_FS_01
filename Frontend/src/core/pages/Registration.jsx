import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../atoms/Button';
import axios from 'axios';

export default function Registration() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");  
    const [email, setEmail] = useState("");  
    
    const registration = () => {
        axios
            .post('http://localhost:8000/user/register',{name:username,password:password,email:email})
            .then(res => res.data) 
            .then(res => console.log(res));
    }

  return (
    <>
    <div className='login'>
        <section className='box'>
            <h4>Sign in</h4>
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
            <div className='uid'>
                <label htmlFor="">Password</label>
                <input type="password"
                value={password}
                placeholder='Enter your password'                
                onChange={ (e)=> setPassword(e.target.value)} />                
                {password.length > 10 && (
                <div className="error">Password should be 5 to 10 char</div>
                )}
            </div>
            <div className='uid'>
                <label htmlFor="">Email ID</label>
                <input type="text" 
                value={email}
                placeholder='Enter your email_id'                
                onChange={ (e)=> setEmail(e.target.value)} />                
                {email.length > 20 && (
                <div className="error">email_id should be 3 to 20 char</div>
                )}
            </div>
            <Button label="Sign In" css="button" callback={() => registration()} />
            <p className='text_sm'>Already have an account? <Link to ={"/login"}>Login</Link> </p>          
        </section>
    </div>
    </>
  )
}
