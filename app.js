let no = document.getElementById('no')

let generateRandomNumber = () => {
    let random = Math.ceil(Math.random()*100)
    no.innerText = random
}