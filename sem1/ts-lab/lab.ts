let myPet: string = "dog";

type Color = 'Red' | 'Green' | 'Blue';

const myColor: Color = 'Green';

function isDog(text: string): boolean {
    return text == 'dog';
};

const isCat = (text: string) => text == 'cat';

console.log(isDog(myPet));
console.log(isCat(myPet));

class MyClass {
    test() { }
}