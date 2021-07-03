var strStr = function(haystack, needle) {

    let start = 0;
    let end = needle.length

    while(end <= haystack.length){
        if(haystack.substring(start, end) === needle){
            return start;
        }

        else {
            start++;
            end++;
        }
    }
    return -1;
    
};

strStr('aaaaa', 'bba');