document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll("nav li");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "inicio";

        // 🔹 Detectar INICIO cuando estás arriba
        if (window.scrollY < 150) {
            current = "inicio";
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
        }

        navItems.forEach(li => {
            li.classList.remove("active");
            const link = li.querySelector("a");
            if (link.getAttribute("href") === `#${current}`) {
                li.classList.add("active");
            }
        });
    });

});
