
function setExternalLinks() {
  document
    .querySelectorAll('a[href^="http://"], a[href^="https://"]')
    .forEach((link) => {
      if (link.hostname !== window.location.hostname) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
}

// Initial page load
setExternalLinks();

// Astro/Starlight client-side navigation
document.addEventListener('astro:page-load', setExternalLinks);
