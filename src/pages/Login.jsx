import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/login.css"

const Login = () => {

    const { handleSubmit, register, reset } = useForm()
    const [isLogged, setIsLogged] = useState(false)
  
    const handleLogout = () => {
      localStorage.removeItem('token')
      setIsLogged(false)
    }
    
    const submit = data => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login"
      axios.post(URL, data)
        .then(res =>{
          console.log(res.data)
          localStorage.setItem('token', res.data.data.token)
          setIsLogged(true)
        })
        .catch(err => console.log(err))
      }
  
      useEffect(() => {
        if(localStorage.getItem('token')){
          setIsLogged(true)
        } else {
          setIsLogged(false)
        }
      }, [])
  
      if(isLogged) {
        return (
          
          <div className='isLog'>
            <h2>User Logged ✅</h2>
            <button className='' onClick={handleLogout}>Logout</button>
          </div>
        )
      }
      
      
    return ( 
    <div className='login-container'>
      <div className='login'>
        <h3>Welcome! Enter your email and password to continue</h3>
         <article className='login__test'>
          <h4>Test data</h4>
          <span> <i className='bx bx-envelope'></i>john@gmail.com</span>
          <span><i className='bx bx-lock-alt'></i>john1234</span>
         </article>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor="email">Email</label>
              <input className='login__email' type="email" id="email" {...register("email")} />  
            </div>
            <div className='password__container'>
              <label  htmlFor="password">Password</label>
              <input className='login__pass' type="password" id="password" {...register("password")}/>  
            </div>     
            <button className='loginBtn'>Login</button>  
          </form>    
      </div>
    </div>
    )
  }
export default Login