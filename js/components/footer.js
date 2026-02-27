export function renderFooter() {
    const footer = document.querySelector('footer');

    // Create Elements
    const topFooter = document.createElement('div');
    const topFooterContainer = document.createElement('div');
    const topFooterWrap = document.createElement('div');

    const topFooterNewsletter = document.createElement('div');
    const topFooterNewsletterTitle = document.createElement('p');
    const topFooterNewsletterInputWrap = document.createElement('div');
    const topFooterNewsletterInput = document.createElement('input');
    const topFooterNewsletterBtn = document.createElement('button');

    const topFooterSocials = document.createElement('div');
    const topFooterSocialsTitle = document.createElement('p');
    const topFooterSocialsLinks = document.createElement('div');
    const topFooterSocialsYoutube = document.createElement('a');
    const topFooterSocialsYoutubeImg = document.createElement('img');
    const topFooterSocialsPinteres = document.createElement('a');
    const topFooterSocialsPinteresImg = document.createElement('img');
    const topFooterSocialsFacebook = document.createElement('a');
    const topFooterSocialsFacebookImg = document.createElement('img');
    const topFooterSocialsInstagram = document.createElement('a');
    const topFooterSocialsInstagramImg = document.createElement('img');
    // Add Atributes
    topFooter.className = 'top-footer';
    topFooterContainer.className = 'container';
    topFooterWrap.className = 'top-footer__wrap';


    topFooterNewsletter.className = 'top-footer__newsletter';
    topFooterNewsletterTitle.className = 'top-footer__newsletter__title';
    topFooterNewsletterTitle.textContent = 'برای دریافت آخرین اخبار و تخفیف های جدید،ایمیل خود را وارد نمایید';
    topFooterNewsletterInputWrap.className = 'top-footer__newsletter__input-wrap';
    topFooterNewsletterInput.className = 'top-footer__newsletter__input';
    topFooterNewsletterInput.placeholder = 'ایمیل شما';
    topFooterNewsletterInput.type = 'email';
    topFooterNewsletterBtn.className = 'top-footer__newsletter__btn';
    topFooterNewsletterBtn.textContent = 'ثبت';

    topFooterSocials.className = 'top-footer__socials';
    topFooterSocialsTitle.className = 'top-footer__socials__Title';
    topFooterSocialsTitle.textContent = 'ما را در شبکه های اجتماعی دنبال کنید';
    topFooterSocialsLinks.className = 'top-footer__socials__Links';
    topFooterSocialsYoutube.className = 'top-footer__socials__Youtube';
    topFooterSocialsYoutube.href = '#';
    topFooterSocialsYoutubeImg.src = 'assets/icons/youtube.svg'
    topFooterSocialsPinteres.className = 'top-footer__socials__Pinteres';
    topFooterSocialsPinteres.href = '#';
    topFooterSocialsPinteresImg.src = 'assets/icons/pinterest.svg'
    topFooterSocialsFacebook.className = 'top-footer__socials__Facebook';
    topFooterSocialsFacebook.href = '#';
    topFooterSocialsFacebookImg.src = 'assets/icons/facebook.svg'
    topFooterSocialsInstagram.className = 'top-footer__socials__Instagram';
    topFooterSocialsInstagram.href = '#';
    topFooterSocialsInstagramImg.src = 'assets/icons/instagram.svg'

    // Append Chidren
    footer.appendChild(topFooter);
    topFooter.appendChild(topFooterContainer);
    topFooterContainer.append(topFooterWrap);

    topFooterWrap.appendChild(topFooterNewsletter);
    topFooterNewsletter.appendChild(topFooterNewsletterTitle);
    topFooterNewsletter.appendChild(topFooterNewsletterInputWrap);
    topFooterNewsletterInputWrap.appendChild(topFooterNewsletterInput);
    topFooterNewsletterInputWrap.appendChild(topFooterNewsletterBtn);

    topFooterWrap.appendChild(topFooterSocials);
    topFooterSocials.appendChild(topFooterSocialsTitle);
    topFooterSocials.appendChild(topFooterSocialsLinks);
    topFooterSocialsLinks.appendChild(topFooterSocialsYoutube);
    topFooterSocialsYoutube.appendChild(topFooterSocialsYoutubeImg);
    topFooterSocialsLinks.appendChild(topFooterSocialsPinteres);
    topFooterSocialsPinteres.appendChild(topFooterSocialsPinteresImg);
    topFooterSocialsLinks.appendChild(topFooterSocialsFacebook);
    topFooterSocialsFacebook.appendChild(topFooterSocialsFacebookImg);
    topFooterSocialsLinks.appendChild(topFooterSocialsInstagram);
    topFooterSocialsInstagram.appendChild(topFooterSocialsInstagramImg);
}