const target = document.querySelector("section");
const picArray = [
  {
    title: "Title 1",
    medium_image: "path_to_image_1.jpg",
    caption: "Caption 1",
    description: "Description 1"
  },
  {
    title: "Title 2",
    medium_image: "path_to_image_2.jpg",
    caption: "Caption 2",
    description: "Description 2"
  }
];

picArray.forEach(pic => {
  const article = document.createElement("article");
  article.classList.add("card");

  article.innerHTML = `
    <h2>${pic.title}</h2>
    <figure>
      <img src="${pic.medium_image}" alt="${pic.title}">
      <figcaption>${pic.caption}</figcaption>
    </figure>
    <p>${pic.description}</p>
  `;
  target.appendChild(article);
});
