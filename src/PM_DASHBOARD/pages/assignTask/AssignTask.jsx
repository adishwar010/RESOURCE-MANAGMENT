import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddEmpComp from "./AddEmpComp";
import "./CreateProject.css";
import axios from 'axios';

const credentials = {
  pmName:'',
  task_ass: "",
  client_name: "",
};
const AssignTask = () => {
  const [details, setdetails] = useState(credentials);
  const [start_date, setStart_date] = useState();
  const [empData, setempData] = useState([]);
  const [empName, setempName] = useState("");
  const [EmpAddedList, setEmpAddedList] = useState([]);
  let newData;

  const handleInput = (event) => {
    let { name, value } = event.target;
    setdetails({
      ...details,
      [name]: value,
    });
  };
  const handleEmpName =(event) =>{
    let { name, value } = event.target;
    setempName(value);
};
const deleteItem = (id) => {
  console.log("deleted");
  setEmpAddedList((olditems)=>{
      return olditems.filter((arrElem , index)=>{
          return index!==id;
      })

  })
};
const AddEmployee = (event) =>{
  event.preventDefault();
  setEmpAddedList((olditems)=>{
    return([...olditems,empName]);
})
setempName("");
};

const name_array = EmpAddedList;
console.log(name_array);
  const submitFunction = (event) => {
    event.preventDefault();
    newData = {
      pmName : details.pmName,
       name: name_array,
      task: details.task_ass,
      client: details.client_name,
      date: start_date,
    };
    setempData([...empData, newData]);

    const projectData = {
      projManager: details.pmName,
      empAssigned: name_array,
      projName: details.task_ass,
      client: details.client_name,
      startDate: start_date,
    }
      async function addProject(){
        const res = await axios.post("http://localhost:4000/hrms/addproject",projectData); 
        // console.log(res.data);
      
    }

    addProject();
  };
 

  return (
    <>
      <div className="addUser">
        <div className="main_con">
          <div className="form_card">
            <br />
            <h1>CREATE PROJECT</h1>
            <hr />
            <br />
            <form action="" onSubmit={submitFunction}>
            <InputLabel htmlFor="pmName">ENTER YOUR NAME</InputLabel>
                <Input
                  type="text"
                  name="pmName"
                  id="pmName"
                  value={details.pmName}
                  onChange={handleInput}
                />
                <br/>
                <br />
              <div className="task_assigned">
                <InputLabel htmlFor="task_ass">ENTER PROJECT NAME</InputLabel>
                <Input
                  type="text"
                  name="task_ass"
                  id="task_ass"
                  value={details.task_ass}
                  onChange={handleInput}
                />
              </div>
              <br />
              <InputLabel htmlFor="client_name">ENTER CLIENT NAME</InputLabel>
              <Input
                type="text"
                name="client_name"
                id="client_name"
                value={details.client_name}
                onChange={handleInput}
              />
              <br />
              <br />
              <InputLabel htmlFor="start_date">ENTER STARTING DATE</InputLabel>
              <Input
                type="date"
                name="start_date"
                id="start_date"
                value={start_date}
                onChange={(event) => {
                  setStart_date(event.target.value);
                }}
              />
              <br /> 
              <br />
              <div className="addEmployee">
                <InputLabel htmlFor="emp_name">ENTER EMPLOYEE's</InputLabel>
                <div className="AddEmpDetails">
                  <Input
                    type="text"
                    name="emp_name"
                    id="emp_name"
                    autoComplete="off"
                    value={empName}
                    onChange={handleEmpName}
                  />
                  <button id="addEmp" onClick={AddEmployee}><PersonAddIcon style={{ fontSize: 35 }}/></button>
                </div>
                <div className="Emp_details_show">
                {EmpAddedList.map((data , index)=>{
                        return <AddEmpComp text={data}
                        key ={index}
                        id ={index}
                        onSelect = {deleteItem}
                        />;
                    })}
                </div>
              </div>
              <br />
              <button id="assign_task" type="submit">
                ASSIGN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignTask;
