document.addEventListener("DOMContentLoaded", () => {
  console.log("Vault Pay carregado.");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service Worker registrado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao registrar Service Worker:", error);
      });
  }
});
