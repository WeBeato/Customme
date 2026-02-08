import { toggleMenu } from "./MobileMenu.js";

export function renderMobileNav() {
    // Get Elements
    const header = document.querySelector("header");

    // Create Elements
    const mobileNav = document.createElement("nav");
    const container = document.createElement("div");
    const mobileNavWrapper = document.createElement("div");

    const navToggleIcon = document.createElement("div");
    const navToggleLine = document.createElement("div");

    const mobileSearchBox = document.createElement("div");
    const mobileSearchInput = document.createElement("input");
    const mobilePlaceholderText = document.createElement("span");
    const mobilePlaceholderIcon = document.createElement("img");
    const mobileSearchIcon = document.createElement("img");

    const mobileNavLogo = document.createElement("a");
    const mobileNavLogoImg = document.createElement("img");


    // Set Attributes
    mobileNav.className = "mobilenav";
    container.className = "container";
    mobileNavWrapper.className = "mobilenav__wrapper";

    navToggleIcon.className = "nav__toggle-icon";
    navToggleLine.className = "nav__toggle-line";

    mobileSearchBox.className = "mobilenav__search-box";
    mobileSearchInput.className = "mobilenav__search-input";
    mobilePlaceholderText.className = "mobilenav__placeholder-text";
    mobilePlaceholderText.id = "searchInputText";
    mobilePlaceholderText.textContent = "جستجو در";
    mobilePlaceholderIcon.className = "mobilenav__placeholder-icon";
    mobilePlaceholderIcon.id = "searchInputIcon";
    mobilePlaceholderIcon.src = "assets/icons/placeholder-icon.svg";
    mobileSearchIcon.className = "mobilenav__search-icon";
    mobileSearchIcon.src = "assets/icons/search-normal.svg";

    mobileNavLogo.className = "mobilenav__logo";
    mobileNavLogo.href = "index.html";
    mobileNavLogoImg.src = "assets/images/LOGO-Mobile.png";

    // Append Children
    header.appendChild(mobileNav);
    mobileNav.appendChild(container);
    container.appendChild(mobileNavWrapper);
    mobileNavWrapper.appendChild(navToggleIcon);
    mobileNavWrapper.appendChild(mobileSearchBox);
    mobileNavWrapper.appendChild(mobileNavLogo);

    navToggleIcon.appendChild(navToggleLine);

    mobileSearchBox.appendChild(mobileSearchInput);
    mobileSearchBox.appendChild(mobilePlaceholderText);
    mobileSearchBox.appendChild(mobilePlaceholderIcon);
    mobileSearchBox.appendChild(mobileSearchIcon);


    mobileNavLogo.appendChild(mobileNavLogoImg);

}

// Menu Controller
export function initNav() {
    const btn = document.querySelector(".nav__toggle-icon");

    btn.addEventListener('click', () => {
        toggleMenu();
    });
}

