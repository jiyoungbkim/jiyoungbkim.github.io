/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

// 시작일부터 연속 일 계산
window.onload = function (){
    var today = new Date();
    var anniversary = new Date("September 6, 2020");
    var date = getFormatDate(today);
    var count = today.getTime() - anniversary.getTime();
    var count = Math.ceil(count/(24*60*60*1000));
    var anni = document.getElementById("anni");
    var present = document.getElementById("present");
    anni.innerHTML = "<FONT size='6' face='Apple SD Gothic Neo','FB NEO GOTHIC' color='#17b8b1'>" + count;
    present.innerHTML = date;
}
function getFormatDate(date){
    var year = date.getFullYear();              //yyyy
    var month = (1 + date.getMonth());          //M
    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    var day = date.getDate();                   //d
    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    return  year + '.' + month + '.' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

// 깃허브 캘린더 가져오기
GitHubCalendar(".calendar", "jiyoungbkim", { responsive: true, tooltips: false, global_stats : true}).then(function() {
    // delete the space underneath the module bar which is caused by minheight 
    document.getElementsByClassName('calendar')[0].style.minHeight = "100px";
    // hide more and less legen below the contribution graph
    document.getElementsByClassName('contrib-legend')[0].style.display = "none";
    // document.getElementsByClassName('contrib-number')[0].style.fontSize = "1rem";
});
GitHubCalendar(".calendar", "jiyoungbkim");
// or enable responsive functionality:
GitHubCalendar(".calendar", "jiyoungbkim", { responsive: true });