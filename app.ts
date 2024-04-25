#!usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer"
let Todos : string[] = ["Asif","Faraz"];
async function createTodo(list:string[]) {
    do{    let ans = await inquirer.prompt({
        type: "list",
        message: "select an operator",
        name: "select",
        choices:["add","update","view","delete"],
    })  
    if (ans.select == "add"){
        let addtodo = await inquirer.prompt({
            type: "input",
            message: "Add item in the list",
            name: "todo",
        });
        Todos.push(addtodo.todo);
        Todos.forEach(Todos => console.log(Todos));
       // console.log(Todos);
        
    }
    if (ans.select == "update"){
        let updatetodo = await inquirer.prompt({
            type: "list",
            message : "update items in the list",
            name: "todo",
            choices:Todos.map(item => item)
        });
        let addtodo = await inquirer.prompt({
            type: "input",
            message: "Add item in the list",
            name: "todo",
        });
        let newTodo = Todos.filter(val => val !== updatetodo.todo);
        Todos = [...newTodo,addtodo.todo]
        console.log(Todos);
        
    }
    if (ans.select == "view"){
        console.log("***TO DO LIST***");
        console.log(Todos);
        console.log("****************");
    }
   if (ans.select == "delete"){
    let deletetodo = await inquirer.prompt({
        type: "list",
        message : "update items in the list",
        name: "todo",
        choices:Todos.map(item => item)
    });
    let newTodo = Todos.filter(val => val !== deletetodo.todo);
    Todos = [...newTodo]
    console.log(Todos);
   }
    } while(true)      
}

createTodo(Todos)

