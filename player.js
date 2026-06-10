let current = 0;

const numbers = [2,7,11,15];

function render() {

  let html = "";

  numbers.forEach((num, idx) => {

    const step = steps[current];

    if(idx === step.left)
      html += `[L:${num}] `;

    else if(idx === step.right)
      html += `[R:${num}] `;

    else
      html += `${num} `;
  });

  document.getElementById("array").innerHTML = html;

  document.getElementById("explanation").innerText =
      steps[current].text;
}

function nextStep() {
  if(current < steps.length - 1){
    current++;
    render();
  }
}

function prevStep() {
  if(current > 0){
    current--;
    render();
  }
}

render();
