import React, { useEffect, useState } from "react";
import axios from "axios";

const EditRent = ({ afterEdit, currentrent }) => {
	const [rent, setrent] = useState({ ...currentrent });
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setrent({ ...currentrent });
	}, [currentrent]);

	const onSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		const token = window.localStorage.getItem("token");
		const config = {
			headers: {
				Authorization: token,
			},
		};

		axios
			.put(`/api/rents/${rent.id}`, rent, config)
			.then(afterEdit)
			.catch(console.error)
			.finally(() => setLoading(false));
	};
	const updaterentValues = (event) => {
		const keyToUpdate = event.target.name;
		setrent((currentValues) => ({
			...currentValues,
			[keyToUpdate]: event.target.value,
		}));
		console.log(rent)
	};

	return (
		<div className="editRent">
			<section className="editRentHeader">
				<h2>Edit rent</h2>
				<p>Fill out the form below</p>
			</section>

			<div className="editRentForm">
				<form onSubmit={onSubmit}>
						<label>rent Price</label>
						<input
							disabled={loading}
							name="price"
							onChange={updaterentValues}
							placeholder="Price"
							type="number"
							value={rent.price}
						/>
					<div>
						<button className="btn" disabled={loading}>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditRent;
