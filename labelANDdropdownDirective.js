
"use strict";

angular.module("labelAndDropdown").directive("labelAndDropdown", function () {
    return {
        restrict: 'E',
        
        scope: {
            labelText: '@',
            ddlName: '@',
            ddlGetUrl: '@',
            optionValueName: '@',
            optionTextName: '@'
        },
        controller: "labelAndDropdownController",
        templateUrl: "reusable_angModules/labelAndDropdown/labelAndDropdownTemplate.html",
        link: function (scope, element, attrs) {
            //console.log(scope );
            
        },
        compile: function (scope, element, attrs) {
            //console.log(scope );
            //scope.currentSelection = scope.getOptionName(scope.ddlContents[0], scope.optionValueName);
            var myddl = document.getElementById('ddl' + element.ddlName);
            //if(myddl)
            console.log(myddl);


        }

    };

});