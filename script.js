const pessoaDiv = document.querySelector(".pessoa")
const button = document.querySelector("button")

button.addEventListener("click",receberMensagemDoBackend)

async function receberMensagemDoBackend(){
    const response = await fetch("http://localhost:3333").then(response => response.json())  
    

   response.map((person) => {

     pessoaDiv.innerHTML += `
     <div>
    <h2>Nome: ${person.name}</h2>
    <h3>Idade: ${person.age}</h2>
    <h3>CPF: ${person.cpf}</h2>
    <hr>
    </div>
    `

   })



    console.log(response)
}