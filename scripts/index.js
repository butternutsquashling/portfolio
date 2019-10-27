let currentPage = "name";
let displayVegan = false;

function toggleClass(name, style, eventType) {
  if (eventType === "add") {
    document.getElementById(name).classList.add(style);
  } else {
    document.getElementById(name).classList.remove(style);
  }
}

function toggleAbout() {
  if (currentPage === "name") {
    currentPage = "about";
    toggleClass("button-tldr", "highlight", "add");
    toggleClass("name-details-container", "hide-details", "add");
    toggleClass("name-details-container", "show-details", "remove");
    toggleClass("about-details-container", "hide-details", "remove");
    toggleClass("about-details-container", "show-details", "add");
  } else if (currentPage === "projects") {
    currentPage = "about";
    toggleClass("button-projects", "highlight", "remove");
    toggleClass("button-tldr", "highlight", "add");
    toggleClass("about-details-container", "hide-details", "remove");
    toggleClass("about-details-container", "show-details", "add");
    toggleClass("project-details-container", "hide-details", "add");
    toggleClass("project-details-container", "show-details", "remove");
  } else {
    currentPage = "name";
    toggleClass("button-tldr", "highlight", "remove");
    toggleClass("name-details-container", "hide-details", "remove");
    toggleClass("name-details-container", "show-details", "add");
    toggleClass("about-details-container", "hide-details", "add");
    toggleClass("about-details-container", "show-details", "remove");
  }
}

function toggleProjects() {
  if (currentPage === "name") {
    currentPage = "projects";
    toggleClass("button-projects", "highlight", "add");
    toggleClass("name-details-container", "hide-details", "add");
    toggleClass("name-details-container", "show-details", "remove");
    toggleClass("project-details-container", "hide-details", "remove");
    toggleClass("project-details-container", "show-details", "add");
  } else if (currentPage === "about") {
    currentPage = "projects";
    toggleClass("button-tldr", "highlight", "remove");
    toggleClass("button-projects", "highlight", "add");
    toggleClass("project-details-container", "hide-details", "remove");
    toggleClass("project-details-container", "show-details", "add");
    toggleClass("about-details-container", "hide-details", "add");
    toggleClass("about-details-container", "show-details", "remove");
  } else {
    currentPage = "name";
    toggleClass("button-projects", "highlight", "remove");
    toggleClass("name-details-container", "hide-details", "remove");
    toggleClass("name-details-container", "show-details", "add");
    toggleClass("project-details-container", "hide-details", "add");
    toggleClass("project-details-container", "show-details", "remove");
  }
}

document.getElementById("button-tldr").addEventListener("click", toggleAbout);
document
  .getElementById("button-projects")
  .addEventListener("click", toggleProjects);
