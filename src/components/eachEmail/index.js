
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GettingEmails from "../../utils/api";
import {RingLoader} from "react-spinners";
import "./index.css";

function EachEmail(){
    const {id}=useParams();
    const [eachEmail,setEachEmail]=useState([]);
    const [reply,setReply]=useState("");
    const [loader,setLoader]=useState(false);

    useEffect(()=>{
         const fetchEmails=async()=>{
          const allEmails=await GettingEmails();
          const eachEmailFind=allEmails.find((each)=>each.id===parseInt(id))
          setEachEmail(eachEmailFind);
          console.log(eachEmailFind);
          
         }
         const fetchReply=async()=>{
            setLoader(true);
            const replyFetch=await fetch (`https://backend-email-ai-daveed.onrender.com/email/${id}/reply`);
            const responsed=await replyFetch.json();
            console.log(responsed);
            setReply(responsed);
            setLoader(false);
         }
        
         fetchEmails();
         fetchReply();
    },[id]);
   

    return(

        <div>
            <h4 className="email">Email: </h4>
            <h3 className="each-email-subject">Subject: {eachEmail.subject}</h3>
            <p className="each-email-body">{eachEmail.body}</p>
            {
                loader?<RingLoader color="#9821c7" />:<h3 className="ai-reply">Ai: {reply.suggestedReply}</h3>
            }
            
        </div>
    )
}

export default EachEmail;