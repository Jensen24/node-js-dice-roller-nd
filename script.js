const apiUrl = "https://webdiceroller-b8cfdne0fcdjcuhw.centralus-01.azurewebsites.net/";

// Function to wake up the server (cold start)
async function wakeUpServer() {
    try {
        await fetch(apiUrl);
        console.log("Server warmed up!");
    } catch (error) {
        console.error("Wake-up failed:", error);
    }
}

// Call wake-up function on page load
window.onload = wakeUpServer;

document.getElementById('rollButton').addEventListener('click', async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('diceResult').innerText = `You rolled: ${data.roll}`;
    } catch (error) {
        document.getElementById('diceResult').innerText = "Error fetching dice roll.";
    }
});
