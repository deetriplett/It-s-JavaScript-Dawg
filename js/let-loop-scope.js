//Loops 10 times

'use strict';

(function initLoop() {
  function doLoop(x) {
    console.log('loop:', x);
  }
  
  for (var i = 0; i < 10; i++) {
    doLoop(i + 1);
  }
})();

//console log
//loop:1
//loop:2
//loop:3
//loop:4
//loop:5
//loop:6
//loop:7
//loop:8
//loop:9
//loop:10
