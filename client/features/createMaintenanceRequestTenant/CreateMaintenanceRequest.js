// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createMaintenanceRequest } from "./createMaintenanceRequestSlice";
// import { fetchUnitsAsync, selectUnits } from "../units/unitsSlice";

// const CreateMaintenanceRequest = () => {
//   const dispatch = useDispatch();
//   const units = useSelector(selectUnits)
//   console.log(`units`,units)
//   const [requestData, setRequestData] = useState({
//     type: "",
//     severity: "",
//     description: "",
//     unitId: "",
//   });

//   useEffect(() => {
//     dispatch(fetchUnitsAsync()).then(() => {
//       console.log(`i fired off`, units);
//     });
//   }, [dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createMaintenanceRequest(requestData));
//   };

//   const handleChange = (e) => {
//     setRequestData({
//       ...requestData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//          <select
//         name="unitId"
//         value={requestData.unitId}
//         onChange={handleChange}
//       >
//         {units.map((unit) => (
//           <option key={unit.id} value={unit.id}>
//             {unit.unitNumber}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         name="type"
//         value={requestData.type}
//         placeholder="Type"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="severity"
//         value={requestData.severity}
//         placeholder="Severity"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="description"
//         value={requestData.description}
//         placeholder="Description"
//         onChange={handleChange}
//       />
//       <button type="submit">Submit Workorder</button>
//     </form>
//   );
// };

// export default CreateMaintenanceRequest;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createMaintenanceRequest } from "./createMaintenanceRequestSlice";
import { fetchUnitsAsync, selectUnits } from "../units/unitsSlice";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background-color: #F6F6F6;
padding: 20px;
border-radius: 10px;
width: 80%;
margin: 20px auto;
background-color: #f2f2f2;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

const Input = styled.input`
margin: 10px 0;
padding: 10px;
width: 60%;
font-size: 1.2em;
border-radius: 5px;
border: none;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;


const Button = styled.button`
margin-top: 20px;
padding: 10px 20px;
font-size: 18px;
background-color: #1e56a0;
color: #fff;
border-radius: 5px;
border: none;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
cursor: pointer;
&:hover {
  background-color: #163172;
  color: #f6f6f6;
}
`;

const CreateMaintenanceRequest = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectUnits);
  const [requestData, setRequestData] = useState({
    type: "",
    severity: "",
    description: "",
    unitId: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUnitsAsync())
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMaintenanceRequest(requestData));
    navigate('/tenantHome')
  };

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Select name="unitId" value={requestData.unitId} onChange={handleChange}>
        <option value>
          Select Unit Number
        </option>
        {units.map((unit) => (
          <option key={unit.id} value={unit.id}>
            {unit.unitNumber}
          </option>
        ))}
      </Select>
      <Input
        type="text"
        name="type"
        value={requestData.type}
        placeholder="Type"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="severity"
        value={requestData.severity}
        placeholder="Severity"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="description"
        value={requestData.description}
        placeholder="Description"
        onChange={handleChange}
      />
      <Button type="submit">Submit Workorder</Button>
    </Form>
  );
};

export default CreateMaintenanceRequest;
