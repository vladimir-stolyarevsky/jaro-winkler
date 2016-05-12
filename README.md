# jaro-winkler
simple javascript implementation of <a href="https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance">Jaro-Winkler</a> distance algorithm

### Install
```bash
npm install jaro_winkler
```
### Usage
This module exposes single function, that calculate Jaro-Winkler distance represented by float number. 1 is an exact match, and 0 is no similarity.
```javascript
var calcJaroWinklerDistance = require('jaro_winkler');
console.log(calcJaroWinklerDistance('DWAYNE','DUANE')); //0.8400000000000001
```
