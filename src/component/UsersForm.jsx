import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './style/UserForm.css'

const UsersForm = ({getUsers, userSelected}) => {

    const {handleSubmit, register, reset} = useForm();

    const initialValue = {
        email: "",
        password: "",
        first_name: "",
        last_name : "",
        birthday: ""
    }

    useEffect(() =>{
        if(userSelected){
            reset(userSelected)//asigna lo que hay en userSelected
        }
    },[userSelected])
    
    const submit = (data) =>{
        if(userSelected){
            axios.put(`http://144.126.218.162:9000/users/${userSelected.id}/`, data)
            .then(()=> {
                getUsers()
                reset(initialValue)
            })
        }else{
            axios.post('http://144.126.218.162:9000/users/', data)
            .then(() => {
                getUsers()
                reset(initialValue)
            })
            reset(null)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} autoComplete="off">
            <div className="input--container">
                <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email</label>
                    <input {...register("email")}
                      type="email"
                       id='email' 
                       placeholder='write you email'
                       required
                       />
            </div>
            <div className="input--container">
                <label htmlFor="password"><i className="fa-solid fa-key"></i> Password</label>
                <input {...register("password")} 
                    type="password" 
                    id='password' 
                    placeholder='write you password'
                    required
                    />
            </div>
            <div className="input--container">
                <label htmlFor="name"><i className="fa-solid fa-user"></i> First name</label>
                <input {...register("first_name")} 
                    type="text"
                    id='name' 
                    placeholder='write you first name'
                    required
                    />
            </div>
            <div className="input--container">
                <label htmlFor="lastName"><i className="fa-solid fa-user"></i> Last name</label>
                <input {...register("last_name")}  
                    type="text" 
                    id='lastName' 
                    placeholder='write you last name'
                    required
                    />
            </div>
            <div className="input--container">
                <label htmlFor="date"><i className="fa-solid fa-calendar-days"></i> Day of birth</label>
                <input {...register("birthday")}  
                    type="date" 
                    id='date' 
                    placeholder='write you date'
                    required
                    />
            </div>
            <button className='btn--style'>Submit</button>
        </form>
    );
};

export default UsersForm;