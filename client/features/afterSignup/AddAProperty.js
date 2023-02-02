// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createProperty } from "./AddAPropertySlice";
// import { selectMe } from "../auth/authSlice";


// const CreateProperty = () => {
//   const dispatch = useDispatch();
//   const me = useSelector(selectMe);
//   console.log(`me`,me.id)
//   const [propertyName, setPropertyName] = useState("");
//   const [address, setAddress] = useState("");
//   const [landlordId, setLandlordId] = useState("");
  
//   const handlePropertyNameChange = (event) => {
//     setPropertyName(event.target.value);
//   };

//   const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     dispatch(
//       createProperty(me.id, {
//         propertyName,
//         address,
//         // landlordId: me.id,
//       })
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="propertyName">Property Name:</label>
//         <input
//           type="text"
//           id="propertyName"
//           value={propertyName}
//           onChange={(e) => setPropertyName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input
//           type="text"
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       {/* <div>
//         <label htmlFor="landlordId">Landlord Id:</label>
//         <input
//           type="text"
//           id="landlordId"
//           value={landlordId}
//           onChange={(e) => setLandlordId(e.target.value)}
//         />
//       </div> */}
//       <button type="submit">Add a Property</button>
//     </form>
//   );
// };

// export default CreateProperty;

// // const mapDispatchToProps = {
// //   createProperty: createPropertyAction
// // };

// // export default connect(
// //   null,
// //   mapDispatchToProps
// // )(CreateProperty);


// // I STOPPED HERE LANDLORD ID CONNECT TO COMPLEXID

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProperty, getLandlordId } from "./AddAPropertySlice";
import { selectMe } from "../auth/authSlice";

const CreateProperty = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [landlordId, setLandlordId] = useState(null);
  
  useEffect(() => {
    const fetchLandlordId = async () => {
      const landlordId = await dispatch(getLandlordId(me.id));
      setLandlordId(landlordId);
    };
    fetchLandlordId();
  }, [dispatch, me.id]);

  const handlePropertyNameChange = (event) => {
    setPropertyName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (landlordId) {
      dispatch(
        createProperty(me.id, {
          propertyName,
          address,
          userId: me.id,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="propertyName">Property Name:</label>
        <input
          type="text"
          id="propertyName"
          value={propertyName}
          onChange={handlePropertyNameChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
      <button type="submit">Add a Property</button>
    </form>
  );
};

export default CreateProperty;