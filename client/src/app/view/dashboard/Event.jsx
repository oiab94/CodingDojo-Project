import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Accordion, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EventTable = (props) => {
	const { id } = useParams();
	const URL = "http://localhost:8000/api";
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [information, setInformation] = useState("");

	useEffect(() => {
		axios.get(
			URL + "/event/" + id,
			{withCredentials: true}
		)
			.then(({ data }) => {
				setTitle(data.title);
				setDate(data.date);
				setTime(data.time);
				setInformation(data.information);
			})
			.catch(error => console.log(error))
	}, []);

	return (
		<>
			<Container>
			<Row>
				<Col sm={5}>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Event Date</Accordion.Header>
						<Accordion.Body>
							<span>Title: { title }</span><br />
							<span>Date: { date.slice(0, 10) }</span><br />
							<span>Time: { time }</span><br />
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header>Information</Accordion.Header>
						<Accordion.Body>{ information }</Accordion.Body>
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