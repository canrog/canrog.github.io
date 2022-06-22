const navbarMenu = document.querySelector("navbar-menu");
const navtoggle = document.querySelectorAll(".mobile-menu-toggle");

navtoggle.addEventListener('click', () => {
    const visibility = navbarMenu.getAttribute('data-visible');

    if (visibility === "false") {
        navbarMenu.setAttribute('data-visible', true);
        navtoggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        navbarMenu.setAttribute("data-visible", false);
        navtoggle.setAttribute("aria-expanded", false);
    }
    console.log(visibility);
})