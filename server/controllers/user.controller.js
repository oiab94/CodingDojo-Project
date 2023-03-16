const { handleErrors } = require("../components/handleErrors");
const User = require("../models/user.model");

module.exports.login_post = (req, res) => {
	const { email, password } = req.body;

	User.login(email, password)
		.then(user => res.status(200).json({ "userID": user._id }))
		.catch(error => {
			const errors = handleErrors(error);

			res.status(400).json(errors)
		});
}

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