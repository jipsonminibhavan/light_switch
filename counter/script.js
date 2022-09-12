let counter = 0

const main = document.querySelector('main')

main.addEventListener('click', () => {

    //counter++;
    increaseCounter();

    console.log(counter);
});

//press enter or space key

document.addEventListener('keydown', (event) => {
    
    console.log(event.keyCode)

    if (event.keyCode === 13 || event.keyCode === 32){

    //counter++;
    increaseCounter();
}
});

// resetButton

const resetButton = document.querySelector('button[type="reset"]');

resetButton.addEventListener('click', (event) => {

    counter = 0;
    updateCounterViewEL();
    event.stopPropagation();
});

function increaseCounter() {
    //Zähler steigt
    counter++ ;
    console.log(counter);
// DOM wird aktualisiert
    //const counterEL = document.querySelector(".counter");
    //counterEL.innerText = counter;
    updateCounterViewEL();
}
const counterEL = document.querySelector(".counter")

function updateCounterViewEL(){
    counterEL.innerText = counter;
    main.style.backgroundSize = counter + "%";
    
}