import React from 'react'

export default function Button(props) {
    const clickHandler = () => {
        props.callback();
    }
  return (
    <div className='btn'>
        <span className={props.css} onClick={clickHandler}>{props.label}</span>
    </div>
  )
}
