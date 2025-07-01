console.log("Esta mensagem aparecerá no console, não na pagina.");
function adicione_elemento(valor, nome_elemento = "p") {
    const pai = document.getElementById('conteudo');
    const novo_elemento = document.createElement(nome_elemento);
    novo_elemento.innerHTML = valor;
    pai.appendChild(novo_elemento);
}
adicione_elemento('Olá! Edy. Qual é seu nome?');
adicione_elemento("Esta mensagem aparecerá na, não no console");
adicione_elemento('Esta ,mensagem aparecerá na  um título', "h1");
adicione_elemento('Esta aparecerá na página como um título', 'h2');
adicione_elemento('título h3', 'h3');
adicione_elemento('título h4', 'h4');
adicione_elemento('título h5', 'h5');
adicione_elemento('título h6', 'h6');
let nome = prompt('Qual é seu nome?');
adicione_elemento(nome, 'h1');
adicione_elemento('aparecerá na página como um parágrafo', 'p');
adicione_elemento("aparecerá um parágrafo, 'p' como padrão. ");
console.log('esta aparecerá no console, pois usa console.log().');
