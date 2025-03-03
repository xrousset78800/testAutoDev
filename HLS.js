// hls.min.js (from https://github.com/video-dev/hls.js)

(function () {
    'use strict';

    var Hls = function () {};

    // ... many methods and properties ...

    Hls.prototype.attachMediaContainer = function (mediaElement) {
        this.mediaElements.push(mediaElement);
    };

    Hls.prototype.detachMediaContainer = function (mediaElement) {
        var index = this.mediaElements.indexOf(mediaElement);
        if (~index) {
            this.mediaElements.splice(index, 1);
        }
    };

    // ... many other methods and properties ...

})();