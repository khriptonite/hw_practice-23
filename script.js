// =================== HOMEWORK ======================

// 1. Scrieți o funcție care primește un obiect și o cheie și verifică dacă cheia există în obiect.

const carModels = {
  mercedes: "Vito",
  volkswagen: "Pollo",
  dacia: "Duster",
  tesla: "Roadster",
};

const instruments = {
  bass: "Fender",
  guitar: "Gibson",
  drums: "Tama",
  piano: "Yamaha",
};

let keyWord = "Fender";

const findObjKey = (obj, word) => {
  return Object.keys(obj).find((key) => obj[key] === word)
    ? `${word} is in the object`
    : `${word} is not there`;
};

console.log(findObjKey(instruments, keyWord));

// ======================================
// 2. Scrieți o funcție care primește un șir de caractere și numără câte vocale conține șirul

const greet = "Hey you, what about some beer?";
const vowlsCount = (str) => {
  let count = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(vowlsCount(greet));

// ======================================
// 3. Scrieți o funcție care primește un obiect care conține notele a mai mulți studenți și returnează un alt obiect care conține studenții clasificați în funcție de media notelor lor.

function sortStudentsByAverageMarks(students) {
  const sortedStudents = [];

  for (const studentName in students) {
    if (students.hasOwnProperty(studentName)) {
      const marks = students[studentName];
      const averageMark = Math.floor(
        marks.reduce((total, mark) => total + mark, 0) / marks.length
      );

      sortedStudents.push({
        name: studentName,
        averageMark: averageMark,
      });
    }
  }

  sortedStudents.sort((a, b) => b.averageMark - a.averageMark);

  const sortedStudentsObject = {};
  sortedStudents.forEach((student) => {
    sortedStudentsObject[student.name] = student.averageMark;
  });

  return sortedStudentsObject;
}

const grades = {
  Antonio: [6, 7, 9],
  Esmeralda: [10, 9, 9],
  Gorgonzola: [8, 7, 9],
  Juan: [6, 8, 7],
};

const sortedStudents = sortStudentsByAverageMarks(grades);

console.log(sortedStudents);

// ======================================
// 4. Scrieți o funcție care primește un șir de caractere și returnează șirul inversat.

function reverseStr(str) {
  const strToArr = str.split("");
  const reversed = strToArr.reverse();
  const arrToStr = reversed.join("");
  return arrToStr;
}

console.log(reverseStr("Hello, World!"));

// ======================================
// 5. Problema: Verificarea palindromului
//  Scrieți o funcție care primește un șir de caractere și verifică dacă acesta este un palindrom (se citește la fel în ambele sensuri)

function isPalindrome(str) {
  let i = str.length - 1;
  for (let j = 0; j < str.length / 2; j++) {
    if (str[j] != str[i]) {
      return false;
    }
    i--;
  }
  return true;
}

console.log(isPalindrome("civic"));

// ======================================
// 6. Scrieți o funcție findBestMatch(k, arr), care primeste k un numar, si arr o lista numere. functia trebuie sa intoarca numarul din lista care este cel mai aproape de k.

const array = [1, 4, 53, 45, 23, 11, 67, 32, 8, 91, 18];
const num = 15;

const closest = array.reduce(function (k, arr) {
  return Math.abs(arr - num) < Math.abs(k - num) ? arr : k;
});

console.log(closest);

// ======================================
// 7. Scrieți o funcție care primeste un array de numere, returneaza un array unde cifrele impare sunt sortate de la mic la mare dupa care vin numerele pare de la mare la mic.

const arr = [8, 2, 3, 1, 6, 9, 7, 4, 5];
let even = [];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}

const sortedArr = `${odd.sort()},${even.sort()}`;
console.log(sortedArr);
