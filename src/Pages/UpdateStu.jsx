import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStu = () => {

    const{student}=useParams()

    const navigate=useNavigate()

    const{register,handleSubmit,reset,setValue}=useForm()

    const[stu,setStu]=useState('')

    const getData=async ()=>{
        const res=await axios.get(`http://localhost:8005/student/${student}`)
        setStu(setStu)
        setValue('name',res.data.name)
        setValue('email',res.data.email)
        setValue('city',res.data.city)
    }

    useEffect(()=>{
        getData()
    },[])

    const updateForm=(data)=>{
        axios.put(`http://localhost:8005/student/${student}`,data)
        alert('Updated...')
        navigate('/studentinfo')
    }

  return (
    <div>
        <br />
            <div>
                <form onSubmit={handleSubmit(updateForm)}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' {...register('name')} />
                    <br /><br />
                    <label htmlFor="email">Email: </label>
                    <input type="email" id='email' {...register('email')} />
                    <br /><br />
                    <label htmlFor="city">City: </label>
                    <input type="text" id='city' {...register('city')} />
                    <br /><br />
                    <button type='reset'>Reset</button>
                    <button>Update</button>
                </form>
            </div>
    </div>
  )
}

export default UpdateStu