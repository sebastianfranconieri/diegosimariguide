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

  function onScrollNav() {
    if (window.scrollY > 24) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ------------------------------------------------------------------
     3) HERO PARALLAX
     Mueve la imagen de fondo a menor velocidad que el scroll.
     ------------------------------------------------------------------ */
  var heroMedia = document.getElementById('heroMedia');
  var heroSection = document.querySelector('.hero');

  function onScrollParallax() {
    if (prefersReducedMotion || !heroSection) return;
    var rect = heroSection.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    var offset = window.scrollY * 0.32;
    heroMedia.style.transform = 'translateY(' + offset + 'px)';
  }
  window.addEventListener('scroll', onScrollParallax, { passive: true });
  onScrollParallax();

  // Parallax Cinematic & Smooth
const ctaBanner = document.querySelector('.cta-banner');
const ctaImg = document.querySelector('.cta-banner__img');

if (ctaBanner && ctaImg) {
  let currentY = 0;
  let targetY = 0;
  const speed = 0.12; // Un valor más bajo genera un desplazamiento más sutil y elegante

  function updateParallax() {
    const rect = ctaBanner.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Posición objetivo sutil basada en el centro de la pantalla
      targetY = (rect.top - windowHeight / 2) * speed;
      
      // Interpolación suave (smooth scroll interpolation)
      currentY += (targetY - currentY) * 0.1;
      ctaImg.style.transform = `translate3d(0, ${currentY.toFixed(2)}px, 0)`;
    }

    requestAnimationFrame(updateParallax);
  }

  // Iniciar loop de renderizado cinemático
  requestAnimationFrame(updateParallax);
}

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
    (guide.sections || []).forEach(function (section) {
      var wrap = document.createElement('div');
      wrap.className = 'modal__section';

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
      modalPhotos.appendChild(img);
    });

    lastFocusedEl = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
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
      { threshold: 0.4 }
    );
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ------------------------------------------------------------------
     8) AÑO EN EL FOOTER
     ------------------------------------------------------------------ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
