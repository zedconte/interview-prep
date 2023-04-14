import {start, stop} from './support/benchmark.js';
//const {start, stop} = require('./support/benchmark');

// Declare say function
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
var twoSumMap = function(nums, target) {
    console.log('twoSumMap O(n) ' + nums + ' to: ' + target);
    start();
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)

    }
    stop();
};
say(twoSumMap([2,7,11,15], 9)); // Outputs Hey there! to the terminal

if (typeof module === 'object') {
    module.exports = twoSumMap;
}