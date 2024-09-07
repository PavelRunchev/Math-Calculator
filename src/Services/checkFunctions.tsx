
/* eslint-disable no-useless-escape */
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function CheckIsInteger(n: string) {
    return n.match(/^\d+$/);
}

export function CheckIsNumber(n: string) {
    return typeof Number(n) == 'number' && !isNaN(Number(n));
}

export function CheckIsFloat(n: string) {
    return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 !== 0;
}

export function ValidateEmail(st: string) {
    return st.match(emailRegex);
}