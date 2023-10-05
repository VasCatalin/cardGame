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
  'Alex',
  'Polar',
  'JetAll',
  'Saolin',
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
  'Alex este un erou nemilos, dedicat eliminarii raului din lume.',
  'Polar are abilitatea de a deveni invizibil si de a se deplasa in tarâmul spiritelor.',
  'JetAll este cunoscut pentru umorul sau debordant si abilitatile sale haotice.',
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
};

function newGame() {
  for (let i = 0; i < 100; i++) {
    function generateRandomID() {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const digits = '0123456789';
      let randomID = '';

      for (let i = 0; i < 5; i++) {
        const randomLetter =
          letters[Math.floor(Math.random() * letters.length)];
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

// select CHAR START
// PICTURE
let profilePicture = 1;
let prevButton = document.getElementById('prevPicture');
let nextButton = document.getElementById('nextPicture');
let profilePictureSelected = document.getElementById('profilePicture');

prevButton.addEventListener('click', function () {
  profilePicture--;
  if (profilePicture < 1) {
    profilePicture = 6;
  }
  profilePictureSelected.src = `./img/profile/avatar-${profilePicture}.png`;
});
nextButton.addEventListener('click', function () {
  profilePicture++;
  if (profilePicture > 6) {
    profilePicture = 1;
  }
  profilePictureSelected.src = `./img/profile/avatar-${profilePicture}.png`;
});

// NAME
let profileName = document.getElementById('profileName');
let profileNameSaved = '';
profileName.addEventListener('input', function () {
  let profilNameRealTime = profileName.value;
  profileNameSaved = profilNameRealTime;
  console.log(profileNameSaved);
});
// select CHAR END
let roundsNumber = document.getElementById('rounds');
let rounds = 0;
roundsNumber.addEventListener('input', function () {
  let profilNameRealTime = Math.abs(roundsNumber.value);
  rounds = profilNameRealTime;
  console.log(rounds);
});

function StartNewGame() {
  let arena = document.getElementById('gameArena');
  let arenaWelcome = document.getElementById('welcome');
  let userName = document.getElementById('warNameHome');
  let userPicture = document.getElementById('warProfileHome');
  userPicture.src = `./img/profile/avatar-${profilePicture}.png`;

  if (profileNameSaved === '') {
    profileNameSaved = 'Player';
  } else {
    profileNameSaved = profileNameSaved;
  }
  userName.innerText = `${profileNameSaved}`;

  arenaWelcome.style = 'display: none;';
  arena.style = 'display: block;';
  newGame();
  openPack();
}

if (rounds !== 0) {
  function restartGame() {
    location.reload();
  }
}

function openPack() {
  cardLocation = 'card-box';
  if (packCards.name.length >= 4) {
    sectionName = 'cardsContainer';
    let newCard = Math.floor(Math.random() * allGameCards.name.length);

    setVariables(allGameCards, newCard);
    openNewPack();
    pushCard(packCards);

    spliceCard(allGameCards, newCard);

    cardLocation = 'war-card-box';
    sectionName = 'battleContainer';
    let GetNewCard = Math.floor(Math.random() * allGameCards.name.length);
    newCard = GetNewCard;

    setVariables(allGameCards, newCard);
    openNewPack();
    pushCard(warCards);
    spliceCard(allGameCards, newCard);
    // openPack END
  } else {
    for (let i = 0; i < 5; i++) {
      sectionName = 'cardsContainer';
      cardLocation = 'card-box';

      setVariables(allGameCards, [i]);
      openNewPack();
      pushCard(packCards);
      spliceCard(allGameCards, i);
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

function prepareForFight() {
  const prepareCardId = warCards.cardId;
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

  selectedRounds = Number(rounds);
  let cardsToHide = document.querySelectorAll('.card-box');
  cardsToHide.forEach(function (cardToHide) {
    if (cardToHide.classList.contains('prepare-for-war') === false) {
      cardToHide.classList.add('d-none');
    }

    if (
      (homeScore !== selectedRounds && awayScore < selectedRounds) ||
      (awayScore !== selectedRounds && homeScore < selectedRounds)
    ) {
      setTimeout(function () {
        cardToHide.classList.remove('d-none');
      }, 3000);
    }
  });

  setTimeout(function () {
    homeScoreMessage.innerText = homeScore;
    awayScoreMessage.innerText = awayScore;

    let win = document.getElementById('win');
    let winName = document.getElementById('winName');
    let winImg = document.getElementById('winImg');
    let winStatus = document.getElementById('warStatus');

    switch (true) {
      case homeScore === selectedRounds:
        if (homeScoreMessage !== selectedRounds) {
          homeScoreMessage.innerText = homeScoreMessage.innerText;
          awayScoreMessage.innerText = awayScoreMessage.innerText;
          win.style = 'color: var(--win)';

          setTimeout(function () {
            win.innerText = ` ~Winner!~ `;
            winName.innerText = profileNameSaved;
            winImg.src = `./img/profile/avatar-${profilePicture}.png`;
            winImg.alt = 'Winner Picture';
            winStatus.classList.add('fade-in');
            winStatus.style = 'right: 300px;';

            let restart = document.getElementById('restartGame');
            restart.classList.remove('d-none');
            restart.style = 'left: 105px;';
          }, 1000);
        } else {
          homeScoreMessage.innerText = 0;
          awayScoreMessage.innerText = 0;
        }
        break;

      case awayScore === selectedRounds:
        if (homeScoreMessage !== selectedRounds) {
          homeScoreMessage.innerText = homeScoreMessage.innerText;
          awayScoreMessage.innerText = awayScoreMessage.innerText;
          win.style = 'color: var(--lost)';
          setTimeout(function () {
            winName.innerText = profileNameSaved;
            win.innerText = '~Defeated!~';
            winImg.src = `./img/profile/avatar-${profilePicture}.png`;
            winImg.alt = 'Defeated Picture';
            winStatus.classList.add('fade-in');
            winStatus.style = 'right: 265px;';

            let restart = document.getElementById('restartGame');
            restart.classList.remove('d-none');

            restart.style = 'left: 134px;';
          }, 1000);
        } else {
          homeScoreMessage.innerText = 0;
          awayScoreMessage.innerText = 0;
          // win.innerText = 'Round Lost!';
        }
        break;
      default:
    }

    setTimeout(function () {
      removeCardfromWar();
      cleanCard(warCards);
    }, 1000);
  }, 2000);
}

var isAttacking = false;
function attack() {
  if (isAttacking) {
    console.log('Atac in desfasurare');
    return;
  }

  isAttacking = true;
  setTimeout(function () {
    isAttacking = false;
  }, 3000);

  // let checkCard = warCards.cardId;
  if (warCards.name.length === 0) {
    console.log('nu ai selectat carte');
  } else {
    sectionName = 'battleContainer';
    openPack();
    let cardsContainerBackground = document.getElementById(
      'cardsContainerBackground',
    );
    cardsContainerBackground.classList.add('cards-container-background-none');
    startFight();

    setTimeout(function () {
      cardsContainerBackground.classList.remove(
        'cards-container-background-none',
      );
    }, 3000);
  }
}

function onCardClick() {
  getClass = this.classList[0];
  console.log(getClass);

  attackAnimation = document.getElementById('battleContainerImg');
  attackAnimation.classList.add('attack-animation');

  if (getClass === 'card-box') {
    getDivId = this.id;
    console.log(getDivId);
    cleanCard(warCards);

    warCards.cardId.push(getDivId);
    prepareForFight();
    const index = packCards.cardId.indexOf(`${getDivId}`);
    if (index !== -1) {
      warCards.card.push(packCards.card[index]);
      warCards.diamond.push(packCards.diamond[index]);
      warCards.name.push(packCards.name[index]);
      warCards.picture.push(packCards.picture[index]);
      warCards.power.push(packCards.power[index]);
      warCards.rarity.push(packCards.rarity[index]);
      warCards.text.push(packCards.text[index]);
    }
  }
}

function openNewPack() {
  const container = document.getElementById(`${sectionName}`);
  // create sectionCardBox START
  const sectionCardBox = document.createElement('section');
  sectionCardBox.id = `${cardIdd}`;
  sectionCardBox.classList.add(`${cardLocation}`, 'get-class');

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
  rarityDiamond.classList.add('diamond-hero-img');
  cardRarityDiamond.appendChild(rarityDiamond);

  cardHeroDetails.appendChild(cardRarityDiamond);
  // create cardRarityDiamond END
  // create cardRarityDiamondbg START
  const cardRarityDiamondbg = document.createElement('img');
  cardRarityDiamondbg.classList.add('rarity-diamond');
  cardRarityDiamondbg.id = 'rarityDiamond';
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

  sectionCardTop.appendChild(cardHeroFooter);
  // create cardHeroFooter END

  sectionCardBox.appendChild(sectionCardTop);
  // create sectionCardTop END
  container.appendChild(sectionCardBox);
  // create sectionCardBox END

  // atunci cand dau click pe secion card box se ruleaza functia on pack click
  sectionCardBox.addEventListener('click', onCardClick);
}
