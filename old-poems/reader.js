(() => {
  const poems = window.POEMS.filter((poem) => !poem.hidden).sort((left, right) => {
    if (left.year === null && right.year === null) return 0;
    if (left.year === null) return 1;
    if (right.year === null) return -1;
    if (left.year !== right.year) return left.year - right.year;

    const leftCollectionRank = left.collection === "India" ? 1 : 0;
    const rightCollectionRank = right.collection === "India" ? 1 : 0;
    return leftCollectionRank - rightCollectionRank;
  });

  const elements = {
    body: document.body,
    main: document.querySelector("#poem"),
    poem: document.querySelector(".poem"),
    title: document.querySelector("#poem-title"),
    year: document.querySelector("#poem-year"),
    poemBody: document.querySelector("#poem-body"),
    navigation: document.querySelector("#poem-navigation"),
    current: document.querySelector("#position-current"),
    total: document.querySelector("#position-total"),
    previous: document.querySelector("#previous-poem"),
    previousTitle: document.querySelector("#previous-title"),
    next: document.querySelector("#next-poem"),
    nextTitle: document.querySelector("#next-title"),
    progress: document.querySelector("#progress-bar"),
    toggle: document.querySelector(".contents-toggle"),
    close: document.querySelector(".contents-close"),
    scrim: document.querySelector(".contents-scrim"),
    bookTitle: document.querySelector(".book-title"),
  };

  let currentIndex = 0;
  let touchStartX = null;

  const yearLabel = (year) => (year === null ? "Year unknown" : String(year));

  const renderNavigation = () => {
    const groups = new Map();

    poems.forEach((poem, index) => {
      const year = yearLabel(poem.year);
      const collection = poem.collection ?? "";
      const key = `${collection}::${year}`;
      if (!groups.has(key)) groups.set(key, { collection, year, entries: [] });
      groups.get(key).entries.push({ poem, index });
    });

    elements.navigation.innerHTML = [...groups.values()]
      .map(
        ({ collection, year, entries }, groupIndex) => `
          <section class="contents-group" aria-labelledby="contents-group-${groupIndex}">
            <h2 class="contents-group-heading" id="contents-group-${groupIndex}">
              ${collection ? `${collection} · ${year}` : year}
            </h2>
            <ol class="contents-list">
              ${entries
                .map(
                  ({ poem, index }) => `
                    <li>
                      <button class="nav-poem" type="button" data-index="${index}">
                        <small>${String(index + 1).padStart(2, "0")}</small>
                        <span>${poem.title}</span>
                      </button>
                    </li>`,
                )
                .join("")}
            </ol>
          </section>`,
      )
      .join("");

    elements.navigation.addEventListener("click", (event) => {
      const button = event.target.closest(".nav-poem");
      if (!button) return;
      showPoem(Number(button.dataset.index), { addHistory: true, moveFocus: true });
      closeContents(false);
    });
  };

  const updateControls = () => {
    const previous = poems[currentIndex - 1];
    const next = poems[currentIndex + 1];

    elements.previous.disabled = !previous;
    elements.previousTitle.textContent = previous?.title ?? "Beginning";
    elements.next.disabled = !next;
    elements.nextTitle.textContent = next?.title ?? "End";
    elements.current.textContent = String(currentIndex + 1);
    elements.total.textContent = String(poems.length);
    elements.progress.style.width = `${((currentIndex + 1) / poems.length) * 100}%`;

    document.querySelectorAll(".nav-poem").forEach((button) => {
      const active = Number(button.dataset.index) === currentIndex;
      button.setAttribute("aria-current", active ? "true" : "false");
      if (active) button.scrollIntoView({ block: "nearest" });
    });
  };

  const showPoem = (index, options = {}) => {
    if (index < 0 || index >= poems.length) return;

    const poem = poems[index];
    currentIndex = index;

    elements.title.textContent = poem.title;
    elements.year.textContent = [poem.collection, yearLabel(poem.year), poem.date]
      .filter(Boolean)
      .join(" · ");
    elements.poemBody.innerHTML = poem.body;
    document.title = `${poem.title} — Old Poems`;

    elements.poem.style.animation = "none";
    void elements.poem.offsetHeight;
    elements.poem.style.animation = "";

    updateControls();
    window.scrollTo({ top: 0, behavior: "instant" });

    const nextHash = `#${poem.id}`;
    if (window.location.hash !== nextHash) {
      const method = options.addHistory ? "pushState" : "replaceState";
      window.history[method](null, "", nextHash);
    }

    if (options.moveFocus) elements.main.focus({ preventScroll: true });
  };

  const openContents = () => {
    elements.body.classList.add("contents-open");
    elements.toggle.setAttribute("aria-expanded", "true");
    window.setTimeout(() => elements.close.focus(), 0);
  };

  const closeContents = (restoreFocus = true) => {
    const wasOpen = elements.body.classList.contains("contents-open");
    elements.body.classList.remove("contents-open");
    elements.toggle.setAttribute("aria-expanded", "false");
    if (wasOpen && restoreFocus) elements.toggle.focus();
  };

  elements.previous.addEventListener("click", () => {
    showPoem(currentIndex - 1, { addHistory: true, moveFocus: true });
  });

  elements.next.addEventListener("click", () => {
    showPoem(currentIndex + 1, { addHistory: true, moveFocus: true });
  });

  elements.toggle.addEventListener("click", openContents);
  elements.close.addEventListener("click", closeContents);
  elements.scrim.addEventListener("click", closeContents);
  elements.bookTitle.addEventListener("click", (event) => {
    event.preventDefault();
    showPoem(0, { addHistory: true, moveFocus: true });
  });

  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    if (event.key === "Escape") {
      closeContents();
      return;
    }

    const tagName = event.target.tagName;
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") return;

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      showPoem(currentIndex - 1, { addHistory: true, moveFocus: true });
    }

    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      showPoem(currentIndex + 1, { addHistory: true, moveFocus: true });
    }
  });

  elements.main.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  elements.main.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) < 70) return;
      showPoem(currentIndex + (distance < 0 ? 1 : -1), {
        addHistory: true,
        moveFocus: false,
      });
    },
    { passive: true },
  );

  window.addEventListener("popstate", () => {
    const id = window.location.hash.slice(1);
    const index = poems.findIndex((poem) => poem.id === id);
    showPoem(index === -1 ? 0 : index);
  });

  renderNavigation();

  const initialId = window.location.hash.slice(1);
  const initialIndex = poems.findIndex((poem) => poem.id === initialId);
  showPoem(initialIndex === -1 ? 0 : initialIndex);
})();
