document.addEventListener("DOMContentLoaded", () =>{


    window.addEventListener("resize", adjustVideoSettings);
    const content = document.getElementById("content");
    const video = document.getElementById("video1");
    const alpha_video = document.getElementById("alpha_video");
    alpha_video.playbackRate = 0.4;
    
    let play=false;

    
    content.addEventListener("mouseover",  () =>{

            let screen_width = document.documentElement.clientWidth;

            if(screen_width>1000){
                visible();
                if(!play){
                    video.play();
                    play = true;
                }
            }
        
    });
    
    content.addEventListener("mouseleave", () =>{
        let screen_width = document.documentElement.clientWidth;
        let content = document.getElementById("content");

        if(screen_width>1000){

                setTimeout(invisible, 500); 
                content.style.zIndex = "-1";
                setTimeout(end_animation, 500);
                video.pause();
                video.currentTime=0;
                play=false;
            
        }


    });
    content.addEventListener("click", () =>{
        let screen_width = document.documentElement.clientWidth;
        if(screen_width>1000){
            video.currentTime = 0;
            video.play();
            play = true;
        }
    });
    
    

});
function end_animation(){
    content.style.zIndex = "10";
}

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

// Виклик функції при завантаженні сторінки
adjustVideoSettings();

// Додавання обробника події resize


function adjustVideoSettings() {
    let screen_width = window.innerWidth;
    let content_for_text = document.getElementById("content-for-text");
    let tag_video = document.getElementById("video1");
    let div_col_12 = document.getElementById("remove_class");
    let content = document.getElementById("content");
    let content_for_text_width = content_for_text.offsetWidth;

    // let content_for_text = document.getElementById("content-for-text");
    let content_for_text_height = content_for_text.offsetHeight;


    let video_content = document.getElementById("video-container");
    
    if (screen_width < 1000) {
        let content_height = content.offsetHeight;

        content.classList.remove("col-3");
        div_col_12.classList.remove("video");
        tag_video.setAttribute("type", "video/mp4")

        content.style.width = content_for_text_width;
        content.style.height =  content_for_text_width
        tag_video.classList.remove("play_video")
        tag_video.removeAttribute("muted")
        tag_video.setAttribute("controls",'')

    } 
    else if(screen_width>999) {
        video_content.style.scale = "1, 1.5" ;

        content.classList.add("col-3");
        content.style.zIndex = "1";
        // tag_video.setAttribute("type", "video/gif")
        div_col_12.classList.add("video");
        tag_video.setAttribute("type", "video/mp4")

        tag_video.classList.add("play_video")
        tag_video.removeAttribute("controls")
        tag_video.setAttribute("muted",'')
        

    }

}

alert("Натисніть на відео щоб воно програлось ще раз")