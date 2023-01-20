function calcTime(ms){
    let second = parseInt(parseInt(ms) / 1000);

    let minute = parseInt(second / 60);
    second = second % 60;

    let hour   = parseInt(minute / 60);
    minute = minute % 60;

    let result = '';
    if (hour > 0){
       result += hour + '시간 ';
    }
    if (minute > 0){
       result += minute + '분 ';
    }
    if (second > 0){
       result += second + '초';
    }
    return result;
}

console.log(calcTime(1236178))