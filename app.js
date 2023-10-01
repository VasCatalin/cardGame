// variabile GLOBALE

const cards = {};
let currentCardNumber = 1;

const heroNames = [
  'Ursaru',
  'Pheonix',
  'Ichigo',
  'Sfantul',
  'Motanul',
  'BlackWolf',
  'Kiru',
  'Spectrul',
  'CapitanulNebunie',
  'ZanaNeagra',
  'ErouldeFier',
  'Luptatorul',
  'EroinaElla',
  'ShadowNinja',
  'Stelarul',
  'Verde',
];

const heroDescription = [
  'Ursaru este un erou puternic si misterios, cu abilitati extraordinare.',
  'Pheonix este cunoscut pentru viteza sa uluitoare si abilitatile sale de zbor.',
  'Ichigo este un erou enigmatic, cu puteri magice neobisnuite.',
  'Sfantul este mereu gata sa salveze ziua si sa lupte pentru justitie.',
  'Motanul are control asupra elementului electric si poate emite descarcari puternice de energie.',
  'BlackWolf este cel mai puternic erou din lume, capabil sa mute munții.',
  'Kiru este un erou nemilos, dedicat eliminarii raului din lume.',
  'Kamikaze are abilitatea de a deveni invizibil si de a se deplasa in tarâmul spiritelor.',
  'CapitanulNebunie este cunoscut pentru umorul sau debordant si abilitatile sale haotice.',
  'ZanaNeagra este un erou al întunericului, capabil sa invoce forte supranaturale.',
  'ErouldeFier are o armura incredibil de rezistenta si o putere neegalata.',
  'Luptatorul nu renunta niciodata si lupta cu determinare impotriva raului.',
  'EroinaEla poate controla focul, apa, pamântul si aerul.',
  'ShadowNinja se deplaseaza in umbre si loveste inamicul din întuneric.',
  'Stelarul poate controla stelele si are puteri cosmice uimitoare.',
  'Verde nu cunoaste teama si lupta cu curaj în orice situatie.',
];

const heroRarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
// let cardLocation = '';

let allGameCards = {
  name: [],
  card: [],
  diamond: [],
  rarity: [],
  power: [],
  picture: [],
  text: [],
  cardId: [],
};

let packCards = {
  name: [],
  card: [],
  diamond: [],
  rarity: [],
  power: [],
  picture: [],
  text: [],
  cardId: [],
  divID: [],
};

let handCard = {
  name: [],
  card: [],
  diamond: [],
  rarity: [],
  power: [],
  picture: [],
  text: [],
  cardId: '',
};

let warCards = {
  name: [],
  card: [],
  diamond: [],
  rarity: [],
  power: [],
  picture: [],
  text: [],
  cardId: [],
  divID: [],
};

for (let i = 0; i < 100; i++) {
  function generateRandomID() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    let randomID = '';

    for (let i = 0; i < 5; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      randomID += randomLetter;
    }

    for (let i = 0; i < 5; i++) {
      const randomDigit = digits[Math.floor(Math.random() * digits.length)];
      randomID += randomDigit;
    }
    return randomID;
  }

  let randomID = generateRandomID();
  allGameCards.cardId.push(`${randomID}`);

  let randomNumber = Math.floor(Math.random() * heroNames.length);
  allGameCards.name.push(`${heroNames[randomNumber]}`);

  allGameCards.text.push(`${heroDescription[randomNumber]}`);
  allGameCards.picture.push(randomNumber);

  let cardRarity;
  const probability = Math.random();
  if (probability < 0.32) {
    cardRarity = 1;
  } else if (probability < 0.59) {
    cardRarity = 2;
  } else if (probability < 0.76) {
    cardRarity = 3;
  } else if (probability < 0.88) {
    cardRarity = 4;
  } else {
    cardRarity = 5;
  }

  let randomRarity = heroRarity[cardRarity - 1];
  allGameCards.card.push(`${randomRarity}`);
  allGameCards.diamond.push(`${randomRarity}`);
  allGameCards.rarity.push(`${randomRarity}`);
  rarityCardPower = cardRarity - 1;
  if (rarityCardPower === 0) {
    heroPower = Math.floor(Math.random() * 50) + 1;
  } else if (rarityCardPower === 1) {
    heroPower = Math.floor(Math.random() * 50) + 50;
  } else if (rarityCardPower === 2) {
    heroPower = Math.floor(Math.random() * 50) + 100;
  } else if (rarityCardPower === 3) {
    heroPower = Math.floor(Math.random() * 50) + 150;
  } else {
    heroPower = Math.floor(Math.random() * 50) + 200;
  }

  allGameCards.power.push(heroPower);
}

let cardChar = '';
let cardCard = '';
let cardDiamond = '';
let cardRarity = '';
let cardPower = '';
let cardPicture = '';
let cardText = '';
let cardIdd = '';

let sectionName = '';
// openPack START

function openPack() {
  cardLocation = 'card-box';
  if (packCards.name.length >= 4) {
    sectionName = 'cardsContainer';
    let newCard = Math.floor(Math.random() * allGameCards.name.length);

    cardChar = allGameCards.name[newCard];
    cardCard = allGameCards.card[newCard];
    cardDiamond = allGameCards.diamond[newCard];
    cardRarity = allGameCards.rarity[newCard];
    cardPower = allGameCards.power[newCard];
    cardPicture = allGameCards.picture[newCard];
    cardText = allGameCards.text[newCard];
    cardIdd = allGameCards.cardId[newCard];

    openNewPack();
    packCards.name.push(cardChar);
    packCards.card.push(cardCard);
    packCards.diamond.push(cardDiamond);
    packCards.rarity.push(cardRarity);
    packCards.power.push(cardPower);
    packCards.picture.push(cardPicture);
    packCards.text.push(cardText);
    packCards.cardId.push(cardIdd);

    allGameCards.name.splice([newCard], 1);
    allGameCards.card.splice([newCard], 1);
    allGameCards.diamond.splice([newCard], 1);
    allGameCards.rarity.splice([newCard], 1);
    allGameCards.power.splice([newCard], 1);
    allGameCards.picture.splice([newCard], 1);
    allGameCards.text.splice([newCard], 1);
    allGameCards.cardId.splice([newCard], 1);

    cardLocation = 'war-card-box';
    sectionName = 'battleContainer';
    let GetNewCard = Math.floor(Math.random() * allGameCards.name.length);
    newCard = GetNewCard;

    cardChar = allGameCards.name[newCard];
    cardCard = allGameCards.card[newCard];
    cardDiamond = allGameCards.diamond[newCard];
    cardRarity = allGameCards.rarity[newCard];
    cardPower = allGameCards.power[newCard];
    cardPicture = allGameCards.picture[newCard];
    cardText = allGameCards.text[newCard];
    cardIdd = allGameCards.cardId[newCard];

    openNewPack();
    warCards.name.push(cardChar);
    warCards.card.push(cardCard);
    warCards.diamond.push(cardDiamond);
    warCards.rarity.push(cardRarity);
    warCards.power.push(cardPower);
    warCards.picture.push(cardPicture);
    warCards.text.push(cardText);
    warCards.cardId.push(cardIdd);

    allGameCards.name.splice([newCard], 1);
    allGameCards.card.splice([newCard], 1);
    allGameCards.diamond.splice([newCard], 1);
    allGameCards.rarity.splice([newCard], 1);
    allGameCards.power.splice([newCard], 1);
    allGameCards.picture.splice([newCard], 1);
    allGameCards.text.splice([newCard], 1);
    allGameCards.cardId.splice([newCard], 1);

    // openPack END
  } else {
    for (let i = 0; i < 5; i++) {
      sectionName = 'cardsContainer';
      cardLocation = 'card-box';

      cardChar = allGameCards.name[i];
      cardCard = allGameCards.card[i];
      cardDiamond = allGameCards.diamond[i];
      cardRarity = allGameCards.rarity[i];
      cardPower = allGameCards.power[i];
      cardPicture = allGameCards.picture[i];
      cardText = allGameCards.text[i];
      cardIdd = allGameCards.cardId[i];

      openNewPack();
      packCards.name.push(cardChar);
      packCards.card.push(cardCard);
      packCards.diamond.push(cardDiamond);
      packCards.rarity.push(cardRarity);
      packCards.power.push(cardPower);
      packCards.picture.push(cardPicture);
      packCards.text.push(cardText);
      packCards.cardId.push(cardIdd);

      allGameCards.name.splice(i, 1);
      allGameCards.card.splice(i, 1);
      allGameCards.diamond.splice(i, 1);
      allGameCards.rarity.splice(i, 1);
      allGameCards.power.splice(i, 1);
      allGameCards.picture.splice(i, 1);
      allGameCards.text.splice(i, 1);
      allGameCards.cardId.splice(i, 1);
    }
    // openPack END
  }
}

function removeCardfromWar() {
  const elementToDelete = document.getElementById(warCards.cardId[0]);
  if (elementToDelete) {
    elementToDelete.parentNode.removeChild(elementToDelete);
  }

  const SecondElementToDelete = document.getElementById(warCards.cardId[1]);
  if (SecondElementToDelete) {
    SecondElementToDelete.parentNode.removeChild(SecondElementToDelete);
  }
}

function removeCardFromBattle() {
  warCards.name = [];
  warCards.card = [];
  warCards.diamond = [];
  warCards.rarity = [];
  warCards.power = [];
  warCards.picture = [];
  warCards.text = [];
  warCards.cardId = [];
}

function prepareForFight() {
  const prepareCardId = handCard.cardId;
  let prepareCard = document.getElementById(`${prepareCardId}`);
  let checkClass = document.querySelectorAll('.card-box');

  checkClass.forEach(function (checkClas) {
    if (checkClas.classList.contains('prepare-for-war')) {
      checkClas.classList.remove('prepare-for-war');
    }
    prepareCard.classList.add('prepare-for-war');
  });
}

function startFight() {
  const homePower = warCards.power[0];
  const awayPower = warCards.power[1];
  let homeScoreMessage = document.getElementById('warScoreHome');
  let awayScoreMessage = document.getElementById('warScoreAway');

  let homeScore = Number(homeScoreMessage.innerText);
  let awayScore = Number(awayScoreMessage.innerText);
  switch (true) {
    case homePower < awayPower:
      awayScore += 1;
      break;

    case homePower > awayPower:
      homeScore += 1;
      break;

    default:
      console.log('Egalitate');
  }

  setTimeout(function () {
    homeScoreMessage.innerText = homeScore;
    awayScoreMessage.innerText = awayScore;

    let win = document.getElementById('win');

    switch (true) {
      case homeScore === 10:
        win.innerText = 'win!';
        homeScoreMessage.innerText = 0;
        awayScoreMessage.innerText = 0;
        break;

      case awayScore === 10:
        win.innerText = 'Lost!';
        homeScoreMessage.innerText = 0;
        awayScoreMessage.innerText = 0;
        break;

      default:
    }
    setTimeout(function () {
      removeCardfromWar();
      removeCardFromBattle();
    }, 2000);
  }, 2000);
}

function attack() {
  let checkCard = handCard.cardId;
  if (
    checkCard === '' ||
    packCards.cardId.includes(handCard.cardId) === false
  ) {
    console.log('nu ai selectat carte');
  } else {
    sectionName = 'battleContainer';

    cardChar = handCard.name;
    cardCard = handCard.card;
    cardDiamond = handCard.diamond;
    cardRarity = handCard.rarity;
    cardPower = handCard.power;
    cardPicture = handCard.picture;
    cardText = handCard.text;
    cardIdd = handCard.cardId;

    const elementToDelete = document.getElementById(cardIdd);
    if (elementToDelete) {
      elementToDelete.parentNode.removeChild(elementToDelete);
    }

    cardLocation = 'card-box';
    openNewPack();
    const indexOfcardIdd = packCards.cardId.indexOf(cardIdd);
    packCards.name.splice(indexOfcardIdd, 1);
    packCards.card.splice(indexOfcardIdd, 1);
    packCards.diamond.splice(indexOfcardIdd, 1);
    packCards.rarity.splice(indexOfcardIdd, 1);
    packCards.power.splice(indexOfcardIdd, 1);
    packCards.picture.splice(indexOfcardIdd, 1);
    packCards.text.splice(indexOfcardIdd, 1);
    packCards.cardId.splice(indexOfcardIdd, 1);

    handCard.name = '';
    handCard.card = '';
    handCard.diamond = '';
    handCard.rarity = '';
    handCard.power = '';
    handCard.picture = '';
    handCard.text = '';
    handCard.cardId = '';

    warCards.name.push(cardChar);
    warCards.card.push(cardCard);
    warCards.diamond.push(cardDiamond);
    warCards.rarity.push(cardRarity);
    warCards.power.push(cardPower);
    warCards.picture.push(cardPicture);
    warCards.text.push(cardText);
    warCards.cardId.push(cardIdd);

    openPack();
    startFight();
  }
}

function onCardClick() {
  getDivId = this.id;
  console.log(getDivId);

  handCard.cardId = getDivId;
  prepareForFight();
  const index = packCards.cardId.indexOf(`${getDivId}`);
  if (index !== -1) {
    handCard.card = packCards.card[index];
    handCard.diamond = packCards.diamond[index];
    handCard.name = packCards.name[index];
    handCard.picture = packCards.picture[index];
    handCard.power = packCards.power[index];
    handCard.rarity = packCards.rarity[index];
    handCard.text = packCards.text[index];
  }

  // console.log(handCard);

  // animation START
  // if (this.dataset.selected) {
  //   this.style.transform = 'translateY(0)';
  //   delete this.dataset.selected;
  // } else {
  //   const selectedCard = document.querySelector(
  //     `.${cardLocation}[data-selected]`,
  //   );

  //   if (selectedCard !== null) {
  //     selectedCard.style.transform = 'translateY(0)';
  //     delete selectedCard.dataset.selected;
  //   }
  //   this.style.transform = 'translateY(-50px)';
  //   this.dataset.selected = true;
  // }
  // animation END
}

function openNewPack() {
  const container = document.getElementById(`${sectionName}`);
  // create sectionCardBox START
  const sectionCardBox = document.createElement('section');
  sectionCardBox.id = `${cardIdd}`;
  sectionCardBox.classList.add(`${cardLocation}`);

  // create cardBackground START
  const divCardBackground = document.createElement('div');
  divCardBackground.id = 'cardBackground';
  divCardBackground.classList.add('card-background');

  const heroBackground = document.createElement('img');
  heroBackground.src = `./img/cards/${cardCard}.png`;
  heroBackground.alt = 'Raritate';
  heroBackground.className = 'card-img';
  divCardBackground.appendChild(heroBackground);

  sectionCardBox.appendChild(divCardBackground);
  // create cardBackground END

  // create sectionCardTop START
  const sectionCardTop = document.createElement('section');
  sectionCardTop.id = 'sectionCardTop';
  sectionCardTop.classList.add('card-top');

  // create divCardPower START
  const divCardPower = document.createElement('div');
  divCardPower.id = 'divCardPower';
  divCardPower.classList.add('card-power');
  // create imgCardPower START
  const imgCardPower = document.createElement('img');
  imgCardPower.src = './img/frame/minion (7).png';
  imgCardPower.classList.add('card-power-img');
  divCardPower.appendChild(imgCardPower);
  // create imgCardPower END
  // create cardPowerH START
  const cardPowerH = document.createElement('h1');
  cardPowerH.id = 'cardPower';
  cardPowerH.innerHTML = `⚔︎ ${cardPower}`;

  divCardPower.appendChild(cardPowerH);
  // create cardPowerH END
  sectionCardTop.appendChild(divCardPower);
  // create divCardPower END

  // create divCardName START
  const divCardName = document.createElement('div');
  divCardName.id = 'divCardName';
  divCardName.classList.add('card-name');
  // create imgCardName START
  const imgCardName = document.createElement('img');
  imgCardName.src = './img/frame/minion (6).png';
  imgCardName.classList.add('card-name-img');
  divCardName.appendChild(imgCardName);
  // create imgCardName END
  // create cardNameH START
  const cardNameH = document.createElement('h1');
  cardNameH.id = 'cardName';
  cardNameH.innerText = `${cardChar}`;

  switch (true) {
    case cardRarity === 'common':
      cardNameH.style = 'color: #ffffff;';
      break;
    case cardRarity === 'uncommon':
      cardNameH.style = 'color: #77ca72;';
      break;
    case cardRarity === 'rare':
      cardNameH.style = 'color: #96bbf4;';
      break;
    case cardRarity === 'epic':
      cardNameH.style = 'color: #c495ce;';
      break;
    default:
      cardNameH.style = 'color: #e3cf6b;';
  }

  divCardName.appendChild(cardNameH);
  // create cardNameH END
  sectionCardTop.appendChild(divCardName);
  // create divCardName END

  // create cardHeroImg START
  const cardHeroImg = document.createElement('div');
  cardHeroImg.id = 'heroImg';

  const heroImage = document.createElement('img');
  heroImage.src = `./img/heroes/heroes (${cardPicture}).png`;
  heroImage.alt = 'Poza cu Supererou';
  heroImage.className = 'hero-img';
  cardHeroImg.appendChild(heroImage);

  cardHeroImg.classList.add('card-hero');
  // create cardHeroImgFrame START
  const cardHeroImgFrame = document.createElement('img');
  cardHeroImgFrame.src = './img/frame/minion (4).png';
  cardHeroImgFrame.classList.add('hero-img-frame');
  cardHeroImg.appendChild(cardHeroImgFrame);
  // create cardHeroImgFrame END
  sectionCardTop.appendChild(cardHeroImg);
  // create cardHeroImg END

  // create cardHeroDetails START
  const cardHeroDetails = document.createElement('div');
  cardHeroDetails.classList.add('card-hero-details');
  // create cardHeroDetailsFrame START
  const cardRarityDiamond = document.createElement('div');
  cardRarityDiamond.id = 'rarityDiamond';

  const rarityDiamond = document.createElement('img');
  rarityDiamond.src = `./img/rarity/${cardDiamond}.png`;
  rarityDiamond.alt = 'Poza cu Supererou';
  rarityDiamond.className = 'hero-img';
  cardRarityDiamond.appendChild(rarityDiamond);

  cardHeroDetails.appendChild(cardRarityDiamond);
  // create cardRarityDiamond END
  // create cardRarityDiamondbg START
  const cardRarityDiamondbg = document.createElement('img');
  cardRarityDiamondbg.src = './img/frame/minion (2).png';
  cardHeroDetails.appendChild(cardRarityDiamondbg);
  // create cardRarityDiamondbg END
  // create cardImgHeroDetails START
  const cardImgHeroDetails = document.createElement('p');
  cardImgHeroDetails.id = 'heroDetails';
  cardImgHeroDetails.innerText = `${cardText}`;
  cardHeroDetails.appendChild(cardImgHeroDetails);
  // create cardHeroDetails END
  sectionCardTop.appendChild(cardHeroDetails);
  // create cardHeroDetails END

  // create cardHeroFooter START
  const cardHeroFooter = document.createElement('div');
  cardHeroFooter.classList.add('card-hero-footer');
  // create cardHeroFooterImg START
  const cardHeroFooterImg = document.createElement('img');
  cardHeroFooterImg.src = './img/frame/minion (3).png';
  cardHeroFooter.appendChild(cardHeroFooterImg);
  // create cardHeroFooterImg END
  // create cardHeroFooterH START
  const cardHeroFooterH = document.createElement('h3');
  cardHeroFooterH.id = 'rarity';
  cardHeroFooterH.innerHTML = `${cardRarity}`;

  switch (true) {
    case cardRarity === 'common':
      cardHeroFooterH.style = 'color: #ffffff;';
      break;
    case cardRarity === 'uncommon':
      cardHeroFooterH.style = 'color: #77ca72;';
      break;
    case cardRarity === 'rare':
      cardHeroFooterH.style = 'color: #96bbf4;';
      break;
    case cardRarity === 'epic':
      cardHeroFooterH.style = 'color: #c495ce;';
      break;
    default:
      cardHeroFooterH.style = 'color: #e3cf6b;';
  }

  cardHeroFooter.appendChild(cardHeroFooterH);
  // create cardHeroFooterH END

  // // // create footerButton START
  // const cardHeroFooterBtn = document.createElement('button');
  // cardHeroFooterBtn.id = 'btnAttack';
  // cardHeroFooterBtn.classList.add('btn-attack');
  // cardHeroFooterBtn.innerText = 'Attack!';
  // cardHeroFooterBtn.onclick = openPack;
  // cardHeroFooter.appendChild(cardHeroFooterBtn);
  // // // create footerButton END

  sectionCardTop.appendChild(cardHeroFooter);
  // create cardHeroFooter END

  sectionCardBox.appendChild(sectionCardTop);
  // create sectionCardTop END
  container.appendChild(sectionCardBox);
  // create sectionCardBox END

  // atunci cand dau click pe secion card box se ruleaza functia on pack click
  sectionCardBox.addEventListener('click', onCardClick);
}
