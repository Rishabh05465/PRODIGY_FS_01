import axios from 'axios';
import {useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'

export default function User() {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  useEffect(()=>{
    axios
      .get('http://localhost:8000/user', {headers:{Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
      .then(res => res.data) 
      .then(res => {
          setUsers(res.data)                  
      })
      .catch(err => navigate("/login"))
    
  },[])    
  return (
      <table className='userinfo'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item,index) => (
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email} </td>
            <td>{item.password} </td>
          </tr>
          ))}
          
        </tbody>
      </table>
  )
}
