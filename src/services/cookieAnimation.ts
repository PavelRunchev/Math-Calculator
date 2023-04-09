

export function cookieHide(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(400px)" }
        ], {
            duration: 600,
            iterations: 1,
        });
        el.style.transform = "translateY(400px)";
        el.style.transition = "width 0.3s easy-out";
    }
}