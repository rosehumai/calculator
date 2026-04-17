function solve(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("sel").value;
    let ans;
    if (op === "+"){
        ans = n1 + n2 
    }
    else if (op === "-"){
        ans = n1 - n2 
    }
    else if (op === "×"){
       ans = n1 * n2 
    }
    else if (op === "÷"){
        if (n2 === 0){
            ans = undefined
        }else ans = n1/n2
    }
   document.getElementById("ans").innerText = " Answer = " +ans ; 
}