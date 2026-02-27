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

// Designers Section
const designersWrapper = document.querySelector('.designers__wrapper');
const designers = [
    { profile: 'assets/images/Profile-1.png', name: 'نگار زمانی', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample1.png', sample2: 'assets/images/sample2.png', sample3: 'assets/images/sample3.png' },
    { profile: 'assets/images/Profile-2.png', name: 'شهرام طالبی', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample4.png', sample2: 'assets/images/sample5.png', sample3: 'assets/images/sample6.png' },
    { profile: 'assets/images/Profile-3.png', name: 'سارا محمدی', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample7.png', sample2: 'assets/images/sample8.png', sample3: 'assets/images/sample9.png' },
    { profile: 'assets/images/Profile-4.png', name: 'آرش نظری', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample10.png', sample2: 'assets/images/sample11.png', sample3: 'assets/images/sample12.png' },
    { profile: 'assets/images/Profile-5.png', name: 'سمانه جوادی', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample13.png', sample2: 'assets/images/sample14.png', sample3: 'assets/images/sample15.png' },
    { profile: 'assets/images/Profile-6.png', name: 'سعید سلیمی', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample16.png', sample2: 'assets/images/sample17.png', sample3: 'assets/images/sample18.png' },
    { profile: 'assets/images/Profile-7.png', name: 'مرجان جعفری', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample19.png', sample2: 'assets/images/sample20.png', sample3: 'assets/images/sample21.png' },
    { profile: 'assets/images/Profile-8.png', name: 'نیلوفر کریمی', followers: 400, designs: 56, sales: 370, sample1: 'assets/images/sample22.png', sample2: 'assets/images/sample23.png', sample3: 'assets/images/sample24.png' }
];

designers.forEach(d => {
    const designer = document.createElement('div');
    const designerProfileBg = document.createElement('div');
    const designerProfile = document.createElement('img');
    const designerName = document.createElement('p');
    const designerInfo = document.createElement('div');
    const designerFollowers = document.createElement('p');
    const designerInfoLine1 = document.createElement('div');
    const designerDesigns = document.createElement('p');
    const designerInfoLine2 = document.createElement('div');
    const designerSales = document.createElement('p');
    const designerSamples = document.createElement('div');
    const designerSample1 = document.createElement('img');
    const designerSample2 = document.createElement('img');
    const designerSample3 = document.createElement('img');
    const designerBtn = document.createElement('button');
    const designerBtnText = document.createElement('span');
    const designerBtnIcon = document.createElement('img');

    designer.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'designer');
    designer.setAttribute('data-followed', 'false');
    designerProfileBg.className = 'designer__profile-bg';
    designerProfile.className = 'designer__profile';
    designerProfile.src = d.profile;
    designerName.className = 'designer__name';
    designerName.textContent = d.name;
    designerInfo.className = 'designer__info';
    designerFollowers.className = 'designer__followers';
    designerFollowers.textContent = `دنبال کنندگان : ${d.followers.toLocaleString('fa', 'IR')}`;
    designerDesigns.className = 'designer__designs';
    designerDesigns.textContent = ` تعداد طرح ها : ${d.designs.toLocaleString('fa', 'IR')}`;
    designerSales.className = 'designer__sales';
    designerSales.textContent = `  آمار فروش : ${d.sales.toLocaleString('fa', 'IR')}`;
    designerInfoLine1.className = 'designer__line';
    designerInfoLine2.className = 'designer__line';
    designerSamples.className = 'designer__samples';
    designerSample1.className = 'designer__sample';
    designerSample1.src = d.sample1;
    designerSample2.className = 'designer__sample';
    designerSample2.src = d.sample2;
    designerSample3.className = 'designer__sample';
    designerSample3.src = d.sample3;
    designerBtn.className = 'designer__btn';
    designerBtnText.textContent = 'دنبال کردن';
    designerBtnIcon.className = 'designer__btn-icon';
    designerBtnIcon.src = 'assets/icons/profile-add.svg';

    designersWrapper.appendChild(designer);
    designer.appendChild(designerProfileBg);
    designer.appendChild(designerProfile);
    designer.appendChild(designerName);
    designer.appendChild(designerInfo);
    designer.appendChild(designerSamples);
    designer.appendChild(designerBtn);
    designerInfo.appendChild(designerFollowers);
    designerInfo.appendChild(designerInfoLine1);
    designerInfo.appendChild(designerDesigns);
    designerInfo.appendChild(designerInfoLine2);
    designerInfo.appendChild(designerSales);
    designerSamples.appendChild(designerSample1);
    designerSamples.appendChild(designerSample2);
    designerSamples.appendChild(designerSample3);
    designerBtn.appendChild(designerBtnText);
    designerBtn.appendChild(designerBtnIcon);

    designerBtn.addEventListener('click', () => {
        let isSaved = designer.dataset.saved === 'true';

        isSaved = !isSaved;
        designer.dataset.saved = String(isSaved);

        if (isSaved) {
            designerBtnText.textContent = 'دنبال شده';
            designerBtnIcon.src = 'assets/icons/profile-tick.svg';
            designerBtn.classList.add('designer__btn--saved');
        } if (!isSaved) {
            designerBtnText.textContent = 'دنبال کردن'
            designerBtnIcon.src = 'assets/icons/profile-add.svg';
            designerBtn.classList.remove('designer__btn--saved');
        }

    });
})

// New Designs Section
const newDesignsWrapper = document.querySelector('.new-designs__wrapper');
const newDesigns = [
    { src: 'assets/images/new-design1.png', title: 'آباژور', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/new-design2.png', title: 'ماگ قابل طراحی', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/new-design3.png', title: 'کیف زنانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/new-design4.png', title: 'چمدان', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/new-design5.png', title: 'قمقمه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/new-design6.png', title: 'کوسن ', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/new-design7.png', title: 'ساک هدیه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
];

newDesigns.forEach(nd => {
    const newDesign = document.createElement('div');
    const newDesignImg = document.createElement('img');
    const newDesignTitle = document.createElement('h6');
    const newDesignIcon = document.createElement('img');
    const newDesignCaption = document.createElement('p');
    const newDesignPrice = document.createElement('h6');

    newDesign.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'new-design');
    newDesign.setAttribute('data-liked', 'false');
    newDesignImg.className = 'new-design__img';
    newDesignImg.src = nd.src;
    newDesignTitle.className = 'new-design__title';
    newDesignTitle.textContent = nd.title;
    newDesignIcon.className = 'new-design__icon';
    newDesignIcon.src = 'assets/icons/heart.svg';
    newDesignCaption.className = 'new-design__caption';
    newDesignCaption.textContent = nd.caption;
    newDesignPrice.className = 'new-design__price';
    newDesignPrice.textContent = nd.price.toLocaleString('fa', 'IR') + ' تومان';

    newDesignsWrapper.appendChild(newDesign);
    newDesign.appendChild(newDesignImg);
    newDesign.appendChild(newDesignTitle);
    newDesignTitle.appendChild(newDesignIcon);
    newDesign.appendChild(newDesignCaption);
    newDesign.appendChild(newDesignPrice);

    newDesignIcon.addEventListener('click', () => {
        let isLiked = newDesign.dataset.liked === 'true';

        isLiked = !isLiked;
        newDesign.dataset.liked = String(isLiked);

        newDesignIcon.src = isLiked
            ? 'assets/icons/Like.svg'
            : 'assets/icons/heart.svg';

    });
});


// Favourites Section
const favouritesWrapper = document.querySelector('.favourites__wrapper');
const favourites = [
    { src: 'assets/images/favourite1.png', title: 'کیف زنانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/favourite2.png', title: 'جوراب زنانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/favourite3.png', title: 'قاب موبایل آیفون', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
    { src: 'assets/images/favourite4.png', title: 'تیشرت مردانه', caption: 'دارای رنگ بندی، قابل طراحی', price: 150000 },
];

favourites.forEach(f => {
    const favourite = document.createElement('div');
    const favouriteImg = document.createElement('img');
    const favouriteTitle = document.createElement('h6');
    const favouriteIcon = document.createElement('img');
    const favouriteCaption = document.createElement('p');
    const favouritePrice = document.createElement('h6');

    favourite.className = 'favourite';
    favourite.setAttribute('data-liked', 'true');
    favouriteImg.className = 'favourite__img';
    favouriteImg.src = f.src;
    favouriteTitle.className = 'favourite__title';
    favouriteTitle.textContent = f.title;
    favouriteIcon.className = 'favourite__icon';
    favouriteIcon.src = 'assets/icons/Like.svg';
    favouriteCaption.className = 'favourite__caption';
    favouriteCaption.textContent = f.caption;
    favouritePrice.className = 'favourite__price';
    favouritePrice.textContent = f.price.toLocaleString('fa', 'IR') + ' تومان';

    favouritesWrapper.appendChild(favourite);
    favourite.appendChild(favouriteImg);
    favourite.appendChild(favouriteTitle);
    favouriteTitle.appendChild(favouriteIcon);
    favourite.appendChild(favouriteCaption);
    favourite.appendChild(favouritePrice);

    favouriteIcon.addEventListener('click', () => {
        let isLiked = favourite.dataset.liked === 'false';

        isLiked = !isLiked;
        favourite.dataset.liked = String(!isLiked);

        favouriteIcon.src = isLiked
            ? 'assets/icons/heart.svg'
            : 'assets/icons/Like.svg';

    });
})