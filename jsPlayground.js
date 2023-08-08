// Q1
function captilalize(str){
    let strArr = str.split(' ')
    let newStr = ''
    for (let str of strArr){
        let nArr = [str[0].toUpperCase() + str.slice(1)]
        newStr += `${nArr} `
        
    }
    return newStr
}
console.log(captilalize('str efwu hbfuhrbf.'));

console.log('abcd'.replace([,]));

// Q2

function LongestWord(str){
    let strArr = str.split(' ')
    let LongestStr = ''
    for (let str of strArr){
        if ( str.length > LongestStr.length ){
            LongestStr = str 
        }
    }
    return LongestStr
}
console.log(LongestWord('djhbv udvcydubcuydgcy uduhbc uxgy '));

// Q3
function isPrime(num){
    if (num < 2 ) {
        return `${num} is not Prime`
    }
    else if (num == 2){
        return `${num} is prime`
    }
    for (let i = 2; i < Math.floor(num/2); i++){
        if ((num%i == 0)){
            return `${num} is not Prime`
        }
        return `${num} is prime`
    }
}
console.log(isPrime(20));
console.log(isPrime(0));
console.log(isPrime(-2));
console.log(isPrime(123));
console.log(4%2);

function typeOf(agg){
    return typeof(agg)
}
console.log(typeOf('sds'));

function seconds(arr){
    let highestNum = 0
    let lowestNum ;
    let orgArr = []
    for (let num of arr ){
        if ( num > highestNum){
            highestNum = num
            orgArr.unshift(highestNum)
        }
    }
    console.log(orgArr);
    return `${orgArr[1]} and ${orgArr[orgArr.length-2]}`
}
console.log(seconds([1,2,3,4,5,6,7]));
