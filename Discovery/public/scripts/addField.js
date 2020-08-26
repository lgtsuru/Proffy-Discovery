//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField) //addEventListener vai executar uma ação (cloneField), quando houver um evento (click)

//Executar uma ação
function cloneField(){
     //Duplicar os campos. Qual campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //cloneNode vai clonar o item (schedule-item). No JavaScript, usamos o 'Node' para nos referirmos a elementos HTML. ë um dado Boolean (True/False). const serve para fazer com que a variavel nao mude, dentro desta funcionalidade de duplicar os campos
    //Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')
        //Para cada campo...limpar
        fields.forEach(function (field) {
            //Pegar o field do momento e limpa ele
            field.value=""
        })    

    //Colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}   
   