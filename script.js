alert('Hello sexy people');

//VARIABLE DECLARTION
console.log('Wtf kasari ayo name', name);
var  name = 'Pratik'
let names = 'Pratikd'
console.log('Let garda chai', names);
const PI = 3.14
//changing shit
name += 'Hehe';
console.log(name);
names += 'Hehe';
console.log(names);
//PI += 1;



//DATA TYPES
    //String
let fname = "Pratik";
let lname = "D";
let retu = '66';
console.log(fname +' '+ lname+'\nage: ', retu);

    //Number
let age = 22;
const goldenr = PI *2;
console.log(age , ' + ' , goldenr ,' = ', age+goldenr );


    //Boolean
let truth = true;
let falseth = false;
console.log('Truth is ',truth,' and false is ',falseth);

    //Undefined & Null
let undef;
let nulldt= null;
console.log('undefinded be like:',undef);
console.log('Null be like:',nulldt);


//Symbol
    //not using symbol
let name1 ='Javascript'
let name2 ='Javascript'
console.log(name1 == name2);
    //using symbol
let name_1 = Symbol('Javascript');
let name_2 = Symbol('Javascript');

console.log(name_1 == name_2);
console.log('Yo false auxa kina ki symbol le different banauxa eutai lai ni');

//Checking datatype
console.log(typeof(name1));
console.log(typeof(nulldt));


//OPERATORS

//addition
console.log(5,' + ',3,' = ',5+3);

//substraction
console.log(5,' - ',3,' = ',5-3);

//multiplication
console.log(5,' * ',3,' = ',5*3);

//division
console.log(5,' / ',3,' = ',5/3);

//remainder
console.log(5,' % ',3,' = ',5%3);

//assignment
let x = 100; //hundred is assigned to x
//x = x + 20; this line can be short handed as below
x += 20;
//short hand can be used in all opeartors

//comaprison operator
console.log('10>15'+10>15); //false

console.log('10<15',10<15); //true

console.log('10>=15',10<15); //false

console.log('10=<15',10<15); //true

//TEMPLATE LITERALS
console.log('My name is ',name,' and my age is',retu);

console.log(`My Name is ${name} and I am ${age} years old`);





