let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
console.log(quoteString) 

var upperCaseString = quoteString.toUpperCase()
console.log(`The upper case string is : ${upperCaseString}`)

var authorString = "- Henry Ford"
console.log(authorString)

var completeString = quoteString.concat(authorString)
console.log(`The string in quoteString is : ${completeString}`)

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

var lowerCaseString = secondQuote.toLowerCase()
console.log(`The lower case string is : ${lowerCaseString}`)

var thirdChar = secondQuote.charAt(3)
console.log(`The character at location 3 is:${thirdChar}`)

var findString = secondQuote.split(".")
console.log(findString)