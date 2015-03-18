(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><div class="container"><h1>Tic-tac-toe</h1><main data-hook="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // pages/play.jade compiled template
    templatizer["pages"]["play"] = function tmpl_pages_play(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(gameGrid, player0, player1, undefined) {
            buf.push('<section class="page-play"><a href="/">< Back to start screen</a><div id="gameGrid" class="gameGrid active-nought">');
            (function() {
                var $obj = gameGrid;
                if ("number" == typeof $obj.length) {
                    for (var yPos = 0, $l = $obj.length; yPos < $l; yPos++) {
                        var row = $obj[yPos];
                        buf.push('<div class="gameRow">');
                        (function() {
                            var $obj = row;
                            if ("number" == typeof $obj.length) {
                                for (var xPos = 0, $l = $obj.length; xPos < $l; xPos++) {
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            } else {
                                var $l = 0;
                                for (var xPos in $obj) {
                                    $l++;
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            }
                        }).call(this);
                        buf.push("</div>");
                    }
                } else {
                    var $l = 0;
                    for (var yPos in $obj) {
                        $l++;
                        var row = $obj[yPos];
                        buf.push('<div class="gameRow">');
                        (function() {
                            var $obj = row;
                            if ("number" == typeof $obj.length) {
                                for (var xPos = 0, $l = $obj.length; xPos < $l; xPos++) {
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            } else {
                                var $l = 0;
                                for (var xPos in $obj) {
                                    $l++;
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            }
                        }).call(this);
                        buf.push("</div>");
                    }
                }
            }).call(this);
            buf.push('</div><table class="table table-bordered"><thead><tr><th>' + jade.escape(null == (jade_interp = player0.name) ? "" : jade_interp) + "</th><th>Draws</th><th>" + jade.escape(null == (jade_interp = player1.name) ? "" : jade_interp) + "</th></tr></thead><tbody><tr><td>" + jade.escape(null == (jade_interp = player0.score) ? "" : jade_interp) + "</td><td>0</td><td>" + jade.escape(null == (jade_interp = player1.score) ? "" : jade_interp) + "</td></tr></tbody></table></section>");
        }).call(this, "gameGrid" in locals_for_with ? locals_for_with.gameGrid : typeof gameGrid !== "undefined" ? gameGrid : undefined, "player0" in locals_for_with ? locals_for_with.player0 : typeof player0 !== "undefined" ? player0 : undefined, "player1" in locals_for_with ? locals_for_with.player1 : typeof player1 !== "undefined" ? player1 : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
        return buf.join("");
    };

    // pages/start.jade compiled template
    templatizer["pages"]["start"] = function tmpl_pages_start() {
        return '<section class="page-start"><p>Hello! What are your names?</p><form data-hook="names-form"><fieldset data-hook="field-container"></fieldset><button type="submit" class="btn btn-primary">PLAY</button></form></section>';
    };

    return templatizer;
}));