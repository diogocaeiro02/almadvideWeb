# Alma d'Vide — Website

Website estático em React + Vite para a Alma d'Vide, preparado para GitHub Pages — incluindo URLs do tipo:

`https://UTILIZADOR.github.io/NOME-DO-REPOSITORIO/`

## Testar localmente

```bash
npm install
npm run dev
```

## Gerar versão de produção

```bash
npm run build
```

O resultado fica na pasta `dist/`.

## Publicar no GitHub Pages

1. Cria um repositório no GitHub.
2. Coloca estes ficheiros na raiz do repositório.
3. Faz push para a branch `main`.
4. No GitHub abre **Settings → Pages**.
5. Em **Source**, escolhe **GitHub Actions**.
6. O workflow `.github/workflows/deploy.yml` faz o build e publica o site automaticamente.

Depois disso, cada novo `push` para `main` volta a publicar o website.

## Fotografias

Coloca as imagens em `public/assets/`.

O site está preparado para estes nomes:

- `outside-3.png`
- `room-1.png`
- `living-room-2.png`
- `outside-2.png`
- `portalegre.png`
- `coudelaria.png`
- `termas.png`
- `cabeco-de-vide.jpg`
- `marvao.jpg`
- `castelo-de-vide.jpg`

Os caminhos usam `import.meta.env.BASE_URL`, por isso as imagens funcionam mesmo quando o site é publicado dentro do nome do repositório no GitHub Pages.

## Conteúdo editável

As sugestões de atividades e restaurantes estão no início de `src/App.jsx`, nos arrays `experiences` e `restaurants`.

O botão de reserva está atualmente ligado a `info@almadvide.pt`. Quando existir um link Airbnb/Booking direto, basta substituir o `mailto:` nos CTAs pelo URL de reserva.

## Domínio próprio

O mesmo build também pode ser usado com um domínio próprio, como `almadvide.pt`. A configuração `base: './'` do Vite mantém os recursos compatíveis nos dois cenários.
