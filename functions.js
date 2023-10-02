function cleanCard(element) {
  element.cardId = [];
  element.card = [];
  element.diamond = [];
  element.name = [];
  element.picture = [];
  element.power = [];
  element.rarity = [];
  element.text = [];
}

function setVariables(element1, element2) {
  cardChar = element1.name[element2];
  cardCard = element1.card[element2];
  cardDiamond = element1.diamond[element2];
  cardRarity = element1.rarity[element2];
  cardPower = element1.power[element2];
  cardPicture = element1.picture[element2];
  cardText = element1.text[element2];
  cardIdd = element1.cardId[element2];
}

function pushCard(element) {
  element.name.push(cardChar);
  element.card.push(cardCard);
  element.diamond.push(cardDiamond);
  element.rarity.push(cardRarity);
  element.power.push(cardPower);
  element.picture.push(cardPicture);
  element.text.push(cardText);
  element.cardId.push(cardIdd);
}

function spliceCard(element1, element2) {
  element1.name.splice([element2], 1);
  element1.card.splice([element2], 1);
  element1.diamond.splice([element2], 1);
  element1.rarity.splice([element2], 1);
  element1.power.splice([element2], 1);
  element1.picture.splice([element2], 1);
  element1.text.splice([element2], 1);
  element1.cardId.splice([element2], 1);
}
