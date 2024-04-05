document.addEventListener("DOMContentLoaded", function() {
console.log('DOMContentLoaded evento disparado');
let contador = 0 
let input = document.getElementById('inputTarefa'); 
let btnAdd = document.getElementById('btn-add'); 
let main = document.getElementById('areaLista'); 

btnAdd.addEventListener('click', addTarefa); 

function addTarefa(){
    let valorInput = input.value;
    console.log('valor do input:', valorInput) ; 

    if((valorInput !== "") && (valorInput !==null) && (valorInput !==undefined)){ 
      
      ++contador; 
    
      let novoItem = `
      <div id="item-${contador}" class="item">
      <div onclick="concluirTarefa(${contador})" class="item-icone">
         <i i="icone_${contador}" class="fa-regular fa-circle"></i>
      </div>
      <div onclick="concluirTarefa(${contador})" class="item-nome">
           ${valorInput}
      </div>
      <div class="item-botao">
          <button onclick="deletar('item-${contador}')" class="delete"><i class="fa-solid fa-trash"></i></button>
      </div>
   </div>`; 


   console.log('novo item', novoItem); 


   //adc novo campo 
   main.innerHTML += novoItem; 
   

   //zerar campo
   input.value = ""; 
   input.focus()
  

   }


}



input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault(); 
        btnAdd.click(); 
    }
})

      
});

function deletar(id){
    var tarefa = document.getElementById(id); 
    tarefa.remove(); 

   }

function concluirTarefa(id) {
    console.log('ID do item', id);

    var item = document.getElementById(id);

    // Verificar se o elemento foi encontrado
    if (item) {
        var classes = item.classList;
        console.log('Classes do item:', classes);

        if (classes.contains("item")) {
            item.classList.add('clicado');

            var icone = document.getElementById('icone_' + id);
            icone.classList.remove('fa-circle');
            icone.classList.add('fa-circle-check');

            item.parentNode.appendChild(item);
        } else {
            item.classList.remove('clicado');

            var icone = document.getElementById('icone_' + id);
            icone.classList.remove('fa-circle-check');
            icone.classList.add('fa-circle');
        }
    }
}



