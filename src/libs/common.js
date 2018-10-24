; + function (doc, window, undefined){
    "use strict";
    var n = function() {};
    n.queryToJSON=function(){var pairs=location.search.slice(1).split('&');var result={};pairs.forEach(function(pair){pair=pair.split('=');result[pair[0]]=decodeURIComponent(pair[1]||'');});return result;}
}(document, window);