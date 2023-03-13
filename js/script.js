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


// Gigh
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
    cardHigh.forEach(function(item){
        item.classList.remove('card-high')
   })
})









// Ամեն անգամ click վախտ պտտում քարը
card.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.add('flip');
        // Ամեն 3վ հետո ելի փակում
        setTimeout(() => {
            card.classList.remove('flip');
        }, "3000");
    });
});


//Ես ել սխալի վախտ պետքա սենց shake անի ուղղկի mouseenter֊ով եմ արե ես պահին վոր տենանք վոնցա աշխատում
card.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        item.classList.add('shake');
    });
});

card.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        item.classList.remove('shake');
    });
});


// Սղմելու վախտ բացվումա 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Եթե ուրիշ տեղե ենք սղմում պակվումա (կամ ելի իրա վրա երկրորդ անգամ սղմելուց)
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}