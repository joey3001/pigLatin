/*$(document).ready(function()  {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    
    let arrayNums = [5, 10, 15, 20, 25, 30, 35, 40]
    //let arrayNums = $("#inputBox").val();
    let arrayNums1 = arrayNums.map(function(element)  {
      return element + 1;
    });
    console.log(arrayNums1);
  });
});*/

// 1. Get input from form
// 2. Possibly change form input to all uppercase/lowercase so we don't have to worry about an array telling the difference between 'a' and 'A'
// 3a. Look for words that start with a vowel and end with [-way]
// 3b. Look for words that have [consonant a][consonant b][-ay]
// 3c. Look for words that end with [consonant a][qu][-ay]
// 3d. Y = consonant if it's at the start of a word.

// Start with defining vowels.
// tell it aeiou = vowel

// Start with: looking for [-ay]
// Then see if it's [-way] + starts with a vowel - if yes, then do 3A
// 

$(document).ready(function()  {
  $("form#latinForm").submit(function(event) {
    event.preventDefault();
    alert("hi");
    let input = $("#inputBox").val();
    input = input.replace(/[^\w\s]/gi,"");
    input = input.replace(/\d/g,"");
    finalInput = input.toLowerCase();
    alert(finalInput);
    let stringArray = finalInput.split(""); 
    let test = stringArray.length-1; 
    let test2 = stringArray[test];
    if (stringArray[stringArray.length-1] === "y" && stringArray[stringArray.length-2] === "a" && stringArray[stringArray.length-3] === "w"){
      let stringArray2 = stringArray.slice(0, stringArray.length-3);
      alert(stringArray2);
    }
    else{
    }
  });
});



//input.replace(/[^\w\s]/gi, '')

    //input.replace(/[^a-z]/gi, "")

    //input.replace(/\W\S/gg, " ");
//CLOSING BRACKETS


// 1. 
// Describe: removeNonLetters
// Test: "Removes all non-letter characters from the string (besides spaces)"
// Expect(changeCasing("hi there, what's your name?")).toEqual("hi there whats your name");

// 2. 
// Describe: changeCasing
// Test: "Makes all string characters lower case"
// Expect(changeCasing("AWAY")).toEqual("away");

// 3. 
// Describe: checkLast
// Test: "checks if the last three letters of the string are 'way'"
// Expect(checkLast("AWAY")).toEqual(TRUE);

// 4. 
// Describe: removeWay
// Test: "removes the last three letters if they are way"
// Expect(removeWay("away")).toEqual(a);

/*
Regex rgx = new Regex("[^a-zA-Z0-9 -]");
str = rgx.Replace(str, "");

// \W, which matches any non-alphanumeric character.
string.replace(/\W/g,"");



/*
Pig Latin Rules:input[input.length-1] 

- Words beginning with a vowel, add [WAY] to the end.

- Words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add [AY]

- If the first consonants include [qu], move the [u] along with the [q]. dont forget about words like "squeal" 
  where [qu] doesnt come first.

- For words beginning with [y], treat [y] as a consonant.

*/

