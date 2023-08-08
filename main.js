const form = document.getElementById('form-agendaDeContatos');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomecontato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

        nome.push(inputNomecontato.value);
        telefone.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomecontato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomecontato.value = '';
    inputNumeroContato.value = '';


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}