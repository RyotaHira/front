"use strict";

// const [a, b, c] = ["A", "B", "C"];

// console.log(a); // → A
// console.log(b); // → B
// console.log(c); // → C

// function getArray() {
//   const array = ["A", "B", "C"];
//   return array;
// }

// const { a, c } = getObject(); // aとcだけ受け取る

// console.log(a); // → A
// console.log(c); // → C

// function getObject() {
//   return { a: "A", b: "B", c: "C" };
// }

const array = [1, 2, 3];
let newArray;

newArray = array.map((e1) => (e1 == 3 ? `${e1}rd` : `${e1}th`));
console.log(newArray);

newArray = array.map((e1) => {
  const squared = e1 * e1;
  return squared;
});
console.log(newArray);

const sayHello = (name, middle) => `Hello ${name}・${middle}!`;
console.log(sayHello("Ryota", "Hira"));

const test1 = function (who) {
  return `Hello ${who}!`;
};
const test2 = (who) => {
  return `Hello ${who}!`;
};
const test3 = (who) => `Hello ${who}!`; // 式の計算結果が戻り値になる

console.log(test1("a"));
console.log(test2("b"));
console.log(test3("c"));

const obj = {
  name: "OJK",
  sayHello: function () {
    console.log("Hello World!!");
  },
};

obj.sayHello(); // → Hello World!!
console.log(obj.name);

// funciton関数式
const okTest = {
  rec: "OK test",
  isGood: function () {
    console.log(this.rec);
  },
};

const okTest2 = {
  rec: "OK test2",
  isGood() {
    console.log(this.rec);
  },
};

okTest.isGood();
okTest2.isGood();
