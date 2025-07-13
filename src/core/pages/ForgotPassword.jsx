import React from 'react'

export default function ForgotPassword() {
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
                <span className='button'>Apply</span>
                <span className='button_warning'>Cancel</span>
            </div>           
        </section>
    </div>
    </>
  )
}