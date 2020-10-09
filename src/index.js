module.exports = function check(str, bracketsConfig) {

    function checkString(str) {
        if(typeof str !== 'string') return false;

        let timedStr = [];
        for (let i = 0; i < str.length; i++){
            let symbol = str[i];
            if(symbol === '{' || symbol === '}' || symbol === '[' || symbol === ']' || symbol === '(' || symbol === ')' || symbol === '|'){
                timedStr += symbol;
                continue
            }
            let numberCheck = symbol * 1;
            if(!isNaN(numberCheck)) timedStr += symbol;
        }

        let pairs = ['{}','[]','()','12','34','56','77','88','||'];

        function strPairSplit(timedStr) {
            let checkded = false;
            pairs.forEach(function (el) {
                let index = timedStr.indexOf(el);
                if(index >= 0){
                    checkded = true;
                    let arr = timedStr.split(el);
                    timedStr = '';
                    arr.forEach(function (element) {
                        timedStr += element;
                    })
                }
            });
            if(checkded) {
                return timedStr;
            } else {
                return false
            }
        }
        while(timedStr){
            if(timedStr === false){
                break
            }
            timedStr = strPairSplit(timedStr);
        }

        if(timedStr === false) return false;
        return true
    }

    function checkArray(arr){
        let result = true;
        arr.forEach(function (el) {
            let str = '';
            el.forEach(function (element) {
                str += element;
            });
            let timedResult = checkString(str);
            if(result === true) result = timedResult;
        });
        return result;
    }

    let stringCheck = checkString(str),
        arrayCheck = checkArray(bracketsConfig);

    if(stringCheck && arrayCheck){
        return true
    } else {
        return false
    }

};

