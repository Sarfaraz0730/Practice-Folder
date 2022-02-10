// const readline = require("readline");
// const EventEmiter = require("event");

// const eventEmiter = new EventEmiter();
// let books = ["Think and Grow Rich","The Secret"];
// function showBooks(){
//     console.log("Event listioned ")
//     console.log( books) ;
//     return
// }

// const r1 =  readline.createInterface({
//     input : process.stdin,
//     output:process.stdput,
// });

// // function ShowOptions(){
// //     const option = "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit";
// // }


// function intractWithUser(){
//     r1.question("Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit",(selectedOption=>{
//         if(selectedOption==="1"){
//            eventEmiter.on("pressed one",showBooks);
//            eventEmiter.emit("pressed one ")
//             intractWithUser()
//         } else if(selectedOption ==="2"){
//             r1.question("Please provide name of the Book",(bookName=>{

//                 // books.concate(bookName)
//                 // [...books,bookName]
//                 books.push(bookName);
//                 eventEmiter.emit("showBooks pressed")
//             }))
//         }
//     }))
// }

// intractWithUser();
const readline = require("readline");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

let books = ["GOT", "Lord of the Rings"];

function showBooks() {
  console.log("event listened");
  console.log(books);
  return;
}

const r1 = readline.createInterface({
  input: process.stdin, // Standard input => terminal
  output: process.stdout, // Standard output => terminal
});

// function showOptions() {
//   const options =
//     "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit";
// }

function interactWithUser() {
  r1.question(
    "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit \n",
    (selectedOption) => {
      eventEmitter.on("show books pressed", showBooks);
      if (selectedOption === "1") {
        eventEmitter.emit("show books pressed");
        interactWithUser();
      } else if (selectedOption === "2") {
        r1.question("Please provide name of the book", (bookName) => {
          books.push(bookName);
          eventEmitter.emit("show books pressed");
          interactWithUser();
        });
      } else if (selectedOption === "3") {
        r1.close();
      } else {
        console.log("Please choose correct option ");
        interactWithUser();
      }
    }
  );
}

interactWithUser();

r1.on("close", () => {
  console.log("Thank you");
  process.exit(0);
});
