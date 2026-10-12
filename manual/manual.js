/* Manual de usuario — Ortega y Gasset 1957.
   React section (React 18 UMD + htm, no build step) mounted into #manual-root.
   Content transcribed from the building's user manual pages; edit MANUAL below to update it. */
(function () {
  const { createElement: h, Fragment, useEffect, useRef } = React;
  const html = htm.bind(h);

  // --- Content ---------------------------------------------------------------
  const MANUAL = {
    levels: [
      { id: '10', name: '10º piso', items: ['Piscina y solárium', 'Huerta', 'Baño y área de descanso', 'Sala de tanques y reserva de agua de consumo'] },
      { id: 'dptos', name: 'Departamentos', items: ['Tablero seccional en cada unidad', 'Termotanque eléctrico individual', 'Montante de corrientes débiles en palieres'] },
      { id: 'pb', name: 'Planta baja', items: ['Pasaje de ingreso', 'Portero Hipcam con reconocimiento facial'] },
      { id: 'ss', name: 'Subsuelo', items: ['SUM con coworking y patio con parrilla', 'Gimnasio, laundry y bicicleteros', 'Sala de bombeo: elevación y presurización de agua', 'Sala de medidores, tablero general y de transferencia del grupo electrógeno'] },
    ],
    building: [
      { icon: 'sofa', title: 'Áreas comunes', items: [
        'En el subsuelo: SUM con espacio para coworking, patio con parrilla, gimnasio, laundry y bicicleteros, sala de bombeo y sala de medidores eléctricos.',
        'En planta baja: el pasaje de ingreso.',
        'En el 10º piso: piscina, solárium, huerta, baño, área de descanso y sala de tanques.',
      ] },
      { icon: 'elevator', title: 'Ascensor', items: [
        'Ascensor con carga útil de 450 kg y variador de frecuencia de última generación.',
      ] },
      { icon: 'drop', title: 'Instalación sanitaria', items: [
        'En el subsuelo están los equipos de elevación y presurización de agua.',
        'El agua caliente es individual: cada departamento tiene su termotanque eléctrico.',
        'En el 10º piso están los tanques de reserva de agua de consumo.',
      ] },
      { icon: 'bolt', title: 'Instalación eléctrica', items: [
        'En el subsuelo están la sala de medidores, el tablero general y el tablero de transferencia del grupo electrógeno.',
        'Cada unidad cuenta con un tablero seccional.',
        'Todas las áreas comunes tienen luminarias con equipos automáticos y autónomos de emergencia.',
        'Una montante de corrientes débiles, con acceso desde los palieres, lleva los cables del portero eléctrico, el circuito cerrado de TV y el cable de TV, internet y telefonía.',
        'El grupo electrógeno alimenta los servicios generales y 2 tomas por departamento: una en el living y la de la heladera.',
      ] },
      { icon: 'sparkle', title: 'Amenities', items: [
        'SUM, gimnasio, piscina, solárium, quincho, laundry y bicicleteros.',
        'Su uso se rige por el reglamento interno del edificio.',
      ] },
    ],
    security: {
      intro: 'El edificio cuenta con el sistema de control de accesos Hipcam All in One, integrado con equipos Hikvision. Desde la app Hipcam, cada residente gestiona el ingreso al edificio, las visitas, las cámaras y las alertas de seguridad desde su celular.',
      features: [
        { icon: 'intercom', title: 'Portero eléctrico', text: 'El portero y el circuito cerrado de TV son de Hipcam. Desde la app gestionás el acceso, tus visitas y la comunicación con la administración. Algunas funciones dependen de cómo las configure el administrador.' },
        { icon: 'face', title: 'Ingreso de residentes', text: 'Según el equipo, entrás con reconocimiento facial o con un código personal más reconocimiento facial. También podés abrir la puerta desde la app, deslizando el botón “Desliza para abrir una puerta”.' },
        { icon: 'users', title: 'Visitas', text: 'Creá accesos temporales para tus invitados y definí fechas, días, horarios y cantidad de ingresos permitidos.' },
        { icon: 'alert', title: 'Emergencias', text: 'El botón “Emergencia” de la app envía una alerta médica, de seguridad o de incendio a los vecinos del edificio.' },
        { icon: 'camera', title: 'Cámaras', text: 'En la sección “Cámaras” de la app ves en vivo las cámaras del edificio, siempre que la función esté activa.' },
        { icon: 'lock', title: 'Cerradura del departamento', text: 'Los pasos para configurarla están más abajo, en “Cerradura de tu departamento”.', link: 'manual-cerradura' },
      ],
    },
    steps: [
      { icon: 'download', title: 'Descargá la app', text: 'Buscala como Hipcam en App Store o Google Play.', link: { href: 'https://app.hipcam.com/', label: 'Descargar Hipcam' } },
      { icon: 'mail', title: 'Abrí la invitación', text: 'Vas a recibir un correo de la administración. Tocá “Aceptar invitación” o ingresá con las credenciales del correo.' },
      { icon: 'check', title: 'Confirmá tu correo', text: 'Será tu usuario principal. Podés mantenerlo o cambiarlo por el que prefieras.' },
      { icon: 'key', title: 'Elegí tu contraseña', text: 'Reemplazá la contraseña temporal por una propia de al menos 8 caracteres.' },
      { icon: 'user', title: 'Completá tu perfil', text: 'Nombre, apellido, teléfono y fecha de nacimiento. Estos datos permiten asistirte ante una emergencia.' },
      { icon: 'users', title: 'Sumá a tu familia', text: 'Invitá a otros usuarios a tu unidad ingresando su correo electrónico.' },
    ],
    photoTips: [
      { icon: 'image', label: 'Fondo claro' },
      { icon: 'sun', label: 'Buena luz' },
      { icon: 'noGlasses', label: 'Sin anteojos ni gorros' },
      { icon: 'user', label: 'Nadie detrás tuyo' },
    ],
    lockSteps: ['Presioná 1#.', 'Ingresá 123456#.', 'Seleccioná 1.', 'Seleccioná nuevamente 1.', 'Presioná 1#.', 'Seleccioná 3 (Código).', 'Ingresá un código de 6 dígitos + #, repetilo y presioná nuevamente #.'],
    // Fill these in to show the "Manual completo de Hipcam" and "Video tutorial" buttons.
    help: { hipcamManualUrl: null, videoUrl: null },
  };

  const SECTIONS = [
    { id: 'manual-edificio', label: 'El edificio' },
    { id: 'manual-seguridad', label: 'Seguridad' },
    { id: 'manual-primeros-pasos', label: 'Primeros pasos' },
    { id: 'manual-acceso', label: 'Tu acceso' },
    { id: 'manual-cerradura', label: 'Cerradura' },
  ];

  // --- Icons: one line set, uniform rounded stroke (design system rule) ------
  const ICONS = {
    sofa: 'M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11M3.5 12.5a1.5 1.5 0 0 1 3 0V15h11v-2.5a1.5 1.5 0 0 1 3 0V18h-17zM6 18v1.5M18 18v1.5',
    elevator: 'M6 3.5h12v17H6zM12 3.5v17M8.5 9l1.5-2 1.5 2M12.5 15l1.5 2 1.5-2',
    drop: 'M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5z',
    bolt: 'M13 3 5.5 13.5H12L11 21l7.5-10.5H12z',
    sparkle: 'M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8zM18.5 16l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z',
    intercom: 'M7 3.5h10v17H7zM10 7h4M12 11.5a1.5 1.5 0 1 0 0 .01M9.5 16h5',
    face: 'M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M9 10v1M15 10v1M9.5 15a3.5 3.5 0 0 0 5 0',
    users: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3.5 19.5a5.5 5.5 0 0 1 11 0M16 5.3a3 3 0 0 1 0 5.4M17.5 14.2a5.5 5.5 0 0 1 3 5.3',
    alert: 'M12 4 2.5 20h19zM12 10v4.5M12 17.2v.1',
    camera: 'M3.5 7.5h11v9h-11zM14.5 10.5l6-3v9l-6-3',
    lock: 'M6 10.5h12v9.5H6zM8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.5v2',
    download: 'M12 4v11M7 10.5l5 5 5-5M5 19.5h14',
    mail: 'M3.5 6h17v12h-17zM3.5 6.5l8.5 6.5 8.5-6.5',
    check: 'M5 12.5l4.5 4.5L19 7.5',
    key: 'M8 14.5a4 4 0 1 1 3.4-6.1L20 8.4V11h-2v2h-2v-2h-4.6A4 4 0 0 1 8 14.5zM7.5 10.5v.1',
    user: 'M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5 20a7 7 0 0 1 14 0',
    image: 'M4 5.5h16v13H4zM4 15.5l4.5-4.5 4 4 2.5-2.5 5 5M15.5 9.5v.1',
    sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4',
    noGlasses: 'M3.5 12.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM14.5 12.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM9.5 12h5M4 4l16 16',
    tap: 'M10 13V6.5a1.5 1.5 0 0 1 3 0V12l3.8.9a2 2 0 0 1 1.5 2.3L17.5 20H11l-3.6-4.2a1.5 1.5 0 0 1 2.2-2zM6 5.5l-1.5-1M7.5 3v-.5M4.5 8H4',
    scan: 'M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M7 12h10',
    shield: 'M12 3.5 19 6v5.5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9V6zM9 12l2 2 4-4',
    info: 'M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 11v5M12 8v.1',
    arrow: 'M5 12h14M13.5 6.5 19 12l-5.5 5.5',
  };
  const Icon = ({ name, size = 22 }) => html`
    <svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${ICONS[name]} /></svg>`;
  // Amenity style: white line icon inside a gold circle.
  const Badge = ({ name, size }) => html`<span class="mu-badge"><${Icon} name=${name} size=${size} /></span>`;
  const num = (n) => String(n).padStart(2, '0');

  // --- Sections ---------------------------------------------------------------
  const Section = ({ id, kicker, title, lead, children }) => html`
    <section class="mu-section" id=${id} aria-labelledby=${id + '-t'}>
      <header class="mu-section-head">
        ${kicker && html`<p class="overline mu-kicker">${kicker}</p>`}
        <h3 id=${id + '-t'} tabIndex="-1">${title}</h3>
        <span class="mu-rule" aria-hidden="true"></span>
        ${lead && html`<p class="mu-lead">${lead}</p>`}
      </header>
      ${children}
    </section>`;

  const Levels = () => html`
    <figure class="mu-levels" aria-label="Qué hay en cada nivel del edificio">
      ${MANUAL.levels.map((l) => html`
        <div class=${'mu-level mu-level-' + l.id} key=${l.id}>
          <p class="mu-level-name">${l.name}</p>
          <ul>${l.items.map((i) => html`<li key=${i}>${i}</li>`)}</ul>
        </div>`)}
      <figcaption class="legal">Esquema de niveles a partir del manual de usuario. No es a escala.</figcaption>
    </figure>`;

  const Building = () => html`
    <${Section} id="manual-edificio" kicker="Instalaciones" title="El edificio"
      lead="Qué hay en cada nivel y cómo funcionan las instalaciones comunes.">
      <${Levels} />
      <div class="mu-grid">
        ${MANUAL.building.map((c) => html`
          <article class="mu-card" key=${c.title}>
            <div class="mu-card-head"><${Badge} name=${c.icon} /><h4>${c.title}</h4></div>
            <ul class="mu-list">${c.items.map((i) => html`<li key=${i}>${i}</li>`)}</ul>
          </article>`)}
      </div>
    <//>`;

  const goTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id)?.querySelector('.mu-section-head');
    if (!el) return;
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    el.querySelector('h3')?.focus({ preventScroll: true });
  };

  const Security = () => html`
    <${Section} id="manual-seguridad" kicker="Hipcam All in One · Hikvision" title="Seguridad" lead=${MANUAL.security.intro}>
      <div class="mu-grid mu-grid-3">
        ${MANUAL.security.features.map((f) => html`
          <article class="mu-card" key=${f.title}>
            <div class="mu-card-head"><${Badge} name=${f.icon} /><h4>${f.title}</h4></div>
            <p class="mu-text">${f.text}</p>
            ${f.link && html`<a class="mu-link" href=${'#' + f.link} onClick=${goTo(f.link)}>Ver los pasos <${Icon} name="arrow" size=${16} /></a>`}
          </article>`)}
      </div>
    <//>`;

  const FirstSteps = () => html`
    <${Section} id="manual-primeros-pasos" kicker="App Hipcam" title="Primeros pasos con Hipcam"
      lead="Activá tu cuenta en pocos minutos desde el celular.">
      <ol class="mu-timeline">
        ${MANUAL.steps.map((s, i) => html`
          <li key=${s.title}>
            <span class="mu-num" aria-hidden="true">${num(i + 1)}</span>
            <span class="mu-ring"><${Icon} name=${s.icon} /></span>
            <div>
              <h4>${s.title}</h4><p class="mu-text">${s.text}</p>
              ${s.link && html`<a class="btn btn-primary btn-sm mu-step-link" href=${s.link.href} target="_blank" rel="noopener">
                <${Icon} name="download" size=${18} />${s.link.label}<span class="visually-hidden"> (se abre en otra pestaña)</span></a>`}
            </div>
          </li>`)}
      </ol>
      <aside class="mu-callout">
        <${Badge} name="info" />
        <p><strong>¿No recibiste la invitación?</strong> Comunicate con la administración del edificio para que te la envíe.</p>
      </aside>
    <//>`;

  const Access = () => html`
    <${Section} id="manual-acceso" kicker="App Hipcam" title="Configurá tu acceso"
      lead="Según el equipo instalado y la configuración del edificio, vas a ingresar por reconocimiento facial o con un código personal más reconocimiento facial.">
      <ol class="mu-access">
        <li>
          <span class="mu-num" aria-hidden="true">01</span>
          <div>
            <h4>Código de ingreso</h4>
            <p class="mu-text">Elegí un código de 4 dígitos. Se usa junto con tu reconocimiento facial si el equipo lo requiere.</p>
            <div class="mu-pin" aria-hidden="true">${[1, 2, 3, 4].map((k) => html`<span key=${k}></span>`)}</div>
          </div>
        </li>
        <li>
          <span class="mu-num" aria-hidden="true">02</span>
          <div>
            <h4>Foto para reconocimiento facial</h4>
            <p class="mu-text">Ubicá tu rostro dentro del óvalo: se pone verde cuando está bien posicionado. Revisá la foto antes de confirmar.</p>
            <ul class="mu-tips">
              ${MANUAL.photoTips.map((t) => html`<li key=${t.label}><span class="mu-ring"><${Icon} name=${t.icon} /></span>${t.label}</li>`)}
            </ul>
          </div>
        </li>
        <li>
          <span class="mu-num" aria-hidden="true">03</span>
          <div>
            <h4>Para ingresar al edificio</h4>
            <p class="mu-text">En el frente del portero:</p>
            <div class="mu-flow">
              <div class="mu-flow-step"><span class="mu-ring"><${Icon} name="tap" /></span><p><strong>Presioná “Ingreso de residentes”</strong></p></div>
              <span class="mu-flow-arrow" aria-hidden="true"><${Icon} name="arrow" /></span>
              <div class="mu-flow-step"><span class="mu-ring"><${Icon} name="scan" /></span><p><strong>Mirá a la cámara</strong><br />Si te lo pide, ingresá antes tu código.</p></div>
            </div>
          </div>
        </li>
      </ol>
      <aside class="mu-callout">
        <${Badge} name="shield" />
        <p><strong>Código de emergencia.</strong> Si el administrador lo habilita, podés crear un código que, junto con tu reconocimiento facial, te permite ingresar y enviar una alerta silenciosa a tus vecinos.</p>
      </aside>
    <//>`;

  const Lock = () => html`
    <${Section} id="manual-cerradura" kicker="Tu departamento" title="Cerradura de tu departamento"
      lead="Si necesitás configurar físicamente la cerradura por primera vez, seguí estos pasos en su teclado:">
      <div class="mu-lock">
        <ol class="mu-keys">
          ${MANUAL.lockSteps.map((s, i) => html`<li key=${i}><span class="mu-key" aria-hidden="true">${i + 1}</span><span>${s}</span></li>`)}
        </ol>
        <aside class="mu-card mu-help">
          <div class="mu-card-head"><${Badge} name="info" /><h4>Ayuda</h4></div>
          <p class="mu-text">Ante cualquier duda con la app o los equipos, comunicate con la administración del edificio.</p>
          ${(MANUAL.help.hipcamManualUrl || MANUAL.help.videoUrl) && html`
            <div class="mu-help-actions">
              ${MANUAL.help.hipcamManualUrl && html`<a class="btn btn-primary btn-sm" href=${MANUAL.help.hipcamManualUrl} target="_blank" rel="noopener">Manual completo de Hipcam</a>`}
              ${MANUAL.help.videoUrl && html`<a class="btn btn-secondary btn-sm" href=${MANUAL.help.videoUrl} target="_blank" rel="noopener">Video tutorial</a>`}
            </div>`}
        </aside>
      </div>
    <//>`;

  const Manual = () => html`
    <${Fragment}>
      <nav class="mu-index" aria-label="Contenido del manual">
        ${SECTIONS.map((s) => html`<a key=${s.id} href=${'#' + s.id} onClick=${goTo(s.id)}>${s.label}</a>`)}
      </nav>
      <${Building} />
      <${Security} />
      <${FirstSteps} />
      <${Access} />
      <${Lock} />
    <//>`;

  window.KornManual = {
    mount(el) {
      if (!el || el.dataset.mounted) return;
      el.dataset.mounted = '1';
      ReactDOM.createRoot(el).render(h(Manual));
    },
  };
})();
