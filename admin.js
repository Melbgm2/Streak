const API_URL = "https://streak-admin.pokemonmaster034.workers.dev/";

async function login() {
    if (!confirm("Reset the streak to the current time?")) {
        return;
    }

    const msg = document.getElementById("msg");
    msg.textContent = "Resetting...";

    try {
        const response = await fetch(API_URL, {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        msg.textContent = "✅ Streak reset successfully.";

        setTimeout(() => {
            window.location.href = "https://melbgm2.github.io/Streak/";
        }, 1500);

    } catch (err) {
        msg.textContent = "❌ Reset failed.";
        console.error(err);
    }
}
