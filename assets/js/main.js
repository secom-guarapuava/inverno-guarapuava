/* ============================================================
   INVERNO GUARAPUAVA — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Site config (edit nav here in one place) ---------- */
  var IG_TUR = 'https://www.instagram.com/turismo_guarapuava/';
  var IG_PREF = 'https://www.instagram.com/guarapuava_pref/';
  var PHONE = '(42) 3142-1486';

  var NAV = [
    { label: 'Início', href: 'index.html', page: 'home' },
    { label: 'Programação', href: 'cronograma.html', page: 'cronograma' },
    {
      label: 'Experiências', drop: [
        { label: 'Gastronomia', href: 'gastronomia.html', page: 'gastronomia' },
        { label: 'Rota da Cerveja', href: 'rota-da-cerveja.html', page: 'cerveja' },
        { label: 'Rota do Vinho', href: 'rota-do-vinho.html', page: 'vinho' },
        { label: 'Queijarias Premiadas', href: 'queijarias.html', page: 'queijarias' },
        { label: 'Turismo Rural', href: 'turismo-rural.html', page: 'rural' },
        { label: 'Cultura & Entre Rios', href: 'cultura.html', page: 'cultura' }
      ]
    }
  ];

  var ICON = {
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>'
  };

  var body = document.body;
  var current = body.getAttribute('data-page') || 'home';
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- HEADER ---------- */
  function buildHeader() {
    var links = NAV.map(function (it) {
      if (it.drop) {
        var isActive = it.drop.some(function (d) { return d.page === current; });
        var sub = it.drop.map(function (d) {
          return '<a href="' + d.href + '" class="' + (d.page === current ? 'active' : '') + '">' + d.label + '</a>';
        }).join('');
        return '<div class="has-drop">' +
          '<button class="drop-trigger ' + (isActive ? 'active' : '') + '">' + it.label +
          ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="caret"><path d="M6 9l6 6 6-6"/></svg></button>' +
          '<div class="drop-menu">' + sub + '</div></div>';
      }
      return '<a href="' + it.href + '" class="' + (it.page === current ? 'active' : '') + '">' + it.label + '</a>';
    }).join('');

    var html =
      '<header class="nav" id="nav"><div class="container">' +
      '<a class="nav-logo" href="index.html" aria-label="Inverno Guarapuava — início">' +
      '<span class="flk" aria-hidden="true"></span><span class="nm">Inverno<br><b>Guarapuava</b></span></a>' +
      '<nav class="nav-links" aria-label="Principal">' + links + '</nav>' +
      '<a class="btn-ghost-nav nav-cta" href="' + IG_TUR + '" target="_blank" rel="noopener">' + ICON.ig + ' Acompanhe</a>' +
      '<button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div></header>';

    // mobile drawer
    var dlinks = NAV.map(function (it) {
      if (it.drop) {
        return it.drop.map(function (d) {
          return '<a href="' + d.href + '" class="' + (d.page === current ? 'active' : '') + '">' + d.label + '</a>';
        }).join('');
      }
      return '<a href="' + it.href + '" class="' + (it.page === current ? 'active' : '') + '">' + it.label + '</a>';
    }).join('');
    var drawer = '<div class="nav-drawer" id="navDrawer">' + dlinks +
      '<div class="drawer-foot"><a class="btn btn-primary" href="' + IG_TUR + '" target="_blank" rel="noopener">' + ICON.ig + ' @turismo_guarapuava</a></div></div>';

    body.insertAdjacentHTML('afterbegin', html + drawer);
  }

  /* ---------- FOOTER ---------- */
  function buildFooter() {
    var exp = NAV[2].drop.map(function (d) { return '<a href="' + d.href + '">' + d.label + '</a>'; }).join('');
    var html =
      '<footer class="footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-brand"><img class="lockup" src="assets/brand/lockup-white.svg" alt="Inverno Guarapuava">' +
      '<p>O inverno mais especial da história de Guarapuava. 70 dias de gastronomia, cultura, natureza e os sabores da Capital Nacional da Cevada e do Malte.</p>' +
      '<div class="footer-social">' +
      '<a href="' + IG_TUR + '" target="_blank" rel="noopener" aria-label="Instagram do Turismo">' + ICON.ig + '</a>' +
      '<a href="' + IG_PREF + '" target="_blank" rel="noopener" aria-label="Instagram da Prefeitura">' + ICON.ig + '</a>' +
      '</div></div>' +
      '<div class="footer-col"><h4>Navegar</h4><div class="footer-links">' +
      '<a href="index.html">Início</a><a href="cronograma.html">Programação completa</a>' +
      '<a href="index.html#destaques">Eventos em destaque</a><a href="index.html#capital">Capital da Cerveja</a></div></div>' +
      '<div class="footer-col"><h4>Experiências</h4><div class="footer-links">' + exp + '</div></div>' +
      '<div class="footer-col footer-contact"><h4>Contato</h4>' +
      '<p>' + ICON.pin + '<span>Guarapuava — Paraná<br>Centro do estado, nos Campos Gerais</span></p>' +
      '<p>' + ICON.phone + '<span>' + PHONE + '</span></p>' +
      '<p>' + ICON.ig + '<span>@turismo_guarapuava<br>@guarapuava_pref</span></p></div>' +
      '</div>' +
      '<div class="footer-bottom"><span>© 2026 Prefeitura de Guarapuava · Secretaria Municipal de Turismo e Eventos</span>' +
      '<span class="gov"><b>Inverno Guarapuava</b> · Capital Nacional da Cevada e do Malte</span></div>' +
      '</div></footer>';
    body.insertAdjacentHTML('beforeend', html);
  }

  /* ---------- NAV behaviour ---------- */
  function navBehaviour() {
    var nav = document.getElementById('nav');
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 30); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = document.getElementById('navToggle');
    var drawer = document.getElementById('navDrawer');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = drawer.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
        body.style.overflow = open ? 'hidden' : '';
      });
      drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          drawer.classList.remove('open'); toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false'); body.style.overflow = '';
        });
      });
    }
  }

  /* ---------- SNOW (brand snowflake) ---------- */
  function snow() {
    if (prefersReduced) return;
    var canvas = document.getElementById('snow');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W, H, DPR = Math.min(window.devicePixelRatio || 1, 2);
    var flakeImg = new Image(); flakeImg.src = 'assets/brand/snow-ice.png';
    var dotImg = new Image(); dotImg.src = 'assets/brand/snow-ice-dot.png';
    var ready = 0;
    flakeImg.onload = dotImg.onload = function () { ready++; };

    var flakes = [];
    function count() { return Math.round(Math.min(window.innerWidth, 1500) / 14); }
    function resize() {
      W = canvas.width = window.innerWidth * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      build();
    }
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function build() {
      var n = count(); flakes = [];
      for (var i = 0; i < n; i++) {
        var tier = Math.random();
        var detailed = tier > 0.72;            // ~28% are detailed brand flakes
        var size = detailed ? rnd(14, 30) : rnd(4, 12);
        flakes.push({
          x: Math.random() * W, y: Math.random() * H,
          r: size * DPR,
          spd: (detailed ? rnd(.35, .8) : rnd(.5, 1.3)) * DPR,
          drift: rnd(-.4, .4) * DPR,
          sway: rnd(0, Math.PI * 2), swaySpd: rnd(.005, .02),
          rot: rnd(0, Math.PI * 2), rotSpd: rnd(-.01, .01),
          op: detailed ? rnd(.35, .7) : rnd(.45, .9),
          detailed: detailed
        });
      }
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.y += f.spd; f.sway += f.swaySpd; f.x += f.drift + Math.sin(f.sway) * .35 * DPR;
        f.rot += f.rotSpd;
        if (f.y - f.r > H) { f.y = -f.r; f.x = Math.random() * W; }
        if (f.x > W + f.r) f.x = -f.r; if (f.x < -f.r) f.x = W + f.r;
        ctx.globalAlpha = f.op;
        var img = f.detailed ? flakeImg : dotImg;
        if (ready >= 2 && img.complete) {
          ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.rot);
          ctx.drawImage(img, -f.r / 2, -f.r / 2, f.r, f.r); ctx.restore();
        } else {
          ctx.beginPath(); ctx.arc(f.x, f.y, f.r / 2, 0, Math.PI * 2);
          ctx.fillStyle = '#fff'; ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener('resize', debounce(resize, 200));
    requestAnimationFrame(frame);
  }

  /* ---------- HERO carousel ---------- */
  function hero() {
    var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
    if (slides.length < 2) return;
    var dotsWrap = document.querySelector('.hero-dots');
    var idx = 0, timer;
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        b.setAttribute('aria-label', 'Foto ' + (i + 1));
        if (i === 0) b.classList.add('active');
        b.addEventListener('click', function () { go(i); reset(); });
        dotsWrap.appendChild(b);
      });
    }
    var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.children) : [];
    function go(n) {
      slides[idx].classList.remove('active'); if (dots[idx]) dots[idx].classList.remove('active');
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add('active'); if (dots[idx]) dots[idx].classList.add('active');
    }
    function next() { go(idx + 1); }
    function reset() { clearInterval(timer); timer = setInterval(next, 6000); }
    reset();
    var heroEl = document.querySelector('.hero');
    heroEl.addEventListener('mouseenter', function () { clearInterval(timer); });
    heroEl.addEventListener('mouseleave', reset);
  }

  /* ---------- Reveal on scroll + counters ---------- */
  function reveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          en.target.querySelectorAll('[data-count]').forEach(countUp);
          if (en.target.hasAttribute('data-count')) countUp(en.target);
          io.unobserve(en.target);
        }
      });
    }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }
  function countUp(el) {
    if (el.dataset.done) return; el.dataset.done = '1';
    var target = parseFloat(el.dataset.count), pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    var dur = 1500, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(target * e).toLocaleString('pt-BR') + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    if (prefersReduced) { el.textContent = pre + target.toLocaleString('pt-BR') + suf; return; }
    requestAnimationFrame(step);
  }

  /* ---------- Schedule: ver mais + filters ---------- */
  function schedule() {
    var more = document.getElementById('verMais');
    if (more) {
      more.addEventListener('click', function () {
        var list = document.querySelector('.events');
        var ex = list.classList.toggle('expanded');
        more.querySelector('span').textContent = ex ? 'Ver menos' : 'Ver programação completa';
        more.classList.toggle('open', ex);
      });
    }
    var filters = document.querySelectorAll('.filters button');
    if (filters.length) {
      filters.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filters.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var cat = btn.dataset.cat;
          document.querySelectorAll('.events .event').forEach(function (c) {
            var show = cat === 'all' || (c.dataset.cat || '').split(' ').indexOf(cat) > -1;
            c.style.display = show ? '' : 'none';
          });
        });
      });
    }
  }

  /* ---------- utils ---------- */
  function debounce(fn, ms) { var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); }; }

  /* ---------- init ---------- */
  buildHeader();
  buildFooter();
  navBehaviour();
  snow();
  hero();
  reveal();
  schedule();

  // expose icons for inline use if needed
  window.IG = { tur: IG_TUR, pref: IG_PREF };
})();
