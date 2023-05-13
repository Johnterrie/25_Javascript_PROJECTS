const input = document.getElementById("input");

// input.addEventListener("change", (e) => {console.log(e.target.value)}); 


function recess(event) {
    // e.preventDefault();


    const expenseData = {
        title: "movie script",
        amount: 5000000,
        date: new Date("25 Aug 2012"),
    }
    console.log(expenseData);
}

recess()
















let words = "Hello, how are you today? I'm doing well!"

const wordCounter = (word) => {
    let counter = 0;
    word.split(" ").forEach(() => {counter++});
    return counter;
}

console.log(wordCounter(words))



const word = "iAmABlessedChild"

function upperWords(word) {
    count = 0
    let newWord = word.split('')
   newWord.forEach((e)=>{
       if (e == e.toUpperCase()){
           count++
       }
   })
   return (count + 1)
}
console.log(upperWords(word))


