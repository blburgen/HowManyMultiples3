let userinput = document.querySelector("input");
let userreturn = document.querySelector("button");
let output = document.getElementById("output");
let total = 0;

userreturn.addEventListener("click", result);

function result(){
    let newarray = userinput.value.trim().split(" ");
    let cleanarray = newarray.filter(item => item !== "");
    total = 0;
    for(item of cleanarray){
        if(Number(item) | item === '0'){
            if(Number(item)%3 == 0){
                total++;
            };
        };
    };
    if(userinput.value.trim().length == 0){
        output.className = "blah";
        output.innerHTML = "After entering numbers click the button";
    } else if(total == 0){
        output.className = "blah";
        output.innerHTML = "Blah ....... no numbers divisable by 3";
    } else {
        output.removeAttribute("class");
        output.innerHTML = total + " number(s) are divisable by 3";
    };
    console.log(total);
};