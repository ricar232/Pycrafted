export function detectLang() {
  if (typeof navigator === 'undefined') return 'es';
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'es'];
  for (const candidate of candidates) {
    const code = candidate.toLowerCase();
    if (code.startsWith('en')) return 'en';
    if (code.startsWith('es')) return 'es';
  }
  return 'es';
}

export const serviceIcons = ['monitor', 'bag', 'pen', 'rocket', 'shield'];

export const projectAssets = [
  { id: 'rmtsolution', image: '/assets/project-rmtsolution.jpg' },
  { id: 'gravity', image: '/assets/project-gravity.jpg' },
  { id: 'luxe', image: '/assets/project-luxe.jpg' },
  { id: 'archinova', image: '/assets/project-archinova.jpg' },
  { id: 'nextmove', image: '/assets/project-nextmove.jpg' },
];

export const navTargets = ['inicio', 'servicios', 'proyectos', 'precios', 'sobre-mi', 'proceso', 'contacto'];

export const contact = {
  whatsappNumber: '13528143988',
  whatsappLink: 'https://wa.me/13528143988',
  email: 'motatorresrichard@gmail.com',
  mailLink: 'mailto:motatorresrichard@gmail.com',
};

export const translations = {
  es: {
    code: 'es',
    meta: {
      title: 'Pycrafted — Desarrollo Web Premium',
      description: 'Pycrafted crea páginas web premium, rápidas y diseñadas para hacer que las marcas destaquen.',
    },
    nav: ['Inicio', 'Servicios', 'Proyectos', 'Precios', 'Sobre mí', 'Proceso', 'Contacto'],
    navAria: 'Navegación principal',
    socialAria: 'Redes sociales',
    talk: 'Hablemos',
    menuAria: { open: 'Abrir menú', close: 'Cerrar menú' },
    logoAria: 'Pycrafted inicio',
    hero: {
      eyebrow: 'Desarrollo web & soluciones digitales',
      titleLine1: 'Código que crea',
      titleEm: 'experiencias',
      titleLine2: 'inolvidables.',
      description: 'Diseño y desarrollo de sitios web modernos, rápidos y escalables que impulsan tu marca al siguiente nivel.',
      ctaProjects: 'Ver proyectos',
      ctaServices: 'Mis servicios',
      clientsLine1: 'Clientes satisfechos',
      clientsLine2: 'en todo el mundo',
      sculptureAria: 'Escultura tridimensional del símbolo Pycrafted',
      social: { play: 'Ver presentación', whatsapp: 'WhatsApp', mail: 'Correo' },
    },
    services: {
      items: [
        {
          title: 'Desarrollo Web',
          description: 'Sitios rápidos, modernos y totalmente adaptables.',
          details: 'Sitios construidos desde cero con código limpio, pensados para cargar rápido y convertir visitantes en clientes.',
          features: ['Diseño 100% responsive', 'Código optimizado y liviano', 'Integración con formularios y herramientas', 'Carga ultrarrápida'],
        },
        {
          title: 'Tiendas Online',
          description: 'E-commerce seguros y optimizados para vender más.',
          details: 'Tiendas en línea fáciles de administrar, con pagos seguros y listas para vender desde el primer día.',
          features: ['Pasarelas de pago seguras', 'Catálogo de productos ilimitado', 'Panel de administración simple', 'Optimizadas para conversión'],
        },
        {
          title: 'Diseño UI/UX',
          description: 'Interfaces intuitivas que conectan con tus usuarios.',
          details: 'Interfaces diseñadas alrededor de tus usuarios reales: intuitivas, atractivas y fáciles de navegar.',
          features: ['Investigación y wireframes', 'Prototipos interactivos', 'Sistema de diseño consistente', 'Pruebas de usabilidad'],
        },
        {
          title: 'Optimización',
          description: 'Mejor rendimiento, SEO y velocidad garantizada.',
          details: 'Reviso y mejoro el rendimiento de tu sitio para que cargue más rápido y se posicione mejor en buscadores.',
          features: ['Auditoría de velocidad y SEO', 'Optimización de imágenes y código', 'Buenas prácticas de Core Web Vitals', 'Reporte de resultados'],
        },
        {
          title: 'Mantenimiento',
          description: 'Soporte continuo y actualizaciones para tu tranquilidad.',
          details: 'Me encargo de que tu sitio siga actualizado, seguro y funcionando sin sorpresas, todo el tiempo.',
          features: ['Actualizaciones periódicas', 'Monitoreo y backups', 'Corrección de errores', 'Soporte prioritario por WhatsApp/correo'],
        },
      ],
      detailsAria: (title) => `Ver más sobre ${title}`,
      cta: 'Solicitar este servicio',
    },
    projects: {
      label: 'Proyectos destacados',
      headingLine1: 'Soluciones que',
      headingLine2: 'hablan por sí solas.',
      viewAll: 'Ver todos los proyectos',
      items: [
        { title: 'RMT Solution', category: 'Sitio Web' },
        { title: 'Gravity Studio', category: 'Sitio Web' },
        { title: 'Luxe Timepieces', category: 'E-commerce' },
        { title: 'ArchiNova', category: 'Sitio Web' },
        { title: 'NextMove', category: 'Plataforma Web' },
      ],
      previewAlt: (title) => `Vista previa de ${title}`,
      openAria: (title) => `Abrir ${title}`,
      prevAria: 'Proyecto anterior',
      nextAria: 'Proyecto siguiente',
      dotsAria: 'Seleccionar proyecto',
      showAria: (title) => `Mostrar ${title}`,
    },
    process: {
      label: 'Mi proceso',
      headingLine1: 'Así convierto ideas',
      headingLine2: 'en productos digitales',
      headingEm: 'excepcionales.',
      items: [
        { title: 'Descubrimiento', text: 'Entiendo tu marca, tus objetivos y tu audiencia.' },
        { title: 'Diseño', text: 'Creo interfaces modernas enfocadas en la experiencia.' },
        { title: 'Desarrollo', text: 'Código limpio, escalable y con las mejores prácticas.' },
        { title: 'Lanzamiento', text: 'Pruebas, optimización y publicación exitosa.' },
      ],
    },
    pricing: {
      label: 'Planes y precios',
      headingLine1: 'Inversión clara,',
      headingLine2: 'sin sorpresas.',
      intro: 'Cada proyecto es distinto — estos son puntos de partida. La cotización final se ajusta al alcance real de tu sitio.',
      highlights: [
        {
          icon: 'pen',
          title: 'Diseño 100% a tu gusto',
          text: 'Cada sitio se diseña desde cero para tu marca — nada de plantillas repetidas.',
        },
        {
          icon: 'shield',
          title: 'Hosting en servidor privado',
          text: 'Tu página vive en mi propio servidor, con backups, actualizaciones y mantenimiento incluidos.',
        },
      ],
      from: 'Desde',
      unit: 'proyecto único',
      featuredBadge: 'Más elegido',
      cta: 'Solicitar este plan',
      note: '¿No estás seguro qué plan necesitas? Escríbeme y te ayudo a definirlo sin costo.',
      tiers: [
        {
          name: 'Esencial',
          price: '800',
          tagline: 'Presencia digital simple y efectiva.',
          features: [
            'Landing page o pocas secciones',
            'Diseño 100% responsive',
            'Formulario de contacto funcional',
            'SEO básico y carga rápida',
          ],
        },
        {
          name: 'Profesional',
          price: '1,300',
          tagline: 'Para marcas que quieren destacar con estilo.',
          features: [
            'Múltiples páginas y secciones a medida',
            'Animaciones y efectos de movimiento',
            'Diseño 100% personalizado',
            'SEO avanzado + integración con WhatsApp/redes',
          ],
        },
        {
          name: 'A Medida',
          price: '1,800',
          tagline: 'Plataformas con lógica y datos propios.',
          features: [
            'Todo lo del plan Profesional',
            'Sistema de login y áreas privadas',
            'Base de datos y panel de administración',
            'Funcionalidades a medida (e-commerce, dashboards...)',
          ],
        },
      ],
    },
    cta: {
      label: '¿Tienes un proyecto en mente?',
      heading: 'Hagamos algo extraordinario juntos.',
      text: 'Estoy disponible para nuevos proyectos y colaboraciones.',
      button: 'Hablemos de tu proyecto',
    },
    footer: {
      tagline: 'Desarrollo web premium para marcas que buscan destacar y dejar huella.',
      links: 'Enlaces',
      contact: 'Contacto',
      servicesTitle: 'Servicios',
      followMe: 'Contacto directo',
      rights: (year) => `© ${year} Pycrafted. Todos los derechos reservados.`,
    },
    modal: {
      label: 'Nuevo proyecto',
      heading: 'Cuéntame qué quieres construir.',
      description: 'Completa la información y prepararé una propuesta inicial para tu proyecto.',
      closeAria: 'Cerrar',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo',
      emailPlaceholder: 'correo@empresa.com',
      typeLabel: 'Tipo de proyecto',
      typeOptions: ['Página web premium', 'Tienda online', 'Aplicación web', 'Rediseño UI/UX', 'Optimización'],
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Háblame de tu negocio, objetivos y fecha ideal...',
      planPrefill: (plan, price) => `Me interesa el plan "${plan}" (desde $${price}). Cuéntame más sobre mi proyecto:\n`,
      servicePrefill: (service) => `Me interesa el servicio "${service}". Cuéntame más sobre mi proyecto:\n`,
      submit: 'Enviar solicitud',
      successTitle: 'Mensaje preparado',
      successText: 'El formulario ya funciona visualmente. Conecta Formspree, Resend o tu backend para recibirlo por correo.',
      successClose: 'Cerrar',
    },
  },

  en: {
    code: 'en',
    meta: {
      title: 'Pycrafted — Premium Web Development',
      description: 'Pycrafted builds premium, fast websites designed to make brands stand out.',
    },
    nav: ['Home', 'Services', 'Projects', 'Pricing', 'About', 'Process', 'Contact'],
    navAria: 'Main navigation',
    socialAria: 'Social media',
    talk: "Let's talk",
    menuAria: { open: 'Open menu', close: 'Close menu' },
    logoAria: 'Pycrafted home',
    hero: {
      eyebrow: 'Web development & digital solutions',
      titleLine1: 'Code that builds',
      titleEm: 'unforgettable',
      titleLine2: 'experiences.',
      description: 'Design and development of modern, fast, and scalable websites that take your brand to the next level.',
      ctaProjects: 'View projects',
      ctaServices: 'My services',
      clientsLine1: 'Happy clients',
      clientsLine2: 'around the world',
      sculptureAria: 'Three-dimensional sculpture of the Pycrafted symbol',
      social: { play: 'Watch showreel', whatsapp: 'WhatsApp', mail: 'Email' },
    },
    services: {
      items: [
        {
          title: 'Web Development',
          description: 'Fast, modern, and fully responsive websites.',
          details: 'Sites built from scratch with clean code, made to load fast and turn visitors into customers.',
          features: ['Fully responsive design', 'Optimized, lightweight code', 'Forms and tool integrations', 'Ultra-fast loading'],
        },
        {
          title: 'Online Stores',
          description: 'Secure e-commerce optimized to sell more.',
          details: 'Online stores that are easy to manage, with secure payments and ready to sell from day one.',
          features: ['Secure payment gateways', 'Unlimited product catalog', 'Simple admin panel', 'Optimized for conversion'],
        },
        {
          title: 'UI/UX Design',
          description: 'Intuitive interfaces that connect with your users.',
          details: 'Interfaces designed around your real users: intuitive, attractive, and easy to navigate.',
          features: ['User research and wireframes', 'Interactive prototypes', 'Consistent design system', 'Usability testing'],
        },
        {
          title: 'Optimization',
          description: 'Better performance, SEO, and guaranteed speed.',
          details: "I review and improve your site's performance so it loads faster and ranks better on search engines.",
          features: ['Speed and SEO audit', 'Image and code optimization', 'Core Web Vitals best practices', 'Results report'],
        },
        {
          title: 'Maintenance',
          description: 'Ongoing support and updates for your peace of mind.',
          details: 'I make sure your site stays updated, secure, and running smoothly, all the time.',
          features: ['Periodic updates', 'Monitoring and backups', 'Bug fixes', 'Priority support via WhatsApp/email'],
        },
      ],
      detailsAria: (title) => `See more about ${title}`,
      cta: 'Request this service',
    },
    projects: {
      label: 'Featured projects',
      headingLine1: 'Solutions that',
      headingLine2: 'speak for themselves.',
      viewAll: 'View all projects',
      items: [
        { title: 'RMT Solution', category: 'Website' },
        { title: 'Gravity Studio', category: 'Website' },
        { title: 'Luxe Timepieces', category: 'E-commerce' },
        { title: 'ArchiNova', category: 'Website' },
        { title: 'NextMove', category: 'Web Platform' },
      ],
      previewAlt: (title) => `Preview of ${title}`,
      openAria: (title) => `Open ${title}`,
      prevAria: 'Previous project',
      nextAria: 'Next project',
      dotsAria: 'Select project',
      showAria: (title) => `Show ${title}`,
    },
    process: {
      label: 'My process',
      headingLine1: 'This is how I turn ideas',
      headingLine2: 'into digital products that are',
      headingEm: 'exceptional.',
      items: [
        { title: 'Discovery', text: 'I get to know your brand, goals, and audience.' },
        { title: 'Design', text: 'I craft modern interfaces focused on experience.' },
        { title: 'Development', text: 'Clean, scalable code following best practices.' },
        { title: 'Launch', text: 'Testing, optimization, and a successful release.' },
      ],
    },
    pricing: {
      label: 'Plans & pricing',
      headingLine1: 'Clear investment,',
      headingLine2: 'no surprises.',
      intro: "Every project is different — these are starting points. The final quote is tailored to your site's real scope.",
      highlights: [
        {
          icon: 'pen',
          title: 'Designed to your taste',
          text: 'Every site is built from scratch for your brand — never a recycled template.',
        },
        {
          icon: 'shield',
          title: 'Hosted on a private server',
          text: 'Your site runs on my own server, with backups, updates, and maintenance included.',
        },
      ],
      from: 'Starting at',
      unit: 'one-time project',
      featuredBadge: 'Most chosen',
      cta: 'Request this plan',
      note: "Not sure which plan you need? Reach out and I'll help you figure it out, no cost.",
      tiers: [
        {
          name: 'Essential',
          price: '800',
          tagline: 'A simple, effective digital presence.',
          features: [
            'Landing page or a few sections',
            'Fully responsive design',
            'Working contact form',
            'Basic SEO and fast loading',
          ],
        },
        {
          name: 'Professional',
          price: '1,300',
          tagline: 'For brands that want to stand out in style.',
          features: [
            'Multiple pages and custom sections',
            'Animations and motion effects',
            '100% custom design',
            'Advanced SEO + WhatsApp/social integration',
          ],
        },
        {
          name: 'Custom',
          price: '1,800',
          tagline: 'Platforms with their own logic and data.',
          features: [
            'Everything in the Professional plan',
            'Login system and private areas',
            'Database and admin panel',
            'Custom functionality (e-commerce, dashboards...)',
          ],
        },
      ],
    },
    cta: {
      label: 'Have a project in mind?',
      heading: "Let's build something extraordinary together.",
      text: "I'm available for new projects and collaborations.",
      button: "Let's talk about your project",
    },
    footer: {
      tagline: 'Premium web development for brands that want to stand out and leave a mark.',
      links: 'Links',
      contact: 'Contact',
      servicesTitle: 'Services',
      followMe: 'Direct contact',
      rights: (year) => `© ${year} Pycrafted. All rights reserved.`,
    },
    modal: {
      label: 'New project',
      heading: 'Tell me what you want to build.',
      description: "Fill in the details and I'll put together an initial proposal for your project.",
      closeAria: 'Close',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      typeLabel: 'Project type',
      typeOptions: ['Premium website', 'Online store', 'Web app', 'UI/UX redesign', 'Optimization'],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your business, goals, and ideal timeline...',
      planPrefill: (plan, price) => `I'm interested in the "${plan}" plan (starting at $${price}). Here's more about my project:\n`,
      servicePrefill: (service) => `I'm interested in the "${service}" service. Here's more about my project:\n`,
      submit: 'Send request',
      successTitle: 'Message ready',
      successText: 'The form is currently visual only. Connect Formspree, Resend, or your backend to actually receive it by email.',
      successClose: 'Close',
    },
  },
};
