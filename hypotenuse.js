const inputs = document.querySelectorAll('.side_input');
const btn_Triangle = document.querySelector('#Hypotenuse');
const output = document.querySelector('#output_hypto');

function calculateHyp(){
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);

    const sumSquare =a*a + b*b;
    console.log(sumSquare,a,b)
    output.innerHTML = "Lenght of Third side :" +sumSquare
}

btn_Triangle.addEventListener('click', calculateHyp);