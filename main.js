fetch('https://api.chucknorris.io/jokes/random')
    .then(uneReponse=>uneReponse.json())
    .then(trucDésérialisé=>{

    console.log(trucDésérialisé)
    })
