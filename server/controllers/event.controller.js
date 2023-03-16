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

// * GET events
module.exports.event_get = (req, res) => {
	Event.find({})
		.then(events => {
			res.status(200).json(events)
		})
		.catch(errors => res.status(400).json(errors))
}

// * GET one event
module.exports.event_get_id = (req, res) => {
	Event.findOne({_id: req.params.id})
		.then(event => res.status(200).json(event))
		.catch(error => res.status(400).json(error));
}