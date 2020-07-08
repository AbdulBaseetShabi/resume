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

    function changeIntroduction (){
        if($( window ).width() < 620){
            $("#introduction").removeClass("row");
            $("#introduction-img").removeClass("col-6").addClass("removeBorder");
            $("#introduction-body").removeClass("col-6").addClass("addSpacing");
        }else{
            $("#introduction").addClass("row");
            $("#introduction-img").addClass("col-6").removeClass("removeBorder");
            $("#introduction-body").addClass("col-6").removeClass("addSpacing");
        }
    }

    //Whenever the windows is changed, detects if there is a need for a view change
    $( window ).resize(function(){
        changeNav();
        changeIntroduction();
    });

    //initial run to check for view changes
    changeNav();
    changeIntroduction();
});