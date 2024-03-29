import { Container, Row, Col } from "react-bootstrap"
import CreateUser from "./user/Create"
import LoginUser from "./user/Login";

const Home = () => {
	return (
		<Container>
			<Row className="text-center">
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