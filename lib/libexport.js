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
