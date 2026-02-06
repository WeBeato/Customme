export function renderNavbar() {
    // Get Elements
    const header = document.querySelector("header");

    // Create Elements
    const nav = document.createElement("nav");
    const container = document.createElement("div");
    const navWrapper = document.createElement("div");

    const navLogo = document.createElement("a");
    const navLogoImg = document.createElement("img");

    const navSearchBox = document.createElement("div");
    const searchInput = document.createElement("input");
    const searchIcon = document.createElement("img");

    const navButtons = document.createElement("div");
    const loginBtn = document.createElement("a");
    const loginBtnIcon = document.createElement("img");
    const cartBtn = document.createElement("a");
    const cartBtnIcon = document.createElement("img");
    const cartBtnNum = document.createElement("span");

    // Set Attributes
    nav.className = "nav";
    container.className = "container";
    navWrapper.className = "nav__wrapper";

    navLogo.className = "nav__logo";
    navLogo.href = "../index.html";
    navLogoImg.src = "../assets/images/logo.png";

    navSearchBox.className = "nav__search-box";

    searchInput.className = "nav__search-input";
    searchInput.placeholder = "جستجو";

    searchIcon.className = "nav__search-icon";
    searchIcon.src = "../assets/icons/search-normal.svg";

    navButtons.className = "nav__buttons";

    loginBtn.className = "nav__login";
    loginBtn.textContent = "ورود | ثبت نام";
    loginBtn.href = "#";
    loginBtnIcon.className = "nav__login-icon";
    loginBtnIcon.src = "../assets/icons/login.svg";

    cartBtn.className = "nav__cart";
    cartBtn.textContent = "سبد خرید";
    cartBtn.href = "#";
    cartBtnIcon.className = "nav__cart-icon";
    cartBtnIcon.src = "../assets/icons/shopping-cart.svg";

    cartBtnNum.className = "nav__cart-num";
    cartBtnNum.textContent = "۰";

    // Append Children
    header.appendChild(nav);
    nav.appendChild(container);
    container.appendChild(navWrapper);

    navWrapper.appendChild(navLogo);
    navWrapper.appendChild(navSearchBox);
    navWrapper.appendChild(navButtons);

    navLogo.appendChild(navLogoImg);

    navSearchBox.appendChild(searchInput);
    navSearchBox.appendChild(searchIcon);

    navButtons.appendChild(loginBtn);
    loginBtn.appendChild(loginBtnIcon);
    navButtons.appendChild(cartBtn);
    cartBtn.appendChild(cartBtnIcon);
    cartBtn.appendChild(cartBtnNum);
}