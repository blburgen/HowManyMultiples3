let ClearForm = document.getElementById("ClearForm");
let UserResults = document.getElementById("UserResults");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let UserInput = document.getElementById("UserInput");
let calculate = document.getElementById("calculate");


let divisableNumber = 3;
let total = 0;
let outputArray = [];

ClearForm.addEventListener("click", clearform);
two.addEventListener("click", () => {divisableFunction(two,2)});
three.addEventListener("click", () => {divisableFunction(three,3)});
four.addEventListener("click", () => {divisableFunction(four,4)});
five.addEventListener("click", () => {divisableFunction(five,5)});
calculate.addEventListener("click", results);


function clearform(){
    divisableNumber = 3;
    two.disabled = false;
    three.disabled = true;
    four.disabled = false;
    five.disabled = false;
    UserResults.innerHTML = "Make your choices and press calculate button."
    UserInput.value = "";
    UserResults.removeAttribute("class");
};

function divisableFunction(inputWord, inputNumber){
    inputWord.disabled = true;
    two.disabled = false;
    three.disabled = false;
    four.disabled = false;
    five.disabled = false;
    inputWord.disabled = true;
    divisableNumber = inputNumber;
};

function results() {
    outputArray = [];
    total = 0;
    let inputResults = UserInput.value.trim().split(" ").filter(item => item !== "");
    for(item of inputResults){
        if(Number(item) | item == "0"){
            if(Number(item)%divisableNumber == 0 ){
                total++;
                console.log(total);
                outputArray.push(item);
            }
        }
    }
    if(UserInput.value.trim().length == 0){
        UserResults.className = "blah";
        UserResults.innerHTML = "Make your choices and press calculate button.";
    } else if(total == 0){
        UserResults.className = "blah";
        UserResults.innerHTML = "Blah ..... No numbers were divisable by " + divisableNumber;
    } else if(total == 1){
        UserResults.removeAttribute("class");
        UserResults.innerHTML = "1 number is divisable by " + divisableNumber + "<br> The number is " + outputArray;
    } else {
        UserResults.removeAttribute("class");
        UserResults.innerHTML = total + " number is divisable by " + divisableNumber + "<br> The numbers are " + outputArray;
    }
    // UserResults.innerHTML = inputResults;
}