console.clear();
/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const title = "AI Quiz";
const text = "Test your knowledge of AI with this fun quiz!";
let likes = 25;
const user = "Maria";
const isReported = false;

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

console.log("Title:", title);
console.log("Text:", text);
console.log("Likes:", likes);
console.log("User:", user);
console.log("isReported?", isReported);

likes++;

console.log("Likes:", likes);
