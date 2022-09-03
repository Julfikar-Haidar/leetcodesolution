class Computer  {
    constructor(name,model) {
        this.name = name;
        this.model = model;
    }
}


Computer.prototype.aboutComputer = function ()  {
    console.log(`this is a computer${this.name}`);
}

let dell = new Computer('vostro',"dgdg");

dell.aboutComputer()

let arr =  [23,45,78,90,5,9]

const eleItem = arr.filter((item) => item % 2 ===  0)
console.log(eleItem);

Array.prototype.filter = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 1) {
            arr.push(this[i]);
        }
    }
    return arr;
}

console.log([23,45,78,90,5,9].filter());
