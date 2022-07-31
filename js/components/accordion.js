import gsap from "gsap-trial";
import { containClass, replaceClass } from "../utils/classHelpers";

const accordionsObj = document.querySelectorAll('.accordion');

const queueEvents = () => {
    let accordions = Object.values(accordionsObj);
    accordions.forEach(accordion => {
        addAccordionEvent(accordion.querySelector('.accordion__title-container'));
        accordion.addEventListener('transitionend', e => {
            transitionDone.set(true);
        });
    });
}

const transitionDone = {
    __proto__: function(){return this.value},
    value: false,
    set(bool){
        this.value = bool;
    },
    get(){
        return this.value;
    },
    toString(){
        return this.value.toString();
    }
}

const addAccordionEvent = (accordion_title) => {
    accordion_title.addEventListener('click', function(){  
        let accordion = this.parentElement; 
        if (transitionDone.get()) {
            console.log(transitionDone.get());
            if (containClass(accordion, 'collapse')) {
                replaceClass(accordion, 'collapse', 'collapsed') 
                transitionDone.set(false);
            }

            else if(containClass(accordion, 'collapsed')){
                replaceClass(accordion, 'collapsed', 'collapse') 
                transitionDone.set(false);
            }
        }
    })
}

export default queueEvents;