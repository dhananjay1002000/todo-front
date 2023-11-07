import { useState } from "react";
import axios from "axios";
import { url } from "../App";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function List(props){
    const [isEditable , setIsEditable] = useState(false);
    const [todo , setTodo] = useState({
        todo : props.todo
    });
    const delId = async ()=>{
        const resp = await axios.get(url);
        console.log(resp);
        return resp.data._id;
    }

    async function handleSave(event){
        event.preventDefault(); 
        const uid = await delId();
        const id = props.id;
        console.log(uid);
        console.log(id);
        setIsEditable(prevValue => !prevValue);
        console.log(todo);
        await axios.put(`${url}/put/${id}/${uid}` , todo);  
        
    }

    function handleOnChange(event){
        setTodo({
            todo: event.target.value
        });
        console.log(todo);
    }
    async function handleEdit(event){
        setIsEditable(prevValue => !prevValue);
        event.preventDefault();
    }
    return (
        <div >
            <ul>
                <li>
                    <form >

                        <input className="list-input" type="text" value={todo.todo} onChange={handleOnChange} disabled = {!isEditable} />
                        {
                            !isEditable ? <button onClick={handleEdit}><EditIcon/></button> : <button onClick={handleSave}><SaveIcon/></button>
                        }
                    
                        <button onClick={(event)=>{
                            props.handleOnDelete(props.id);
                            event.preventDefault();
                        }}><DeleteIcon/></button>
                            
                    </form>
                </li>
            </ul>
        </div>
        
    )
}
export default List;