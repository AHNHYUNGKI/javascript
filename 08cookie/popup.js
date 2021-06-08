/* 쿠키 생성, 쿠키 확인 함수를 선언 */

function createCookie(name, value) {

    // 쿠키 이름, 쿠키 값, 쿠키 만료시간
    var date = new Date();
    date.setDate(date.getDate() + 1);

    var cookie = "";
    cookie += name + "=" + value + ";"; // 쿠키 이름 값 설정
    cookie += "expires=" + date; // 쿠키 시간 설정

    document.cookie = cookie;

}

/* 쿠키 확인 */
function getCookie(name) {

    var cookies = document.cookie.split(";"); // 분리해서 저장

    for(var i in cookies) {
        if(cookies[i].indexOf(name) != -1) {
            return cookies[i].replace(" ", "").replace(name+"=", ""); // 쿠키값 리턴
        }
    }

}