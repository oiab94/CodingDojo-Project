const mongoose = require("mongoose");

// * Modelo de evento
const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		lowercase: true,
		required: [true, "Insert a Title"]
	},
	date: {
		type: Date,
		lowercase: true,
		required: [true, "Insert a Date"]
	},
	time: {
		type: String,
		lowercase: true,
		required: [true, "Insert a Time"]
	},
	location: {
		type: String,
		lowercase: true,
		required: [true, "Insert Location"]
	},
	attendes: {
		type: String,
		lowercase: true,
	},
	information: {
		type: String,
		lowercase: true,
	}
}, { timestamps: true })

// * Exportamos el modelo
const Event = mongoose.model("event", eventSchema);

module.exports = Event;