const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigator = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", (e) => {
    if (primaryNavigator.dataset.visible === "true") {

        primaryNavigator.dataset.visible = "false";
        navToggle.dataset.ariaExpanded = "false";
    } else {
        primaryNavigator.dataset.visible = "true";
        navToggle.dataset.ariaExpanded = "true";

    }
})