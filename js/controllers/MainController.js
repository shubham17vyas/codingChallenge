app.controller('MainController', function ($scope, $http) {
    $scope.json = 'Data not yet loaded.';
    $http.get('../../documents/sample_resume.txt')
        .then(function (data) {
            $scope.info = data;

        
        






        }, function (error) {

            alert('error');
        });
});

//app.controller( "MainController", function( $scope, $window, $http) {
//    $http({
//        url: '../../documents/sample_resume.txt',
//        dataType: 'json',
//        method: 'GET',
//        data: '',
//        headers: {
//            "Content-Type": "application/json"
//        }
//
//    }).success(function(data){
//        $scope.info = data.data;
//        $scope.str = angular.fromJson(data.data);
//       
//    }).error(function(error){
//        $scope.info = 'error';
//        $scope.str = 'error';
//    });