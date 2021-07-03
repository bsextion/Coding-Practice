
function findNthFibonacciTerm(n) {


    if(n <= 1){
        return 1;
    }

	return findNthFibonacciTerm(n-1) + findNthFibonacciTerm(n-2);
}

console.log(findNthFibonacciTerm(6));