import axios from "axios";
import { useState } from "react";
import { url } from "../App";
import AddIcon from '@mui/icons-material/Add';

function CreateTodo(props){
    const [todo , setTodo] = useState(
    {
        todo : " "
    }
    );

    function  handleOnChange(event){
        setTodo(
        {
            todo : event.target.value
        });

        
    }
    
    return (
        <div className="form">
            <form>
                <input type="text" name="input" onChange={handleOnChange} value={todo.todo}/>
                <button onClick={ async (event)=>{
                    event.preventDefault();
                    try{ 
                        await axios.post(`${url}/post`,todo)
                        props.handleOnClick(); 
                        setTodo({
                            todo:" "
                        })       
                    }
                    catch(err){
                        console.error("Error Occurred , " , err);
                    } 
                    
                }} ><AddIcon/></button>
            </form>

        </div>
        
        
        
    )
}

export default CreateTodo;