window.onload = function(){
    speedslide = document.getElementById("speed");
    pnglist = [];
    for(i=0;i<=15;i++){
        pnglist[i] = document.getElementById("zarimasu"+String(i));
    }
    slidevalue = 0;
    speedcount = 0;
    console.log(pnglist[0].style.opacity);
    function pngAnimation(){
        speedvalue = document.getElementById("speed").value;
        console.log((60/speedvalue))
        for(c=0;c<2;c++){
            if((60/speedvalue) <= speedcount){
                for(i=0;i<pnglist.length;i++){
                    if(slidevalue == i){
                        pnglist[i].style.opacity = "1";
                    }else{
                        pnglist[i].style.opacity = "0";
                    }
                }
                speedcount = 0;
                slidevalue += 1;
                if(slidevalue > pnglist.length){
                    slidevalue = 0;
                }
            }
            speedcount+=1;
        }
        requestAnimationFrame(pngAnimation);
    } 
    pngAnimation();
}