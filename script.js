document.addEventListener("DOMContentLoaded", () => {
  console.log("Vault Pay carregado sem PWA.");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });

        console.log("PWA removido. Service Workers antigos desativados.");
      })
      .catch((error) => {
        console.log("Erro ao remover Service Worker:", error);
      });
  }

  if ("caches" in window) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });

      console.log("Caches antigos apagados.");
    });
  }
});
