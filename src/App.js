import './App.css';
import Bloglist  from './components/Bloglist';
import { Addblog } from './components/Addblog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './components/Authentication';
import { useAuth } from './Firebase';
import MyBlogs from './components/MyBlogs';
import { Navbar } from './components/Navbar';


function App() {
  const user = useAuth()
  
  return (
    <BrowserRouter>
    <Navbar currentUser={user}/>
      <Routes>
      <Route path="/" element={<Authentication/>}/>
        <Route path="/Bloglist" element={<Bloglist />}/>
        <Route path="/Addblog" element={<Addblog currentUser={user}/>} />
        <Route path="/MyBlogs" element={<MyBlogs currentUser={user}/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
