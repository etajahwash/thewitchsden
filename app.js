const infoButton = document.querySelector('.infoButton');
const resetButton = document.querySelector('.resetButton');
const scoreDisplay = document.querySelector('#scoreDisplay');
const firstCard = document.querySelector('#cardOne');
const firstCardBack = document.getElementById('firstCardBack')
const secondCard = document.querySelector('#cardTwo');
const secondCardBack = document.getElementById('secondCardBack')
const thirdCard = document.querySelector('#cardThree');
const thirdCardBack = document.getElementById('thirdCardBack')
const fourthCard = document.querySelector('#cardFour');
const fourthCardBack = document.getElementById('fourthCardBack')
const fifthCard = document.querySelector('#cardFive');
const fifthCardBack = document.getElementById('fifthCardBack')
const sixthCard = document.querySelector('#cardSix');
const sixthCardBack = document.getElementById('sixthCardBack')
const seventhCard = document.querySelector('#cardSeven');
const seventhCardBack = document.getElementById('seventhCardBack')
const eighthCard = document.querySelector('#cardEight');
const eighthCardBack = document.getElementById('eighthCardBack')
const ninthCard = document.querySelector('#cardNine');
const ninthCardBack = document.getElementById('ninthCardBack')
const tenthCard = document.querySelector('#cardTen');
const tenthCardBack = document.getElementById('tenthCardBack')
const eleventhCard = document.querySelector('#cardEleven');
const eleventhCardBack = document.getElementById('eleventhCardBack')
const twelfthCard = document.querySelector('#cardTwelve');
const twelfthCardBack = document.getElementById('twelfthCardBack')
const thirteenthCard = document.querySelector('#cardThirteen');
const thirteenthCardBack = document.getElementById('thirteenthCardBack')
const popUp = document.getElementById('popUp')
const outer = document.getElementById('outer')
const loser = document.getElementById('loserOverlay')
const loserText = document.getElementById('loserText')
const winner = document.getElementById('winnerOverlay')
const winnerText = document.getElementById('winnerText')
const victor = document.getElementById('victorOverlay')
const victorText = document.getElementById('victorText')
const tryAgain = document.getElementById('tryAgainOverlay')
const tryAgainText = document.getElementById('tryAgainText')
const pass = document.getElementById('passOverlay')
const passText = document.getElementById('passText')
const starter = document.getElementById('starterOverlay')
const starterText = document.getElementById('starterText')
const cardOverlay = document.getElementById('cardOverlay')
const volumeControl = document.querySelector('.volumeControl')
let scoreCount = 0;
let isGameOver = true;
let counter = 0;

const backgroundMusic = new Audio('audios/backgroundMusic.mp3')
const bubblingAudio = new Audio('audios/bubbling.wav')
const giggleAudio = new Audio('audios/giggle.wav')
const resetAudio = new Audio('audios/reset.wav')
const buttonAudio = new Audio('audios/buttonSound.mp3')
const barkAudio = new Audio('audios/bark.wav')
const awwwAudio = new Audio('audios/awww.mp3')
const humAudio = new Audio('audios/hum2.wav')
const wooAudio = new Audio('audios/woo.wav')
backgroundMusic.loop = true;
backgroundMusic.volume = 0.7
humAudio.loop = true;
bubblingAudio.loop = true;

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === "hidden") {
        backgroundMusic.pause()
    } else {
        backgroundMusic.play()
    }
})

function openPopUp() {
    buttonAudio.play()
    popUp.classList.add('openPopUp')
    outer.classList.add('openOuter')
}

function closePopUp() {
    buttonAudio.play()
    popUp.classList.remove('openPopUp')
    outer.classList.remove('openOuter')
}

function lose() {
    bubblingAudio.pause()
    bubblingAudio.currentTime = 0;
    loser.classList.add('visible')
    loserText. classList.add('openLoserText')
    barkAudio.play()
}

function toPass() {
    humAudio.pause()
    humAudio.currentTime = 0;
    winner.classList.remove('visible')
    winnerText. classList.remove('openWinnerText')
    pass.classList.add('visible')
    passText. classList.add('openPassText')
    awwwAudio.play()
}

function win() {
    winner.classList.add('visible')
    winnerText. classList.add('openWinnerText')
    humAudio.play()
}

function victory() {
    wooAudio.play()
    victor.classList.add('visible')
    victorText.classList.add('openVictorText')
}

function secondChance() {
    tryAgain.classList.add('visible')
    tryAgainText.classList.add('openTryAgainText')
    bubblingAudio.play()
}

function openCardsOverlay() {
    cardOverlay.classList.add('oneClick')
}

volumeControl.addEventListener('change', function (e) {
    backgroundMusic.volume = e.currentTarget.value / 100;
    bubblingAudio.volume = e.currentTarget.value / 100;
    giggleAudio.volume = e.currentTarget.value / 100;
    resetAudio.volume = e.currentTarget.value / 100;
    buttonAudio.volume = e.currentTarget.value / 100;
    barkAudio.volume = e.currentTarget.value / 100;
    awwwAudio.volume = e.currentTarget.value / 100;
    humAudio.volume = e.currentTarget.value / 100;
    wooAudio.volume = e.currentTarget.value / 100;
})

const randomNumber = () => {
cardNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
randomNums = [];
i = cardNums.length;
j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        randomNums.push(cardNums[j]);
        cardNums.splice(j, 1);
    }
    // console.log(randomNums);
};

const cardCounter = function () {
    switch (counter) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            counter += 1
            break;
        case 5:
        break;  
    }
    //   console.log(`counter equals: ${counter}`);
    }

const cardCounterTwo = function () {
            counter += 1
    //   console.log(`counter equals: ${counter}`);
    }


const reset = (x, y) => {
   if (x, y) {
    x.classList.remove('ones')
    y.classList.remove('ones')
    x.classList.remove('twos')
    y.classList.remove('twos')
    x.classList.remove('threes')
    y.classList.remove('threes')
    x.classList.remove('fours')
    y.classList.remove('fours')
    x.classList.remove('fives')
    y.classList.remove('fives')
    x.classList.remove('sixes')
    y.classList.remove('sixes')
    x.classList.remove('sevens')
    y.classList.remove('sevens')
    x.classList.remove('eights')
    y.classList.remove('eights')
    x.classList.remove('nines')
    y.classList.remove('nines')
    x.classList.remove('tens')
    y.classList.remove('tens')
    x.classList.remove('jacks')
    y.classList.remove('jacks')
    x.classList.remove('queens')
    y.classList.remove('queens')
    x.classList.remove('kings')
    y.classList.remove('kings')
   }
}

const reseter = () => {
    reset(firstCard, firstCardBack)
    reset(secondCard, secondCardBack)
    reset(thirdCard, thirdCardBack)
    reset(fourthCard, fourthCardBack)
    reset(fifthCard, fifthCardBack)
    reset(sixthCard, sixthCardBack)
    reset(seventhCard, seventhCardBack)
    reset(eighthCard, eighthCardBack)
    reset(ninthCard, ninthCardBack)
    reset(tenthCard, tenthCardBack)
    reset(eleventhCard, eleventhCardBack)
    reset(twelfthCard, twelfthCardBack)
    reset(thirteenthCard, thirteenthCardBack)
    scoreCount = 0
    counter = 0
    scoreDisplay.innerText = `SCORE: ${scoreCount}`
    resetAudio.play()
    randomNumber()
}

resetButton.addEventListener('click', (e) => {
    reseter()
})

function closeStarterScreen() {
    starter.classList.add('closeStarter')
    backgroundMusic.play()
}

function closeLoserScreen() {
    reseter()
    loser.classList.remove('visible')
    loserText. classList.remove('openLoserText')
}

function closePassScreen() {
    pass.classList.remove('visible')
    passText. classList.remove('openPassText')
    reseter()
}

function ventureScreen() {
    humAudio.pause()
    humAudio.currentTime = 0;
    winner.classList.remove('visible')
    winnerText. classList.remove('openWinnerText')
    reseter()
    counter = 5
}

function closeVictorScreen() {
    victor.classList.remove('visible')
    victorText. classList.remove('openVictorText')
    reseter()
}

function closeTryAgainScreen() {
    bubblingAudio.pause()
    bubblingAudio.currentTime = 0;
    tryAgain.classList.remove('visible')
    tryAgainText. classList.remove('openTryAgainText')
    reseter()
    counter = 10
}

function giveUp() {
    tryAgain.classList.remove('visible')
    tryAgainText. classList.remove('openTryAgainText')
    lose()
}

function closeCardsOverlay() {
    cardOverlay.classList.remove('oneClick')
}

const cardClasses = (x,y,z) => {
    if(randomNums[x] === 1) {
        y.classList.add('ones')
        z.classList.add('ones')
    } else if(randomNums[x] === 2) {
        y.classList.add('twos')
        z.classList.add('twos')
    } else if(randomNums[x] === 3) {
        y.classList.add('threes')
        z.classList.add('threes')
    } else if(randomNums[x] === 4) {
        y.classList.add('fours')
        z.classList.add('fours')
    } else if(randomNums[x] === 5) {
        y.classList.add('fives')
        z.classList.add('fives')
    } else if(randomNums[x] === 6) {
        y.classList.add('sixes')
        z.classList.add('sixes')
    } else if(randomNums[x] === 7) {
        y.classList.add('sevens')
        z.classList.add('sevens')
    } else if(randomNums[x] === 8) {
        y.classList.add('eights')
        z.classList.add('eights')
    } else if(randomNums[x] === 9) {
        y.classList.add('nines')
        z.classList.add('nines')
    } else if(randomNums[x] === 10) {
        y.classList.add('tens')
        z.classList.add('tens')
    } else if(randomNums[x] === 11) {
        y.classList.add('jacks')
        z.classList.add('jacks')
    } else if(randomNums[x] === 12) {
        y.classList.add('queens')
        z.classList.add('queens')
    } else if (randomNums[x] === 13) {
        y.classList.add('kings')
        z.classList.add('kings')
    }
}
   
const cardOneFront = () => {
    // ----> CARD ONE <----
    cardClasses(0,firstCard,firstCardBack)
}

const cardTwoFront = () => {
    // ----> CARD TWO <----
    cardClasses(1,secondCard,secondCardBack)
}

const cardThreeFront = () => {
    // ----> CARD THREE <----
    cardClasses(2,thirdCard,thirdCardBack)
}

const cardFourFront = () => {
    // ----> CARD FOUR <----
    cardClasses(3,fourthCard,fourthCardBack)
}

const cardFiveFront = () => {
    // ----> CARD FIVE <----
    cardClasses(4,fifthCard,fifthCardBack)
}

const cardSixFront = () => {
    // ----> CARD SIX <----
    cardClasses(5,sixthCard,sixthCardBack)
}

const cardSevenFront = () => {
    // ----> CARD SEVEN <----
    cardClasses(6,seventhCard,seventhCardBack)
}

const cardEightFront = () => {
// ----> CARD EIGHT <----
    cardClasses(7,eighthCard,eighthCardBack)
}

const cardNineFront = () => {
    // ----> CARD NINE <----
    cardClasses(8,ninthCard,ninthCardBack)
    }
    
const cardTenFront = () => {
    // ----> CARD TEN <----
    cardClasses(9,tenthCard,tenthCardBack)
    }
    
const cardElevenFront = () => {
    // ----> CARD ELEVEN <----
    cardClasses(10,eleventhCard,eleventhCardBack)
    }
    
const cardTwelveFront = () => {
    // ----> CARD TWELVE <----
    cardClasses(11,twelfthCard,twelfthCardBack)
    }
    
const cardThirteenFront = () => {
    // ----> CARD THIRTEEN <----
    cardClasses(12,thirteenthCard,thirteenthCardBack)
    }




const cardEventListeners = (x,y,z) => {

    document.querySelector(x).addEventListener('click', function (e) {
        if(counter <= 2){
            setTimeout(closeCardsOverlay, 500)
            y();
            giggleAudio.currentTime = 0;
            giggleAudio.play()
            if (randomNums[z]) {
            scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
            // console.log(`score just added: ${randomNums[z]}`);
            }
            openCardsOverlay()
            cardCounter();
        } else if (counter === 3) {
            setTimeout(closeCardsOverlay, 500)
                cardCounter();
                y();
                giggleAudio.currentTime = 0;
                giggleAudio.play()
                if (randomNums[z]) {
                scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                // console.log(`score just added: ${randomNums[z]}`);
                }
                openCardsOverlay()
                if(scoreCount >= 38) {
                    win()
                }
        } else if (counter === 4) {
            setTimeout(closeCardsOverlay, 500)
                cardCounter()
                    y();
                    giggleAudio.currentTime = 0;
                    giggleAudio.play()
                    if (randomNums[z]) {
                    scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                    // console.log(`score just added: ${randomNums[z]}`);
                    }
                    openCardsOverlay()
                    if(scoreCount >= 38) {
                        win()
                    } else if (scoreCount <= 37) {
                        secondChance()
                    }
        } else if(counter === 5 || counter === 6 || counter === 7){
                setTimeout(closeCardsOverlay, 500)
                y();
                giggleAudio.currentTime = 0;
                giggleAudio.play()
                if (randomNums[z]) {
                scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                // console.log(`score just added: ${randomNums[z]}`);
                    }
                openCardsOverlay()
                cardCounterTwo();
        } else if (counter === 8) {
                        setTimeout(closeCardsOverlay, 500)
                        cardCounterTwo();
                        y();
                        giggleAudio.currentTime = 0;
                        giggleAudio.play()
                        if (randomNums[z]) {
                        scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                        // console.log(`score just added: ${randomNums[z]}`);
                        }
                        openCardsOverlay()
                        if(scoreCount >= 38) {
                            victory()
                        }
        } else if (counter === 9) {
                    setTimeout(closeCardsOverlay, 500)
                            y();
                            giggleAudio.currentTime = 0;
                            giggleAudio.play()
                            if (randomNums[z]) {
                            scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                            // console.log(`score just added: ${randomNums[z]}`);
                            }
                            openCardsOverlay()
                            if(scoreCount >= 38) {
                                victory()
                            } else if (scoreCount <= 37) {
                                lose()
                            }
        } else if(counter >= 10) {
                    if(counter <= 12){
                                setTimeout(closeCardsOverlay, 500)
                                y();
                                giggleAudio.currentTime = 0;
                                giggleAudio.play()
                                if (randomNums[z]) {
                                scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                                // console.log(`score just added: ${randomNums[z]}`);
                                    }
                                openCardsOverlay()
                                cardCounterTwo();
                    } else if (counter === 13) {
                                        setTimeout(closeCardsOverlay, 500)
                                        cardCounterTwo();
                                        y();
                                        giggleAudio.currentTime = 0;
                                        giggleAudio.play()
                                        if (randomNums[z]) {
                                        scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                                        // console.log(`score just added: ${randomNums[z]}`);
                                        }
                                        openCardsOverlay()
                                        if(scoreCount >= 38) {
                                            win()
                                        }
                    } else if (counter === 14) {
                                            setTimeout(closeCardsOverlay, 500)
                                            y();
                                            giggleAudio.currentTime = 0;
                                            giggleAudio.play()
                                            if (randomNums[z]) {
                                            scoreDisplay.innerText = `SCORE: ${scoreCount += randomNums[z]}`;
                                            // console.log(`score just added: ${randomNums[z]}`);
                                            }
                                            openCardsOverlay()
                                            if(scoreCount >= 38) {
                                                win()
                                            } else if (scoreCount <= 37) {
                                                lose()
                                            }
                    }
        }
    })
}


const cardSelection = function () {             
randomNumber()

cardEventListeners('#cardOne', cardOneFront, 0)
cardEventListeners('#cardTwo', cardTwoFront, 1)
cardEventListeners('#cardThree', cardThreeFront, 2)
cardEventListeners('#cardFour', cardFourFront, 3)
cardEventListeners('#cardFive', cardFiveFront, 4)
cardEventListeners('#cardSix', cardSixFront, 5)
cardEventListeners('#cardSeven', cardSevenFront, 6)
cardEventListeners('#cardEight', cardEightFront, 7)
cardEventListeners('#cardNine', cardNineFront, 8)
cardEventListeners('#cardTen', cardTenFront, 9)
cardEventListeners('#cardEleven', cardElevenFront, 10)
cardEventListeners('#cardTwelve', cardTwelveFront, 11)
cardEventListeners('#cardThirteen', cardThirteenFront, 12)

}
cardSelection()