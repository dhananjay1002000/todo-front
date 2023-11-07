import { useEffect, useState } from "react";

function Header(props) {
    const [username , setUsername] = useState('');
    useEffect(()=>{
      async function fetchUsername(){
        try{
          const usern = await props.username();
          setUsername(usern);
        }
        catch(err){
          console.error(err);
        }
      }

      fetchUsername();
    });
    return (
      <header>
        <div className="h1">
          <h2>{ username !== null ? 'Hello '+ username + ' What Todo today!😃' : 'Loding...'  }</h2>
        </div>
      </header>
    );
  }
  
  export default Header;
  