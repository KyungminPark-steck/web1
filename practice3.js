// JS 1. 폰켓몬
function solution(nums) {
    var answer = [];
    var mx = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(answer.length < mx) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    
    return answer.length;    
}

// JS 2. 모의고사
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1 = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2 = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3 = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1,a2,a3);

    if (a1 === max) {answer.push(1)};
    if (a2 === max) {answer.push(2)};
    if (a3 === max) {answer.push(3)};


    return answer;
}

// JS 3. 