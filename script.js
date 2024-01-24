// ex-1 : Oyning raqami beriladi va uni so'zlar bilan ifodalab beruvchi algoritmni yozing(switch...case).
// let monthNumber = 4;
// let result = "";
// switch (monthNumber) {
//   case 1:
//     result = alert("Yanvar");
//     break;
//   case 2:
//     result = alert("Fevral");
//     break;
//   case 3:
//     result = alert("Mart");
//     break;
//   case 4:
//     result = alert("Aprel");
//     break;
//   case 5:
//     result = alert("May");
//     break;
//   case 6:
//     result = alert("Iyun");
//     break;
//   case 7:
//     result = alert("Iyul");
//     break;
//   case 8:
//     result = alert("Avgust");
//     break;
//   case 9:
//     result = alert("Sentyabr");
//     break;
//   case 10:
//     result = alert("Oktyabr");
//     break;
//   case 11:
//     result = alert("Noyabr");
//     break;
//   case 12:
//     result = alert("Dekabr");
//     break;
//   default:
//     result = "Bunday hafta kuni mavjud emas";
//     break;
// }
// console.log(result);

// ex-2 : Oyning raqami beriladi va shu oy qaysi faslga tegishli ekanligini aniqlovchi algoritm yozing.
// let monthNumber = 8;
// let result = "";
// switch (monthNumber) {
//   case 1:
//     result = "Yanvar";
//     break;
//   case 2:
//     result = "Fevral";
//     break;
//   case 3:
//     result = "Mart";
//     break;
//   case 4:
//     result = "Aprel";
//     break;
//   case 5:
//     result = "May";
//     break;
//   case 6:
//     result = "Iyun";
//     break;
//   case 7:
//     result = "Iyul";
//     break;
//   case 8:
//     result = "Avgust";
//     break;
//   case 9:
//     result = "Sentyabr";
//     break;
//   case 10:
//     result = "Oktyabr";
//     break;
//   case 11:
//     result = "Noyabr";
//     break;
//   case 12:
//     result = "Dekabr";
//     break;
//   default:
//     result = "Bunday hafta kuni mavjud emas";
//     break;
// }
// console.log(result);
// for (let i = 1; i <= monthNumber; i++) {
//   if (monthNumber <= 4) {
//     result = "Bahor";
//     break;
//   }
//   if (monthNumber <= 6) {
//     result = "Yoz";
//     break;
//   }
//   if (monthNumber <= 9) {
//     result = "Kuz";
//     break;
//   }
//   if (monthNumber <= 12) {
//     result = "Qish";
//     break;
//   }
// }
// console.log("Ushbu oy " + result + " fasliga tegishli");

// ex-3 : 1 dan n gacha barcha tub sonlarni ekranga chiqaruvchi algoritm yozing.
// let son = +prompt("Inputlar soni");
// let sum = 0;

// for (let i = 0; i <= son; i++) {
//   let num = +prompt(`${i}-sonni kiriting`);
//   sum += num;
// }
// console.log(sum);

// ex-4 : n son berilgan va shuncha son kiritilishini sorovchi va kiritilgan barcha sonlarning yig'indisini topuvchi algoritm yozing
// let num1 = 4;
// for (let i = 2; i <= num1; i++) {
//   let tub = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       tub = false;
//       break;
//     }
//   }

//   if (tub) {
//     console.log(i);
//   }
// }
// ex-5 : 1 dan n gacha bo'lgan sonlarni teskari tartibda chiqaruvchi algoritm yozing.
// let n = 122; // Bu yerda n sonini o'zgartirishingiz mumkin
// for (let i = n; i > 0; i--) {
//   console.log(i);
// }
