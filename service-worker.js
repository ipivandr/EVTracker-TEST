self.addEventListener("instal", () => {
    self.skipWaiting();
});
self.addEventListener("activate", () => {
    clients.claim();
});