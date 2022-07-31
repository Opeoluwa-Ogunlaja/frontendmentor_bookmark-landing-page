import { addClass, removeClass } from "../utils/classHelpers";

const buttonsInit = (btns) => {
    btns.forEach(item => {
        removeClass(item, 'active');
    });
}

const changeSlide = (evt, i, slidesNum) => {
    const slides = document.querySelector('.features__slides');

    slides.style.setProperty('transform', `translateX(-${i * 100}%)`);
}

const tabEvents = () => {
    const btns = document.querySelectorAll('.features__tabs--btn');
    buttonsInit(btns);

    btns.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            buttonsInit(btns);
            addClass(item, 'active');
            changeSlide(e, i, btns.length);
        });
    });

    btns[0].click();
}

const tabsInit = () => {
    tabEvents()
}

export default tabsInit;