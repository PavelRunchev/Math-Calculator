export function showOthersMenu(value: string) {
    let el: HTMLElement = document.querySelector('.mathMenu_mathMenuContainer__lk-J-')!;

    if(el != null) {
        el.animate([
            { transform: `translateY(${value})` },
            { transform: "translateY(0px)" }
        ], {
            duration: 600,
            iterations: 1,
        });
        el.style.transform = "translateY(0px)";
        el.style.transition = "transform 1s easy-out";
    }
}

export function hideOthersMenu(value: string) {
    let el: HTMLElement = document.querySelector('.mathMenu_mathMenuContainer__lk-J-')!;

    if(el != null) {
        el.animate([
            { transform: "translateY(0px)" },
            { transform: `translateY(${value})` }
        ], {
            duration: 600,
            iterations: 1,
        });
        el.style.transform = `translateY(${value})`;
        el.style.transition = "transform 1s easy-out";
    }
}