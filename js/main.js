// Wake Render services in the background on portfolio load
(function wakeServices() {
  const services = [
    'https://legesystem.onrender.com',
    'https://blog-web-app-y3wl.onrender.com'
  ];
  services.forEach(function(url) {
    fetch(url, { mode: 'no-cors' }).catch(function() {});
  });
})();

async function loadPartial(elementId, file) {
  const response = await fetch(file);

  if (!response.ok) {
    throw new Error(`Could not load ${file}`);
  }

  const html = await response.text();
  document.getElementById(elementId).innerHTML = html;
}

loadPartial("navbar-partial", "partials/navbar.html");
loadPartial("homepulse-partial", "partials/homepulse.html");
loadPartial("ai-competition-partial", "partials/ai-competition.html");
loadPartial("contact-partial", "./partials/contact.html");
loadPartial("footer-partial", "partials/footer.html");