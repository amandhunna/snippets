// .......Dynamic Programming.....

// recursive:

//----The obvious way--------------
const fibonacci = (n) => {
    if(n === 0) return 0
    if(n === 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}


/* 
--------Top Down - Memoization --------------
The recursion does a lot of unnecessary calculations 
because a given Fibonacci number will be calculated multiple
times. An easy way to improve this is to cache the results
*/
const cacheTD = {}
const fibonacciTD = (n) => {
    if(n === 0) return 0
    if(n === 1) return 1
    if(n in cacheTD) {
        return cacheTD[n]
    }
    cacheTD[n] = fibonacciTD(n - 1) + fibonacciTD(n - 2)
    return cacheTD[n]
}
/* 
-------- Bottom-Up --------------
A better way to do this is to get rid of the recursion 
all-together by evaluating the results in the right order:
*/
const cacheBU = {}
const fibonacciBU = (n)  => {
    cacheBU[0] = 0
    cacheBU[1] = 1

    for (let i= 2; i<= n; ++i) {
      cacheBU[i] = cacheBU[i - 1] +  cacheBU[i - 2]
    }
    return cacheBU[n]
}
