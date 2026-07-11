const API_URL = "https://streak-admin.pokemonmaster034.workers.dev/";

async function resetStreak() {

    const confirmed = confirm(
        "Are you sure you want to reset your streak?\n\nThis cannot be undone."
    );

    if (!confirmed) return;

    const msg = document.getElementById("msg");

    msg.textContent = "Resetting streak...";

    try {

        const response = await fetch(API_URL, {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error();
        }

        msg.textContent = "✅ Streak reset successfully.";

        setTimeout(() => {
            window.location.href = "https://melbgm2.github.io/Streak/";
        }, 1500);

    } catch (e) {

        msg.textContent = "❌ Unable to reset streak.";

    }

}
