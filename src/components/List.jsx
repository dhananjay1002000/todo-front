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
    function handleSave(event){
        const uid = props.delId;
        setIsEditable(prevValue => !prevValue);
        console.log(todo);
        axios.put(`${url}/put/${uid}` , todo);
        event.preventDefault();
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
                       
                            props.handleOnDelete(props.id , props.delId);
                            event.preventDefault();
                        }}><DeleteIcon/></button>
                            
                    </form>
                </li>
            </ul>
        </div>
        
    )
}
export default List;