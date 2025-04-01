import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const StudentInfo = () => {

    const[stu,setStu]=useState([])

    const getData=async ()=>{
        const res=await axios.get('http://localhost:8005/student')
        setStu(res.data)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <br />
        <div>
            <table border={5}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stu.map((stu,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{stu.name}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.city}</td>
                                    <td>
                                        <NavLink to={`/update/${stu.id}`}><button>Edit</button></NavLink>
                                        <NavLink to={`/delete/${stu.id}`}><button>Delete</button></NavLink>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StudentInfo