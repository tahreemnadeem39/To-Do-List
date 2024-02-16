import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "ToDo",
            message: "What do you want to add in your ToDo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more ToDo?",
            default: false
        }
    ]);
    const { ToDo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (ToDo) {
        todos.push(ToDo);
    }
    else {
        console.log("Kindly add valid input.");
    }
}
if (todos.length > 0) {
    console.log("Your ToDo List: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
;
