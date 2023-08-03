function printer(arr:number[] , idx : number ,asf :string){
    if(idx == arr.length){
        console.log(asf);
        return;
    }

    //idxth if i pick
    printer(arr,idx+1,asf+" "+arr[idx]);
    //idxth if not pick
    printer(arr,idx+1,asf);
}
let arr = [10,20,30];
printer(arr,0,"");


