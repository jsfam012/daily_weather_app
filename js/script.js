var searchInput = $('#search-input');
var searchBtn = $('#search-btn');

var apiKey = '28afe2d5b1bd9dc13c52bb3af017e6f9'
var currentURL = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${apiKey}&units=imperial`;
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


function getCurrentForecast() {
    var cityName = searchInput.val();

    getSearchHistory();
}

searchBtn.click(getCurrentForecast);