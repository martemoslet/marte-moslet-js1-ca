const url = "https://www.anapioficeandfire.com/api/houses?page=1&pageSize=30"

const resultsContainer = document.querySelector(".results");

async function getInfo() {
    try {
        const response = await fetch(url);

        const results = await response.json();
    
        const houses = results;

        resultsContainer.innerHTML = "";
    
        for(let i = 0; i < houses.length; i++) {
            console.log(houses[i].name);
            console.log(houses[i].region);
            console.log(houses[i].coatOfArms);

        resultsContainer.innerHTML += `<div class="result">House: ${houses[i].name}<br>Region: ${houses[i].region}<br>Coat of arms: ${houses[i].coatOfArms}</div>`;
        }
    }
    catch(error) {
        console.log("An error occorred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getInfo();