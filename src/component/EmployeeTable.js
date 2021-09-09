import Table from "react-bootstrap/Table";
import Modle from "./Modle";
import { MdDelete } from "react-icons/md"
import { MdAccountCircle } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { useState } from "react";
import EmpprofMoodle from "./EmpprofMoodle";

const EmployeeTable = ({ empID, employee, onClick, employees,totEmp}) => {
//     const [employees, setEmployee] = useState([
//         {
//             empID: 'EM20156',
//             nic:'857896545V',
//             Name: 'Shamali Perera',
//             Address: 'Matara',
//             Email:'shamaliperera@gmail.com',
//             Des:'Manager',
//         Salary: 50000,
            
//         },
//          {
//             empID: 'EM20157',
//             nic:'857896545V',
//             Name: 'Navod Gamage',
//             Address: 'Matara',
//             Email:'shamaliperera@gmail.com',
//             Des:'Manager',
//         Salary: 50000,
            
//         },
//          {
//             empID: 'EM20158',
//             nic:'857896545V',
//             Name: 'Dishan Abeywikrama',
//             Address: 'Matara',
//             Email:'shamaliperera@gmail.com',
//             Des:'Manager',
//         Salary: 50000,
            
//       },
//          {
//             empID: 'EM20159',
//             nic:'857896545V',
//             Name: 'Nisq',
//             Address: 'Matara',
//             Email:'shamaliperera@gmail.com',
//             Des:'Manager',
//         Salary: 50000,
            
//         }




//     ])
  const [showModle, setShowMoodle] = useState(false)
  const [empDet,setEmpDet] = useState ('')
  const [editForm, showEditForm] = useState(false);
  return (
    <div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>empID</th>
            
            <th>Name</th>
          
          
            <th>Designation</th>
       
          </tr>
        </thead>
         {employees.map((employee) => (
         <tbody key = {employee.empID}>
          <tr>
           
              <td>{employee.empID}</td>
           
            <td>{employee.Name }</td>
            
        
            <td>{employee.Des}</td>
           
               <td><MdAccountCircle onClick={() => {
                 setShowMoodle(true)
                 setEmpDet(employee)
               }} style={{ cursor: 'pointer' }} /> {'  '}
                 <MdCreate fontSize="large" onClick={() => {
                 showEditForm(true)
                 setEmpDet(employee)
               }} style={{ cursor: 'pointer' }}></MdCreate>
              
              {' '}
              <MdDelete  style color="red" onClick={() => console.log("Delete Icon")}
                style={{ cursor: 'pointer' }} />
             
            </td>
          </tr> 
         
        </tbody> ))}
      </Table>
      <EmpprofMoodle show={showModle} onHide={() => setShowMoodle(false)} employee={empDet} />
      <Modle show={editForm} onHide={() => showEditForm(false)} employee = {empDet} />
      
    </div>
  );
};

export default EmployeeTable;
