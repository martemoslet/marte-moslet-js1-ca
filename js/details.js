const details = document.querySelector(".details");
const queryString = document.location.search;

// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);

// get the id parameter from the query string
const id = params.get("id");

console.log("The id is " + id);

async function getData(houseId) {
    try {
        const response = await fetch("https://wizard-world-api.herokuapp.com/Houses/" + houseId);
        const results = await response.json();
        console.log(results);

        details.innerHTML = `<h1>${results.name}</h1>
                            <li>House colors: ${results.houseColours}</li>
                            <li>Founder: ${results.founder}</li>
                            <li>Animal: ${results.animal}</li>`
    }
    
   catch(error) {
        console.log("An error occorred");
        details.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData(id);