const container = document.querySelector('#container');

for (i = 1; i <= 16; i++){
    const newDiv = document.createElement('div');
    newDiv.innerText = `${i}`;
    container.appendChild(newDiv);
}