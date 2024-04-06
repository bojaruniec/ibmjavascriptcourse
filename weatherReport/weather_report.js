function showweatherDetails(event) {
    event.preventDefault();
}

// https://api.zabytek.gov.pl/nidrestapi/api/data/geoportal/otwarteDaneZestawienieZen?format=json&filter=["powiat","=","lubelskie"]

let city = document.getElementById('city').value;
city = 'gostyniński'
// const apiUrl = `https://api.zabytek.gov.pl/nidrestapi/api/data/geoportal/otwarteDaneZestawienieZen?format=json&filter=\[\"powiat\",\"=\",\"${city}\"\]`;
const apiUrl = 'https://api.zabytek.gov.pl/nidrestapi/api/data/geoportal/otwarteDaneZestawienieZen?format=json&filter=[%22powiat%22,%22=%22,%22gostyni%C5%84ski%22]'

console.log(apiUrl)

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Nazwa in ${data[0].nazwa}</h2>
                          <p>Funkcja: ${data[0].funkcja}</p>
                          <p>Miejscowość: ${data[0].miejscowosc}</p>`;
})
// .catch(error => {
//     console.error('Error fetching weather:', error);
//     const weatherInfo = document.getElementById('weatherInfo');
//     weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
//   });

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );