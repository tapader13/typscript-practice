"use strict";
// let a = 'minhaj';
// console.log(a);
// console.log('sheikh hasina university');
//array
// let arr: number[] = [1, 2, 3];
// console.log(arr);
// const arr2: Array<string | number> = [1, 2, 3, 'mizan'];
// console.log(arr2);
// let arr3: Array<boolean> = [true, false];
// console.log(arr3);
//object
// type info = {
//   name: string;
//   roll: number;
//   univeresity: string;
// };
// const obj: info = {
//   name: 'minhaj',
//   roll: 13,
//   univeresity: 'sheikh hasina university',
// };
// console.log(obj);
// const obj1: info = {
//   name: 'marzan',
//   roll: 1,
//   univeresity: 'zakigonj govt. high school',
// };
// console.log(obj1);
//function
// type ADD=(a:number,b:number)=>void;
// const add:ADD=function add(a,b){
//     console.log(a+b);
// }
// add(2,3)
// type ADD=(a:number,b:number)=>number;
// const add:ADD=(a,b)=>{
//    return(a+b);
// }
// console.log(add(2,3));
// default
// type ADD=(a:number,b?:number)=>number;
// const add:ADD=(a,b=10)=>{
//    return(a+b);
// }
// console.log(add(2));
//optional
// type ADD = (a: number, b?: number) => number;
// const add: ADD = (a, b) => {
//   if (typeof b === 'undefined') {
//     return a;
//   } else {
//     return a + b;
//   }
// };
// console.log(add(2, 6));
//rest
// type rest = (...r: number[]) => number[];
// const restArr: rest = (...r) => {
//   return r;
// };
// console.log(restArr(3, 4, 5, 6));
//object
// type Product = {
//   name: string;
//   stock: number;
//   available: boolean;
// };
// const data = (product: Product) => {
//   console.log(
//     `product er name ${product.name}. ${
//       product.available && 'stock e ace ' + product.stock
//     } ta `
//   );
// };
// const productData: Product = {
//   name: 'laptop',
//   stock: 12,
//   available: false,
// };
// data(productData);
//never/error
// const errorHandler = () => {
//   return new Error();
// };
// const errorHandler = () => {
//   throw new Error();
// };
// console.log(errorHandler());
//class
// class Person {
//   private name;
//   protected age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   set setName(name: string) {
//     this.name = name;
//   }
// }
// class subPerson extends Person {
//   private email;
//   constructor(name: string, age: number, email: string) {
//     super(name, age);
//     this.email = email;
//   }
//   get getAge(): number {
//     return this.age;
//   }
// }
// const person1 = new subPerson('minhaj', 21, 'minhajtapader0@gmail.com');
// console.log(person1.getAge);
// person1.setName = 'miftah';
// console.log(person1);
// console.log(4);
//dom manipulation
// const form = document.getElementById('form') as HTMLFormElement;
// const btn = document.getElementById('btn');
// const input = document.getElementById('input') as HTMLInputElement;
// form.onsubmit = (e) => {
//   e.preventDefault();
//   const val = Number(input.value);
//   const h3 = (document.createElement('h3').textContent = String(val + 20));
//   const body = document.querySelector('body');
//   body?.append(h3);
// };
// function test<T, U>(a: T, b: U): string {
//   return `${a} plus ${b}`;
// }
// console.log(test<number, number>(2, 3));
