﻿(function (h, e, b, i, c, g, j) {/*! Jssor */
    new (function () {
    });
    var d = h.$JssorEasing$ = {
        $EaseSwing: function (a) {
            return -b.cos(a * b.PI) / 2 + .5
        }, $EaseLinear: function (a) {
            return a
        }, $EaseInQuad: function (a) {
            return a * a
        }, $EaseOutQuad: function (a) {
            return -a * (a - 2)
        }, $EaseInOutQuad: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        }, $EaseInCubic: function (a) {
            return a * a * a
        }, $EaseOutCubic: function (a) {
            return (a -= 1) * a * a + 1
        }, $EaseInOutCubic: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        }, $EaseInQuart: function (a) {
            return a * a * a * a
        }, $EaseOutQuart: function (a) {
            return -((a -= 1) * a * a * a - 1)
        }, $EaseInOutQuart: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        }, $EaseInQuint: function (a) {
            return a * a * a * a * a
        }, $EaseOutQuint: function (a) {
            return (a -= 1) * a * a * a * a + 1
        }, $EaseInOutQuint: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        }, $EaseInSine: function (a) {
            return 1 - b.cos(a * b.PI / 2)
        }, $EaseOutSine: function (a) {
            return b.sin(a * b.PI / 2)
        }, $EaseInOutSine: function (a) {
            return -1 / 2 * (b.cos(b.PI * a) - 1)
        }, $EaseInExpo: function (a) {
            return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
        }, $EaseOutExpo: function (a) {
            return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
        }, $EaseInOutExpo: function (a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
        }, $EaseInCirc: function (a) {
            return -(b.sqrt(1 - a * a) - 1)
        }, $EaseOutCirc: function (a) {
            return b.sqrt(1 - (a -= 1) * a)
        }, $EaseInOutCirc: function (a) {
            return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
        }, $EaseInElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
        }, $EaseOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
        }, $EaseInOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .45, d = .1125;
            return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
        }, $EaseInBack: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, $EaseOutBack: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, $EaseInOutBack: function (a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, $EaseInBounce: function (a) {
            return 1 - d.$EaseOutBounce(1 - a)
        }, $EaseOutBounce: function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, $EaseInOutBounce: function (a) {
            return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5
        }, $EaseGoBack: function (a) {
            return 1 - b.abs(2 - 1)
        }, $EaseInWave: function (a) {
            return 1 - b.cos(a * b.PI * 2)
        }, $EaseOutWave: function (a) {
            return b.sin(a * b.PI * 2)
        }, $EaseOutJump: function (a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        }, $EaseInJump: function (a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
    };
    var a = new function () {
        var f = this, xb = /\S+/g, T = 1, fb = 2, kb = 3, jb = 4, ob = 5, L, s = 0, l = 0, p = 0, bb = 0, A = 0, B = navigator, tb = B.appName, k = B.userAgent, z;

        function Eb() {
            if (!L) {
                L = {ie: "ontouchstart"in h || "createTouch"in e};
                var a;
                if (B.pointerEnabled || (a = B.msPointerEnabled))L.dd = a ? "msTouchAction" : "touchAction"
            }
            return L
        }

        function v(i) {
            if (!s) {
                s = -1;
                if (tb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
                    var f = k.indexOf("MSIE");
                    s = T;
                    p = n(k.substring(f + 5, k.indexOf(";", f)));
                    /*@cc_on bb=@_jscript_version@*/
                    ;
                    l = e.documentMode || p
                } else if (tb == "Netscape" && !!h.addEventListener) {
                    var d = k.indexOf("Firefox"), b = k.indexOf("Safari"), g = k.indexOf("Chrome"), c = k.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = fb;
                        l = n(k.substring(d + 8))
                    } else if (b >= 0) {
                        var j = k.substring(0, b).lastIndexOf("/");
                        s = g >= 0 ? jb : kb;
                        l = n(k.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);
                        if (a) {
                            s = T;
                            l = p = n(a[1])
                        }
                    }
                    if (c >= 0)A = n(k.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                    if (a) {
                        s = ob;
                        l = n(a[2])
                    }
                }
            }
            return i == s
        }

        function q() {
            return v(T)
        }

        function O() {
            return q() && (l < 6 || e.compatMode == "BackCompat")
        }

        function ib() {
            return v(kb)
        }

        function hb() {
            return v(jb)
        }

        function nb() {
            return v(ob)
        }

        function cb() {
            return ib() && A > 534 && A < 535
        }

        function M() {
            return q() && l < 9
        }

        function t(a) {
            if (!z) {
                m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                    if (a.style[b] != j) {
                        z = b;
                        return c
                    }
                });
                z = z || "transform"
            }
            return z
        }

        function sb(a) {
            return {}.toString.call(a)
        }

        var K;

        function Cb() {
            if (!K) {
                K = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    K["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return K
        }

        function m(a, d) {
            if (sb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (d(a[b], b, a))return c
            } else for (var e in a)if (d(a[e], e, a))return c
        }

        function D(a) {
            return a == i ? String(a) : Cb()[sb(a)] || "object"
        }

        function qb(a) {
            for (var b in a)return c
        }

        function G(a) {
            try {
                return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {
            }
        }

        function y(a, b) {
            return {x: a, y: b}
        }

        function vb(b, a) {
            setTimeout(b, a || 0)
        }

        function I(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function eb(b, a) {
            if (l < 9)b.style.filter = a
        }

        function zb(b, a, c) {
            if (bb < 9) {
                var e = b.style.filter, h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", d = I(e, [h], g);
                eb(b, d);
                f.Uc(b, c.y);
                f.Vc(b, c.x)
            }
        }

        f.he = Eb;
        f.Wc = q;
        f.je = ib;
        f.ee = hb;
        f.vc = nb;
        f.Q = M;
        f.Sc = function () {
            return l
        };
        f.oc = function () {
            v();
            return A
        };
        f.$Delay = vb;
        function W(a) {
            a.constructor === W.caller && a.yd && a.yd.apply(a, W.caller.arguments)
        }

        f.yd = W;
        f.hb = function (a) {
            if (f.cd(a))a = e.getElementById(a);
            return a
        };
        function r(a) {
            return a || h.event
        }

        f.Xc = r;
        f.Ac = function (a) {
            a = r(a);
            return a.target || a.srcElement || e
        };
        f.Yc = function (a) {
            a = r(a);
            return {x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0}
        };
        function E(c, d, a) {
            if (a != j)c.style[d] = a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, i);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function Y(b, c, a, d) {
            if (a != j) {
                d && (a += "px");
                E(b, c, a)
            } else return n(E(b, c))
        }

        function o(d, a) {
            var b = a & 2, c = a ? Y : E;
            return function (e, a) {
                return c(e, d, a, b)
            }
        }

        function Ab(b) {
            if (q() && p < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? n(a[1]) / 100 : 1
            } else return n(b.style.opacity || "1")
        }

        function Bb(c, a, f) {
            if (q() && p < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = I(h, [i], d);
                eb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }

        function ab(e, a) {
            var d = a.$Rotate || 0, c = a.$Scale == j ? 1 : a.$Scale;
            if (M()) {
                var l = f.se(d / 180 * b.PI, c, c);
                zb(e, !d && c == 1 ? i : l, f.re(l, a.$OriginalWidth, a.$OriginalHeight))
            } else {
                var g = t(e);
                if (g) {
                    var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";
                    if (hb() && A > 535 && "ontouchstart"in h)k += " perspective(2000px)";
                    e.style[g] = k
                }
            }
        }

        f.me = function (b, a) {
            if (cb())vb(f.F(i, ab, b, a)); else ab(b, a)
        };
        f.le = function (b, c) {
            var a = t(b);
            if (a)b.style[a + "Origin"] = c
        };
        f.oe = function (a, c) {
            if (q() && p < 9 || p < 10 && O())a.style.zoom = c == 1 ? "" : c; else {
                var b = t(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = I(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        f.ne = function (a) {
            if (!a.style[t(a)] || a.style[t(a)] == "none")a.style[t(a)] = "perspective(2000px)"
        };
        f.Rb = function (b, a) {
            return function (c) {
                c = r(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !f.nf(a, d)) && b(c)
            }
        };
        f.c = function (a, c, d, b) {
            a = f.hb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        f.I = function (a, c, d, b) {
            a = f.hb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        f.Fb = function (a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = g
        };
        f.af = function (a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        f.F = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        f.gf = function (a, b) {
            if (b == j)return a.textContent || a.innerText;
            var c = e.createTextNode(b);
            f.jc(a);
            a.appendChild(c)
        };
        f.V = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };
        function rb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (S(a, b) == c)return a;
                if (!e) {
                    var d = rb(a, c, e, b);
                    if (d)return d
                }
            }
        }

        f.C = rb;
        function Q(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                S(a, b) == d && c.push(a);
                if (!f) {
                    var e = Q(a, d, f, b);
                    if (e.length)c = c.concat(e)
                }
            }
            return c
        }

        function lb(a, c, d) {
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (!d) {
                    var b = lb(a, c, d);
                    if (b)return b
                }
            }
        }

        f.cf = lb;
        function db(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : i; a; a = a.nextSibling)if (a.nodeType == 1) {
                (!c || a.tagName == c) && b.push(a);
                if (!e) {
                    var d = db(a, c, e);
                    if (d.length)b = b.concat(d)
                }
            }
            return b
        }

        f.of = db;
        f.mf = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function C() {
            var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)if (c = e[f])for (b in c) {
                a = c[b];
                if (a !== j) {
                    a = c[b];
                    d[b] = g && G(d[b]) ? C(g, {}, a) : a
                }
            }
            return d
        }

        f.l = C;
        function X(f, g) {
            var d = {}, c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (G(a) && G(b)) {
                        a = X(b);
                        e = !qb(a)
                    }
                    !e && (d[c] = a)
                }
            }
            return d
        }

        f.Nc = function (a) {
            return D(a) == "function"
        };
        f.mc = function (a) {
            return D(a) == "array"
        };
        f.cd = function (a) {
            return D(a) == "string"
        };
        f.Pc = function (a) {
            return !isNaN(n(a)) && isFinite(a)
        };
        f.e = m;
        function P(a) {
            return e.createElement(a)
        }

        f.bb = function () {
            return P("DIV")
        };
        f.Qe = function () {
            return P("SPAN")
        };
        f.ac = function () {
        };
        function U(b, c, a) {
            if (a == j)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return U(a, b) || U(a, "data-" + b)
        }

        f.M = U;
        f.t = S;
        function w(b, a) {
            if (a == j)return b.className;
            b.className = a
        }

        f.Ec = w;
        function ub(b) {
            var a = {};
            m(b, function (b) {
                a[b] = b
            });
            return a
        }

        function wb(b, a) {
            return b.match(a || xb)
        }

        function N(b, a) {
            return ub(wb(b || "", a))
        }

        f.Oe = wb;
        function Z(b, c) {
            var a = "";
            m(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function H(a, c, b) {
            w(a, Z(" ", C(X(N(w(a)), N(c)), N(b))))
        }

        f.tb = function (a) {
            return a.parentNode
        };
        f.K = function (a) {
            f.N(a, "none")
        };
        f.A = function (a, b) {
            f.N(a, b ? "none" : "")
        };
        f.Kc = function (b, a) {
            b.removeAttribute(a)
        };
        f.Se = function () {
            return q() && l < 10
        };
        f.Ve = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = I(g, f, "");
                a.Vb(d, e)
            }
        };
        f.J = function () {
            return +new Date
        };
        f.D = function (b, a) {
            b.appendChild(a)
        };
        f.Wb = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        f.wb = function (a, b) {
            (b || a.parentNode).removeChild(a)
        };
        f.Ne = function (a, b) {
            m(a, function (a) {
                f.wb(a, b)
            })
        };
        f.jc = function (a) {
            f.Ne(f.V(a, c), a)
        };
        f.Me = function (b, a) {
            return parseInt(b, a || 10)
        };
        var n = parseFloat;
        f.ec = n;
        f.nf = function (b, a) {
            var c = e.body;
            while (a && b !== a && c !== a)try {
                a = a.parentNode
            } catch (d) {
                return g
            }
            return b === a
        };
        function V(d, c, b) {
            var a = d.cloneNode(!c);
            !b && f.Kc(a, "id");
            return a
        }

        f.O = V;
        f.Ab = function (e, g) {
            var a = new Image;

            function b(e, c) {
                f.I(a, "load", b);
                f.I(a, "abort", d);
                f.I(a, "error", d);
                g && g(a, c)
            }

            function d(a) {
                b(a, c)
            }

            if (nb() && l < 11.6 || !e)b(!e); else {
                f.c(a, "load", b);
                f.c(a, "abort", d);
                f.c(a, "error", d);
                a.src = e
            }
        };
        f.bf = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src)a = b;
                !c && e && e(a)
            }

            m(d, function (a) {
                f.Ab(a.src, b)
            });
            b()
        };
        f.Dc = function (b, g, i, h) {
            if (h)b = V(b);
            var c = Q(b, g);
            if (!c.length)c = a.mf(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = V(i);
                w(e, w(d));
                a.Vb(e, d.style.cssText);
                a.Wb(e, d);
                a.wb(d)
            }
            return b
        };
        function Db(b) {
            var q = this, o = "", r = ["av", "pv", "ds", "dn"], g = [], p, k = 0, h = 0, d = 0;

            function i() {
                H(b, p, g[d || k || h & 2 || h]);
                a.cb(b, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                i();
                f.I(e, "mouseup", c);
                f.I(e, "touchend", c);
                f.I(e, "touchcancel", c)
            }

            function n(a) {
                if (d)f.Fb(a); else {
                    k = 4;
                    i();
                    f.c(e, "mouseup", c);
                    f.c(e, "touchend", c);
                    f.c(e, "touchcancel", c)
                }
            }

            q.Ic = function (a) {
                if (a != j) {
                    h = a & 2 || a & 1;
                    i()
                } else return h
            };
            q.$Enable = function (a) {
                if (a == j)return !d;
                d = a ? 0 : 3;
                i()
            };
            b = f.hb(b);
            var l = a.Oe(w(b));
            if (l)o = l.shift();
            m(r, function (a) {
                g.push(o + a)
            });
            p = Z(" ", g);
            g.unshift("");
            f.c(b, "mousedown", n);
            f.c(b, "touchstart", n)
        }

        f.Ub = function (a) {
            return new Db(a)
        };
        f.cb = E;
        f.ab = o("overflow");
        f.B = o("top", 2);
        f.z = o("left", 2);
        f.o = o("width", 2);
        f.n = o("height", 2);
        f.Vc = o("marginLeft", 2);
        f.Uc = o("marginTop", 2);
        f.E = o("position");
        f.N = o("display");
        f.H = o("zIndex", 1);
        f.rb = function (b, a, c) {
            if (a != j)Bb(b, a, c); else return Ab(b)
        };
        f.Vb = function (a, b) {
            if (b != j)a.style.cssText = b; else return a.style.cssText
        };
        var R = {$Opacity: f.rb, $Top: f.B, $Left: f.z, db: f.o, eb: f.n, xb: f.E, yg: f.N, $ZIndex: f.H}, u;

        function J() {
            if (!u)u = C({zg: f.Uc, Ag: f.Vc, $Clip: f.Ve, kc: f.me}, R);
            return u
        }

        function pb() {
            J();
            u.kc = u.kc;
            return u
        }

        f.ce = J;
        f.Wd = pb;
        f.Vd = function (c, b) {
            J();
            var a = {};
            m(b, function (d, b) {
                if (R[b])a[b] = R[b](c)
            });
            return a
        };
        f.L = function (c, b) {
            var a = J();
            m(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        f.Ad = function (b, a) {
            pb();
            f.L(b, a)
        };
        var F = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.Pb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return y(a[0][0], a[1][0])
            }
        };
        f.se = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return [[e * a, -f * c], [f * a, e * c]]
        };
        f.re = function (d, c, a) {
            var e = F.Pb(d, y(-c / 2, -a / 2)), f = F.Pb(d, y(c / 2, -a / 2)), g = F.Pb(d, y(c / 2, a / 2)), h = F.Pb(d, y(-c / 2, a / 2));
            return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        f.td = function (l, g, t, r, u, w, j) {
            var c = g;
            if (l) {
                c = {};
                for (var f in g) {
                    var x = w[f] || 1, s = u[f] || [0, 1], e = (t - s[0]) / s[1];
                    e = b.min(b.max(e, 0), 1);
                    e = e * x;
                    var p = b.floor(e);
                    if (e != p)e -= p;
                    var v = r[f] || r.Cb || d.$EaseSwing, q = v(e), h, y = l[f];
                    g[f];
                    var m = g[f];
                    if (a.Pc(m))h = y + m * q; else {
                        h = a.l({Bb: {}}, l[f]);
                        a.e(m.Bb, function (c, b) {
                            var a = c * q;
                            h.Bb[b] = a;
                            h[b] += a
                        })
                    }
                    c[f] = h
                }
                if (g.$Zoom || g.$Rotate)c.kc = {
                    $Rotate: c.$Rotate || 0,
                    $Scale: c.$Zoom,
                    $OriginalWidth: j.$OriginalWidth,
                    $OriginalHeight: j.$OriginalHeight
                }
            }
            if (g.$Clip && j.$Move) {
                var k = c.$Clip.Bb, o = (k.$Top || 0) + (k.$Bottom || 0), n = (k.$Left || 0) + (k.$Right || 0);
                c.$Left = (c.$Left || 0) + n;
                c.$Top = (c.$Top || 0) + o;
                c.$Clip.$Left -= n;
                c.$Clip.$Right -= n;
                c.$Clip.$Top -= o;
                c.$Clip.$Bottom -= o
            }
            if (c.$Clip && a.Se() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == j.$OriginalWidth && c.$Clip.$Bottom == j.$OriginalHeight)c.$Clip = i;
            return c
        }
    };

    function l() {
        var b = this, d = [];

        function i(a, b) {
            d.push({lc: a, Yb: b})
        }

        function g(b, c) {
            a.e(d, function (a, e) {
                a.lc == b && a.Yb === c && d.splice(e, 1)
            })
        }

        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = g;
        b.i = function (b) {
            var c = [].slice.call(arguments, 1);
            a.e(d, function (a) {
                a.lc == b && a.Yb.apply(h, c)
            })
        }
    }

    function k(o, z, k, R, P, K) {
        o = o || 0;
        var e = this, s, p, q, x, B = 0, I, J, H, D, A = 0, l = 0, n = 0, E, m = o, f, j, r, y = [], C;

        function M(a) {
            f += a;
            j += a;
            m += a;
            l += a;
            n += a;
            A = a
        }

        function Q(a, b) {
            var c = a - f + o * b;
            M(c);
            return j
        }

        function w(o, i) {
            var d = o;
            if (r && (d >= j || d <= f))d = ((d - f) % r + r) % r + f;
            if (!E || x || i || l != d) {
                var g = b.min(d, j);
                g = b.max(g, f);
                if (!E || x || i || g != n) {
                    if (K) {
                        var h = (g - m) / (z || 1);
                        if (k.$Reverse)h = 1 - h;
                        var p = a.td(P, K, h, I, H, J, k);
                        a.e(p, function (b, a) {
                            C[a] && C[a](R, b)
                        })
                    }
                    e.rc(n - m, g - m);
                    n = g;
                    a.e(y, function (b, c) {
                        var a = o < l ? y[y.length - c - 1] : b;
                        a.v(n - A, i)
                    });
                    var s = l, q = n;
                    l = d;
                    E = c;
                    e.Gb(s, q)
                }
            }
        }

        function F(a, c, d) {
            c && a.Jb(j, 1);
            if (!d) {
                f = b.min(f, a.ae() + A);
                j = b.max(j, a.Y() + A)
            }
            y.push(a)
        }

        var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
        if (a.je() && a.Sc() < 7)t = i;
        t = t || function (b) {
            a.$Delay(b, k.$Interval)
        };
        function L() {
            if (s) {
                var d = a.J(), e = b.min(d - B, k.md), c = l + e * q;
                B = d;
                if (c * q >= p * q)c = p;
                w(c);
                if (!x && c * q >= p * q)N(D); else t(L)
            }
        }

        function v(d, g, h) {
            if (!s) {
                s = c;
                x = h;
                D = g;
                d = b.max(d, f);
                d = b.min(d, j);
                p = d;
                q = p < l ? -1 : 1;
                e.ld();
                B = a.J();
                t(L)
            }
        }

        function N(a) {
            if (s) {
                x = s = D = g;
                e.kd();
                a && a()
            }
        }

        e.$Play = function (a, b, c) {
            v(a ? l + a : j, b, c)
        };
        e.fd = v;
        e.W = N;
        e.Kd = function (a) {
            v(a)
        };
        e.T = function () {
            return l
        };
        e.jd = function () {
            return p
        };
        e.Eb = function () {
            return n
        };
        e.v = w;
        e.$Move = function (a) {
            w(l + a)
        };
        e.$IsPlaying = function () {
            return s
        };
        e.Fd = function (a) {
            r = a
        };
        e.Jb = Q;
        e.$Shift = M;
        e.X = function (a) {
            F(a, 0)
        };
        e.nc = function (a) {
            F(a, 1)
        };
        e.ae = function () {
            return f
        };
        e.Y = function () {
            return j
        };
        e.Gb = e.ld = e.kd = e.rc = a.ac;
        e.Zb = a.J();
        k = a.l({$Interval: 16, md: 50}, k);
        r = k.ed;
        C = a.l({}, a.ce(), k.wc);
        f = m = o;
        j = o + z;
        J = k.$Round || {};
        H = k.$During || {};
        I = a.l({Cb: a.Nc(k.$Easing) && k.$Easing || d.$EaseSwing}, k.$Easing)
    }

    var n = h.$JssorSlideshowFormations$ = new function () {
        var h = this, d = 0, a = 1, f = 2, e = 3, s = 1, r = 2, t = 4, q = 8, w = 256, x = 512, v = 1024, u = 2048, j = u + s, i = u + r, o = x + s, m = x + r, n = w + t, k = w + q, l = v + t, p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        h.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Kb, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)for (a = 0; a < d; a++) {
                switch (s) {
                    case j:
                        c = h - (a * e + (q - b));
                        break;
                    case l:
                        c = h - (b * d + (p - a));
                        break;
                    case o:
                        c = h - (a * e + b);
                    case n:
                        c = h - (b * d + a);
                        break;
                    case i:
                        c = a * e + b;
                        break;
                    case k:
                        c = b * d + (p - a);
                        break;
                    case m:
                        c = a * e + (q - b);
                        break;
                    default:
                        c = b * d + a
                }
                g(r, c, [b, a])
            }
            return r
        };
        h.$FormationSwirl = function (q) {
            var x = q.$Cols, y = q.$Rows, B = q.$Assembly, w = q.Kb, A = [], z = [], u = 0, b = 0, h = 0, r = x - 1, s = y - 1, t, p, v = 0;
            switch (B) {
                case j:
                    b = r;
                    h = 0;
                    p = [f, a, e, d];
                    break;
                case l:
                    b = 0;
                    h = s;
                    p = [d, e, a, f];
                    break;
                case o:
                    b = r;
                    h = s;
                    p = [e, a, f, d];
                    break;
                case n:
                    b = r;
                    h = s;
                    p = [a, e, d, f];
                    break;
                case i:
                    b = 0;
                    h = 0;
                    p = [f, d, e, a];
                    break;
                case k:
                    b = r;
                    h = 0;
                    p = [a, f, d, e];
                    break;
                case m:
                    b = 0;
                    h = s;
                    p = [e, d, f, a];
                    break;
                default:
                    b = 0;
                    h = 0;
                    p = [d, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + b;
                if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
                    z[t] = c;
                    g(A, u++, [h, b])
                } else switch (p[v++ % p.length]) {
                    case d:
                        b--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        b++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case d:
                        b++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        b--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function (p) {
            var w = p.$Cols, x = p.$Rows, z = p.$Assembly, v = p.Kb, t = [], u = 0, b = 0, c = 0, q = w - 1, r = x - 1, y, h, s = 0;
            switch (z) {
                case j:
                    b = q;
                    c = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    b = 0;
                    c = r;
                    h = [d, e, a, e];
                    break;
                case o:
                    b = q;
                    c = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    b = q;
                    c = r;
                    h = [a, e, d, e];
                    break;
                case i:
                    b = 0;
                    c = 0;
                    h = [f, d, e, d];
                    break;
                case k:
                    b = q;
                    c = 0;
                    h = [a, f, d, f];
                    break;
                case m:
                    b = 0;
                    c = r;
                    h = [e, d, f, d];
                    break;
                default:
                    b = 0;
                    c = 0;
                    h = [d, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = c + "," + b;
                if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
                    g(t, u++, [c, b]);
                    switch (h[s % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case d:
                            b--;
                            break;
                        case f:
                            c--;
                            break;
                        case a:
                            b++;
                            break;
                        case e:
                            c++
                    }
                    switch (h[s++ % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function (q) {
            var u = q.$Cols, v = q.$Rows, e = q.$Assembly, t = q.Kb, r = [], s = 0, c = 0, d = 0, f = u - 1, h = v - 1, x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0, b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f, b = 0;
                    break;
                default:
                    e = p;
                    var a = f, b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e))g(r, x - s++, [d, c]); else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h)b = h; else if (b < 0)b = 0; else if (a > f)a = f; else if (a < 0)a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function (i) {
            var a = i.$Cols || 1, c = i.$Rows || 1, j = [], d, e, f, h, k;
            f = a < c ? (c - a) / 2 : 0;
            h = a > c ? (a - c) / 2 : 0;
            k = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)for (e = 0; e < c; e++)g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function (f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, h = [], a, c, i;
            i = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)for (c = 0; c < e; c++)g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return h
        };
        h.$FormationRandom = function (d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)for (a = 0; a < d.$Cols; a++)g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        h.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
            return h
        };
        h.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
            return h
        };
        h.$FormationRectangleCross = function (f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)for (a = 0; a < i; a++)g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return j
        }
    };
    h.$JssorSlideshowRunner$ = function (o, s, q, t, y) {
        var f = this, u, h, e, x = 0, w = t.$TransitionsOrder, r, j = 8;

        function m(h, f) {
            var e = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: g,
                $SlideOut: g,
                $Reverse: g,
                $Formation: n.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {$Column: 0, $Row: 0},
                $Easing: d.$EaseSwing,
                $Round: {},
                Hb: [],
                $During: {}
            };
            a.l(e, h);
            e.Kb = e.$Cols * e.$Rows;
            if (a.Nc(e.$Easing))e.$Easing = {Cb: e.$Easing};
            e.Od = b.ceil(e.$Duration / e.$Interval);
            e.Rd = function (b, a) {
                b /= e.$Cols;
                a /= e.$Rows;
                var f = b + "x" + a;
                if (!e.Hb[f]) {
                    e.Hb[f] = {db: b, eb: a};
                    for (var c = 0; c < e.$Cols; c++)for (var d = 0; d < e.$Rows; d++)e.Hb[f][d + "," + c] = {
                        $Top: d * a,
                        $Right: c * b + b,
                        $Bottom: d * a + a,
                        $Left: c * b
                    }
                }
                return e.Hb[f]
            };
            if (e.$Brother) {
                e.$Brother = m(e.$Brother, f);
                e.$SlideOut = c
            }
            return e
        }

        function p(A, i, d, v, n, l) {
            var y = this, t, u = {}, j = {}, m = [], f, e, r, p = d.$ChessMode.$Column || 0, q = d.$ChessMode.$Row || 0, h = d.Rd(n, l), o = B(d), C = o.length - 1, s = d.$Duration + d.$Delay * C, w = v + s, k = d.$SlideOut, x;
            w += 50;
            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }

            y.Mc = w;
            y.Ob = function (c) {
                c -= v;
                var e = c < s;
                if (e || x) {
                    x = e;
                    if (!k)c = s - c;
                    var f = b.ceil(c / d.$Interval);
                    a.e(j, function (c, e) {
                        var d = b.max(f, c.Cd);
                        d = b.min(d, c.length - 1);
                        if (c.sd != d) {
                            if (!c.sd && !k)a.A(m[e]); else d == c.zd && k && a.K(m[e]);
                            c.sd = d;
                            a.Ad(m[e], c[d])
                        }
                    })
                }
            };
            i = a.O(i);
            if (a.Q()) {
                var D = !i["no-image"], z = a.of(i);
                a.e(z, function (b) {
                    (D || b["jssor-slider"]) && a.rb(b, a.rb(b), c)
                })
            }
            a.e(o, function (i, m) {
                a.e(i, function (G) {
                    var K = G[0], J = G[1], v = K + "," + J, o = g, s = g, x = g;
                    if (p && J % 2) {
                        if (p & 3)o = !o;
                        if (p & 12)s = !s;
                        if (p & 16)x = !x
                    }
                    if (q && K % 2) {
                        if (q & 3)o = !o;
                        if (q & 12)s = !s;
                        if (q & 16)x = !x
                    }
                    d.$Top = d.$Top || d.$Clip & 4;
                    d.$Bottom = d.$Bottom || d.$Clip & 8;
                    d.$Left = d.$Left || d.$Clip & 1;
                    d.$Right = d.$Right || d.$Clip & 2;
                    var C = s ? d.$Bottom : d.$Top, z = s ? d.$Top : d.$Bottom, B = o ? d.$Right : d.$Left, A = o ? d.$Left : d.$Right;
                    d.$Clip = C || z || B || A;
                    r = {};
                    e = {$Top: 0, $Left: 0, $Opacity: 1, db: n, eb: l};
                    f = a.l({}, e);
                    t = a.l({}, h[v]);
                    if (d.$Opacity)e.$Opacity = 2 - d.$Opacity;
                    if (d.$ZIndex) {
                        e.$ZIndex = d.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = d.$Cols * d.$Rows > 1 || d.$Clip;
                    if (d.$Zoom || d.$Rotate) {
                        var H = c;
                        if (a.Q())if (d.$Cols * d.$Rows > 1)H = g; else I = g;
                        if (H) {
                            e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (a.Q() || a.vc())e.$Zoom = b.min(e.$Zoom, 2);
                            var N = d.$Rotate;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        if (d.$Clip) {
                            var w = d.$ScaleClip || 1, i = t.Bb = {};
                            if (C && z) {
                                i.$Top = h.eb / 2 * w;
                                i.$Bottom = -i.$Top
                            } else if (C)i.$Bottom = -h.eb * w; else if (z)i.$Top = h.eb * w;
                            if (B && A) {
                                i.$Left = h.db / 2 * w;
                                i.$Right = -i.$Left
                            } else if (B)i.$Right = -h.db * w; else if (A)i.$Left = h.db * w
                        }
                        r.$Clip = t;
                        f.$Clip = h[v]
                    }
                    var L = o ? 1 : -1, M = s ? 1 : -1;
                    if (d.x)e.$Left += n * d.x * L;
                    if (d.y)e.$Top += l * d.y * M;
                    a.e(e, function (b, c) {
                        if (a.Pc(b))if (b != f[c])r[c] = b - f[c]
                    });
                    u[v] = k ? f : e;
                    var D = d.Od, y = b.round(m * d.$Delay / d.$Interval);
                    j[v] = new Array(y);
                    j[v].Cd = y;
                    j[v].zd = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = a.td(f, r, F / D, d.$Easing, d.$During, d.$Round, {
                            $Move: d.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        j[v].push(E)
                    }
                })
            });
            o.reverse();
            a.e(o, function (b) {
                a.e(b, function (c) {
                    var f = c[0], e = c[1], d = f + "," + e, b = i;
                    if (e || f)b = a.O(i);
                    a.L(b, u[d]);
                    a.ab(b, "hidden");
                    a.E(b, "absolute");
                    A.Zd(b);
                    m[d] = b;
                    a.A(b, !k)
                })
            })
        }

        function v() {
            var a = this, b = 0;
            k.call(a, 0, u);
            a.Gb = function (c, a) {
                if (a - b > j) {
                    b = a;
                    e && e.Ob(a);
                    h && h.Ob(a)
                }
            };
            a.nb = r
        }

        f.Hd = function () {
            var a = 0, c = t.$Transitions, d = c.length;
            if (w)a = x++ % d; else a = b.floor(b.random() * d);
            c[a] && (c[a].Z = a);
            return c[a]
        };
        f.Dd = function (w, x, i, k, a) {
            r = a;
            a = m(a, j);
            var g = k.id, d = i.id;
            g["no-image"] = !k.Tb;
            d["no-image"] = !i.Tb;
            var l = g, n = d, v = a, c = a.$Brother || m({}, j);
            if (!a.$SlideOut) {
                l = d;
                n = g
            }
            var t = c.$Shift || 0;
            h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);
            e = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);
            h.Ob(0);
            e.Ob(0);
            u = b.max(h.Mc, e.Mc);
            f.Z = w
        };
        f.Db = function () {
            o.Db();
            h = i;
            e = i
        };
        f.Jd = function () {
            var a = i;
            if (e)a = new v;
            return a
        };
        if (a.Q() || a.vc() || y && a.oc() < 537)j = 16;
        l.call(f);
        k.call(f, -1e7, 1e7)
    };
    var f = h.$JssorSlider$ = function (q, ec) {
        var n = this;

        function Dc() {
            var a = this;
            k.call(a, -1e8, 2e8);
            a.Td = function () {
                var c = a.Eb(), d = b.floor(c), f = s(d), e = c - b.floor(c);
                return {Z: f, Md: d, xb: e}
            };
            a.Gb = function (d, a) {
                var e = b.floor(a);
                if (e != a && a > d)e++;
                Tb(e, c);
                n.i(f.$EVT_POSITION_CHANGE, s(a), s(d), a, d)
            }
        }

        function Cc() {
            var b = this;
            k.call(b, 0, 0, {ed: r});
            a.e(D, function (a) {
                A & 1 && a.Fd(r);
                b.nc(a);
                a.$Shift(hb / ac)
            })
        }

        function Bc() {
            var a = this, b = Sb.$Elmt;
            k.call(a, -1, 2, {$Easing: d.$EaseLinear, wc: {xb: Yb}, ed: r}, b, {xb: 1}, {xb: -2});
            a.Nb = b
        }

        function pc(m, l) {
            var a = this, d, e, h, j, b;
            k.call(a, -1e8, 2e8, {md: 100});
            a.ld = function () {
                Q = c;
                U = i;
                n.i(f.$EVT_SWIPE_START, s(w.T()), w.T())
            };
            a.kd = function () {
                Q = g;
                j = g;
                var a = w.Td();
                n.i(f.$EVT_SWIPE_END, s(w.T()), w.T());
                !a.xb && Fc(a.Md, t)
            };
            a.Gb = function (g, f) {
                var a;
                if (j)a = b; else {
                    a = e;
                    if (h) {
                        var c = f / h;
                        a = p.$SlideEasing(c) * (e - d) + d
                    }
                }
                w.v(a)
            };
            a.Qb = function (b, f, c, g) {
                d = b;
                e = f;
                h = c;
                w.v(b);
                a.v(0);
                a.fd(c, g)
            };
            a.Nd = function (d) {
                j = c;
                b = d;
                a.$Play(d, i, c)
            };
            a.Sd = function (a) {
                b = a
            };
            w = new Dc;
            w.X(m);
            w.X(l)
        }

        function qc() {
            var c = this, b = Wb();
            a.H(b, 0);
            a.cb(b, "pointerEvents", "none");
            c.$Elmt = b;
            c.Zd = function (c) {
                a.D(b, c);
                a.A(b)
            };
            c.Db = function () {
                a.K(b);
                a.jc(b)
            }
        }

        function zc(o, e) {
            var d = this, q, x, N, y, j, C = [], H, v, W, K, Q, G, h, w, m;
            k.call(d, -u, u + 1, {});
            function F(a) {
                x && x.Sb();
                q && q.Sb();
                V(o, a);
                G = c;
                q = new L.$Class(o, L, 1);
                x = new L.$Class(o, L);
                x.v(0);
                q.v(0)
            }

            function Y() {
                q.Zb < L.Zb && F()
            }

            function O(o, r, m) {
                if (!K) {
                    K = c;
                    if (j && m) {
                        var h = m.width, b = m.height, l = h, k = b;
                        if (h && b && p.$FillMode) {
                            if (p.$FillMode & 3 && (!(p.$FillMode & 4) || h > J || b > I)) {
                                var i = g, q = J / I * b / h;
                                if (p.$FillMode & 1)i = q > 1; else if (p.$FillMode & 2)i = q < 1;
                                l = i ? h * I / b : J;
                                k = i ? I : b * J / h
                            }
                            a.o(j, l);
                            a.n(j, k);
                            a.B(j, (I - k) / 2);
                            a.z(j, (J - l) / 2)
                        }
                        a.E(j, "absolute");
                        n.i(f.$EVT_LOAD_END, e)
                    }
                }
                a.K(r);
                o && o(d)
            }

            function X(b, c, f, g) {
                if (g == U && t == e && R)if (!Ec) {
                    var a = s(b);
                    B.Dd(a, e, c, d, f);
                    c.Xe();
                    ab.Jb(a, 1);
                    ab.v(a);
                    z.Qb(b, b, 0)
                }
            }

            function bb(b) {
                if (b == U && t == e) {
                    if (!h) {
                        var a = i;
                        if (B)if (B.Z == e)a = B.Jd(); else B.Db();
                        Y();
                        h = new xc(o, e, a, d.Te(), d.Le());
                        h.Jc(m)
                    }
                    !h.$IsPlaying() && h.zc()
                }
            }

            function T(f, c, g) {
                if (f == e) {
                    if (f != c)D[c] && D[c].Ue(); else!g && h && h.Ye();
                    m && m.$Enable();
                    var j = U = a.J();
                    d.Ab(a.F(i, bb, j))
                } else {
                    var l = b.abs(e - f), k = u + p.$LazyLoading - 1;
                    (!Q || l <= k) && d.Ab()
                }
            }

            function cb() {
                if (t == e && h) {
                    h.W();
                    m && m.$Quit();
                    m && m.$Disable();
                    h.Oc()
                }
            }

            function fb() {
                t == e && h && h.W()
            }

            function Z(a) {
                !M && n.i(f.$EVT_CLICK, e, a)
            }

            function P() {
                m = w.pInstance;
                h && h.Jc(m)
            }

            d.Ab = function (d, b) {
                b = b || y;
                if (C.length && !K) {
                    a.A(b);
                    if (!W) {
                        W = c;
                        n.i(f.$EVT_LOAD_START, e);
                        a.e(C, function (b) {
                            if (!a.M(b, "src")) {
                                b.src = a.t(b, "src2");
                                a.N(b, b["display-origin"])
                            }
                        })
                    }
                    a.bf(C, j, a.F(i, O, d, b))
                } else O(d, b)
            };
            d.df = function () {
                var g = e;
                if (p.$AutoPlaySteps < 0)g -= r;
                var c = g + p.$AutoPlaySteps * vc;
                if (A & 2)c = s(c);
                if (!(A & 1))c = b.max(0, b.min(c, r - u));
                if (c != e) {
                    if (B) {
                        var d = B.Hd(r);
                        if (d) {
                            var h = U = a.J(), f = D[s(c)];
                            return f.Ab(a.F(i, X, c, f, d, h), y)
                        }
                    }
                    pb(c)
                }
            };
            d.bc = function () {
                T(e, e, c)
            };
            d.Ue = function () {
                m && m.$Quit();
                m && m.$Disable();
                d.rd();
                h && h.ff();
                h = i;
                F()
            };
            d.Xe = function () {
                a.K(o)
            };
            d.rd = function () {
                a.A(o)
            };
            d.ef = function () {
                m && m.$Enable()
            };
            function V(b, e, d) {
                if (a.M(b, "jssor-slider"))return;
                d = d || 0;
                if (!G) {
                    if (b.tagName == "IMG") {
                        C.push(b);
                        if (!a.M(b, "src")) {
                            Q = c;
                            b["display-origin"] = a.N(b);
                            a.K(b)
                        }
                    }
                    a.Q() && a.H(b, (a.H(b) || 0) + 1);
                    if (p.$HWA && a.oc())(a.oc() < 534 || !eb && !a.ee()) && a.ne(b)
                }
                var f = a.V(b);
                a.e(f, function (f) {
                    var i = f.tagName, k = a.t(f, "u");
                    if (k == "player" && !w) {
                        w = f;
                        if (w.pInstance)P(); else a.c(w, "dataavailable", P)
                    }
                    if (k == "caption") {
                        if (!a.Wc() && !e) {
                            var h = a.O(f, g, c);
                            a.Wb(h, f, b);
                            a.wb(f, b);
                            f = h;
                            e = c
                        }
                    } else if (!G && !d && !j) {
                        if (i == "A") {
                            if (a.t(f, "u") == "image")j = a.cf(f, "IMG"); else j = a.C(f, "image", c);
                            if (j) {
                                H = f;
                                a.L(H, S);
                                v = a.O(H, c);
                                a.N(v, "block");
                                a.L(v, S);
                                a.rb(v, 0);
                                a.cb(v, "backgroundColor", "#000")
                            }
                        } else if (i == "IMG" && a.t(f, "u") == "image")j = f;
                        if (j) {
                            j.border = 0;
                            a.L(j, S)
                        }
                    }
                    V(f, e, d + 1)
                })
            }

            d.rc = function (c, b) {
                var a = u - b;
                Yb(N, a)
            };
            d.Te = function () {
                return q
            };
            d.Le = function () {
                return x
            };
            d.Z = e;
            l.call(d);
            var E = a.C(o, "thumb", c);
            if (E) {
                d.hf = a.O(E);
                a.Kc(E, "id");
                a.K(E)
            }
            a.A(o);
            y = a.O(db);
            a.H(y, 1e3);
            a.c(o, "click", Z);
            F(c);
            d.Tb = j;
            d.qd = v;
            d.id = o;
            d.Nb = N = o;
            a.D(N, y);
            n.$On(203, T);
            n.$On(28, fb);
            n.$On(24, cb)
        }

        function xc(G, i, p, u, s) {
            var b = this, l = 0, w = 0, m, h, d, e, j, q, v, r, o = D[i];
            k.call(b, 0, 0);
            function x() {
                a.jc(O);
                cc && j && o.qd && a.D(O, o.qd);
                a.A(O, !j && o.Tb)
            }

            function y() {
                if (q) {
                    q = g;
                    n.i(f.$EVT_ROLLBACK_END, i, d, l, h, d, e);
                    b.v(h)
                }
                b.zc()
            }

            function z(a) {
                r = a;
                b.W();
                b.zc()
            }

            b.zc = function () {
                var a = b.Eb();
                if (!C && !Q && !r && t == i) {
                    if (!a) {
                        if (m && !j) {
                            j = c;
                            b.Oc(c);
                            n.i(f.$EVT_SLIDESHOW_START, i, l, w, m, e)
                        }
                        x()
                    }
                    var g, p = f.$EVT_STATE_CHANGE;
                    if (a != e)if (a == d)g = e; else if (a == h)g = d; else if (!a)g = h; else if (a > d) {
                        q = c;
                        g = d;
                        p = f.$EVT_ROLLBACK_START
                    } else g = b.jd();
                    n.i(p, i, a, l, h, d, e);
                    var k = R && (!E || F);
                    if (a == e)(d != e && !(E & 12) || k) && o.df(); else(k || a != d) && b.fd(g, y)
                }
            };
            b.Ye = function () {
                d == e && d == b.Eb() && b.v(h)
            };
            b.ff = function () {
                B && B.Z == i && B.Db();
                var a = b.Eb();
                a < e && n.i(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, d, e)
            };
            b.Oc = function (b) {
                p && a.ab(jb, b && p.nb.$Outside ? "" : "hidden")
            };
            b.rc = function (b, a) {
                if (j && a >= m) {
                    j = g;
                    x();
                    o.rd();
                    B.Db();
                    n.i(f.$EVT_SLIDESHOW_END, i, l, w, m, e)
                }
                n.i(f.$EVT_PROGRESS_CHANGE, i, a, l, h, d, e)
            };
            b.Jc = function (a) {
                if (a && !v) {
                    v = a;
                    a.$On($JssorPlayer$.be, z)
                }
            };
            p && b.nc(p);
            m = b.Y();
            b.Y();
            b.nc(u);
            h = u.Y();
            d = h + (a.ec(a.t(G, "idle")) || oc);
            s.$Shift(d);
            b.X(s);
            e = b.Y()
        }

        function Yb(g, f) {
            var e = x > 0 ? x : ib, c = Bb * f * (e & 1), d = Cb * f * (e >> 1 & 1);
            c = b.round(c);
            d = b.round(d);
            a.z(g, c);
            a.B(g, d)
        }

        function Ob() {
            rb = Q;
            Kb = z.jd();
            G = w.T()
        }

        function fc() {
            Ob();
            if (C || !F && E & 12) {
                z.W();
                n.i(f.de)
            }
        }

        function dc(e) {
            if (!C && (F || !(E & 12)) && !z.$IsPlaying()) {
                var c = w.T(), a = b.ceil(G);
                if (e && b.abs(H) >= p.$MinDragOffsetToSlide) {
                    a = b.ceil(c);
                    a += gb
                }
                if (!(A & 1))a = b.min(r - u, b.max(a, 0));
                var d = b.abs(a - c);
                d = 1 - b.pow(1 - d, 5);
                if (!M && rb)z.Kd(Kb); else if (c == a) {
                    vb.ef();
                    vb.bc()
                } else z.Qb(c, a, d * Ub)
            }
        }

        function Ib(b) {
            !a.t(a.Ac(b), "nodrag") && a.Fb(b)
        }

        function tc(a) {
            Xb(a, 1)
        }

        function Xb(b, d) {
            b = a.Xc(b);
            var k = a.Ac(b);
            if (!K && !a.t(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
                C = c;
                Ab = g;
                U = i;
                a.c(e, d ? "touchmove" : "mousemove", Db);
                a.J();
                M = 0;
                fc();
                if (!rb)x = 0;
                if (d) {
                    var j = b.touches[0];
                    wb = j.clientX;
                    xb = j.clientY
                } else {
                    var h = a.Yc(b);
                    wb = h.x;
                    xb = h.y
                }
                H = 0;
                cb = 0;
                gb = 0;
                n.i(f.$EVT_DRAG_START, s(G), G, b)
            }
        }

        function Db(e) {
            if (C) {
                e = a.Xc(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {x: l.clientX, y: l.clientY}
                } else f = a.Yc(e);
                if (f) {
                    var j = f.x - wb, k = f.y - xb;
                    if (b.floor(G) != G)x = x || ib & K;
                    if ((j || k) && !x) {
                        if (K == 3)if (b.abs(k) > b.abs(j))x = 2; else x = 1; else x = K;
                        if (lb && x == 1 && b.abs(k) - b.abs(j) > 3)Ab = c
                    }
                    if (x) {
                        var d = k, i = Cb;
                        if (x == 1) {
                            d = j;
                            i = Bb
                        }
                        if (!(A & 1)) {
                            if (d > 0) {
                                var g = i * t, h = d - g;
                                if (h > 0)d = g + b.sqrt(h) * 5
                            }
                            if (d < 0) {
                                var g = i * (r - u - t), h = -d - g;
                                if (h > 0)d = -g - b.sqrt(h) * 5
                            }
                        }
                        if (H - cb < -2)gb = 0; else if (H - cb > 2)gb = -1;
                        cb = H;
                        H = d;
                        ub = G - H / i / (Z || 1);
                        if (H && x && !Ab) {
                            a.Fb(e);
                            if (!Q)z.Nd(ub); else z.Sd(ub)
                        }
                    }
                }
            }
        }

        function ob() {
            rc();
            if (C) {
                C = g;
                a.J();
                a.I(e, "mousemove", Db);
                a.I(e, "touchmove", Db);
                M = H;
                z.W();
                var b = w.T();
                n.i(f.$EVT_DRAG_END, s(b), b, s(G), G);
                E & 12 && Ob();
                dc(c)
            }
        }

        function jc(c) {
            if (M) {
                a.af(c);
                var b = a.Ac(c);
                while (b && v !== b) {
                    b.tagName == "A" && a.Fb(c);
                    try {
                        b = b.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function nc(a) {
            D[t];
            t = s(a);
            vb = D[t];
            Tb(a);
            return t
        }

        function Fc(a, b) {
            x = 0;
            nc(a);
            n.i(f.$EVT_PARK, s(a), b)
        }

        function Tb(b, c) {
            N = b;
            a.e(P, function (a) {
                a.qc(s(b), b, c)
            })
        }

        function uc() {
            var b = f.pd || 0, a = Y;
            if (lb)a & 1 && (a &= 1);
            f.pd |= a;
            return K = a & ~b
        }

        function rc() {
            if (K) {
                f.pd &= ~Y;
                K = 0
            }
        }

        function Wb() {
            var b = a.bb();
            a.L(b, S);
            a.E(b, "absolute");
            return b
        }

        function s(a) {
            return (a % r + r) % r
        }

        function kc(d, c) {
            var a = d;
            if (c) {
                if (!A) {
                    a = b.min(b.max(a + N, 0), r - u);
                    c = g
                } else if (A & 2) {
                    a = s(a + N);
                    c = g
                }
            } else if (A)a = n.od(a);
            pb(a, p.$SlideDuration, c)
        }

        function zb() {
            a.e(P, function (a) {
                a.Bc(a.Xb.$ChanceToShow <= F)
            })
        }

        function hc() {
            if (!F) {
                F = 1;
                zb();
                if (!C) {
                    E & 12 && dc();
                    E & 3 && D[t].bc()
                }
            }
        }

        function gc() {
            if (F) {
                F = 0;
                zb();
                C || !(E & 12) || fc()
            }
        }

        function ic() {
            S = {db: J, eb: I, $Top: 0, $Left: 0};
            a.e(V, function (b) {
                a.L(b, S);
                a.E(b, "absolute");
                a.ab(b, "hidden");
                a.K(b)
            });
            a.L(db, S)
        }

        function nb(b, a) {
            pb(b, a, c)
        }

        function pb(f, e, k) {
            if (Qb && (!C && (F || !(E & 12)) || p.$NaviQuitDrag)) {
                Q = c;
                C = g;
                z.W();
                if (e == j)e = Ub;
                var d = Eb.Eb(), a = f;
                if (k) {
                    a = d + f;
                    if (f > 0)a = b.ceil(a); else a = b.floor(a)
                }
                if (A & 2)a = s(a);
                if (!(A & 1))a = b.max(0, b.min(a, r - u));
                var i = (a - d) % r;
                a = d + i;
                var h = d == a ? 0 : e * b.abs(i);
                h = b.min(h, e * u * 1.5);
                z.Qb(d, a, h || 1)
            }
        }

        n.$PlayTo = pb;
        n.$GoTo = function (a) {
            w.v(a)
        };
        n.$Next = function () {
            nb(1)
        };
        n.$Prev = function () {
            nb(-1)
        };
        n.$Pause = function () {
            R = g
        };
        n.$Play = function () {
            if (!R) {
                R = c;
                D[t] && D[t].bc()
            }
        };
        n.$SetSlideshowTransitions = function (a) {
            p.$SlideshowOptions.$Transitions = a
        };
        n.$SetCaptionTransitions = function (b) {
            L.$CaptionTransitions = b;
            L.Zb = a.J()
        };
        n.$SlidesCount = function () {
            return V.length
        };
        n.$CurrentIndex = function () {
            return t
        };
        n.$IsAutoPlaying = function () {
            return R
        };
        n.$IsDragging = function () {
            return C
        };
        n.$IsSliding = function () {
            return Q
        };
        n.$IsMouseOver = function () {
            return !F
        };
        n.$LastDragSucceded = function () {
            return M
        };
        function X() {
            return a.o(y || q)
        }

        function kb() {
            return a.n(y || q)
        }

        n.$OriginalWidth = n.$GetOriginalWidth = X;
        n.$OriginalHeight = n.$GetOriginalHeight = kb;
        function Gb(c, d) {
            if (c == j)return a.o(q);
            if (!y) {
                var b = a.bb(e);
                a.Ec(b, a.Ec(q));
                a.Vb(b, a.Vb(q));
                a.N(b, "block");
                a.E(b, "relative");
                a.B(b, 0);
                a.z(b, 0);
                a.ab(b, "visible");
                y = a.bb(e);
                a.E(y, "absolute");
                a.B(y, 0);
                a.z(y, 0);
                a.o(y, a.o(q));
                a.n(y, a.n(q));
                a.le(y, "0 0");
                a.D(y, b);
                var h = a.V(q);
                a.D(q, y);
                a.cb(q, "backgroundImage", "");
                a.e(h, function (c) {
                    a.D(a.t(c, "noscale") ? q : b, c)
                })
            }
            Z = c / (d ? a.n : a.o)(y);
            a.oe(y, Z);
            var g = d ? Z * X() : c, f = d ? c : Z * kb();
            a.o(q, g);
            a.n(q, f);
            a.e(P, function (a) {
                a.hc(g, f)
            })
        }

        n.$ScaleHeight = n.$GetScaleHeight = function (b) {
            if (b == j)return a.n(q);
            Gb(b, c)
        };
        n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Gb;
        n.od = function (a) {
            var d = b.ceil(s(hb / ac)), c = s(a - N + d);
            if (c > u) {
                if (a - N > r / 2)a -= r; else if (a - N <= -r / 2)a += r
            } else a = N + c - d;
            return a
        };
        l.call(n);
        n.$Elmt = q = a.hb(q);
        var p = a.l({
            $FillMode: 0,
            $LazyLoading: 1,
            $StartIndex: 0,
            $AutoPlay: g,
            $Loop: 1,
            $HWA: c,
            $NaviQuitDrag: c,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: d.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $DisplayPieces: 1,
            $ParkingPosition: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, ec);
        if (p.$Idle != j)p.$AutoPlayInterval = p.$Idle;
        if (p.$Cols != j)p.$DisplayPieces = p.$Cols;
        var ib = p.$PlayOrientation & 3, vc = (p.$PlayOrientation & 4) / -4 || 1, fb = p.$SlideshowOptions, L = a.l({
            $Class: o,
            $PlayInMode: 1,
            $PlayOutMode: 1
        }, p.$CaptionSliderOptions), sb = p.$BulletNavigatorOptions, W = p.$ArrowNavigatorOptions, bb = p.$ThumbnailNavigatorOptions, T = !p.$UISearchMode, y, v = a.C(q, "slides", T), db = a.C(q, "loading", T) || a.bb(e), Jb = a.C(q, "navigator", T), bc = a.C(q, "arrowleft", T), Zb = a.C(q, "arrowright", T), Hb = a.C(q, "thumbnavigator", T), mc = a.o(v), lc = a.n(v), S, V = [], wc = a.V(v);
        a.e(wc, function (b) {
            if (b.tagName == "DIV" && !a.t(b, "u"))V.push(b); else a.Q() && a.H(b, (a.H(b) || 0) + 1)
        });
        var t = -1, N, vb, r = V.length, J = p.$SlideWidth || mc, I = p.$SlideHeight || lc, Vb = p.$SlideSpacing, Bb = J + Vb, Cb = I + Vb, ac = ib & 1 ? Bb : Cb, u = b.min(p.$DisplayPieces, r), jb, x, K, Ab, P = [], Pb, Rb, Nb, cc, Ec, R, E = p.$PauseOnHover, oc = p.$AutoPlayInterval, Ub = p.$SlideDuration, tb, eb, hb, Qb = u < r, A = Qb ? p.$Loop : 0, Y, M, F = 1, Q, C, U, wb = 0, xb = 0, H, cb, gb, Eb, w, ab, z, Sb = new qc, Z;
        R = p.$AutoPlay;
        n.Xb = ec;
        ic();
        a.M(q, "jssor-slider", c);
        a.H(v, a.H(v) || 0);
        a.E(v, "absolute");
        jb = a.O(v, c);
        a.Wb(jb, v);
        if (fb) {
            cc = fb.$ShowLink;
            tb = fb.$Class;
            eb = u == 1 && r > 1 && tb && (!a.Wc() || a.Sc() >= 8)
        }
        hb = eb || u >= r || !(A & 1) ? 0 : p.$ParkingPosition;
        Y = (u > 1 || hb ? ib : -1) & p.$DragOrientation;
        var yb = v, D = [], B, O, Fb = a.he(), lb = Fb.ie, G, rb, Kb, ub;
        Fb.dd && a.cb(yb, Fb.dd, ([i, "pan-y", "pan-x", "none"])[Y] || "");
        ab = new Bc;
        if (eb)B = new tb(Sb, J, I, fb, lb);
        a.D(jb, ab.Nb);
        a.ab(v, "hidden");
        O = Wb();
        a.cb(O, "backgroundColor", "#000");
        a.rb(O, 0);
        a.Wb(O, yb.firstChild, yb);
        for (var qb = 0; qb < V.length; qb++) {
            var yc = V[qb], Ac = new zc(yc, qb);
            D.push(Ac)
        }
        a.K(db);
        Eb = new Cc;
        z = new pc(Eb, ab);
        if (Y) {
            a.c(v, "mousedown", Xb);
            a.c(v, "touchstart", tc);
            a.c(v, "dragstart", Ib);
            a.c(v, "selectstart", Ib);
            a.c(e, "mouseup", ob);
            a.c(e, "touchend", ob);
            a.c(e, "touchcancel", ob);
            a.c(h, "blur", ob)
        }
        E &= lb ? 10 : 5;
        if (Jb && sb) {
            Pb = new sb.$Class(Jb, sb, X(), kb());
            P.push(Pb)
        }
        if (W && bc && Zb) {
            W.$Loop = A;
            W.$DisplayPieces = u;
            Rb = new W.$Class(bc, Zb, W, X(), kb());
            P.push(Rb)
        }
        if (Hb && bb) {
            bb.$StartIndex = p.$StartIndex;
            Nb = new bb.$Class(Hb, bb);
            P.push(Nb)
        }
        a.e(P, function (a) {
            a.gc(r, D, db);
            a.$On(m.Mb, kc)
        });
        Gb(X());
        a.c(v, "click", jc);
        a.c(q, "mouseout", a.Rb(hc, q));
        a.c(q, "mouseover", a.Rb(gc, q));
        zb();
        p.$ArrowKeyNavigation && a.c(e, "keydown", function (a) {
            if (a.keyCode == 37)nb(-1); else a.keyCode == 39 && nb(1)
        });
        var mb = p.$StartIndex;
        if (!(A & 1))mb = b.max(0, b.min(mb, r - u));
        z.Qb(mb, mb, 0)
    };
    h.$JssorSlideo$ = f;
    f.$EVT_CLICK = 21;
    f.$EVT_DRAG_START = 22;
    f.$EVT_DRAG_END = 23;
    f.$EVT_SWIPE_START = 24;
    f.$EVT_SWIPE_END = 25;
    f.$EVT_LOAD_START = 26;
    f.$EVT_LOAD_END = 27;
    f.de = 28;
    f.$EVT_POSITION_CHANGE = 202;
    f.$EVT_PARK = 203;
    f.$EVT_SLIDESHOW_START = 206;
    f.$EVT_SLIDESHOW_END = 207;
    f.$EVT_PROGRESS_CHANGE = 208;
    f.$EVT_STATE_CHANGE = 209;
    f.$EVT_ROLLBACK_START = 210;
    f.$EVT_ROLLBACK_END = 211;
    var m = {Mb: 1};
    h.$JssorBulletNavigator$ = function (d, D) {
        var f = this;
        l.call(f);
        d = a.hb(d);
        var t, u, s, r, n = 0, e, o, k, y, z, j, h, q, p, C = [], A = [];

        function x(a) {
            a != -1 && A[a].Ic(a == n)
        }

        function v(a) {
            f.i(m.Mb, a * o)
        }

        f.$Elmt = d;
        f.qc = function (a) {
            if (a != r) {
                var d = n, c = b.floor(a / o);
                n = c;
                r = a;
                x(d);
                x(c)
            }
        };
        f.Bc = function (b) {
            a.A(d, b)
        };
        var B;
        f.hc = function (f, b) {
            if (!B || e.$Scale == g) {
                var f = a.tb(d).clientWidth, b = a.tb(d).clientHeight;
                e.$AutoCenter & 1 && a.z(d, (f - u) / 2);
                e.$AutoCenter & 2 && a.B(d, (b - s) / 2);
                B = c
            }
        };
        var w;
        f.gc = function (D) {
            if (!w) {
                t = b.ceil(D / o);
                n = 0;
                var m = q + y, r = p + z, l = b.ceil(t / k) - 1;
                u = q + m * (!j ? l : k - 1);
                s = p + r * (j ? l : k - 1);
                a.o(d, u);
                a.n(d, s);
                for (var f = 0; f < t; f++) {
                    var B = a.Qe();
                    a.gf(B, f + 1);
                    var g = a.Dc(h, "numbertemplate", B, c);
                    a.E(g, "absolute");
                    var x = f % (l + 1);
                    a.z(g, !j ? m * x : f % k * m);
                    a.B(g, j ? r * x : b.floor(f / (l + 1)) * r);
                    a.D(d, g);
                    C[f] = g;
                    e.$ActionMode & 1 && a.c(g, "click", a.F(i, v, f));
                    e.$ActionMode & 2 && a.c(g, "mouseover", a.Rb(a.F(i, v, f), g));
                    A[f] = a.Ub(g)
                }
                w = c
            }
        };
        f.Xb = e = a.l({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, D);
        h = a.C(d, "prototype");
        q = a.o(h);
        p = a.n(h);
        a.wb(h, d);
        o = e.$Steps || 1;
        k = e.$Lanes || 1;
        y = e.$SpacingX;
        z = e.$SpacingY;
        j = e.$Orientation - 1;
        e.$Scale == g && a.M(d, "noscale", c)
    };
    h.$JssorArrowNavigator$ = function (b, f, j) {
        var d = this;
        l.call(d);
        var u, t, e, h, k, q = a.o(b), o = a.n(b);

        function n(a) {
            d.i(m.Mb, a, c)
        }

        function r(c) {
            a.A(b, c || !j.$Loop && e == 0);
            a.A(f, c || !j.$Loop && e >= t - j.$DisplayPieces);
            u = c
        }

        d.qc = function (b, a, c) {
            if (c)e = a; else {
                e = b;
                r(u)
            }
        };
        d.Bc = r;
        var s;
        d.hc = function (i, d) {
            if (!s || h.$Scale == g) {
                var e = a.tb(b).clientWidth, d = a.tb(b).clientHeight;
                if (h.$AutoCenter & 1) {
                    a.z(b, (e - q) / 2);
                    a.z(f, (e - q) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.B(b, (d - o) / 2);
                    a.B(f, (d - o) / 2)
                }
                s = c
            }
        };
        var p;
        d.gc = function (d) {
            t = d;
            e = 0;
            if (!p) {
                a.c(b, "click", a.F(i, n, -k));
                a.c(f, "click", a.F(i, n, k));
                a.Ub(b);
                a.Ub(f);
                p = c
            }
        };
        d.Xb = h = a.l({$Steps: 1}, j);
        k = h.$Steps;
        if (h.$Scale == g) {
            a.M(b, "noscale", c);
            a.M(f, "noscale", c)
        }
    };
    h.$JssorThumbnailNavigator$ = function (k, C) {
        var h = this, z, q, d, w = [], A, y, n, r, s, u, t, p, v, e, o;
        l.call(h);
        k = a.hb(k);
        function B(l, e) {
            var f = this, b, k, j;

            function n() {
                k.Ic(q == e)
            }

            function g(a) {
                (a || !v.$LastDragSucceded()) && h.i(m.Mb, e)
            }

            f.Z = e;
            f.Hc = n;
            j = l.hf || l.Tb || a.bb();
            f.Nb = b = a.Dc(o, "thumbnailtemplate", j, c);
            k = a.Ub(b);
            d.$ActionMode & 1 && a.c(b, "click", a.F(i, g, 0));
            d.$ActionMode & 2 && a.c(b, "mouseover", a.Rb(a.F(i, g, 1), b))
        }

        h.qc = function (c, d, e) {
            var a = q;
            q = c;
            a != -1 && w[a].Hc();
            w[c].Hc();
            !e && v.$PlayTo(v.od(b.floor(d / n)))
        };
        h.Bc = function (b) {
            a.A(k, b)
        };
        h.hc = a.ac;
        var x;
        h.gc = function (F, C) {
            if (!x) {
                z = F;
                b.ceil(z / n);
                q = -1;
                p = b.min(p, C.length);
                var h = d.$Orientation & 1, l = u + (u + r) * (n - 1) * (1 - h), j = t + (t + s) * (n - 1) * h, o = l + (l + r) * (p - 1) * h, m = j + (j + s) * (p - 1) * (1 - h);
                a.E(e, "absolute");
                a.ab(e, "hidden");
                d.$AutoCenter & 1 && a.z(e, (A - o) / 2);
                d.$AutoCenter & 2 && a.B(e, (y - m) / 2);
                a.o(e, o);
                a.n(e, m);
                var i = [];
                a.e(C, function (k, f) {
                    var g = new B(k, f), d = g.Nb, c = b.floor(f / n), j = f % n;
                    a.z(d, (u + r) * j * (1 - h));
                    a.B(d, (t + s) * j * h);
                    if (!i[c]) {
                        i[c] = a.bb();
                        a.D(e, i[c])
                    }
                    a.D(i[c], d);
                    w.push(g)
                });
                var E = a.l({
                    $HWA: g,
                    $AutoPlay: g,
                    $NaviQuitDrag: g,
                    $SlideWidth: l,
                    $SlideHeight: j,
                    $SlideSpacing: r * h + s * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: d.$Orientation,
                    $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation
                }, d);
                v = new f(k, E);
                x = c
            }
        };
        h.Xb = d = a.l({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, C);
        if (d.$Rows != j)d.$Lanes = d.$Rows;
        A = a.o(k);
        y = a.n(k);
        e = a.C(k, "slides", c);
        o = a.C(e, "prototype");
        u = a.o(o);
        t = a.n(o);
        a.wb(o, e);
        n = d.$Lanes || 1;
        r = d.$SpacingX;
        s = d.$SpacingY;
        p = d.$DisplayPieces;
        d.$Scale == g && a.M(k, "noscale", c)
    };
    function o() {
        k.call(this, 0, 0);
        this.Sb = a.ac
    }

    h.$JssorCaptionSlider$ = function (p, h, f) {
        var c = this, g, n = f ? h.$PlayInMode : h.$PlayOutMode, e = h.$CaptionTransitions, o = {
            nb: "t",
            $Delay: "d",
            $Duration: "du",
            x: "x",
            y: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            lb: "b"
        }, d = {
            Cb: function (b, a) {
                if (!isNaN(a.ob))b = a.ob; else b *= a.ze;
                return b
            }, $Opacity: function (b, a) {
                return this.Cb(b - 1, a)
            }
        };
        d.$Zoom = d.$Opacity;
        k.call(c, 0, 0);
        function l(r, m) {
            var k = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.e(o, function (g, h) {
                    var e = a.t(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.ob = e; else if (e.indexOf("%") + 1)f.ze = a.ec(e) / 100; else f.ob = a.ec(e);
                        b[h] = f
                    }
                });
                return b
            }

            function p() {
                return e[b.floor(b.random() * e.length)]
            }

            function g(f) {
                var h;
                if (f == "*")h = p(); else if (f) {
                    var d = e[a.Me(f)] || e[f];
                    if (a.mc(d)) {
                        if (f != i) {
                            i = f;
                            c[f] = 0;
                            j[f] = d[b.floor(b.random() * d.length)]
                        } else c[f]++;
                        d = j[f];
                        if (a.mc(d)) {
                            d = d.length && d[c[f] % d.length];
                            if (a.mc(d))d = d[b.floor(b.random() * d.length)]
                        }
                    }
                    h = d;
                    if (a.cd(h))h = g(h)
                }
                return h
            }

            var q = a.V(r);
            a.e(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var e = a.t(b, "u") == "caption";
                a.e(f ? [0, 3] : [2], function (k, o) {
                    if (e) {
                        var j, f;
                        if (k != 2 || !a.t(b, "t3")) {
                            f = h(b, k);
                            if (k == 2 && !f.nb) {
                                f.$Delay = f.$Delay || {ob: 0};
                                f = a.l(h(b, 0), f)
                            }
                        }
                        if (f && f.nb) {
                            j = g(f.nb.ob);
                            if (j) {
                                var i = a.l({$Delay: 0}, j);
                                a.e(f, function (c, a) {
                                    var b = (d[a] || d.Cb).apply(d, [i[a], f[a]]);
                                    if (!isNaN(b))i[a] = b
                                });
                                if (!o)if (f.lb)i.lb = f.lb.ob || 0; else if (n & 2)i.lb = 0
                            }
                        }
                        c.push(i)
                    }
                    if (m % 2 && !o)c.V = l(b, m + 1)
                });
                k.push(c)
            });
            return k
        }

        function m(w, c, z) {
            var g = {
                $Easing: c.$Easing,
                $Round: c.$Round,
                $During: c.$During,
                $Reverse: f && !z
            }, m = w, r = a.tb(w), l = a.o(m), j = a.n(m), y = a.o(r), x = a.n(r), h = {}, e = {}, i = c.$ScaleClip || 1;
            if (c.$Opacity)e.$Opacity = 1 - c.$Opacity;
            g.$OriginalWidth = l;
            g.$OriginalHeight = j;
            if (c.$Zoom || c.$Rotate) {
                e.$Zoom = (c.$Zoom || 2) - 2;
                if (a.Q() || a.vc())e.$Zoom = b.min(e.$Zoom, 1);
                h.$Zoom = 1;
                var B = c.$Rotate || 0;
                e.$Rotate = B * 360;
                h.$Rotate = 0
            } else if (c.$Clip) {
                var s = {
                    $Top: 0,
                    $Right: l,
                    $Bottom: j,
                    $Left: 0
                }, v = a.l({}, s), d = v.Bb = {}, u = c.$Clip & 4, p = c.$Clip & 8, t = c.$Clip & 1, q = c.$Clip & 2;
                if (u && p) {
                    d.$Top = j / 2 * i;
                    d.$Bottom = -d.$Top
                } else if (u)d.$Bottom = -j * i; else if (p)d.$Top = j * i;
                if (t && q) {
                    d.$Left = l / 2 * i;
                    d.$Right = -d.$Left
                } else if (t)d.$Right = -l * i; else if (q)d.$Left = l * i;
                g.$Move = c.$Move;
                e.$Clip = v;
                h.$Clip = s
            }
            var n = 0, o = 0;
            if (c.x)n -= y * c.x;
            if (c.y)o -= x * c.y;
            if (n || o || g.$Move) {
                e.$Left = n;
                e.$Top = o
            }
            var A = c.$Duration;
            h = a.l(h, a.Vd(m, e));
            g.wc = a.Wd();
            return new k(c.$Delay, A, g, m, h, e)
        }

        function i(b, d) {
            a.e(d, function (a) {
                var e, h = a.$Elmt, d = a[0], k = a[1];
                if (d) {
                    e = m(h, d);
                    b = e.Jb(d.lb == j ? b : d.lb, 1)
                }
                b = i(b, a.V);
                if (k) {
                    var f = m(h, k, 1);
                    f.Jb(b, 1);
                    c.X(f);
                    g.X(f)
                }
                e && c.X(e)
            });
            return b
        }

        c.Sb = function () {
            c.v(c.Y() * (f || 0));
            g.v(0)
        };
        g = new k(0, 0);
        i(0, n ? l(p, 1) : [])
    };
})(window, document, Math, null, true, false)




jQuery(document).ready(function ($) {

    var options = {
        $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
        $SlideDuration: 800,                               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
        //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
            $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
            $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
            $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
            $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
            $Orientation: 1,                                //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
            $Scale: false                                   //Scales bullets navigator or not while slider scale
        },

        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
    };

    //Make the element 'slider1_container' visible before initialize jssor slider.
    $("#slider1_container").css("display", "block");
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
