
const API_KEY = "6d105c27aec1a7bd2a58a3d62b88a880"//The API key
// API for Weather Data
const APi = `https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=${API_KEY}` // The API



// All the Important Variables for the Search Container
let  Cityname = document.getElementById("EnterCityName");
let TempratureK = document.getElementById("Temprature")
let Humidity = document.getElementById("HumidityPercent")
let DiplayCityname = document.getElementById("citynameOP");
let WindSpeed = document.getElementById("WindSpeed")
let  SreachBtn = document.getElementById("Search_btn");
let WeatherImg = document.getElementById("weatherImg")
let Headline = document.getElementById("headline")

// All important Variabls for Right Upper Bar Container
let Feels_like = document.getElementById("feels_like")
let Air_pressure = document.getElementById("AirPressure")
let Descriptioin = document.getElementById("description")
let Visibility_Distance = document.getElementById("Visibility_Dist")


// Function to convert Kelvin to Celcius
function KelvinToCelcius(temp) {
    let C = temp - 273.15
    return C.toFixed(2)
}

// Functioin to change the Weather Image according to the weather
function WeatherImgChange(val) {
    if (val === "Clear") {
        WeatherImg.src = "./weather-app-img/images/clear.png"
        // console.log("The Sky is",  val); 
    }else if (val === "Snow") {
        WeatherImg.src = "./weather-app-img/images/snow.png"
        // console.log("The Sky is",  val);
    }else if(val === "Rain"){
        WeatherImg.src = "./weather-app-img/images/rain.png"
        // console.log("The Sky is",  val);
    }else if(val === "Mist"){
        WeatherImg.src = "./weather-app-img/images/mist.png"
        // console.log("The Sky is",  val);
    }else if (val === "Haze") {
        WeatherImg.src = "./weather-app-img/images/drizzle.png"
        // console.log("The Sky is",  val);
    }else if (val === "Clouds") {
        WeatherImg.src = "./weather-app-img/images/clouds.png"
        // console.log("The Sky is",  val);
    }else{
        return "Error: False value"
    }
}


// Function to Manipulate the Weather data Completely
function WeatherData() {
    let City
if (Cityname.value == "") {
    console.log("Empty Data");
    
} else {
     City = Cityname.value
    


    let PromMain = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`)
  
    
  //! Promise to find the temprature , the Searched Name and the Humidity
  
      PromMain.then((result) => {
          return result.json()
      }).then((result)=>{
        //   console.log(result.name);
          DiplayCityname.innerText = result.name
          return result.main
          
      }).then((result)=>{
        //   console.log(result.temp);
          let a = result.temp
          TempratureK.innerText = `${KelvinToCelcius(a)}° Celcius`
          Humidity.innerHTML = `${result.humidity}<sup>%</sup>`
          Feels_like.innerHTML = `${KelvinToCelcius(result.feels_like)}<sup>°</sup>`
          Air_pressure.innerText = `${result.pressure}hPa`
          return result.temp
      }).catch((err) => {
         return "Error :", err  
      });
      
      

    //! Promise to find the Wind Speed
  
    let PromWind = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`)
  
    PromWind.then((result) => {
        return result.json()
    }).then((result)=>{
        return result.wind
    }).then((value)=>{
    //   console.log(value.speed);
      WindSpeed.innerHTML = `${value.speed}<sup>Km/h</sup>`
    }).catch((err) => {
        console.log(err);
       return "Error :", err  
    });  
  
  
  //! Promise to find the Discription for wheather change
  
  let PromDes = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`)
  
  PromDes.then((result) => {
      return result.json()
  }).then((result)=>{
      return result.weather
  }).then((value)=>{
 
      return value[0].main
  }).then((value)=>{
      let val = value 

    Descriptioin.innerText = `${val}`
      console.log(val);
      WeatherImgChange(val);
  }).catch((err) => {
      console.log(err);
     return "Error :", err  
  }); 



async function Visibility() {
    let PromVisi =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`)

    let ArrayOfOBJ = await PromVisi.json()
// console.log(ArrayOfOBJ);
return ArrayOfOBJ

}

Visibility().then((result) => {
    // console.log(result.visibility , " logging visbility data");
    
    Visibility_Distance.innerText = `${result.visibility/1000}Km`
    return result.visibility
}).catch((err) => {
    console.log(err);
    
    return `Error : ${err}`
});



  Cityname.value= ""
}
}
//!---Execution of all the function and promises
SreachBtn.addEventListener("click" , ()=>{
    WeatherData()
    })


// All The Variables required for Right Lower Conatainer
// let Right_Lower_Container = document.getElementById("Right_lower_container")
// let All_Cards = document.getElementsByClassName("cards")

let cardContainer1 = document.getElementById("DATA_Container1")
let cardContainer2 = document.getElementById("DATA_Container2")
let cardContainer3 = document.getElementById("DATA_Container3")
let cardContainer4 = document.getElementById("DATA_Container4")
let cardContainer5 = document.getElementById("DATA_Container5")

let cardIMG1 = document.getElementById("card_img_1")
let cardIMG2 = document.getElementById("card_img_2")
let cardIMG3 = document.getElementById("card_img_3")
let cardIMG4 = document.getElementById("card_img_4")
let cardIMG5 = document.getElementById("card_img_5")




async function fetching_States_data() {
let OdishaData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Odisha&appid=${API_KEY}`)
let MumbaiData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${API_KEY}`)
let DelhiData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}`)
let SwitzerlandData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Switzerland&appid=${API_KEY}`)
let ChennaiData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${API_KEY}`)

let fetchedData =  {
    OdishaData :await OdishaData.json(),
    MumbaiData : await MumbaiData.json(),
    DelhiData : await DelhiData.json(), 
    SwitzerlandData :await SwitzerlandData.json(), 
    ChennaiData:await ChennaiData.json()
}
    
    return  fetchedData
}

fetching_States_data().then((result) => {
    return result
}).then((value)=>{


let weatheData1 = value.OdishaData.weather[0].main
let weatheData2 = value.MumbaiData.weather[0].main
let weatheData3 = value.DelhiData.weather[0].main
let weatheData4 = value.SwitzerlandData.weather[0].main
let weatheData5 = value.ChennaiData.weather[0].main
cardIMG1.setAttribute("src" , `./weather-app-img/images/${weatheData1}.png` )
cardIMG2.setAttribute("src" , `./weather-app-img/images/${weatheData2}.png` )
cardIMG3.setAttribute("src" , `./weather-app-img/images/${weatheData3}.png` )
cardIMG4.setAttribute("src" , `./weather-app-img/images/${weatheData4}.png` )
cardIMG5.setAttribute("src" , `./weather-app-img/images/${weatheData5}.png` )



    cardContainer1.innerHTML= 
    `
    <pre id="c1_temp">Temprature - ${KelvinToCelcius(value.OdishaData.main.temp)}<sub>deg</sub></pre>
    <pre id="c1_hum">Humidity - ${value.OdishaData.main.humidity}%</pre>
    <pre id="c1_windSpd">Wind-Speed- ${value.OdishaData.wind.speed}<sub>Kmph</sub></pre>
    <pre id="c1_des">Desc- ${value.OdishaData.weather[0].description} </pre>
    <pre id="c1_vis">Visibily- ${value.OdishaData.visibility/1000}<sub>KM</sub></pre>
    `
    cardContainer2.innerHTML= 
    `
    <pre id="c1_temp">Temprature - ${KelvinToCelcius(value.MumbaiData.main.temp)}<sub>deg</sub></pre>
    <pre id="c1_hum">Humidity - ${value.MumbaiData.main.humidity}%</pre>
    <pre id="c1_windSpd">Wind-Speed- ${value.MumbaiData.wind.speed}<sub>Kmph</sub></pre>
    <pre id="c1_des">Desc- ${value.MumbaiData.weather[0].description} </pre>
    <pre id="c1_vis">Visibily- ${value.MumbaiData.visibility/1000}<sub>KM</sub></pre>
    `
    cardContainer3.innerHTML= 
    `
    <pre id="c1_temp">Temprature - ${KelvinToCelcius(value.DelhiData.main.temp)}<sub>deg</sub></pre>
    <pre id="c1_hum">Humidity - ${value.DelhiData.main.humidity}%</pre>
    <pre id="c1_windSpd">Wind-Speed- ${value.DelhiData.wind.speed}<sub>Kmph</sub></pre>
    <pre id="c1_des">Desc- ${value.DelhiData.weather[0].description} </pre>
    <pre id="c1_vis">Visibily- ${value.DelhiData.visibility/1000}<sub>KM</sub></pre>
    `
    cardContainer4.innerHTML= 
    `
    <pre id="c1_temp">Temprature - ${KelvinToCelcius(value.SwitzerlandData.main.temp)}<sub>deg</sub></pre>
    <pre id="c1_hum">Humidity - ${value.SwitzerlandData.main.humidity}%</pre>
    <pre id="c1_windSpd">Wind-Speed- ${value.SwitzerlandData.wind.speed}<sub>Kmph</sub></pre>
    <pre id="c1_des">Desc- ${value.SwitzerlandData.weather[0].description} </pre>
    <pre id="c1_vis">Visibily- ${value.SwitzerlandData.visibility/1000}<sub>KM</sub></pre>
    `
    cardContainer5.innerHTML= 
    `
    <pre id="c1_temp">Temprature - ${KelvinToCelcius(value.ChennaiData.main.temp)}<sub>deg</sub></pre>
    <pre id="c1_hum">Humidity - ${value.ChennaiData.main.humidity}%</pre>
    <pre id="c1_windSpd">Wind-Speed- ${value.ChennaiData.wind.speed}<sub>Kmph</sub></pre>
    <pre id="c1_des">Desc- ${value.ChennaiData.weather[0].description} </pre>
    <pre id="c1_vis">Visibily- ${value.ChennaiData.visibility/1000}<sub>KM</sub></pre>
    `
    let PlacesData = [OdishaData , MumbaiData , DelhiData , SwitzerlandData , ChennaiData]


   


    return value
}).catch((err) => {
    return `ERROR: ${err}`
});
