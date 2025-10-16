
const button = document.querySelector("button")

button.click = (event) =>{
    event.preventDefault()
    sendUser()
}

    async function sendUser (){

    const name = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#senha").value

    const user = {
        name,
        email,
        password
    }

    console.log(user)

    const response = fetch("http://localhost:3333/cadastrar", {
        method: "POST",
        headers: {  
        "Content-Type": "application/json"
    },
        body: JSON.stringify({ user })
    }).then(response => response.json())
    alert(response.message)
}