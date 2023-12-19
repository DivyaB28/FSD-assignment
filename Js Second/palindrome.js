// Implement a function that checks if a given string is
// a palindrome(reads the same backward as forward).
//Ignore spaces, punctuation, and capitalization.

function checkIfPalindrome(stringArg = "") {
  if (typeof stringArg === "string" && stringArg.trim().length !== 0) {
    let trimmedString = stringArg.trim().toLowerCase().replace(/[\W_]/g, "");
    let reverseString = "";
    for (let i = trimmedString.length - 1; i >= 0; i--) {
      reverseString += trimmedString[i];
    }
    if (trimmedString === reverseString) {
      return true;
    } else {
      return false;
    }
  } else return "It's an empty string!";
}

console.log(checkIfPalindrome("   __hiih+!@#$%^&*() "));
console.log(checkIfPalindrome("  "));
console.log(checkIfPalindrome(null));
