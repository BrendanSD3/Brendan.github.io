
/* var testApp = angular.module("myApp", []);

myApp.controller("myController",function($scope,$http){
    $scope.title="My_Cv";
});
 */
  
function show() {
    console.log("I got clicked");
    var x = document.getElementById("project");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  document.getElementsByClassName("tablink")[0].click();
    
  function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("Proj");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
  }