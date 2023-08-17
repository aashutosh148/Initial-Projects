function delayedFunction() {
}
setTimeout(delayedFunction, 5000);

const load = document.querySelector('.loading-text');
const bg = document.querySelector('img');
let loading = 0;

const int = setInterval(() => {
    loading++;
    if(loading === 100)clearInterval(int);

    update();
}, 30);

function update() 
{
    load.textContent = loading + "%";
    load.style.opacity = scale(loading, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};