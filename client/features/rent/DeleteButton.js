import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRentAsync, fetchRentsAsync } from "./rentSlice";

const DeleteButton = ({ rentId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteRentAsync(rentId));
    alert(`rent was deleted`);
    dispatch(fetchRentsAsync());
  };

  return (
    <div>
      <button
        className="deleteRentButton"
        onClick={handleDelete}>Delete Rent
      </button>
    </div>
  )
};

export default DeleteButton;
