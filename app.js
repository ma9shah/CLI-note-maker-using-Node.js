
const { add, get, del, delall, find } = require('./notes');
const yargs = require('yargs').argv;

var title = yargs.title || yargs.t || '' //? incase title isnt passed! 
var body = yargs.body || yargs.b || ''
var command = yargs._[0]

// console.log(command);

switch (command) {
  case 'new':
    console.log('\x1b[36m%s\x1b[0m', "Command Add is invoked");
    add(title, body);
    break;
  case 'get':
    console.log('\x1b[36m%s\x1b[0m', "Getting all titles at your command");
    get();
    break;
  case 'del':
    console.log('\x1b[36m%s\x1b[0m', "Attempting to delete note");
    del(title);
    break;
  case 'order66':
    console.log('\x1b[36m%s\x1b[0m', "Deleting notes foreverrr");
    delall(title);
    break;
  case 'find':
    // console.log('\x1b[36m%s\x1b[0m', "Deleting notes foreverrr");
    find(title);
    break;

  default:
    console.log("Please pass a valid command...xD\nUse the --help flag if needed!");
    break;
}





// ? COLOR CODES for changing bg/font color in the command prompt! 
// TODO console.log("color code", "Anything you want")
// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"