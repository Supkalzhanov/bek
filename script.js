let number = document.querySelector('.number');
let btn = document.querySelector('.btn');

btn.onclick = () => {
    let num = +number.value;
    if (num <= 32){
        console.log("Первый подьезд");
    }
    else if(num <= 43){
        console.log('Второй подьезд')
    }
    else if(num <= 64) {
        console.log('Третий подьезд')
    }
    else {
        console.log('Такого подьезда не существует')
    }
};