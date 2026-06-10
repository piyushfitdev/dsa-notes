let current = 0;

const numbers = [2, 3, 4, 8, 11, 15];

function render() {

    const step = steps[current];

    const arrayDiv = document.getElementById("array");

    let html = "";

    numbers.forEach((num, idx) => {

        let cls = "cell";

        if(idx === step.left)
            cls += " left-cell";

        if(idx === step.right)
            cls += " right-cell";

        html += `<div class="${cls}">${num}</div>`;
    });

    arrayDiv.innerHTML = html;

    document.getElementById("explanation").innerText =
        step.text;

    document.getElementById("leftPointer").style.left =
        `${step.left * 70}px`;

    document.getElementById("rightPointer").style.left =
        `${step.right * 70}px`;
}

function nextStep() {
    if(current < steps.length - 1) {
        current++;
        render();
    }
}

function prevStep() {
    if(current > 0) {
        current--;
        render();
    }
}

function play() {

    const timer = setInterval(() => {

        if(current >= steps.length - 1) {
            clearInterval(timer);
            return;
        }

        current++;
        render();

    }, 1000);
}

render();
