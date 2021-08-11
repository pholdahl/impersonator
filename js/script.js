// let sectionA = document.querySelector("#sectionA");

// window.addEventListener("scroll",()=>{
//     var windo = window.pageYOffset;
//     if(services.offsetTop <= windo && sectionA.offsetTop > windo){
//         console.log("Tjenester");
//     }
// });


//import jQuery
// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){

    var scrollLink = $(".scroll");

    //smooth scrolling
    // scrollLink.click(function(e){
    //     e.preventDefault();
    //     $("body,html").animate({
    //         scrollTop: $(this.hash).offset().top
    //     }, 10 );
    // });

    $("li a").hover(function(){
        $(this).parent().addClass("hover");
        $(this).parent().siblings().removeClass("hover");},
        function() {
            $(this).parent().removeClass("hover");
            $(this).parent().siblings().removeClass("hover");
        }
    )

//     $("p").hover(function() { 
//         $(this).css("background-color", "green"); 
//     }, function() { 
//         $(this).css("background-color", "yellow"); 
//     }); 
// }); 

    //Active menu buttons
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function(){

            console.log(scrollbarLocation);

            var sectionOffset = $(this.hash).offset().top - 150;
            
            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })
    })

})