import React ,{useEffect,useState} from 'react'
import Table from './OnbenchTable'
import axios from 'axios'
import "./Onbench.css"

const Onbench = () => {
    const [onBench,setonBench] = useState([]);
    useEffect (() =>{
        async function adminData(){
        
          const res = await axios.get("http://localhost:4000/hrms/dashboardDetails?username=admin@test.com&role=Admin") 
         
             setonBench(res.data.onbechemplist);
        }
        adminData();
      },[])
      const Tabledata = onBench;
      console.log("data = ",Tabledata);
    return (
        <div className="onBenchEmpData">
            <div className="tableDisplay">
            
            {Tabledata.map(({ empid ,empname ,manager})=>{
               return( <Table title1="EMP ID" title2="EMP NAME" title3="MANAGER" empid={empid} empname={empname}  manager={manager}  />
            );
            })}
            </div>
            
        </div>
    )
}

export default Onbench
