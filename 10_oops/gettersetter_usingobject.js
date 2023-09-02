
const user = {
    // _ denotes it is a private property
    _name: 'love',
    _email: 'love.love@gmail.com',

    get name() {
        return this._name;
    },

    set name(name) {
        this._name = name;
    }
}
console.log(user.name);

// factory function
const stud1 = Object.create(user);
console.log(stud1.name);
stud1._email = 'overriden'; // although it gets overriden, but we assume properties which define usng _ are treated as private property
// so we have propostal implement this in future ES6 releases
console.log(stud1._email);