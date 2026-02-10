export function renderMobileMenu() {
    // Get Elements
    const header = document.querySelector("header");

    // Create Elements
    const mobileMenuWrapper = document.createElement("div");
    const mobileMenu = document.createElement("ul");

    const mobileMenuItems = [
        { lable: "پوشاک", type: "clothing" },
        { lable: "لوازم خانه", type: "household-appliances" },
        { lable: "قاب موبایل", type: "mobile-frame" },
        { lable: "اکسسوری", type: "accessory" },
        { lable: "مدرسه و اداره", type: "office" },
        { lable: "کارت و پوستر", type: "card" },
        { lable: "جشن و مهمانی", type: "party" }
    ];
    mobileMenuItems.forEach(item => {
        const li = document.createElement("li");
        const icon = document.createElement("img");

        li.className = "mobilemenu__item";
        li.textContent = item.lable;
        icon.className = "mobilemenu__icon";
        icon.src = "assets/icons/arrow-left.svg";

        mobileMenu.appendChild(li);
        li.appendChild(icon);
    });

    const secondMobileMenu = document.createElement("ul");

    const secondMobileMenuItems = [
        { lable: "همراه با کاستومی" },
        { lable: "خدمات مشتریان" },
        { lable: "راهنمای خرید" }
    ];
    secondMobileMenuItems.forEach(item => {
        const li = document.createElement("li");
        const icon = document.createElement("img");

        li.className = "mobilemenu__item";
        li.textContent = item.lable;
        icon.className = "mobilemenu__icon";
        icon.src = "assets/icons/menu-arrow-left.svg";

        secondMobileMenu.appendChild(li);
        li.appendChild(icon);
    });

    const overlay = document.createElement("div");

    // Set Attributes
    mobileMenuWrapper.className = "mobilemenu__wrapper";
    mobileMenu.className = "mobilemenu";
    secondMobileMenu.className = "second-mobilemenu";
    overlay.className = "overlay";

    // Append Children
    header.appendChild(mobileMenuWrapper);
    header.appendChild(overlay);
    mobileMenuWrapper.appendChild(mobileMenu);
    mobileMenuWrapper.appendChild(secondMobileMenu);


}

// Menu API
let isOpen = false;
let menuEl = null;
let overlay = null;

export function initMenu() {
    menuEl = document.querySelector(".mobilemenu__wrapper");
    overlay = document.querySelector(".overlay");
    overlay.addEventListener('click', () => {
        closeMenu();
    })
}
export function openMenu() {
    if (!menuEl) return;
    isOpen = true;
    menuEl.classList.add("mobilemenu__wrapper--open");
    overlay.classList.add("overlay--show");
}
export function closeMenu() {
    if (!menuEl) return;
    isOpen = false;
    menuEl.classList.remove("mobilemenu__wrapper--open");
    overlay.classList.remove("overlay--show");
}
export function toggleMenu() {
    isOpen ? closeMenu() : openMenu();
}
