const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke");

//api
const apiKey = "ojHP7mMMHIPJck9K0WS47A==AU8c2GEESN0bCldo";

const methods = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};
 const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


 //tell joke function
 async function tellJoke() {
    const response =await fetch(apiUrl,methods);
    const data = await response.json()
    jokeEl.innerHTML=data[0].joke;
}
//add eventlistener
btnEl.addEventListener('click', tellJoke);
