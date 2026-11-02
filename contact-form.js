(() => {
  const forms = { pl: "jeZLGE", en: "dWpKAV" };
  const titles = { pl: "Kontakt z Fifth Ace", en: "Contact Fifth Ace" };
  const loaderUrl = "https://tally.so/widgets/embed.js";

  function loadForm() {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      return;
    }
    // The original inline embed may already have requested the shared loader.
    const existing = document.querySelector(`script[src="${loaderUrl}"]`);
    if (existing) {
      existing.addEventListener("load", loadForm, { once: true });
      return;
    }
    const loader = document.createElement("script");
    loader.src = loaderUrl;
    loader.addEventListener("load", loadForm, { once: true });
    loader.addEventListener("error", () => {
      const frame = document.querySelector(".contact-form");
      if (frame && !frame.src) frame.src = frame.dataset.tallySrc;
    }, { once: true });
    document.body.appendChild(loader);
  }

  function update(language) {
    const lang = language === "en" ? "en" : "pl";
    let frame = document.querySelector(".contact-form");
    if (!frame) return;
    const url = `https://tally.so/embed/${forms[lang]}?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1`;
    if (frame.dataset.tallySrc !== url) {
      // A fresh iframe discards the previous form's height and embed state.
      const replacement = frame.cloneNode(false);
      replacement.removeAttribute("src");
      replacement.removeAttribute("data-loaded");
      replacement.removeAttribute("style");
      replacement.height = "532";
      replacement.dataset.tallySrc = url;
      replacement.title = titles[lang];
      frame.replaceWith(replacement);
      frame = replacement;
    }
    frame.title = titles[lang];
    loadForm();
  }

  document.addEventListener("fifthace:language", (event) => update(event.detail));
  let language = document.documentElement.lang;
  if (document.querySelector("[data-lang-switch]")) {
    try { language = localStorage.getItem("fifthace_lang") || language; } catch (_) {}
  }
  update(language);
})();
