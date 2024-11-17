"use scrict";

let drinksPrice = {
  latte: 60,
  cocoa: 50,
  tea: 30,
};

function coffee(...drinks) {
  //alert(drink);
  let str = "";
  for (let i = 0; i < drinks.length; i++) {
    str += drinks[i];
  }
  alert(str);
}
coffee("latte", "cocoa");
