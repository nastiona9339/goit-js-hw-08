import Player from '@vimeo/player';
const video = document.querySelector("#vimeo-player")
const throttle = require('lodash.throttle');

const player = new Player(video);
 

 function pushInfo (time) {
   localStorage.setItem("videoplayer-current-time", JSON.stringify(time) ) 
} 

function pullInfo() {
 return JSON.parse(localStorage.getItem("videoplayer-current-time"))   
}



player.on("timeupdate", throttle (onUpDate, 1000))

function onUpDate() {
    const timeUpDate = player.getCurrentTime().then(function (seconds) {
     pushInfo(seconds);
    
}).catch(function(error) {
   
});
}




player.on('play', onPlay) 
function onPlay() {
    let currentTime = pullInfo()

    player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
}

