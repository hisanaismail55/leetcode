/**
 * @param {number[]} nums
 * @return {number}
 */
 
var singleNumber = function(nums) {

    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];

        let count = nums.filter(number => number === num).length;

        if (count === 1) {
            return num;
        }
    }

};


    