// Задача 18

// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.

// import axios from "axios";

// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// };

// const getUsers = async () => {
//   const users = await fetchUsers();
//   console.log(users);
// };

// getUsers();

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.

// !!!!!!!!!!!!!!!Рішення:
// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// import axios from "axios";

// const fetchUsers = async (): Promise<User[]> => {
//   const response = await axios.get<User[]>(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   return response.data;
// };

// const getUsers = async () => {
//   const users = await fetchUsers();
//   users.forEach((user) => {
//     console.log(`${user.name} (${user.email})`);
//   });
//   //   console.log(users);
// };

// getUsers();
