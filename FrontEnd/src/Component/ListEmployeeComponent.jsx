import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((errr) => {
        console.error(errr);
      });
  };

  const addEmployee = () => {
    navigator("/add-employee");
  };

  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };
  const removeEmployee = (id) => {
    console.log(id);

    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">ListEmployeeComponent</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Emplolyee ID</th>
            <th>Emplolyee FirstName</th>
            <th>Emplolyee LastName</th>
            <th>Emplolyee Email_Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>

              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)} style={{ marginLeft:'10px'}}
              >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addEmployee}>
        Add Employee
      </button>
    </div>
  );
};

export default ListEmployeeComponent;
