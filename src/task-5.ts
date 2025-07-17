// Задача 5

// function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// createUser({ name: "Alice", age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

// !!!!!!!!!!!!!!!Рішення:

// type Params = {
//   name: string;
//   age: number;
// };
// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// };
// function createUser({ name, age }: Params): User {
//   return {
//     name,
//     age,
//     isAdmin: false,
//   };
// }

// console.log(createUser({ name: "Vitya", age: 33 }));
