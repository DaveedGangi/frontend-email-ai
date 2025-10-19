

async function GettingEmails(){
           
                const apiData=await fetch("http://localhost:5000/emails");
                return apiData.json();
}

export default GettingEmails;