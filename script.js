const inputNovaTarefa = document.getElementById('inputNovaTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const textoTarefa = inputNovaTarefa.value;

    if (textoTarefa.trim() === '') {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const novoItemLista = document.createElement('li');

    const textoSpan = document.createElement('span');
    textoSpan.textContent = textoTarefa;
    novoItemLista.appendChild(textoSpan);

    const btnRemover = document.createElement('button');
    btnRemover.textContent = ' X ';
    btnRemover.className = 'btn-remover';
    btnRemover.addEventListener('click', function() {
        listaTarefas.removeChild(novoItemLista);
    });
    novoItemLista.appendChild(btnRemover);

    listaTarefas.appendChild(novoItemLista);

    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

btnAdicionar.addEventListener('click', adicionarTarefa);

inputNovaTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        adicionarTarefa();
    }
});

listaTarefas.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});

const btnTema = document.getElementById('btnTema');

// Alternar entre os temas claro e escuro
btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
