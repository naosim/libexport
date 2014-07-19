/*! libexport - v0.1.0 - https://github.com/naosim/libexport - (c) 2014 naosim - licensed MIT */
(function(root){
    var factory = function() {
        return function(root, exportName, exportFactory) {
            var isAMD  = function() { return typeof define  === 'function' && define.amd; };
            var isNode = function() { return typeof exports === 'object'; };
            if (isAMD()) {
                define([], exportFactory);
            } else if (isNode()) {
                module.exports = exportFactory();
            } else {
                root[exportName] = exportFactory();
            }
        };
    };
    factory()(root, 'libExport', factory);
})(this);
