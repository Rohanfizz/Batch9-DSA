function f(n) {
    if (n == 0)
        return;
    console.log(n);
    f(n - 1);
    console.log(n);
}
f(5);
