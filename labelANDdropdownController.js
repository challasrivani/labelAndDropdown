"use strict";

angular.module("labelAndDropdown").controller("labelAndDropdownController", ['$scope','$rootScope',  '$http',function ($scope,$rootScope, $http) {


    $scope.updateChange = function() {
        document.getElementById('ddl' + $scope.ddlName)[0].defaultSelected = true;
        $scope.selectedOption = $('#ddl' + $scope.ddlName).val();
    }

    $scope.$watch('selectedOption', function () {
        console.log("option Selection Changes");
    });

    $scope.ddlContents = '';
    $scope.getOptionName = function (el, optionName) {
        return el[optionName.toString()];
    };

    $('#ddl' + $scope.ddlName).empty();
    $http({
        method: 'GET',
        url: $scope.ddlGetUrl
    }).then(function successCallback(response) {
        // this line was introduced before to delete $$hashKeys from the arrays
        //var jsonResponse = JSON.parse(angular.toJson(response.data));
        var jsonResponse = response.data;
        $scope.ddlContents = jsonResponse[$scope.ddlName.toString()];

       //console.log("http get success" + $scope.ddlContents);
    }, function errorCallback(response) {
        
    });
   
}]);