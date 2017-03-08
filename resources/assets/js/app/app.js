modules.app

.run(function() {
  'ngInject';

  console.log('run!');
})

.controller('root', function(contents) {
  'ngInject';

  contents.load().then(function(contents) {
    console.log(contents);
  });
});
