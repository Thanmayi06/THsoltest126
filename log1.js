function logA() (console.log('A'));
function logB() (console.log('B'));
function logC() (console.log('C'));
function logD() (console.log('D'));
function logE() (console.log('E'));
function logF() (console.log('F'));
function logG() (console.log('G'));
function logH() (console.log('H'));
function logI() (console.log('I'));
function logJ() (console.log('J'));

logA();
setTimeout(logG,0);
Promise.resolve()
.then(logC)
.then(serTimeout(logH))
.then(logD)
.then(logE);
  setTimeout(logI);
  setTimeout(logJ);
  logB();
