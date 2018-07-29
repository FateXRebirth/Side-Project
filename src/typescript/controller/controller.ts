app.controller('Main', function($scope) {
  $scope.count = 0;
  $scope.click = function() {
    $scope.count++;
  }
});