'use client';

import { useEffect, useState } from 'react';
export default function Page() {

  const [language, setLanguage] = useState<'EN' | 'IT' | 'ES'>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('nero_lang') as 'EN' | 'IT' | 'ES' | null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const changeLanguage = (lang: 'EN' | 'IT' | 'ES') => {
    setLanguage(lang);
    localStorage.setItem('nero_lang', lang);
  };

  const content = {

    EN: {
      subtitle: "Technology Talent Advisory",
      sequence: [
        "EXECUTION DEFINES REPUTATION",
        "SELECTIVE MANDATES",
        "STRUCTURED DELIVERY",
        "HIRING IS ARCHITECTURE"
      ],
      positioning: [
        "High-growth companies do not fail because of talent scarcity. They fail because hiring lacks structure, clarity and execution discipline.",
        "NERO operates differently. Every mandate is designed, scoped and executed with precision — as a strategic build, not a transactional process."
      ],
      frameTitle: "NERO Frame",
      frameSubtitle: "A structured hiring model designed for execution clarity.",
      frameClosing: "Execution is not optional.",
      frame: [
        { heading: "Mandate Definition", text: "Clear role scope, ownership alignment and measurable success parameters." },
        { heading: "Market Mapping", text: "Target ecosystem analysis and structured outreach strategy." },
        { heading: "Shortlist Control", text: "Pre-aligned, qualified candidates only." },
        { heading: "Execution Oversight", text: "Disciplined feedback cycles, timeline control and decision accountability." }
      ],
      whenTitle: "WHEN NERO CAN HELP",
whenIntro: "NERO can support you when hiring starts impacting the structure of your company, not just daily operations.",
whenPoints: [
  "When role definition is not fully aligned among decision-makers.",
  "When multiple stakeholders are involved but there is no clear process ownership.",
  "When previous hires have created friction instead of stability.",
  "When growth stops being spontaneous and starts requiring method."
],
whenClosing: "Structured growth requires structured hiring.",
      engagementTitle: "Engagement Structure",
      engagementSubtitle: "Structured collaboration models designed for clarity and accountability.",
      engagement: [
        { heading: "Contingency Mandate", text: "Performance-based engagement under clearly defined scope and timeline alignment." },
        { heading: "Exclusive Partnership", text: "Structured collaboration model with prioritised execution and defined ownership." },
        { heading: "Mandate Conditions", text: "Clear role definition and disciplined communication." }
      ],
      contactTitle: "Start a Conversation",
      contactText: "If you are building with intention and require structured hiring execution, we would be pleased to understand your context.",
      professionalsTitle: "For Professionals",
      professionalsText: "Active mandates are published through LinkedIn.",
      linkedinButton: "View Open Mandates on LinkedIn",
      footerStructure: "Founder-led Technology Talent Advisory Boutique.",
      footerLinks: {
        privacy: "Privacy Policy",
        cookie: "Cookie Policy",
        terms: "Terms"
      }
    },

    IT: {
      subtitle: "Advisory Strategico per Talent Technology",
      sequence: [
  "L'ESECUZIONE DEFINISCE LA REPUTAZIONE",
  "MANDATI SELETTIVI",
  "CONSEGNA STRUTTURATA",
  "L'HIRING È ARCHITETTURA"
],
      positioning: [
        "Le aziende in crescita non falliscono per mancanza di talento, ma per l'assenza di struttura e visione nel modo in cui costruiscono il proprio team.",
        "In NERO l'hiring è architettura. Ogni mandato viene progettato ed eseguito all'interno di un framework definito — non come semplice intermediazione, ma come costruzione strategica."
      ],
      frameTitle: "NERO Frame",
      frameSubtitle: "Un modello strutturato di hiring progettato per chiarezza esecutiva.",
      frameClosing: "L'esecuzione non è opzionale.",
      frame: [
        { heading: "Definizione del Mandato", text: "Definizione chiara del ruolo e parametri misurabili di successo." },
        { heading: "Mappatura di Mercato", text: "Analisi dell'ecosistema target e strategia strutturata di outreach." },
        { heading: "Controllo della Shortlist", text: "Solo candidati qualificati e pre-allineati." },
        { heading: "Supervisione dell'Esecuzione", text: "Cicli di feedback disciplinati e responsabilità decisionale." }
      ],
      whenTitle: "QUANDO NERO PUÒ SUPPORTARTI",
whenIntro: "NERO può supportarti quando l’hiring inizia a impattare la struttura della tua azienda, non solo l’operatività quotidiana.",
whenPoints: [
  "Quando la definizione del ruolo non è pienamente allineata tra i decisori.",
  "Quando sono coinvolti più interlocutori ma non esiste un ownership chiaro del processo.",
  "Quando assunzioni precedenti hanno generato più frizione che stabilità.",
  "Quando la crescita smette di essere spontanea e inizia a richiedere metodo."
],
whenClosing: "La crescita strutturata richiede un hiring strutturato.",
      engagementTitle: "Struttura di Collaborazione",
      engagementSubtitle: "Modelli di collaborazione progettati per chiarezza e responsabilità.",
      engagement: [
        { heading: "Mandato Contingency", text: "Collaborazione basata su performance con ambito e tempistiche chiaramente definiti." },
        { heading: "Partnership in Esclusiva", text: "Modello strutturato con priorità esecutiva." },
        { heading: "Condizioni del Mandato", text: "Definizione chiara del ruolo e responsabilità decisionale." }
      ],
      contactTitle: "Avvia una Conversazione",
      contactText: "Se stai costruendo con intenzione e richiedi un'esecuzione strutturata dell'hiring, saremo lieti di comprendere il tuo contesto.",
      professionalsTitle: "Per Professionisti",
      professionalsText: "Le ricerche attive sono consultabili su LinkedIn.",
      linkedinButton: "Accedi su LinkedIn",
      footerStructure: "Boutique Advisory nel Talent Technology guidata dal Founder.",
      footerLinks: {
        privacy: "Informativa Privacy",
        cookie: "Informativa Cookie",
        terms: "Termini"
      }
    },

    ES: {
      subtitle: "Consultoría Estratégica en Talento Tecnológico",
      sequence: [
  "LA EJECUCIÓN DEFINE LA REPUTACIÓN",
  "MANDATOS SELECTIVOS",
  "ENTREGA ESTRUCTURADA",
  "CONTRATAR ES ARQUITECTURA"
],
      positioning: [
        "Las empresas en crecimiento no fracasan por falta de talento, sino por la ausencia de estructura y visión en la forma en que contratan.",
        "En NERO entendemos la contratación como arquitectura. Cada mandato se diseña y ejecuta bajo un marco estructurado — no como intermediación, sino como construcción estratégica."
      ],
      frameTitle: "NERO Frame",
      frameSubtitle: "Un modelo estructurado de contratación diseñado para claridad ejecutiva.",
      frameClosing: "La ejecución no es opcional.",
      frame: [
        { heading: "Arquitectura del Rol", text: "Definición clara del alcance y parámetros medibles de éxito." },
        { heading: "Mapeo de Mercado", text: "Análisis del ecosistema objetivo y estrategia estructurada de búsqueda." },
        { heading: "Control de Shortlist", text: "Solo candidatos cualificados y prealineados." },
        { heading: "Supervisión de Ejecución", text: "Ciclos de feedback disciplinados y responsabilidad decisional." }
      ],
      whenTitle: "CUANDO NERO PUEDE AYUDARTE",
whenIntro: "NERO puede ayudarte cuando la contratación empieza a impactar la estructura de tu empresa, no solo la operativa diaria.",
whenPoints: [
  "Cuando la definición del rol no está completamente alineada entre los decisores.",
  "Cuando participan varios interlocutores pero no existe un ownership claro del proceso.",
  "Cuando contrataciones anteriores han generado más fricción que estabilidad.",
  "Cuando el crecimiento deja de ser espontáneo y empieza a requerir método."
],
whenClosing: "El crecimiento estructurado exige una contratación estructurada.",
      engagementTitle: "Estructura de Colaboración",
engagementSubtitle: "Modelos con enfoque estructurado y responsabilidad definida.",
engagement: [
        { heading: "Mandato Contingente", text: "Colaboración basada en resultados bajo alcance y plazos definidos." },
        { heading: "Alianza Exclusiva", text: "Modelo estructurado con prioridad ejecutiva." },
        { heading: "Condiciones del Mandato", text: "Definición clara del rol y responsabilidad decisional." }
      ],
      contactTitle: "Iniciar una Conversación",
      contactText: "Si estás construyendo con intención y necesitas una ejecución estructurada del hiring, estaremos encantados de comprender tu contexto.",
      professionalsTitle: "Para Profesionales",
      professionalsText: "Las búsquedas activas pueden consultarse en LinkedIn.",
      linkedinButton: "Acceder a LinkedIn",

      footerStructure: "Boutique de Advisory en Talento Tecnológico liderada por su Founder.",
      footerLinks: {
        privacy: "Política de Privacidad",
        cookie: "Política de Cookies",
        terms: "Términos"
      }
    }

  };

  const t = content[language];
  const globalHero = content.EN;
  useEffect(() => {
    const items = document.querySelectorAll('.frame-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>

      <section className="hero">
        <div className="language-selector">
          <span className={`lang ${language === 'EN' ? 'active' : ''}`} onClick={() => changeLanguage('EN')}>EN</span>
          <span className="lang-separator">·</span>
          <span className={`lang ${language === 'IT' ? 'active' : ''}`} onClick={() => changeLanguage('IT')}>IT</span>
          <span className="lang-separator">·</span>
          <span className={`lang ${language === 'ES' ? 'active' : ''}`} onClick={() => changeLanguage('ES')}>ES</span>
        </div>

        <div className="vertical-line" />

        <div className="content">
          <h1 className={`hero-title ${playfair.className}`}>NERO TALENT</h1>
          <p className={`subtitle ${inter.className}`}>{globalHero.subtitle}</p>
        </div>
      </section>
      <section className="sequence">
  <div className="sequence-text text-1">{globalHero.sequence[0]}</div>
  <div className="sequence-text text-2">{globalHero.sequence[1]}</div>
  <div className="sequence-text text-3">{globalHero.sequence[2]}</div>
  <div className="sequence-text text-4">{globalHero.sequence[3]}</div>
</section>

      <section className="positioning">
        <div className="positioning-content">
          <p className="positioning-text">{t.positioning[0]}</p>
          <p className="positioning-text">{t.positioning[1]}</p>
        </div>
      </section>

      <div className="section-divider" />

      <section className={`nero-frame ${inter.className}`}>
        <h2 className="frame-title">{t.frameTitle}</h2>
        <p className="frame-subtitle">{t.frameSubtitle}</p>

        {t.frame.map((item, index) => (
          <div className="frame-item" key={index}>
            <div className="frame-number">0{index + 1}</div>
            <div className="frame-heading">{item.heading}</div>
            <div className="frame-text">{item.text}</div>
          </div>
        ))}

        <div className="frame-closing">{t.frameClosing}</div>
        <div className="section-divider" />
      </section>
      <section className={`when-section ${inter.className}`}>
  <div className="when-wrapper">
    <h2 className="when-title">{t.whenTitle}</h2>
    <p className="when-intro">{t.whenIntro}</p>

    <div className="when-list">
      {t.whenPoints.map((point, index) => (
        <div key={index} className="when-item">
          {point}
        </div>
      ))}
    </div>

    <div className="when-closing">{t.whenClosing}</div>
  </div>
</section>

      <section className={`engagement ${inter.className}`}>
        <h2 className="engagement-title">{t.engagementTitle}</h2>
        <p className="engagement-subtitle">{t.engagementSubtitle}</p>

        {t.engagement.map((item, index) => (
          <div className="engagement-item" key={index}>
            <div className="engagement-heading">{item.heading}</div>
            <div className="engagement-text">{item.text}</div>
          </div>
        ))}
      </section>

      <section className="contact">
        <div className="contact-wrapper">
          <h2 className="contact-title">{t.contactTitle}</h2>
          <p className="contact-text">{t.contactText}</p>

          <a href="mailto:info@nerotalent.com" className="contact-email">
            info@nerotalent.com
          </a>

          <div className="contact-secondary">
            <h3 className="contact-subtitle">{t.professionalsTitle}</h3>
            <p className="contact-secondary-text">{t.professionalsText}</p>

            <a
              href="https://www.linkedin.com/company/nero-talent/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-linkedin"
            >
              {t.linkedinButton}
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-structure">{t.footerStructure}</div>

          <div className="footer-legal">
            NERO Talent – Technology Talent Advisory<br />
            P.IVA 02801330065<br />
            Alessandria (AL), Italy
          </div>

          <div className="footer-links">
            <a href="/privacy">{t.footerLinks.privacy}</a>
            <span>·</span>
            <a href="/cookie">{t.footerLinks.cookie}</a>
            <span>·</span>
            <a href="/terms">{t.footerLinks.terms}</a>
          </div>
        </div>
      </footer>

    </main>
  );
}