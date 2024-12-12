async function fetchFolderHierarchy() {
  try {
    const libraryPath = 'https://drive.google.com/drive/folders/1I5OPtzRgSRdRE9qEG2sXeownbAkwUJbO';
    console.log('url is ', libraryPath);
    const folders = await sp.web.getFolderByServerRelativeUrl(libraryPath).folders.get();
    console.log('folders are ', folders);
    return folders.map((folder) => ({ name: folder.Name, url: folder.ServerRelativeUrl }));
  } catch (error) {
    console.error("Error fetching folder hierarchy:", error);
    throw new Error("Unable to fetch folders.");
  }
}

function renderFolderStructure() {
  const contentUrl = 'https://drive.google.com/drive/folders/1I5OPtzRgSRdRE9qEG2sXeownbAkwUJbO';
  console.log('url is ', contentUrl);
  // Logic to load the folder structure from this URL
}

fetchFolderHierarchy();
