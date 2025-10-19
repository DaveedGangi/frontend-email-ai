

async function GettingEmails(){
           
                const apiData=await fetch("https://backend-email-ai-daveed.onrender.com/emails");
                return apiData.json();
}

export default GettingEmails;