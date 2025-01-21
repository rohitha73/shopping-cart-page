var plus = $('.increase-button');
var minus = $('.decrease-button');
var number = $('.number');

function getNumber() {
    let val = parseInt(number.text());
    return isNaN(val) ? 0 : val; 
}

plus.on('click', () => {
    let val = getNumber();
    number.text(++val); 
});

minus.on('click', () => {
    let val = getNumber();
    if (val > 0) { 
        number.text(--val); 
    }
});

