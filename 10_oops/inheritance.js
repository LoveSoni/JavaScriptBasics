const laptop = {
    processorCount: 2,
    gpu: false,
    ram: 8
}


const apple = {
    // old approach
    // __proto__: laptop
}

// modern approach
Object.setPrototypeOf(apple, laptop);
console.log(apple.gpu);