var exec = require('cordova/exec'),
    cordova = require('cordova');

function HybridBridge() {

}
HybridBridge.prototype.addItem = function(item, classname, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "HybridBridge", "addItem", [item, classname]);
};

module.exports = new HybridBridge();


