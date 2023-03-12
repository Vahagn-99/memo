// Ստանում ենք cards
const cards = document.querySelectorAll(".card");

const cardsImgFront = document.querySelectorAll(".front-view");
const cardsImgBack = document.querySelectorAll(".back-view");


// Ու ամեն անգամ click վախտ պտտում քարը
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.add('flip');
        // Ու ամեն 3վ հետո ելի փակում
        setTimeout(() => {
            card.classList.remove('flip');
        }, "3000");
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