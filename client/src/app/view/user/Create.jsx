import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import BasicForm from "../../components/user/BasicForm";

const CreateUser = () => {
	const [firstName, setFirstName]= useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [birthdate, setBirthdate]= useState(null);

	// * Maneja el submit
	const handleSubmit = (event) => {
		event.preventDefault();

		
	}

	return (
		<Form className="p-3" onSubmit={handleSubmit}>
			<BasicForm 
				label="First Name"
				type="text"
				placeholder="First Name" 
				onChange={({ target }) => setFirstName(target.value)} />
			
			<BasicForm 
				label="Last Name"
				type="text"
				placeholder="Last Name" 
				onChange={({ target }) => setLastName(target.value)} />

			<BasicForm 
				label="Email address"
				type="text"
				placeholder="Enter email" 
				onChange={({ target }) => setEmail(target.value)} />

			<BasicForm 
				label="Password"
				type="password"
				placeholder="Password" 
				onChange={({ target }) => setPassword(target.value)} />

			<BasicForm 
				label="Birthdate"
				type="date"
				placeholder="date" 
				onChange={({ target }) => setBirthdate(target.value)} />

			<Col>
			<Button variant="primary" type="submit">
				Register
			</Button>
			</Col>
		</Form>
	);
};
export default CreateUser;
