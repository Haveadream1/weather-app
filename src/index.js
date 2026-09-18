import "./style.css";
import initializeWebsite from "./home";

initializeWebsite();

// Service worker registration
// Middleware between the PWA and the servers it interacts
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .catch((err) => console.error("SW registration failed:", err));
    })
}