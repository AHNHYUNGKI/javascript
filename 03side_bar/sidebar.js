var sidenav = document.querySelector(".sidenav");
var menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", onSidenav);

function onSidenav() {
    
    // console.log(sidenav.style.width);
    var btn = sidenav.style.width;
    // console.log(window.innerWidth); /* 브라우저의 안쪽넓이 */

    if(window.innerWidth <= 767) { // 모바일

        if(btn == "" || btn == "0px") {
            sidenav.style.width = "200px";
        } else {
            sidenav.style.width = "0px";
        }

    } else { // 웹환경
        
        if(btn == "" || btn == "200px") {
            sidenav.style.width = "0px";
        } else {
            sidenav.style.width = "200px";
        }

    }

    
}