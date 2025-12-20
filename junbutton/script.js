window.onload = function(){
    let arimasu_disp = [];
    let arimasu_button = [];
    let key = [0,0,0,0];
    let clear_bg = this.document.getElementById("window_toparea");
    console.log(clear_bg.style)
    for(let i=0;i<4;i++){
        console.log(String(key))
        arimasu_disp[i] = this.document.getElementById("arimasu_display"+String(i));
        arimasu_button[i] = this.document.getElementById("arimasu_button"+String(i));
        arimasu_disp[i].style.opacity = "0";
    }
    function playbeep(scale){
        let audio_ctx = new (window.AudioContext || window.webkitAudioContext)();
        let oscillator = audio_ctx.createOscillator();
        oscillator.frequency.value = scale;
        oscillator.type = 'square'; 
        let volume = audio_ctx.createGain();
        volume.gain.value = 0.2;
        oscillator.connect(volume);
        volume.connect(audio_ctx.destination);
        let now = audio_ctx.currentTime;
        oscillator.start(now);
        oscillator.stop(now + 0.1);
    }
    function arimasu_arrival(arimasu_number){
        if(key[arimasu_number] == 0){
            arimasu_disp[arimasu_number].style.opacity = "1";
            key[arimasu_number] = 1;
            switch (String(key)){
                case "0,1,0,0":
                    playbeep(523.25);
                    break;
                case "0,1,1,0":
                    playbeep(523.25);
                    break;
                case "1,1,1,0":
                    playbeep(523.25);
                    break;
                case "1,1,1,1":
                    for(let i=0;i<3;i++){
                        setTimeout(function(e){playbeep(1244.51)},i*1000)
                        setTimeout(function(e){clear_bg.style.backgroundColor = "#0BA6DF"},i*200);
                        setTimeout(function(e){clear_bg.style.backgroundColor = "#0BA6DF"},i*800);
                        setTimeout(function(e){clear_bg.style.backgroundColor = "#F6F4E6"},i*400);
                        setTimeout(function(e){clear_bg.style.backgroundColor = "#F6F4E6"},i*1000);
                    }
                    break;
                default:
                    playbeep(184.99);
                    for(let i=0;i<4;i++){
                        arimasu_disp[i].style.opacity = "0";
                        key[i] = 0;
                    }
            }
        }else{
            //arimasu_disp[arimasu_number].style.opacity = "0";
            //key[arimasu_number] = 0;
        }
    }

    for(let i=0;i<4;i++){
        arimasu_button[i].addEventListener("click",function(e){arimasu_arrival(i)})
    }
}