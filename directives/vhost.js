module.exports = function(options) {
  var host = options.host
    , confFile = options.confFile || './vhost.ejs'

  return function(sys) {
    var path = '/etc/nginx/sites-available/' + host;
  
    this.file(path, {
      content: this.template(confFile, {
        host: host
      })
    });
  }
}
