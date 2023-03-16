import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import BasicForm from "../../components/user/BasicForm";
import { useNavigate } from "react-router-dom";

const NewEvent = () => {
	const URL = "http://localhost:8000/api";
	const navigate = useNavigate(); 
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [location, setLocation] = useState("");
	const [attendes, setAttendes] = useState("");
	const [information, setInformation] = useState("");
	// Conserva los errores
	const [titleError, setTitleError] = useState("");
	const [dateError, setDateError] = useState("");
	const [locationError, setLocationError] = useState("");
	const [timeError, setTimeError] = useState("");

	// ! Handle Submit
	const handleEventSubmit = ( event ) =>{
		event.preventDefault();

		axios.post(
			URL + "/event",
			{
				title,
				date,
				time,
				location,
				attendes,
				information 
			},
			{withCredentials: true})
			.then(({ data }) => {
				let { title, time, date, location} = data;
				console.log({title, time, date, location});
				navigate("/dashboard");
			})
			.catch(({ response }) => {
				let { title, time, date, location} = response.data;
				setTitleError(title);
				setTimeError(time);
				setDateError(date);
				setLocationError(location);
			})
	}

	return (
		<>
			<h1>New Event</h1>
			<Form onSubmit={ handleEventSubmit }>
				<BasicForm 
					label="Title"
					type="text"
					placeholder="Title"
					onChange={({ target }) => setTitle(target.value)} />
				{
					titleError !== ""
						? <p className="text-danger">{ titleError }</p>
						: null
				}

				<BasicForm 
					label="Date"
					type="date"
					placeholder="Date" 
					onChange={({ target }) => setDate(target.value)} />
				{
					dateError !== ""
						? <p className="text-danger">{ dateError }</p>
						: null
				}
				<BasicForm 
					label="Time"
					type="time"
					placeholder="Time" 
					onChange={({ target }) => setTime(target.value)} />
				{
					timeError !== ""
						? <p className="text-danger">{ timeError }</p>
						: null
				}


				<BasicForm 
					label="Location"
					type="text"
					placeholder="Location" 
					onChange={({ target }) => setLocation(target.value)} />
				{
					locationError !== ""
						? <p className="text-danger">{ locationError }</p>
						: null
				}

				
				<BasicForm 
					label="Attendes"
					type="number"
					placeholder="Attendes" 
					onChange={({ target }) => setAttendes(target.value)} />


				<BasicForm 
					label="Information"
					as="textarea"
					rows={5}
					placeholder="Title" 
					onChange={({ target }) => setInformation(target.value)} />

				<Button variant="primary" type="submit">
					Create event
				</Button>
			</Form>
		</>
	);
}

export default NewEvent;