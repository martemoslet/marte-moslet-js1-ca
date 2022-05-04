const url = "https://wizard-world-api.herokuapp.com/Houses"

const resultsContainer = document.querySelector(".results");

async function getHouses() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const getHouses = results;

        

        resultsContainer.innerHTML = "";

        for(let i = 0; i < getHouses.length; i++) {
            console.log(getHouses[i].name);

            if(i===3) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result"><a href="details.html?id=${getHouses.id}">${getHouses[i].name}</a></div>`;
        }

    }
    
   catch(error) {
        console.log("An error occorred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getHouses();