import React from 'react'
import { Navbar } from './Navbar'


export default function Bloglist() {
  return (
    <>
    <Navbar/>
    <div className="container">
  
    <div className="card my-2"> 
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
     <p> Author Name</p>
     </div>   
    
     
    </div>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
 <p> Author Name</p>
 </div>   

 
</div>
</div>
</>
  )
}