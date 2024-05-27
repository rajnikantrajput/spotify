console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Mast Magan [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "piya aaye na", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "tere sang yaara [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Falak tak chal sath mere [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Peecha chhute", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Jeene Laga hoon", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Bulleya", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tu jaane na", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tera hone laga hoon", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "chand Baliyaan", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kesariya tera", filePath: "songs/11.mp3", coverPath: "covers/2.jpg"},
    {songName: "Main agar samne", filePath: "songs/12.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tera Fitoor", filePath: "songs/13.mp3", coverPath: "covers/4.jpg"},
    {songName: "Khairiyat", filePath: "songs/14.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tujhme rab dikhta hai", filePath: "songs/15.mp3", coverPath: "covers/6.jpg"},
    {songName: "shayad", filePath: "songs/16.mp3", coverPath: "covers/7.jpg"},
    {songName: "Main rang sharbaton ka", filePath: "songs/17.mp3", coverPath: "covers/8.jpg"},
    {songName: "Taron ke seher mein", filePath: "songs/18.mp3", coverPath: "covers/9.jpg"},
    {songName: "Hawa Banke", filePath: "songs/19.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kya mujhe pyar hai", filePath: "songs/20.mp3", coverPath: "covers/1.jpg"},
    {songName: "295", filePath: "songs/21.mp3", coverPath: "covers/1.jpg"},


]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=20){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})