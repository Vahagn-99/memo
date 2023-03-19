const startButton = document.querySelector('.start-btn');
// Սա նրա համար եմ արել որ ստարտի ժամանաակ աշխատի ուղակի
// մի բան նիտոա քիմ ու ճիշտ չի աշխատմ
//  եթե կարաք տեսեք ինչն ա խնդիրը ու ուղղեք

// Ստանում ենք cards
const cards = document.querySelectorAll(".card");

const cardsImgFront = document.querySelectorAll(".front-view");
const cardsImgBack = document.querySelectorAll(".back-view");

// Ես հաղի բարդության ընտրության համար
const dropDown = document.querySelector('.dropbtn');
const levelBtn = document.querySelectorAll('.level-btn');
const levelBtnLow = document.querySelector('.level-low');
const levelBtnMid = document.querySelector('.level-mid');
const levelBtnHigh = document.querySelector('.level-high');


// Ստանում ենք card ֊ի mid֊ը
const cardWraper = document.querySelector('.cards');
const cardMid = document.querySelectorAll('.card-mid');
const cardHigh = document.querySelectorAll('.card-high');

dropDown.addEventListener('click',(e)=>{
  document.querySelector('#myDropdown').classList.toggle('show');
})

// Low
levelBtnLow.addEventListener('click', function () {
  cardWraper.classList.remove('cards-mid');
  cardWraper.classList.remove('cards-high');
  cardWraper.style.width = '350px';
  cardWraper.style.height = '450px';
    // 
    cardMid.forEach(function (item) {
        item.classList.add('card-mid')
    })
    //    
    cardHigh.forEach(function (item) {
        item.classList.add('card-high')
    })
})

// Mid
levelBtnMid.addEventListener('click', function () {
    cardWraper.classList.add('cards-mid')
    cardWraper.classList.remove('cards-high');
    // 
    // if (cardMid.classList.contains('card-mid'))
    //     cardMid.classList.toggle('card-mid-block');
    cardMid.forEach(function (item) {
        item.classList.remove('card-mid')
    })
    // 
    cardHigh.forEach(function (item) {
        item.classList.add('card-high')
    })
})


// High
levelBtnHigh.addEventListener('click', function () {
  cardWraper.classList.add('cards-high');
  cardWraper.style.width = '390px';
  cardWraper.style.height = '490px';
  // 
  cards.forEach(function (item) {
      item.classList.remove('card-high')
  })
  cardMid.forEach(function (item) {
      item.classList.remove('card-mid')
  })
  cardHigh.forEach(function (item) {
      item.classList.remove('card-high')
  })
})


startButton.addEventListener('click', (e) => {
//  levelBtn.forEach(function (level) {
//     level.addEventListener('click', function () {
//         dropDown.innerHTML = level.innerHTML
//     })
// })
// 

// էս են նույն լոգիկանա ուղակի ուրիշ ձև
compareCards();

cards.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.add('flip');
    console.log("Data-Value name", card.dataset.value);
    compareCards();
  });
});

// 

//Ես ել սխալի վախտ պետքա սենց shake անի ուղղկի mouseenter֊ով եմ արե ես պահին վոր տենանք վոնցա աշխատում
// հլը որ սա պետք չի

// card.forEach(function (item) {
//     item.addEventListener('mouseenter', function () {
//         item.classList.add('shake');
//     });
// });

// card.forEach(function (item) {
//     item.addEventListener('mouseleave', function () {
//         item.classList.remove('shake');
//     });
// });

//esel erb sexmum es strat jamanaky sksuma gnal erba havasarvuma 0-i bolor qartery pakvum en
//bayc ka mi xntir erb ajamanaky avartvumea uxaki alerta linum vor jamaky avartvel a
// Ես էտ խնդիրը ուղղել եմ

const timerElement = document.getElementById('timer');

let timeLeft =30;

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = `0:${timeLeft}s`;
    setTimeout(updateTimer, 1000);
  } else {
    timerElement.innerHTML = "Time is up!";
  }
}
updateTimer();
// Եթե ուրիշ տեղե ենք սղմում պակվումա (կամ ելի իրա վրա երկրորդ անգամ սղմելուց)
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
// չգիտեմ տեսել եք թե չէ բայվ mid-մ ու high լեվելներմ վերջմ երկու ավել քարա մնմ վայթե մեկը կարմիրից մեկը կանաչից

});

function compareCards() {
  const openCards = document.querySelectorAll('.flip:not(.matched)');
  if (openCards.length === 2) {
    if (openCards[0].dataset.value === openCards[1].dataset.value) {
      console.log("Have the same values");
      openCards.forEach(function(card){
        card.classList.add('matched');
      });
    } else {
      console.log("Do not have the same values");
      openCards.forEach(function(card){
        card.classList.add('shake');
        setTimeout(() => {
            card.classList.remove('flip', 'shake');
          }, 1500);
      });
    }
  }
}

