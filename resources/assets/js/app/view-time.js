modules.app

.constant('viewTime', window.viewTime)

.run(function($rootScope, viewTime) {
  'ngInject';

  $rootScope.viewTime = viewTime;
});
