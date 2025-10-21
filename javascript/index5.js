let UserInput = document.getElementById("UserInput");
let ButtonCalculate = document.querySelector('button[type="submit"]');
let Output = document.getElementById("Output");
let Clear = document.getElementById("clear");

let total = [];
let UserArray = [];
let OutputString = "";
let OutputDefault = "Please input your numbers then press the calculate button."

ButtonCalculate.addEventListener("click", () => {CalculateOutput()});
Clear.addEventListener("click", () => {ClearForm()});

// Output.innerHTML = OutputDefault

function ClearForm(){
    UserInput.value = "";
    Output.removeAttribute("class");
    Output.innerHTML = OutputDefault;
};

function CalculateOutput(){
    OutputString = "";
    UserArray = UserInput.value.trim().split(" ").filter(item => item !== "");
    for(item of UserArray){
        if(Number(item) | item == "0"){
            if(Number(item) == 0){
                OutputString += "<div>0 is divisable by every non-zero integer</div>"
            } else {
                let NumberItem = Number(item);
                total = [];
                for(let i=1; i <= NumberItem; i++){
                    if(NumberItem%i == 0){
                        total.push(i);
                    }
                }
                OutputString += "<div>" + item + " is divisable by " + total + "</div>";
            }

        } else {
            OutputString += '<div class="blah"> Blah ... the next item is not a number. </div>';
        }
    }
    if(UserInput.value.length == 0){
        OutputString = '<div class="blah">' + OutputDefault + '</div>'
    }
    Output.innerHTML = OutputString;
};


// 0 is divisible by every non-zero integer