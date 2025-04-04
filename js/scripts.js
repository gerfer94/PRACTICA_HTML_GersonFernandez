document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Solo interceptamos enlaces internos que empiezan con #
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const linterna = document.createElement("div");
    linterna.classList.add("lintern-effect");
    document.body.appendChild(linterna);

    document.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        linterna.style.background = `radial-gradient(circle 160px at ${x}px ${y}px, rgba(88, 120, 224, 0.3), transparent)`;
    });
});



