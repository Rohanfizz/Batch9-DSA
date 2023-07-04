function printAllSubarrays(arr:any[]) : void{

    for(let sp = 0;sp<arr.length;sp++){
        for(let ep = sp;ep<arr.length;ep++){

            let res:any[]= [];
            for(let i = sp;i<=ep;i++) res.push(arr[i]);
            console.log(res);

        }
    }
}
let arr= [5,1,2,6,2,8];
printAllSubarrays(arr);