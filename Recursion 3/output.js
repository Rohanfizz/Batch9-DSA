var n = 10;
a(n);
function b(n) {
    console.log(++n);
}
function a(n) {
    b(n);
    console.log(n);
}
