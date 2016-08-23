/**
 * Created by Jackson on 8/22/16.
 */
app.controller('loginCtrl', function($scope, $rootScope, $cookies){
    $scope.submit = function(){
        $cookies.put('currentUser', $scope.username);
    };

    $scope.logOut = function(){
        $cookies.put('currentUser', '');
    };

    $scope.isLoggedIn = function(){
        return $cookies.get('currentUser') !== '';
    };

    $rootScope.currentUser = $cookies.get('currentUser');
});