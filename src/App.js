import Header from "./components/header";
import Footer from "./components/footer";
import CreateTodo from "./components/createTodo";
import './index.css'
import List from "./components/List";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import axios from 'axios';
const url = process.env.REACT_APP_SERVER_URL;
function App() {
  const [todoList , setTodoList] = useState([]);
  

  useEffect(()=>{
    loadData();
  },[])

 async function loadData(){
    try{
      const resp = await axios.get(url);
      console.log(resp);
      setTodoList([...resp.data])
    }
    catch(err){
      console.error("An error occurred: " , err);  
    }
  }

  function handleOnClick(){ 
    console.log("hello world");
    loadData();   
  }

 async function handleOnDelete(id, delId){
      console.log(delId);
      setTodoList((prevValue)=>{
       return prevValue.filter((item , index)=>{
          return index !== id;
        })
      })
      try{
        await axios.delete(`${url}/del/${delId}`);
      }
      catch(err){
        console.error("An error occurred: " , err);
        
      }
  }
  return (
   <div>
    <Header />
        <div className="container">
          <CreateTodo handleOnClick={handleOnClick}/>
                  {
      
                    todoList.map((item , index)=>{
                      return <List 
                          key = {item._id}
                          id = {index}
                          delId = {item._id}
                          todo = {item.todo}
                          handleOnDelete = {handleOnDelete}
                        />                
                      })
                  }
        </div>
      
    <Footer  />
  </div>
  );
}

export default App;
export {url};
