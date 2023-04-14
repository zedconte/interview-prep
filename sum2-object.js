import {start, stop} from './support/benchmark.js';

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
var twoSum = function (nums, target) {
  console.log('twoSumObject O(n) ' + nums + ' to: ' + target);
    start();
    const mp = {}
 
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
    
        if (diff in mp) return [i, mp[diff]]
 
        mp[nums[i]] = i
    }
    stop();

 };
 say(twoSum([2,7,11,15], 9)); // Outputs Hey there! to the terminal

 if (typeof module === 'object') {
    module.exports = twoSum;
}