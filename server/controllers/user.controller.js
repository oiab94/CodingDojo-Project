const { handleErrors } = require("../components/handleErrors");
const User = require("../models/user.model");

module.exports.signup_post = (req, res) => {
	const {
		firstName,
		lastName,
		email,
		password,
		birthday 
	} = req.body;

	User.create({
		firstName,
		lastName,
		email,
		password,
		birthday
	})
		.then(user => res.status(200).json(user))
		.catch(error => {
			let errors = handleErrors(error);
			res.status(400).json(errors);
		})
}