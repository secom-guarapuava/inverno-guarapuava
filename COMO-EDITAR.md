# Inverno Guarapuava 2026 — site

Site do festival **Inverno Guarapuava** (1 jul – 21 set 2026).
Estático (HTML/CSS/JS puro), tema **claro & editorial**, pronto pra **GitHub Pages**.

## Publicar no GitHub Pages

1. Suba **todo o conteúdo desta pasta** para um repositório no GitHub (pode deixar de fora a pasta de fotos originais, se quiser).
2. **Settings → Pages → Deploy from a branch → `main` / `/root`**.
3. Em alguns minutos: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

> O `.nojekyll` já está incluído.

## Páginas

```
index.html              Home
cronograma.html         Programação completa (com filtros)
gastronomia.html        ┐
rota-da-cerveja.html    │
rota-do-vinho.html      ├ experiências (subpáginas)
queijarias.html         │
turismo-rural.html      │
cultura.html            ┘  (Cultura & Entre Rios)
assets/css/style.css    Visual (cores, tipografia, componentes)
assets/js/main.js       Neve, carrossel, menu, animações, filtros
assets/img/             Fotos
assets/brand/           Logos e ícones oficiais (vetor)
```

## Editar o mais comum

**Fotos** → veja o arquivo **`FOTOS.md`**. Resumo: baixe do Unsplash, salve com o nome certo em `assets/img/` e o site puxa sozinho.

**Cronograma / eventos** → `cronograma.html` (e os destaques em `index.html`). Cada evento é um bloco `<article class="event">`. Copie um, troque data/título/descrição/local. A categoria vai em `data-cat="..."` (gastronomia, cerveja, vinho, cultura, natureza) — é o que os filtros usam.

**Menu** → editado em **um lugar só**: a lista `NAV` no topo de `assets/js/main.js`.

**Cores e fontes** → `assets/css/style.css`, bloco `:root` no topo (`--navy`, `--vermillion`, `--plum`, `--maroon`, `--gold`, `--paper`, `--frost`…).

**Links / contato** → topo de `assets/js/main.js` (`IG_TUR`, `IG_PREF`, `PHONE`).

## A fazer depois (quando tiver as infos)

- Completar o cronograma dos +100 eventos e definir a data do Festival das Cerejeiras.
- Baixar as 4 fotos do `FOTOS.md` (gastronomia, cerveja, queijarias, cultura).
- Conferir o telefone oficial do turismo (hoje: (42) 3142-1486).

---
Identidade visual *Inverno Guarapuava*. © 2026 Prefeitura de Guarapuava · Secretaria Municipal de Turismo e Eventos.
