//maxResult
//currMax

//for each element in array
//currMax = currMax+el || number
//maxResult = (currMax, maxResult)


//returrn MaxResult

var maxSubArray = function(nums) {
    
    let maxResult = nums[0]; //starting max
    let currMax = nums[0]; //starting max

    for(let i = 1; i < nums.length; i++){ //start at 1, we don't want to read the first number
        currMax = Math.max(nums[i], currMax + nums[i]); //is n > currMax + n, if so store as the currMax
        maxResult = Math.max(currMax, maxResult); //check if stored max is greater than curMax
    }

    return maxResult;
};

maxSubArray([5,4,-1,7,8]);