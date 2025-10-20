let UserInput = document.getElementById("UserInput");
let UserSubmit = document.querySelector("button");
let OutputInfo = document.getElementById("OutputInfo");

let total = 0;

UserSubmit.addEventListener("click", calculateResult);

function calculateResult() {
    total = 0;
    let UserArray = UserInput.value.trim().split(" ").filter(item => item !== "");
    for(item of UserArray){
        if(Number(item) | item === "0"){
            if(Number(item)%3 == 0){
                total++;
            }
        }
    }
    if(UserInput.value.trim() === ""){
        OutputInfo.innerHTML = "Enter your numbers and then press the button";
        OutputInfo.className = "blah";
    } else if(total == 0){
        OutputInfo.innerHTML = "0 numbers are divisable by 3";
        OutputInfo.className = "blah";
    } else {
        OutputInfo.removeAttribute("class");
        if(total == 1){
            OutputInfo.innerHTML = total + " number is divisable by 3"
        } else {
            OutputInfo.innerHTML = total + " numbers are divisable by 3"
        }
    }
}