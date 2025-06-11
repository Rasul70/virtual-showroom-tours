
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".grid");

  async function fetchFolders() {
    const response = await fetch(window.location.href);
    const text = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(text, "text/html");
    const links = Array.from(html.querySelectorAll("a"));
    return links
      .map(link => link.getAttribute("href"))
      .filter(href => href && !href.startsWith("?") && href.endsWith("/"));
  }

  const folders = await fetchFolders();

  for (const folder of folders) {
    const name = folder.replace(/\/$/, '');
    const logo = `logos/${name}.jpg`;
    const tourUrl = `${name}/index.html`;
    let label = name;

    try {
      const meta = await fetch(`${name}/meta.txt`);
      label = await meta.text();
    } catch (_) {}

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="${tourUrl}" target="_blank">
        <img src="${logo}" alt="${label}">
        <p>${label}</p>
      </a>`;
    container.appendChild(card);
  }
});
