import React ,{useEffect,useState} from 'react'
import TotalprojectTable from './TotalprojectTable'
import axios from 'axios'
import "./Totalproject.css"

const Totalproject = () => {
    const [ totalProject,settotalProject] = useState([]);
    useEffect (() =>{
        async function adminData(){
        
          const res = await axios.get("http://localhost:4000/hrms/dashboardDetails?username=admin@test.com&role=Admin") 
         
             settotalProject(res.data.projectList);
        }
        adminData();
      },[])
      const Tabledata = totalProject;
      console.log("data = ",Tabledata);
    return (
        <div className="totalproject">
            <div className="tableDisplay">
            
            {Tabledata.map(({ projName ,projDesc , client,duration,empAssigned ,projManager})=>{
               return( <TotalprojectTable 
                title1="PROJECT NAME" 
                title2="DESC" 
                title3="CLIENT" 
                title4="DURATION" 
                title5 ="EMPLOYEES"
                title6 = "MANAGER"
                
                projName={projName}  
                projDesc ={projDesc}
                client ={client}
                duration ={duration}
                empAssigned={empAssigned}
                projManager={projManager}  />
            );
            })}
            </div>
            
        </div>
    )
}

export default Totalproject
