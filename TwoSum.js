var twoSum = function(nums, target) {
    let map =  new Map();
    let result = []
   
   nums.forEach(function(element, index) {
       let needValue = target - element;
       if(map.has(needValue)){
           result = [index, map.get(needValue)];

       }
       else{
           map.set(element, index);

       }
   })
    
    return result;
};

twoSum([], 5);


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
//  var twoSum = function(nums, target) {
//     let map = new Map();
//     let resultArr = [];
    
//     for(let i = 0; i < nums.length;i++){
//         let neededVal = target - nums[i];
//         if(map.has(neededVal)){
//             resultArr = [i, map.get(neededVal)];
//             return resultArr;
//         }
//             else{
//                 map.set(nums[i], i);
                
//             }
//     }
//     return resultArr;
    
// };