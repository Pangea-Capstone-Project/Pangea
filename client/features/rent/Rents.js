import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { fetchRentsAsync, selectRents } from "./rentSlice";
import { Link } from "react-router-dom";
import { selectMe } from "../auth/authSlice";
import DeleteButton from "./DeleteButton";
import { SortingSelector } from "./SortingSelector";
import { SearchBar } from "./SearchBar";
const AllRents = () => {
  const rents = useSelector(selectRents);
  const { isAdmin } = useSelector(selectMe)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRentsAsync());
  }, [dispatch]);


  return (
    <div className="rentsPage">
      <div className="rentsTextCard">

        <div className="rentsTextCardText">
        <h1 >Shop rents</h1>
        <h3 >Our most popular rents based on sales. Updated frequently.</h3>
        </div>
       <div className="searchCatDiv">
       <SearchBar />
        <SortingSelector />
       </div>
      </div>
      <div className="rentGrid">

        {rents && rents.length ?
          rents.map((rent) => (

            <ul
              // className="rentGrid"
              key={`All rents: ${rent.id}`}>
              <div className="rentCard">
                <Link className="rentCardLink" to={`/rents/${rent.id}`}>
                  <p>${rent.rentAmount}</p>
                </Link>
              </div>
              {isAdmin ? (<DeleteButton rentId={rent.id} rentName={rent.name} />) : null}
            </ul>
          )) : console.log('---NO rents---', null)
        }
      </div>
    </div>
  )
};
export default AllRents;








