// import React from "react";
// import "./table.scss";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const List = () => {
//   const rows = [
//     {
//       id: 1,
//       property: "125 main street, New York, NY 10001",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       priceBought: 265600,
//       datepurchase: "1 March",
//       rentAmount: 3000,
//       mortgagePayment: 582.98,
//       currentMarketValue: 370000,
//       status: "Approved",
//       hoa: 0,
//       propertyTaxes: 0,
//       insurance: 0,
//       propertyLLC: "No Need [Homestead]",
//       passiveIncome: 0,
//     },
//     {
//       id: 2,
//       property: "6521 E uptown ave AZ 85283 ",
//       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//       priceBought: 126500,
//       datepurchase: "1 March",
//       rentAmount: 700,
//       mortgagePayment: 582.98,
//       currentMarketValue: 250000,
//       status: "Approved",
//       hoa: 0,
//       propertyTaxes: 0,
//       insurance: 0,
//       propertyLLC: "No",
//       passiveIncome: 0,
//     },
//     {
//       id: 3,
//       property: "6541 West Commercial Blvd, Fort Lauderdale, FL 33309",
//       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
//       priceBought: 197000,
//       datepurchase: "1 March",
//       rentAmount: 700,
//       mortgagePayment: 582.98,
//       currentMarketValue: 200000,
//       status: "Approved",
//       hoa: 0,
//       propertyTaxes: 0,
//       insurance: 0,
//       propertyLLC: "No",
//       passiveIncome: 0,
//     },
//     {
//       id: 4,
//       property: "1246 South 4th St, Phoenix, AZ 85004",
//       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
//       priceBought: 197000,
//       datepurchase: "1 March",
//       rentAmount: 700,
//       mortgagePayment: 582.98,
//       currentMarketValue: 200000,
//       status: "Approved",
//       hoa: 0,
//       propertyTaxes: 0,
//       insurance: 0,
//       propertyLLC: "No",
//       passiveIncome: 0,
//     },
//     {
//       id: 5,
//       property: "85903 E 2nd St, Scottsdale, AZ 85251",
//       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
//       priceBought: 197000,
//       datepurchase: "1 March",
//       rentAmount: 700,
//       mortgagePayment: 582.98,
//       currentMarketValue: 200000,
//       status: "Approved",
//       hoa: 0,
//       propertyTaxes: 0,
//       insurance: 0,
//       propertyLLC: "No",
//       passiveIncome: 0,
//     },
//   ];
//   return (
//     <TableContainer component={Paper} className="table">
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="tableCell">Tracking ID</TableCell>
//             <TableCell className="tableCell">Property</TableCell>
//             <TableCell className="tableCell">Price Bought</TableCell>
//             <TableCell className="tableCell">Date Bought</TableCell>
//             <TableCell className="tableCell">Rental Amount</TableCell>
//             <TableCell className="tableCell">Mortgage Payment</TableCell>
//             <TableCell className="tableCell">Current Market Value</TableCell>
//             <TableCell className="tableCell">Status</TableCell>
//             <TableCell className="tableCell">HOA Expense</TableCell>
//             <TableCell className="tableCell">Property Tax Yearly</TableCell>
//             <TableCell className="tableCell">Insurance Yearly</TableCell>
//             <TableCell className="tableCell">Property LLC</TableCell>
//             <TableCell className="tableCell">Passive Income</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell className="tableCell">{row.id}</TableCell>
//               <TableCell className="tableCell">
//                 <div className="cellWrapper">
//                   <img src={row.img} alt="" className="image" />
//                   {row.property}
//                 </div>
//               </TableCell>
//               <TableCell className="tableCell">{row.priceBought}</TableCell>
//               <TableCell className="tableCell">{row.datepurchase}</TableCell>
//               <TableCell className="tableCell">{row.rentAmount}</TableCell>
//               <TableCell className="tableCell">{row.mortgagePayment}</TableCell>
//               <TableCell className="tableCell">{row.currentMarketValue}</TableCell>
//               <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
//               <TableCell className="tableCell">{row.hoa}</TableCell>
//               <TableCell className="tableCell">{row.propertyTaxes}</TableCell>
//               <TableCell className="tableCell">{row.insurance}</TableCell>
//               <TableCell className="tableCell">{row.propertyLLC}</TableCell>
//               <TableCell className="tableCell">{row.passiveIncome}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default List;

import React, { useEffect } from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// useSelector and useDispatch are hooks that allow us to access the state and dispatch actions
import { useSelector, useDispatch } from "react-redux";
// selectProperties is the function we wrote in our propertySlice.js file that selects the properties from the state
import { selectProperties } from "../../features/property/propertySlice";
// fetchPropertiesAsync is the function we wrote in our propertySlice.js file that fetches the properties from the API
import { fetchPropertiesAsync } from "../../features/property/propertySlice";

const List = () => {
  // useDispatch is a hook that allows us to dispatch actions
  const dispatch = useDispatch();
  // useEffect is a hook that allows us to run code when the component mounts
  useEffect(() => {
    dispatch(fetchPropertiesAsync());
  }, [dispatch]);

  // useSelector is a hook that allows us to select data from the state
  const properties = useSelector(selectProperties);
  console.log(properties);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Property Name</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Number of Units</TableCell>
            <TableCell className="tableCell">Landlord ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="tableCell">{property.id}</TableCell>
              <TableCell className="tableCell">
                {property.propertyName}
              </TableCell>
              <TableCell className="tableCell">{property.address}</TableCell>
              <TableCell className="tableCell">
                {property.numberOfUnits}
              </TableCell>
              <TableCell className="tableCell">{property.landlordId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
