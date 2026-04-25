/* ========================================
   PORTFOLIO MAIN SCRIPT
   ======================================== */

/* ========== FOOTER YEAR UPDATE ========== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ========== THEME TOGGLE FUNCTIONALITY ========== */
const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ========== PROJECT SEARCH + FILTER + SORT ========== */
const projectSearch = document.getElementById("projectSearch");
const projectCategory = document.getElementById("projectCategory");
const projectSort = document.getElementById("projectSort");
const projectsGrid = document.getElementById("projectsGrid");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const noResults = document.getElementById("noResults");

function highlightText(text, searchValue) {
  if (!searchValue) return text;

  const escapedValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedValue})`, "gi");

  return text.replace(regex, "<mark>$1</mark>");
}

function updateProjects() {
  if (!projectsGrid || !projectSearch || !projectCategory || !projectSort || !noResults) return;

  const searchValue = projectSearch.value.toLowerCase().trim();
  const selectedCategory = projectCategory.value;
  const selectedSort = projectSort.value;

  let filteredProjects = projectCards.filter((card) => {
    const titleText = card.dataset.title;
    const descriptionText = card.dataset.description;
    const categoryText = card.dataset.category;

    const matchesSearch =
      titleText.toLowerCase().includes(searchValue) ||
      descriptionText.toLowerCase().includes(searchValue);

    const matchesCategory =
      selectedCategory === "all" || categoryText === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (selectedSort === "az") {
    filteredProjects.sort((a, b) =>
      a.dataset.title.localeCompare(b.dataset.title)
    );
  } else if (selectedSort === "za") {
    filteredProjects.sort((a, b) =>
      b.dataset.title.localeCompare(a.dataset.title)
    );
  }

  projectCards.forEach((card) => {
    card.style.display = "none";
  });

  filteredProjects.forEach((card) => {
    const titleText = card.dataset.title;
    const descriptionText = card.dataset.description;

    const titleElement = card.querySelector(".project-title");
    const descriptionElement = card.querySelector(".project-description");

    titleElement.innerHTML = highlightText(titleText, searchValue);
    descriptionElement.innerHTML = highlightText(descriptionText, searchValue);

    card.style.display = "block";
    projectsGrid.appendChild(card);
  });

  noResults.hidden = filteredProjects.length !== 0;
}

if (projectSearch && projectCategory && projectSort) {
  projectSearch.addEventListener("input", updateProjects);
  projectCategory.addEventListener("change", updateProjects);
  projectSort.addEventListener("change", updateProjects);

  updateProjects();
}
/* ========== CONTACT FORM HANDLING ========== */
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  status.textContent = "Message sent (demo)! Thanks for reaching out.";
  status.classList.add("show");

  form.reset();
});
/* ========== QUOTE API INTEGRATION ========== */
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteStatus = document.getElementById("quoteStatus");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function loadQuote() {
  if (!quoteText || !quoteAuthor || !quoteStatus || !newQuoteBtn) return;

  quoteStatus.textContent = "Loading quote...";
  quoteText.textContent = "Loading quote...";
  quoteAuthor.textContent = "";
  newQuoteBtn.disabled = true;

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Failed to fetch quote.");
    }

    const data = await response.json();

    if (!data || !data.quote || !data.author) {
      throw new Error("Invalid quote data.");
    }

    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `— ${data.author}`;
    quoteStatus.textContent = "";
  } catch (error) {
    quoteText.textContent = "Sorry, the quote could not be loaded right now.";
    quoteAuthor.textContent = "";
    quoteStatus.textContent = "Please try again later.";
  } finally {
    newQuoteBtn.disabled = false;
  }
}

if (newQuoteBtn) {
  newQuoteBtn.addEventListener("click", loadQuote);
}

loadQuote();