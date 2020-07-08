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

    function changeProfile (){
        if($( window ).width() < 620){
            $("#profile").removeClass("row");
            $("#profile-img").removeClass("col-6").addClass("removeBorder");
            $("#profile-body").removeClass("col-6").addClass("addSpacing");
        }else{
            $("#profile").addClass("row");
            $("#profile-img").addClass("col-6").removeClass("removeBorder");
            $("#profile-body").addClass("col-6").removeClass("addSpacing");
        }
    }

    //Whenever the windows is changed, detects if there is a need for a view change
    $( window ).resize(function(){
        changeNav();
        changeProfile();
    });

    //initial run to check for view changes
    changeNav();
    changeProfile();
});