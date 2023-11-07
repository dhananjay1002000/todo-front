import axios from "axios";
import { useState } from "react"
import { url } from "../App";
import Footer from "./footer";
import {  useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [userlog , setUserLog] = useState({
        username:"",
        password:""
    })
    const [failedLogin  , setFailedLogin] = useState(false);

    function handleOnChange(event){
        const {name , value} = event.target;
        setUserLog((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

    async function handleLogin(event){
        event.preventDefault();
        try{
            
            const resp = await axios.post(`${url}/login` , userlog);
            if(resp.status === 200){
                navigate('/home');
            }
        }
        catch(err){
            setFailedLogin(true);
            console.error(err);
        }
    }
 return (
    <div className="login-container">
        <form onSubmit={handleLogin} className="login">
                <label htmlFor="userName"> Enter Your @userName for Login</label>
                <input onChange={handleOnChange} type="text" name="username" />
                <label  htmlFor="password">Please Enter Password</label>
                <input  onChange={handleOnChange} type="password" name="password" />
                <button type="submit">Submit</button>
        </form>
        <p>or</p>
        <button className="registerLink" onClick={()=>{
            navigate('/')
        }}>new user? Register here!</button>
        <Footer />
    </div>
    
 )
}
export default Login;