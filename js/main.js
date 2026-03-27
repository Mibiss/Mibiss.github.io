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
