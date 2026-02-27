let numbers = document.getElementById("numbers");
let calculate = document.getElementById("calculate");
let output = document.getElementById("output");

calculate.addEventListener("click", () => {calculate_output()});

function calculate_output(){
    let yes_output = [];
    let no_output = [];
    let user_numbers = numbers.value.trim().split(" ").filter(item => item != "");
    for(item in user_numbers){
        if(Number(item) % 3 == 0){
            yes_output.push(user_numbers[item]);
        } else{
            no_output.push(user_numbers[item]);
        }
    }
    output.innerHTML = `${yes_output} are divisible by 3 <br> AND <br> ${no_output} are not divisible by 3`;
}