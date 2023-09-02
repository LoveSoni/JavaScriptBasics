

// as earlier we use to have only functions not classes
function student(name, email) {
    this._name = name;
    this._email = email;
    Object.defineProperty(this, 'name',
        {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            }
        }
    )

    Object.defineProperty(this, 'email',
        {
            get: function () {
                return this._email;
            },
            set: function (email) {
                this._email = email;
            }
        }
    )
}

const stud = new student('love', 'love.love@gmail.com');
console.log(stud.name);

