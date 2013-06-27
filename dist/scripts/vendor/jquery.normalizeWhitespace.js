/*
 *  By Robert Blaske
 *  2013-05-20
 */
( function($) {
        $.normalizeWhitespace = function(stringToNormalize) {
            if (stringToNormalize) {
                var s = stringToNormalize.replace(/,(\S)/gi, ', $1');
                s = s.replace(/(\S)&(\S)/gi, '$1 & $2');
                return s;
            }
        }
    }(jQuery));
