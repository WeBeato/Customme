const categoriesWrapper = document.querySelector(".categories__wrapper");
const categories = [
    { title: "قاب موبایل", src: "assets/images/mobile.png" },
    { title: "کارت تبریک", src: "assets/images/card.png" },
    { title: "اکسسوری", src: "assets/images/accessory.png" },
    { title: "لوازم تحریر", src: "assets/images/stationery.png" },
    { title: "لباس", src: "assets/images/dress.png" },
    { title: "دکور خانه", src: "assets/images/decor.png" }
];

categories.forEach(category => {
    const categoryCard = document.createElement('div');
    const categoryImg = document.createElement('img');
    const categoryTitle = document.createElement('p');

    categoryCard.className = 'category';
    categoryImg.className = "category__img";
    categoryImg.src = category.src;
    categoryTitle.className = 'Category__title';
    categoryTitle.textContent = category.title;

    categoriesWrapper.appendChild(categoryCard);
    categoryCard.appendChild(categoryImg);
    categoryCard.appendChild(categoryTitle);

});
