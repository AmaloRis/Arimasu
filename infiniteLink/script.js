window.onload = ()=>{
    only_flag = true;
    link_field = document.getElementById("infinite");
    function add_link(){
        if(Math.trunc(Math.random()*1000) == 215 && only_flag == true){
            only_flag = false;
            link_field.insertAdjacentHTML("beforeend",`<a href="https://amaloris.github.io/Arimasu/manyLink/toutatu.html">リンク</a>`);
        }else{
            link_field.append("リンク");
        }
        requestAnimationFrame(add_link);
    }
    add_link();
}