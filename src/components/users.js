import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './users.css'
import Loader from './loader'
function Users() {
    const [users, setUsers] = useState([])
    const [loader,setLoader]=useState(true)
    const [error,setError]=useState(false)
    const [selectedUserId,setSelectedUserId] = useState(false)
    const fetchUsers = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            setUsers(res.data)
            setTimeout(() => {
                setLoader(false)
            }, 2000)
        })
        .catch(err => {
            setError(err)
            setTimeout(() => {
                setLoader(false)
            }, 2000)
        })
    }
   useEffect(() => {
    fetchUsers()
   }, [])
   
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {
users.map((user,index)=>{
    return (
    <div key={index}>
      
    <p className='username text-white' onClick={()=>{setSelectedUserId(user.id)}}>{user.name}</p>
    {selectedUserId === user.id && <div className='details-box'>
        <p><strong>Email:</strong> {user.email}</p>
        </div>
    
    }
    </div>)

})
}
        </div>
      )}
    </div>
  )
}

export default Users