import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistoryAsync, selectOrders } from "./orderSlice";
export const OrderHistory = () => {
	const dispatch = useDispatch();
	const orderHistory = useSelector(selectOrders);
	useEffect(() => {
		dispatch(fetchOrderHistoryAsync());
	}, [dispatch]);

	const orderDetails = orderHistory.map((orders) => {
		return {
			...orders,
			total: orders.rentDetails.reduce(
				(total, rent) => total + rent.quantity * rent.price,
				0
			)
		};
	})

	return (
		<div className="OrderHistoryFullPage">
			<div className="OrderHistory">
			<span>Your rent History</span>
			<hr />
			{orderHistory && orderHistory.length ? (
				orderDetails.map((order) => (
					<div className="singleOrderHistory" key={`orderId ${order.id}`}>
						<div className="orderDetails">
						<h2>rent Number: {order.id}</h2>
						<h2>Rent Total: ${order.total}.00</h2>
						</div>
						{order.rentDetails.map((rent) => (
							<ul key={`rent ${rent.id}`}>
								
								<div className="orderDetailsInfo">
								<li>Price: {rent.price}</li>
								<li>Qty: {rent.quantity}</li>
								<li>Rent Total: ${rent.quantity * rent.price}.00</li>
								</div>
							</ul>
						))}

					</div>
				))
			) : (
				<div>You have no rent payments</div>
			)}
			</div>
		</div>
	);
};
