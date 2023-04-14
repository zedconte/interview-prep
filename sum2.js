import {start, stop} from './support/benchmark.js';


/* var startTime, endTime;

function start() {
    console.log('start');

  startTime = performance.now();
};

function stop() {
  console.log('stop');
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get mseconds 
  //var seconds = Math.round(timeDiff);
  console.log(timeDiff + " ms");
}; */

// Declare function
function say(something) {
  console.log('invoke say ' + something);
  if (typeof window !== 'undefined') {
    console.log(alert === window.alert); // 👉️ true    
    alert(something);// 👉️ can use alert()
  } else {
    console.log(something);    // 👉️ can't use alert()
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    console.log('twoSum O(n^2) ' + nums + ' to: ' + target);
    start();
    for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
    }
    stop();
}
};

// Call function
say(twoSum([2,7,11,15], 9)); // Outputs Hey there! to the terminal

//module.exports = twoSum;
if (typeof module === 'object') {
    module.exports = twoSum;
}