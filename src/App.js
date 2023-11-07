import Homepage from "./components/homePage";
import Register from "./components/register";
import Login from "./components/login";
import axios from "axios";
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const url = process.env.REACT_APP_SERVER_URL;
function App() {
  axios.defaults.withCredentials = true;
  
  return (
   <div>
    
    <Router>
        <Routes>
          <Route exact path="/" element={<Register />}/>
          <Route exact path="/home" element={<Homepage />}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
    </Router>
      
  </div>
  );
}

export default App;
export {url};
