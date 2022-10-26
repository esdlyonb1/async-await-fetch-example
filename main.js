
function createCategoryButton(category){
    let template =
        `
        <button id="${category}" class="btn btn-success col-3">${category}</button>
        `

    document.querySelector('#buttons').innerHTML+=template




}

getCategories().then(categories=>{
    categories.forEach(category=>{
        createCategoryButton(category)
    })

    let buttons = document.querySelectorAll('.btn-success')
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            getAJoke().then(joke=>{
                createJokeElement(joke.value)

                let delButtons = document.querySelectorAll('.suppr')
                delButtons.forEach(delButton=>{
                    delButton.addEventListener('click', ()=>{
                        delButton.parentElement.remove()
                    })
                })

            })

        } )
    })
})


function createJokeElement(joke){
    let template =
        `        
        <li class="list-group-item">

            ${joke}
            
            <button class="suppr btn btn-danger">
                <i class="bi bi-trash"></i>
            </button>
        
        </li>
        `

    document.querySelector("#jokesList").innerHTML+=template
}

async function getCategories(){
    let reponse = await fetch('https://api.chucknorris.io/jokes/categories')
    let donnees = await reponse.json()
    return donnees
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




