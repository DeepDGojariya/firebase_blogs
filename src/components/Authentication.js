import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signup from '../Firebase'
import { Navbar } from './Navbar'
import { useAuth } from '../Firebase'

const Authentication = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate =useNavigate()
    const currentuser = useAuth()
    const signUpHandler = async()=>{
        await signup(email,password)
        setEmail('')
        setPassword('')
        navigate("/Bloglist")

    }

    const passwordChangeHandler = (e)=>{
        setPassword(e.target.value)
    }
    const emailChangeHandler = (e)=>{
        setEmail(e.target.value)
    }
    return (
        <>
        <Navbar/>
        {!currentuser&&
            <div className='container col-md-4'>
                
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={emailChangeHandler}/>
                            
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={passwordChangeHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary mx-2" onClick={signUpHandler}>Sign Up</button>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                
            </div>}
        </>
    )
}

export default Authentication

