import { addClass, removeClass } from "../utils/classHelpers";

const navInit = () => {
    const nav = document.querySelector('.navigation');
    const openBtn = document.querySelector('.sidenav-toggler-btn');
    const closeBtn = document.querySelector('.nav-close-btn');

    closeBtn.addEventListener('click', function(){
        nav.ariaHidden = 'true';
    });

    openBtn.addEventListener('click', function(){
        nav.ariaHidden = 'false';
    })

    window.addEventListener('resize', function(){
        if (this.innerWidth > 768) {
            removeClass(nav, 'slide');
            nav.ariaHidden = 'true';
        }
        else{
            addClass(nav, 'slide');
        }
    })

    addClass(nav, 'slide');
}

export default navInit;