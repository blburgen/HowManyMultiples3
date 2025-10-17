let UserSubmit = document.getElementById("submit");
let CurrentInput = "";
let OutPut = document.getElementById("results")

UserSubmit.addEventListener("click", test);

function test(){
    let NumberResult = 0;
    let UserInput = document.getElementById("UserInput");
    CurrentInput = UserInput.value;
    ArrayInput = CurrentInput.split(" ");
    for(num of ArrayInput){
        if(Number(num) | Number(num) == 0){
            if(num%3 == 0){
                NumberResult += 1;
            }
        }
    }

    if(NumberResult > 0){
        OutPut.innerHTML = NumberResult + " number(s) divisable by 3";
        OutPut.removeAttribute("class"); 
    } else {
        OutPut.innerHTML = "Blah ..... no numbers divisable by 3";
        OutPut.classList.add("blah");
    }
}