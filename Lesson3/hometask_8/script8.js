const currentYear = Number(new Date().getFullYear());
let age = currentYear - Number(prompt("Вкажіть рік народження:", "2000"));
const city = prompt("Вкажіть місто проживання:", "Київ");
sport = prompt("Вкажіть улюблений вид спорту", "Бокс");

let messageAge;
let messageCity;
let messageSport;

if (age === null || age.trim === "") {
  messageAge = "Шкода, що Ви не захотіли ввести свій рік народження.";
} else {
  messageAge = `Тобі ${age}.`;
}

switch (city) {
  case "Київ":
    messageCity = "Ти живеш у столиці України.";
    break;
  case "Вашингтон":
    messageCity = "Ти живеш у столиці США.";
    break;
  case "Лондон":
    messageCity = "Ти живеш у столиці Англії.";
    break;
  case "":
  case null:
    messageCity = "Шкода, що Ви не захотіли ввести своє місто.";
  default:
    messageCity = `Ти живеш у місті ${city}.`;
    break;
}

switch (sport) {
  case "Бокс":
    messageSport = "Круто! Хочеш стати наступним Клічко?";
    break;
  case "MMA":
    messageSport = "Круто! Хочеш стати наступним Перейро?";
    break;
  case "Баскетбол":
    messageSport = "Круто! Хочеш стати наступним Джорданом?";
    break;
  case "":
  case null:
    messageSport = `Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`;
  default:
    messageSport = `Твій улюблений вид спорту: ${sport}`;
    break;
}

alert(`${messageAge} ${messageCity} ${messageSport}`);
