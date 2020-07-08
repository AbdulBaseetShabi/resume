// JQUERY
$(document).ready(function(){
    // alert($( window ).width());
    // Highlight Active Navigation Item
    $(".navigation-item").click(function(e) {
        e.preventDefault();
        $(".navigation-item").removeClass("active");
        $(this).addClass("active");
        scrollToHref($(this).attr("href"));  
    });

    // Animated Scroll
    function scrollToHref(href){
        $('html,body').animate({
            scrollTop: $(href).offset().top},
            'slow');
    }

    //Makes the Navbar vertical and Add A Margin to the Main Body
    function changeNav() {
        if($( window ).width() < 620){
            $(".navigation-item").removeClass("col");
            $(".navigation-item").addClass("makeNavVertical");
            $("#introduction").addClass("changeDefaultMargin").removeClass("makeHeight100");
        }else{
            $(".navigation-item").removeClass("makeNavVertical");
            $("#introduction").removeClass("changeDefaultMargin").addClass("makeHeight100");
            $(".navigation-item").addClass("col");
        }
    }

    function changeIntroduction() {
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

    function changeProfile() {
        if($( window ).width() < 975){
            $("#profile").removeClass("row");
            $("#languages").removeClass("col");
            $("#tools").removeClass("col");
            $("#concepts").removeClass("col");
        }else{
            $("#profile").addClass("row");
            $("#languages").addClass("col");
            $("#tools").addClass("col");
            $("#concepts").addClass("col");
        }
    }

    //Whenever the windows is changed, detects if there is a need for a view change
    $( window ).resize(function(){
        changeNav();
        changeIntroduction();
        changeProfile();
    });

    //initial run to check for view changes
    changeNav();
    changeIntroduction();
    changeProfile();
});

//ANGULAR
angular.module("myApp",[]).controller("ProfileController",
    function($scope){
        $scope.languages = getLanguages();
        function getLanguages() {
            return[
                {
                    'name': 'Nodejs',
                    'url': 'https://img.icons8.com/color/96/000000/nodejs.png'
                },
                {
                    'name': 'Java',
                    'url': 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png'
                },
                {
                    'name': 'C',
                    'url': 'https://img.icons8.com/color/96/000000/c-programming.png'
                },
                {
                    'name': 'JavaScript',
                    'url': 'https://img.icons8.com/color/96/000000/javascript.png'
                },
                {
                    'name': 'C#',
                    'url': 'https://img.icons8.com/color/96/000000/c-sharp-logo.png'
                },
                // {
                //     'name': 'NoSQL',
                //     'url': ''
                // },
                // {
                //     'name': 'SQL',
                //     'url': ''
                // },
                // {
                //     'name': 'VBA',
                //     'url': ''
                // },
                {
                    'name': 'Python',
                    'url': 'https://img.icons8.com/color/96/000000/python.png'
                },
                {
                    'name': 'HTML',
                    'url': 'https://img.icons8.com/dusk/96/000000/html-5.png'
                },
                {
                    'name': 'CSS',
                    'url': 'https://img.icons8.com/dusk/96/000000/css3.png'
                }
            ]
        }
    }
);