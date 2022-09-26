import React, { useEffect, useState } from 'react'

import { db } from '../Firebase'
import { collection, getDocs,query,where,deleteDoc,doc,getDoc } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom'



export default function MyBlogs({currentUser}) {
  const [blogs, setBlogs] = useState([])
  
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "blogs"), where("author", "==", currentUser.email))
      const dummy_list = []
      const blogSnapshot = await getDocs(q)
      blogSnapshot.forEach(doc => dummy_list.push({id:doc.id,data:doc.data()}))
      setBlogs(dummy_list)
      
    }
    fetchData()
  },[])

  const deleteBlogHandler=async(id)=>{
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef)
    navigate("/BlogList")
  }

  return (
    <>
      
      <div className="container">
      
        {blogs===[]&&<h3>No blogs</h3>}
        {blogs&&blogs.map((blog,index) => (
          <div key={index} className="card my-2 bg-dark" style={{color:"white"}}>
            <div className="card-body">
              <h5 className="card-title">{blog.data.title}</h5>
              <p className="card-text">{blog.data.description}</p>
              <p>{blog.data.author}</p>
              <button className='btn btn-danger' onClick={()=>deleteBlogHandler(blog.id)}>Delete</button>
            </div>
          </div>
        ))
        }
      
      
      
    </div>
    </>
  )
}