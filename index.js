"use strict"; 

function  calcJaroWincklerDistance(str1,str2){

    var str1Length = str1.length;
    var str2Length = str2.length;

    var range = Math.floor(Math.max(str1Length,str2Length)/2) - 1;
    var m = 0;
    var t = 0;
    var l = 0;
    var isLSet = false;
    var lastMatchJ = 0;
    for(var i = 0;i<str1Length;i++){
        var c1 = str1[i];
        for(var j =i;j<str2Length;j++){
            if(Math.abs(i-j) > range)
                continue;
            var c2 = str2[j];
            if(c1==c2) {
                m++; //characters is the same and within range               
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
                break;
            }else {
                if(i==j)
                    isLSet =true;
            }
        }
    }
    t =  0.5*t;
    m = Math.min(m,str1Length,str2Length);
    console.log('m='+m,' t='+t,' s1='+str1Length,' s2='+str2Length,' r='+range,' l='+l);
    var dj = 0;
    if(m>0)
        dj = (m/str1Length + m/str2Length + (m-t)/m)/3;
//console.log('m='+m,' t='+t,' s1='+str1Length,' s2='+str2Length,' r='+range,' l='+l,' dj='+dj);

    return dj + (l*0.1*(1-dj));
} 
module.exports = calcJaroWincklerDistance;

