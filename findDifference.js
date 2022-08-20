function findDifference(s,t) {
    let frequency = {}

    for (const char of s) {
        if (frequency[char] === undefined) {
            frequency[char] = 1
        } else {
            frequency[char]++
        }
    }

    for (const char of t) {
        if (frequency[char] !== undefined && frequency[char] > 0) {
            frequency[char]--
        } else {
            console.log(char);
           return char
        }
    }
   
    return -1
}

findDifference("abbcd","abbcde")