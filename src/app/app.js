angular.module( 'reactGame', [
  'templates-app',
  'templates-common',
  'reactGame.home',
  'reactGame.game',
  'ui.router'
])

.controller( 'MainController', function MainController ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | React' ;
    }
  });
})

;

