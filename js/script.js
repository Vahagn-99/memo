// Ստանում ենք cards
const card = document.querySelectorAll(".card");

const cardsImgFront = document.querySelectorAll(".front-view");
const cardsImgBack = document.querySelectorAll(".back-view");

// Ես հաղի բարդության ընտրության համար
const dropDown = document.querySelector('.dropbtn');
const levalBtn = document.querySelectorAll('.leval-btn');
const levalBtnLow = document.querySelector('.leval-low');
const levalBtnMid = document.querySelector('.leval-mid');
const levalBtnHigh = document.querySelector('.leval-high');


// Ստանում ենք card ֊ի mid֊ը
const cards = document.querySelector('.cards')
const cardMid = document.querySelectorAll('.card-mid')
const cardHigh = document.querySelectorAll('.card-high')


levalBtn.forEach(function (leval) {
    leval.addEventListener('click', function () {
        dropDown.innerHTML = leval.innerHTML
    })
})
// Low
levalBtnLow.addEventListener('click', function () {
    cards.classList.remove('cards-mid');
    cards.classList.remove('cards-high');
    cards.style.width = '350px';
    cards.style.height = '450px';
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
levalBtnMid.addEventListener('click', function () {
    cards.classList.add('cards-mid')
    cards.classList.remove('cards-high');
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
levalBtnHigh.addEventListener('click', function () {
    cards.classList.add('cards-high');
    cards.style.width = '390px';
    cards.style.height = '490px';
    // 
    card.forEach(function (item) {
        item.classList.remove('card-high')
    })
    cardMid.forEach(function (item) {
        item.classList.remove('card-mid')
    })
    cardHigh.forEach(function (item) {
        item.classList.remove('card-high')
    })
})



/* ստեղ խի եք թազա const հաըտարարե վիրևը արդեն կա  եսա՝*/
// const card = document.querySelectorAll(".card");


let previousClick = null;

card.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.add('flip');
    // Ու ամեն 3վ հետո ելի փակում
    //es 3 varkyany sarqeci 1,5 varkyan vorovhetev 3 varkyan jamanakahatvacum karas 3 kam 4 qar bacel 
    console.log("Data-Value name", card.dataset.value);

    let currentClick = card.dataset.value;

    // ստուգմ ենք տենանք քարտ կա բացված ու էտ ինչ քարտա
    /* ինչ պետքա անի ես ֆունկցիան*/
    if (previousClick === null) {
      previousClick = currentClick;
    } else {
        // Համեմատմ ենք բացված ու նախորդ քարտի արժեքը
        if (previousClick == currentClick) {



            // card.classList.add('even')
            // card.classList.add('anim')


            
            console.log("Have the same values");
        } else {
            console.log("Do not have the same values");
            // 
            // item.classList.add('shake');
            setTimeout(() => {
                card.classList.remove('flip');
              }, 1500);
        }
        // փոխմ ենք վերջին քարտի արժեքը 
      previousClick = null;
    }
    
  });
});




//Ես ել սխալի վախտ պետքա սենց shake անի ուղղկի mouseenter֊ով եմ արե ես պահին վոր տենանք վոնցա աշխատում
// հլը որ սա պետք չի
card.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        item.classList.add('shake');
    });
});

// card.forEach(function (item) {
//     item.addEventListener('mouseleave', function () {
//         item.classList.remove('shake');
//     });
// });

//esel erb sexmum es strat jamanaky sksuma gnal erba havasarvuma 0-i bolor qartery pakvum en
//bayc ka mi xntir erb ajamanaky avartvumea uxaki alerta linum vor jamaky avartvel a
// Ես էտ խնդիրը ուղղել եմ
const startButton = document.querySelector('.start-btn');
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
startButton.addEventListener('click', () => {
  updateTimer();
});

// Սղմելու վախտ բացվումա 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
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

