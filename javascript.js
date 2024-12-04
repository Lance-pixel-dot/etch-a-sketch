const container = document.querySelector('#container');
const actualContainer = document.querySelector('.container-of-actual-div');
const changeSize = document.querySelector('.change-size');
const reset = document.querySelector('.reset');
const body = document.querySelector('body');

let draw = false;

let divSize = 16;

let rgb;
let opacity = 10;

function createDiv(){

    const size = 1000 / divSize;

    for(let i = 0; i < divSize * divSize; i++){
        let div = document.createElement('div');
        actualContainer.appendChild(div);
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;

        div.addEventListener('mouseenter', () => {
            if(!draw) return;
            randomColor();
            opacity === 100 ? opacity = 10 : opacity += 10;
            div.style.backgroundColor = rgb;
        });

        div.addEventListener('mousedown', () => {
            randomColor();
            opacity === 100 ? opacity = 10 : opacity += 10;
            div.style.backgroundColor = rgb;
        });

    }

}

container.addEventListener('mousedown', () => {
    draw = true;
});

container.addEventListener('mouseup', () => {
    draw = false;
});

changeSize.addEventListener('click', () => {
        
    divSize = prompt('Please Enter Size')
    if(divSize > 100){
        alert('Size must not be above 100')
    }else if(divSize <= 0){
        alert('Size must not be empty')
    }else{
        actualContainer.textContent = '';
        createDiv();
    }
});

reset.addEventListener('click', () => {
    actualContainer.textContent = '';
    createDiv();
});

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    rgb = `rgb(${red}, ${green}, ${blue}, ${opacity}%)`;
}

createDiv();