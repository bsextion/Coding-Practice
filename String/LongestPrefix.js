function longestCommonPrefix(strs) {

    //if array is empty, return ''
    if(strs.length === 0) return '';

   strs.sort(function(a,b){return b.length - a.length});

    let prefix = strs[0]
    let prefixPointer = prefix.length

//set prefix as first word
     while(prefix){
         if(doesSubStringExists(prefix, strs)){
            return prefix;
         }
         else {

            prefixPointer -= 1
            prefix = prefix.substring(0, prefixPointer);
         }

     }

     return '';
    

//do this until word is empty;
//check if all words start with the prefix
//if so, return the prefix (this will be the longest possible)
//if not, removed the last element in the word and repeat
 
//return empty

    doesSubStringExists(substring, strs);
    
    
};

function doesSubStringExists(substring, array){
    for(let i = 1; i < array.length;i++){
        if(!array[i].startsWith(substring))
        return false;
    }
    return true;
}

let arr = ['flower', 'flow', 'flight']
longestCommonPrefix(arr);