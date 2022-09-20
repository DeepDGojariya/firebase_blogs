import './App.css';
import Bloglist  from './components/Bloglist';
import { Bloggers } from './components/Bloggers';
import { Addblog } from './components/Addblog';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './components/Authentication';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Authentication/>}/>
        <Route path="/Bloglist" element={<Bloglist />}/>
        <Route path="/Bloggers" element={<Bloggers />} />
        <Route path="/Addblog" element={<Addblog/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
