function toggleMenu() {
  const menu = document.querySelector("#mobile-menu");
  menu.classList.toggle("open");
}

async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}

loadComponent("header", "header.html");
loadComponent("hero", "Herosection.html");
loadComponent("about", "Aboutsection.html");
loadComponent("services", "Servicesection.html");
loadComponent("projects", "Projectsection.html");
loadComponent("integration", "Integrationsection.html");
loadComponent("journey", "Journeysection.html");
loadComponent("work", "Worksection.html");
loadComponent("contact", "Contactsection.html");
loadComponent("footer", "Footer.html");