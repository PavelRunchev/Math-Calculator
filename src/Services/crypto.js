
import CryptoJS from 'crypto-js';

export default function GetRandomString() {
    return CryptoJS.AES.encrypt('mxcniw3teorild8xZAMNC-lsakdfow9ZLPOIcvb32IUMBsdwo6$#@D', 'secret key').toString();
}