JUSTIFY-CONTENT: CENTER; VS MARGIN: AUTO;


🟦 margin: auto (em blocos)
✅ Funciona para:

Centralizar blocos horizontalmente (como divs) quando:

    O elemento tem uma largura (width) definida.

    O pai não usa Flexbox (geralmente é o comportamento padrão do HTML).

Exemplo:

<div style="width: 200px; margin: auto; background: lightblue;">
  Eu estou centralizado!
</div>

👉 Aqui, margin: auto centraliza a div no meio do pai horizontalmente.
⚠️ Mas não centraliza verticalmente!
🟨 justify-content: center (em Flexbox)
✅ Funciona para:

Centralizar itens filhos dentro de um contêiner com display: flex.

<div style="display: flex; justify-content: center;">
  <div style="width: 200px; background: yellow;">
    Eu também estou centralizado!
  </div>
</div>

Vantagens do Flexbox:

    Pode centralizar vários itens ao mesmo tempo.

    Pode combinar com align-items: center pra centralizar também na vertical.

    Mais controle sobre alinhamento em eixos.

🧠 Resumão
Recurso	                   Centraliza o quê?	    Horizontal	Vertical	                       Requisitos
margin: auto               O próprio elemento	    ✅	       ❌	                            Precisa de width definido
justify-content: center	   Itens filhos (em flex)	✅	       ❌(mas usa align-items pra isso)	Requer display: flex no pai


