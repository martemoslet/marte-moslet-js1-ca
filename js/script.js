const url = "https://www.anapioficeandfire.com/api/houses"

const resultsContainer = document.querySelector(".results");

async function getInfo() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const houses = results;

        

        resultsContainer.innerHTML = "";

        for(let i = 0; i < houses.length; i ++) {
            console.log(houses[i].name);

            if(i===3) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result"><a href="details.html">${houses[i].name}</a></div>`;
        }
    }
    
   catch(error) {
        console.log("An error occorred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getInfo();