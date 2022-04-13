const Admin = require("./lib/Administration");
const Transportation = require(".lib/Transportation");
const Intern = require(".lib/Intern");
const inquirer = require("inquirer");
const addTeachers = require("./lib/addTeachers")

groupmembers = [];

const createAdmin = () {
    console.log("Assemble your group");
    inquirer.prompt([
        {
            type: Input
            name: "Name"
            Message: "What is the name of the admin?"
        },
        {
            type: Input
            name: "admin position"
            Message: "What is the position of the admin?"
        },
        {
            type: Input
            name: "building"
            Message: "What building is the admins office in?"
        },
        {
            type: Input
            name: "email"
            Message: "What is the admins email?"
        },
        {
            type: Input
            name: "extension"
            Message: "What is the phone extension for the admins office?"
        },
    ])
}

.then(answers => {
    const admin = new Admin()
}