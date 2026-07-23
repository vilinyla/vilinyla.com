const links = document.querySelectorAll(".glass-link");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        if (this.getAttribute("href") === "#") {
            event.preventDefault();
            alert(`${this.textContent} clicked`);
        }
    });
});