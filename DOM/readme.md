🧠 DOM (Document Object Model) com JavaScript

📌 O que é o DOM?

O DOM (Document Object Model) é uma estrutura em forma de árvore que o navegador cria a partir do HTML da sua página.
Cada tag do HTML vira um nó (node) ou objeto que você pode acessar, ler ou modificar com JavaScript.

    Pense que o HTML vira algo que o JavaScript pode "ver" e mexer diretamente.

📍 Seções principais dessa apostila:

    getElementById

    querySelector e querySelectorAll

    Manipulando texto e HTML

    Estilo e classes com JS

    Eventos (clique, mouse, teclado)

    Criar e remover elementos

    Exercícios práticos

✅ 1 – getElementById
📄 Como funciona:

document.getElementById('id-do-elemento');

🧪 Exemplo:

<p id="mensagem">Olá!</p>

<script>
  const elemento = document.getElementById('mensagem');
  elemento.textContent = 'Texto alterado!';
</script>

✅ O que dá pra fazer com ele:

    Mudar texto com .textContent

    Mudar HTML com .innerHTML

    Mudar estilos com .style

    Adicionar classes com .classList.add()

    Adicionar eventos com .onclick ou .addEventListener()

✅ 2 – querySelector e querySelectorAll
🔹 querySelector:

Pega o primeiro elemento que bater com o seletor CSS informado.

document.querySelector('p'); // primeiro <p>
document.querySelector('.classe'); // primeiro com essa classe
document.querySelector('#id'); // igual ao getElementById

🔹 querySelectorAll:

Pega todos os elementos que combinam com o seletor.

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => {
  p.style.color = 'blue';
});

✅ 3 – Manipulando texto e HTML

elemento.textContent = 'Texto plano';
elemento.innerHTML = '<strong>Texto com HTML</strong>';

✅ 4 – Mudando estilo e classes CSS com JavaScript
🔹 Estilo direto:

elemento.style.color = 'red';
elemento.style.backgroundColor = 'black';

🔹 Usando classes:

elemento.classList.add('ativo');
elemento.classList.remove('escondido');
elemento.classList.toggle('modo-escuro');

✅ 5 – Eventos (clique, mouse, teclado)
Clique:

botao.onclick = function() {
  alert('Clicou!');
};

Forma moderna:

botao.addEventListener('click', () => {
  alert('Clicou com addEventListener!');
});

✅ 6 – Criar e remover elementos
Criar:

const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Sou novo aqui!';
document.body.appendChild(novoParagrafo);

Remover:

const remover = document.getElementById('apagar');
remover.remove();

✅ 7 – Exercícios práticos
🧩 Ex 1: Mudar a cor de fundo de um div com botão

<div id="caixa" style="width:100px; height:100px; background:gray;"></div>
<button id="mudar">Mudar cor</button>

<script>
  const div = document.getElementById('caixa');
  const btn = document.getElementById('mudar');

  btn.onclick = () => {
    div.style.backgroundColor = 'blue';
  };
</script>

🧩 Ex 2: Mostrar texto quando digitar no input

<input type="text" id="nome" placeholder="Digite seu nome">
<p id="saida"></p>

<script>
  const input = document.getElementById('nome');
  const saida = document.getElementById('saida');

  input.addEventListener('input', () => {
    saida.textContent = 'Olá, ' + input.value;
  });
</script>

