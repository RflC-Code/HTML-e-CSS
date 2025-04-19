TRANSFORM

A propriedade transform do CSS é super poderosa pra manipular visualmente elementos — tipo mover, rotacionar, redimensionar ou até distorcer.

Aqui vai uma lista completinha com todas as funções de transform que você pode usar, explicadas de forma simples:
🧱 1. translate(x, y)

    Move o elemento no eixo X e Y.

    translate(50px, 20px) → move 50px pra direita e 20px pra baixo

    translateX(50px) → move só no eixo X

    translateY(-30px) → move 30px pra cima

✅ Útil pra deslocar um elemento sem mudar sua posição real no layout.
🔄 2. rotate(ângulo)

    Gira o elemento em torno do seu centro.

    rotate(45deg) → gira 45 graus no sentido horário

    rotate(-90deg) → gira 90 graus no sentido anti-horário

✅ Ideal pra fazer etiquetas diagonais, animações, ícones giratórios…
🔍 3. scale(x, y)

    Aumenta ou diminui o tamanho do elemento.

    scale(1.5) → aumenta 150% (em ambos os eixos)

    scale(1, 2) → largura normal, altura dobrada

    scaleX(2) / scaleY(0.5) → só em um eixo

✅ Ótimo pra efeitos de hover, zoom, feedback visual.
💫 4. skew(x, y)

    Inclina o elemento (distorção).

    skew(30deg, 0) → inclina só no eixo X

    skew(0, 20deg) → inclina só no Y

    skew(20deg, 10deg) → inclina em ambos

✅ Dá um efeito inclinado estiloso, mas pode ficar meio "torto" se abusar 
🧮 5. matrix(a, b, c, d, e, f)

    Combina várias transformações num só comando.
    Forma geral:

transform: matrix(a, b, c, d, e, f);

    a e d → escala

    b e c → inclinação

    e e f → translação

⚠️ É avançado e mais usado em gráficos, SVG ou quando se quer performance.
📐 Versões 3D (CSS3)
6. translate3d(x, y, z)

Move em 3 eixos: X, Y e Z.
7. rotateX(), rotateY(), rotateZ()

Rotação em 3D.
8. scale3d(x, y, z)

Escala em 3D.
9. perspective(n)

Define a profundidade da perspectiva 3D (não é uma transform, mas se usa com elas).
🧊 Combinação de transformações

Você pode combinar várias transformações na mesma regra:

transform: translate(50px, 0) rotate(45deg) scale(1.2);

A ordem importa: o que vier primeiro é aplicado primeiro.
🚀 Dica bônus: Transições com transform

elemento {
  transition: transform 0.3s ease;
}

elemento:hover {
  transform: scale(1.1) rotate(5deg);
}
