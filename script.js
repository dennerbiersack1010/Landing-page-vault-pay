document.addEventListener("DOMContentLoaded", () => {
  console.log("Vault Pay carregado.");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado.");

        registration.update();

        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      })
      .catch((error) => {
        console.log("Erro ao registrar Service Worker:", error);
      });
  }
});
  
