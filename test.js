/**
 * Created by root on 12.05.16.
 */

var calcJaroWincklerDistance = require('./index.js');
var passed = true;
passed &= Math.round(calcJaroWincklerDistance('MARTHA','MARHTA')*100) == 96;

passed &= Math.round(calcJaroWincklerDistance('DWAYNE','DUANE')*100) == 84;

passed &= Math.round(calcJaroWincklerDistance('DUANE','DWAYNE')*100) == 84;

passed &= Math.round(calcJaroWincklerDistance('DIXON','DICKSONX')*100) == 81;

if(!passed){
    console.log('Test passed')
}else{
    throw new Error('Test failed')
}

