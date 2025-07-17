import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import Button from '../atoms/Button';
import axios from 'axios';

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");  
    const navigate = useNavigate();
    
    const login = () => {
        axios
            .post('http://localhost:8000/user/login',{email:email,password:password})
            .then(res => res.data) 
            .then(res => {
                if(!res.error){
                    sessionStorage.setItem("token", res.token);
                    navigate('/user')
                }else{
                    console.log(res.error)
                }
                
            })
    }
   
  return (
    <>
    <div className='login'>
        <section className='box'>
            <h4>Login</h4>
            <div className='uid'>
                <label htmlFor="">Email</label>
                <input type="text" 
                value={email}
                placeholder='Enter your email'                
                onChange={ (e)=> setemail(e.target.value)} />                
                {email.length > 20 && (
                <div className="error">email should be 3 to 20 char</div>
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
            <Button label="Login" css="button" callback={() => login()} />
            <p className='text_sm'>Don't have an account? <Link to ={"/registration"}>Sign in</Link> </p>              
        </section>
    </div>
    </>
  )
}
