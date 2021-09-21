let infoHere = document.querySelector('.infoHere')
let spirit = document.getElementById('spiritBtn')
let spirited= document.querySelector('.spirited')
let castle = document.querySelector('.castle')
let totoro = document.querySelector('.neighbor')
let mononoke = document.querySelector('.princess')
let porco = document.querySelector('.porco')
let grave = document.querySelector('.grave')

let baseURL = 'https://ghibliapi.herokuapp.com/films'

spirit.addEventListener('click', gimmePlot)

async function gimmePlot(){
    const response = await fetch(baseURL);
    console.log(response);
    const json = await response.json();
    movieInfo(json);
}

async function awayPlot(){
    const response = await fetch(baseURL , dc2e6bd1-8156-4886-adff-b39e6043af0c)
    console.log(response);
    const json = await response.json();
    console.log(json)
}

let movieInfo =(anime) => {
    console.log(anime)
    
    let spiritPlot = document.createElement('p');
    spiritPlot.innerText =  `${anime[10].description}`

    let spiritTitle = document.createElement('h3')
    spiritTitle.innerText = `${anime[10].title}`
    
    spirited.appendChild(spiritTitle);
    spirited.appendChild(spiritPlot);

    let graveTitle = document.createElement('h3')
    graveTitle.innerText = `${anime[1].title}`
    let gravePlot = document.createElement('p')
    gravePlot.innerText = `${anime[1].description}`

    grave.appendChild(graveTitle);
    grave.appendChild(gravePlot);

    let castleTitle = document.createElement('h3')
    castleTitle.innerText = `${anime[0].title}`
    let castlePlot = document.createElement('p')
    castlePlot.innerText = `${anime[0].description}`

    castle.appendChild(castleTitle);
    castle.appendChild(castlePlot);

    let totoroTitle = document.createElement('h3')
    totoroTitle.innerText = `${anime[3].title}`
    let totoroPlot = document.createElement('p')
    totoroPlot.innerText = `${anime[3].description}`

    totoro.appendChild(totoroTitle);
    totoro.appendChild(totoroPlot);

    let mononokeTitle = document.createElement('h3')
    mononokeTitle.innerText = `${anime[8].title}`
    let mononokePlot = document.createElement('p')
    mononokePlot.innerText = `${anime[8].description}`

    mononoke.appendChild(mononokeTitle)
    mononoke.appendChild(mononokePlot)

    let porcoTitle = document.createElement('h3')
    porcoTitle.innerText = `${anime[6].title}`
    let porcoPlot = document.createElement('p')
    porcoPlot.innerText = `${anime[6].description}`

    porco.appendChild(porcoTitle)
    porco.appendChild(porcoPlot)



}