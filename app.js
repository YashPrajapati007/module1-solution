(function() {
    'use strict';

    let LunchCheck = angular.module('LunchCheck', []);

    LunchCheck.controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.items = '';

        $scope.checkBtn = function() {

            let string = $scope.items.split(","); // spliting the string by seperator comma

            if (string == "") {
                $scope.items = "Please enter data first";

                // setting font-colour and border red if box is empty
                $scope.myObj = {
                    "color": "red",
                    "border": " 2px red solid"
                };
            } else if (string.length <= 3) {
                $scope.items = "Enjoy!";

                // setting font-colour and border green if box has items less than or equal to 3
                $scope.myObj = {
                    "color": "green",
                    "border": " 2px green solid"
                };
            } else
            if (string.length > 3) {
                $scope.items = "Too Much!";

                // setting font-colour and border green if box has items more than 3 items
                $scope.myObj = {
                    "color": "green",
                    "border": " 2px green solid"
                };
            }
        };
    };

})();