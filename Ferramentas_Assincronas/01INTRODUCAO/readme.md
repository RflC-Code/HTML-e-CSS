FERRAMENTAS ASSÍNCRONAS


RESUMO:

JavaScript é uma linguagem single-threaded, ou seja, executa uma tarefa por vez. Para lidar com operações demoradas (como requisições de rede ou leitura de arquivos), usamos ferramentas assíncronas para evitar travar o fluxo do programa.
🧠 Conceitos Fundamentais
🔁 Síncrono vs Assíncrono

    Síncrono: cada linha espera a anterior terminar.

    Assíncrono: algumas operações são “delegadas” e o código continua rodando sem esperar.

🔧 Ferramentas principais:

    Callbacks

    Promises

    Async/Await

    Web APIs (Timers, Fetch, etc.)

    Event Loop

    Microtasks vs Macrotasks

1. ☎️ Callbacks

Funções passadas como argumento para serem executadas depois.

function carregarDados(callback) {
  setTimeout(() => {
    console.log("Dados carregados");
    callback();
  }, 2000);
}

carregarDados(() => {
  console.log("Callback executado");
});

Problema: Callback Hell

Encadeamento exagerado de callbacks dificulta a leitura e manutenção do código.
2. 📦 Promises

Uma Promise representa um valor que pode estar disponível agora, no futuro, ou nunca.

let promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sucesso!");
    // ou reject("Erro!");
  }, 1000);
});

promessa
  .then(res => console.log(res))
  .catch(erro => console.error(erro));

Estados de uma Promise:

    pending: ainda não resolvida

    fulfilled: resolvida com sucesso

    rejected: falhou

3. ⚙️ Async/Await

Sintaxe moderna e mais legível para lidar com Promises.

async function buscarDados() {
  try {
    const resposta = await fetch("https://api.exemplo.com");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar:", erro);
  }
}

    async torna a função automaticamente uma Promise
    await faz o JS “esperar” a Promise ser resolvida antes de continuar

4. 🌐 Web APIs Assíncronas Comuns

Fornecidas pelo navegador, funcionam junto com o Event Loop.
⏱️ setTimeout e setInterval

setTimeout(() => console.log("Depois de 1 segundo"), 1000);
setInterval(() => console.log("A cada 2 segundos"), 2000);

📡 fetch()

Usado para fazer requisições HTTP.

fetch("https://api.exemplo.com")
  .then(resp => resp.json())
  .then(dados => console.log(dados))
  .catch(err => console.error(err));

5. 🔄 Event Loop

O coração da execução assíncrona no JS. Ele coordena a execução das tarefas entre:

    Call Stack (pilha de execução)

    Task Queue (fila de tarefas normais, como setTimeout)

    Microtask Queue (fila de microtarefas como .then() de Promise)

Exemplo:

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// Resultado:
// 1
// 4
// 3
// 2

    As microtasks (como .then()) são executadas antes das macrotasks (setTimeout, setInterval).

6. 📌 Diferença: Microtask vs Macrotask
Tarefa	Exemplo	Fila
Microtask	Promise.then()	Microtask Queue
Macrotask	setTimeout()	Task Queue
⚠️ Boas Práticas

    Prefira async/await por legibilidade

    Sempre use try/catch com async/await

    Evite aninhar muitos then() (use funções separadas)

    Trate erros sempre, mesmo em Promises com .catch()


