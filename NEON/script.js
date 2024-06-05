document.addEventListener("DOMContentLoaded", () =>{
    make_row();
})
window.addEventListener("resize", () =>{
    make_row();
})
make_row();
function make_row(){
    let screen_width = document.documentElement.clientWidth;
    let main = document.getElementById("main")
    let page_row = document.getElementById("page");
    if(screen_width<900){
        // page_row.style.display = "block"
        page_row.style.maxWidth = screen_width;
        // page_row.style.gridTemplateColumns = "100%";
        // page_row.style.gridTemplateAreas=
        // "l"
        // "main"
        page_row.classList.add("small_main");

    }
    else{
        page_row.classList.remove("small_main");
        // page_row.style.display = "grid"
        // page_row.style.gridTemplateColumns = "20% 1fr";
        // page_row.style.gridTemplateAreas=
        // "l main"
        // "l main"
        // page_row.style.gridTemplateColumns = "20% 1fr";

    }

}
