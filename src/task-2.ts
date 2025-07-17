// Задача 2

// Опис: Є функція, яка приймає суму (число) та тип валюти.

// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

// !!!!!!!!!!!!!!!Рішення:

// type Currency = "USD" | "EUR" | "UAH";
// type Params = {
//   amount: number;
//   currency: Currency;
// };
// function convertCurrency({ amount, currency }: Params): void {
//   console.log(`Converting ${amount} to ${currency}`);
// }
// convertCurrency({ amount: 100, currency: "EUR" });
// convertCurrency({ amount: 50, currency: "UAH" });
