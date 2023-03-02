import { Form, Button, Row, Col } from "react-bootstrap";

const CreateUser = () => {
	return (
		<Form className="p-3">
			<Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} >First Name</Form.Label>
        <Col sm={6}>
					<Form.Control type="text" placeholder="First Name" />
				</Col>
      </Form.Group>
			
			<Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>Last Name</Form.Label>
				<Col sm={6}>
        	<Form.Control type="text" placeholder="Last Name" />
				</Col>
      </Form.Group>

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

			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>Birthdate</Form.Label>
				<Col sm={6}>
					<Form.Control type="date" placeholder="Password" />
				</Col>
			</Form.Group>

			<Col>
			<Button variant="primary" type="submit">
				Register
			</Button>
			</Col>
		</Form>
	);
};
export default CreateUser;
