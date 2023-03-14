require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsConfig = {
	origin: true,
	credentials: true
}

// * Inicia express
const app = express();
app.listen(
	process.env.PORT,
	() => {
		console.log(`Se escucha en el puerto ${process.env.PORT}`);
	}
)

// * Middleware
app.use(express.json()); // Permite el ingreso de JSON
app.use(cors(corsConfig)); 
app.use(cookieParser()) // Permite la utilizacion de cookies


