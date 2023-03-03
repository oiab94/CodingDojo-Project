import { Container, Accordion, Row, Col, Image } from "react-bootstrap"
import { events } from "../../test/dashboard.test"


const EventTable = () => {
	const values = events;

	return (
		<>
			<Container>
			<Row>
				<Col sm={5}>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Event Date</Accordion.Header>
						<Accordion.Body>
							<span>Title: { values[0].name }</span><br />
							<span>Date: { values[0].date }</span><br />
							<span>Time: 4 pm</span><br />
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header>Information</Accordion.Header>
						<Accordion.Body>Se escribe alguna informacion</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="2">
						<Accordion.Header>Users</Accordion.Header>
						<Accordion.Body>Se muestra los usuarios</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				</Col>
				
				<Col sm={3}>
					<Image src="#" className="img-thumbnail"/>
				</Col>
			</Row>
			<Row className="border border-dark mt-3">
				<Col>
					<h2>Mensajes:</h2>
					<span>User: Mensaje del usuario</span><br />
					<span>Other User:  Mensaje del usuario</span>
				</Col>
			</Row>
			</Container>
		</>	
	);
}

export default EventTable;