// access the container element from the HTML file
const container = document.querySelector('#container');


// creating 16 divs 
function createDivs(n) {
    for (i = 1; i <= n; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add(`box`);
    newDiv.innerText = `${i}`;
    container.appendChild(newDiv);
    }
}
createDivs(16);



// Every div will wait for the mouse to hover over it, and if it does it will turn red

function makeHoverable() {
    const sections = document.querySelectorAll('.box');

    sections.forEach((div) => {
        div.addEventListener("mouseenter",  function (e) {
            capture: false;
            e.stopPropagation;
            div.classList.add('coloured');
        });
    });
}


// on button click come up with a prompt

document.querySelector('button').onclick = function getInput() {
    let x = prompt("How many blocks");

    // clear the last divs
    deletThis = document.querySelectorAll('.box');
    deletThis.forEach(grid => {
        grid.remove();
    });

    // create new divs with user answer
    createDivs(x);
    // make them change colour on mouse hover
    makeHoverable();

}
