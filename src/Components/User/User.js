import React from "react";
import "./User.css";

const User = ({ user }) => {
	const { id, name, email, job } = user;
	return (
		<tbody>
			<tr>
				<td>{id}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>{job}</td>
				<td>NaN</td>
			</tr>
		</tbody>
	);
};

export default User;
