function robotPaths(n, m, i, j, psf) {
    if (i == n && j == m) {
        console.log(psf);
        return;
    }
    if (i > n || j > m)
        return;
    robotPaths(n, m, i + 1, j, psf + "v"); //vertically
    robotPaths(n, m, i, j + 1, psf + "h"); //horizontally
}
robotPaths(3, 3, 1, 1, "");
