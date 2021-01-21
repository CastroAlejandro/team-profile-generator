// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
	constructor (id, name, email, school) {
		super(id, name, email);
		this.school = school;
	}
	getRole() {
		return "Intern";
	}
	getSchool() {
		return this.school;
	}
};