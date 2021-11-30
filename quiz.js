const submitquizbtn = document.querySelector('#submit-btn');
const quiz_form = document.querySelector('.quiz-form');
const output = document.querySelector('#output-quiz');

const correct_ans =["90","right"];

function calculatescore(){
    let score =0;
    let index =0;
    const form_result= new FormData(quiz_form);
    for(let val of form_result.values()){
        if(val ===  correct_ans[index]){
            score+=1;
        }
        index +=1;
    }

    output.innerHTML = "your score is "+ score;
}

submitquizbtn.addEventListener('click', calculatescore);