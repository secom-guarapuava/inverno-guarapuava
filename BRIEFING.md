# BRIEFING — Site Inverno Guarapuava 2026

Site **estático** (HTML/CSS/JS puro, sem framework, sem build), pronto pra **GitHub Pages**.
**Versão atual: v3 "Noite de Geada"** (projeto refeito em jun/2026).

---

## 1. O projeto

Site oficial do festival **Inverno Guarapuava** — temporada de inverno de Guarapuava (PR).
- **Período:** 1º de julho a 21 de setembro de 2026 · 82 dias · +100 eventos.
- **Mote:** "Onde o frio encontra grandes momentos." / "Guarapuava te abraça."
- **Selo:** Guarapuava é a **Capital Nacional da Cevada e do Malte**.
- **Objetivo:** fomentar turismo. Comunicação institucional (Prefeitura) com **tom de festival** — grandioso e acolhedor.
- **Público:** amplo (moradores + turistas).

## 2. Direção visual — v3 "Noite de Geada" (IMPORTANTE)

**Dark cinematográfico:** azul-noite + dourado (luxo) + **serif editorial**. Grão de filme sutil, superfícies "glass", sombras profundas, neve em canvas tom gelo, hero em carrossel de fotos full-bleed.

> Esta é uma **reformulação completa**. A 1ª versão era clara/creme editorial (tipografia rounded) — foi **abandonada**. Ao editar, manter a direção dark + dourado + Fraunces.

**Tipografia:** `Fraunces` (títulos, serif, itálico dourado nos `em`) + `Inter` (corpo, peso 300) — via Google Fonts no `<head>`.

**Paleta (tokens `:root` em `assets/css/style.css` — fonte da verdade):**
- Noite: `--night-0 #04070F` · `--night-1 #070D1D` (base) · `--night-2 #0A1226` · `--night-3 #0E1832`
- Seções: `--ember-deep #1C0B08` (cerveja) · `--plum-deep #160B24` (cultura) · `--pine-deep #07150F` (natureza)
- Gelo/texto: `--ice #EAF2FB` · `--frost #8FC3FF`
- Dourado: `--gold #D9A553` · `--gold-bright #E9BE76` · `--gold-deep #A87830` · `--gold-ink #16100A`
- Acentos: `--ember #E8825A` · `--rose #E3A0BC` · `--lilac #C5A3E8` · `--pine #7FCBA4`

**Marca:** logo "Inverno Guarapuava" = floco (folhas de araucária + miolo de flor de cerejeira) + wordmark próprio. SVGs em `assets/brand/` (lockup branco e navy, snowflake-white, favicons) + **8 ícones temáticos** em `assets/brand/icons/`: `beer, vinho, pinhao, araucaria, cachecol, cerejeira, lobo, sol`.

## 3. Estrutura

```
index.html            Home (hero carrossel + seções editoriais)
cronograma.html       Programação completa (filtros por categoria)
gastronomia.html      ┐
rota-da-cerveja.html  │
rota-do-vinho.html    ├ experiências (subpáginas)
queijarias.html       │
turismo-rural.html    │
cultura.html          ┘ Cultura & Entre Rios
assets/css/style.css  Design system v3 (tokens + componentes)
assets/js/main.js     Header/footer, neve, carrossel hero, reveal, contadores, filtros
assets/brand/         Logos + 8 ícones (SVG) + favicons + neve (PNG)
assets/img/           Fotos (heros, gastronomia, cerveja, vinho, queijarias, cultura, cerejeiras, colinas…)
.nojekyll
COMO-EDITAR.md · FOTOS.md
```

## 4. Como o código funciona (gotchas)

- **Header e footer são injetados via JS** (`assets/js/main.js`). O menu é configurado **num único lugar**: a constante `NAV` no topo do arquivo. Cada página só declara `<body data-page="...">` pra marcar o item ativo (`home, cronograma, gastronomia, cerveja, vinho, queijarias, rural, cultura`). "Experiências" é um dropdown.
- **Sistema de ícones (máscara CSS):** `.ic-mask` com `--m:url(...)` pinta o SVG na cor do texto. ⚠️ URLs dentro de `--m` resolvem **relativas ao CSS** (`assets/css/`), então use sempre `url('../brand/...')`, não `assets/brand/...`.
- **Hero da home:** carrossel de fotos (`.hero-slide`, autoplay 6s, pausa no hover, dots gerados via JS).
- **Todas as páginas ficam na raiz** e usam caminhos relativos `assets/...`, pra funcionar em qualquer subdiretório do GitHub Pages.
- Sem dependências externas além do Google Fonts. Animações respeitam `prefers-reduced-motion`.

## 5. Conteúdo / dados

**Eventos em destaque (confirmados):**
- Abertura Oficial — 1º jul, 17h30, Praça 9 de Dezembro (vinícolas, cervejarias, food trucks, artistas locais).
- Sabores de Inverno — 3 a 5 jul (gastronomia típica).
- Festival da Cerveja de Inverno — 11 e 12 jul (cervejarias artesanais).
- Festival das Cerejeiras — **data a confirmar**.

**Números da cerveja:** +100 estilos · +150 medalhas (BR e exterior) · 9 cervejarias artesanais · 1 em cada 3 cervejas do Brasil saem daqui.

**Temas cobertos:** gastronomia (carnes nobres, pinhão, queijarias premiadas), rota da cerveja, vinhos de altitude (Campos Gerais), turismo rural (araucárias, geada, **Salto São Francisco – 193 m**), cultura & **Entre Rios** (colonização suábia/alemã, tropeiros, imigrações).

**Contatos:** tel. (42) 3142-1486 · Instagram @turismo_guarapuava e @guarapuava_pref · Secretaria Municipal de Turismo e Eventos.

## 6. Pendências / próximos passos

1. ~~Cronograma completo~~ **FEITO** — `cronograma.html` traz a programação completa jun–set (≈38 eventos), por mês, com filtros por categoria; festas julinas agrupadas por data; tags de ingresso. Fonte: PDF oficial.
2. **A confirmar:** "Abertura Oficial 1º jul" não consta na PDF (mas está na home); grafia "Gustavo/Gusttavo Lima" (31/07); nomes da home "Sabores de Inverno"/"Festival da Cerveja" × doc "Festival Gastronômico"/"FECIN".
3. Confirmar o **telefone oficial** do turismo.
4. (Opcional) Links externos extras (PDF da programação, "como chegar"). Hoje a única CTA externa é o Instagram, por decisão do cliente.

---
*Identidade visual Inverno Guarapuava. © 2026 Prefeitura de Guarapuava · Secretaria Municipal de Turismo e Eventos.*
