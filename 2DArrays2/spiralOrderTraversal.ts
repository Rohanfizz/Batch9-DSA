function spiralOrder(arr: number[][]): number[] {
    let n = arr.length;
    let m = arr[0].length;
    let total = n*m;
    let res =  [];

    let tw = 0;
    let bw = n-1;
    let lw = 0;
    let rw = m-1;

    while(total > 0){
        //print top wall
        for(let j = lw; j<=rw && total>0 ;j++){
            res.push(arr[tw][j]);
            total--;
        }
        tw++;
        
        //print right  wall
        for(let i = tw;i<=bw && total>0;i++){
            res.push(arr[i][rw]);
            total--;
        }
        rw--;

        //print bottom wall
        for(let j = rw; j>=lw && total>0;j--){
            res.push(arr[bw][j]);
            total--;
        }
        bw--;

        //print left wall
        for(let i= bw;i>=tw && total>0;i--){
            res.push(arr[i][lw]);
            total--;
        }
        lw++;
    }
    return res;
};