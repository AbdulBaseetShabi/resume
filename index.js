$(document).ready(function(){
    // Highlight Active Navigation Item
    $(".navigation-item").click(function() {
        $(".navigation-item").removeClass("active");
        $(this).addClass("active");
    });

    //Makes the Navbar vertical and Add A Margin to the Main Body
    function changeNav (){
        if($( window ).width() < 620){
            $(".navigation-item").removeClass("col");
            $(".navigation-item").addClass("makeNavVertical");
            $("#main-body").addClass("changeDefaultMargin");
        }else{
            $(".navigation-item").removeClass("makeNavVertical");
            $("#main-body").removeClass("changeDefaultMargin");
            $(".navigation-item").addClass("col");
        }
    }

    //Whenever the windows is changed, detects if there is a need for navbar change
    $( window ).resize(function(){
        changeNav();
    });

    //initial run to check for navbar
    changeNav();
});