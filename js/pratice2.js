function leapYear(year) {

  if (year % 400 == 0) {
    return true;
  }
  else if (year % 4 == 0 && year % 400 != 0){
    return true;
  }

  return false;
}

console.log("2020年はうるう年" + (leapYear(2020) ? "です。" : "ではありません。"));
console.log("2021年はうるう年" + (leapYear(2021) ? "です。" : "ではありません。"));
