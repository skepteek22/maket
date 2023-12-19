document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("dark-bg");
            header.classList.remove("transparent-bg");
        } else {
            header.classList.remove("dark-bg");
            header.classList.add("transparent-bg");
        }
    });
});
