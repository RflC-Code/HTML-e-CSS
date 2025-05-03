📦 O que é classList?

classList é uma propriedade que existe em qualquer elemento HTML, e te dá acesso a uma lista com todas as classes CSS que aquele elemento tem.
Exemplo básico:

<div id="caixa" class="azul grande"></div>

const caixa = document.getElementById('caixa');
console.log(caixa.classList); // Resultado: DOMTokenList ['azul', 'grande']

Ou seja, classList funciona como um array de classes aplicadas no elemento.
🔧 Métodos disponíveis no classList

Você pode fazer várias coisas com ele:
✅ .add('nome-da-classe')

Adiciona uma nova classe ao elemento. Se a classe já existir, ele não duplica.

caixa.classList.add('borda');

❌ .remove('nome-da-classe')

Remove a classe especificada, se ela existir.

caixa.classList.remove('azul');

🔄 .toggle('nome-da-classe')

Alterna a presença da classe:

    Se já existe, ele remove.

    Se não existe, ele adiciona.

caixa.classList.toggle('ativo');

    Muito útil pra mostrar/esconder coisas, abrir menus, etc.

❓ .contains('nome-da-classe')

Verifica se a classe está presente. Retorna true ou false.

if (caixa.classList.contains('grande')) {
  console.log('A caixa é grande!');
}

⚙️ .replace('antiga', 'nova')

Substitui uma classe pela outra.

caixa.classList.replace('azul', 'vermelho');

🧠 Exemplo completo:

<div id="caixa" class="azul grande"></div>
<button onclick="alterar()">Alterar Classe</button>

<script>
  function alterar() {
    const caixa = document.getElementById('caixa');

    // Trocar azul por vermelho
    if (caixa.classList.contains('azul')) {
      caixa.classList.replace('azul', 'vermelho');
    }

    // Adicionar uma borda se ainda não tiver
    caixa.classList.add('borda');

    // Alternar a classe "ativo"
    caixa.classList.toggle('ativo');
  }
</script>

🎯 Como isso se conecta com CSS?

No CSS, você pode definir regras baseadas nas classes:

.azul {
  background-color: blue;
}

.vermelho {
  background-color: red;
}

.borda {
  border: 2px solid black;
}

.ativo {
  box-shadow: 0 0 10px green;
}

O JavaScript, com classList, ativa ou desativa essas regras dinamicamente na sua página.
🚨 Dica importante:

Você também pode mudar a lista de classes inteira com:

elemento.className = 'classe1 classe2';

Mas isso substitui tudo. Já com classList, você mexe só no que precisa.




Importante! classList só funciona com elementos do DOM

Pra usar .classList, você primeiro precisa ter um elemento HTML em mãos. Isso normalmente é feito com algum método que busca elementos, como:

    document.getElementById('id')

    document.querySelector('seletor')

    document.querySelectorAll('seletor') (com laço)

    ou usando outras formas como getElementsByClassName(), etc.

👇 Exemplo:

<div id="caixa" class="azul"></div>

// Primeiro, você pega o elemento:
const caixa = document.getElementById('caixa');

// Depois, pode usar classList:
caixa.classList.add('borda');

📌 Por que usamos .classList na variável (tipo caixa.classList) e não direto com document?

Porque o document é o documento inteiro, ou seja, a página HTML completa.
Você não consegue acessar diretamente a lista de classes de toda a página, porque só elementos específicos têm classes.
💡 Pensamento prático:

    document.getElementById('caixa') pega um elemento específico.
    Esse elemento tem um .classList, e é aí que você pode usar .add(), .remove(), etc.

😅 Se você tentar isso, dá erro:

document.classList.add('erro'); // ❌ Erro! document não tem classList

🧪 Dica: dá até pra usar direto sem variável, mas fica feio

Você pode usar assim:

document.getElementById('caixa').classList.add('ativo');

Mas geralmente a gente separa assim pra facilitar:

const caixa = document.getElementById('caixa');
caixa.classList.add('ativo');

Assim, se você precisar mexer mais vezes no mesmo elemento, é só usar a variável.


