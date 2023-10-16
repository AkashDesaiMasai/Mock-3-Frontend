import React, { useState } from "react";
import {
  Container,
  Stack,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

const AddEmployee = () => {
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = useState({
    name: "",
    last_name: "",
    email: "",
    amount: 0,
    department: "",
    date: "", // Add date to the initial state
    userID: token, // Ensure token is a valid value
  });

  const URL = process.env.REACT_APP_API_URL || `http://localhost:8080`;

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${URL}/employees`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      // You can reset the form data here if needed
      setData({
        name: "",
        last_name: "",
        email: "",
        amount: 0,
        department: "",
        date: "",
        userID: token,
      });
    } catch (error) {
      console.error("Error while adding employee:", error);
    }
  };

  return (
    <Container>
      <h1>Add Employee</h1>
      <Stack spacing={3}>
        <Input
          placeholder="Enter First Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
        />

        <Input
          placeholder="Enter Last Name"
          onChange={(e) => setData({ ...data, last_name: e.target.value })}
          value={data.last_name}
        />

        <Input
          placeholder="Enter email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <Select
          placeholder="Department"
          size="lg"
          onChange={(e) => setData({ ...data, department: e.target.value })}
          value={data.department}
        >
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </Select>
        <Input
          placeholder="Enter salary"
          onChange={(e) => setData({ ...data, amount: e.target.value })}
          value={data.amount}
        />

        <Input
          placeholder="Select Date"
          type="date"
          onChange={(e) => setData({ ...data, date: e.target.value })}
          value={data.date}
        />
        <Button colorScheme="teal" size="md" onClick={handleSubmit}>
          Add
        </Button>
      </Stack>
    </Container>
  );
};

export default AddEmployee;
