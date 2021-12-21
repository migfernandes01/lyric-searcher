const form = document.querySelector('#searchForm');
const displayTitle = document.querySelector('#displayTitle');
const displayBox = document.querySelector('#displayLyrics');

async function getLyrics(){
    let artistInput = document.querySelector('[name="artist"]').value;
    let songInput = document.querySelector('[name="title"]').value;
    try{
        //make API call and store it to a variable
        const res = await axios.get(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`);
        const lyrics = res.data.lyrics.toString();
        console.log(lyrics);
        displayLyrics(lyrics);
    }catch(e){
        console.log(e);
        displayBox.innerText = "";
        displayBox.innerText = "Unable to get song lyrics, please try again!";
    }
}

function displayLyrics(lyrics){
    displayTitle.innerText = "Lyrics: ";
    displayBox.innerText = "";
    displayBox.innerText = lyrics;
}

form.addEventListener('submit', async function(e){
    e.preventDefault();
    getLyrics();

});