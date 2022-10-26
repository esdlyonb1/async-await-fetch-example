

function createJokeElement(joke){
    let template =
        `        
        <li class="list-group-item">${joke}</li>
        `

    document.querySelector("#jokesList").innerHTML+=template
}




async function getAJoke(){

    let reponse = await fetch('https://api.chucknorris.io/jokes/random')

    let donnees = await reponse.json()

    return donnees

}

document.querySelector("#add").addEventListener('click',()=>{
    getAJoke().then(blague=>{
        createJokeElement(blague.value)
    })
})




