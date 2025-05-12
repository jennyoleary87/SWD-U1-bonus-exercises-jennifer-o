/** DESTRUCTURING **/

// Sometimes it is convenient to be able to assign variable names 
// to different elements in an array or different keys in an object

// ARRAY EXAMPLE

// Test data
let phoneNumberParts = ["314", "555", "5555"];

// Instead of
let area = phoneNumberParts[0];
let exch = phoneNumberParts[1];
let line = phoneNumberParts[2];

// There is a better syntax for this
// Notice the use of the let keyword
let [areaCode, exchange, lineNumber] = phoneNumberParts;

// Essentially you are extracting the elements and assigning new variable names for each of them

// Print them
console.log(`${areaCode}-${exchange}-${lineNumber}`);


// OBJECT EXAMPLE

// Test data
let userInfo = {
    name: "Bob Loblaw",
    email: "bob@loblaw.com",
    website: "BobLoblawsLawBlog.com",
}

// Instead of
let userName = userInfo.name;
let userEmail = userInfo.email;
let userWebsite = userInfo.website;

// Use destructuring with the let keyword
let { name, email, website } = userInfo;

// Print them
console.log(name);
console.log(email);
console.log(website);


// YOUR TURN!

// TODO: Create an array with several elements
let arrFruits = ["Apple", "Orange", "Banana", "Mango", "Grapes"];

// TODO: Destructure the array and assign variables
// to each element
let [firstPlace, secondPlace, thirdPlace, fourthPlace, fifthPlace] = arrFruits;

// TODO: Print the values of the new variables
console.log(`FirstPlace - ${firstPlace}, SecondPlace - ${secondPlace}, ThirdPlace - ${thirdPlace}
    FourthPlace - ${fourthPlace}, FifthPlace - ${fifthPlace}`);

// TODO: Create an object with several key/value pairs
let movies = {
    title: "Starwars",
    year: 1977,
    genre: "Sci-fi"
};

// TODO: Destructure the object and assign variables
// to each property
let { title, year, genre } = movies;

// TODO: Print the values of the new variables
console.log(title);
console.log(year);
console.log(genre);

