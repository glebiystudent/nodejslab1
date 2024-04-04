const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const args = yargs(hideBin(process.argv)).argv;
const fs = require("fs");

const cmd = args._;
const title = args.title;
const level = args.level;

var data = fs.readFileSync('user.json');
var json = JSON.parse(data);

switch(cmd[0]) {
    case "add":
    if(title != null && level != null) {
        json.languages.push({ "title": `${title}`, "level" : `${level}`});
    }
    break;
    case "remove":
        if(title != null) {
            json.languages = json.languages.filter(i => i.title != title);
        }
    break;
    case "list":
        console.log(json.languages);
    break;
    case "read":
        if(title != null) {
            console.log(json.languages.find(i => i.title == title));
        }
    break;
}

fs.writeFileSync("user.json", JSON.stringify(json));
