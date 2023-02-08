let script = document.createElement("script");
fetch("https://raw.githubusercontent.com/CommandMaster64/Blooket-Bot/main/Blooketbot.js").then(response => response.text()).then(data => {
    script.innerHTML = data.replaceAll("\n", "").replaceAll("  ", " ");
});
document.body.appendChild(script);
setTimeout(() => { thing(); }, 20);
