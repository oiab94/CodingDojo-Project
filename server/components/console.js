const chalk = require("chalk");

module.exports.error = function(message) {
	console.log(chalk.bold.red("ERROR: "), message);
}

module.exports.success = function(message) {
	console.log(chalk.bold.green("SUCCESS: "), message);
}