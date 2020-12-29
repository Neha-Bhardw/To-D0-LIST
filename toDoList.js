let input = prompt("Type new to add something to the list, Type list to see the entire list!, delete to delete an item & SEE CONSOLE FOR THE RESULTS, q or quit to Exit");
const todos = ["BROOMING", "BATHING", "PRAYING", "BREAKFAST"]
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("**********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********************")
    } else if (input === "new") {
        const newToDo = prompt("Ok, What is the new todo?");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("Ok, Enter the index of the list item you want to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, Deleted ${deleted[0]}`);
        } else {
            console.log("UNKNOWN INDEX");
        }
    }
    input = prompt("Type new to add something to the list, Type list to see the entire list!, delete to delete an item & SEE CONSOLE FOR THE RESULTS, q or quit to Exit");
}
console.log("OK, You quit the app!");