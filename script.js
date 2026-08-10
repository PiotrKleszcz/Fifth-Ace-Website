const yearNode = document.getElementById("year");
const brandAvatarImage = document.getElementById("brandAvatarImage");
const metaDescriptionNode = document.getElementById("metaDescription");
const pageTitleNode = document.getElementById("pageTitle");
const langSwitchNode = document.querySelector(".lang-switch");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

let activeLanguage = "pl";

const i18n = {
  pl: {
    meta: {
      title: "Fifth Ace | Cyberbezpieczeństwo, Pentesty i Audyty",
      description:
        "Fifth Ace - cyberbezpieczeństwo, audyty bezpieczeństwa, testy penetracyjne oraz wsparcie IT dla małych firm i freelancerów.",
    },
    ui: {
      langLabel: "Wybór języka",
    },
    nav: {
      services: "Usługi",
      guides: "Strefa usług",
      pricing: "Cennik",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "NIS2 • Audyt bezpieczeństwa • Pentesty dla MŚP",
      title: "Cyberbezpieczeństwo i audyt NIS2 dla firm do 100 osób",
      lead1:
        "Dyrektywa NIS2 zobowiązuje setki tysięcy firm w UE do spełnienia wymogów bezpieczeństwa IT — pod groźbą kar i odpowiedzialności zarządu. Fifth Ace przeprowadza audyty zgodności, testy penetracyjne i wdrożenia dla MŚP: zdalnie, sprawnie, z raportem w 5 dni roboczych.",
      lead2:
        "Specjalizujemy się w cyberbezpieczeństwie dla firm z sektora prawnego, rachunkowego, e-commerce i IT zatrudniających 10–100 osób.",
      lead3:
        "Kompleksowe wsparcie: od analizy luk i testów penetracyjnych, przez wdrożenie polityk bezpieczeństwa, po szkolenia zespołu i monitoring.",
      ctaConsult: "Umów bezpłatną konsultację",
      ctaOffer: "Zobacz pakiety cenowe",
    },
    services: {
      title: "Kluczowe usługi",
      card1: {
        title: "Cyberbezpieczeństwo",
        desc: "Audyty bezpieczeństwa, twarde polityki dostępu i monitoring zagrożeń dopasowany do Twojej infrastruktury.",
        li1: "Ocena ryzyka i zgodności",
        li2: "Wzmacnianie zabezpieczeń systemów i sieci",
        li3: "Programy świadomości bezpieczeństwa",
        cta: "Zobacz stronę usługi",
      },
      card2: {
        title: "Testy penetracyjne",
        desc: "Realistyczne symulacje ataków na aplikacje, sieci i środowiska chmurowe, zakończone raportem i planem naprawczym.",
        li1: "Pentesty aplikacji webowych, API i mobilnych",
        li2: "Testy infrastruktury wewnętrznej i zewnętrznej",
        li3: "Retesty po wdrożeniu poprawek",
        cta: "Zobacz stronę usługi",
      },
      card3: {
        title: "Wsparcie IT",
        desc: "Szybka pomoc techniczna dla zespołów, administracja środowiskiem i stała opieka nad infrastrukturą.",
        li1: "Obsługa zgłoszeń i SLA dla firm",
        li2: "Administracja serwerami i stacjami roboczymi",
        li3: "Kopie zapasowe, odzyskiwanie i ciągłość działania",
        cta: "Zobacz stronę usługi",
      },
      now: {
        title: "Usługi dostępne od ręki",
        card1: {
          title: "Przegląd bezpieczeństwa dla małych firm i freelancerów",
          desc: "Sprawdzę podstawowe ryzyka na laptopie i sieci domowej.",
          li1: "Utwardzanie Windows 10/11",
          li2: "Ustawienia Microsoft Defender",
          li3: "Zapora, aktualizacje i podstawowy audyt bezpieczeństwa",
        },
        card2: {
          title: "Pakiet cyber hygiene dla małych firm",
          desc: "Praktyczne wdrożenie nawyków bezpieczeństwa dla małych zespołów.",
          li1: "MFA i menedżer haseł",
          li2: "Bezpieczne kopie zapasowe",
          li3: "Świadomość phishingu",
        },
        card3: {
          title: "Przegląd bezpieczeństwa sieci domowej",
          desc: "Przegląd bezpieczeństwa sieci domowej i podstawowa konfiguracja.",
          li1: "Konfiguracja routera",
          li2: "Szyfrowanie Wi-Fi",
          li3: "Sieć gościnna",
        },
      },
    },
    seoHub: {
      title: "Strefa usług i porad bezpieczeństwa",
      intro:
        "Przygotowaliśmy osobne strony usług, żeby łatwiej było znaleźć Fifth Ace po konkretnych hasłach takich jak audyt bezpieczeństwa, pentesty, wsparcie IT czy zabezpieczenie laptopa firmowego.",
      card1: {
        kicker: "Cyberbezpieczeństwo",
        title: "Cyberbezpieczeństwo dla małych firm",
        desc: "Strona o ochronie kont, poczty, laptopów, backupów i podstawowych procedurach bezpieczeństwa.",
        cta: "Przejdź do strony",
      },
      card2: {
        kicker: "Audyt bezpieczeństwa",
        title: "Audyt bezpieczeństwa i ocena ryzyka",
        desc: "Zakres audytu, najczęstsze luki i plan działań dla małej firmy lub freelancera.",
        cta: "Przejdź do strony",
      },
      card3: {
        kicker: "Pentesty",
        title: "Testy penetracyjne aplikacji i sieci",
        desc: "Informacje o testach aplikacji webowych, API, sieci wewnętrznej i retestach po poprawkach.",
        cta: "Przejdź do strony",
      },
      card4: {
        kicker: "Wsparcie IT",
        title: "Wsparcie IT dla firm i zespołów",
        desc: "Administracja, helpdesk, utrzymanie stacji roboczych, kopie zapasowe i ciągłość działania.",
        cta: "Przejdź do strony",
      },
      card5: {
        kicker: "Laptop i Wi-Fi",
        title: "Zabezpieczenie laptopa i sieci Wi-Fi",
        desc: "Hardening Windows, router, MFA, Defender i szybki security check dla małego biznesu lub domu.",
        cta: "Przejdź do strony",
      },
    },
    faq: {
      title: "FAQ: cyberbezpieczeństwo dla małych firm i freelancerów",
      intro:
        "Ta sekcja odpowiada na pytania, które klienci najczęściej wpisują w Google, gdy szukają praktycznego wsparcia w obszarze cyberbezpieczeństwa.",
      q1: {
        title: "Czym jest audyt bezpieczeństwa dla małej firmy?",
        desc: "Audyt bezpieczeństwa pomaga sprawdzić laptopy, konta, kopie zapasowe, dostęp do poczty, konfigurację Wi-Fi i podstawowe ryzyka w firmie, zanim pojawi się incydent.",
      },
      q2: {
        title: "Kiedy warto zamówić testy penetracyjne?",
        desc: "Testy penetracyjne warto wykonać przed wdrożeniem nowej aplikacji, po większych zmianach w sieci lub wtedy, gdy firma chce realnie sprawdzić odporność systemów i usług.",
      },
      q3: {
        title: "Czy Fifth Ace pomaga zabezpieczyć Windows, router i domowe Wi-Fi?",
        desc: "Tak. Fifth Ace oferuje hardening Windows 10 i 11, przegląd konfiguracji routera, ustawienia Microsoft Defender, podstawowy firewall review oraz pomoc w budowaniu bezpiecznych kopii zapasowych.",
      },
      q4: {
        title: "Jakie usługi cyberbezpieczeństwa są dostępne od ręki?",
        desc: "Najszybciej można rozpocząć security check dla laptopa firmowego, przegląd bezpieczeństwa sieci domowej, cyber hygiene setup dla małego zespołu oraz podstawowy audyt zabezpieczeń.",
      },
    },
    forWhom: {
      eyebrow: "Dla kogo",
      title: "Dopasowane do Twojego biznesu",
      card1: {
        kicker: "Firmy 10–100 pracowników",
        title: "Małe i średnie przedsiębiorstwa",
        desc: "Chcesz spełnić wymogi NIS2, uniknąć kar i mieć pewność, że Twoje systemy IT są bezpieczne — bez zatrudniania pełnoetatowego specjalisty ds. bezpieczeństwa.",
      },
      card2: {
        kicker: "Kancelarie i biura rachunkowe",
        title: "Zawody regulowane",
        desc: "Przetwarzasz wrażliwe dane klientów i podlegasz szczególnym wymogom prawnym. Jeden incydent bezpieczeństwa może zniszczyć reputację budowaną latami.",
      },
      card3: {
        kicker: "E-commerce i startupy",
        title: "Firmy online",
        desc: "Skalujesz biznes i zbierasz dane klientów. Bezpieczeństwo musi rosnąć razem z Tobą — zanim pojawi się pierwszy poważny incydent.",
      },
    },
    pricing: {
      eyebrow: "Pakiety cenowe",
      title: "Przejrzyste ceny, konkretne efekty",
      intro: "Wszystkie usługi realizowane zdalnie. Ceny w funtach brytyjskich (GBP). Bez ukrytych kosztów.",
      offerBadge: "Oferta na start — 50% zniżki, czas ograniczony",
      card1: {
        name: "Security Starter",
        desc: "Dla freelancerów i firm 1–10 osób. Szybki przegląd i podstawowe utwardzenie bezpieczeństwa.",
        period: "jednorazowo",
        li1: "Audyt bezpieczeństwa laptopa i sieci Wi-Fi",
        li2: "Hardening Windows 10/11",
        li3: "Przewodnik wdrożenia MFA i menedżera haseł",
        li4: "Pisemny raport bezpieczeństwa (PDF)",
        cta: "Zamów teraz",
      },
      card2: {
        name: "NIS2 Business Audit",
        desc: "Dla firm 10–100 osób. Kompleksowy audyt zgodności z NIS2 i priorytetowy plan działania.",
        period: "jednorazowo",
        li1: "Pełna analiza luk zgodności NIS2",
        li2: "Przegląd podatności sieci i systemów",
        li3: "Priorytetowy plan działań naprawczych (PDF)",
        li4: "Debriefing 60 min z rekomendacjami",
        li5: "30 dni wsparcia email po audycie",
        li6: "Retest po wdrożeniu poprawek",
        cta: "Zamów audyt NIS2",
      },
      card3: {
        name: "vCISO Monthly",
        desc: "Wirtualny CISO dla firm potrzebujących stałego wsparcia bezpieczeństwa i zgodności.",
        period: "miesięcznie",
        li1: "Miesięczny przegląd bezpieczeństwa",
        li2: "Skanowanie podatności",
        li3: "Wsparcie reagowania na incydenty",
        li4: "Kwartalny test penetracyjny",
        li5: "Aktualizacje polityk bezpieczeństwa",
        cta: "Zacznij współpracę",
      },
    },
    contact: {
      title: "Potrzebujesz partnera od bezpieczeństwa?",
      desc: "Skontaktuj się z Fifth Ace i zaplanujmy bezpieczniejszą infrastrukturę.",
      emailPrompt: "Wolisz maila? Napisz bezpośrednio:",
    },
    footer: {
      follow: "Obserwuj nas",
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },
  en: {
    meta: {
      title: "Fifth Ace | Cybersecurity, Pentesting and Security Audits",
      description:
        "Fifth Ace - cybersecurity, security audits, penetration testing and IT support for small businesses and freelancers.",
    },
    ui: {
      langLabel: "Language switch",
    },
    nav: {
      services: "Services",
      guides: "Service pages",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      eyebrow: "NIS2 Compliance • Security Audits • Pentesting for SMEs",
      title: "Cybersecurity and NIS2 audit for businesses under 100 people",
      lead1:
        "The NIS2 directive requires hundreds of thousands of EU and UK businesses to meet cybersecurity standards — or face fines and management liability. Fifth Ace delivers compliance audits, penetration tests, and implementation support for SMEs: remotely, efficiently, with a report in 5 working days.",
      lead2:
        "We specialise in cybersecurity for law firms, accountancies, e-commerce, and IT companies with 10–100 employees.",
      lead3:
        "End-to-end support: from gap analysis and penetration testing to security policy implementation, team training, and ongoing monitoring.",
      ctaConsult: "Book a free consultation",
      ctaOffer: "View pricing packages",
    },
    services: {
      title: "Core services",
      card1: {
        title: "Cybersecurity",
        desc: "Security audits, strict access policies, and threat monitoring tailored to your infrastructure.",
        li1: "Risk and compliance assessment",
        li2: "System and network hardening",
        li3: "Security awareness programs",
        cta: "Open service page",
      },
      card2: {
        title: "Penetration testing",
        desc: "Realistic attack simulations for applications, networks, and cloud environments, followed by a report and remediation plan.",
        li1: "Web, API, and mobile pentests",
        li2: "Internal and external infrastructure testing",
        li3: "Re-tests after remediation",
        cta: "Open service page",
      },
      card3: {
        title: "IT support",
        desc: "Fast technical assistance for teams, environment administration, and continuous infrastructure care.",
        li1: "Ticket handling and SLA support for companies",
        li2: "Server and workstation administration",
        li3: "Backups, recovery, and business continuity",
        cta: "Open service page",
      },
      now: {
        title: "Services available right now",
        card1: {
          title: "Security check for small businesses / freelancers",
          desc: "I will review basic risks on a laptop and home network.",
          li1: "Windows 10/11 hardening",
          li2: "Microsoft Defender settings",
          li3: "Firewall, updates, and basic security audit",
        },
        card2: {
          title: "Small Business Cyber Hygiene Setup",
          desc: "Practical security hygiene setup for small teams.",
          li1: "MFA and password manager",
          li2: "Secure backups",
          li3: "Phishing awareness",
        },
        card3: {
          title: "Home network security review",
          desc: "Home network security review and baseline configuration.",
          li1: "Router configuration",
          li2: "Wi-Fi encryption",
          li3: "Guest network",
        },
      },
    },
    seoHub: {
      title: "Service pages and security guides",
      intro:
        "We created dedicated service pages so Fifth Ace can be found more easily for search terms such as security audit, pentesting, IT support, or laptop security hardening.",
      card1: {
        kicker: "Cybersecurity",
        title: "Cybersecurity for small businesses",
        desc: "A page focused on account security, email protection, laptops, backups, and baseline security processes.",
        cta: "Open page",
      },
      card2: {
        kicker: "Security audit",
        title: "Security audit and risk assessment",
        desc: "Audit scope, common weaknesses, and an action plan for a small business or freelancer.",
        cta: "Open page",
      },
      card3: {
        kicker: "Pentesting",
        title: "Penetration testing for applications and networks",
        desc: "Details about web app, API, internal network testing, and re-tests after remediation.",
        cta: "Open page",
      },
      card4: {
        kicker: "IT support",
        title: "IT support for companies and teams",
        desc: "Administration, helpdesk, workstation maintenance, backups, and business continuity support.",
        cta: "Open page",
      },
      card5: {
        kicker: "Laptop and Wi-Fi",
        title: "Laptop and Wi-Fi security hardening",
        desc: "Windows hardening, router review, MFA, Defender, and a fast security check for home or small business environments.",
        cta: "Open page",
      },
    },
    faq: {
      title: "FAQ: cybersecurity for small businesses and freelancers",
      intro:
        "This section answers questions that people often type into Google when they look for practical cybersecurity support.",
      q1: {
        title: "What is a security audit for a small business?",
        desc: "A security audit helps review laptops, accounts, backups, email access, Wi-Fi configuration, and baseline risks before an incident happens.",
      },
      q2: {
        title: "When should you order penetration testing?",
        desc: "Penetration testing is worth scheduling before a new application launch, after major network changes, or whenever a company wants to verify the resilience of systems and services.",
      },
      q3: {
        title: "Can Fifth Ace help secure Windows, a router, and home Wi-Fi?",
        desc: "Yes. Fifth Ace offers Windows 10 and 11 hardening, router configuration review, Microsoft Defender settings, baseline firewall review, and support for building secure backups.",
      },
      q4: {
        title: "Which cybersecurity services are available right away?",
        desc: "The fastest services to start are a laptop security check, a home network security review, a cyber hygiene setup for a small team, and a baseline security audit.",
      },
    },
    forWhom: {
      eyebrow: "Who is this for",
      title: "Tailored to your business",
      card1: {
        kicker: "10–100 employees",
        title: "Small and medium businesses",
        desc: "You need to meet NIS2 requirements, avoid penalties, and be confident your IT systems are secure — without hiring a full-time security specialist.",
      },
      card2: {
        kicker: "Law firms and accountancies",
        title: "Regulated professions",
        desc: "You process sensitive client data and face strict legal obligations. A single security incident can destroy years of reputation.",
      },
      card3: {
        kicker: "E-commerce and startups",
        title: "Online businesses",
        desc: "You're scaling fast and collecting customer data. Security needs to grow with you — before the first serious incident occurs.",
      },
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent pricing, clear outcomes",
      intro: "All services delivered remotely. Prices in British Pounds (GBP). No hidden costs.",
      offerBadge: "Launch offer — 50% off, limited time",
      card1: {
        name: "Security Starter",
        desc: "For freelancers and 1–10 person businesses. Quick review and baseline security hardening.",
        period: "one-off",
        li1: "Laptop and Wi-Fi security audit",
        li2: "Windows 10/11 hardening",
        li3: "MFA and password manager setup guide",
        li4: "Written security report (PDF)",
        cta: "Order now",
      },
      card2: {
        name: "NIS2 Business Audit",
        desc: "For businesses with 10–100 employees. Full NIS2 compliance audit and priority action plan.",
        period: "one-off",
        li1: "Full NIS2 compliance gap analysis",
        li2: "Network and system vulnerability review",
        li3: "Priority remediation action plan (PDF)",
        li4: "60-min debrief with recommendations",
        li5: "30-day post-audit email support",
        li6: "Re-test after remediation",
        cta: "Order NIS2 audit",
      },
      card3: {
        name: "vCISO Monthly",
        desc: "Virtual CISO for businesses needing continuous security support and compliance.",
        period: "per month",
        li1: "Monthly security review",
        li2: "Vulnerability scanning",
        li3: "Incident response support",
        li4: "Quarterly penetration test",
        li5: "Security policy updates",
        cta: "Start collaboration",
      },
    },
    contact: {
      title: "Need a trusted security partner?",
      desc: "Contact Fifth Ace and let's plan a safer infrastructure.",
      emailPrompt: "Prefer email? Write directly:",
    },
    footer: {
      follow: "Follow us",
      rights: "All rights reserved.",
    },
  },
};

function getTranslation(language, key) {
  return key.split(".").reduce((obj, part) => {
    if (!obj || typeof obj !== "object") return undefined;
    return obj[part];
  }, i18n[language]);
}

const STORAGE_KEYS = {
  language: "fifthace_lang",
  theme: "fifthace_theme",
};

function t(key, replacements = {}) {
  const template = getTranslation(activeLanguage, key) ?? getTranslation("pl", key) ?? "";
  return template.replace(/\{(\w+)\}/g, (_, token) => replacements[token] ?? "");
}

function getStoredString(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function setStoredString(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const escapeMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return escapeMap[character] ?? character;
  });
}

function applyLanguage(language) {
  const selectedLanguage = i18n[language] ? language : "pl";
  activeLanguage = selectedLanguage;

  document.documentElement.lang = selectedLanguage;
  document.title = i18n[selectedLanguage].meta.title;

  if (pageTitleNode) {
    pageTitleNode.textContent = i18n[selectedLanguage].meta.title;
  }

  if (metaDescriptionNode) {
    metaDescriptionNode.setAttribute("content", i18n[selectedLanguage].meta.description);
  }

  if (langSwitchNode) {
    langSwitchNode.setAttribute("aria-label", i18n[selectedLanguage].ui.langLabel);
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const translation = getTranslation(selectedLanguage, key);
    if (typeof translation === "string") {
      node.textContent = translation;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setStoredString(STORAGE_KEYS.language, selectedLanguage);
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (brandAvatarImage) {
  const markMissingAvatar = () => document.body.classList.add("no-brand-avatar");

  brandAvatarImage.addEventListener("error", markMissingAvatar);

  if (brandAvatarImage.complete && brandAvatarImage.naturalWidth === 0) {
    markMissingAvatar();
  }
}

const savedLanguage = getStoredString(STORAGE_KEYS.language);
applyLanguage(savedLanguage || "pl");

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

// === Theme toggle ===
const MOON_SVG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const SUN_SVG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.innerHTML = theme === "dark" ? SUN_SVG : MOON_SVG;
    btn.setAttribute("aria-label", theme === "dark" ? "Włącz tryb jasny" : "Włącz tryb ciemny");
  }
  setStoredString(STORAGE_KEYS.theme, theme);
}

const themeToggleBtn = document.createElement("button");
themeToggleBtn.id = "themeToggle";
themeToggleBtn.type = "button";
themeToggleBtn.className = "theme-btn";

const navElement = document.querySelector(".nav");
if (navElement) {
  const langSwitchEl = navElement.querySelector(".lang-switch");
  if (langSwitchEl) {
    navElement.insertBefore(themeToggleBtn, langSwitchEl);
  } else {
    navElement.appendChild(themeToggleBtn);
  }
}

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

const initialTheme =
  getStoredString(STORAGE_KEYS.theme) ||
  (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
applyTheme(initialTheme);

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
  const showAllItems = () => {
    revealItems.forEach((item) => item.classList.add("visible"));
  };

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    showAllItems();
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
}
