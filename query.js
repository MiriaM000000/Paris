// NAVIGATION
$(".jq---nav-icon").click(function(){
    // $(".nav-background").slideToggle();
    $(".responsiveMenuBcg").fadeToggle();
    $("nav li").fadeToggle();
    });


    // CHANGE HAMBURGER FOR CROSS
    $(".jq--image-hamburger").click(function(){
        if($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png")
        {
        $($(".jq--image-hamburger").attr("src","images/crossMenu.png"));
        }
        else
        {
        $($(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
        }
        });
        