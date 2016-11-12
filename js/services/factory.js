
app.factory( "fileInfo", ['$scope', '$window', '$http', function( $scope, $window, $http) {
//    
    
    $http.get('../../documents/sample_resume.txt') 
        .then(function (data) {

            $scope.info = data;
            
            
        }, function (error) {
            
            alert('error');
        });
}]);