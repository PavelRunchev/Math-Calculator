

export function growFocusSearchInput(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { width: "350px" },
            { width: "500px" }
        ], {
            duration: 300,
            iterations: 1,
        });
        el.style.width = "500px";
        el.style.transition = "width 0.3s easy-out";
    }
}

export function smallOutFocusSearchInput(el: HTMLElement) {
    if(el != null) {
        el.animate([
            { width: "500px" },
            { width: "350px" }
        ], {
            duration: 300,
            iterations: 1,
        });
        el.style.width = "350px";
        el.style.transition = "width 0.3s easy-out";
    }
}