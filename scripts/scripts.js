document.addEventListener("click", e => {
    if (e.target === document.getElementById("arrow-list") || e.target.matches("#navbar *")) {
        document.getElementById("navbar").classList.toggle("display");
    };
});