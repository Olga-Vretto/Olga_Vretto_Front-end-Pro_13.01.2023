const age = prompt("Вкажіть рік народження:", "");
const city = prompt("Вкажіть місто проживання:", "");
const sport = prompt("Вкажіть улюблений вид спорту", "");

let messageAge;
let messageCity;
let messageSport;

switch (age) {
  case "":
  case null:
    messageAge = "Шкода, що Ви не захотіли ввести свій рік народження.";
    break;
  default:
    messageAge = `Тобі ${2023 - age}.`;
    break;z
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
    break;
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
    messageSport = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту.";
    break;
  default:
    messageSport = `Твій улюблений вид спорту: ${sport}.`;
    break;
}

alert(`${messageAge} \n ${messageCity} \n ${messageSport}`);


