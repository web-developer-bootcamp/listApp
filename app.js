var list = [1,23,4,5,213213];
var cmd = prompt("Insert comand: ");

while (cmd !== "quit") {
    if (cmd === "list") {
        list.forEach(function (item) { console.log(item) });
    }
    else if (cmd === "new") {
        var newValue = prompt("Insert Value: ");
        list.push(newValue);
    }
    else if (cmd === "delete") {
        var index = prompt("Insert Index: ");
        list.splice(index,1);
    }
    var cmd = prompt("Insert comand: ");
}
console.log("YOU QUIT");


