let toggleBall=$('.toggle-ball');
let headingOfPage=$('.heading');
let bodyOfPage=$('body');
let toggleBar=$('.toggle-bar');
let toggled=false;
toggleBall.on("click",()=>{
    if (toggled){
        toggleBall.addClass("toggleBall");
        toggleBar.addClass("toggleBar");
        bodyOfPage.addClass("toggleBody");
        headingOfPage.addClass("toggleHeading");
        toggled=false;
    }
    else{
        toggleBall.removeClass("toggleBall");
        toggleBar.removeClass("toggleBar");
        bodyOfPage.removeClass("toggleBody");
        headingOfPage.removeClass("toggleHeading");
        toggled=true;
    }
});