app.controller('MainController', function ($scope, $http) {


    $http.get('../../documents/sample_resume.txt')
        .then(function (data) {

            var response = data;
            var lines = response.data.split("\r\n");
            $scope.kvp = [];
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
    //       var response = {
    //          "data": "Name: John Doe \r\nPhone: (555) 555-5555 \r\nEmail: johndoe@example.com\r\n\r\nOBJECTIVE \r\nExcel in a web developer career.\r\n\r\nKEY SKILLS\r\nDevelopment: HTML5, JavaScript, Bootstrap, AngularJS, ReactJS, CSS3, Media Queries, Development\r\nProject Management: JIRA, Bitbucket, Confluence, Git, GitHub\r\n\r\nEMPLOYMENT HISTORY\r\nTitle: Junior Web Developer\r\nCompany: Apple Inc. \r\nDates: June 2015 to September 2016\r\n* Developed responsive corporate websites\r\n* Did some cool stuff\r\n* Led team in closing out JIRA bugs\r\n\r\nTitle: Web Development Intern \r\nCompany: Google Inc.\r\nDates: January 2015 to May 2015\r\n* Went on coffee runs for the team\r\n* Team record for longest keg stand\r\n* Once ate 82 cupcakes during a team building event\r\n\r\nEDUCATION\r\nDegree: BBA \r\nSchool: Michigan State University\r\nGPA: 2.2\r\nMajor: Computer Science\r\nMinor: Drinking",
    //          "status": 200,
    //          "config": {
    //            "method": "GET",
    //            "transformRequest": [null],
    //            "transformResponse": [null],
    //            "url": "../../documents/sample_resume.txt",
    //            "headers": {
    //              "Accept": "application/json, text/plain, /"
    //            }
    //          },
    //          "statusText": "OK"
    //        }
    //
    //
    //
    //

});