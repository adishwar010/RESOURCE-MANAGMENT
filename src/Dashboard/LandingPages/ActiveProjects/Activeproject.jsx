import React ,{useEffect,useState} from 'react'
import ActiveprojectTable from './ActiveprojectTable'
import axios from 'axios'
import "./Activeproject.css"

const Activeproject = () => {
    const [onBench,setonBench] = useState([]);
    useEffect (() =>{
        async function adminData(){
        
          const res = await axios.get("http://localhost:4000/hrms/dashboardDetails?username=admin@test.com&role=Admin") 
         
             setonBench(res.data.activeprojlist);
        }
        adminData();
      },[])
      const Tabledata = onBench;
      console.log("data = ",Tabledata);
    return (
        <div className="activeproject">
            <div className="tableDisplay">
            
            {Tabledata.map(({ empid ,empname , projectname,manager})=>{
               return( <ActiveprojectTable title1="EMP ID" title2="EMP NAME" title3="MANAGER" title4="MANAGER" empid={empid} empname={empname} projectname={projectname}  manager={manager}  />
            );
            })}
            </div>
            
        </div>
    )
}

export default Activeproject
