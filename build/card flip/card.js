const firstCard = document.querySelector('#cardOne');
const firstCardBack = document.getElementById('firstCardBack')
const scoreDisplay = document.querySelector('#scoreDisplay');
let scoreCount = 0;
let counter = 0;


const randomNumber = () => {
cardNums = [1]
randomNums = [];
i = cardNums.length;
j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        randomNums.push(cardNums[j]);
        cardNums.splice(j, 1);
    }
    console.log(randomNums);
};

const cardOneFront = () => {
    // ----> CARD ONE <----
    if(randomNums[0] === 1) {
        firstCard.classList.toggle('ones')
        firstCardBack.classList.toggle('ones')
    }
}

const cardSelection = function () {             
    randomNumber()
    document.querySelector('#cardOne').addEventListener('click', function (e) {
        cardOneFront();
        if (randomNums[0]) {
            scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[0]}`;
            console.log(`score just added: ${randomNums[0]}`);
        }
        this.style.pointerEvents = 'none'
    });


}
cardSelection()