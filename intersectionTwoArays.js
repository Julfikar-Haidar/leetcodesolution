function intersection(num1, num2) {
    let firstSet = new Set();

    for(let num of num1) {
        firstSet.add(num);
    }

    let intersection = new Set()

    for (const num of num2) {
        if(firstSet.has(num)) {
            intersection.add(num);
        }
    }

    return Array.from(intersection)
}