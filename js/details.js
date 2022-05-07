const details = document.querySelector(".details");
const queryString = document.location.search;
const title = document.querySelector(".title")

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getData(houseId) {
    try {
        const response = await fetch("https://wizard-world-api.herokuapp.com/Houses/" + houseId);
        const results = await response.json();
        details.innerHTML = "";
        title.innerHTML = "";

        details.innerHTML = `<h1>${results.name}</h1>
                            <ul>
                            <li>House colors: ${results.houseColours}</li>
                            <li>Founder: ${results.founder}</li>
                            <li>Animal: ${results.animal}</li>
                            <li>Ghost: ${results.ghost}</li>
                            <li>Common room: ${results.commonRoom}</li>
                            </ul>`
        title.innerHTML = `${results.name}`;
    }
    
   catch(error) {
        console.log("An error occorred");
        details.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData(id);