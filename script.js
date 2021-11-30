
const inputs = document.querySelectorAll('.angle_input');
const btn_Triangle = document.querySelector('#btn_triangle');
const output = document.querySelector('#output');

function sumofangle(angle1, angle2, angle3){
    const sum_ = angle1 + angle2 + angle3;
    console.log(sum_)
    return sum_;
}
function istriangle(){
    const sumofTri = sumofangle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumofTri ===180){
        output.innerHTML ="Yup !! these angle form a Triangle";
        // inner html creates new html elements
        // inner text  puts text in already created elements
    }else{
        output.innerHTML ="Shit yarr!! these angle don't form a Triangle";
    }
}
btn_Triangle.addEventListener('click', istriangle);