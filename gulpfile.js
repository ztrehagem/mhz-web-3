const Zelixir = require('z-elixir');
const Resource = Zelixir.Resource;
const Task = Zelixir.Task;
const config = Zelixir.config;
const options = Zelixir.options;
const $ = Zelixir.modules;
const del = require('del');

config.enabledNgAnnotate = true;

if (options.production) {
  del.sync(['public/**/*.map']);
}

Resource('html', Resource.template('html')
  .dest('')
);
Resource('html-partials', Resource.create()
  .src('html-partials/**/*.html')
  .dest('html/')
);
Resource('sass', Resource.template('sass'));
Resource('js', Resource.create()
  .src('js/*')
  .src('js/*/**/*.js')
  .concat('app.js')
  .dest('js/')
);
Resource('contents', Resource.create()
  .src('contents/contents.json')
  .dest('')
);

// TODO include html/css/js build version query

Task('html', ['html', 'html-partials'], Task.template('html'));
Task('sass', ['sass'], Task.template('sass'));
Task('js', ['js'], Task.template('js'));
Task('content', ['contents'], Task.template('pretty'));

Task.default();
Task.watch();

//

const BROWSER = require('browser-sync');
$.gulp.task('s', ['server']);
$.gulp.task('server', ()=> {
  BROWSER({
    server: {baseDir: 'public/'}
  });
});
