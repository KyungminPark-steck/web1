// 짝수와 홀수 
function solution(num) {
    var answer = '';
    if (num%2 === 0) {
        var answer = 'Even';
    } else {
        var answer = 'Odd';
    }
    return answer;
}

console.log(solution(3))
console.log(solution(4))


// 정수 배열의 평균 값 구하기
function solution(arr) {
    var answer = 0;
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return answer = sum / arr.length;
}

const array1 = [1,2,3,4]
const array2 = [5,5]
console.log(solution(array1))
console.log(solution(array2))


// 나머지가 1이 되는 수 찾기 
function solution(n) {
    var answer = 0;
    for (var i = 1; ; i++) {
        if (n % i ==1) {
            var x = i;
            break;
        }
    }
    answer = x;
    return answer;
}

console.log(solution(10))
console.log(solution(11))

// 하샤드 수
function solution(x) {
    var answer = true;
    let sum = 0;
    x = x+ '';
    for (var i = 0; i<x.length ; i++ ) {
        
        var k = +x[i];
        sum += k;
        
        if (x % sum == 0) {
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;
}
// 콜라츠 추측
function solution(num) {
    var answer = 0;
    while (num != 1) {
        if (num % 2 ==0) {
            num = num/2;
        } else {
            num = num*3 + 1;
        } 
        answer++;
    }
    if (answer >= 500) {
        answer = -1;
    }
    return answer;
    }
    
