class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
     aboutComputer() {
       console.log(`This is a computer ${this.name}`); 
    }
}

let dell = new Computer("dell-vostro","vostro-125");
console.log("dell-vostro","vostro-125");
dell.aboutComputer()