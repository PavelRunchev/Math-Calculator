

export function AccordionShow(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { height: '0px' },
            { height: '330px'}
        ], {
            duration: 300,
            iterations: 1,
        });
        el.style.height = '330px';
        el.style.transition = "height 0.5s easy-out";
    }
}

export function AccordionHide(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { height: '330px' },
            { height: '0px'}
        ], {
            duration: 300,
            iterations: 1,
        });
        el.style.height = '0px';
        el.style.transition = "height 0.5s easy-out";
    }
}