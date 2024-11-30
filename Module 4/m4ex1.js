document.getElementById("search-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const query = document.getElementById("query").value.trim(); // Get the query from the input
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (!query) return; // Exit if input is empty

  try {
    // Fetch TV series data from the TVMaze API
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error("Failed to fetch data");
    const results = await response.json();

    if (results.length === 0) {
      resultsDiv.textContent = "No results found.";
      return;
    }

    results.forEach(tvShow => {
      const { show } = tvShow;

      // Create an article for each TV show
      const article = document.createElement("article");

      // Add show name
      const title = document.createElement("h2");
      title.textContent = show.name;

      // Add link to details
      const link = document.createElement("a");
      link.href = show.url;
      link.target = "_blank";
      link.textContent = "More details";

      // Add show image
      const img = document.createElement("img");
      img.src = show.image?.medium || "https://via.placeholder.com/210x295?text=Not%20Found";
      img.alt = show.name;

      // Add show summary
      const summary = document.createElement("div");
      summary.innerHTML = show.summary || "No summary available.";

      // Append elements to the article
      article.appendChild(title);
      article.appendChild(link);
      article.appendChild(img);
      article.appendChild(summary);

      // Append article to the results div
      resultsDiv.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching TV series data:", error);
    resultsDiv.textContent = "Failed to load results. Please try again later.";
  }
});
