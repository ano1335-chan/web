function Omkj(loop){ 
    let sum = 0;
    for(let i = 1; i<=loop; i++){
        sum = sum+Math.random()*100;
    }
    let av = sum/loop;
    let TextObj = document.getElementById("TextID");
    if((100/3*2)<=av){
        TextObj.value = "‘å‹g";
    }else if((100/3)<=av){
        TextObj.value = "’†‹g";
    }else{
        TextObj.value = "¬‹g";
    } 
}

function Jnkn(hand){ 
    let contest =  ["•‰‚¯", "ˆø‚«•ª‚¯", "Ÿ‚¿"] ;
    let htx =  ["ƒO[", "ƒ`ƒ‡ƒL", "ƒp["] ;
    let pc = Math.floor(Math.random()*3);
    let rs = pc-hand;
    if(rs==-2||2==rs){
        rs = -Math.sign(rs);
    }
    rs = rs+1;
    let TextObj = document.getElementById("TextID");
    TextObj.value = "PC‘¤["+htx[pc]+"]F‹M•û‚Ì"+contest[rs]+"‚Å‚·";
}
