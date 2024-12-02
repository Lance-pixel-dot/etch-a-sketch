const container = document.querySelector('#container');
const changeSize = document.querySelector('.change-size');

function createDiv(divSize){

    changeSize.addEventListener('click', () => {
        const size = prompt('Enter Size');
        size <= 100 ? createDiv(size) : alert("Size must be below 100");
     })

    for(let i = 0; i < divSize * divSize; i++){
        let div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black';
        })
    }
}

createDiv(16);
