
let currentNumber = 0;

const increaseButton = document.getElementById('increase');

// Add an event listener to the button
increaseButton.addEventListener('click', function() {
    // Select the counter element
    const counter = document.getElementById('number');

    // Increase the counter
    let currentNumber = parseInt(counter.innerText, 10);
    currentNumber += 1;

    // Update the counter in the HTML
    counter.innerText = currentNumber;
    if (currentNumber > 0) {
        counter.style.color = 'green';
    }
    else if (currentNumber === 0){
        counter.style.color = 'black';
    } else {
        counter.style.color = 'red';
    }
});

const decreaseButton = document.getElementById('decrease');

decreaseButton.addEventListener('click', function() {
    const counter = document.getElementById('number');
    let currentNumber = parseInt(counter.innerText, 10);
    currentNumber -= 1;
    counter.innerText = currentNumber;
    if (currentNumber < 0) {
        counter.style.color = 'red';
    }
    else if  (currentNumber === 0) {
        counter.style.color = 'black';
    } else {
        counter.style.color = 'green';
    }   
}
);

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
    const counter = document.getElementById('number');
    counter.innerText = 0;
    counter.style.color = 'black';
}
);


