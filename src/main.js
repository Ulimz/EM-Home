import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="top-brand">
      <div class="brand-shell">
        <img class="brand-mark" src="/logo-em-home.png" alt="EM Home, gestión de pisos turísticos" />
      </div>
      <nav class="site-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#proceso">Cómo trabajamos</a>
        <a href="#viviendas">Viviendas</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    <main>
      <section class="intro-section" id="inicio">
        <div class="intro-copy">
          <p class="eyebrow">GESTIÓN TURÍSTICA · SEVILLA</p>
          <h1>Tu vivienda,<br><em>bien cuidada.</em></h1>
          <p class="intro-text">Convertimos tu apartamento en una experiencia memorable para tus huéspedes y en una inversión más rentable para ti.</p>
          <a class="primary-cta" href="#contacto">Hablemos de tu vivienda <span aria-hidden="true">↗</span></a>
        </div>
        <div class="intro-visual">
          <img src="/imagen-diseño-web.png?v=2" alt="Salón turístico luminoso con vistas a Sevilla" />
          <div class="intro-note">
            <span class="note-line"></span>
            <p>Nos ocupamos de todo<br><strong>de principio a fin.</strong></p>
          </div>
        </div>
      </section>

      <section class="values-strip" aria-label="La propuesta de EM Home">
        <div class="value-item"><span class="value-mark">01</span><div><strong>A MEDIDA</strong><span>Una estrategia para tu vivienda</span></div></div>
        <div class="value-item"><span class="value-mark">02</span><div><strong>CON CUIDADO</strong><span>Atención en cada detalle</span></div></div>
        <div class="value-item"><span class="value-mark">03</span><div><strong>CON RESULTADOS</strong><span>Más tranquilidad para ti</span></div></div>
      </section>

      <section class="services-section" id="servicios">
        <div class="section-heading">
          <p class="eyebrow">LO QUE HACEMOS</p>
          <h2>Una gestión completa,<br><em>sin complicaciones.</em></h2>
        </div>
        <div class="feature-row">
          <article class="feature-item">
            <span class="service-number">01</span>
            <h3>GESTIÓN INTEGRAL</h3>
            <p>Me encargo de todo, de principio a fin.</p>
          </article>

          <article class="feature-item">
            <span class="service-number">02</span>
            <h3>PUBLICACIÓN EN PLATAFORMAS</h3>
            <p>Más visibilidad y más oportunidades de reserva.</p>
          </article>

          <article class="feature-item">
            <span class="service-number">03</span>
            <h3>ATENCIÓN A HUÉSPEDES</h3>
            <p>Experiencia cuidada y personalizada.</p>
          </article>

          <article class="feature-item">
            <span class="service-number">04</span>
            <h3>LIMPIEZA Y MANTENIMIENTO</h3>
            <p>Coordinación profesional y eficiente.</p>
          </article>

          <article class="feature-item">
            <span class="service-number">05</span>
            <h3>OPTIMIZACIÓN DE PRECIOS Y OCUPACIÓN</h3>
            <p>Para lograr la máxima rentabilidad.</p>
          </article>

          <article class="feature-item">
            <span class="service-number">06</span>
            <h3>HOME STAGING TURÍSTICO</h3>
            <p>Una presentación que enamora y destaca.</p>
          </article>
        </div>

        <div class="results-row">
          <article class="result-item">
            <span class="result-icon">↗</span>
            <div><h3>ESTUDIO DE RENTABILIDAD <em>GRATUITO</em></h3><p>Descubre el potencial de tu vivienda.</p></div>
          </article>
          <article class="result-item">
            <span class="result-icon">♡</span>
            <div><h3>GESTIÓN PERSONALIZADA <em>Y ATENCIÓN CUIDADA</em></h3><p>Enfocados en resultados y tranquilidad.</p></div>
          </article>
        </div>

        <div class="benefits-row" aria-label="Beneficios de la gestión EM Home">
          <div class="benefit-item"><span class="benefit-icon">⌂</span><span>Gestión 100%<br>integral</span></div>
          <div class="benefit-item"><span class="benefit-icon">▣</span><span>Check-in /<br>Check-out</span></div>
          <div class="benefit-item"><span class="benefit-icon">♧</span><span>Limpieza<br>profesional</span></div>
          <div class="benefit-item"><span class="benefit-icon">□</span><span>Calendario y<br>reservas optimizadas</span></div>
          <div class="benefit-item"><span class="benefit-icon">⌁</span><span>Más ingresos,<br>menos preocupaciones</span></div>
        </div>
      </section>

      <section class="process-section" id="proceso">
        <div class="section-heading process-heading">
          <p class="eyebrow">ASÍ EMPEZAMOS</p>
          <h2>De tu vivienda a<br><em>sus primeras reservas.</em></h2>
        </div>
        <div class="process-row">
          <article class="process-item">
            <span class="process-number">01</span>
            <h3>CONOCEMOS TU VIVIENDA</h3>
            <p>Hablamos de tus objetivos, estudiamos el potencial del alojamiento y planteamos una estrategia a medida.</p>
          </article>
          <article class="process-item">
            <span class="process-number">02</span>
            <h3>LA PREPARAMOS PARA DESTACAR</h3>
            <p>Organizamos la presentación, el anuncio, los precios y todo lo necesario para salir al mercado.</p>
          </article>
          <article class="process-item">
            <span class="process-number">03</span>
            <h3>GESTIONAMOS CADA ESTANCIA</h3>
            <p>Reservas, huéspedes, entradas, salidas y proveedores quedan coordinados por nuestro equipo.</p>
          </article>
        </div>
      </section>

      <section class="homes-section" id="viviendas">
        <div class="section-heading homes-heading">
          <p class="eyebrow">ESPACIOS QUE CUIDAMOS</p>
          <h2>Viviendas preparadas<br><em>para ser disfrutadas.</em></h2>
        </div>
        <div class="homes-grid">
          <article class="home-card home-card-featured">
            <img src="/Imagenes%20de%20casas/imagen1.png.jpg" alt="Comedor luminoso de una vivienda turística EM Home" loading="lazy" />
            <div class="home-card-copy"><span>01 · INTERIOR</span><h3>Espacios con alma</h3><p>Una presentación cuidada desde el primer vistazo.</p></div>
          </article>
          <article class="home-card">
            <img src="/Imagenes%20de%20casas/imagen2.png.jpg" alt="Baño cuidado y luminoso de una vivienda turística" loading="lazy" />
            <div class="home-card-copy"><span>02 · DETALLES</span><h3>Cada detalle cuenta</h3><p>Orden, confort y una experiencia coherente.</p></div>
          </article>
          <article class="home-card">
            <img src="/Imagenes%20de%20casas/imagen3.png.jpg" alt="Salón luminoso preparado para huéspedes" loading="lazy" />
            <div class="home-card-copy"><span>03 · EXTERIOR</span><h3>Momentos para recordar</h3><p>También cuidamos los espacios que hacen especial cada estancia.</p></div>
          </article>
        </div>
      </section>
    </main>

    <footer class="contact-strip" id="contacto">
      <div class="contact-intro">
        <p class="eyebrow">EM HOME</p>
        <h2>Hablemos de lo que<br><em>puede llegar a ser.</em></h2>
      </div>
      <div class="contact-details">
        <a href="mailto:contacto.emhomemanagement@gmail.com">contacto.emhomemanagement@gmail.com</a>
        <a href="tel:+34602428443">+34 602 428 443</a>
        <span>www.emgestionturistica.com</span>
        <div class="contact-actions">
          <a class="whatsapp-button" href="https://wa.me/34602428443" target="_blank" rel="noreferrer">Escribir por WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </footer>

    <div class="footer-signature">
      <span>HOGARES</span><span>EXPERIENCIAS</span><span>CONFIANZA</span>
    </div>
  </div>
`;
