const fs = require('fs');

try {
  //? if notes.json is there, load it into an array
  var notes = JSON.parse(fs.readFileSync("notes.json"))
} catch (e) {
  //? if attempting to read notes.json throws an error 'e', set notes to an empty array
  var notes = []
}
// !Add function
var add = (title, body) => {

  var flag = 0
  var newnote = {
    title,
    body,
    time: new Date().toTimeString().split(" ")[0], //? Dont need Timezone
    date: new Date().toDateString().slice(3), //? Dont need day of week
    timestamp: new Date().getTime(), //? Might be useful for sorting notes by time (reverse)
  }
  notes.forEach(el => {
    if (el.title === title) {
      flag = 1
      console.log("You already have a note with that title, use another one!");
    }
  }); // end of callback

  if (flag === 0) {
    notes.push(newnote)
    fs.writeFileSync("notes.json", JSON.stringify(notes))
  }

} //! End of Add function


//! Get Function
var get = () => {
  if (notes.length === 0) {
    console.log("It's all empty in here :\(");
  }
  notes.forEach(note => {
    console.log("\x1b[37m", `Title: ${note.title} \t \t Time: ${note.date} ${note.time}`)
    // console.log("\x1b[37m", `Content: ${note.body}`);
  });
} //! End of get function

// ! Delete function
var del = title => {
  var flag = 0;
  notes.forEach(note => {
    if (note.title === title) {
      flag = 1
    }
  })
  if (flag === 1) {

    notes = notes.filter(note => note.title !== title)
    fs.writeFileSync("notes.json", JSON.stringify(notes))
  } else {
    console.log("Note DNE");
  }
} //! End of Delete function

//! Delete-All function
var delall = () => {
  notes = []
  fs.writeFileSync("notes.json", JSON.stringify(notes))
}

//! Find function
var find = title => {
  var note = notes.filter((note) => note.title === title)
  if (note.length === 0) {
    console.log('\x1b[36m%s\x1b[0m',"Note not found...");
  }
  else {
    console.log('\x1b[36m%s\x1b[0m', `Here is your note:`);
    console.log("\x1b[37m", `Title: ${note[0].title} \t \t Time: ${note[0].date} ${note[0].time}`)
    console.log("\x1b[37m", `Content: ${note[0].body}`);
  }
}


module.exports = {
  add, get, del, delall, find
}