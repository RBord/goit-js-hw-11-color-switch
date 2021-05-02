const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

class ColorSwitcher {
    constructor({newColor}){
        this.intervalId = null;
        this.isActive = false;
        this.newColor = newColor;
    }

    start() {
        if(this.isActive){
            return;
        }

        this.isActive = refs.startBtn.setAttribute('disabled', true);

        this.intervalId = setInterval(()=>{
            this.newColor();
            console.log('Меняю цвет!')
        }, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.isActive = refs.startBtn.removeAttribute('disabled', true);
    }
};

const colorSwitcher = new ColorSwitcher ({
    newColor: changeColor,
});

refs.startBtn.addEventListener('click', ()=>{
    colorSwitcher.start();
});

refs.stopBtn.addEventListener('click', ()=>{
    colorSwitcher.stop();
});

function changeColor (){
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    let randomColor = colors[randomIntegerFromInterval(0, colors.length -1)];
    refs.body.style.backgroundColor = randomColor;
}

