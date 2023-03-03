import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

const LoginUser = () => {
	return (
		<>
		<Form className="p-3">
			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>Email address</Form.Label>
				<Col sm={6}>
					<Form.Control type="text" placeholder="Enter email" />
				</Col>
			</Form.Group>

			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>Password</Form.Label>
				<Col sm={6}>
					<Form.Control type="password" placeholder="Password" />
				</Col>
			</Form.Group>

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