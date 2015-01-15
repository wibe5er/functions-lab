function maxOfTwoNumbers (a, b){
	if (a > b) {
		console.log(a + " is larger");
	}
	else {
		console.log(b + " is larger");
	}
	
} 

maxOfTwoNumbers (8, 7);

// second question

function maxOfThree (a, b, c){
	if (a > b && a > c) {
		console.log(a + " is largest");
	}
	else if (b > a && b > c) {
		console.log(b + " is largest");
	}

	else {
		console.log(c + " is largest");
	}
}

maxOfThree (7, 9 , 8);

// 3rd question


function letters (char) {
	var vowels = ["o", "e", "i", "u", "a"];
    if (vowels.indexOf(char) > -1) {
        console.log("true");
    }
	else {
	    console.log("false");
	}
}

letters ("d");

// 4th question

var array = [1, 2, 3, 4];
function sumArray (arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++){
		total += arr[i]
	}
console.log("The total is " + total);
}

sumArray(array);

// multiplyArray for 4th question


var array2 = [1, 2, 3, 4];
function multiplyArray (arr) {
	var total = 1;
	
	for (var i = 0; i < arr.length; i++){
		total *= arr[i]
	}
console.log("The total is " + total);
}

multiplyArray(array2);

// Bonus question 1

function reverseString(s){
    console.log(s.split("").reverse().join(""));
}

reverseString("Jag Testar");


function reverseString (s) {
	var newName = s.split("");

for (var i = newName.length - 1; i >= 0; i--) {
	 var reverseName = newName.push[i];
}
console.log("The reverse name is " + reverseName);
}

reverseString("Jag Testar");



