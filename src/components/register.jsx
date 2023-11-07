import axios from "axios";
import { url } from "../App";
import { useNavigate } from 'react-router-dom';
import Footer from "./footer";
import { useState } from "react";

function Register(){
   const navigate = useNavigate();
   const [user , setUser] = useState({
    username:"",
    password:"",
   })
   const [failedRegister , setFailedRegister] = useState(false);

   function handleOnChange(event){
        const {name , value} = event.target;
        setUser((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
        console.log(user);
        
   }

   async function handleRegister(event){
        event.preventDefault();
        const resp = await axios.post(`${url}/register` , user);
        
        if(resp.data.msg === "User Already exsist" ) {
            alert("User Already exsist");
            navigate('/');
        }
        else if(resp.data.msg === "User registered!") {
            alert("user registered!");
            navigate('/home');
        }
        
   }

    return(
        <div>
            <form onSubmit={handleRegister} className="register">
                <label htmlFor="userName"> Enter Your @userName for Registration</label>
                <input onChange={handleOnChange} type="text" name="username" />
                <label  htmlFor="password">Please Enter Password</label>
                <input  onChange={handleOnChange} type="password" name="password" />
                <button type="submit">Submit</button>
            </form>
            <p>or</p>
            <button className= 'loginLink' onClick={()=>{
                navigate('/login')
            }}>Already a user? Login here!</button>
            <Footer />
        </div>
    )
}
export default Register;