import { Form, Button, Col } from "react-bootstrap";
import BasicForm from "../../components/user/BasicForm";
import axios from "axios";
import { useState } from "react";

const LoginUser = () => {
	const URL = "http://localhost:8000/api";
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ isEmailValid, setIsEmailValid ] = useState("");
	const [ isPasswordValid, setIsPasswordValid ]= useState("");

	const handleLogin = (event) => {
		event.preventDefault();

		axios.post(
			URL + "/login",
			{ email, password },
			{withCredentials: true})
			.then(user => {
				window.localStorage.setItem("userID",user.data["userID"])
			})
			.catch(({ response }) => {
				setIsEmailValid(response.data["email"]);
				setIsPasswordValid(response.data["password"]);
			})
	}

	return (
		<>
		<Form className="p-3" onSubmit={ handleLogin }>
			<BasicForm
				label="Email addres"
				type="text"
				placeholder="Enter email address"
				onChange={({ target }) => setEmail(target.value)} />
			{
				isEmailValid !== ""
					? <p className="text-danger text-opacity-75">{ isEmailValid }</p>
					: null
			}

			<BasicForm
				label="Password"
				type="password"
				placeholder="Password" 
				onChange={({ target }) => setPassword(target.value)} />
			{
				isPasswordValid !== ""
					? <p className="text-danger text-opacity-75">{ isPasswordValid }</p>
					: null
			}

			<Col>
			<Button variant="primary" type="submit">
				Login
			</Button>
			</Col>
		</Form>
		</>
	);
}
export default LoginUser;