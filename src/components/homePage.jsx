import Header from "./header";
import Footer from "./footer";
import List from "./List";
import CreateTodo from "./createTodo";
import Logout from "./logout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../App";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
function Homepage(){
    const [todoList , setTodoList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      loadData();
    },[])
    
 async function loadData(){
    try{
      const resp = await axios.get(url);
      setTodoList([...resp.data.todo]); 
    }
    catch(err){
      console.error("An error occurred: " , err);  
    }
  }

  async function delId() {
    const resp = await axios.get(url);
    return resp.data._id;
  }
  async function username(){
    const resp = await axios.get(url);
    return resp.data.username;
  } 

  function handleOnClick(){ 
    loadData();   
  }

 async function handleOnDelete(id){
      const todoDelId = await delId();
      setTodoList((prevValue)=>{
       return prevValue.filter((item , index)=>{
          return index !== id;
        })
      })
      try{
       const resp =  await axios.delete(`${url}/del/${id}/${todoDelId}`);
       
       
      }
      catch(err){
        console.error("An error occurred: " , err);
        
      }
  }
  return (
   <div>
    <Header username = {username} />
      
        <div className="container">
          <CreateTodo handleOnClick={handleOnClick}/>
                  {
                    todoList.map((item , index)=>{
                      return <List 
                          key = {uuidv4()}
                          id = {index}
                          todo = {item}
                          handleOnDelete = {handleOnDelete}
                        />                
                      })
                  }
        </div>
      <Logout />           
    <Footer  />
  </div>
  );
}




export default Homepage