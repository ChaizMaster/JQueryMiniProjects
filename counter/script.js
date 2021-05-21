let front=document.getElementsByClassName('frontProgress')[0];
let back=document.getElementsByClassName('endProgress')[0];
function counter(){
    let countValue=back.innerText.toString();
    let splitVals=countValue.split(":")
    let minutes=parseInt(splitVals[0]);
    let seconds=splitVals[1].split("");
    let outerSec=parseInt(seconds[0]);
    let innerSec=parseInt(seconds[1]);
    let count=0;
    
}
counter();