interface TransactionObj {
  // We want Pizza,Books and Job to be included and required as types
  // but in the future we also want to include other types
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}
// If key types of an object is not known
// interface TransactionObj {
//   // readonly will not try to allow any assignments
//   readonly [index: string]: number;
// }

// Inherit object types from TransactionObj
const todaysTransactions: TransactionObj = {
  Pizza: -1,
  Books: -5,
  Job: 50,
  Dave: 5,
};

// console.log(todaysTransactions.Pizza);

let prop: string = "Pizza";
console.log(todaysTransactions[prop], "prop");

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    // transactions[transaction] iterates through each key property of transactions object
    // and returns the value of the property
    total += transactions[transaction];
  }
  return total;
};

// console.log(todaysNet(todaysTransactions));
// console.log(todaysTransactions["Dave"]);

////////////////////////////////

interface Student {
  // readonly [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  // classes is optional
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

// student argument type is Student interface object
// We don't know what the key is
const logStudentKey = (student: Student, key: keyof Student) => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

// interface Incomes {
// [key: string] : number,
// }

type Streams = "salary" | "bonus" | "sideHustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);
}

const stringEcho = (arg: string): string => arg;

const echo = <T,>(arg: T): T => arg;
// We want to pass an argument to check if its an object
// Array is an object type, so make sure arg is not an array
// Null is an object type as well, so make sure arg is not null

const isObj = <T,>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

const isTrue = <T,>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T,>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return {
    value: arg,
    is: !!arg,
  };
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here

  return user;
};

console.log(processUser({ id: 2, name: "Dave" }));

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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

// class StateObject<T> {
//   private data: T;

//   constructor(value: T) {
//     this.data = value;
//   }

//   get state(): T {
//     return this.data;
//   }

//   set state(value: T) : void {

//   }
// }

// Utility Types

// Partial

interface Assignment {
  studentID: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  };
};

const assign1: Assignment = {
  studentID: "comsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 85 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

console.log(assignGraded);

// Required and Readonly
// Requires all of the properties even when types are optional
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentID" | "grade">;

const score: AssignResult = {
  studentID: "k123",
  grade: 85,
};

type adjustedGrads = Exclude<LetterGrades, "U">;
type highGrads = Extract<LetterGrades, "A" | "B">;

////////////////////// CLASSES

class Coder {
  //
  constructor(
    public readonly name: string,
    private age: number,
    public music: string,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Age is ${this.age}`;
  }
}

const newCoder = new Coder("Dave", 42, "Rock", "Javascript");

console.log(newCoder);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, age, music);
    this.computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sarah = new WebDev("MS", "Sarah", 24, "R&B");

console.log(Sarah.getLang());

/////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} plays the ${action} instrument ${this.instrument}`;
  }
}

const newArtist = new Guitarist("Jane", "Guitar");

console.log(newArtist.play("Ukule"));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const mybands = new Bands();

mybands.data = ["Neil", "Led Zep"];
console.log(mybands.data);
mybands.data = [...mybands.data, "ZZ Top"];
console.log(mybands.data);
