
let toastr = function(msg: string, option: string): void {
    let backgroundClass: string = "";
    let iconClass: string = "";
    let el: HTMLElement = document.querySelector('.toastr_toastrContainer__zMM00')!;
    let body: HTMLElement = document.querySelector('.toastr_toastrContainer__zMM00 > .toastr-body')!;
    let icon: HTMLElement = document.querySelector('.toastrIcon')!;

    if(el !== null && body !== null) {
        //change type toastr with asign color!
        if(option === 'info') {
            el.classList.add("bg-info");
            iconClass = "fa-info-circle";
            backgroundClass = "bg-info";
        } else if(option === 'success') {
            el.classList.add("bg-success");
            iconClass = "fa-check-circle";
            backgroundClass = "bg-success";
        } else if(option === 'danger') {
            el.classList.add("bg-danger");
            iconClass = "fa-exclamation-triangle";
            backgroundClass = "bg-danger";
        } else if(option === 'warning') {
            el.classList.add("bg-warning");
            iconClass = "fa-exclamation-circle";
            backgroundClass = "bg-warning";
        } else {
            el.classList.add("bg-dark");
            iconClass = "fa-check";
            backgroundClass = "bg-dark";
        }

        icon.classList.add(iconClass);
        body.innerHTML = msg;
        el.style.display = 'block';
       
        el.animate([
            { opacity: "0" },
            { opacity: "1" },
            { opacity: "1" },
            { opacity: "1" },
            { opacity: "1" },
            { opacity: "1" },
            { opacity: "1" },
            { opacity: "1" },
            { opacity: "0" },
        ], {
            duration: 5000,
            iterations: 1,
        });

        setTimeout(() => {
            el.classList.remove(backgroundClass);
            icon.classList.remove(iconClass);
            el.style.display = 'none';
        }, 6000);
    }
}

export default toastr;
