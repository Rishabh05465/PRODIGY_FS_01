import {useNavigate} from "react-router-dom"
import Button from '../atoms/Button'

export default function ForgotPassword() {
    const navigate = useNavigate(); 
    const clickHandler = () => {
        navigate('/login')
    }
  return (
    <>
    <div className='login'>
        <section className='box'>
            <h4>Change Password</h4>
            <div className='uid'>
                <label htmlFor="">Email ID</label>
                <input type="text" placeholder='Enter your Email' />
            </div>
            <div className='uid2'>
                <label htmlFor="">New Password</label>
                <input type="text" placeholder='Enter your Password' />
            </div>
            <div className='btn-grp'>
                <Button label="Apply" css="button"/>
                <Button label="Cancel" css="button_warning" callback={()=> clickHandler()} />
            </div>           
        </section>
    </div>
    </>
  )
}