window.onload = function(){
    title = document.getElementById("title");
    sagasite = document.getElementById("sagasite");
    title.innerHTML = "探してみよう";
    kokoni_arimasu = "探してみよう　探してみよう　探してみよう　探してみよう　　　　　　　　　　　あります　　　　　"
    counter = 0;
    framestop = 0;
    sagasitein = "";
    for(i=0;i<10000;i++){
        sagasitein += "探してみよう"
    }
    sagasite.innerHTML=sagasitein;
    function nagare(moji,offset,range){
        moji_length = moji.length;
        output = "";
        if(moji_length > (offset+range)){
            output = moji.substring(offset,offset+range);
        }else{
            output += moji.substring(offset,moji_length);
            output += moji.substring(0,((offset+range)-moji_length));
        }
        return output;

    }
    function countroop(){
        if(framestop > 60){
            counter += 1;
            if(counter > kokoni_arimasu.length){
                counter = 0;
            }
            title.innerHTML = nagare(kokoni_arimasu,counter,6);
            framestop = 0;
        }
        framestop += 1;
        requestAnimationFrame(countroop);
    }
    countroop();
}