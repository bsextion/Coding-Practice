
 var merge = function(nums1, m, nums2, n) {
    let rightPointer = 0;
    let leftPointer = 0;
    let resultPointer = 0

    let nums1Copy = [...nums1];
    while(leftPointer < m && rightPointer < n){
        if(nums1Copy[leftPointer] < nums2[rightPointer]){
         nums1[resultPointer++] = nums1Copy[leftPointer++];
        }
        else {
            nums1[resultPointer++] = nums2[rightPointer++];
        }
    }


    while(leftPointer < m) {
        nums1[resultPointer++] = nums1Copy[leftPointer++];

    }

    while(rightPointer < n) {
        nums1[resultPointer++] = nums2[rightPointer++];
    }

};




merge([1,2,3,0,0,0], 3, [2,5,6], 3)
