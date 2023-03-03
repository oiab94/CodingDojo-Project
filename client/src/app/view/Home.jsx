import { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap"
import CreateUser from "./user/Create"
import LoginUser from "./user/Login";

const Home = () => {
	const [show, setShow] = useState(true);

	return (
		<Container>
			<Row className="text-center">
				{
					show ? 
						<Alert variant="danger" onClose={() => setShow(false)} dismissible>
						<Alert.Heading>Noticia</Alert.Heading>
							<p>La BD todavía no está implementada, solo funciona el FrontEnd a modo de demostración</p>
						</Alert>:
						null
			}
				<h1>ISport</h1>
				<h3>Free pickup Game Finder and Organizer</h3>
			</Row>
			<Row className="mt-3">
				<Col className="border border-dark me-3">
					<CreateUser />
				</Col>
				<Col className="border border-dark ms-3">
					<LoginUser />
				</Col>
			</Row>
		</Container>
	);
}

export default Home;