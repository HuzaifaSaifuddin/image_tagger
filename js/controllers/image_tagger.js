app.controller('image_tagger_controller', ['$scope', function($scope) {

    $scope.markers = [
    ];
  
    $scope.create_marker = function(event) {

      $scope.markers.push(event);
      console.log(event.x);

    };

    $scope.delete_marker = function(marker) {
      var index = $scope.markers.indexOf(marker);
      $scope.markers.splice(index, 1);
    };
}])