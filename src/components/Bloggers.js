import React,{useState,useEffect} from 'react'
import { db } from '../Firebase'
import { collection, getDocs } from '@firebase/firestore'

export const Bloggers = () => {
    const [bloggers, setBloggers] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const usersCollection = collection(db, "users")
        const dummy_list = []
        const userSnapshot = await getDocs(usersCollection)
        userSnapshot.forEach(doc => dummy_list.push(doc.data()))
        setBloggers(dummy_list)
      }
      fetchData()
    }, [bloggers])
    return (
        <>
            
            <div className="container d-flex ">
            {bloggers&&bloggers.map((blogger,index)=>(
                <div key={index} className="card m-2 bg-dark" style={{ width: "18rem" }}>
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <img src="" alt=""></img>
                        <h5 className="card-title">{blogger.author}</h5>
                        
                       
                    </div>
                </div>
            ))
                
            }

            </div>

        </>
    )
}
