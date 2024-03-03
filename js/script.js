var searchInput = $('#search-input');
var searchBtn = $('#search-btn');

var apiKey = '28afe2d5b1bd9dc13c52bb3af017e6f9'
var currentURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;
var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=${apiKey}&units=imperial`;

// $.get(forecastURL)
//     .then(function(data) {
//         var blocks = data.list;

//         for (var i = 0; i < blocks.length; i++) {
//             var blockObj = blocks[i];

//             // Only works with noon time 
//             if (blockObj.dt_txt.includes('12:00')) {
//                 // Output an element for each block into the DOM/Window
//             }   
//         }
//     }); 

function getSearchHistory() {
    var rawData = localStorage.getItem('search-history');
    var history = JSON.parse(rawData) || [];

    return history;
}

function getForecastWeather() {
    console.log(forecast);
}

function getCurrentForecast() {
    var cityName = searchInput.val();
    var history = getSearchHistory();

    if (!history.includes(cityName)) {
        // Add city to empty array
        history.push(cityName);
        //Replace the old history array in localstorage with search
        localStorage.setItem('search-history', JSON.stringify(history));
    }

    //Make a request for current weather using the url and insert the city name value at the end
    $.get(currentURL + `&q=${cityName}`)
        .then(function (data) {
        // Output the current Weather conditions
        


        // Retrieve the forecast weather
   
        })
        .then(getForecastWeather)
}

searchBtn.click(getCurrentForecast);


// //example of event delegation at parent level.  all button will output 'clicked'
// $('.history').on('click', 'button', function() {
//     console.log('clicked');
// })