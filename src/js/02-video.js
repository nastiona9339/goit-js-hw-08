import Player from '@vimeo/player';
const video = document.querySelector("#vimeo-player")


const player = new Player(video);

const onPlay = function({
    seconds: 3.03}) {
   
};

player.on('timeupdate', onPlay);



console.log(onPlay);