console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

const bookOnlineStore = {
  title: "Bible",
  author: "God",
  rating: 5.6,
  sales: 665,
};

/*
2: Log all variables to the console, for example:

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

console.log("Title:", bookOnlineStore.title);
console.log("Author:", bookOnlineStore.author);
console.log("Rating:", bookOnlineStore.rating);
console.log("Sales:", bookOnlineStore.sales);

bookOnlineStore.sales += 1;
bookOnlineStore.rating = 6.6;

console.log("Title:", bookOnlineStore.title);
console.log("Author:", bookOnlineStore.author);
console.log("Rating:", bookOnlineStore.rating);
console.log("Sales:", bookOnlineStore.sales);

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/
console.clear();

function logBookData() {
  console.log("Title:", bookOnlineStore.title);
  console.log("Author:", bookOnlineStore.author);
  console.log("Rating:", bookOnlineStore.rating);
  console.log("Sales:", bookOnlineStore.sales);
}

logBookData();

bookOnlineStore.sales += 1;
bookOnlineStore.rating = 7.6;

logBookData();
