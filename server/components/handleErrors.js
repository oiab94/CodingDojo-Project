module.exports.handleErrors = function ({errors, message, code}) {
	const error = {email:"", password: ""};

	// * Validacion de errores al crear usuarios
	// Dupliacion de email
	if(code === 11000){
		error.email = "Thath email is registered";
		return error;
	}

	// Verificamos si recibimos un mensaje de validación de usuario
	if(message.includes("user validation failed"))
		// Cada objeto con errror tiene un valor properties
		Object.values(errors).forEach(({ properties }) => {
			// Estas properties indican donde va ocurriendo los errores
			error[properties.path] = properties.message; // Guardamos los mensajes de error
		})

		// * Validacion de errores al hacer login
		if(message === "Incorrect email")
			error.email = "Email is incorrect";
		
		if(message === "Incorrect password")
			error.password = "Password is incorrect";

		return error;
}