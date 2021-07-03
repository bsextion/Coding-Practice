

var reverse = function (x) {
    let isNegative = x < 0 ? true : false
    let sum = 0;

    if (isNegative)
        x *= -1;

    let arr = x.toString().split("").map(Number);

    while(arr.length > 0){
        let n = arr.length;
        let remainder = arr.pop();
        sum += remainder * Math.pow(10, n-1);
    }

    if (isNegative)
        sum *= -1;
  
 

        return (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) ? 0 : result;
};

reverse(-123);