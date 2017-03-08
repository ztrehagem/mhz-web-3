modules.app

.controller('root', function(contents, itemModal) {
  'ngInject';

  var ctrl = this;

  contents.load().then(function(contents) {
    ctrl.contents = contents;
  });

  ctrl.openModal = function(item) {
    itemModal.open(item);
  };
})

.service('itemModal', function($compile, $rootScope) {
  'ngInject';

  var eRoot = angular.element('html, body');
  var eMain = angular.element('#main');
  var eModal = null;
  var scope = null;
  var cachedScrollY = null;

  this.open = function(item) {
    if (!eModal) initElement();

    cachedScrollY = $(window).scrollTop();
    scope.item = item;
    eMain.addClass('modal-open');
    eMain.css({top: -1 * cachedScrollY});
    eRoot.prop({scrollTop: 0});
    // eModal.show();
    eModal.fadeIn('fast');
  };

  function onClose() {
    eMain.removeClass('modal-open');
    eMain.css({top: 'auto'});
    eRoot.prop({scrollTop: cachedScrollY});
    // eModal.hide();
    eModal.fadeOut('fast');
  }

  function initElement() {
    scope = $rootScope.$new();
    scope.close = onClose;
    eModal = $compile('<item-modal id="item-modal"></item-modal>')(scope);
    eModal.hide();
    eModal.on('click', onClose);
    angular.element('body').append(eModal);
  }
})

.directive('itemModal', function() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: assetPath.html('item-modal'),
    controller: 'itemModal as ctrl'
  };
})

.controller('itemModal', function($scope, $element) {
  'ngInject';

  var ctrl = this;
  var eMain = angular.element('#main');
});
