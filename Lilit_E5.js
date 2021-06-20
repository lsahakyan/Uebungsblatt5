
//Üb 1
let word = prompt("Enter a word");
let length = +prompt ("Enter a number")
let arr = [];
for (let i = 0; i < length; i++){
    arr.push(prompt("Enter anagrams"))
}
function wordreSelect( w, a) {
    let result;
    for(let i = 0; i < a.length; i++ ){
        if(w.length === a[i].length){
            for(let j = 0; j < a[i].length; j++){
                for(let k=0; k < w.length; k++){
                    if(a[i][j] === w[k]){
                        result =a[i];
                        break;
                    }
                }
                  break
            }
        }
    }
    return result
}

wordreSelect(word,arr);	

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

// Üb 4
let arr = [];
let arrLength = prompt("Enter arrray's length.")
for(let i = 0; i < arrLength; i++ ){
    arr.push(prompt("Given an array of number."))
}
function findUniqueElements (arr) {
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        let bul = true;
        for(let j = i+1; j<arr.length; j++){
          if(arr[i] === arr[j]){
          bul = false
          break;
          }
    }
    if (bul){
result.push(arr[i])
}
    }
return result
}
findUniqueElements(arr)



//Üb 3
let sentence = prompt("Enter a sentence.");
let string = prompt("Enter a string.")
function remove (s, st) {
let result =  " ";

    for(let i = 0; i < s.length ; i++){
    	let subFound = true;

    	for (let j = 0; j < st.length; j++){
    		if(s[i+j] !==st[j]){
    			subFound = false
    			result = result + s[i]
    			break
    		}
    	}
       if(subFound === true){
       	 i = i+st.length-1
       }
    
    }
    return result
}
remove (sentence, string)


