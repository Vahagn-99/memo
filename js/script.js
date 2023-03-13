// Ստանում ենք cards
const cards = document.querySelectorAll(".card");

const cardsImgFront = document.querySelectorAll(".front-view");
const cardsImgBack = document.querySelectorAll(".back-view");


// Ու ամեն անգամ click վախտ պտտում քարը
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.add('flip');
        // Ու ամեն 3վ հետո ելի փակում
        //es 3 varkyany sarqeci 1,5 varkyan vorovhetev 3 varkyan jamanakahatvacum karas 3 kam 4 qar bacel 
        setTimeout(() => {
            card.classList.remove('flip');
        }, "1500");
    });
});


//Ես ել սխալի վախտ պետքա սենց shake անի ուղղկի mouseenter֊ով եմ արե ես պահին վոր տենանք վոնցա աշխատում
cards.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        item.classList.add('shake');
    });
});

cards.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        item.classList.remove('shake');
    });
});

//esel erb sexmum es strat jamanaky sksuma gnal erba havasarvuma 0-i bolor qartery pakvum en
//bayc ka mi xntir erb ajamanaky avartvumea uxaki alerta linum vor jamaky avartvel a
const startButton = document.querySelector('.start-btn');
const timerElement = document.getElementById('timer');

let timeLeft = 30;

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = `${timeLeft}s`;
    setTimeout(updateTimer, 1000);
  } else {
    alert('Time is up!');
  }
}
startButton.addEventListener('click', () => {
  updateTimer();
});