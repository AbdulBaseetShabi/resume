// JQUERY
$(document).ready(function(){
    // alert($( window ).width());
    $('button').click();
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

    //TODO: Fix to match new format
    function changeProfile() {
        if($( window ).width() < 975){
            $("#profile").removeClass("makeHeight100");
        }else{
            $("#profile").addClass("makeHeight100");
        }

        if ($( window ).width() < 573){
            $(".wideViewDivCol4").addClass("makeWidth100").removeClass("col-4");
            $(".wideViewDivCol").addClass("makeWidth100").removeClass("col");;
            $("#languages").removeClass("row");
            $("#education").removeClass("row");
            $("#tools").removeClass("row");
            $("#concepts").removeClass("row");
            $('#profile .labelH2').addClass('mobileViewLabel');
        }else{
            $(".wideViewDivCol4").addClass("col-4").removeClass("makeWidth100");
            $(".wideViewDivCol").addClass("col").removeClass("makeWidth100");
            $("#languages").addClass("row");
            $("#education").addClass("row");
            $("#tools").addClass("row");
            $("#concepts").addClass("row");
            $('#profile .labelH2').removeClass('mobileViewLabel');
        }
    }

    function changeContactInformation() {
        if ($( window ).width() < 350){
            $(".contact-label").css("display", "none");
            // $("#contact").removeClass("makeHeight100");
            $(".contact-div").css("display", "inline-block");
            $("#contact-main-div").addClass("d-flex justify-content-center");
        }else{
            $(".contact-label").css("display", "inline-block");
            // $("#contact").addClass("makeHeight100");
            $(".contact-div").css("display", "block");
            $("#contact-main-div").removeClass("d-flex justify-content-center");
        }

    }

    //Whenever the windows is changed, detects if there is a need for a view change
    $( window ).resize(function(){
        changeNav();
        changeIntroduction();
        changeProfile();
        changeContactInformation();
    });

    //initial run to check for view changes
    changeNav();
    changeIntroduction();
    changeProfile();
    changeContactInformation();
});

//ANGULAR JS
var host = 'http://localhost:3000';

var app = angular.module("myApp",[]);
app.controller("IntroductionController",
    function($scope, $http) {
        $scope.biography;

        function getBiography() {
            $http.get(host + "/biography").then(
                function success(response) {
                    $scope.biography = response.data["data"];
                    //TODO: update data to JSON file (lock file to prevent corruption)
                    console.log(response);
                    // alert(response);
                },
                function error(response) {
                    //TODO: get data from a file
                    console.log(response);
                    $scope.biography = "Hi! Welcome to my personal page. My name is Abdul-Baseet Shabi. I am an international student from Nigeria currently enrolled in the double degree program (Business Administration and Computer Science) at Wilfrid Laurier University in my 3rd year. My career aspiration is to apply my technical skills as a developer and knowledge of the business environment to create technologies to make business processes more efficient."
                    // alert(response);
                }
            );
        }

        getBiography();
    }
);

app.controller("ProfileController",
    function($scope) {
        $scope.languages = getLanguages();
        $scope.tools = getTools();
        $scope.concepts = getConcepts();
        $scope.educations = getEducations();

        function getLanguages() {
            return[
                {
                    'name': 'Nodejs',
                    'url': 'https://img.icons8.com/color/48/000000/nodejs.png'
                },
                {
                    'name': 'Java',
                    'url': 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png'
                },
                {
                    'name': 'C',
                    'url': 'https://img.icons8.com/color/48/000000/c-programming.png'
                },
                {
                    'name': 'JavaScript',
                    'url': 'https://img.icons8.com/color/48/000000/javascript.png'
                },
                {
                    'name': 'C#',
                    'url': 'https://img.icons8.com/color/48/000000/c-sharp-logo.png'
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
                    'url': 'https://img.icons8.com/color/48/000000/python.png'
                },
                {
                    'name': 'HTML',
                    'url': 'https://img.icons8.com/dusk/48/000000/html-5.png'
                },
                {
                    'name': 'CSS',
                    'url': 'https://img.icons8.com/dusk/48/000000/css3.png'
                }
            ]
        }

        function getTools() {
            return [
                {
                    'name' : 'git',
                    'url': 'https://img.icons8.com/color/48/000000/git.png'
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

        function getEducations() {
            return [
                {
                    'from' : 'SEPTEMBER 2017',
                    'to' : 'APRIL 2022',
                    'school_name' : 'Wilfrid Laurier University',
                    'program': 'Business Administration',
                    'degree' : 'Bachelor of Business Administration'
                },
                {
                    'from' : 'SEPTEMBER 2017',
                    'to' : 'APRIL 2022',
                    'school_name' : 'Wilfrid Laurier University',
                    'program': 'Computer Science',
                    'degree' : 'Bachelor of Computer Science'
                }
            ];
        }
    }
);

app.controller('ExperienceController',
    function($scope) {
        $scope.coops = getCoops();
        $scope.works = getWorks();
        $scope.volunteers = getVolunteers();

        function getCoops() {
            return [
                {
                    'jobTitle': 'Software Developer',
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
                },
                {
                    'jobTitle': 'Software Developer',
                    'companyName': 'The Incubator, The Cooperators',
                    'dateFrom': 'MAY 2019',
                    'dateTo': 'AUG. 2019',
                    'location': 'Kitchener, Ontario',
                    'descriptions': [
                        "Developed the UI/UX of a web application project using Angular with the Bootstrap.",
                        "Contributed to building the backend REST API using Node.js and Express with MongoDB for the database while using NoSQL.",
                        "Used git for the version control system while using JIRA and confluence for sprint planning and business-level API documentation.",
                        "Worked in an agile, fast-paced environment with a team of seven which had weekly sprints and biweekly release meetings."
                    ]
                }
            ];
        }

        function getWorks() {
            return [
                {
                    'jobTitle': 'Headstart Ambassador',
                    'companyName': 'Laurier International, Wilfrid Laurier University',
                    'dateFrom': 'MAY 2018',
                    'dateTo': 'SEPT. 2020',
                    'location': 'Waterloo, Ontario',
                    'descriptions': [
                        "Conducted campus and residential tours to students, their families and friends to improve their familiarity with the Laurier environment and answer any questions they may have.",
                        "Assisted the headstart coordinators with the logistical aspects related to the program, events setup and planning, which ensured the smooth running of the events.",
                        "Facilitated workshops and discussions such as the double degree information sessions with incoming students and families, which gave further insight into the program."
                    ]
                }
            ];
        }

        function getVolunteers() {
            return getWorks();
        }
    }
);

app.controller('ProjectsController',
    function($scope) {
        $scope.projects = getProjects();

        function getProjects() {
            return [
                {
                    'name': 'Resume Website',
                    'description' : '', 
                    'languages': '',
                    'tools': '',
                    'host': '',
                    'has_host': true,
                    'project_type': '',
                    'link': ''
                }
            ]
        }
    }
);

app.controller('ContactController', [ '$scope',
    function($scope) {
        $scope.contacts = getContacts();
        $scope.copyTextToClipboard = function (value) {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = value;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            alert("Phone number copied to clipboard");
        }

        function getContacts() {
            return [
                {
                    'name' : 'LinkedIn',
                    'is_email' : false,
                    'is_link' : true,
                    'value' : 'https://www.linkedin.com/in/abdulbaseet/',
                    'icon' : 'https://img.icons8.com/color/48/000000/linkedin.png'
                },
                {
                    'name' : 'Gmail',
                    'is_email' : true,
                    'is_link' : false,
                    'value' : 'sbaseet123@gmail.com',
                    'icon' : 'https://img.icons8.com/color/48/000000/gmail.png'
                },
                {
                    'name' : 'Phone',
                    'is_email' : false,
                    'is_link' : false,
                    'value' : '+1 (226)-505-1559',
                    'icon' : 'https://img.icons8.com/dusk/48/000000/ringing-phone.png'
                },
                {
                    'name' : 'GitHub',
                    'is_email' : false,
                    'is_link' : true,
                    'value' : 'https://github.com/AbdulBaseetShabi',
                    'icon' : 'https://img.icons8.com/color/48/000000/github.png'
                },
                {
                    'name' : 'Instagram',
                    'is_email' : false,
                    'is_link' : true,
                    'value' : 'https://www.instagram.com/bsquare480/',
                    'icon' : 'https://img.icons8.com/fluent/48/000000/instagram-new.png'
                }
            ];
        }
    }
]);