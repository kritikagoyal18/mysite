async function fetchAndRenderFstab(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch fstab.yaml: ${response.statusText}`);
    }

    const yamlContent = await response.text();

    const parsedData = jsyaml.load(yamlContent);

    renderFstabToHTML(parsedData);
  } catch (error) {
    console.error("Error fetching and rendering fstab.yaml:", error);
    document.getElementById("fstab-content").textContent =
      "Failed to load fstab.yaml file.";
  }
}

function renderFstabToHTML(data) {
  const container = document.getElementById("fstab-content");

  container.innerHTML = "";

  for (const [key, value] of Object.entries(data)) {
    const section = document.createElement("div");
    section.innerHTML = `<strong>${key}:</strong> ${value.url}`;
    container.appendChild(section);
  }
}

const fstabUrl = "../fstab.yaml";
fetchAndRenderFstab(fstabUrl);
