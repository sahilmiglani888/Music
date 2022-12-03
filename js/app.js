const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");

const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs =[
    {
        id : 'song-1',
        songName : 'song-1',
        artistName : 'Owner'

    },
    {
        id : 'song-2',
        songName : 'song-2',
        artistName : 'Owner'
    },
    {
        id : 'song-3',
        songName : 'song-3',
        artistName : 'Owner'
    },
]

// by default 
let isAudioPlaying = false;


// for play
const playtheMusic = function (){
    isAudioPlaying = true; 
    music.play();
    // for icon change
    play.classList.replace("fa-play", "fa-pause");
    // for img rotate
    img.classList.add("rotateAnime");
}


// for pause



 const  pauseTheMusic = function (){
    isAudioPlaying = false; 
    music.pause();
    // for icon change
    play.classList.replace("fa-pause", "fa-play");
    // for img rotate
    img.classList.remove("rotateAnime");
}


// Calling the function / event fire
play.addEventListener('click',loadAudio);

function loadAudio(){
//   if(isAudioPlaying)
//   {
//     pauseTheMusic();
//   }
//   else
//   {
//     playtheMusic();
//   }

// Using ternary opertor

isAudioPlaying ? pauseTheMusic() : playtheMusic();
}


// Changing the songs

const loadTheSong = (songs) => {
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistName;

    music.src = "music/" + songs.id + ".mp3";
    img.src = "img/" + songs.id + ".jpg";
}

songIndex = 0;
const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playtheMusic();
};

const prevSong = () =>{
    songIndex = (songIndex - 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playtheMusic();
};




next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

