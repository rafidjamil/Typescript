// type Person = {
//     name: string;
// };
// const person : Person = {
//      name: "Rafid",
// };
// console.log(person.name);

//Annotations (its like data type  e.g myName: string )
//string 
// let myName: string = "Rafid"
// myName = "Rafid Jamil"
// console.log(myName)
// //number 
// let age: number = 12
// console.log(age)
// //bolean
// let tsIsHard : boolean = false
// console.log(tsIsHard);


// Type inference
// in js we can update the variable data but in ts we did not able to update the data.
// let tech = "Typescript";
// let favnum = 12;
// let isHard = false;
// console.log(tech,favnum,isHard);
// console.log(typeof tech,typeof favnum,typeof isHard);




// Any type
// using the any type we can update the value number to string, string to boolean or any else e.g : any
// let age: any = 12
// age = "Rafid"
// age = true 
// console.log(age)


//Regular function / function parameter annotation
// function addOne(num:any){
//     return num+1;
// }
// const res = addOne("hi")
// console.log(res)



// Arrow function
// const double = (x:number,y:number)=> x * y;

// const res = double(4,22); //if do double(4,22,11), it gives warning cuz in parameter defines 2 variable
// console.log(res);


// Arrow function
// function greeting(personName :string="Anonoymous"){
//     return `Hello ${personName}`

// }
// const res = greeting("Rafid playground");
// console.log(res);



// Regular function
// imp note: Arrow fucntion always start from const and ahve = before () parameter 
// and regular function dont allow = before () parameter it only return and pass the val through arguments.
// function double1(x:number):number{ // :number kay bager bhi kaam chal jay ga ts is smart
//     return x * x;
// }
// const res = double1(2);
// console.log(res);


// const double2 = (x:number):number => x * x;
// console.log(double2(8));



//void fucntion: it is which do not return value, just avoid it you need to return in program.
// function printMsg(msg: string):void{

//     console.log(`This is my ${msg}`);
    
// }
// printMsg("message");


// Never
// function throwError(msg: string): never {
//     throw new Error(msg);
// }

// function infiniteLoop(): never{
//     while(true) {}
// }

// let x: never;

// function neverReturns(): never{
//     while(true){}
// }
// x = neverReturns();


// Array 
// const numberList: number[] = [2,4,6,8];
// const str: string[] = ["Hello","Rafid"];
// console.log(str);
// console.log(numberList);



// 2nd flavour of array
// const numberList: number[] =[]
// numberList.push(12,11)
// numberList.push(20)
// console.log(numberList);



// Old fashion array 
// const item: Array<number> = [12]
// console.log(item);



// 2D array 
// const singledi : number[] = [2,3,4];
// const doubledi : number[][] = [[4,5,6]];
// const tripledi : number[][][] = [[[6,7,8]]]

// console.log(singledi);
// console.log(doubledi);
// console.log(tripledi);



// Objects
// const person: {firstName: string; lastName: string; age: number}={
//     firstName: "Rafid",
//     lastName: "Jamil",
//     age: 21
// }
// console.log(`Name: ${person.firstName} ${person.lastName} & age: ${person.age}`);



// 2nd flavour of object
// function printUser() : {firstName: string; lastName: string; age: number}{
//     return{
//         firstName: "Rafid",
//         lastName:"Jamil",
//         age: 21

//     }
// }
// const res = printUser();
// console.log(res);



// type aliases it is to ignore the object pattern.
// type User={
//     name: string,
//     age: number,
//     location: string
// }
// const printDetail=(user:User)=>{
//     return `Name: ${user.name} Age: ${user.age} location: ${user.location}`
// }
// const res = printDetail({name: "Rafid", age: 21, location: "Pakistan"})
// console.log(res);



// optional property or read only 
// type User={
//     name: string,
//     age? : number,
//     readonly location: string //this is read only we could not change the entity 
// }
// const user: User={
//     name: "Rafid",
//     age: 21, //age user define nhi bhi karen ge to error phir bhi nhi ay ga this is called optional property
//     location: "Pakistan"
// }
// user.location = "China" //remove this line this will generate error because of readonly 
// console.log(`Name: ${user.name} Age: ${user.age} location: ${user.location}`);




// intersection type it is to combine the 2 types object    
// type Userinfo ={
//     name: string,
//     age: number
// }
// type Companydetails={
//     emial: string,
//     phone: string
// }
// type User = Userinfo & Companydetails;
// const user ={
//     name : "Rafid Jamil",
//     age: 21,
//     email: "rafidjamil010@gmail.com",
//     phone: "+923004179550"
// }
// console.log(user.name, user.age,user.email, user.phone);



// Unions,it  mainly used to insert password that you have to insert the pass with the username or email 
// or to insert multiple data types vales in single array 
// let password : string | number = 20
// type Userinfo ={
//     name: string,
//     age: number
// }
// type Companydetails={
//     emial: string,
//     password: string
// }
// let user : Userinfo | Companydetails={
//     emial: "rafidjamil010@gmail.com",
//     password: "pass123"
// }
// const items: (number|string)[] =[1,2,4,"hello"]
// console.log(items);
// console.log(user);


// literal types
// let color: "red" |"green" | "white";
// color="green"
// console.log(color);

// let isTrue: true| false;
// isTrue=true;
// console.log(isTrue);

// let password: "secrectpassword" = "secretpassword";
// console.log(password);



//tuples, have a fixed length and require a specific type in a specific position at every index
// const games: [string, number, string]=["game1",2,"game3"]
// console.log(games);



// Enum
// enum wheatherstatus {
//     Sunny= "sunny",
//     Rainy= "rainy",
//     Cloudy= "cloudy",
//     Snowy= "snowy"
// }
// const weather = wheatherstatus.Sunny;
// console.log(`${weather} is the current weather status`);



// some oop concept
// class Person{
//     name: string;
//     age:number;
//     constructor(name: string, age:number){
//         this.name = name;
//         this.age = age;
//     }
// }
// const person = new Person("Rafid", 21)
// console.log(person.name, person.age);



// Access Modifier	Same Class	Same Package	Subclass (Different Package)	Different Package (Non-Subclass)
// public	               ✅	       ✅	                   ✅	            ✅
// protected               ✅	       ✅	                   ✅	            ❌
// private	               ✅	       ❌	                   ❌	            ❌
// class Human{
//     public firstname: string;
//     private lastname: string;
//     private age:number;
//     // public gender: string;
//     constructor(firstname: string,lastname: string, age:number, gender:string){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         // this.gender = gender;
//     }
//     getName():string{
//         return this.firstname + " " + this.lastname
//     }

// }
// class Person extends Human{
//     public gender: string;
//     constructor(firstname: string, lastname: string, age:number, gender:string){
//         super(firstname, lastname, age, gender)
//         this.gender = gender
//         // this.gender = gender;
//     }
    
// }
// const person = new Person("Rafid", "Jamil", 21, "male")
// console.log(person);
// // console.log(Human.getName());
  



// interfaces An interface in TypeScript defines the structure (shape) of an object. 
// It specifies what properties and methods an object must have
// Example01 
// interface Computer{
//     name: string;
//     ram: number;
//     hdd : number
// }
// const computerExample: Computer ={
//     name: "Dell",
//     ram: 16,
//     hdd: 512
// }
// console.log(computerExample.name);
// console.log(computerExample.ram);
// console.log(computerExample.hdd);

// Example02
// interface Movie{
//     name: string;
//     rating: number;
//     genra?: string
// }
// const movieExample: Movie ={
//     name: "Avengers",
//     rating: 8.5,
//     // genra: "Action"
// }
// console.log(movieExample.name);
// console.log(movieExample.rating);
// console.log(movieExample.genra);


// Example03
// interface Mathoperation{
//     (x: number, y: number):number;
// }
// const add: Mathoperation=(a,b)=>a+b;
// const subtract: Mathoperation=(a,b)=>a-b;
// console.log(add(2,3));
// console.log(subtract(3,8));


// Example04 ye template kar rha h kay ham bht sare name info ko kay liye alag alag template na banana pare like forms
// interface Person{
//     firstName: string;
//     lastName: string;
//     age: number;
//     sayHello(): string;
// }
// function greet(person: Person){
//     console.log(` ${person.sayHello()} ${person.firstName} ${person.lastName} ${person.age} `);
   
// }
// const john: Person={
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     sayHello(){
//         // console.log("Hello");
//         return "Hello";
//     }
// }
// const rafid: Person={
//     firstName: "Rafid",
//     lastName: "Jamil",
//     age: 20,
//     sayHello(){
//         // console.log("Hello");
//         return "Hello I am";
//     }
// }
// greet(john);
// greet(rafid);


// Example05
// interface Song{
//     songName: string;
//     singerName: string;
//     printsonginfo(songName: string, singerName: string): string;
// }
// const song1:Song={
//     songName: "Naturally",
//     singerName: " Selena Gomez",
//     printsonginfo(songName: string, singerName: string): string{
//         return `Song Name: ${songName} Singer Name: ${singerName}`;
//     }
// }
// console.log(song1.songName, song1.singerName);
// console.log(song1.printsonginfo("Natural","Imagine Drag"));


// Example06
// interface movie{
//     name: string;
//     rating: number;
//     printmoviedetails(name: string, price:number, rating: number): string | number;
// }

// interface Moviemoredetails extends movie{
//     genra: string,
    
// }
// const movie1: Moviemoredetails={
//     name: "Avengers",
//     rating: 8.5,
//     genra: "Action",
//     printmoviedetails(name: string, price: number, rating: number): string | number{
//         return `Movie Name: ${name} Price: ${price} Rating: ${rating} Genra: ${movie1.genra}`;
//     }
// }
// const res = movie1.printmoviedetails("Avengers", 500, 8.5);
// const res2 = movie1.printmoviedetails("Ant-Man", 400, 7.5);
// console.log(res);
// console.log(res2);


// Example07 using OOP
// interface Vehical{
//     start(): void;
//     stop(): void;
// }
// class Car implements Vehical{
//     start():void{
//         console.log("Car Started");
//     }
//     stop():void{
//             console.log("Car Stopped");
//     }
// }
// const myCar = new Car();
// myCar.start();
// myCar.stop();


// Example08 using decleration merging
//  interface Car{
//     brand: string;
//     start(): void;
   
// }
// interface Car{
//     model: string;
//      stop(): void;
// }
//  const myCar: Car = {
//     brand: "BMW",
//     model: "X5",
//     start(): void{
//         console.log("Start");
//     },
//     stop(): void{
//         console.log("Stop");
//     }
//  }
// myCar.start();
// myCar.stop();




// Generics
// generics allow you to create reusable components that can work with a variety of types.
//  Generics make it possible for you to define functions, classes, 
// and interfaces that can work with different data types without having to duplicate code
// function printNumber(item:number, defaultValue:number): [number, number]{
//     return [item, defaultValue];
// }
// function printString(item:string, defaultValue:string): [string, string]{
//     return [item, defaultValue];
// }
// function printBolean(item:boolean, defaultValue:boolean): [boolean, boolean]{
//     return [item, defaultValue];
// }
// const num = printNumber(5,10);
// const str = printString("Hello", "World");
// const bln = printBolean(true, false); 
// console.log(num);
// console.log(str);
// console.log(bln);


// smart way to use generics
// function printItem<T>(item: T, defaultValue: T): [T, T]{
//     return [item, defaultValue];
// }
// const res = printItem<number>(10,11)
// const res2 = printItem<string>("Hello", "World")
// const res3 = printItem<boolean>(true, false)
// console.log(res);
// console.log(res2);
// console.log(res3);


// Example
// function printItem<T>(item: T, defaultValue: T): [T, T]{
//     return [item, defaultValue];
// }
// interface Dog{
//     name: string,
//     breed: string,
// }
// const dog1= printItem<Dog>(
//     {
//         name: "Buddy",
//         breed: "Golden Retriever",
//     },
//     {
//         name: "Max",
//         breed: "Labrador Retriever",
//     }
// )
// console.log(dog1);


// Example 
// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
//     key: string;
//     value: T;
// }{
//     const key = Object.keys(obj); //ye line sari keys ko array me convert kar rha h
//     const randKey = key[Math.floor(Math.random()* key.length)];
//     return {key: randKey, value: obj[randKey]}
// }
// const stringObject={a: "apple", b: "banana", c: "cherry"};
// const randomStringPair = getRandomKeyValuePair<string>(stringObject);
// console.log(randomStringPair);

// const numObject={"one": "1", "two": "2", "three": "3"};
// const randomNumPair = getRandomKeyValuePair<string>(numObject);
// console.log(randomNumPair);


// Example
// function filterarray <T>(array: T[], condition:(item: T) =>
// boolean): T[]{
//     return array.filter((item)=> condition(item))
// }
// const numberArr=[1,2,3,4,5,6,7,8,9,10];
// const evennumber= filterarray<number>(numberArr,(num)=> num%2 == 0);
// // console.log(evennumber);

// const stringArr = ["apple","banana", "cherry", "date","fine"];
// const shortWord = filterarray<string>(stringArr,(word)=> word.length<6)
// console.log(shortWord);


// interface Fruit {
//     name: string;
//     color: string
// }

// const fruitArr: Fruit[] = [
//     {name: "Appple", color:"Red"},
//     {name: "Banana", color: "Yellow"},
//     {name: "cheery", color: "Red" },
//      {name: "Mango", color: "Yellow" }
// ]

// const redFruits = filterarray<Fruit>(fruitArr, (fruit) => fruit.color ==="Yellow")
// console.log(redFruits);



// Example
// function reversePair <T, U>(value1: T, value2: U): [U,T]{
//     return [value2, value1];
// }

// const reversedPair = reversePair("Rafid", 20)
// console.log(reversedPair);



// Type Narrowing is the process of reducing a variable's 
// possible types to a more specific type so TypeScript knows exactly what type it is.
type Mytype = string | number;
function exampleFunction(value: Mytype):void{
    if(typeof value==="string"){
        console.log(value.toUpperCase());
        } else {
        console.log(value.toFixed(2));
    }
}
exampleFunction("Hello")
exampleFunction(20)

//instance of operator 
//intersection types





