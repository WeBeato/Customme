import { renderNavbar } from "./components/Navbar.js";
import { renderDesktopMenu } from "./components/DesktopMenu.js";
import { initNav, renderMobileNav } from "./components/MobileNav.js";
import { initMenu, renderMobileMenu } from "./components/MobileMenu.js";
import { renderTopFooter } from "./components/TopFooter.js";
import { renderBottomFooter } from "./components/BottomFooter.js";

renderNavbar();
renderDesktopMenu();
renderMobileNav();
renderMobileMenu();
initMenu();
initNav();
renderTopFooter();
renderBottomFooter();