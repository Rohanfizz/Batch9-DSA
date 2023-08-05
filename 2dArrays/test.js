function GetLeftMostSetBit(n) {
    var pos = 0;

    while (n > 0) {
        pos++;
        n >>= 1;
    }

    return pos;
}

function TotalSetBitsFrom1ToN(n) {
    var leftMostSetBitInd = GetLeftMostSetBit(n);

    var totalRep, mod;
    var nearestPow;
    var totalSetBitCount = 0;
    var addRemaining = 0;

    var curr = 0; // denotes the number of set bits at index i

    for (var i = 1; i <= leftMostSetBitInd; ++i) {
        nearestPow = parseInt( Math.pow(2, i));
        if (nearestPow > n) {
            var lastPow = parseInt( Math.pow(2, i - 1));
            mod = n % lastPow;
            totalSetBitCount += mod + 1;
        } else {
            if (i == 1 && n % 2 == 1) {
                totalRep = parseInt((n + 1) / nearestPow);
                mod = nearestPow % 2;
                addRemaining = 0;
            } else {
                totalRep =parseInt( n / nearestPow);
                mod = n % nearestPow;

                if (mod >= parseInt(nearestPow / 2)) {
                    addRemaining = mod - parseInt(nearestPow / 2) + 1;
                } else {
                    addRemaining = 0;
                }
            }

            curr = totalRep * (parseInt(nearestPow / 2)) + addRemaining;
            totalSetBitCount += curr;
        }
    }

    return totalSetBitCount;
}
function setBitCoint(l,k){
    let lo = l;
    let hi = 100000;
    let numlm1 =TotalSetBitsFrom1ToN(l-1);
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        let numr = TotalSetBitsFrom1ToN(mid);
        let setBitCount = numr - numlm1;

        if(setBitCount>=k){
            ans = mid;
            hi = mid-1;
        }else lo = mid+1;
    }
    return ans;
}
console.log(setBitCoint(2,5));