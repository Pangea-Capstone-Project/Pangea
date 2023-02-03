import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRentAsync, selectSingleRent } from "./singleRentSlice";
import {
	addItem,
	increaseQuantity,
	selectCart,
	updateCartAsync,
	updateCartLocalAsync,
} from "../cart/cartSlice";
import { Link } from "react-router-dom";
import { selectAuth } from "../auth/authSlice";
import EditRent from "./EditRent";

export const Rent = () => {
	const { isAdmin, id } = useSelector(selectAuth);
	const rent = useSelector(selectSingleRent);
	const cart = useSelector(selectCart);
	const { rentId } = useParams();
	const dispatch = useDispatch();
	const {  price } = rent;

	useEffect(() => {
		dispatch(fetchRentAsync(rentId));
	}, [dispatch, rentId]);

	const handleAddToCart = (rent) => {
		const doesItExist = cart.find((item) => item.rentId === rent.id);
		if (doesItExist) {
			return dispatch(increaseQuantity({ rentId: rent.id }));
		}
		return dispatch(addItem({ rentId: rent.id, quantity: 1 }));
	};

	const handleUpdateCart = () => {
		dispatch(updateCartLocalAsync());
		if (id) return dispatch(updateCartAsync());
		return null;
	};
	return (
		<div className="singleRent">
			<div>
				{isAdmin ? (
					<div>
						<EditRent
							afterEdit={() => dispatch(fetchRentAsync(rentId))}
							currentRent={rent}
						/>
					</div>
				) : null}
			</div>
{/* <Link to="/rents" className="backTorentsBtn">
				<p>Back to all rents</p>
			</Link> */}
			<div className="singleRentInfo">
				<h3>${price}</h3>
				<button
				onClick={() => {
					handleAddToCart(rent);
					handleUpdateCart();
				}}
			>
				Add to Cart
			</button>
			</div>
			
			
			
		</div>
	);
};
