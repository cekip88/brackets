module.exports = function check(str, bracketsConfig) {
    // your solution
    let circle = {
        'open' : [],
        'close' : []
    };

    for (let i = 0; i < str.length; i++){
        if(str[i] === '(') circle.open.push(i);
        else if (str[i] === ')') circle.close.push(i);
        else continue;
    }
    let pairsArray = [];
    while (circle.open.length){
        let arr = [],
            i = 0;
        arr[0] = circle.open.splice(0,1);
        while (circle.close.length){
            if(circle.close[i] < circle.open[i] && circle.open.length){
                arr[1] = circle.close.splice(i,1);
                break
            } else continue
        }
        pairsArray.push(arr)
    }
    console.log(pairsArray)
};
