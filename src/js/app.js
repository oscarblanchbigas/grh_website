// Bootstrap wants jQuery global =(
window.jQuery = $ = require('jquery')
// Bootstrap doesn't have a "main" field / export anything =(
var bootstrap = require('bootstrap3/dist/js/bootstrap')

require('../vendorjs/jquery.placeholder.js');
// require('../vendorjs/modernizr.custom.js');
require('../vendorjs/classie.js');
require('../vendorjs/cbpSplitLayout.js');
require('../vendorjs/init.js');
require('../vendorjs/jquery.touchSwipe.min.js');
