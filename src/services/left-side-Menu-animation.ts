

export function showLeftMenu(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { transform: "translateX(-600px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 600,
            iterations: 1,
        });
        el.style.transform = "translateX(0px)";
        el.style.transform = "transform 1s easy-out";
    }
}

export function hideLeftMenu(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(-600px)" }
        ], {
            duration: 600,
            iterations: 1,
        });
        el.style.transform = "translateX(-600px)";
        el.style.transform = "transform 1s easy-out";
    }
}

