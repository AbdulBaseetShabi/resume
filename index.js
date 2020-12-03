// JQUERY
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip(); //tooltip
  // alert($( window ).width());
  $("button").click();
  // Highlight Active Navigation Item
  // $(".navigation-item").click(function (e) {
  //   e.preventDefault();
  //   $(".navigation-item").removeClass("active-nav");
  //   $(this).addClass("active-nav");
  //   scrollToHref($(this).attr("href"));
  // });

  // Animated Scroll
  function scrollToHref(href) {
    $("html,body").animate(
      {
        scrollTop: $(href).offset().top,
      },
      "slow"
    );
  }

  //Makes the Navbar vertical and Add A Margin to the Main Body
  function changeNav() {
    if ($(window).width() < 620) {
      $(".navigation-item").removeClass("col");
      $(".navigation-item").addClass("makeNavVertical");
      $("#introduction")
        .addClass("changeDefaultMargin")
        .removeClass("makeHeight100");
    } else {
      $(".navigation-item").removeClass("makeNavVertical");
      $("#introduction")
        .removeClass("changeDefaultMargin")
        .addClass("makeHeight100");
      $(".navigation-item").addClass("col");
    }
  }

  // function changeIntroduction() {
  //   if ($(window).width() < 620) {
  //     $("#introduction").removeClass("row");
  //     $("#introduction-img").removeClass("col-6").addClass("removeBorder");
  //     $("#introduction-body").removeClass("col-6").addClass("addSpacing");
  //   } else {
  //     $("#introduction").addClass("row");
  //     $("#introduction-img").addClass("col-6").removeClass("removeBorder");
  //     $("#introduction-body").addClass("col-6").removeClass("addSpacing");
  //   }
  // }

  //TODO: Fix to match new format
  function changeProfile() {
    // if ($(window).width() < 975) {
    //   $("#profile").removeClass("makeHeight100");
    // } else {
    //   $("#profile").addClass("makeHeight100");
    // }
    // if ($(window).width() < 573) {
    //   $(".wideViewDivCol4").addClass("makeWidth100").removeClass("col-4");
    //   $(".wideViewDivCol").addClass("makeWidth100").removeClass("col");
    //   $("#languages").removeClass("row");
    //   $("#education").removeClass("row");
    //   $("#tools").removeClass("row");
    //   $("#concepts").removeClass("row");
    //   $("#profile .labelH2").addClass("mobileViewLabel");
    // } else {
    //   $(".wideViewDivCol4").addClass("col-4").removeClass("makeWidth100");
    //   $(".wideViewDivCol").addClass("col").removeClass("makeWidth100");
    //   $("#languages").addClass("row");
    //   $("#education").addClass("row");
    //   $("#tools").addClass("row");
    //   $("#concepts").addClass("row");
    //   $("#profile .labelH2").removeClass("mobileViewLabel");
    // }
  }

  function changeContactInformation() {
    if ($(window).width() < 350) {
      $(".contact-label").css("display", "none");
      // $("#contact").removeClass("makeHeight100");
      $(".contact-div").css("display", "inline-block");
      $("#contact-main-div").addClass("d-flex justify-content-center");
    } else {
      $(".contact-label").css("display", "inline-block");
      // $("#contact").addClass("makeHeight100");
      $(".contact-div").css("display", "block");
      $("#contact-main-div").removeClass("d-flex justify-content-center");
    }
  }

  //Whenever the windows is changed, detects if there is a need for a view change
  $(window).resize(function () {
    changeNav();
    // changeIntroduction();
    changeProfile();
    changeContactInformation();
  });

  //initial run to check for view changes
  changeNav();
  // changeIntroduction();
  changeProfile();
  changeContactInformation();
});

//ANGULAR JS
// var host = "http://localhost:3000";
var host = 'https://desolate-shelf-144144.herokuapp.com/'
var headers = {
  'Accept': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': window.location.protocol + "//" + window.location.hostname,
  'Access-Control-Allow-Credentials': 'true',
}

var app = angular.module("myApp", []);
app.controller("IntroductionController", function ($scope, $http) {
  $scope.biography = "";

  (() => {
    $http({
      method: "POST",
      url: host + "/getData?db=biography",
      data: { is_active: true },
      headers: headers
    }).then(
      function success(response) {
        $scope.biography = response.data[0]["data"];
        //TODO: update data to JSON file (lock file to prevent corruption)
        console.log(response);
        
      },
      function error(response) {
        //TODO: get data from a file
        console.log(response); 
      }
    );
  })();

});

app.controller("EducationController", function ($scope, $http) {
  $scope.educations = [];
  $scope.activities = [];

  (()=> {
    $http({
      method: "POST",
      url: host + "/getData?db=education",
      data: { isActive: true },
    }).then(
      function success(response) {
        let data = response.data;
        for (let i = 0; i < data.length; i++) {
         if (data[i].isEducation) {
          $scope.educations.push(data[i]);
         } else if (data[i].isActivity) {
          $scope.activities.push(data[i]);
         } 
        }
        //TODO: update data to JSON file (lock file to prevent corruption)
        console.log(response);
        
      },
      function error(response) {
        //TODO: get data from a file
        console.log(response);
      }
    );
  })();
});

app.controller("ExperienceController", function ($scope, $http) {
  $scope.coops = [];
  $scope.works = [];
  $scope.volunteers = [];

  (() => {
    $http({
      method: "POST",
      url: host + "/getData?db=experience",
      data: { isActive: true },
    }).then(
      function success(response) {
        let res = response.data;
        for (let i = 0; i < res.length; i++) {
            if (res[i].isCoop){
                $scope.coops.push(res[i]);
            }else if (res[i].isWork){
                $scope.works.push(res[i]);
            }else if (res[i].isVolunteer){
                $scope.volunteers.push(res[i]);
            }
        }
        //TODO: update data to JSON file (lock file to prevent corruption)
        console.log(response);
        
      },
      function error(response) {
        //TODO: get data from a file
        console.log(response);
      }
    );
  })();
  }
);

app.controller("ToolsController", function ($scope, $http) {
  $scope.languages = [];
  $scope.tools = [];
  $scope.concepts = [];

  (() => {
    $http({
      method: "POST",
      url: host + "/getData?db=tools",
      data: { isActive: true },
    }).then(
      function success(response) {
        let res = response.data;
        for (let i = 0; i < res.length; i++) {
            if (res[i].isLanguage){
                $scope.languages.push(res[i]);
            }else if (res[i].isTool){
                $scope.tools.push(res[i]);
            }else if (res[i].isOther){
                $scope.concepts.push(res[i]);
            }
        }
        //TODO: update data to JSON file (lock file to prevent corruption)
        console.log(response);
        
      },
      function error(response) {
        //TODO: get data from a file
        console.log(response);
      }
    );
  })();
});

app.controller("ProjectsController", function ($scope, $http) {
  $scope.projects = [];

  (() => {
    $http({
      method: "POST",
      url: host + "/getData?db=projects",
      data: { isActive: true },
    }).then(
      function success(response) {
        $scope.projects = response.data;
        
        //TODO: update data to JSON file (lock file to prevent corruption)
        console.log(response);
        
      },
      function error(response) {
        //TODO: get data from a file
        console.log(response);
      }
    );
  })();
});

app.controller("ContactController", function ($scope, $http) {
    $scope.contacts = [];
    (() => {
      $http({
        method: "POST",
        url: host + "/getData?db=contact",
        data: { isActive: true },
      }).then(
        function success(response) {
          $scope.contacts = response.data;
          
          //TODO: update data to JSON file (lock file to prevent corruption)
          console.log(response);
          
        },
        function error(response) {
          //TODO: get data from a file
          console.log(response);
        }
      );
    })();
  }
);
