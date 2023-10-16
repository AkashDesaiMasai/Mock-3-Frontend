import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const DashboardTable = () => {
  const URL = process.env.REACT_APP_API_URL;
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`${URL}/employees`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


const handleDelete = async(id)=>{
const res = axios.delete(`${URL}/employees/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(getData())

}

  useEffect(() => {
    getData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Employee Data</h2>
      <table style={{width:"100%", textAlign:"center"}}> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>update</td>
              <td><button onClick={()=>handleDelete(employee._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
