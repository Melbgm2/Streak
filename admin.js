const API_URL = "https://streak-admin.pokemonmaster034.workers.dev/";

async function resetStreak() {

    if (!confirm("Are you sure you want to reset your streak?")) {
        return;
    }

    const msg = document.getElementById("msg");
    msg.textContent = "Resetting streak...";

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            credentials: "include"
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP ${response.status}: ${text}`);
        }

        msg.textContent = "✅ Streak reset successfully.";

        setTimeout(() => {
            window.location.href = "https://melbgm2.github.io/Streak/";
        }, 1500);

    } catch (err) {

        console.error(err);
        msg.textContent = err.message;

    }

}
