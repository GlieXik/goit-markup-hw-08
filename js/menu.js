(() => {
    const menuBtnRef = document.querySelector("[data-menu-btn]")
    menuBtnRef.addEventListener("click", () => {
        menuBtnRef.classList.toggle("is-open");
        
    })
})();