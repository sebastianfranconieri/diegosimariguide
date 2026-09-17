/* ==========================================================================
   DIEGO SIMARI — script.js
   Todo el contenido editable de las guiadas vive en el objeto GUIDES de más
   abajo: cambiá título, textos y cantidad/rutas de fotos ahí.
   ========================================================================== */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     1) GUIDE DATA — contenido de las 6 actividades
     ------------------------------------------------------------------
     Para cada actividad:
       image        → foto de la tarjeta en el home Y foto grande del popup
       extraPhotos  → las 2 fotos que van DEBAJO en el popup (usá d1..d8)
       sections     → bloques de info detallada (destinos, contenidos, etc.)
     Cambiá solo estas líneas; el resto del archivo no hace falta tocarlo.
     ------------------------------------------------------------------ */
  var GUIDES = [
    {
      id: 'climbing-alpinism',
      code: '1',
      title: 'Climbing & Alpinism',
      teaser: 'Granite, classic, sport, multipitch, ice and mixed terrain.',
      tagline: 'From your first multipitch to big granite walls.',
      image: 'images/climb3.jpg',
      extraPhotos: ['images/d1.jpg', 'images/d3.jpg'],
      paragraphs: [
        'Sport, traditional and multipitch climbing programs, alongside alpine ascents, mixed terrain, ice and big walls. Every program is built around your experience, your objective and the conditions on the day.',
        'A typical brief sounds like this: "I have 5 days, I climb sport routes, and I want to learn granite and do a multipitch." From there we design a specific itinerary in Bariloche, Chaltén, Cochamó, the Dolomites or wherever fits best.'
      ],
      sections: [
        {
          heading: 'Chaltén & the Fitz Roy massif',
          items: ['Aguja Guillaumet', 'Aguja de la S', 'Aguja Poincenot', 'Cerro Fitz Roy', 'Cerro Eléctrico', 'Cerro Mojón Rojo']
        },
        {
          heading: 'Bariloche & Patagonia Norte',
          items: ['Refugio Frey and the granite spires', 'Cerro López', 'Cerro Ventana', 'Sport, traditional and multipitch sectors']
        },
        {
          heading: 'Granite & big walls',
          items: ['Cochamó, Chile — big walls and multi-day programs', 'Piedra Parada and Cañadón de la Buitrera, Chubut', 'Valle dell\u2019Orco, Italy', 'Piz Badile']
        },
        {
          heading: 'The Alps',
          items: ['Mont Blanc massif — granite classics, ridges and faces', 'Ice climbing, couloirs and technical mixed terrain', 'Dolomites — classic limestone routes and long ridges']
        }
      ],
      closing: 'Tell me what you want to climb, how many days you have and your experience, and I\u2019ll put a program together.'
    },
    {
      id: 'big-mountains',
      code: '2',
      title: 'Big Mountains & Expeditions',
      teaser: 'Summits, ridges, glaciers and multi-day expeditions.',
      tagline: 'Summits, ridges, alpinism, expeditions.',
      image: 'images/mountain1.jpg',
      extraPhotos: ['images/d4.jpg', 'images/d2.jpg'],
      paragraphs: [
        'Summits, ridges, approaches, glaciers and multi-day expeditions, matched to the level of the group and the conditions of the mountain.',
        'Longer projects combine approach treks, climbing, alpinism and life in the mountains, with acclimatization and preparatory ascents built into the plan.'
      ],
      sections: [
        {
          heading: 'Southern Patagonia',
          items: ['Southern Patagonian Ice Field', 'Cerro Gorra Blanca', 'Circo de los Altares', 'Cerro Mariano Moreno', 'Volcán Lautaro', 'Cerro San Lorenzo', 'Cerro Castillo']
        },
        {
          heading: 'Patagonia Norte',
          items: ['Cerro Tronador — main summit and Pico Argentino', 'Cerro Dos Picos, Chubut', 'Cerro Puntiagudo', 'Cerro Pantojo', 'Cerro Bonete']
        },
        {
          heading: 'Peru — Cordillera Blanca',
          items: ['Huascarán — 6,768 m', 'Alpamayo — 5,947 m', 'Chopicalqui — 6,354 m', 'Tocllaraju — 6,032 m', 'Pisco — 5,752 m', 'Vallunaraju — 5,686 m']
        },
        {
          heading: 'The Alps & Switzerland',
          items: ['Matterhorn / Cervino', 'Eiger', 'Weissmies', 'Dent Blanche', 'Monte Rosa massif', 'Mont Blanc ascents and alpinism']
        }
      ],
      closing: 'Get in touch to talk through the project, the timing and the preparation it needs.'
    },
    {
      id: 'traverses',
      code: '3',
      title: 'Traverses & Exploration',
      teaser: 'One-day to multi-day itineraries, from trekking to technical crossings.',
      tagline: 'Multi-day programs, traverses, exploration.',
      image: 'images/climb6.jpg',
      extraPhotos: ['images/touring.jpg', 'images/d6.jpg'],
      paragraphs: [
        'Itineraries of one or several days, from mountain trekking through to technical traverses and full expeditions.',
        'These programs are ideal if you want time in the mountains rather than a single summit: moving through valleys, glaciers and passes, sleeping in huts or camps along the way.'
      ],
      sections: [
        {
          heading: 'Classic traverses',
          items: ['Travesía del Piltriquitrón', 'Travesía del Perito Moreno', 'Multi-day crossings in Bariloche and around']
        },
        {
          heading: 'What a traverse can include',
          items: ['Mountain approaches and glacier travel', 'Technical sections on rock, snow or ice', 'Huts, camps and life in the mountains', 'Route planning around the weather window']
        }
      ],
      closing: 'Programs run from a single day to several weeks, depending on the route and the group.'
    },
    {
      id: 'ski-touring',
      code: '4',
      title: 'Ski Touring',
      teaser: 'Ski mountaineering across volcanoes, glaciers, huts and traverses.',
      tagline: 'Ski touring, traverses, volcanoes, glaciers, huts.',
      image: 'images/ski4.jpg',
      extraPhotos: ['images/d7.jpg', 'images/d5.jpg'],
      paragraphs: [
        'Custom ski touring and ski mountaineering programs, from first steps through to technical projects and multi-day traverses.',
        'Each program is defined by the days you have available, your technical level, your previous experience, the intensity you\u2019re after, the objectives of the group and the state of the snow and the mountain.'
      ],
      sections: [
        {
          heading: 'Destinations',
          items: ['Volcanoes of Chile — ascents and ski descents', 'Bariloche — ski traverses, huts and multi-day routes', 'Ushuaia — ski mountaineering in Tierra del Fuego', 'Chaltén — skiing among granite and glaciers']
        },
        {
          heading: 'Levels',
          items: ['Introduction to ski touring', 'Technical programs and steeper objectives', 'Multi-day traverses and expeditions']
        }
      ],
      closing: 'Winter programs are designed group by group. Tell me your dates and level and we\u2019ll build it.'
    },
    {
      id: 'courses',
      code: '5',
      title: 'Alpinism Courses',
      teaser: 'Training built around autonomy, judgement and decision-making.',
      tagline: 'Courses, technique, autonomy, progression, rescue.',
      image: 'images/iceclimb2.jpg',
      extraPhotos: ['images/iceclimb.jpg', 'images/summit7.jpg'],
      paragraphs: [
        'Training designed to develop autonomy, judgement and the ability to make decisions in mountain terrain — not just to tick off techniques, but to know when and why to use them.',
        'Courses can be organised over different lengths, from single days through to multi-day programs.'
      ],
      sections: [
        {
          heading: 'Movement & technique',
          items: ['Progression on rock, snow and ice', 'Glacier travel', 'Crampons and ice axe', 'Self-arrest', 'Roping up and moving as a team']
        },
        {
          heading: 'Rope work',
          items: ['Building and organising belay stations', 'Rope maneuvers', 'Descents and rappelling', 'Crevasse and glacier rescue techniques']
        },
        {
          heading: 'Judgement & decision-making',
          items: ['Risk management', 'Choosing objectives', 'Reading conditions', 'Decision-making in the mountains', 'Planning an activity', 'Methods for building real autonomy']
        }
      ],
      closing: 'From single days to multi-day courses, shaped around what you want to be able to do on your own.'
    },
    {
      id: 'paragliding',
      code: '6',
      title: 'Paragliding',
      teaser: 'Tandem flights over the alpine valleys and Patagonian ranges.',
      tagline: 'The mountains, seen from the air.',
      image: 'images/paragliding.jpg',
      // extraPhotos: ['images/d2.jpg', 'images/d4.jpg'],
      paragraphs: [
        'Tandem flights for anyone who wants to see the massif or the Patagonian range from a different angle — no experience needed.',
        'Also available as the closing move of a mountain program: walk up, fly down.'
      ],
      sections: [
        {
          heading: 'Good to know',
          items: ['No previous experience required', 'Can be combined with a climbing or ski program', 'Subject to the day\u2019s wind and visibility']
        }
      ],
      closing: 'Flights depend on the day\u2019s wind and visibility conditions.'
    }
  ];

  /* ------------------------------------------------------------------
     2) NAV — fondo sólido al hacer scroll + menú móvil
     ------------------------------------------------------------------ */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var navLinkEls = Array.prototype.slice.call(navLinks.querySelectorAll('.nav__link'));

  // Índice para el escalonado del menú móvil
  navLinkEls.forEach(function (link, i) { link.style.setProperty('--i', i); });

  function closeMenu() {
    if (!navLinks.classList.contains('is-open')) return;
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  function openMenu() {
    // La altura real del menú se mide y se pasa al CSS: así no depende
    // de un max-height fijo que se rompe si se agrega un link.
    var h = 0;
    navLinkEls.forEach(function (l) { h += l.offsetHeight; });
    navLinks.style.setProperty('--menu-h', (h + 8) + 'px');
    navLinks.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
  }

  navToggle.addEventListener('click', function () {
    if (navLinks.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar el menú al tocar fuera o con Escape
  document.addEventListener('click', function (e) {
    if (!navLinks.classList.contains('is-open')) return;
    if (nav.contains(e.target)) return;
    closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });

  /* ------------------------------------------------------------------
     2b) MOTOR DE SCROLL ÚNICO
     Antes había 2 listeners de scroll + un requestAnimationFrame infinito
     corriendo siempre. Ahora hay un solo loop que se despierta con el
     scroll y se duerme cuando no pasa nada: menos trabajo, más fluidez.
     ------------------------------------------------------------------ */
  var progressBar = document.getElementById('scrollProgress');
  var toTopBtn = document.getElementById('toTop');
  var heroMedia = document.getElementById('heroMedia');
  var heroSection = document.querySelector('.hero');
  var ctaBanner = document.querySelector('.cta-banner');
  var ctaImg = document.querySelector('.cta-banner__img');

  var lastY = window.scrollY;
  var ctaCurrentY = 0;
  var ticking = false;
  var idleFrames = 0;

  function updateOnScroll() {
    var y = window.scrollY;
    var docH = document.documentElement.scrollHeight - window.innerHeight;

    // Nav compacta
    nav.classList.toggle('is-scrolled', y > 24);

    // Nav que se esconde al bajar y vuelve al subir (solo con el menú cerrado)
    if (!navLinks.classList.contains('is-open')) {
      var goingDown = y > lastY;
      nav.classList.toggle('is-hidden', goingDown && y > 420);
    }

    // Progreso de lectura
    if (progressBar) {
      progressBar.style.setProperty('--progress', docH > 0 ? (y / docH).toFixed(4) : 0);
    }

    // Volver arriba
    if (toTopBtn) toTopBtn.classList.toggle('is-visible', y > window.innerHeight * 0.9);

    // Parallax del hero
    if (!prefersReducedMotion && heroSection && heroMedia) {
      var hRect = heroSection.getBoundingClientRect();
      if (hRect.bottom > 0) {
        heroMedia.style.transform = 'translate3d(0,' + (y * 0.28).toFixed(2) + 'px,0)';
      }
    }

    lastY = y;
  }

  // Parallax del banner CTA: interpolado suave, pero solo mientras está en pantalla
  function updateCtaParallax() {
    if (prefersReducedMotion || !ctaBanner || !ctaImg) return false;
    var rect = ctaBanner.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return false;
    var targetY = (rect.top - window.innerHeight / 2) * 0.12;
    ctaCurrentY += (targetY - ctaCurrentY) * 0.1;
    ctaImg.style.transform = 'translate3d(0,' + ctaCurrentY.toFixed(2) + 'px,0)';
    return Math.abs(targetY - ctaCurrentY) > 0.2;
  }

  function frame() {
    updateOnScroll();
    var stillMoving = updateCtaParallax();
    // Seguimos animando unos frames más para que la interpolación termine suave
    if (stillMoving) idleFrames = 0;
    else idleFrames++;

    if (idleFrames < 6) {
      requestAnimationFrame(frame);
    } else {
      ticking = false;
    }
  }

  function requestTick() {
    idleFrames = 0;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(frame);
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  requestTick();

  /* ------------------------------------------------------------------
     2c) SCROLL SUAVE CON COMPENSACIÓN DE LA NAV + SECCIÓN ACTIVA
     ------------------------------------------------------------------ */
  function navHeight() {
    return nav.getBoundingClientRect().height;
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      // Si el link vive dentro de un overlay (ej. "Book now" del popup),
      // hay que cerrarlo y liberar el scroll ANTES de mover la página.
      var insideOverlay = !!link.closest('.modal, .lightbox');
      var delay = insideOverlay ? 260 : 0;
      if (insideOverlay) {
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeLightbox === 'function' && lightboxOpen()) closeLightbox();
      }

      setTimeout(function () {
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight() - 8;
        window.scrollTo({
          top: top,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }, delay);

      // La URL queda limpia y compartible, sin salto brusco
      if (history.replaceState) history.replaceState(null, '', id);
    });
  });

  // Marca en la nav la sección que se está mirando
  var spySections = ['#guides', '#about', '#videos', '#contact']
    .map(function (sel) { return document.querySelector(sel); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && spySections.length) {
    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      var bestId = null;
      var bestRatio = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) { bestRatio = visible[id]; bestId = id; }
      });
      navLinkEls.forEach(function (link) {
        var isActive = bestId !== null && link.getAttribute('href') === '#' + bestId;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { threshold: [0.15, 0.35, 0.6], rootMargin: '-20% 0px -45% 0px' });

    spySections.forEach(function (section) { spy.observe(section); });
  }

  /* ------------------------------------------------------------------
     3) PARALLAX
     Tanto el del hero como el del banner CTA viven ahora dentro del
     motor de scroll único (sección 2b). Este bloque quedó vacío a
     propósito para no duplicar listeners.
     ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
     4) GENERAR TARJETAS DE GUIADAS
     ------------------------------------------------------------------ */
  var guideGrid = document.getElementById('guideGrid');

  function renderGuideCard(guide) {
    var card = document.createElement('button');
    card.className = 'guide-card';
    card.type = 'button';
    card.setAttribute('data-guide-id', guide.id);
    card.setAttribute('aria-haspopup', 'dialog');
    card.innerHTML =
      '<div class="guide-card__media"><img class="guide-card__img" src="' + guide.image + '" alt="' + guide.title + '" loading="lazy"></div>' +
      '<div class="guide-card__scrim"></div>' +
      '<div class="guide-card__body">' +
        '<p class="guide-card__code">' + guide.code + '</p>' +
        '<h3 class="guide-card__title">' + guide.title + '</h3>' +
        '<p class="guide-card__teaser">' + guide.teaser + '</p>' +
      '</div>';
    return card;
  }

  GUIDES.forEach(function (guide) {
    guideGrid.appendChild(renderGuideCard(guide));
  });

  /* ------------------------------------------------------------------
     5) MODAL DE GUIADA
     ------------------------------------------------------------------ */
  var modal = document.getElementById('guideModal');
  var modalPanel = modal.querySelector('.modal__panel');
  var modalPhotos = document.getElementById('modalPhotos');
  var modalCode = document.getElementById('modalCode');
  var modalTitle = document.getElementById('modalTitle');
  var modalTagline = document.getElementById('modalTagline');
  var modalParagraphs = document.getElementById('modalParagraphs');
  var modalFooterText = document.getElementById('modalFooterText');
  var lastFocusedEl = null;

  function openModal(guide) {
    modalCode.textContent = guide.code;
    modalTitle.textContent = guide.title;
    modalTagline.textContent = guide.tagline;
    modalFooterText.textContent = guide.closing;

    modalParagraphs.innerHTML = '';
    guide.paragraphs.forEach(function (text) {
      var p = document.createElement('p');
      p.textContent = text;
      modalParagraphs.appendChild(p);
    });

    // Bloques de info detallada (destinos, contenidos del curso, etc.)
    (guide.sections || []).forEach(function (section, si) {
      var wrap = document.createElement('div');
      wrap.className = 'modal__section';
      wrap.style.setProperty('--i', si);

      var h = document.createElement('h4');
      h.className = 'modal__section-title';
      h.textContent = section.heading;
      wrap.appendChild(h);

      var ul = document.createElement('ul');
      ul.className = 'modal__list';
      section.items.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      wrap.appendChild(ul);

      modalParagraphs.appendChild(wrap);
    });

    modalPhotos.innerHTML = '';
    // Fotos del popup: la foto de la tarjeta (grande, arriba)
    // + las 2 de extraPhotos (abajo), definidas por actividad en GUIDES.
    var modalImages = [guide.image].concat(guide.extraPhotos || []);

    modalImages.forEach(function (src, i) {
      var img = document.createElement('img');
      img.className = 'modal__photo';
      img.src = src;
      img.alt = guide.title + ' ' + (i + 1);
      img.loading = 'lazy';
      img.decoding = 'async';
      img.style.setProperty('--i', i);
      modalPhotos.appendChild(img);
    });

    // El popup siempre arranca arriba, aunque el anterior se haya scrolleado
    modalPanel.scrollTop = 0;

    lastFocusedEl = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    lockScroll(true);
    // Esperamos a que arranque la transición antes de mover el foco
    requestAnimationFrame(function () {
      modal.querySelector('.modal__close').focus();
    });
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    lockScroll(false);
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus({ preventScroll: true });
    }
  }

  guideGrid.addEventListener('click', function (e) {
    var card = e.target.closest('.guide-card');
    if (!card) return;
    var guide = GUIDES.find(function (g) { return g.id === card.getAttribute('data-guide-id'); });
    if (guide) openModal(guide);
  });

  modal.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-close')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  // trampa de foco simple dentro del modal
  modalPanel.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var focusable = modalPanel.querySelectorAll('a[href], button:not([disabled])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* ------------------------------------------------------------------
     6) GALERÍA — 12 placeholders (4 columnas x 3 filas)
     ------------------------------------------------------------------ */
  // var galleryGrid = document.getElementById('galleryGrid');
  // for (var g = 1; g <= 12; g++) {
  //   var cell = document.createElement('div');
  //   cell.className = 'ph ph--gallery';
  //   cell.setAttribute('data-ph-label', 'Photo ' + g + ' — images/gallery-' + g + '.jpg');
  //   galleryGrid.appendChild(cell);
  // }

  /* ------------------------------------------------------------------
     7) REVEAL AL HACER SCROLL (solo títulos de sección)
     ------------------------------------------------------------------ */
  document.querySelectorAll('.section-head__title, .about__title').forEach(function (el) {
    el.classList.add('reveal');
  });

  /* Grupos que entran escalonados. El índice --i lo lee el CSS para el delay.
     Se aplica por grupo, no elemento por elemento, para que el ritmo se lea. */
  function stagger(selector, itemSelector, cls) {
    document.querySelectorAll(selector).forEach(function (group) {
      var items = itemSelector ? group.querySelectorAll(itemSelector) : [group];
      Array.prototype.forEach.call(items, function (el, i) {
        el.classList.add(cls);
        el.style.setProperty('--i', i % 6); // el delay se reinicia cada 6: nunca se hace lento
      });
    });
  }

  stagger('#guideGrid', '.guide-card', 'reveal-up');
  stagger('#galleryGrid', 'img', 'reveal-fade');
  stagger('.videos-grid', '.video-card', 'reveal-up');
  stagger('.about__content', '.about__eyebrow, .about__text, .about__creds', 'reveal-up');
  stagger('.cta-banner__content', '.cta-banner__title, .btn', 'reveal-up');
  stagger('.section-head', '.section-head__eyebrow, .section-head__lede', 'reveal-up');
  stagger('.footer__top', '.footer__brand, .footer__col', 'reveal-up');

  var revealSelector = '.reveal, .reveal-up, .reveal-fade';

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      // Empieza un poco antes de que el elemento llegue al borde: se siente natural
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll(revealSelector).forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll(revealSelector).forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ------------------------------------------------------------------
     8) AÑO EN EL FOOTER
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------
     9) BLOQUEO DE SCROLL SIN SALTO
     Al abrir un overlay, ocultar el scroll del body corre la página
     hacia la derecha. Compensamos con el ancho real de la barra.
     ------------------------------------------------------------------ */
  function lockScroll(lock) {
    if (lock) {
      var sbw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.setProperty('--sbw', sbw + 'px');
      document.body.classList.add('is-locked');
    } else if (!modal.classList.contains('is-open') && !lightboxOpen()) {
      document.body.classList.remove('is-locked');
      document.body.style.removeProperty('--sbw');
    }
  }

  /* ------------------------------------------------------------------
     10) LIGHTBOX DE GALERÍA
     Las fotos son el argumento de venta: que se puedan ver grandes.
     Teclado: ← → para navegar, Esc para cerrar.
     ------------------------------------------------------------------ */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCounter = document.getElementById('lightboxCounter');
  var galleryImgs = Array.prototype.slice.call(
    document.querySelectorAll('#galleryGrid img')
  );
  var lbIndex = 0;
  var lbLastFocus = null;

  function lightboxOpen() {
    return lightbox && lightbox.classList.contains('is-open');
  }

  function showLightbox(i) {
    if (!galleryImgs.length) return;
    lbIndex = (i + galleryImgs.length) % galleryImgs.length;
    var source = galleryImgs[lbIndex];
    lightboxImg.style.opacity = '0';
    var next = new Image();
    next.onload = function () {
      lightboxImg.src = source.src;
      lightboxImg.alt = source.alt || '';
      lightboxImg.style.opacity = '1';
    };
    next.src = source.src;
    if (lightboxCounter) {
      lightboxCounter.textContent = (lbIndex + 1) + ' / ' + galleryImgs.length;
    }
  }

  function openLightbox(i) {
    lbLastFocus = document.activeElement;
    showLightbox(i);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    lockScroll(true);
    lightbox.querySelector('.lightbox__btn--close').focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lockScroll(false);
    if (lbLastFocus && typeof lbLastFocus.focus === 'function') {
      lbLastFocus.focus({ preventScroll: true });
    }
  }

  if (lightbox && galleryImgs.length) {
    galleryImgs.forEach(function (img, i) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.addEventListener('click', function () { openLightbox(i); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(i);
        }
      });
    });

    lightbox.addEventListener('click', function (e) {
      var action = e.target.closest('[data-lb]');
      if (action) {
        var kind = action.getAttribute('data-lb');
        if (kind === 'close') closeLightbox();
        if (kind === 'prev') showLightbox(lbIndex - 1);
        if (kind === 'next') showLightbox(lbIndex + 1);
        return;
      }
      // Click en el fondo cierra
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightboxOpen()) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
      if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
    });

    // Swipe en mobile
    var touchX = null;
    lightbox.addEventListener('touchstart', function (e) {
      touchX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) showLightbox(lbIndex + (dx < 0 ? 1 : -1));
      touchX = null;
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
     11) VOLVER ARRIBA
     ------------------------------------------------------------------ */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

})();


// Control de carga fluida para el video hero (evita glitch)
  document.addEventListener('DOMContentLoaded', function () {
    var heroVideo = document.querySelector('.hero__video');
    if (heroVideo) {
      if (heroVideo.readyState >= 3) {
        heroVideo.classList.add('is-loaded');
      } else {
        heroVideo.addEventListener('loadeddata', function () {
          heroVideo.classList.add('is-loaded');
        });
        heroVideo.addEventListener('canplay', function () {
          heroVideo.classList.add('is-loaded');
        });
      }
    }
  });