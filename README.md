# Sitio — Diego Simari, Guía de Alta Montaña

Proyecto estático (HTML/CSS/JS puro, sin build). Abrí `index.html` en el navegador o
trabajalo en VS Code con la extensión **Live Server** para ver los cambios en vivo.

## Estructura

```
index.html
css/styles.css
js/script.js
images/     ← poné acá tus fotos
videos/     ← poné acá tu video del banner CTA
```

## Cómo reemplazar los placeholders

Todo lo que falta reemplazar tiene un recuadro punteado con una etiqueta que dice
dónde va cada archivo (ej: "Foto hero — reemplazar en images/hero.jpg").

### 1. Fotos (hero, retrato, tarjetas de guiadas, popups, galería)
Cada placeholder es un `<div class="ph ...">`. Reemplazalo por una imagen, por ejemplo:

```html
<!-- antes -->
<div class="ph ph--hero" data-ph-label="Foto hero — reemplazar en images/hero.jpg"></div>

<!-- después -->
<img src="images/hero.jpg" alt="Diego Simari escalando en Chamonix" class="ph--hero-img">
```

Recomendado: fotos horizontales de al menos 2000px de ancho para el hero y las de
la sección "Sobre mí"; fotos cuadradas para la galería (12 en total) y las tarjetas
de guiadas.

### 2. Fotos por guiada (Patagonia, Alpes, Chamonix, Parapente, Escalada, Expediciones)
Los textos y la cantidad de fotos de cada popup se editan en un solo lugar:
`js/script.js`, objeto `GUIDES` al principio del archivo. Cada guiada tiene:
- `title`, `teaser` (texto de la tarjeta)
- `tagline`, `paragraphs` (texto del popup)
- `photos` (cantidad de fotos placeholder que se generan)
- `closing` (texto de cierre antes del botón "Book now")

### 3. Video del banner CTA ("Book your next adventure")
En `index.html`, buscá:

```html
<video class="cta-banner__video" autoplay muted loop playsinline poster="images/cta-poster.jpg">
  <!-- <source src="videos/cta-banner.mp4" type="video/mp4"> -->
</video>
```

Poné tu archivo en `videos/cta-banner.mp4`, descomentá la línea `<source>` y borrá
el `<div class="ph ph--cta">` que está debajo (es el placeholder de respaldo).
Agregá también una imagen de portada en `images/cta-poster.jpg` (se ve mientras
carga el video o si el navegador no puede reproducirlo).

### 4. Logos del footer (tu logo, IFMGA, UIAGM)
Reemplazá los tres `<div class="ph ph--logo">` del footer por tus imágenes reales
(usá los logos oficiales de IFMGA/UIAGM, no los recreamos acá por una cuestión de
uso correcto de marca):

```html
<img src="images/logo-ifmga.png" alt="IFMGA" class="footer__logo-img">
```

### 5. Datos de contacto
Buscá y reemplazá en `index.html`:
- `contact@diegosimari.com`
- `+33 0 00 00 00 00`
- el link de Instagram

## Colores y tipografía (por si querés ajustarlos)

Todo el sistema de diseño vive en las variables al principio de `css/styles.css`
(bloque `:root`): colores, tipografías (Fraunces + Inter, vía Google Fonts) y el
alto de la barra de navegación.

## Notas técnicas

- 100% responsive (se probó mentalmente en breakpoints de 560px, 900px y 1200px;
  revisalo en el inspector del navegador en distintos anchos).
- Respeta `prefers-reduced-motion` (desactiva el parallax y las animaciones).
- El menú, el modal de guiadas y el scroll con offset por la nav fija funcionan
  sin ninguna librería externa.
