
//Üb 1
function numbersArray (arr) {
let oddNumbersArray = []
let evenNumbersArray = []
	for (let i = 0; i<arr.length; i++) {
		if(arr[i]%2 === 0) {
			oddNumbersArray.push(arr[i])

		} else { evenNumbersArray.push(arr[i])
      	}
	}			
		return {evenNumbersArray, oddNumbersArray}
}		

//Üb 2
let word = prompt("Please enter a word")
let arrayName = []
arrayLength = +prompt("Please print ArrayLength")
for(let i=0; i<arrayLength; i++) {
    let arrayItems = prompt("Please enter ArrayItem")
    arrayName[i] = arrayItems
}
function correctSublist (word, arrayName){
    for (let i = 0; i < arrayName.length; i++) { 
         if (arrayName[i].length == word.length) {
            let tempWord = word.toLowerCase()
            for (let j = 0; j < arrayName[i].length; j++){
                tempWord = tempWord.replace(arrayName[i][j].toLowerCase(), "")
			}
			if(tempWord === "") {
				console.log(arrayName[i])
			}	
        }    
    }
} 

correctSublist(word,arrayName)


//Üb 5
let string = prompt("Enter a string");

let changeSymbol = prompt ("Enter the changing symbol");
let symbol = prompt ("Enter a symbol");

function changeSymbolof(string,changeSymbol, symbol) {
	nString = "";
	for(let i = 0 ; i < string.length; i++){
	    if(string[i] === changeSymbol) {
	        nString = nString + symbol;
		} else {
			nString = nString + string[i];
		}
		
 	}
    return nString
}
            

console.log(changeSymbolof(string,changeSymbol,symbol))


