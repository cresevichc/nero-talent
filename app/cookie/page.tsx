'use client';
import { inter } from '../layout';
import { useEffect, useState } from 'react';

export default function Cookie() {

  const [language, setLanguage] = useState<'EN' | 'IT' | 'ES'>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('nero_lang') as 'EN' | 'IT' | 'ES' | null;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const content = {

    EN: {
      title: "Cookie Policy",
      updated: "Last updated: February 2026",
      sections: [
        {
          heading: "Use of Cookies",
          text: "This website uses only technical cookies necessary for proper functionality and language preference storage."
        },
        {
          heading: "Analytics & Tracking",
          text: "NERO Talent does not use profiling cookies or third-party tracking systems."
        },
        {
          heading: "Language Preference",
          text: "A local storage key ('nero_lang') is used exclusively to remember the selected language."
        },
        {
          heading: "Managing Cookies",
          text: "Users may clear browser storage at any time through their browser settings."
        }
      ]
    },

    IT: {
      title: "Informativa Cookie",
      updated: "Ultimo aggiornamento: Febbraio 2026",
      sections: [
        {
          heading: "Utilizzo dei Cookie",
          text: "Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento e alla memorizzazione della lingua."
        },
        {
          heading: "Analytics e Tracciamento",
          text: "NERO Talent non utilizza cookie di profilazione né sistemi di tracciamento di terze parti."
        },
        {
          heading: "Preferenza Lingua",
          text: "Viene utilizzata una chiave di local storage ('nero_lang') esclusivamente per ricordare la lingua selezionata."
        },
        {
          heading: "Gestione dei Cookie",
          text: "L’utente può cancellare i dati del browser in qualsiasi momento tramite le impostazioni del proprio browser."
        }
      ]
    },

    ES: {
      title: "Política de Cookies",
      updated: "Última actualización: Febrero 2026",
      sections: [
        {
          heading: "Uso de Cookies",
          text: "Este sitio utiliza únicamente cookies técnicas necesarias para su correcto funcionamiento y almacenamiento del idioma seleccionado."
        },
        {
          heading: "Analítica y Seguimiento",
          text: "NERO Talent no utiliza cookies de perfilado ni sistemas de seguimiento de terceros."
        },
        {
          heading: "Preferencia de Idioma",
          text: "Se utiliza una clave de almacenamiento local ('nero_lang') exclusivamente para recordar el idioma seleccionado."
        },
        {
          heading: "Gestión de Cookies",
          text: "El usuario puede eliminar los datos del navegador en cualquier momento desde la configuración del mismo."
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