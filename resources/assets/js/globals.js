// TODO replace to build version
window.viewTime = Date.now();

window.assetPath = {
  html: function(name) {
    return '/html/' + name + '.html?' + viewTime;
  }
};
