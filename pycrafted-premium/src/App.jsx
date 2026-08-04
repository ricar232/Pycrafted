import { useEffect, useMemo, useRef, useState } from 'react';
import { detectLang, translations, serviceIcons, projectAssets, navTargets, contact } from './i18n';
import Particles from './Particles';

function Icon({ name, size = 22 }) {
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.65,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const shapes = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    grid: <><circle cx="6" cy="6" r="1" /><circle cx="12" cy="6" r="1" /><circle cx="18" cy="6" r="1" /><circle cx="6" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="18" cy="12" r="1" /><circle cx="6" cy="18" r="1" /><circle cx="12" cy="18" r="1" /><circle cx="18" cy="18" r="1" /></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="1.8" /><path d="M8 20h8" /><path d="M12 16v4" /></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
    pen: <><path d="M4 19c4-1 7-4 8-8l6-6 2 2-6 6c-4 1-7 4-8 8l-2-2Z" /><path d="m15 8 2 2" /></>,
    rocket: <><path d="M14 5c3-3 5-2 5-2s1 2-2 5l-5 5-4-4 6-4Z" /><path d="m9 10-4 1-2 3 6 1" /><path d="m13 14 1 6 3-2 1-4" /><path d="M7 17c-2 0-3 1-3 3 2 0 3-1 3-3Z" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.5 2.7 7.7 7 10 4.3-2.3 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    external: <><path d="M15 4h5v5" /><path d="m20 4-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    play: <path d="m9 7 8 5-8 5V7Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    check: <path d="M5 12.5 9.5 17 19 7" />,
    whatsapp: <>
      <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path
        d="M8.5 8.8c.3-.7.6-.7.9-.7h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.2.1.4.1.5-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1l1.6.8c.2.1.3.1.4.3.1.2.1.9-.2 1.4-.3.5-1.5 1.2-2.5 1.2-.9 0-2.9-.4-4.9-2.3-2.4-2.3-2.9-4.2-3-4.5-.1-.3-.6-1.1-.4-2.6Z"
        fill="currentColor"
        stroke="none"
      />
    </>,
  };

  return <svg {...base}>{shapes[name]}</svg>;
}

function Logo({ compact = false, t }) {
  return (
    <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#inicio" aria-label={t.logoAria}>
      <img className="brand-mark" src="/assets/logo-gold.png" alt="" />
      {!compact && <span>PYCRAFTED</span>}
    </a>
  );
}

function Header({ menuOpen, setMenuOpen, openContact, t }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
      <Logo t={t} />
      <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label={t.navAria}>
        {navTargets.map((target, index) => (
          <a
            className={index === 0 ? 'nav-active' : ''}
            href={`#${target}`}
            key={target}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav[index]}
          </a>
        ))}
      </nav>
      <button className="gold-outline header-button" type="button" onClick={() => openContact()}>
        {t.talk} <Icon name="arrow" size={17} />
      </button>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label={menuOpen ? t.menuAria.close : t.menuAria.open}
      >
        <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
      </button>
    </header>
  );
}

function Hero({ openContact, t }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: ((event.clientX - box.left) / box.width - 0.5) * 12,
      y: ((event.clientY - box.top) / box.height - 0.5) * 8,
    });
  };

  return (
    <section className="hero" id="inicio" onPointerMove={onPointerMove} onPointerLeave={() => setPosition({ x: 0, y: 0 })}>
      <div className="container hero-grid">
        <div className="hero-copy reveal-on-load">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.titleLine1}
            <span> {t.hero.titleEm}</span>
            {t.hero.titleLine2}
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="gold-button" href="#proyectos">{t.hero.ctaProjects} <Icon name="arrow" size={18} /></a>
            <a className="dark-button" href="#servicios">{t.hero.ctaServices} <Icon name="grid" size={18} /></a>
          </div>
          <div className="client-proof">
            <div className="trust-mark" aria-hidden="true"><Icon name="shield" size={18} /></div>
            <p>{t.hero.clientsLine1}<br />{t.hero.clientsLine2}</p>
          </div>
        </div>

        <div className="hero-art-wrap" aria-label={t.hero.sculptureAria}>
          <div
            className="hero-art"
            style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(1.035)` }}
          />
          <div className="hero-art-glow" />
        </div>
      </div>

      <aside className="social-rail" aria-label={t.socialAria}>
        <a href="#proyectos" aria-label={t.hero.social.play}><Icon name="play" size={16} /></a>
        <a href={contact.whatsappLink} target="_blank" rel="noreferrer" aria-label={t.hero.social.whatsapp}><Icon name="whatsapp" size={16} /></a>
        <a href={contact.mailLink} aria-label={t.hero.social.mail}><Icon name="mail" size={15} /></a>
      </aside>
    </section>
  );
}

function Services({ openDetails, t }) {
  const items = serviceIcons.map((icon, index) => ({ icon, ...t.services.items[index] }));

  return (
    <section className="services-shell container" id="servicios">
      {items.map((service) => (
        <article className="service-card" key={service.title}>
          <Icon name={service.icon} size={30} />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <button type="button" onClick={() => openDetails(service)} aria-label={t.services.detailsAria(service.title)}>
            <Icon name="arrow" size={19} />
          </button>
        </article>
      ))}
    </section>
  );
}

function Projects({ openContact, t }) {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);
  const projects = useMemo(
    () => projectAssets.map((asset, index) => ({ ...asset, ...t.projects.items[index] })),
    [t],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.12 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visibleCount = Math.min(4, projects.length);
  const visibleProjects = useMemo(() => {
    return projects
      .map((project, index) => ({
        ...project,
        order: (index - active + projects.length) % projects.length,
      }))
      .sort((a, b) => a.order - b.order)
      .slice(0, visibleCount);
  }, [active, projects, visibleCount]);

  const go = (direction) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section className="projects-section container" id="proyectos" ref={sectionRef}>
      <div className="projects-heading">
        <div>
          <p className="section-label">{t.projects.label}</p>
          <h2>{t.projects.headingLine1}<br />{t.projects.headingLine2}</h2>
        </div>
        <button className="projects-all" type="button" onClick={() => openContact()}>
          {t.projects.viewAll} <Icon name="arrow" size={18} />
        </button>
      </div>

      <div className="projects-carousel-wrap">
        {projects.length > 1 && (
          <button className="carousel-arrow carousel-prev" type="button" onClick={() => go(-1)} aria-label={t.projects.prevAria}>
            <Icon name="chevronLeft" size={24} />
          </button>
        )}
        <div className="projects-grid" style={visibleProjects.length === 1 ? { gridTemplateColumns: 'minmax(0, 380px)', justifyContent: 'center' } : undefined}>
          {visibleProjects.map((project) => (
            <article className={`project-card ${revealed ? 'is-visible' : ''}`} key={project.id}>
              <div className="project-image-wrap">
                <img src={project.image} alt={t.projects.previewAlt(project.title)} />
                <div className="project-shine" />
              </div>
              <div className="project-details">
                <div><h3>{project.title}</h3><p>{project.category}</p></div>
                <a href={project.url} target="_blank" rel="noreferrer" aria-label={t.projects.openAria(project.title)}><Icon name="external" size={14} /></a>
              </div>
            </article>
          ))}
        </div>
        {projects.length > 1 && (
          <button className="carousel-arrow carousel-next" type="button" onClick={() => go(1)} aria-label={t.projects.nextAria}>
            <Icon name="chevronRight" size={24} />
          </button>
        )}
      </div>

      {projects.length > 1 && (
        <div className="carousel-dots" aria-label={t.projects.dotsAria}>
          {projects.map((project, index) => (
            <button
              className={index === active ? 'dot-active' : ''}
              type="button"
              key={project.id}
              onClick={() => setActive(index)}
              aria-label={t.projects.showAria(project.title)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function About({ t }) {
  return (
    <section className="about-section container" id="sobre-mi">
      <div className="about-photo-wrap">
        <img className="about-photo" src="/assets/founder.jpg" alt={t.about.photoAlt} />
      </div>
      <div className="about-copy">
        <p className="section-label">{t.about.label}</p>
        <h2>{t.about.headingLine1}<br />{t.about.headingLine2}</h2>
        <p className="about-name">{t.about.name}</p>
        <p className="about-role">{t.about.role}</p>
        <p className="about-bio">{t.about.bio}</p>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section className="process-section" id="proceso">
      <div className="process-overlay" />
      <div className="container process-inner">
        <div className="process-intro">
          <p className="section-label">{t.process.label}</p>
          <h2>{t.process.headingLine1}<br />{t.process.headingLine2}<br /><em>{t.process.headingEm}</em></h2>
        </div>
        <div className="process-steps">
          {t.process.items.map((step, index) => (
            <article className="process-step" key={step.title}>
              <div className="process-number"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ openContact, t }) {
  return (
    <section className="pricing-section container" id="precios">
      <div className="pricing-heading">
        <p className="section-label">{t.pricing.label}</p>
        <h2>{t.pricing.headingLine1}<br />{t.pricing.headingLine2}</h2>
        <p className="pricing-intro">{t.pricing.intro}</p>
      </div>

      <div className="pricing-highlights">
        {t.pricing.highlights.map((item) => (
          <div className="pricing-highlight" key={item.title}>
            <Icon name={item.icon} size={22} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pricing-grid">
        {t.pricing.tiers.map((tier, index) => {
          const featured = index === 1;
          return (
            <article className={`pricing-card ${featured ? 'pricing-featured' : ''}`} key={tier.name}>
              {featured && <span className="pricing-badge">{t.pricing.featuredBadge}</span>}
              <h3>{tier.name}</h3>
              <p className="pricing-tagline">{tier.tagline}</p>
              <div className="pricing-price">
                <span className="pricing-from">{t.pricing.from}</span>
                <span className="pricing-amount">${tier.price}</span>
              </div>
              <p className="pricing-unit">{t.pricing.unit}</p>
              <ul className="pricing-features">
                {tier.features.map((feature) => (
                  <li key={feature}><Icon name="check" size={15} />{feature}</li>
                ))}
              </ul>
              <button
                className={featured ? 'gold-button' : 'gold-outline'}
                type="button"
                onClick={() => openContact(tier.name, tier.price)}
              >
                {t.pricing.cta} <Icon name="arrow" size={17} />
              </button>
            </article>
          );
        })}
      </div>

      <p className="pricing-note">{t.pricing.note}</p>
    </section>
  );
}

function CallToAction({ openContact, t }) {
  return (
    <section className="cta-shell container" id="contacto">
      <div className="cta-crystal" />
      <div className="cta-copy">
        <p className="section-label">{t.cta.label}</p>
        <h2>{t.cta.heading}</h2>
        <span>{t.cta.text}</span>
      </div>
      <button className="gold-outline cta-button" type="button" onClick={() => openContact()}>
        {t.cta.button} <Icon name="arrow" size={18} />
      </button>
    </section>
  );
}

function Footer({ openContact, t }) {
  return (
    <footer className="footer container">
      <div className="footer-brand">
        <Logo t={t} />
        <p>{t.footer.tagline}</p>
      </div>
      <div className="footer-column">
        <h3>{t.footer.links}</h3>
        {navTargets.slice(0, 4).map((target, index) => <a href={`#${target}`} key={target}>{t.nav[index]}</a>)}
        <button type="button" onClick={() => openContact()}>{t.footer.contact}</button>
      </div>
      <div className="footer-column">
        <h3>{t.footer.servicesTitle}</h3>
        {t.services.items.map((service) => <a href="#servicios" key={service.title}>{service.title}</a>)}
      </div>
      <div className="footer-social">
        <h3>{t.footer.followMe}</h3>
        <div>
          <a href={contact.whatsappLink} target="_blank" rel="noreferrer" aria-label={t.hero.social.whatsapp}><Icon name="whatsapp" size={17} /></a>
          <a href={contact.mailLink} aria-label={t.hero.social.mail}><Icon name="mail" size={17} /></a>
        </div>
        <p>{t.footer.rights(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
}

function ServiceModal({ service, onClose, onRequest, t }) {
  useEffect(() => {
    if (!service) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="contact-modal service-modal" role="dialog" aria-modal="true" aria-labelledby="service-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label={t.modal.closeAria}><Icon name="close" size={20} /></button>
        <div className="service-modal-icon"><Icon name={service.icon} size={26} /></div>
        <h2 id="service-title">{service.title}</h2>
        <p className="modal-description">{service.details}</p>
        <ul className="pricing-features service-modal-features">
          {service.features.map((feature) => (
            <li key={feature}><Icon name="check" size={15} />{feature}</li>
          ))}
        </ul>
        <button className="gold-button modal-submit" type="button" onClick={onRequest}>
          {t.services.cta} <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}

function ContactModal({ open, onClose, t, plan }) {
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState(contact.whatsappLink);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const summary = t.modal.whatsappSummary(
      data.get('name'),
      data.get('email'),
      data.get('project'),
      data.get('message'),
    );
    setWaLink(`${contact.whatsappLink}?text=${encodeURIComponent(summary)}`);
    setSent(true);
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label={t.modal.closeAria}><Icon name="close" size={20} /></button>
        <p className="section-label">{t.modal.label}</p>
        <h2 id="contact-title">{t.modal.heading}</h2>
        <p className="modal-description">{t.modal.description}</p>
        {sent ? (
          <div className="success-box">
            <span>✓</span>
            <h3>{t.modal.successTitle}</h3>
            <p>{t.modal.successText}</p>
            <a className="gold-button" href={waLink} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={17} /> {t.modal.successWhatsapp}
            </a>
            <button className="text-close" type="button" onClick={onClose}>{t.modal.successClose}</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-row">
              <label>{t.modal.nameLabel}<input required name="name" placeholder={t.modal.namePlaceholder} /></label>
              <label>{t.modal.emailLabel}<input required type="email" name="email" placeholder={t.modal.emailPlaceholder} /></label>
            </div>
            <label>{t.modal.typeLabel}
              <select name="project" defaultValue={t.modal.typeOptions[0]}>
                {t.modal.typeOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>{t.modal.messageLabel}
              <textarea
                required
                name="message"
                rows="5"
                placeholder={t.modal.messagePlaceholder}
                defaultValue={plan ? (plan.price ? t.modal.planPrefill(plan.name, plan.price) : t.modal.servicePrefill(plan.name)) : ''}
              />
            </label>
            <button className="gold-button modal-submit" type="submit">{t.modal.submit} <Icon name="arrow" size={18} /></button>
          </form>
        )}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPlan, setContactPlan] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const lang = useMemo(() => detectLang(), []);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta.description);
  }, [lang, t]);

  useEffect(() => {
    const elements = document.querySelectorAll('.service-card, .process-step, .pricing-card, .cta-shell');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const openContact = (planName, planPrice) => {
    setContactPlan(planName ? { name: planName, price: planPrice } : null);
    setContactOpen(true);
    setMenuOpen(false);
  };

  const requestFromService = () => {
    const serviceTitle = activeService?.title;
    setActiveService(null);
    openContact(serviceTitle);
  };

  return (
    <>
      <div className="site-bg-video" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/assets/fondo.webm" type="video/webm" />
          <source src="/assets/fondo.mp4" type="video/mp4" />
        </video>
      </div>
      <Particles />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} openContact={openContact} t={t} />
      <main>
        <Hero openContact={openContact} t={t} />
        <Services openDetails={setActiveService} t={t} />
        <Projects openContact={openContact} t={t} />
        <About t={t} />
        <Process t={t} />
        <Pricing openContact={openContact} t={t} />
        <CallToAction openContact={openContact} t={t} />
      </main>
      <Footer openContact={openContact} t={t} />
      <a
        className="mobile-whatsapp-fab"
        href={contact.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label={t.hero.social.whatsapp}
      >
        <Icon name="whatsapp" size={24} />
      </a>
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} onRequest={requestFromService} t={t} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} t={t} plan={contactPlan} />
    </>
  );
}

export default App;
