const main = document.querySelector("main")
const button = document.querySelector("button")



async function receberMensagemDoBackend(){
    const response = await fetch("https://atv1-backend.vercel.app/").then(response => response.json())  
    

   response.map((person) => {

     main.innerHTML += `
     <section>
       <h2>Nome: ${person.name}</h2>
       <p>E-mail: ${person.email}</p>
 
    </section>

    `

   })


}

receberMensagemDoBackend()