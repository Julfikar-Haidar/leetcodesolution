function factorialTrailingZeroes(n) {
    let numberOfFive = 0

    while (n >= 5) {
        console.log(n);
        console.log('before',numberOfFive);
        numberOfFive += Math.floor(n/5) 
        console.log('numberOfFive',numberOfFive);
        n = Math.floor(n/5) 
   
    }
 
    return numberOfFive
}


factorialTrailingZeroes(25)

// time complexity O(log25 n)  log is the 25 base & n is the given number
// space complexity

// 10! = 1*2*3*4*5*6*7*8*9*10 =3628800