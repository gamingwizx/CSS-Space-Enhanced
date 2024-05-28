const tabList = document.querySelector('[role="tabList"]')
const tabs = document.querySelectorAll('[role="tab"]')

let tabIndex = 0;

tabList.addEventListener("keydown", (e) => {
    const leftClick = 37
    const rightClick = 39

    if (e.keyCode === rightClick) {
        tabIndex++;
        if (tabIndex >= tabs.length) {tabIndex = 0}
    }
    if (e.keyCode === leftClick) {
        tabIndex--;
        if (tabIndex < 0) {tabIndex = tabs.length - 1}
    }
    tabs[tabIndex].focus();

})


tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {

        const targetPanelId = e.target.getAttribute("aria-controls");
        const targetImageId = e.target.getAttribute("data-image"); 

        const previousTab = e.target.parentNode.querySelector('[aria-selected="true"]');
        
        previousTab.setAttribute("aria-selected", false);
        previousTab.setAttribute("tabindex", -1)

        e.target.setAttribute("aria-selected", true);
        e.target.setAttribute("tabindex", 0);
        
        removeContent('picture');
        removeContent('[role="tabpanel"]');
        showContent(`#${targetPanelId}`);
        showContent(`#${targetImageId}`);
    })

})

function showContent(element) {
    console.log(element)
    document.querySelector(element).removeAttribute("hidden");
}

function removeContent(element) {
    document.querySelectorAll(element).forEach(content => {
        console.log(element.dataset)
         content.setAttribute("hidden", true);
    })
}