const url = "https://wizard-world-api.herokuapp.com/houses/";

const resultsContainer = document.querySelector(".results");

async function getHouses() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        results.forEach(element => {
            resultsContainer.innerHTML += `<div class="result"><a href="details.html?id=${element.id}">${element.name}</a></div>`;
                });
    }
    
   catch(error) {
        console.log("An error occorred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }   
}

resultsContainer.innerHTML = "";
getHouses();