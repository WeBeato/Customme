export function renderBottomFooter() {
    const footer = document.querySelector('footer');

    // Create Elements
    const bottomFooter = document.createElement('div');
    const bottomFooterContainer = document.createElement('div');
    const bottomFooterWrap = document.createElement('div');

    const bottomFooterContent = document.createElement('div');

    const bottomFooterMenus = document.createElement('div');

    const bottomFooterMenuCustommeTitle = document.createElement('p');
    const bottomFooterMenuCustomme = document.createElement('ul');
    const menuCustommeItems = ["فروش محصولات", "فرصت همکاری", "تماس با ما", "نقشه سایت"];
    bottomFooterMenuCustomme.appendChild(bottomFooterMenuCustommeTitle);
    menuCustommeItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        li.className = 'menu-customme__items';

        a.className = 'menu-customme__links';
        a.href = '#';
        a.textContent = item;

        bottomFooterMenuCustomme.appendChild(li);
        li.appendChild(a);
    })

    const bottomFooterMenuCustomersTitle = document.createElement('p');
    const bottomFooterMenuCustomers = document.createElement('ul');
    const menuCustomersItems = ["سوالات متداول", "حریم خصوصی", "ثبت شکایت", "ضمانت نامه محصولات"];
    bottomFooterMenuCustomers.appendChild(bottomFooterMenuCustomersTitle);
    menuCustomersItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        li.className = 'menu-customers__items';

        a.className = 'menu-customers__links';
        a.href = '#';
        a.textContent = item;

        bottomFooterMenuCustomers.appendChild(li);
        li.appendChild(a);
    })

    const bottomFooterMenuGuideTitle = document.createElement('p');
    const bottomFooterMenuGuide = document.createElement('ul');
    const menuGuideItems = ["راهنمای ثبت سفارش", "شیوه‌های پرداخت", "نحوه ارسال سفارش‌ها", "شرایط بازگرداندن محصول"];
    bottomFooterMenuGuide.appendChild(bottomFooterMenuGuideTitle);
    menuGuideItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        li.className = 'menu-guide__items';

        a.className = 'menu-guide__links';
        a.href = '#';
        a.textContent = item;

        bottomFooterMenuGuide.appendChild(li);
        li.appendChild(a);
    })

    const bottomFooterInfo = document.createElement('div');
    const bottomFooterTitle = document.createElement('h6');

    const bottomFooterSupport = document.createElement('div');
    const bottomFooterSupportContact = document.createElement('p');
    const bottomFooterSupportTime = document.createElement('p');

    const bottomFooterLicenes = document.createElement('div');
    const bottomFooterLicene1 = document.createElement('img');
    const bottomFooterLicene2 = document.createElement('img');
    const bottomFooterLicene3 = document.createElement('img');

    const bottomFooterCopy = document.createElement('p');

    const bottomFooterMobileMenu = document.createElement('ul');
    const bottomFooterMobileMenuItems = [
        { icon: 'assets/icons/home-2.svg', name: 'خانه' },
        { icon: 'assets/icons/Design.svg', name: 'طراحی سفارشی' },
        { icon: 'assets/icons/Cart.svg', name: 'سبد خرید' },
        { icon: 'assets/icons/User.svg', name: 'پروفایل' }
    ];
    bottomFooterMobileMenuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const icon = document.createElement('img');
        const name = document.createElement('span');

        li.className = 'bottom-footer__mobile-menu-item';
        a.className = 'bottom-footer__mobile-menu-link';

        icon.className = 'bottom-footer__mobile-menu-icon';
        icon.src = item.icon;
        name.className = 'bottom-footer__mobile-menu-name';
        name.textContent = item.name;

        bottomFooterMobileMenu.appendChild(li);
        li.appendChild(a);
        a.appendChild(icon);
        a.appendChild(name);
    })

    // Add Atributes
    bottomFooter.className = 'bottom-footer';
    bottomFooterContainer.className = 'container';
    bottomFooterWrap.className = 'bottom-footer__wrap';

    bottomFooterContent.className = 'bottom-footer__content';

    bottomFooterMenus.className = 'bottom-footer__menus';

    bottomFooterMenuCustommeTitle.className = 'menu-customme__title';
    bottomFooterMenuCustommeTitle.textContent = 'همراه با کاستومی';
    bottomFooterMenuCustomme.className = 'menu-customme';

    bottomFooterMenuCustomersTitle.className = 'menu-customers__title';
    bottomFooterMenuCustomersTitle.textContent = 'خدمات مشتریان';
    bottomFooterMenuCustomers.className = 'menu-customers';

    bottomFooterMenuGuideTitle.className = 'menu-guide__title';
    bottomFooterMenuGuideTitle.textContent = 'راهنمای خرید';
    bottomFooterMenuGuide.className = 'menu-guide';

    bottomFooterInfo.className = 'bootom-footer__info';
    bottomFooterTitle.className = 'bootom-footer__title';
    bottomFooterTitle.textContent = 'فروشگاه اینترنتی کاستومی';

    bottomFooterSupport.className = 'bootom-footer__support';
    bottomFooterSupportContact.className = 'bootom-footer__support-content';
    bottomFooterSupportContact.textContent = "تماس با پشتیبانی: ۰۲۱-۳۴۵۶۰۰۰";
    bottomFooterSupportTime.className = 'bootom-footer__support-time';
    bottomFooterSupportTime.textContent = 'پاسخگویی ۲۴ ساعته ، ۷ روز هفته ';

    bottomFooterLicenes.className = 'bootom-footer__licenses';
    bottomFooterLicene1.className = 'bootom-footer__license';
    bottomFooterLicene1.src = 'assets/images/license01.png';
    bottomFooterLicene2.className = 'bootom-footer__license';
    bottomFooterLicene2.src = 'assets/images/license02.png';
    bottomFooterLicene3.className = 'bootom-footer__license';
    bottomFooterLicene3.src = 'assets/images/license03.png';

    bottomFooterCopy.className = 'bootom-footer__copy';
    bottomFooterCopy.textContent = 'تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد';

    bottomFooterMobileMenu.className = 'bottom-footer__mobile-menu';

    // Append Chidren
    footer.appendChild(bottomFooter);
    bottomFooter.appendChild(bottomFooterContainer);
    bottomFooterContainer.appendChild(bottomFooterWrap);

    bottomFooterWrap.appendChild(bottomFooterContent);
    bottomFooterWrap.appendChild(bottomFooterCopy);
    bottomFooterWrap.appendChild(bottomFooterMobileMenu);

    bottomFooterContent.appendChild(bottomFooterMenus);
    bottomFooterContent.appendChild(bottomFooterInfo);

    bottomFooterMenus.appendChild(bottomFooterMenuCustomme);
    bottomFooterMenus.appendChild(bottomFooterMenuCustomers);
    bottomFooterMenus.appendChild(bottomFooterMenuGuide);

    bottomFooterInfo.appendChild(bottomFooterTitle);
    bottomFooterInfo.appendChild(bottomFooterSupport);
    bottomFooterInfo.appendChild(bottomFooterLicenes);

    bottomFooterSupport.appendChild(bottomFooterSupportContact);
    bottomFooterSupport.appendChild(bottomFooterSupportTime);

    bottomFooterLicenes.appendChild(bottomFooterLicene1);
    bottomFooterLicenes.appendChild(bottomFooterLicene2);
    bottomFooterLicenes.appendChild(bottomFooterLicene3);


}