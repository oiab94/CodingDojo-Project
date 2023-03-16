import { Form } from "react-bootstrap";
import BasicForm from "../../components/user/BasicForm";

const NewEvent = () => {
	return (
		<>
			<h1>New Event</h1>
			<Form>
				<BasicForm 
					label="Title"
					type="text"
					placeholder="Title" />

				<BasicForm 
					label="Date"
					type="date"
					placeholder="Date" />
				
				<BasicForm 
					label="Time"
					type="time"
					placeholder="Time" />

				<BasicForm 
					label="Location"
					type="text"
					placeholder="Location" />
				
				<BasicForm 
					label="Attendes"
					type="number"
					placeholder="Attendes" />

				<BasicForm 
					label="Information"
					as="textarea"
					rows={5}
					placeholder="Title" />
			</Form>
		</>
	);
}

export default NewEvent;