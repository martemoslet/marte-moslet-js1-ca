// get the query string
const queryString = document.location.search;

// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);

// get the id parameter from the query string

const id = params.get("id");

console.log("The id is " + id);