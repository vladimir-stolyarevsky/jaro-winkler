"use strict";


function  calcJaroWincklerDistance(str1,str2){

    var s1 = str1.length;
    var s2 = str2.length;

    var range = Math.floor(Math.max(s1,s2)/2) - 1;
    var m = 0;
    var t = 0;
    var l = 0;
    var isLSet = false;
    var lastMatchJ = 0;
    for(var i = 1;i<=s1;i++){
        var c1 = str1[i-1];
        for(var j =1;j<=s2;j++){
            if(Math.abs(i-j) > range)
                continue;
            var c2 = str2[j-1];
            if(c1==c2) {

                m++;
                if (i != j) {
                    if (lastMatchJ > j)
                        t += 2;
                }
                else {
                    if (!isLSet && l < 4) {

                        l++;
                    }
                }
                lastMatchJ = j;
            }else {
                if(i==j)
                    isLSet =true;
            }
        }
    }
    t =  0.5*t;
    m = Math.min(m,s1,s2);
    //  console.log('m='+m,' t='+t,' s1='+s1,' s2='+s2,' r='+range,' l='+l);
    var dj = 0;
    if(m>0)
        dj = (m/s1 + m/s2 + (m-t)/m)/3;


    return dj + (l*0.1*(1-dj));
}

module.exports = calcJaroWincklerDistance;

