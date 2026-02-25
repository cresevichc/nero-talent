'use client';
import { inter } from '../layout';
import { useEffect, useState } from 'react';

export default function Privacy() {

  const [language, setLanguage] = useState<'EN' | 'IT' | 'ES'>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('nero_lang') as 'EN' | 'IT' | 'ES' | null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const content = {

    EN: {
      title: "Privacy Policy",
      updated: "Last updated: February 2026",
      sections: [
        {
          heading: "Data Controller",
          text: "NERO Talent – Technology Talent Advisory – P.IVA 02801330065 – Alessandria (AL), Italy."
        },
        {
          heading: "Data Collection",
          text: "Personal data may be collected when voluntarily provided via email communication or direct professional interaction."
        },
        {
          heading: "Purpose of Processing",
          text: "Data is processed exclusively for professional communication, recruitment advisory purposes and mandate evaluation."
        },
        {
          heading: "Legal Basis",
          text: "Processing is based on legitimate interest and pre-contractual communication pursuant to GDPR (EU Regulation 2016/679)."
        },
        {
          heading: "Your Rights",
          text: "You may request access, correction or deletion of your personal data by contacting: info@nerotalent.com"
        }
      ]
    },

    IT: {
      title: "Informativa Privacy",
      updated: "Ultimo aggiornamento: Febbraio 2026",
      sections: [
        {
          heading: "Titolare del Trattamento",
          text: "NERO Talent – Technology Talent Advisory – P.IVA 02801330065 – Alessandria (AL), Italia."
        },
        {
          heading: "Raccolta dei Dati",
          text: "I dati personali possono essere raccolti quando forniti volontariamente tramite email o interazione professionale diretta."
        },
        {
          heading: "Finalità del Trattamento",
          text: "I dati sono trattati esclusivamente per comunicazioni professionali, advisory e valutazione mandati."
        },
        {
          heading: "Base Giuridica",
          text: "Il trattamento si basa sul legittimo interesse e comunicazione precontrattuale ai sensi del GDPR (Reg. UE 2016/679)."
        },
        {
          heading: "Diritti dell'Interessato",
          text: "È possibile richiedere accesso o cancellazione scrivendo a: info@nerotalent.com"
        }
      ]
    },

    ES: {
      title: "Política de Privacidad",
      updated: "Última actualización: Febrero 2026",
      sections: [
        {
          heading: "Responsable del Tratamiento",
          text: "NERO Talent – Technology Talent Advisory – P.IVA 02801330065 – Alessandria (AL), Italia."
        },
        {
          heading: "Recopilación de Datos",
          text: "Los datos personales pueden recopilarse cuando se proporcionan voluntariamente mediante correo electrónico."
        },
        {
          heading: "Finalidad del Tratamiento",
          text: "Los datos se procesan exclusivamente para comunicación profesional y evaluación de mandatos."
        },
        {
          heading: "Base Legal",
          text: "El tratamiento se basa en interés legítimo y comunicación precontractual según RGPD (UE 2016/679)."
        },
        {
          heading: "Derechos del Usuario",
          text: "Puede solicitar acceso o eliminación escribiendo a: info@nerotalent.com"
        }
      ]
    }

  };

  const t = content[language];

  return (
    <main className="legal-page">

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