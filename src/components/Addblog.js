import React from 'react'
import { Navbar } from './Navbar'

export const Addblog = () => {
  return (
    <>
    <Navbar/>
   <div className="container">
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Author Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Title</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 ">
  <label className="textarea " for="exampleCheck1">Description</label>
    <textarea rows="10 " className="form-control" id="exampleCheck1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

   </div>
   </>
  )
}
