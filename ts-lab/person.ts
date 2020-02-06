// class Person
// firstName
// lastName
// sayHello()
// console.log(...)
// new Person(...).sayHello()

// class Person1 {
//     private firstName: string                    // private/public nie musi być, domyślnie public
//     private lastName: string                    // nie mamy dostępu do pól private poza defnicją podczas tworzenia 
//     constructor(
//         firstName2: string = 'domyslny',
//         lastName2: string = 'gosc'
//     ) {
//         this.firstName = firstName2;
//         this.lastName = lastName2;
//     }
//     sayHello() {                                                //domyślnie public sayHello()
//         console.log('Siema', this.firstName, this.lastName);
//         console.log(this);
//     }
// }
// let me1 = new Person1('Daniel', 'Majewski');
// me1.sayHello();

//prostszy zapis tego co na górze, ale musi być nadane private lub public:

class Person {
    constructor(
        private firstName: string = 'domyslny',
        private lastName: string = 'gosc'
    ) { }
    sayHello() {                                                //domyślnie public sayHello()
        console.log('Siema', this.firstName, this.lastName);
        console.log(this);
    }
}

class PersonAccount extends Person {            //tworzymy nową klasę rozszerzającą plasę Person
    constructor(
        firstName: string,                      //odnosimy się do klas w klasie z której dziedziczymy (klasy Person)
        lastName: string,                       // żeby przekazać firstName i lastName z parametrów wejściowych do klasy Person
        private balance: number = 0,            //tworzymy nowe pole w klasie rozszerzającej
    ) {
        super(firstName, lastName);             //super odnosi się do klasy bazowej, jest wymagany żeby klasa dziedzicząca odniosła się do klasy bazowej
    }
    showMyMoney() {
        console.log('stan konta to:', this.balance, '$');
    }
}

let me = new PersonAccount('Daniel', 'Majewski', 1323);
me.sayHello();

me.showMyMoney();