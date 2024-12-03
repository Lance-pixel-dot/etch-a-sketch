const container = document.querySelector('#container');
const changeSize = document.querySelector('.change-size');
const reset = document.querySelector('.reset')

let draw = false;

let divSize = 16;
let newDivSize;
let divHolder;

function createDiv(){

    if(newDivSize > 16 || newDivSize < 16){
        div.remove();
        divSize = newDivSize;
    }else{
        divSize = 16;
    }

    for(let i = 0; i < divSize * divSize; i++){
        let div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseenter', () => {
            if(!draw) return;
            div.style.backgroundColor = 'black';
        })

        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = 'black';
        })

    }

}

changeSize.addEventListener('click', () => {
    newDivSize = prompt('Enter Size');
    newDivSize <= 100 ? createDiv() : alert("Size must be below 100");
    createDiv();
 });

reset.addEventListener('click', () => {
    div.style.backgroundColor = 'bisque';
    div.remove();
    divSize = 16;
});

container.addEventListener('mousedown', () => {
    draw = true;
});

container.addEventListener('mouseup', () => {
    draw = false;
});

createDiv();