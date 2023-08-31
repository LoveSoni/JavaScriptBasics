'use strict';


class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    printUserDetails() {
        console.log(`uername is ${this.firstname} and password is ${this.lastname}`);
    }
}


class Teacher extends User {
    constructor(firstname, lastname, email) {
        super(firstname, lastname);
        this.email = email;
    }

    teachSubject() {
        console.log('i can speak muliple subjects')
    }
}

const ramesh = new Teacher('ram', 'kumar', 'ram.kumar@gmail.com');
ramesh.printUserDetails();
ramesh.teachSubject();