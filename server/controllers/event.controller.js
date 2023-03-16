const Event = require("../models/event.model")

// ! Handle Errors
const handleEventErrors = ({ errors, message }) => {
	const error = {
		title: "",
		date: "",
		time: "",
		location:""
	}; 

	// Verificamo si recibimos este mensaje
	if( message.includes("event validation failed"))
		Object.values(errors).forEach(({ properties }) => {
			error[properties.path] = properties.message;
		})

	return error;
}

// * POST new event
module.exports.event_post = (req, res) => {
	const { 
		title, 
		date, 
		time, 
		location, 
		attendes, 
		information } = req.body;

	Event.create({
		title, 
		date, 
		time, 
		location, 
		attendes, 
		information
	})
		.then(event => res.status(200).json(event))
		.catch(errors => {
			const error = handleEventErrors(errors);

			res.status(400).json(error);
		})
} 