var arr = [
    [0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0],
];
function exitPoint(arr) {
    var i = 0;
    var j = 0;
    var dir = "R";
    while (i >= 0 && j >= 0 && i < arr.length && j < arr[0].length) {
        if (arr[i][j] == 1) {
            //convert 1 to 0
            arr[i][j] = 0;
            //change  dir
            if (dir == "R")
                dir = "D";
            else if (dir == "D")
                dir = "L";
            else if (dir == "L")
                dir = "U";
            else if (dir == "U")
                dir = "R";
        }
        //move
        if (dir == "R")
            j++;
        else if (dir == "D")
            i++;
        else if (dir == "L")
            j--;
        else if (dir == "U")
            i--;
    }
    //above loop will stop once we run out of bounds of the array
    //to go back inside and get the exit point, i have to take a step in opposite direction
    if (dir == "R")
        j--;
    else if (dir == "D")
        i--;
    else if (dir == "L")
        j++;
    else if (dir == "U")
        i++;
    console.log(i, j);
}
exitPoint(arr);
