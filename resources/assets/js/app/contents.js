modules.app

.service('contents', function(zpsApiExec) {
  'ngInject';

  this.load = function() {
    if (this.promise) return;
    this.promise = zpsApiExec.get('/contents.json?' + viewTime).then(function(response) {
      return response.data;
    });
    return this.promise;
  };

});
