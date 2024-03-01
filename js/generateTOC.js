document.addEventListener("DOMContentLoaded", () => {
  // Title for the table of contents
  const contentsTitle = "Table of Contents";
  // Array to store the HTML elements for the table of contents
  const ToC = [
    `
<nav role="navigation" id="" class="card bg-primary bg-opacity-10 text-left">
    <figcaption class="card-header bg-gradient">
      <h2 class=" card-title text-center">${contentsTitle}</h2>
    </figcaption><ul class="vstack list-group-flush bg-body-secondary bg-opacity-50 rounded-bottom border py-2">`
  ];

  // Select the <article> element
  const main = document.querySelector("main");
  // Find the first <h2> element within the <article>
  const firstH2 = main.querySelector("h2");

  // Create a container for the table of contents
  const tocContainer = document.createElement("figure");
  tocContainer.id = "table-of-contents";

  // If there's an <h2> element, insert the ToC container before it
  if (firstH2)
  {
    firstH2.parentNode.insertBefore(tocContainer, firstH2);
  } else
    // If there's no <h2>, but an <article>, append the ToC container to it
    if (article)
    {
      article.appendChild(tocContainer);
    }
  // Find all <h2>, <h3>, <h4>, and <h5> elements within the <article>
  const headers = main.querySelectorAll("h1,h2,h3,h4,h5,h6");

  // Define font sizes for each heading level
  const fontSizeMap = {
    h1: "1.3em",
    h2: "1.1em",
    h3: "0.9em",
    h4: "0.7em",
    h5: "0.6em"
  };

  // Iterate over each heading and generate table of contents entries
  headers.forEach((header) => {
    let title = header.textContent;
    let link;

    // Check if the heading has an id, if not, add one
    if (!header.id)
    {
      // Create an id based on the heading text
      const id = title.toLowerCase().replace(/\s+/g, "-");
      // Set the id on the heading element
      header.id = id;
    }

    // Now, use the dynamically assigned id for the link
    link = "#" + header.id;

    // Get the heading level (e.g., 'h2', 'h3')
    const level = header.nodeName.toLowerCase();
    // Get the font size from the map, or default to '1em'
    const fontSize = fontSizeMap[level] || "1em";
    // Calculate margin for indentation (except for h1)
    const margin = level === "h1" ? "" : `${(+header.nodeName[1] - 1) * 2}em`;

    // Create a table of contents entry with dynamically set font size and margin
    ToC.push(
      `<li class="list-group-item p-1" style="margin-left:${margin}; font-size:${fontSize}"><a href="${link}">${title}</a></li>`
    );
  });

  // Close the table of contents HTML structure
  ToC.push("</ul></nav>", "<style>#table-of-contents { width: 100%; }</style>");

  // Insert the table of contents into the container
  const tocDiv = document.getElementById("table-of-contents");
  if (tocDiv)
  {
    tocDiv.innerHTML = ToC.join("");
  }
});
