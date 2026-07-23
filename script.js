const links = document.querySelectorAll(".glass-link");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        if (this.getAttribute("href") === "#") {
            event.preventDefault();
            alert(`${this.textContent.trim()} clicked`);
        }
    });
});


const toggle = document.getElementById("themeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        toggle.textContent = 
            document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";
    });
}