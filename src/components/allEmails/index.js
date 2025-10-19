import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import GettingEmails from "../../utils/api";

function AllEmails(){

  const [email,setEmails]=useState([]);
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const api=async()=>{
        const apiFetch=await GettingEmails();

    const filteredEmails=apiFetch.filter((each)=>
        each.body.toLowerCase().includes(search.toLowerCase())|| 
        each.subject.toLowerCase().includes(search.toLowerCase())
);
    setEmails(filteredEmails);
        
    }
    api();
  },[search]);

  const userSearch=(e)=>{
    setSearch(e.target.value);
   

  }

  return(

    <div>
        <div>
            <input className="input-search" type="search" value={search} onChange={userSearch} placeholder="Search here.."/>
        </div>
        {email.map((each)=>(<div className="each-email" key={each.id}>
            <Link to={`/email/${each.id}`}>{each.body.substring(0,50)} ... </Link>
            </div>))}
    </div>
  )
}

export default AllEmails;