// déclaration

//------------------------------------------------------------------------------------------

let a: number = 3;  // peut modifier la valeur, mais ne jamais utilisé let
a = 4; 

const b:number = 3;  // valeur constante, bonne pratique à utilisé (number comprend l'entiéreté des nombres, pas de float)
b = 3;

//------------------------------------------------------------------------------------------

function sum(a: number, b:number) : number{
    return a + b;
}

//------------------------------------------------------------------------------------------

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

//------------------------------------------------------------------------------------------

const sum2 =(a:number, b:number):number=>{
    return a+b;
}

const operation = (op: (a:number, b:number)=>number,a:number,b:number):number=>
    op(a,b);

const s = operation(sum2, 4,3);

const m = operation(
    (a:number,b:number) => a*b,
    4,
    3
);

//------------------------------------------------------------------------------------------
//Constucteur user 

class User {
    firstname : string;
    lastname : string;
    age : number;

    construstor (firstname : string, lastname: string, age : number =0){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

const u = new User ('Toto','lala','25');

const u2 = new User ('Foo', 'Bar');

//------------------------------------------------------------------------------------------
//interface

interface UserI{
    firstname : string;
    lastname : string;
    age? : number;

}

const u : UserI = {firstname : 'Toto', lastname: 'Lala', age:25};
const u2 : UserI = {firstname : 'Tata', lastname: 'Bar'}


//------------------------------------------------------------------------------------------
//spread operator

const user : User{
    firstname : 'Toto',
    lastname : 'Lala',
    age : 25
};

const userWithAddress : UserWithAddress = {
    ...user,
    address : '1 rue de truc',
    city : "Ouais"
}

//------------------------------------------------------------------------------------------
//spread operator

const user = {
    firstname : 'Toto',
    lastname : 'Lala',
    age : 25
};

const {firstname, lastname, ...infos}= user;

console.log (firstname)// Toto
console.log (lastname)// Lala
console.log (age)// 25


