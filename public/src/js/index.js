//jquery
window.jQuery = window.$ = require('jquery');

// sweetalert2
window.Swal = require('sweetalert2');

//bootstrap
require('bootstrap');

// sweetalert2
window.Swal = require('sweetalert2');

//prismjs
var Prism = require('prismjs');
var code = "var data = 1;";
var html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

//all
const allFiles = (ctx => {
  let keys = ctx.keys();
  let values = keys.map(ctx);
  return keys.reduce((o, k, i) => {
    o[k] = values[i];
    return o;
  }, {});
})(require.context('../', true, /.*/));
