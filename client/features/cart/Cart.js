import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMe } from "../auth/authSlice";
import { fetchRentsAsync, selectRents } from "../rent/rentSlice";
import { storeRentDetails } from "./cartRentDetailsSlice";
import {
	selectCart,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
	updateCartAsync,
	updateCartLocalAsync,
} from "./cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const allRents = useSelector(selectRents);
	const cart = useSelector(selectCart);
	const { id } = useSelector(selectMe);
	useEffect(() => {
		dispatch(fetchRentsAsync())
		dispatch(storeRentDetails(cartRents))
	}, [dispatch, cart]);

	if (allRents.length === 0) return null;

	const getRentById = (id) =>
		allRents.find((rent) => rent.id === id);

	const cartRents = cart.map((item) => ({
		...item,
		...getRentById(item.rentId),
	}));

	const cartQuantity = cart.length
		? cart.reduce((total, { quantity }) => total + quantity, 0)
		: 0;

	const totalCartPrice = cartRents.reduce(
		(total, { price, quantity }) => total + price * quantity,
		0
	);

	const handleIncreaseQuantity = ({ id: rentId }) => {
		dispatch(increaseQuantity({ rentId }));
		dispatch(updateCartLocalAsync())
	};

	const handleDecreaseQuantity = ({ id: rentId }) => {
		dispatch(decreaseQuantity({ rentId }));
		dispatch(updateCartLocalAsync())
	};

	const handleRemoveItem = ({ rentId }) => {
		dispatch(removeItem(rentId));
		dispatch(updateCartLocalAsync())
	};

	const handleUpdateCart = () => {
		dispatch(updateCartLocalAsync())
		if (id) return dispatch(updateCartAsync());
		return null;
	};
	return (
		<div className="cartPage">
			<div >
				<h1>Review your rent</h1>
				
			</div>
			<ul >
				{cartRents.map((item) => (
					<li key={`Cart item ${item.rentId}`}>
						{!item.name ? <div className="error">DELETE THIS ITEM IT IS NO LONGER AVAILABLE<button onClick={() => {
							handleRemoveItem(item);
							handleUpdateCart(item.rentId);
						}}>Remove</button><hr /></div> :
							<div className="cartRentCard">
								<img src={item.imageUrl} width="75" height="75" /><br />

								<div className="cartRentCardInfo">
								<h1>{item.name}{" "}</h1>
								<div className="cartRentCardButtons">
									<button className="adjustQtyBtn" onClick={() => {
											handleIncreaseQuantity(item);
											handleUpdateCart();
										}}>
										+
									</button>{" "}
									<h3>Total:{item.quantity}</h3>
									<button className="adjustQtyBtn"
										onClick={() => {
											handleDecreaseQuantity(item);
											handleUpdateCart();
										}}
									>
										-
									</button>{" "}
									<button className="removeItemButton"
									onClick={() => {
										handleRemoveItem(item);
										handleUpdateCart(item.rentId);
									}}
								>
									Remove
								</button>
								</div>
							
								<h3 className="cartRentPrice">Rent: ${item.price}</h3>
								</div>
								<div className="cartTotalPrice">Total Rent: ${item.price * item.quantity}.00</div>
							</div>}
					</li>
				))}
				<div className="orderSummary">
					<h2>Order Summary</h2>
					{Number.isNaN(totalCartPrice) ? null : <p >Total Quantity: {cartQuantity}</p>}<br />
					{Number.isNaN(totalCartPrice) ? "Some rents no longer available remove them from cart" : <p >Total Amount: ${totalCartPrice}.00</p>}
				</div>
			</ul>
		</div>
	);
};

export default Cart;
