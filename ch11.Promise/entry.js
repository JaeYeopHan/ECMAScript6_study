/*
 * Chapter 11. Promise
 * by Jbee
 */

function _promise(param) {
    return new Promise(function(resolve, reject) {
        throw Error(`param === ${param}`);
        (param === 'ok') ? resolve() : reject();
    });
}

_promise('ok').then(() => {
    console.log(`param === ok, resolve`);
}).catch((e) => {
    console.log(e);
}).then(() => {
    console.log('what is this?');
});
