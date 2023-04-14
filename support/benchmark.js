 var startTime, endTime;

export function start() {
    console.log('start');

  startTime = performance.now();
};

export function stop() {
  console.log('stop');
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get mseconds 
  //var seconds = Math.round(timeDiff);
  console.log(timeDiff + " ms");
};
