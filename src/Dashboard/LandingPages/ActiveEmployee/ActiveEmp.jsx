import React ,{useEffect,useState} from 'react'
import Table from './Table'
import axios from 'axios'
import "./ActiveEmp.css"

const ActiveEmployee = () => {
    const [activeEmp,setactiveEmp] = useState([]);
    useEffect (() =>{
        async function adminData(){
        
          const res = await axios.get("http://localhost:4000/hrms/dashboardDetails?username=admin@test.com&role=Admin") 
         
             setactiveEmp(res.data.activemplist);
        }
        adminData();
      },[])
      const Tabledata = activeEmp;
      console.log("data = ",Tabledata);
    return (
        <div className="activeEmpData">
            <div className="tableDisplay">
            
            {Tabledata.map(({ empid ,empname ,projectname ,manager})=>{
               return( <Table title1="EMP ID" title2="EMP NAME" title3="PROJECT" title4="MANAGER" empid={empid} empname={empname} projectname={projectname} manager={manager}  />
            );
            })}
            </div>
            
        </div>
    )
}

export default ActiveEmployee;
