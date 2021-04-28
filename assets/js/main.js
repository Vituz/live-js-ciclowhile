// Stampare tutti gli elementi di un array,
//  sia con il ciclo for

var items = ["chiave", "ascia", "spada", "scudo", "forziere"];

for (var i = 0; i < items.length; i++){

    console.log(items[i]);
}

// che con il ciclo while
var i = 0;  //inizializziamo il contatore all'esterno del ciclo
 
while (i < items.length) { //inizializziamo la condizione del ciclo while

    console.log(items[i]);
    
    i++; // inseriamo l'incremento del codice all'interno del ciclo
}

// ESEMPIO
var play = true;

while (play) {
    var userNumber = Number(prompt("Type a number between 1 and 10"));

    var pc = Math.ceil(Math.random() *10);

    if (userNumber === pc){
        alert("No Winner. Try again");
  
    } else if (userNumber > pc) {
        alert("You Win!")

    } else {
        alert("Pc Win!")
    }

    play = confirm("Do you want to play again? press Ok to continue or cancel to quit the game")
    
}

console.log("Game Over");