"use strict";
// If key types of an object is not known
// interface TransactionObj {
//   // readonly will not try to allow any assignments
//   readonly [index: string]: number;
// }
// Inherit object types from TransactionObj
const todaysTransactions = {
    Pizza: -1,
    Books: -5,
    Job: 50,
    Dave: 5,
};
// console.log(todaysTransactions.Pizza);
let prop = "Pizza";
console.log(todaysTransactions[prop], "prop");
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // transactions[transaction] iterates through each key property of transactions object
        // and returns the value of the property
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
// student argument type is Student interface object
// We don't know what the key is
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue]}`);
}
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
// We want to pass an argument to check if its an object
// Array is an object type, so make sure arg is not an array
// Null is an object type as well, so make sure arg is not null
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return {
        arg,
        is: !!arg,
    };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue("dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return {
        value: arg,
        is: !!arg,
    };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 2, name: "Dave" }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: "comsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 85 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// Required and Readonly
// Requires all of the properties even when types are optional
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentID: "k123",
    grade: 85,
};
////////////////////// CLASSES
class Coder {
    //
    constructor(name, age, music, lang = "Typescript") {
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return `Age is ${this.age}`;
    }
}
const newCoder = new Coder("Dave", 42, "Rock", "Javascript");
console.log(newCoder);
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, age, music);
        this.computer = computer;
        this.computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sarah = new WebDev("MS", "Sarah", 24, "R&B");
console.log(Sarah.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays the ${action} instrument ${this.instrument}`;
    }
}
const newArtist = new Guitarist("Jane", "Guitar");
console.log(newArtist.play("Ukule"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const mybands = new Bands();
mybands.data = ["Neil", "Led Zep"];
console.log(mybands.data);
mybands.data = [...mybands.data, "ZZ Top"];
console.log(mybands.data);
