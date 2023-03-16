const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

// * Modelo de Usuario
const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		lowercase: true,
	},
	lastName: {
		type: String,
		lowercase: true,
	},
	email: {
		type: String,
		required: [true, "Please enter an Email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please enter a valid Email"],
	},
	password: {
		type: String,
		required: [true, "Please enter a password"],
		minlength: [6, "Minimun characters are 6"]
	},
	birthday: {
		type: Date,
	}
}, { timestamps: true })

// * Encriptar el password antes de guardar
userSchema.pre("save", async function(next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);

	next();
})

// * Login para un usuario
userSchema.statics.login = async function(email, password) {
	const user = await this.findOne({ email });

	// Verificamos si existe el usuario
	if(user){
		const auth = await bcrypt.compare(password, user.password);

		if(auth){
			return user;
		}
		throw Error("Incorrect password");
	}
	throw Error("Incorrect email");
}

// * Exportamos nuestro modelo
const User = mongoose.model("user", userSchema);

module.exports = User;