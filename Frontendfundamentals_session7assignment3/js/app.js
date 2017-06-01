var counter = 0;

function add() {
    return counter += 1;
}

function printConsole() {
    console.log("counter - " + add());
}
