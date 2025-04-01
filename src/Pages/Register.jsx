import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {

    const { register, handleSubmit, reset } = useForm()

    const submitForm = (data) => {
        axios.post('http://localhost:8005/student',data)
        alert('Added...')
        reset()
    }

    return (
        <div>
            <br />
            <div>
                <form onSubmit={handleSubmit(submitForm)}>
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
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register