export function renderDesktopMenu() {
    // Get Element
    const header = document.querySelector("header");

    // Create Elements
    const mainMenu = document.createElement("div");
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    const menuBtn = document.createElement("a");
    const menuBtnIcon = document.createElement("img");
    const menu = document.createElement("ul");

    const menuItems = [
        { lable: "پوشاک", type:"clothing" },
        { lable: "لوازم خانه", type:"household-appliances" },
        { lable: "قاب موبایل", type:"mobile-frame" },
        { lable: "اکسسوری", type:"accessory" },
        { lable: "مدرسه و اداره", type:"office" },
        { lable: "کارت و پوستر", type:"card" },
        { lable: "جشن و مهمانی", type:"party" }
    ];
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.className = "menu__item";
        li.textContent = item.lable;

        menu.appendChild(li);
    });

    // Set Attributes
    mainMenu.className = "mainmenu";
    container.className = "container";
    wrapper.className = "menu__wrapper"
    menu.className = "menu";

    menuBtn.className = "menu__btn";
    menuBtn.textContent = "خودت طراحیش کن !";
    menuBtn.href = "#"
    menuBtnIcon.className = "menu__btn-icon";
    menuBtnIcon.src = "../assets/icons/magicpen.svg";


    // Append Cheldren
    header.appendChild(mainMenu);
    mainMenu.appendChild(container);
    container.appendChild(wrapper);
    wrapper.appendChild(menuBtn)
    menuBtn.appendChild(menuBtnIcon);
    wrapper.appendChild(menu);
}