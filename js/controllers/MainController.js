app.controller('MainController', function ($scope, $http) {

    ///using locally stored file for ease
    $http.get('../../documents/sample_resume.txt')
        .then(function (data) {
            //stores the data in variable response
            var response = data;
            var lines = response.data.split("\r\n"); //splits the data by \r and \n 
            $scope.kvp = [];
            //splits every line of data by ":" and saves as a key value pair
            lines.forEach(function (line, index) {
                var pair = line.split(':');
                if (pair.length === 2) {
                    $scope.kvp.push({
                        key: pair[0],
                        value: pair[1]
                    });
                } else {
                    if (index > 0) {
                        if ($scope.kvp[$scope.kvp.length - 1]) {
                            $scope.kvp[$scope.kvp.length - 1].value += ' ' + pair[0];
                        }
                    }
                }
            });

            return data;
        }, function (error) {

            return error;
        });


});