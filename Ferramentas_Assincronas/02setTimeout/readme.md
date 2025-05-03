📌 O que é setTimeout?

setTimeout é uma função do JavaScript usada para executar uma função depois de um determinado tempo (em milissegundos).
🧠 Sintaxe:

setTimeout(função, tempoEmMilissegundos, argumento1, argumento2, ...);

    função: a função que será executada depois da espera.

    tempoEmMilissegundos: o tempo de espera antes da execução (1 segundo = 1000 ms).

    argumento1, argumento2...: argumentos opcionais que podem ser passados para a função.

✅ Exemplo simples:

setTimeout(() => {
  console.log("Olá! Isso apareceu depois de 2 segundos.");
}, 2000);

🕒 Isso imprime a mensagem depois de 2 segundos.
🧩 Usando função separada:

function mostrarMensagem() {
  console.log("Essa mensagem é atrasada!");
}

setTimeout(mostrarMensagem, 3000);

🔁 Diferença entre setTimeout e setInterval
Função	Executa uma vez?	Executa várias vezes?
setTimeout	✅	❌
setInterval	❌	✅ (repetidamente)
📥 Passando parâmetros:

function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

setTimeout(saudacao, 1000, "Maria");

🔁 Cancelando com clearTimeout

setTimeout retorna um ID, que você pode usar para cancelar a execução.

let id = setTimeout(() => {
  console.log("Você não vai ver isso!");
}, 5000);

clearTimeout(id);

Essa mensagem não será exibida, porque foi cancelada antes dos 5 segundos.
🧪 Exemplo mais elaborado:

console.log("Iniciando...");

setTimeout(() => {
  console.log("3 segundos depois...");
}, 3000);

console.log("Esperando...");

Resultado:

Iniciando...
Esperando...
3 segundos depois...

🕵️‍♂️ Curiosidades:

    setTimeout não pausa o código. Ele agenda a função e o resto do código continua executando.

    É assíncrono: usa a fila de tarefas do JavaScript (event loop).

    Tempo mínimo pode ser menor que o especificado se o navegador estiver ocupado.