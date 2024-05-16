document.addEventListener("DOMContentLoaded", () =>{
    const content = document.getElementById("content");
    const video = document.getElementById("video1");
    
    let visivle_element = document.getElementById("content");
    let play=false;
    

    content.addEventListener("mouseover",  () =>{
        visible();
        if(!play){
            video.play();
            play = true;
        }
        
        
    });
    content.addEventListener("mouseleave", () =>{
        if(play){
            setTimeout(invisible, 300); 

            video.pause();
            video.currentTime=0;

        }


    });
    content.addEventListener("click", () =>{
        video.currentTime = 0;
        video.play();
        play = true;
    });
    
    

});


function invisible(){
    let visible_element = document.getElementById("content");

    visible_element.style.boxShadow = "inset 0px 0px 10px 15px black";
    visible_element.style.overflow = "hidden";
};
function visible(){
    let visible_element = document.getElementById("content");
    visible_element.style.boxShadow = "inset 0px 0px 10px 15px rgba(0, 0, 0, 0)";

    visible_element.style.overflow = "visible";

}


// alert("Натисніть на відео щоб воно програлось ще раз")