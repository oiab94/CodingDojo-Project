import { Form, Button, Col } from "react-bootstrap";
import BasicForm from "../../components/user/BasicForm";
import { Link } from "react-router-dom"

const LoginUser = () => {
	return (
		<>
		<Form className="p-3">
			<BasicForm
				label="Email addres"
				type="text"
				placeholder="Enter email address" />

			<BasicForm
				label="Password"
				type="password"
				placeholder="Password" />

			<Col>
			<Button as={Link} to="/dashboard" variant="primary" type="submit">
				Login
			</Button>
			</Col>
		</Form>
		</>
	);
}
export default LoginUser;