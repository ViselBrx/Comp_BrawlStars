# Brawl Stars Trio Random Comp

Um sorteador de composições para equipes de **Brawl Stars**.

O projeto sorteia automaticamente **3 brawlers diferentes**, podendo ser utilizado para:

- FutBrawl
- Pique-Gema
- Nocaute
- Combate
- Zona Estratégica
- Caça-Estrelas
- Roubo
- Treinos
- Campeonatos internos
- Etc...

---

## Demonstração

```
Jogador 1 → Surge

Jogador 2 → Otis

Jogador 3 → Griff
```

Cada clique gera uma nova composição.

---

## Tecnologias

- HTML5
- CSS3
- JavaScript
- VsCode
- GitHub

---

## Algoritmo

O projeto utiliza um sorteio aleatório sem repetição utilizando um `Set`.

A quantidade de combinações possíveis é calculada por:

\[
C(n,p)=\frac{n!}{p!(n-p)!}
\]

Com os **106 brawlers** atuais:

\[
C(106,3)=196\,460
\]

Ou seja,

**196.460 trios diferentes** podem ser sorteados.

---

## Estrutura

```
brawl-stars-trio-random-comp

├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Como executar

Basta abrir o arquivo ```index.html``` com Live Server Extension


ou publicar o projeto no GitHub Pages.

---
