let infoHere = document.querySelector('.infoHere')

let spirited= document.querySelector('.spirited')
let castle = document.querySelector('.castle')
let totoro = document.querySelector('.neighbor')
let mononoke = document.querySelector('.princess')
let porco = document.querySelector('.porco')
let grave = document.querySelector('.grave')

let spirit = document.getElementById('spiritBtn')
let graveBtn = document.getElementById('graveBtn')
let castleBtn = document.getElementById('castleBtn')
let totoroBtn = document.getElementById('totoroBtn')
let mononokeBtn = document.getElementById('mononokeBtn')
let porcoBtn = document.getElementById('porcoBtn')

let baseURL = 'https://ghibliapi.herokuapp.com/films'

spirit.addEventListener('click', awayPlot)
graveBtn.addEventListener('click', firefly)
castleBtn.addEventListener('click', theSky)
totoroBtn.addEventListener('click', neighbor)
mononokeBtn.addEventListener('click', princess)
porcoBtn.addEventListener('click', rosso)

// async function gimmePlot(){
//     const response = await fetch(baseURL);
//     //console.log(response);
//     const json = await response.json();
//     movieInfo(json);
//  }

async function awayPlot(){
    const response = await fetch('https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c')
    console.log(response);
    const json = await response.json();
    console.log(json)
    spiritInfo(json)
}

let spiritInfo = (gold) =>{

    while(infoHere.firstChild) {
        infoHere.removeChild(infoHere.firstChild)
    }
    let spiritPlot = document.createElement('p');
    spiritPlot.innerText =  `${gold.description}`


    let spiritTitle = document.createElement('h3')
    spiritTitle.innerText = `${gold.title}`
    
    infoHere.appendChild(spiritTitle);
    infoHere.appendChild(spiritPlot);
}

  async function firefly(){
    const responses = await fetch('https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a')
    console.log(responses);
    const json = await responses.json();
    console.log(json)
    sadNess(json)
}

let sadNess = (sad) => {

    while(infoHere.firstChild) {
        infoHere.removeChild(infoHere.firstChild)
    }

    let graveTitle = document.createElement('h3')
    graveTitle.innerText = `${sad.title}`
    let gravePlot = document.createElement('p')
    gravePlot.innerText = `${sad.description}`

    infoHere.appendChild(graveTitle);
    infoHere.appendChild(gravePlot);
}

async function theSky(){
    const responses = await fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe')
    console.log(responses);
    const json = await responses.json();
    console.log(json)
    skyStuff(json)
}

let skyStuff = (sky) => {

    while(infoHere.firstChild) {
        infoHere.removeChild(infoHere.firstChild)
    }
     let castleTitle = document.createElement('h3')
    castleTitle.innerText = `${sky.title}`
    let castlePlot = document.createElement('p')
    castlePlot.innerText = `${sky.description}`

    infoHere.appendChild(castleTitle);
    infoHere.appendChild(castlePlot);
}

async function neighbor(){
    const responses = await fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
    console.log(responses);
    const json = await responses.json();
    console.log(json)
    tRo(json)
}

let tRo = (tRoStuff) => {

    while(infoHere.firstChild) {
        infoHere.removeChild(infoHere.firstChild)
    }
     let totoroTitle = document.createElement('h3')
    totoroTitle.innerText = `${tRoStuff.title}`
    let totoroPlot = document.createElement('p')
    totoroPlot.innerText = `${tRoStuff.description}`

    infoHere.appendChild(totoroTitle);
    infoHere.appendChild(totoroPlot);
}

async function princess(){
    const responses = await fetch('https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6')
    console.log(responses);
    const json = await responses.json();
    console.log(json)
    wolfGirl(json)
}

let wolfGirl = (wolfStuff) => {

    while(infoHere.firstChild) {
        infoHere.removeChild(infoHere.firstChild)
    }
        let mononokeTitle = document.createElement('h3')
    mononokeTitle.innerText = `${wolfStuff.title}`
    let mononokePlot = document.createElement('p')
    mononokePlot.innerText = `${wolfStuff.description}`

    infoHere.appendChild(mononokeTitle)
    infoHere.appendChild(mononokePlot)
}

async function rosso(){
    const responses = await fetch('https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8')
    console.log(responses);
    const json = await responses.json();
    console.log(json)
    porky(json)
}

let porky =(anime) => {
    console.log(anime)

    while(infoHere.firstChild) {
        infoHere.removeChild(infoHere.firstChild)
    }

   



    let porcoTitle = document.createElement('h3')
    porcoTitle.innerText = `${anime.title}`
    let porcoPlot = document.createElement('p')
    porcoPlot.innerText = `${anime.description}`

    infoHere.appendChild(porcoTitle)
    infoHere.appendChild(porcoPlot)



}