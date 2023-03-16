import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap"
import TableDisplay from "../../components/TableDisplay";
import axios from "axios";

const Welcome = () => {
	const URL = "http://localhost:8000/api";
	const [values, setValues] = useState([]);
	
	useEffect(() => {
		axios.get(
			URL + "/event",
			{withCredentials: true})
			.then(events => setValues(events.data))
			.catch(error => console.log(error))
	}, []);

	return (
		<>
		<Container>
			<Row className="p-3">
				<Col>
					<h1>Welcome Min!</h1>
					<h2>Today is </h2>
				</Col>	
			</Row>

			<Row className="p-3">
				<Table striped>
					<thead>
						<tr>
							<th>Event Name</th>
							<th>Location Name</th>
							<th>Attendes</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody className="overflow-auto">
							<TableDisplay values={values} />
					</tbody>
				</Table>
			</Row>
		</Container>
		</>
	);
}
export default Welcome;