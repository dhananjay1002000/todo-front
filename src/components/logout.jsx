import axios from "axios";
import { url } from "../App";
import { useNavigate } from "react-router-dom";



function Logout(){
    const navigate  = useNavigate();
    
    async function logoutHandler(){
        const resp = await  axios.get(`${url}/logout`);
        if(resp.status === 200){
            navigate('/login');
        }
        
    }
    return(
        <div className="logout">
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Logout;