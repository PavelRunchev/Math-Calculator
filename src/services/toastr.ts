

const types: any = {
    "access": "rgba(0, 202, 85, 0.9)", 
    "info": "rgba(78, 106, 200, 0.9)", 
    "warning": "rgba(249, 192, 61, 1)", 
    "error": "rgba(250, 65, 73, 0.9)"
};


export default function toastr(msg: string, background: string) {
    let el: HTMLElement = document.querySelector('.container-toastr')!;

    if(el != null) {
        el.style.backgroundColor = types[background];
        let body: HTMLElement = el.querySelector('.toastr-body')!;
        let title: HTMLElement = el.querySelector('.toastr-title')!;


       
        switch(background) {
            case "access": title.innerHTML = `<i class="far fa-check-circle"></i>`; break;
            case "info": title.innerHTML = `<i class="fas fa-info-circle"></i>`; break;
            case "warning": title.innerHTML = `<i class="fas fa-exclamation-circle"></i>`; break;
            case "error": title.innerHTML = `<i class="fas fa-exclamation-triangle"></i>`; break;
            default: title.innerHTML = `<i class="fas fa-info-circle"></i>`; break;
        }

       
        body.innerHTML = msg;
        toastrShow();
        setTimeout(() => {
            toastrHide();
        }, 4000);
    }

    function toastrShow() {
        if(el != null) {
            el.animate([
                {   display: "block",
                    opacity: "0" 
                },
                { opacity: "1" }
            ], {
                duration: 500,
                iterations: 1,
            });
            el.style.display = "block";
            el.style.opacity = "1";
        }
    }
    
    function toastrHide() {

        if(el != null) {
            el.animate([
                { opacity: "1" },
                { 
                    opacity: "0",
                    display: "none"
                }
            ], {
                duration: 500,
                iterations: 1,
            });
            el.style.opacity = "0";
            el.style.display = "none";
        }
    }
}




