const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employee_objects = []


init()

function init() {
	inquirer.prompt({
		name: "type",
		type: "list",
		choices: ['manager', 'intern', 'engineer', 'done']
	})
		.then(function (answer) {

			switch (answer.type) {
				case "manager":
					return buildManager()
				case "intern":
					return buildIntern()
				case "engineer":
					return buildEngineer()
				default:
					const html = render(employee_objects)
					fs.writeFile(outputPath, html, function (err) {
						if (err) throw err;
					})
			}
		})
}

function buildManager() {
	inquirer.prompt([{
		name: "name",
		type: "input",
		message: "name?",
		validate: (response) => {
			if (response.trim() === "") {
				return ("Please enter a name")
			}
			return true;
		}
	},
	{
		name: "id",
		type: "input",
		message: "id?",
		validate: (response) => {
			if (isNaN(response) || response.trim() === "") {
				return ("Please enter an id")
			}
			return true;
		}
	},
	{
		name: "email",
		type: "input",
		message: "email?",
		validate: (response) => {
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(response)) {
				return true;
			}
			return ("Please enter an email")
		}
	},
	{
		name: "officeNumber",
		type: "input",
		message: "officeNumber?",
		validate: (response) => {
			if (isNaN(response) || response.trim() === "") {
				return ("Please enter an office number")
			}
			return true;
		}
	}])
		.then(function (answers) {
			employee_objects.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
			init()
		})
}
function buildIntern() {
	inquirer.prompt([{
		name: "name",
		type: "input",
		message: "name?",
		validate: (response) => {
			if (response.trim() === "") {
				return ("Please enter a name")
			}
			return true;
		}
	},
	{
		name: "id",
		type: "input",
		message: "id?",
		validate: (response) => {
			if (isNaN(response) || response.trim() === "") {
				return ("Please enter an id")
			}
			return true;
		}
	},
	{
		name: "email",
		type: "input",
		message: "email?",
		validate: (response) => {
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(response)) {
				return true;
			}
			return ("Please enter an email")
		}
	}, 
	{
		name: "school",
		type: "input",
		message: "school?",
		validate: (response) => {
			if (response.trim() === "") {
				return ("Please enter a school")
			}
			return true;
		}
	}])
		.then(function (answers) {
			employee_objects.push(new Intern(answers.name, answers.id, answers.email, answers.school))
			init()
		})
}
function buildEngineer() {

	inquirer.prompt([{
		name: "name",
		type: "input",
		message: "name?",
		validate: (response) => {
			if (response.trim() === "") {
				return ("Please enter a name")
			}
			return true;
		}
	},
	{
		name: "id",
		type: "input",
		message: "id?",
		validate: (response) => {
			if (isNaN(response) || response.trim() === "") {
				return ("Please enter an id")
			}
			return true;
		}
	},
	{
		name: "email",
		type: "input",
		message: "email?",
		validate: (response) => {
			if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(response)) {
				return true;
			}
			return ("Please enter an email")
		}
	},
	{
		name: "github",
		type: "input",
		message: "github?",
		validate: (response) => {
			if (response.trim() === "") {
				return ("Please enter your github name")
			}
			return true;
		}
	}])
		.then(function (answers) {
			employee_objects.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
			init()
		})
};





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
