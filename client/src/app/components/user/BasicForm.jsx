import { Form, Row, Col } from "react-bootstrap";

const BasicForm = ({label, type, placeholder, onChange, as, rows}) => {
	return (
		<>
		<Form.Group as={Row} className="mb-3">
			<Form.Label column sm={3} >
				{ label }
			</Form.Label>
			<Col sm={6}>
				<Form.Control 
					type={ type }
					as={ as }
					rows = { rows }
					placeholder={ placeholder } 
					onChange = { onChange }/>
			</Col>
		</Form.Group>
		</>
	);
}

export default BasicForm;