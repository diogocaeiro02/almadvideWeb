# Alma d'Vide — Luxury Website Concept

Website em React + Vite, JavaScript/JSX (sem TypeScript), pensado para o alojamento Alma d'Vide em Cabeço de Vide.

## Arranque

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Fotografias

O projeto procura as fotografias na pasta `public/assets/`.

Já está preparado para os nomes usados no website anterior:

- `outside-3.png`
- `room-1.png`
- `living-room-2.png`
- `outside-2.png`
- `portalegre.png`
- `coudelaria.png`
- `termas.png`

Para completar os cartões do guia local, adicionar opcionalmente:

- `cabeco-de-vide.jpg`
- `marvao.jpg`
- `castelo-de-vide.jpg`

Se algum ficheiro não existir, o site mostra automaticamente um fallback visual elegante em vez de uma imagem partida.

## Conteúdo editável

As sugestões de atividades e restaurantes estão no início de `src/App.jsx`, nos arrays `experiences` e `restaurants`.

O botão de reserva está atualmente ligado a `info@almadvide.pt`. Quando existir um link Airbnb/Booking direto, basta substituir o `mailto:` nos CTAs pelo URL de reserva.

## Paleta

- Verde profundo: `#203633`
- Verde água suave: `#89BFB2`
- Bege quente: `#F4EFE6`
- Terracota: `#B97758`
- Branco quente: `#FBF8F2`
