// access the container element from the HTML file
const container = document.querySelector('#container');

// creating 16 divs 
for (i = 1; i <= 16; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add(`box`);
    newDiv.innerText = `${i}`;
    container.appendChild(newDiv);

}

// chaning colour of each Div if it is hovered over
const sections = document.querySelectorAll('.box');
console.log(sections);

sections.forEach((div) => {
    div.addEventListener("mouseenter",  function (e) {
        capture: false;
        e.stopPropagation;
        div.classList.add('coloured');
        

    });
});

