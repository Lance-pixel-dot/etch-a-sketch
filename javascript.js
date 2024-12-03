const container = document.querySelector('#container');
const changeSize = document.querySelector('.change-size');
const reset = document.querySelector('.reset');

let draw = false;

let divSize = 16;

function createDiv(){

    for(let i = 0; i < divSize * divSize; i++){
        let div = document.createElement('div');
        container.appendChild(div);

        div.addEventListener('mouseenter', () => {
            if(!draw) return;
            div.style.backgroundColor = 'black';
        });

        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = 'black';
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

createDiv();