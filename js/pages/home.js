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

const bestSellersWrapper = document.querySelector('.best-sellers__wrapper');
const bestSellers = [
    { src: 'assets/images/img-3.png', title: 'تیشرت زنانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img-2.png', title: 'تیشرت مردانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img-1.png', title: 'قاب موبایل آیفون', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img.png', title: 'کلاه مردانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img-7.png', title: 'کلاه قابل طراحی', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img-6.png', title: 'باکس غذا', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img-5.png', title: 'ماگ سرامیکی', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/img-4.png', title: 'دفتر سیمی', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
];


bestSellers.forEach(p => {
    const bestSelller = document.createElement('div');
    const bestSelllerImg = document.createElement('img');
    const bestSelllerTitle = document.createElement('h6');
    const bestSelllerIcon = document.createElement('img');
    const bestSelllerCaption = document.createElement('p');
    const bestSelllerPrice = document.createElement('h6');

    bestSelller.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'best-seller');
    bestSelllerImg.className = 'best-seller__img';
    bestSelllerImg.src = p.src;
    bestSelllerTitle.className = 'best-seller__title';
    bestSelllerTitle.textContent = p.title;
    bestSelllerIcon.className = 'best-seller__icon';
    bestSelllerIcon.src = 'assets/icons/heart.svg';
    bestSelllerIcon.setAttribute('data-liked', 'false');
    bestSelllerCaption.className = 'best-seller__caption';
    bestSelllerCaption.textContent = p.caption;
    bestSelllerPrice.className = 'best-seller__price';
    bestSelllerPrice.textContent = p.price.toLocaleString('fa', 'IR') + ' تومان';

    bestSellersWrapper.appendChild(bestSelller);
    bestSelller.appendChild(bestSelllerImg);
    bestSelller.appendChild(bestSelllerTitle);
    bestSelllerTitle.appendChild(bestSelllerIcon);
    bestSelller.appendChild(bestSelllerCaption);
    bestSelller.appendChild(bestSelllerPrice);

    bestSelllerIcon.addEventListener('click', () => {
        let isLiked = bestSelllerIcon.dataset.liked ==='true';

        isLiked = !isLiked;
        bestSelllerIcon.dataset.liked = String(isLiked);

        bestSelllerIcon.src =  isLiked
                ? 'assets/icons/Like.svg'
                : 'assets/icons/heart.svg';

    });

})