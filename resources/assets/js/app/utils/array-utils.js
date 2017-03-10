modules.app

.service('arrayUtils', function() {
  'ngInject';

  this.uniq = function(array, fn) {
    return array.reduce(function(uniqs, item) {
      item = fn ? fn(item) : item;
      return uniqs.indexOf(item) != -1 ? uniqs : uniqs.concat(item);
    }, []);
  };

  this.join = function(array) {
    return array.reduce(function(array, item) {
      return array.concat(item);
    }, []);
  };
});
