require("dotenv").config();
const logs = require("../components/console");
const mongoose = require("mongoose");
const URL_DB = process.env.URL_DB; 

// * Configuración de conexion a la BD
mongoose.set("strictQuery", true);
mongoose.connect(
	URL_DB,
	{useNewUrlParser: true, useUnifiedTopology: true})
	.then( () => { logs.success("Conexion a la DB exitosa") } )
	.catch( () => { logs.error("Conexion a la DB fallida") } )