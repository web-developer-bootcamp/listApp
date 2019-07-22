var list = [];
var cmd = prompt("Insert comand: ");

while (cmd !== "quit") {
    if (cmd === "list") {
        console.log(list);
    }
    else if (cmd === "new") {
        var newCmd = prompt("push value or pop");
        if (newCmd.startsWith("push")) {
            var value = newCmd.split(' ');
            if (value.length > 1) {
                list.push(value[1]);
            }
        }
        else {
            list.pop();
        }
    }
    var cmd = prompt("Insert comand: ");
}
console.log("You quit");


