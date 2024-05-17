document.addEventListener("DOMContentLoaded", () =>{
    window.addEventListener("resize", adjustVideoSettings);
    const content = document.getElementById("content");
    const video = document.getElementById("video1");
    
    let visivle_element = document.getElementById("content");
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
        if(screen_width>1000){
            if(play){
                setTimeout(invisible, 300); 

                video.pause();
                video.currentTime=0;
                play=false;
            }
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
    let screen_width = document.documentElement.clientWidth;

    let tag_video = document.getElementById("video1");
    let div_col_12 = document.getElementById("remove_class");
    let content = document.querySelector(".content")

    if (screen_width <= 1000) {
        div_col_12.classList.remove("video");
        tag_video.setAttribute("type", "video/mp4")

        content.style.width="500px"
        tag_video.classList.remove("play_video")
        tag_video.removeAttribute("muted")
        tag_video.setAttribute("controls",'')

    } else {
        content.style.width="calc(3*100%/12)";

        // tag_video.setAttribute("type", "video/gif")
        div_col_12.classList.add("video");
        tag_video.setAttribute("type", "video/mp4")

        tag_video.classList.add("play_video")
        tag_video.removeAttribute("controls")
        tag_video.setAttribute("muted",'')
        

    }
}

// alert("Натисніть на відео щоб воно програлось ще раз")