// Categories Section Scripts
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

// Scroll Arrows Logic
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

categoriesWrapper.addEventListener('scroll', () => {

    const scrollLeft = categoriesWrapper.scrollLeft;
    const scrollWidth = categoriesWrapper.scrollWidth;
    const clientWidth = categoriesWrapper.clientWidth;
    const minScroll = clientWidth - scrollWidth;

    if (scrollLeft <= minScroll + 20) {
        arrowLeft.style.fill = 'var(--Primary)';
        arrowRight.style.fill = 'var(--Tint3)';
    } else if (scrollLeft >= -20) {
        arrowRight.style.fill = 'var(--Primary)';
        arrowLeft.style.fill = 'var(--Tint3)';
    } else {
        arrowLeft.style.fill = 'var(--Primary)';
        arrowRight.style.fill = 'var(--Primary)';

    }
})

const categoryWidth = document.querySelector('.category').clientWidth;

arrowLeft.addEventListener('click', () => {
    categoriesWrapper.scrollBy({
        left: categoryWidth,
        behavior: 'smooth'
    });
})
arrowRight.addEventListener('click', () => {
    categoriesWrapper.scrollBy({
        left: -categoryWidth,
        behavior: 'smooth'
    });
})

// Best Seller Section Scripts
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
    bestSelller.setAttribute('data-liked', 'false');
    bestSelllerImg.className = 'best-seller__img';
    bestSelllerImg.src = p.src;
    bestSelllerTitle.className = 'best-seller__title';
    bestSelllerTitle.textContent = p.title;
    bestSelllerIcon.className = 'best-seller__icon';
    bestSelllerIcon.src = 'assets/icons/heart.svg';
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
        let isLiked = bestSelller.dataset.liked === 'true';

        isLiked = !isLiked;
        bestSelller.dataset.liked = String(isLiked);

        bestSelllerIcon.src = isLiked
            ? 'assets/icons/Like.svg'
            : 'assets/icons/heart.svg';

    });

})

// Popular Designs Section
const popularDesignsWrapper = document.querySelector('.popular-designs__wrapper');
const popularDesigns = [
    { src: 'assets/images/popular-design1.png', title: 'استیکر', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design2.png', title: 'استیکر', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design3.png', title: 'استیکر', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design4.png', title: 'بک گراند قاب موبایل  ', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design5.png', title: 'استیکر', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design6.png', title: 'تصویر آفتابگردان', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design7.png', title: 'استیکر', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
    { src: 'assets/images/popular-design8.png', title: 'استیکر حروف', caption: 'قابل طراحی و چاپ بر روی انواع محصولات' },
];

popularDesigns.forEach(d => {
    const popularDesign = document.createElement('div');
    const popularDesignImg = document.createElement('img');
    const popularDesignTitle = document.createElement('h6');
    const popularDesignIcon = document.createElement('img');
    const popularDesignCaption = document.createElement('p');
    const popularDesignBtn = document.createElement('button');
    const popularDesignBtnText = document.createElement('span');
    const popularDesignBtnIcon = document.createElement('img');

    popularDesign.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'popular-design');
    popularDesign.setAttribute('data-liked', 'false');
    popularDesign.setAttribute('data-saved', 'false');
    popularDesignImg.className = 'popular-design__img';
    popularDesignImg.src = d.src;
    popularDesignTitle.className = 'popular-design__title';
    popularDesignTitle.textContent = d.title;
    popularDesignIcon.className = 'popular-design__icon';
    popularDesignIcon.src = 'assets/icons/heart.svg';
    popularDesignCaption.className = 'popular-design__caption';
    popularDesignCaption.textContent = d.caption;
    popularDesignBtn.className = 'popular-design__btn';
    popularDesignBtnText.textContent = 'افزودن به گالری'
    popularDesignBtnIcon.className = 'popular-design__btn-icon'
    popularDesignBtnIcon.src = 'assets/icons/gallery-add.svg';

    popularDesignsWrapper.appendChild(popularDesign);
    popularDesign.appendChild(popularDesignImg);
    popularDesign.appendChild(popularDesignTitle);
    popularDesignTitle.appendChild(popularDesignIcon);
    popularDesign.appendChild(popularDesignCaption);
    popularDesign.appendChild(popularDesignBtn);
    popularDesignBtn.appendChild(popularDesignBtnText);
    popularDesignBtn.appendChild(popularDesignBtnIcon);

    popularDesignIcon.addEventListener('click', () => {
        let isLiked = popularDesign.dataset.liked === 'true';

        isLiked = !isLiked;
        popularDesign.dataset.liked = String(isLiked);

        popularDesignIcon.src = isLiked
            ? 'assets/icons/Like.svg'
            : 'assets/icons/heart.svg';

    });

    popularDesignBtn.addEventListener('click', () => {
        let isSaved = popularDesign.dataset.saved === 'true';

        isSaved = !isSaved;
        popularDesign.dataset.saved = String(isSaved);

        if (isSaved) {
            popularDesignBtnText.textContent = 'ذخیره شده';
            popularDesignBtnIcon.src = 'assets/icons/gallery-tick.svg';
            popularDesignBtn.classList.add('popular-design__btn--saved');
        } if (!isSaved) {
            popularDesignBtnText.textContent = 'افزودن به گالری'
            popularDesignBtnIcon.src = 'assets/icons/gallery-add.svg';
            popularDesignBtn.classList.remove('popular-design__btn--saved');
        }

    });


});