// attachShadow.js

var native;

if (!native) {
    native = HTMLElement.prototype.attachShadow;
    HTMLElement.prototype.attachShadow = function (options) {
        return native.call(this, { ...options, mode: "open" });
    }
}
