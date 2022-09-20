import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc,collection } from 'firebase/firestore'
import {signin, signup} from '../Firebase'
import { db } from '../Firebase'

import { useAuth } from '../Firebase'

const Authentication = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate =useNavigate()
    const currentuser = useAuth()
    const usersCollection = collection(db,"users")//init empty blogs collection
    const signUpHandler = async()=>{
        await signup(email,password)
        await addDoc(usersCollection,{author:email})
        setEmail('')
        setPassword('')
        navigate("/Bloglist")

    }

    const signinHandler = async()=>{
        await signin(email,password)
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
        
        {!currentuser&&
            <div className='container col-md-4 '>
                <div className="wrapper p-3 my-4" style={{border:"5px solid black"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={emailChangeHandler}/>
                            
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={passwordChangeHandler}/>
                    </div>
                    <button type="submit" className="btn btn-dark my-2" onClick={signUpHandler}>Sign Up</button>
                    <button type="submit" className="btn btn-dark m-2" onClick={signinHandler}>Sign In</button>
                    </div>
            </div>}
        </>
    )
}

export default Authentication

