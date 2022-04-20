import React, { useEffect, useState } from "react";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import User from "../User/User";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div className="container">
			<h2>This is Users Page</h2>
			<CreateUserForm setUsers={setUsers} users={users}></CreateUserForm>
			<span>Total user is: {users.length}</span>
			<table>
				<thead style={{ fontWeight: "bold" }}>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Email Address</th>
						<th>Job</th>
						<th>Action</th>
					</tr>
				</thead>
				{users.map((user) => (
					<User user={user} key={user.id}></User>
				))}
			</table>
		</div>
	);
};

export default Users;
