function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const firstname = process.argv[process.argv.length - 1];
    // const secondname = process.argv[3];
    return firstname;

}

function getNameFromEnv() {
    // Write your code here

    return process.env.name;

}

function getNameFromReadLine() {
    // Write your code here
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question((ans) => {
        return (ans);
        rl.close();
    })

}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}