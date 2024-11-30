document.getElementById("search-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const query = document.getElementById("query").value.trim();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!query) return;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    const results = await response.json();

    if (results.length === 0) {
      resultsDiv.textContent = "No results found.";
      return;
    }

    results.forEach(tvShow => {
      const { show } = tvShow;
      const article = document.createElement("article");
      const title = document.createElement("h2");
      title.textContent = show.name;
      const link = document.createElement("a");
      link.href = show.url;
      link.target = "_blank";
      link.textContent = "More details";
      const img = document.createElement("img");
      img.src = show.image?.medium || "https://via.placeholder.com/210x295?text=Not%20Found";
      img.alt = show.name;
      const summary = document.createElement("div");
      summary.innerHTML = show.summary || "No summary available.";
      article.appendChild(title);
      article.appendChild(link);
      article.appendChild(img);
      article.appendChild(summary);
      resultsDiv.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching TV series data:", error);
    resultsDiv.textContent = "Failed to load results. Please try again later.";
  }
});
