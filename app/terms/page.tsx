'use client';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});
import { useEffect, useState } from 'react';

export default function Terms() {

  const [language, setLanguage] = useState<'EN' | 'IT' | 'ES'>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('nero_lang') as 'EN' | 'IT' | 'ES' | null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const content = {

    EN: {
      title: "Terms & Conditions",
      updated: "Last updated: February 2026",
      sections: [
        {
          heading: "Scope",
          text: "This website provides information regarding NERO Talent – Technology Talent Advisory services."
        },
        {
          heading: "No Contractual Offer",
          text: "Content published on this website does not constitute a binding contractual offer."
        },
        {
          heading: "Professional Engagement",
          text: "Any advisory or recruitment engagement is subject to a separate written agreement between the parties."
        },
        {
          heading: "Intellectual Property",
          text: "All content, structure and branding elements are property of NERO Talent and may not be reproduced without authorization."
        },
        {
          heading: "Liability Limitation",
          text: "NERO Talent shall not be liable for decisions made based solely on publicly available website information."
        }
      ]
    },

    IT: {
      title: "Termini e Condizioni",
      updated: "Ultimo aggiornamento: Febbraio 2026",
      sections: [
        {
          heading: "Ambito",
          text: "Questo sito fornisce informazioni relative ai servizi di NERO Talent – Technology Talent Advisory."
        },
        {
          heading: "Nessuna Offerta Contrattuale",
          text: "I contenuti pubblicati non costituiscono un’offerta contrattuale vincolante."
        },
        {
          heading: "Incarico Professionale",
          text: "Ogni attività di advisory o recruiting è regolata da accordo scritto separato tra le parti."
        },
        {
          heading: "Proprietà Intellettuale",
          text: "Contenuti, struttura e branding sono proprietà di NERO Talent e non possono essere riprodotti senza autorizzazione."
        },
        {
          heading: "Limitazione di Responsabilità",
          text: "NERO Talent non è responsabile per decisioni prese esclusivamente sulla base delle informazioni pubblicate sul sito."
        }
      ]
    },

    ES: {
      title: "Términos y Condiciones",
      updated: "Última actualización: Febrero 2026",
      sections: [
        {
          heading: "Alcance",
          text: "Este sitio proporciona información sobre los servicios de NERO Talent – Technology Talent Advisory."
        },
        {
          heading: "No constituye oferta contractual",
          text: "El contenido publicado no constituye una oferta contractual vinculante."
        },
        {
          heading: "Relación Profesional",
          text: "Cualquier servicio de advisory o reclutamiento estará sujeto a un acuerdo escrito independiente entre las partes."
        },
        {
          heading: "Propiedad Intelectual",
          text: "Todo el contenido, estructura y elementos de marca son propiedad de NERO Talent y no pueden reproducirse sin autorización."
        },
        {
          heading: "Limitación de Responsabilidad",
          text: "NERO Talent no será responsable por decisiones tomadas únicamente en base a la información pública del sitio."
        }
      ]
    }

  };

  const t = content[language];

  return (
    <main className={`legal-page ${inter.className}`}>

      <section className="legal-hero">
      <h1 className="legal-title">{t.title}</h1>
        <p>{t.updated}</p>
      </section>

      <section className="legal-content">
        {t.sections.map((section, index) => (
          <div key={index}>
            <h2 className="legal-section-title">{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </section>

    </main>
  );
}