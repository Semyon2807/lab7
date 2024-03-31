function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
if (confirm ("Сейчас начнется великая игра!")){
    let num = getRandomArbitrary(1, 11);
    //console.log(num); //вывод в консоль ответ
    let res = prompt('Угадай мое число!', '...');
    let k=0;
    while (true){
        if (k < 4){
            if (res == num){
                k++;
                alert('Ты угадал число! Это было '+num+'! Число твоих попыток составило '+k+'!');
                break;
            } else if (num > res){
                k++;
                res = prompt('Загаданное число больше '+res+'!', '...');
            } else if (num < res){
                k++;
                res = prompt('Загаданное число меньше '+res+'!', '...');
            } else {
                alert('Ты ввел что-то странное, попробуй заново');
                break;
            }
        }
        else{
            alert('Ты проиграл.. Это было '+num+'! Попытай свою удачу еще раз!');
            break;
        }
    }
}