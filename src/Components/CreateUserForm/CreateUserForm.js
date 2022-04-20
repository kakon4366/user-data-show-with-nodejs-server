import React from "react";
import "./CreateUserForm.css";

const CreateUserForm = ({ setUsers, users }) => {
	const handleCreateUser = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const job = e.target.job.value;

		const user = { name, email, job };

		//post data server
		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				const newUser = [...users, data];
				setUsers(newUser);
			});
	};

	return (
		<div className="create-user-form">
			<form onSubmit={handleCreateUser} action="">
				<input name="name" type="text" placeholder="Full Name" />
				<input name="email" type="email" placeholder="Email Address" />
				<select name="job" id="">
					<option>Select Your Job</option>
					<option value="web Developer">Web Developer</option>
					<option value="Android Developer">Android Developer</option>
					<option value="Fullstak Developer">Fullstak Developer</option>
				</select>
				<input className="btn" type="submit" value="Save User" />
			</form>
		</div>
	);
};

export default CreateUserForm;
