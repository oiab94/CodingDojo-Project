import { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import BasicForm from "../../components/user/BasicForm";
import axios from "axios";

const CreateUser = () => {
	const URL = "http://localhost:8000/api";
	const [firstName, setFirstName]= useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [birthdate, setBirthdate]= useState(null);
	const [isEmailValid, setIsEmailValid] = useState("")
	const [isPasswordValid, setIsPasswordValid] = useState("")
	const [isFormValid, setIsFormValid] = useState(false);

	// * Maneja el submit
	const handleSubmit = (event) => {
		event.preventDefault();

		// Refrescamos los errores
		setIsEmailValid("");
		setIsPasswordValid("");

		// Enviamos el formulario
		axios.post(
			URL + "/signup",
			{
				firstName,
				lastName,
				email,
				password,
				birthdate
			},
			{ withCredentials: true })
			.then(user => {
				setIsFormValid(true);
				setTimeout(() => {
					setIsFormValid(false)
				}, 3000)
			})
			.catch(({ response }) => {
				console.log(response);
				setIsEmailValid(response.data.email);
				setIsPasswordValid(response.data.password);
			})
	}

	return (
		<>
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
			{
				isEmailValid !== "" 
					? <Row className="justify-content-end mb-3">
							<Form.Text 
								as={Col} 
								sm={7} 
								className="text-danger">{ isEmailValid }</Form.Text>
						</Row>
					: null
				}

			<BasicForm 
				label="Password"
				type="password"
				placeholder="Password" 
				onChange={({ target }) => setPassword(target.value)} />
			{
				isPasswordValid !== ""
				? <Row className="justify-content-end mb-3">
							<Form.Text 
								as={Col} 
								sm={7} 
								className="text-danger">{ isPasswordValid }</Form.Text>
						</Row>
					: null
			}

			<BasicForm 
				label="Birthdate"
				type="date"
				placeholder="date" 
				onChange={({ target }) => setBirthdate(target.value)} />

			<Col>
			<Button variant="primary" type="submit">
				Register
			</Button>
			{
				isFormValid
					? <Alert variant="success" className="mt-3"> Usuario Registrado </Alert>
					: null
			}
			</Col>
		</Form>
		</>
	);
};
export default CreateUser;
