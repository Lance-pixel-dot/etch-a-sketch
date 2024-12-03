const container = document.querySelector('#container');
const changeSize = document.querySelector('.change-size');
const reset = document.querySelector('.reset');
const body = document.querySelector('body');

let draw = false;

let divSize = 16;

let rgb;
let opacity = 10;

function createDiv(){

    for(let i = 0; i < divSize * divSize; i++){
        let div = document.createElement('div');
        container.appendChild(div);

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
        alert('Size must no be empty')
    }else{
        container.textContent = '';
        createDiv();
    }
});

reset.addEventListener('click', () => {
    container.textContent = '';
    createDiv();
});

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    rgb = `rgb(${red}, ${green}, ${blue}, ${opacity}%)`;
}

createDiv();