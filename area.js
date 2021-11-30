const inputs = document.querySelectorAll('.side_input');
const btn_Triangle = document.querySelector('#Hypotenuse');
const output = document.querySelector('#output_hypto');

function calculateHyp(){
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);

    const sumSquare =0.5 * ( a+b);
    console.log(sumSquare,a,b)
    output.innerHTML = "Area is  :" +sumSquare
}

btn_Triangle.addEventListener('click', calculateHyp);