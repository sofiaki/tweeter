// Test import of a JavaScript module
//import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
//heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)

function render(data, gif, units) {
    let f = "F";
    let c = "C";
    let div = document.getElementById("weather");
    div.classList.add("weather");
    div.innerHTML = `
          <h2>${data.name}</h2>
          <div>${data.weather[0].description}</div>
          <div>Temperature: ${data.main.temp} ${units == "standard" ? f : c}</div>
          <div>Wind: ${data.wind.speed}</div>
      `;
    document.body.appendChild(div);
  }
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  async function weather(city, units) {
    let data = [];
    let gif = {};
    let loadingDiv = document.createElement("div");
    loadingDiv.classList.add("loading");
    let loading = document.createElement("img");
    //loading.src = "/images/cloud-sun.webp";
    loadingDiv.appendChild(loading);
    document.body.appendChild(loadingDiv);
    await delay(1000);
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=fe3ce169ebaab55004f281ee3557428d`
    )
      .then((res) => {
        if (res.status == 404) {
          alert("City not found");
          location.reload();
        }
        return res;
      })
      .then((data) => data.json())
      .then((json) => (data = json));
  
    
    document.body.removeChild(loadingDiv);
    render(data, gif, units);
  }
  
  function component() {
    const element = document.createElement("div");
  
    document.getElementById("submit").addEventListener("click", () => {
      event.preventDefault();
      document.getElementById("weather").innerHTML = "";
      weather(
        document.getElementById("city").value,
        document.getElementById("units").value
      );
    });
    return element;
  }
  
  document.body.appendChild(component());
  import axios from 'axios'
  function myMongo(){
    
    let data = JSON.stringify({
        "collection": "myCollection",
        "database": "mydb",
        "dataSource": "Cluster0",
        "projection": {
            "_id": 1
        }
    });
                
    let config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-boukx/endpoint/data/beta/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'api-key': 'kU5RsfobK9znZHgZJA6bP9pY6zV16gduwX1VPYEMAMTCbaDGZkch6TUjSp5zQmVf'
        },
        data : data
    };
                
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
      }
      myMongo()