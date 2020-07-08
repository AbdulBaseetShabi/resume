// JQUERY
$(document).ready(function(){
    // alert($( window ).width());
    // Highlight Active Navigation Item
    $(".navigation-item").click(function(e) {
        e.preventDefault();
        $(".navigation-item").removeClass("active-nav");
        $(this).addClass("active-nav");
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
var app = angular.module("myApp",[]);
app.controller("ProfileController",
    function($scope) {
        $scope.languages = getLanguages();
        $scope.tools = getTools();
        $scope.concepts = getConcepts();
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

        function getTools() {
            return [
                {
                    'name' : 'git',
                    'url': 'https://img.icons8.com/color/96/000000/git.png'
                },
                {
                    'name' : 'svn',
                    'url': ''
                }
            ]
        }

        function getConcepts() {
            return [];
        }
    }
);

app.controller('ExperienceController',
    function($scope) {
        $scope.coops = getCoops();
        
        function getCoops() {
            return [
                {
                    'jobTitle': 'Software Developer (Co-op)',
                    'companyName': 'ATS Automation',
                    'dateFrom': 'JAN. 2020',
                    'dateTo': 'APRIL 2020',
                    'location': 'Kitchener, Ontario',
                    'descriptions': [
                        "Worked in an agile team to improve on the User Interface of a web application using HTML, CSS, JS with the AngularJS library.",
                        "Improved on the backend of the web application using C# and SQL (including stored procedures) and MS SQL Server to host the database.",
                        "Assisted the Quality Assurance team with testing to resolve JIRA tickets, which aided in the completion of sprints.",
                        "Used svn as the version control system and bitbucket as the repository for hosting projects"
                    ]
                }
            ];
        }
    }
);