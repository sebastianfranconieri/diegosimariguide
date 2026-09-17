/* ==========================================================================
   DIEGO SIMARI — script.js
   Todo el contenido editable de las guiadas vive en el objeto GUIDES de más
   abajo: cambiá título, textos y cantidad/rutas de fotos ahí.
   ========================================================================== */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     1) GUIDE DATA
     `image` es la foto de la tarjeta de esta actividad y también la
     primera foto (grande) del popup. Cambiá esa línea por la foto real
     de cada actividad — hoy todas apuntan a images/summit4.jpg de
     ejemplo, así que ya podés ver cómo queda mientras subís tus fotos.
     Las otras 2 fotos del popup son fijas para las 6 actividades y se
     editan en SHARED_PHOTOS, dentro de openModal() más abajo.
     ------------------------------------------------------------------ */
  var GUIDES = [
    {
      id: 'patagonia',
      code: '1',
      title: 'Patagonia',
      teaser: 'Ice traverses and summits between El Chaltén and Bariloche.',
      tagline: 'Granite, wind, and continental ice.',
      image: 'images/ski4.jpg', // ← cambiá esta línea por la foto de cada actividad
      paragraphs: [
        'One- to three-week programs in El Chaltén and Torres del Paine, combining approach treks, ice technique, and summit pushes built around the weather window.',
        'Small groups, a pace matched to each rope team\u2019s level, and full flexibility around the Patagonian wind.'
      ],
      closing: 'Thinking about a season in the south? We coordinate dates around the weather window.'
    },
    {
      id: 'alps',
      code: '2',
      title: 'Alps',
      teaser: 'Classic high routes in the Mont Blanc massif and beyond.',
      tagline: 'The massif\u2019s classic lines, well guided.',
      image: 'images/iceclimb2.jpg', // ← cambiá esta línea por la foto de cada actividad
      paragraphs: [
        'Classic and semi-classic ascents in the Mont Blanc massif: from first steps on a rope team to multi-day objectives with a high-altitude bivvy.',
        '2- to 7-day programs, with optional technique days beforehand for those starting out in high-mountain climbing.'
      ],
      closing: 'Trips available June through September, depending on mountain conditions.'
    },
    {
      id: 'chamonix',
      code: '3',
      title: 'Chamonix',
      teaser: 'Rock and ice climbing from the world capital of alpinism.',
      tagline: 'Home base, all year round.',
      image: 'images/climb6.jpg', // ← cambiá esta línea por la foto de cada actividad
      paragraphs: [
        'Rock climbing in summer and ice waterfalls in winter, minutes from town. Ideal for sharpening technique in just a few days.',
        'We also build combined programs: a day of rock, a day of ice, a day in the high mountains.'
      ],
      closing: 'One-day outings or multi-day programs, depending on your goal.'
    },
    {
      id: 'paragliding',
      code: '4',
      title: 'Paragliding',
      teaser: 'Tandem flights over the alpine valleys and Patagonian ranges.',
      tagline: 'The mountains, seen from the air.',
      image: 'images/trona.jpg', // ← cambiá esta línea por la foto de cada actividad
      paragraphs: [
        'Tandem flights for anyone who wants to see the massif or the Patagonian range from a different angle — no experience needed.',
        'Also available as the closing move of an alpinism program: walk up, fly down.'
      ],
      closing: 'Subject to the day\u2019s wind and visibility conditions.'
    },
    {
      id: 'climbing',
      code: '5',
      title: 'Climbing',
      teaser: 'Rock, technique, and skill-building programs for every level.',
      tagline: 'From first steps to an independent rope team.',
      image: 'images/climb3.jpg', // ← cambiá esta línea por la foto de cada actividad
      paragraphs: [
        'Rock climbing programs built to progress: rope maneuvers, anchor building, rappelling, and route reading, in areas matched to the group\u2019s level.',
        'For anyone looking to gain independence and move with more confidence in the mountains.'
      ],
      closing: 'One- to five-day programs, in Chamonix or a location to be arranged.'
    },
    {
      id: 'expeditions',
      code: '6',
      title: 'Expeditions',
      teaser: 'Custom projects in remote ranges, from one to several weeks.',
      tagline: 'Custom projects, in any range.',
      image: 'images/mountain1.jpg', // ← cambiá esta línea por la foto de cada actividad
      paragraphs: [
        'For objectives that require specific planning: logistics, permits, acclimatization, and weather windows in remote ranges.',
        'Every expedition is designed from scratch around the objective, the team, and the time available.'
      ],
      closing: 'Get in touch to talk through the project and assess feasibility.'
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

    modalPhotos.innerHTML = '';
    // Las 3 fotos del popup: la misma foto de la tarjeta (grande, arriba)
    // + dos fotos fijas compartidas por todas las actividades.
    // Cambiá SHARED_PHOTOS acá abajo si querés otras fotos de "apoyo".
    var SHARED_PHOTOS = ['images/summit3.jpg', 'images/ski3.jpg'];
    var modalImages = [guide.image].concat(SHARED_PHOTOS);

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
