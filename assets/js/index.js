"use strict";

/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)*/
function rangeSum(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }
  return result;
}

/*2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные, id.
2.2 Создать объект студентской группы, содержащий имя университета, факультета и кафедры 
2.3 Связать обьект студента с обьектом его группы
2.4 Реализовать функцию вывода на экран всей информации о студенте (включая и информацию, связанную с универом) в произвольном виде. Функция должна принимать обьект студента*/

const student1 = {
  firstName: "Pavel",
  lastName: "Pavlenko",
  gender: "male",
  phoneNumber: "+38055667788",
  id: 1234,
};

const studentGroup1 = {
  university: "Zaporoska Politechnika",
  faculty: "Transport",
  department: "Transport Technologies",
};

// const testStudentInfo = {...student1, ...studentGroup1}; ??

const studentFullInfo = new Map([
  ["Student Info", { ...student1 }],
  ["Group Info", { ...studentGroup1 }],
]);

const getStudentInfo = (student) => studentFullInfo.entries(student);

// const student2 = {
//   firstName: 'Evgenia',
//   lastName: 'Ivanenko',
//   gender: 'female',
//   phoneNumber: '+38066779911',
//   id: 3235,
// };

// const studentGroup2 = {
//   university: 'Zaporoska Politechnika',
//   faculty: 'Law',
//   department: 'International Law',
// };

// const studentFullInfo = new Map([
//   [{...student1}, {...studentGroup1}],   ??
//   [{...student2}, {...studentGroup2}],
// ]);

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
// 3.5 Подсчитать количество отрицательных чисел в массиве

const arr1 = [
  3, 4, 6, 8, 0, 33, 55, 77, 99, 0, 22, 50, 7, 40, 46, -78, 56, -34, 76, 32, 90,
  44, 77, 79, 66,
];

const arr2 = [];
for (let i = 0; i < 10; i++) {
  arr2.push(Math.floor(Math.random() * 10));
}
for (let i = 10; i < 20; i++) {
  arr2.push(Math.ceil(Math.random() * 10));
}
for (let i = 20; i < 25; i++) {
  arr2.push(Math.ceil(Math.random() * -10));
}

function evenIndexOutput(arr) {
  for (let index = 1; index < arr.length; index++) {
    if (index % 2 === 0) {
      console.log(arr[index]);
    }
  }
}

function evenElementOutput(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      console.log(arr[index]);
    }
  }
}

function zeroElementOutput(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 0) {
      console.log(index);
    }
  }
}

function negativeElementOutput(arr) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      result++;
    }
  }
  return result;
}

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class PaperBook {
  constructor(author, name, yearPublish, publishFirm) {
    this.author = author;
    this.name = name;
    this.yearPublish = yearPublish;
    this.publishFirm = publishFirm;
  }
}

class ElectronicBookVersion extends PaperBook {
  constructor(
    author,
    name,
    yearPublish,
    publishFirm,
    format,
    electronicNumber
  ) {
    super(author, name, yearPublish, publishFirm);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
}
const book1 = new ElectronicBookVersion(
  "Marijn Haverbeke",
  "ELOQUENT JAVASCRIPT",
  2019,
  "Kiyiv",
  "pdf",
  112233
);

/*5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/

function fizz(n) {
  for (let i = 1; i < n; i++) {
    let b = "";
    if (i % 3 === 0) {
      b += "Fizz";
    }
    if (i % 5 === 0) {
      b += "Buzz";
    }
    console.log(b || i);
  }
}

// 6
// // С сервера передается обьект, имеющий следующую структуру:

// С помощью деструктуризации:
// - создать переменную users на основании массива в обьекте serverResponse
// - создать отдельные переменные для 3 и 4 пользователя

const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: "John",
        lastName: "Doe",
      },
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
      },
      {
        id: 2,
        name: "Admin",
        lastName: "Tiranovich",
      },
      {
        id: 3,
        name: "User",
        lastName: "Undefinovich",
      },
    ],
  },
};

const {data: {...users}} = serverResponse;
const [,,{thirdUser}] = serverResponse;