module.exports = function(options) {
  var ensure = options.ensure || 'installed'
    , version = options.version;

  return function(sys) {
  
    this.package('nginx', {
      ensure: ensure,
      version: version
    });
    
  }
}
