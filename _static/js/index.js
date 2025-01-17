!(function (t) {
    var e = {};
    function n(i) {
        if (e[i]) return e[i].exports;
        var o = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var o in t)
                    n.d(
                        i,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return i;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 2));
})([
    function (t, e) {
        t.exports = jQuery;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                /**!
                 * @fileOverview Kickass library to create and place poppers near their reference elements.
                 * @version 1.16.1
                 * @license
                 * Copyright (c) 2016 Federico Zivolo and contributors
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in all
                 * copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                 * SOFTWARE.
                 */
                var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    i = (function () {
                        for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                        return 0;
                    })();
                var o =
                    n && window.Promise
                        ? function (t) {
                              var e = !1;
                              return function () {
                                  e ||
                                      ((e = !0),
                                      window.Promise.resolve().then(function () {
                                          (e = !1), t();
                                      }));
                              };
                          }
                        : function (t) {
                              var e = !1;
                              return function () {
                                  e ||
                                      ((e = !0),
                                      setTimeout(function () {
                                          (e = !1), t();
                                      }, i));
                              };
                          };
                function r(t) {
                    return t && "[object Function]" === {}.toString.call(t);
                }
                function s(t, e) {
                    if (1 !== t.nodeType) return [];
                    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                    return e ? n[e] : n;
                }
                function a(t) {
                    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
                }
                function l(t) {
                    if (!t) return document.body;
                    switch (t.nodeName) {
                        case "HTML":
                        case "BODY":
                            return t.ownerDocument.body;
                        case "#document":
                            return t.body;
                    }
                    var e = s(t),
                        n = e.overflow,
                        i = e.overflowX,
                        o = e.overflowY;
                    return /(auto|scroll|overlay)/.test(n + o + i) ? t : l(a(t));
                }
                function c(t) {
                    return t && t.referenceNode ? t.referenceNode : t;
                }
                var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                    h = n && /MSIE 10/.test(navigator.userAgent);
                function f(t) {
                    return 11 === t ? u : 10 === t ? h : u || h;
                }
                function d(t) {
                    if (!t) return document.documentElement;
                    for (var e = f(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; ) n = (t = t.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? d(n) : n) : t ? t.ownerDocument.documentElement : document.documentElement;
                }
                function p(t) {
                    return null !== t.parentNode ? p(t.parentNode) : t;
                }
                function m(t, e) {
                    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? t : e,
                        o = n ? e : t,
                        r = document.createRange();
                    r.setStart(i, 0), r.setEnd(o, 0);
                    var s,
                        a,
                        l = r.commonAncestorContainer;
                    if ((t !== l && e !== l) || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || ("HTML" !== a && d(s.firstElementChild) !== s) ? d(l) : l;
                    var c = p(t);
                    return c.host ? m(c.host, e) : m(t, p(e).host);
                }
                function g(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = "top" === e ? "scrollTop" : "scrollLeft",
                        i = t.nodeName;
                    if ("BODY" === i || "HTML" === i) {
                        var o = t.ownerDocument.documentElement,
                            r = t.ownerDocument.scrollingElement || o;
                        return r[n];
                    }
                    return t[n];
                }
                function v(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = g(e, "top"),
                        o = g(e, "left"),
                        r = n ? -1 : 1;
                    return (t.top += i * r), (t.bottom += i * r), (t.left += o * r), (t.right += o * r), t;
                }
                function _(t, e) {
                    var n = "x" === e ? "Left" : "Top",
                        i = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
                }
                function b(t, e, n, i) {
                    return Math.max(
                        e["offset" + t],
                        e["scroll" + t],
                        n["client" + t],
                        n["offset" + t],
                        n["scroll" + t],
                        f(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0
                    );
                }
                function y(t) {
                    var e = t.body,
                        n = t.documentElement,
                        i = f(10) && getComputedStyle(n);
                    return { height: b("Height", e, n, i), width: b("Width", e, n, i) };
                }
                var w = function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    },
                    E = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    T = function (t, e, n) {
                        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
                    },
                    C =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                            }
                            return t;
                        };
                function S(t) {
                    return C({}, t, { right: t.left + t.width, bottom: t.top + t.height });
                }
                function D(t) {
                    var e = {};
                    try {
                        if (f(10)) {
                            e = t.getBoundingClientRect();
                            var n = g(t, "top"),
                                i = g(t, "left");
                            (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
                        } else e = t.getBoundingClientRect();
                    } catch (t) {}
                    var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
                        r = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
                        a = r.width || t.clientWidth || o.width,
                        l = r.height || t.clientHeight || o.height,
                        c = t.offsetWidth - a,
                        u = t.offsetHeight - l;
                    if (c || u) {
                        var h = s(t);
                        (c -= _(h, "x")), (u -= _(h, "y")), (o.width -= c), (o.height -= u);
                    }
                    return S(o);
                }
                function N(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = f(10),
                        o = "HTML" === e.nodeName,
                        r = D(t),
                        a = D(e),
                        c = l(t),
                        u = s(e),
                        h = parseFloat(u.borderTopWidth),
                        d = parseFloat(u.borderLeftWidth);
                    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
                    var p = S({ top: r.top - a.top - h, left: r.left - a.left - d, width: r.width, height: r.height });
                    if (((p.marginTop = 0), (p.marginLeft = 0), !i && o)) {
                        var m = parseFloat(u.marginTop),
                            g = parseFloat(u.marginLeft);
                        (p.top -= h - m), (p.bottom -= h - m), (p.left -= d - g), (p.right -= d - g), (p.marginTop = m), (p.marginLeft = g);
                    }
                    return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = v(p, e)), p;
                }
                function k(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.ownerDocument.documentElement,
                        i = N(t, n),
                        o = Math.max(n.clientWidth, window.innerWidth || 0),
                        r = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = e ? 0 : g(n),
                        a = e ? 0 : g(n, "left"),
                        l = { top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r };
                    return S(l);
                }
                function O(t) {
                    var e = t.nodeName;
                    if ("BODY" === e || "HTML" === e) return !1;
                    if ("fixed" === s(t, "position")) return !0;
                    var n = a(t);
                    return !!n && O(n);
                }
                function A(t) {
                    if (!t || !t.parentElement || f()) return document.documentElement;
                    for (var e = t.parentElement; e && "none" === s(e, "transform"); ) e = e.parentElement;
                    return e || document.documentElement;
                }
                function I(t, e, n, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        r = { top: 0, left: 0 },
                        s = o ? A(t) : m(t, c(e));
                    if ("viewport" === i) r = k(s, o);
                    else {
                        var u = void 0;
                        "scrollParent" === i ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : (u = "window" === i ? t.ownerDocument.documentElement : i);
                        var h = N(u, s, o);
                        if ("HTML" !== u.nodeName || O(s)) r = h;
                        else {
                            var f = y(t.ownerDocument),
                                d = f.height,
                                p = f.width;
                            (r.top += h.top - h.marginTop), (r.bottom = d + h.top), (r.left += h.left - h.marginLeft), (r.right = p + h.left);
                        }
                    }
                    var g = "number" == typeof (n = n || 0);
                    return (r.left += g ? n : n.left || 0), (r.top += g ? n : n.top || 0), (r.right -= g ? n : n.right || 0), (r.bottom -= g ? n : n.bottom || 0), r;
                }
                function x(t) {
                    return t.width * t.height;
                }
                function j(t, e, n, i, o) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === t.indexOf("auto")) return t;
                    var s = I(n, i, r, o),
                        a = {
                            top: { width: s.width, height: e.top - s.top },
                            right: { width: s.right - e.right, height: s.height },
                            bottom: { width: s.width, height: s.bottom - e.bottom },
                            left: { width: e.left - s.left, height: s.height },
                        },
                        l = Object.keys(a)
                            .map(function (t) {
                                return C({ key: t }, a[t], { area: x(a[t]) });
                            })
                            .sort(function (t, e) {
                                return e.area - t.area;
                            }),
                        c = l.filter(function (t) {
                            var e = t.width,
                                i = t.height;
                            return e >= n.clientWidth && i >= n.clientHeight;
                        }),
                        u = c.length > 0 ? c[0].key : l[0].key,
                        h = t.split("-")[1];
                    return u + (h ? "-" + h : "");
                }
                function L(t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = i ? A(e) : m(e, c(n));
                    return N(n, o, i);
                }
                function P(t) {
                    var e = t.ownerDocument.defaultView.getComputedStyle(t),
                        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
                }
                function F(t) {
                    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
                    return t.replace(/left|right|bottom|top/g, function (t) {
                        return e[t];
                    });
                }
                function R(t, e, n) {
                    n = n.split("-")[0];
                    var i = P(t),
                        o = { width: i.width, height: i.height },
                        r = -1 !== ["right", "left"].indexOf(n),
                        s = r ? "top" : "left",
                        a = r ? "left" : "top",
                        l = r ? "height" : "width",
                        c = r ? "width" : "height";
                    return (o[s] = e[s] + e[l] / 2 - i[l] / 2), (o[a] = n === a ? e[a] - i[c] : e[F(a)]), o;
                }
                function M(t, e) {
                    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
                }
                function B(t, e, n) {
                    return (
                        (void 0 === n
                            ? t
                            : t.slice(
                                  0,
                                  (function (t, e, n) {
                                      if (Array.prototype.findIndex)
                                          return t.findIndex(function (t) {
                                              return t[e] === n;
                                          });
                                      var i = M(t, function (t) {
                                          return t[e] === n;
                                      });
                                      return t.indexOf(i);
                                  })(t, "name", n)
                              )
                        ).forEach(function (t) {
                            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                            var n = t.function || t.fn;
                            t.enabled && r(n) && ((e.offsets.popper = S(e.offsets.popper)), (e.offsets.reference = S(e.offsets.reference)), (e = n(e, t)));
                        }),
                        e
                    );
                }
                function H() {
                    if (!this.state.isDestroyed) {
                        var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                        (t.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed)),
                            (t.placement = j(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                            (t.originalPlacement = t.placement),
                            (t.positionFixed = this.options.positionFixed),
                            (t.offsets.popper = R(this.popper, t.offsets.reference, t.placement)),
                            (t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                            (t = B(this.modifiers, t)),
                            this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
                    }
                }
                function q(t, e) {
                    return t.some(function (t) {
                        var n = t.name;
                        return t.enabled && n === e;
                    });
                }
                function Q(t) {
                    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                        var o = e[i],
                            r = o ? "" + o + n : t;
                        if (void 0 !== document.body.style[r]) return r;
                    }
                    return null;
                }
                function W() {
                    return (
                        (this.state.isDestroyed = !0),
                        q(this.modifiers, "applyStyle") &&
                            (this.popper.removeAttribute("x-placement"),
                            (this.popper.style.position = ""),
                            (this.popper.style.top = ""),
                            (this.popper.style.left = ""),
                            (this.popper.style.right = ""),
                            (this.popper.style.bottom = ""),
                            (this.popper.style.willChange = ""),
                            (this.popper.style[Q("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                        this
                    );
                }
                function U(t) {
                    var e = t.ownerDocument;
                    return e ? e.defaultView : window;
                }
                function V(t, e, n, i) {
                    (n.updateBound = i), U(t).addEventListener("resize", n.updateBound, { passive: !0 });
                    var o = l(t);
                    return (
                        (function t(e, n, i, o) {
                            var r = "BODY" === e.nodeName,
                                s = r ? e.ownerDocument.defaultView : e;
                            s.addEventListener(n, i, { passive: !0 }), r || t(l(s.parentNode), n, i, o), o.push(s);
                        })(o, "scroll", n.updateBound, n.scrollParents),
                        (n.scrollElement = o),
                        (n.eventsEnabled = !0),
                        n
                    );
                }
                function Y() {
                    this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate));
                }
                function z() {
                    var t, e;
                    this.state.eventsEnabled &&
                        (cancelAnimationFrame(this.scheduleUpdate),
                        (this.state =
                            ((t = this.reference),
                            (e = this.state),
                            U(t).removeEventListener("resize", e.updateBound),
                            e.scrollParents.forEach(function (t) {
                                t.removeEventListener("scroll", e.updateBound);
                            }),
                            (e.updateBound = null),
                            (e.scrollParents = []),
                            (e.scrollElement = null),
                            (e.eventsEnabled = !1),
                            e)));
                }
                function X(t) {
                    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
                }
                function K(t, e) {
                    Object.keys(e).forEach(function (n) {
                        var i = "";
                        -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(e[n]) && (i = "px"), (t.style[n] = e[n] + i);
                    });
                }
                var $ = n && /Firefox/i.test(navigator.userAgent);
                function G(t, e, n) {
                    var i = M(t, function (t) {
                            return t.name === e;
                        }),
                        o =
                            !!i &&
                            t.some(function (t) {
                                return t.name === n && t.enabled && t.order < i.order;
                            });
                    if (!o) {
                        var r = "`" + e + "`",
                            s = "`" + n + "`";
                        console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
                    }
                    return o;
                }
                var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    Z = J.slice(3);
                function tt(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Z.indexOf(t),
                        i = Z.slice(n + 1).concat(Z.slice(0, n));
                    return e ? i.reverse() : i;
                }
                var et = "flip",
                    nt = "clockwise",
                    it = "counterclockwise";
                function ot(t, e, n, i) {
                    var o = [0, 0],
                        r = -1 !== ["right", "left"].indexOf(i),
                        s = t.split(/(\+|\-)/).map(function (t) {
                            return t.trim();
                        }),
                        a = s.indexOf(
                            M(s, function (t) {
                                return -1 !== t.search(/,|\s/);
                            })
                        );
                    s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                    var l = /\s*,\s*|\s+/,
                        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                    return (
                        (c = c.map(function (t, i) {
                            var o = (1 === i ? !r : r) ? "height" : "width",
                                s = !1;
                            return t
                                .reduce(function (t, e) {
                                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? ((t[t.length - 1] = e), (s = !0), t) : s ? ((t[t.length - 1] += e), (s = !1), t) : t.concat(e);
                                }, [])
                                .map(function (t) {
                                    return (function (t, e, n, i) {
                                        var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            r = +o[1],
                                            s = o[2];
                                        if (!r) return t;
                                        if (0 === s.indexOf("%")) {
                                            var a = void 0;
                                            switch (s) {
                                                case "%p":
                                                    a = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    a = i;
                                            }
                                            return (S(a)[e] / 100) * r;
                                        }
                                        if ("vh" === s || "vw" === s) {
                                            return (("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r;
                                        }
                                        return r;
                                    })(t, o, e, n);
                                });
                        })).forEach(function (t, e) {
                            t.forEach(function (n, i) {
                                X(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                            });
                        }),
                        o
                    );
                }
                var rt = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function () {},
                        onUpdate: function () {},
                        modifiers: {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function (t) {
                                    var e = t.placement,
                                        n = e.split("-")[0],
                                        i = e.split("-")[1];
                                    if (i) {
                                        var o = t.offsets,
                                            r = o.reference,
                                            s = o.popper,
                                            a = -1 !== ["bottom", "top"].indexOf(n),
                                            l = a ? "left" : "top",
                                            c = a ? "width" : "height",
                                            u = { start: T({}, l, r[l]), end: T({}, l, r[l] + r[c] - s[c]) };
                                        t.offsets.popper = C({}, s, u[i]);
                                    }
                                    return t;
                                },
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n = e.offset,
                                        i = t.placement,
                                        o = t.offsets,
                                        r = o.popper,
                                        s = o.reference,
                                        a = i.split("-")[0],
                                        l = void 0;
                                    return (
                                        (l = X(+n) ? [+n, 0] : ot(n, r, s, a)),
                                        "left" === a
                                            ? ((r.top += l[0]), (r.left -= l[1]))
                                            : "right" === a
                                            ? ((r.top += l[0]), (r.left += l[1]))
                                            : "top" === a
                                            ? ((r.left += l[0]), (r.top -= l[1]))
                                            : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                                        (t.popper = r),
                                        t
                                    );
                                },
                                offset: 0,
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n = e.boundariesElement || d(t.instance.popper);
                                    t.instance.reference === n && (n = d(n));
                                    var i = Q("transform"),
                                        o = t.instance.popper.style,
                                        r = o.top,
                                        s = o.left,
                                        a = o[i];
                                    (o.top = ""), (o.left = ""), (o[i] = "");
                                    var l = I(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                    (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
                                    var c = e.priority,
                                        u = t.offsets.popper,
                                        h = {
                                            primary: function (t) {
                                                var n = u[t];
                                                return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), T({}, t, n);
                                            },
                                            secondary: function (t) {
                                                var n = "right" === t ? "left" : "top",
                                                    i = u[n];
                                                return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), T({}, n, i);
                                            },
                                        };
                                    return (
                                        c.forEach(function (t) {
                                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                            u = C({}, u, h[e](t));
                                        }),
                                        (t.offsets.popper = u),
                                        t
                                    );
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent",
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function (t) {
                                    var e = t.offsets,
                                        n = e.popper,
                                        i = e.reference,
                                        o = t.placement.split("-")[0],
                                        r = Math.floor,
                                        s = -1 !== ["top", "bottom"].indexOf(o),
                                        a = s ? "right" : "bottom",
                                        l = s ? "left" : "top",
                                        c = s ? "width" : "height";
                                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t;
                                },
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n;
                                    if (!G(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                    var i = e.element;
                                    if ("string" == typeof i) {
                                        if (!(i = t.instance.popper.querySelector(i))) return t;
                                    } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                                    var o = t.placement.split("-")[0],
                                        r = t.offsets,
                                        a = r.popper,
                                        l = r.reference,
                                        c = -1 !== ["left", "right"].indexOf(o),
                                        u = c ? "height" : "width",
                                        h = c ? "Top" : "Left",
                                        f = h.toLowerCase(),
                                        d = c ? "left" : "top",
                                        p = c ? "bottom" : "right",
                                        m = P(i)[u];
                                    l[p] - m < a[f] && (t.offsets.popper[f] -= a[f] - (l[p] - m)), l[f] + m > a[p] && (t.offsets.popper[f] += l[f] + m - a[p]), (t.offsets.popper = S(t.offsets.popper));
                                    var g = l[f] + l[u] / 2 - m / 2,
                                        v = s(t.instance.popper),
                                        _ = parseFloat(v["margin" + h]),
                                        b = parseFloat(v["border" + h + "Width"]),
                                        y = g - t.offsets.popper[f] - _ - b;
                                    return (y = Math.max(Math.min(a[u] - m, y), 0)), (t.arrowElement = i), (t.offsets.arrow = (T((n = {}), f, Math.round(y)), T(n, d, ""), n)), t;
                                },
                                element: "[x-arrow]",
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function (t, e) {
                                    if (q(t.instance.modifiers, "inner")) return t;
                                    if (t.flipped && t.placement === t.originalPlacement) return t;
                                    var n = I(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                        i = t.placement.split("-")[0],
                                        o = F(i),
                                        r = t.placement.split("-")[1] || "",
                                        s = [];
                                    switch (e.behavior) {
                                        case et:
                                            s = [i, o];
                                            break;
                                        case nt:
                                            s = tt(i);
                                            break;
                                        case it:
                                            s = tt(i, !0);
                                            break;
                                        default:
                                            s = e.behavior;
                                    }
                                    return (
                                        s.forEach(function (a, l) {
                                            if (i !== a || s.length === l + 1) return t;
                                            (i = t.placement.split("-")[0]), (o = F(i));
                                            var c = t.offsets.popper,
                                                u = t.offsets.reference,
                                                h = Math.floor,
                                                f = ("left" === i && h(c.right) > h(u.left)) || ("right" === i && h(c.left) < h(u.right)) || ("top" === i && h(c.bottom) > h(u.top)) || ("bottom" === i && h(c.top) < h(u.bottom)),
                                                d = h(c.left) < h(n.left),
                                                p = h(c.right) > h(n.right),
                                                m = h(c.top) < h(n.top),
                                                g = h(c.bottom) > h(n.bottom),
                                                v = ("left" === i && d) || ("right" === i && p) || ("top" === i && m) || ("bottom" === i && g),
                                                _ = -1 !== ["top", "bottom"].indexOf(i),
                                                b = !!e.flipVariations && ((_ && "start" === r && d) || (_ && "end" === r && p) || (!_ && "start" === r && m) || (!_ && "end" === r && g)),
                                                y = !!e.flipVariationsByContent && ((_ && "start" === r && p) || (_ && "end" === r && d) || (!_ && "start" === r && g) || (!_ && "end" === r && m)),
                                                w = b || y;
                                            (f || v || w) &&
                                                ((t.flipped = !0),
                                                (f || v) && (i = s[l + 1]),
                                                w &&
                                                    (r = (function (t) {
                                                        return "end" === t ? "start" : "start" === t ? "end" : t;
                                                    })(r)),
                                                (t.placement = i + (r ? "-" + r : "")),
                                                (t.offsets.popper = C({}, t.offsets.popper, R(t.instance.popper, t.offsets.reference, t.placement))),
                                                (t = B(t.instance.modifiers, t, "flip")));
                                        }),
                                        t
                                    );
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport",
                                flipVariations: !1,
                                flipVariationsByContent: !1,
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function (t) {
                                    var e = t.placement,
                                        n = e.split("-")[0],
                                        i = t.offsets,
                                        o = i.popper,
                                        r = i.reference,
                                        s = -1 !== ["left", "right"].indexOf(n),
                                        a = -1 === ["top", "left"].indexOf(n);
                                    return (o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0)), (t.placement = F(e)), (t.offsets.popper = S(o)), t;
                                },
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function (t) {
                                    if (!G(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                    var e = t.offsets.reference,
                                        n = M(t.instance.modifiers, function (t) {
                                            return "preventOverflow" === t.name;
                                        }).boundaries;
                                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                        if (!0 === t.hide) return t;
                                        (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                                    } else {
                                        if (!1 === t.hide) return t;
                                        (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                                    }
                                    return t;
                                },
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function (t, e) {
                                    var n = e.x,
                                        i = e.y,
                                        o = t.offsets.popper,
                                        r = M(t.instance.modifiers, function (t) {
                                            return "applyStyle" === t.name;
                                        }).gpuAcceleration;
                                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                    var s = void 0 !== r ? r : e.gpuAcceleration,
                                        a = d(t.instance.popper),
                                        l = D(a),
                                        c = { position: o.position },
                                        u = (function (t, e) {
                                            var n = t.offsets,
                                                i = n.popper,
                                                o = n.reference,
                                                r = Math.round,
                                                s = Math.floor,
                                                a = function (t) {
                                                    return t;
                                                },
                                                l = r(o.width),
                                                c = r(i.width),
                                                u = -1 !== ["left", "right"].indexOf(t.placement),
                                                h = -1 !== t.placement.indexOf("-"),
                                                f = e ? (u || h || l % 2 == c % 2 ? r : s) : a,
                                                d = e ? r : a;
                                            return { left: f(l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left), top: d(i.top), bottom: d(i.bottom), right: f(i.right) };
                                        })(t, window.devicePixelRatio < 2 || !$),
                                        h = "bottom" === n ? "top" : "bottom",
                                        f = "right" === i ? "left" : "right",
                                        p = Q("transform"),
                                        m = void 0,
                                        g = void 0;
                                    if (
                                        ((g = "bottom" === h ? ("HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom) : u.top),
                                        (m = "right" === f ? ("HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right) : u.left),
                                        s && p)
                                    )
                                        (c[p] = "translate3d(" + m + "px, " + g + "px, 0)"), (c[h] = 0), (c[f] = 0), (c.willChange = "transform");
                                    else {
                                        var v = "bottom" === h ? -1 : 1,
                                            _ = "right" === f ? -1 : 1;
                                        (c[h] = g * v), (c[f] = m * _), (c.willChange = h + ", " + f);
                                    }
                                    var b = { "x-placement": t.placement };
                                    return (t.attributes = C({}, b, t.attributes)), (t.styles = C({}, c, t.styles)), (t.arrowStyles = C({}, t.offsets.arrow, t.arrowStyles)), t;
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right",
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function (t) {
                                    var e, n;
                                    return (
                                        K(t.instance.popper, t.styles),
                                        (e = t.instance.popper),
                                        (n = t.attributes),
                                        Object.keys(n).forEach(function (t) {
                                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
                                        }),
                                        t.arrowElement && Object.keys(t.arrowStyles).length && K(t.arrowElement, t.arrowStyles),
                                        t
                                    );
                                },
                                onLoad: function (t, e, n, i, o) {
                                    var r = L(o, e, t, n.positionFixed),
                                        s = j(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                    return e.setAttribute("x-placement", s), K(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                                },
                                gpuAcceleration: void 0,
                            },
                        },
                    },
                    st = (function () {
                        function t(e, n) {
                            var i = this,
                                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            w(this, t),
                                (this.scheduleUpdate = function () {
                                    return requestAnimationFrame(i.update);
                                }),
                                (this.update = o(this.update.bind(this))),
                                (this.options = C({}, t.Defaults, s)),
                                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                                (this.reference = e && e.jquery ? e[0] : e),
                                (this.popper = n && n.jquery ? n[0] : n),
                                (this.options.modifiers = {}),
                                Object.keys(C({}, t.Defaults.modifiers, s.modifiers)).forEach(function (e) {
                                    i.options.modifiers[e] = C({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {});
                                }),
                                (this.modifiers = Object.keys(this.options.modifiers)
                                    .map(function (t) {
                                        return C({ name: t }, i.options.modifiers[t]);
                                    })
                                    .sort(function (t, e) {
                                        return t.order - e.order;
                                    })),
                                this.modifiers.forEach(function (t) {
                                    t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                                }),
                                this.update();
                            var a = this.options.eventsEnabled;
                            a && this.enableEventListeners(), (this.state.eventsEnabled = a);
                        }
                        return (
                            E(t, [
                                {
                                    key: "update",
                                    value: function () {
                                        return H.call(this);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        return W.call(this);
                                    },
                                },
                                {
                                    key: "enableEventListeners",
                                    value: function () {
                                        return Y.call(this);
                                    },
                                },
                                {
                                    key: "disableEventListeners",
                                    value: function () {
                                        return z.call(this);
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                (st.Utils = ("undefined" != typeof window ? window : t).PopperUtils), (st.placements = J), (st.Defaults = rt), (e.default = st);
            }.call(this, n(4));
    },
    function (t, e, n) {
        t.exports = n(5);
    },
    function (t, e, n) {
        /*!
         * Bootstrap v4.5.0 (https://getbootstrap.com/)
         * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
         */
        !(function (t, e, n) {
            "use strict";
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            function o(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t;
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e &&
                        (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, i);
                }
                return n;
            }
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? s(Object(n), !0).forEach(function (e) {
                              r(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : s(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            function l(t) {
                var n = this,
                    i = !1;
                return (
                    e(this).one(c.TRANSITION_END, function () {
                        i = !0;
                    }),
                    setTimeout(function () {
                        i || c.triggerTransitionEnd(n);
                    }, t),
                    this
                );
            }
            (e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e), (n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n);
            var c = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    do {
                        t += ~~(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                },
                getSelectorFromElement: function (t) {
                    var e = t.getAttribute("data-target");
                    if (!e || "#" === e) {
                        var n = t.getAttribute("href");
                        e = n && "#" !== n ? n.trim() : "";
                    }
                    try {
                        return document.querySelector(e) ? e : null;
                    } catch (t) {
                        return null;
                    }
                },
                getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration"),
                        i = e(t).css("transition-delay"),
                        o = parseFloat(n),
                        r = parseFloat(i);
                    return o || r ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
                },
                reflow: function (t) {
                    return t.offsetHeight;
                },
                triggerTransitionEnd: function (t) {
                    e(t).trigger("transitionend");
                },
                supportsTransitionEnd: function () {
                    return Boolean("transitionend");
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType;
                },
                typeCheckConfig: function (t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var o = n[i],
                                r = e[i],
                                s =
                                    r && c.isElement(r)
                                        ? "element"
                                        : null == (a = r)
                                        ? "" + a
                                        : {}.toString
                                              .call(a)
                                              .match(/\s([a-z]+)/i)[1]
                                              .toLowerCase();
                            if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                        }
                    var a;
                },
                findShadowRoot: function (t) {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof t.getRootNode) {
                        var e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null;
                    }
                    return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null;
                },
                jQueryDetection: function () {
                    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var t = e.fn.jquery.split(" ")[0].split(".");
                    if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
                },
            };
            c.jQueryDetection(),
                (e.fn.emulateTransitionEnd = l),
                (e.event.special[c.TRANSITION_END] = {
                    bindType: "transitionend",
                    delegateType: "transitionend",
                    handle: function (t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                    },
                });
            var u = "alert",
                h = e.fn[u],
                f = (function () {
                    function t(t) {
                        this._element = t;
                    }
                    var n = t.prototype;
                    return (
                        (n.close = function (t) {
                            var e = this._element;
                            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.alert"), (this._element = null);
                        }),
                        (n._getRootElement = function (t) {
                            var n = c.getSelectorFromElement(t),
                                i = !1;
                            return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i;
                        }),
                        (n._triggerCloseEvent = function (t) {
                            var n = e.Event("close.bs.alert");
                            return e(t).trigger(n), n;
                        }),
                        (n._removeElement = function (t) {
                            var n = this;
                            if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
                                var i = c.getTransitionDurationFromElement(t);
                                e(t)
                                    .one(c.TRANSITION_END, function (e) {
                                        return n._destroyElement(t, e);
                                    })
                                    .emulateTransitionEnd(i);
                            } else this._destroyElement(t);
                        }),
                        (n._destroyElement = function (t) {
                            e(t).detach().trigger("closed.bs.alert").remove();
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.alert");
                                o || ((o = new t(this)), i.data("bs.alert", o)), "close" === n && o[n](this);
                            });
                        }),
                        (t._handleDismiss = function (t) {
                            return function (e) {
                                e && e.preventDefault(), t.close(this);
                            };
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f())),
                (e.fn[u] = f._jQueryInterface),
                (e.fn[u].Constructor = f),
                (e.fn[u].noConflict = function () {
                    return (e.fn[u] = h), f._jQueryInterface;
                });
            var d = e.fn.button,
                p = (function () {
                    function t(t) {
                        this._element = t;
                    }
                    var n = t.prototype;
                    return (
                        (n.toggle = function () {
                            var t = !0,
                                n = !0,
                                i = e(this._element).closest('[data-toggle="buttons"]')[0];
                            if (i) {
                                var o = this._element.querySelector('input:not([type="hidden"])');
                                if (o) {
                                    if ("radio" === o.type)
                                        if (o.checked && this._element.classList.contains("active")) t = !1;
                                        else {
                                            var r = i.querySelector(".active");
                                            r && e(r).removeClass("active");
                                        }
                                    t && (("checkbox" !== o.type && "radio" !== o.type) || (o.checked = !this._element.classList.contains("active")), e(o).trigger("change")), o.focus(), (n = !1);
                                }
                            }
                            this._element.hasAttribute("disabled") ||
                                this._element.classList.contains("disabled") ||
                                (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"));
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.button"), (this._element = null);
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.button");
                                i || ((i = new t(this)), e(this).data("bs.button", i)), "toggle" === n && i[n]();
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                    var n = t.target,
                        i = n;
                    if ((e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))) t.preventDefault();
                    else {
                        var o = n.querySelector('input:not([type="hidden"])');
                        if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
                        "LABEL" === i.tagName && o && "checkbox" === o.type && t.preventDefault(), p._jQueryInterface.call(e(n), "toggle");
                    }
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                    var n = e(t.target).closest(".btn")[0];
                    e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
                }),
                e(window).on("load.bs.button.data-api", function () {
                    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
                        var i = t[e],
                            o = i.querySelector('input:not([type="hidden"])');
                        o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
                    }
                    for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
                        var a = t[r];
                        "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
                    }
                }),
                (e.fn.button = p._jQueryInterface),
                (e.fn.button.Constructor = p),
                (e.fn.button.noConflict = function () {
                    return (e.fn.button = d), p._jQueryInterface;
                });
            var m = "carousel",
                g = ".bs.carousel",
                v = e.fn[m],
                _ = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
                b = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
                y = { TOUCH: "touch", PEN: "pen" },
                w = (function () {
                    function t(t, e) {
                        (this._items = null),
                            (this._interval = null),
                            (this._activeElement = null),
                            (this._isPaused = !1),
                            (this._isSliding = !1),
                            (this.touchTimeout = null),
                            (this.touchStartX = 0),
                            (this.touchDeltaX = 0),
                            (this._config = this._getConfig(e)),
                            (this._element = t),
                            (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                            (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                            this._addEventListeners();
                    }
                    var n = t.prototype;
                    return (
                        (n.next = function () {
                            this._isSliding || this._slide("next");
                        }),
                        (n.nextWhenVisible = function () {
                            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
                        }),
                        (n.prev = function () {
                            this._isSliding || this._slide("prev");
                        }),
                        (n.pause = function (t) {
                            t || (this._isPaused = !0),
                                this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
                                clearInterval(this._interval),
                                (this._interval = null);
                        }),
                        (n.cycle = function (t) {
                            t || (this._isPaused = !1),
                                this._interval && (clearInterval(this._interval), (this._interval = null)),
                                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                        }),
                        (n.to = function (t) {
                            var n = this;
                            this._activeElement = this._element.querySelector(".active.carousel-item");
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding)
                                    e(this._element).one("slid.bs.carousel", function () {
                                        return n.to(t);
                                    });
                                else {
                                    if (i === t) return this.pause(), void this.cycle();
                                    var o = t > i ? "next" : "prev";
                                    this._slide(o, this._items[t]);
                                }
                        }),
                        (n.dispose = function () {
                            e(this._element).off(g),
                                e.removeData(this._element, "bs.carousel"),
                                (this._items = null),
                                (this._config = null),
                                (this._element = null),
                                (this._interval = null),
                                (this._isPaused = null),
                                (this._isSliding = null),
                                (this._activeElement = null),
                                (this._indicatorsElement = null);
                        }),
                        (n._getConfig = function (t) {
                            return (t = a(a({}, _), t)), c.typeCheckConfig(m, t, b), t;
                        }),
                        (n._handleSwipe = function () {
                            var t = Math.abs(this.touchDeltaX);
                            if (!(t <= 40)) {
                                var e = t / this.touchDeltaX;
                                (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
                            }
                        }),
                        (n._addEventListeners = function () {
                            var t = this;
                            this._config.keyboard &&
                                e(this._element).on("keydown.bs.carousel", function (e) {
                                    return t._keydown(e);
                                }),
                                "hover" === this._config.pause &&
                                    e(this._element)
                                        .on("mouseenter.bs.carousel", function (e) {
                                            return t.pause(e);
                                        })
                                        .on("mouseleave.bs.carousel", function (e) {
                                            return t.cycle(e);
                                        }),
                                this._config.touch && this._addTouchEventListeners();
                        }),
                        (n._addTouchEventListeners = function () {
                            var t = this;
                            if (this._touchSupported) {
                                var n = function (e) {
                                        t._pointerEvent && y[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                                    },
                                    i = function (e) {
                                        t._pointerEvent && y[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                            t._handleSwipe(),
                                            "hover" === t._config.pause &&
                                                (t.pause(),
                                                t.touchTimeout && clearTimeout(t.touchTimeout),
                                                (t.touchTimeout = setTimeout(function (e) {
                                                    return t.cycle(e);
                                                }, 500 + t._config.interval)));
                                    };
                                e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
                                    return t.preventDefault();
                                }),
                                    this._pointerEvent
                                        ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                                              return n(t);
                                          }),
                                          e(this._element).on("pointerup.bs.carousel", function (t) {
                                              return i(t);
                                          }),
                                          this._element.classList.add("pointer-event"))
                                        : (e(this._element).on("touchstart.bs.carousel", function (t) {
                                              return n(t);
                                          }),
                                          e(this._element).on("touchmove.bs.carousel", function (e) {
                                              return (function (e) {
                                                  e.originalEvent.touches && e.originalEvent.touches.length > 1 ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
                                              })(e);
                                          }),
                                          e(this._element).on("touchend.bs.carousel", function (t) {
                                              return i(t);
                                          }));
                            }
                        }),
                        (n._keydown = function (t) {
                            if (!/input|textarea/i.test(t.target.tagName))
                                switch (t.which) {
                                    case 37:
                                        t.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        t.preventDefault(), this.next();
                                }
                        }),
                        (n._getItemIndex = function (t) {
                            return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(t);
                        }),
                        (n._getItemByDirection = function (t, e) {
                            var n = "next" === t,
                                i = "prev" === t,
                                o = this._getItemIndex(e),
                                r = this._items.length - 1;
                            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                            var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                        }),
                        (n._triggerSlideEvent = function (t, n) {
                            var i = this._getItemIndex(t),
                                o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                                r = e.Event("slide.bs.carousel", { relatedTarget: t, direction: n, from: o, to: i });
                            return e(this._element).trigger(r), r;
                        }),
                        (n._setActiveIndicatorElement = function (t) {
                            if (this._indicatorsElement) {
                                var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                                e(n).removeClass("active");
                                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                                i && e(i).addClass("active");
                            }
                        }),
                        (n._slide = function (t, n) {
                            var i,
                                o,
                                r,
                                s = this,
                                a = this._element.querySelector(".active.carousel-item"),
                                l = this._getItemIndex(a),
                                u = n || (a && this._getItemByDirection(t, a)),
                                h = this._getItemIndex(u),
                                f = Boolean(this._interval);
                            if (("next" === t ? ((i = "carousel-item-left"), (o = "carousel-item-next"), (r = "left")) : ((i = "carousel-item-right"), (o = "carousel-item-prev"), (r = "right")), u && e(u).hasClass("active")))
                                this._isSliding = !1;
                            else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                                (this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(u);
                                var d = e.Event("slid.bs.carousel", { relatedTarget: u, direction: r, from: l, to: h });
                                if (e(this._element).hasClass("slide")) {
                                    e(u).addClass(o), c.reflow(u), e(a).addClass(i), e(u).addClass(i);
                                    var p = parseInt(u.getAttribute("data-interval"), 10);
                                    p ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = p)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                                    var m = c.getTransitionDurationFromElement(a);
                                    e(a)
                                        .one(c.TRANSITION_END, function () {
                                            e(u)
                                                .removeClass(i + " " + o)
                                                .addClass("active"),
                                                e(a).removeClass("active " + o + " " + i),
                                                (s._isSliding = !1),
                                                setTimeout(function () {
                                                    return e(s._element).trigger(d);
                                                }, 0);
                                        })
                                        .emulateTransitionEnd(m);
                                } else e(a).removeClass("active"), e(u).addClass("active"), (this._isSliding = !1), e(this._element).trigger(d);
                                f && this.cycle();
                            }
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.carousel"),
                                    o = a(a({}, _), e(this).data());
                                "object" == typeof n && (o = a(a({}, o), n));
                                var r = "string" == typeof n ? n : o.slide;
                                if ((i || ((i = new t(this, o)), e(this).data("bs.carousel", i)), "number" == typeof n)) i.to(n);
                                else if ("string" == typeof r) {
                                    if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                                    i[r]();
                                } else o.interval && o.ride && (i.pause(), i.cycle());
                            });
                        }),
                        (t._dataApiClickHandler = function (n) {
                            var i = c.getSelectorFromElement(this);
                            if (i) {
                                var o = e(i)[0];
                                if (o && e(o).hasClass("carousel")) {
                                    var r = a(a({}, e(o).data()), e(this).data()),
                                        s = this.getAttribute("data-slide-to");
                                    s && (r.interval = !1), t._jQueryInterface.call(e(o), r), s && e(o).data("bs.carousel").to(s), n.preventDefault();
                                }
                            }
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return _;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler),
                e(window).on("load.bs.carousel.data-api", function () {
                    for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
                        var o = e(t[n]);
                        w._jQueryInterface.call(o, o.data());
                    }
                }),
                (e.fn[m] = w._jQueryInterface),
                (e.fn[m].Constructor = w),
                (e.fn[m].noConflict = function () {
                    return (e.fn[m] = v), w._jQueryInterface;
                });
            var E = "collapse",
                T = e.fn[E],
                C = { toggle: !0, parent: "" },
                S = { toggle: "boolean", parent: "(string|element)" },
                D = (function () {
                    function t(t, e) {
                        (this._isTransitioning = !1),
                            (this._element = t),
                            (this._config = this._getConfig(e)),
                            (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                        for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                            var r = n[i],
                                s = c.getSelectorFromElement(r),
                                a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                                    return e === t;
                                });
                            null !== s && a.length > 0 && ((this._selector = s), this._triggerArray.push(r));
                        }
                        (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                    }
                    var n = t.prototype;
                    return (
                        (n.toggle = function () {
                            e(this._element).hasClass("show") ? this.hide() : this.show();
                        }),
                        (n.show = function () {
                            var n,
                                i,
                                o = this;
                            if (
                                !(
                                    this._isTransitioning ||
                                    e(this._element).hasClass("show") ||
                                    (this._parent &&
                                        0 ===
                                            (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
                                                return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
                                            })).length &&
                                        (n = null),
                                    n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning)
                                )
                            ) {
                                var r = e.Event("show.bs.collapse");
                                if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                                    n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                                    var s = this._getDimension();
                                    e(this._element).removeClass("collapse").addClass("collapsing"),
                                        (this._element.style[s] = 0),
                                        this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                        this.setTransitioning(!0);
                                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                        l = c.getTransitionDurationFromElement(this._element);
                                    e(this._element)
                                        .one(c.TRANSITION_END, function () {
                                            e(o._element).removeClass("collapsing").addClass("collapse show"), (o._element.style[s] = ""), o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse");
                                        })
                                        .emulateTransitionEnd(l),
                                        (this._element.style[s] = this._element[a] + "px");
                                }
                            }
                        }),
                        (n.hide = function () {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass("show")) {
                                var n = e.Event("hide.bs.collapse");
                                if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                                    var i = this._getDimension();
                                    (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), c.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                                    var o = this._triggerArray.length;
                                    if (o > 0)
                                        for (var r = 0; r < o; r++) {
                                            var s = this._triggerArray[r],
                                                a = c.getSelectorFromElement(s);
                                            null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass("show") || e(s).addClass("collapsed").attr("aria-expanded", !1));
                                        }
                                    this.setTransitioning(!0), (this._element.style[i] = "");
                                    var l = c.getTransitionDurationFromElement(this._element);
                                    e(this._element)
                                        .one(c.TRANSITION_END, function () {
                                            t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                                        })
                                        .emulateTransitionEnd(l);
                                }
                            }
                        }),
                        (n.setTransitioning = function (t) {
                            this._isTransitioning = t;
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                        }),
                        (n._getConfig = function (t) {
                            return ((t = a(a({}, C), t)).toggle = Boolean(t.toggle)), c.typeCheckConfig(E, t, S), t;
                        }),
                        (n._getDimension = function () {
                            return e(this._element).hasClass("width") ? "width" : "height";
                        }),
                        (n._getParent = function () {
                            var n,
                                i = this;
                            c.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent));
                            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                r = [].slice.call(n.querySelectorAll(o));
                            return (
                                e(r).each(function (e, n) {
                                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                                }),
                                n
                            );
                        }),
                        (n._addAriaAndCollapsedClass = function (t, n) {
                            var i = e(t).hasClass("show");
                            n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
                        }),
                        (t._getTargetFromElement = function (t) {
                            var e = c.getSelectorFromElement(t);
                            return e ? document.querySelector(e) : null;
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.collapse"),
                                    r = a(a(a({}, C), i.data()), "object" == typeof n && n ? n : {});
                                if ((!o && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), o || ((o = new t(this, r)), i.data("bs.collapse", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return C;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = e(this),
                    i = c.getSelectorFromElement(this),
                    o = [].slice.call(document.querySelectorAll(i));
                e(o).each(function () {
                    var t = e(this),
                        i = t.data("bs.collapse") ? "toggle" : n.data();
                    D._jQueryInterface.call(t, i);
                });
            }),
                (e.fn[E] = D._jQueryInterface),
                (e.fn[E].Constructor = D),
                (e.fn[E].noConflict = function () {
                    return (e.fn[E] = T), D._jQueryInterface;
                });
            var N = "dropdown",
                k = e.fn[N],
                O = new RegExp("38|40|27"),
                A = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
                I = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
                x = (function () {
                    function t(t, e) {
                        (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                    }
                    var i = t.prototype;
                    return (
                        (i.toggle = function () {
                            if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                                var n = e(this._menu).hasClass("show");
                                t._clearMenus(), n || this.show(!0);
                            }
                        }),
                        (i.show = function (i) {
                            if ((void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show")))) {
                                var o = { relatedTarget: this._element },
                                    r = e.Event("show.bs.dropdown", o),
                                    s = t._getParentFromElement(this._element);
                                if ((e(s).trigger(r), !r.isDefaultPrevented())) {
                                    if (!this._inNavbar && i) {
                                        if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                        var a = this._element;
                                        "parent" === this._config.reference ? (a = s) : c.isElement(this._config.reference) && ((a = this._config.reference), void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                            "scrollParent" !== this._config.boundary && e(s).addClass("position-static"),
                                            (this._popper = new n(a, this._menu, this._getPopperConfig()));
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(s).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop),
                                        this._element.focus(),
                                        this._element.setAttribute("aria-expanded", !0),
                                        e(this._menu).toggleClass("show"),
                                        e(s).toggleClass("show").trigger(e.Event("shown.bs.dropdown", o));
                                }
                            }
                        }),
                        (i.hide = function () {
                            if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                                var n = { relatedTarget: this._element },
                                    i = e.Event("hide.bs.dropdown", n),
                                    o = t._getParentFromElement(this._element);
                                e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)));
                            }
                        }),
                        (i.dispose = function () {
                            e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                        }),
                        (i.update = function () {
                            (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (i._addEventListeners = function () {
                            var t = this;
                            e(this._element).on("click.bs.dropdown", function (e) {
                                e.preventDefault(), e.stopPropagation(), t.toggle();
                            });
                        }),
                        (i._getConfig = function (t) {
                            return (t = a(a(a({}, this.constructor.Default), e(this._element).data()), t)), c.typeCheckConfig(N, t, this.constructor.DefaultType), t;
                        }),
                        (i._getMenuElement = function () {
                            if (!this._menu) {
                                var e = t._getParentFromElement(this._element);
                                e && (this._menu = e.querySelector(".dropdown-menu"));
                            }
                            return this._menu;
                        }),
                        (i._getPlacement = function () {
                            var t = e(this._element.parentNode),
                                n = "bottom-start";
                            return (
                                t.hasClass("dropup")
                                    ? (n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
                                    : t.hasClass("dropright")
                                    ? (n = "right-start")
                                    : t.hasClass("dropleft")
                                    ? (n = "left-start")
                                    : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"),
                                n
                            );
                        }),
                        (i._detectNavbar = function () {
                            return e(this._element).closest(".navbar").length > 0;
                        }),
                        (i._getOffset = function () {
                            var t = this,
                                e = {};
                            return (
                                "function" == typeof this._config.offset
                                    ? (e.fn = function (e) {
                                          return (e.offsets = a(a({}, e.offsets), t._config.offset(e.offsets, t._element) || {})), e;
                                      })
                                    : (e.offset = this._config.offset),
                                e
                            );
                        }),
                        (i._getPopperConfig = function () {
                            var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                            return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a(a({}, t), this._config.popperConfig);
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.dropdown");
                                if ((i || ((i = new t(this, "object" == typeof n ? n : null)), e(this).data("bs.dropdown", i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]();
                                }
                            });
                        }),
                        (t._clearMenus = function (n) {
                            if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                                for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
                                    var s = t._getParentFromElement(i[o]),
                                        a = e(i[o]).data("bs.dropdown"),
                                        l = { relatedTarget: i[o] };
                                    if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                                        var c = a._menu;
                                        if (e(s).hasClass("show") && !(n && (("click" === n.type && /input|textarea/i.test(n.target.tagName)) || ("keyup" === n.type && 9 === n.which)) && e.contains(s, n.target))) {
                                            var u = e.Event("hide.bs.dropdown", l);
                                            e(s).trigger(u),
                                                u.isDefaultPrevented() ||
                                                    ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                                    i[o].setAttribute("aria-expanded", "false"),
                                                    a._popper && a._popper.destroy(),
                                                    e(c).removeClass("show"),
                                                    e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)));
                                        }
                                    }
                                }
                        }),
                        (t._getParentFromElement = function (t) {
                            var e,
                                n = c.getSelectorFromElement(t);
                            return n && (e = document.querySelector(n)), e || t.parentNode;
                        }),
                        (t._dataApiKeydownHandler = function (n) {
                            if (
                                !(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || (27 !== n.which && ((40 !== n.which && 38 !== n.which) || e(n.target).closest(".dropdown-menu").length)) : !O.test(n.which)) &&
                                !this.disabled &&
                                !e(this).hasClass("disabled")
                            ) {
                                var i = t._getParentFromElement(this),
                                    o = e(i).hasClass("show");
                                if (o || 27 !== n.which) {
                                    if ((n.preventDefault(), n.stopPropagation(), !o || (o && (27 === n.which || 32 === n.which))))
                                        return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                                    var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
                                        return e(t).is(":visible");
                                    });
                                    if (0 !== r.length) {
                                        var s = r.indexOf(n.target);
                                        38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
                                    }
                                }
                            }
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return A;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return I;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document)
                .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', x._dataApiKeydownHandler)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", x._dataApiKeydownHandler)
                .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", x._clearMenus)
                .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
                    t.preventDefault(), t.stopPropagation(), x._jQueryInterface.call(e(this), "toggle");
                })
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                }),
                (e.fn[N] = x._jQueryInterface),
                (e.fn[N].Constructor = x),
                (e.fn[N].noConflict = function () {
                    return (e.fn[N] = k), x._jQueryInterface;
                });
            var j = e.fn.modal,
                L = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                P = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                F = (function () {
                    function t(t, e) {
                        (this._config = this._getConfig(e)),
                            (this._element = t),
                            (this._dialog = t.querySelector(".modal-dialog")),
                            (this._backdrop = null),
                            (this._isShown = !1),
                            (this._isBodyOverflowing = !1),
                            (this._ignoreBackdropClick = !1),
                            (this._isTransitioning = !1),
                            (this._scrollbarWidth = 0);
                    }
                    var n = t.prototype;
                    return (
                        (n.toggle = function (t) {
                            return this._isShown ? this.hide() : this.show(t);
                        }),
                        (n.show = function (t) {
                            var n = this;
                            if (!this._isShown && !this._isTransitioning) {
                                e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                                var i = e.Event("show.bs.modal", { relatedTarget: t });
                                e(this._element).trigger(i),
                                    this._isShown ||
                                        i.isDefaultPrevented() ||
                                        ((this._isShown = !0),
                                        this._checkScrollbar(),
                                        this._setScrollbar(),
                                        this._adjustDialog(),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
                                            return n.hide(t);
                                        }),
                                        e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                            e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                                            });
                                        }),
                                        this._showBackdrop(function () {
                                            return n._showElement(t);
                                        }));
                            }
                        }),
                        (n.hide = function (t) {
                            var n = this;
                            if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                                var i = e.Event("hide.bs.modal");
                                if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                                    this._isShown = !1;
                                    var o = e(this._element).hasClass("fade");
                                    if (
                                        (o && (this._isTransitioning = !0),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        e(document).off("focusin.bs.modal"),
                                        e(this._element).removeClass("show"),
                                        e(this._element).off("click.dismiss.bs.modal"),
                                        e(this._dialog).off("mousedown.dismiss.bs.modal"),
                                        o)
                                    ) {
                                        var r = c.getTransitionDurationFromElement(this._element);
                                        e(this._element)
                                            .one(c.TRANSITION_END, function (t) {
                                                return n._hideModal(t);
                                            })
                                            .emulateTransitionEnd(r);
                                    } else this._hideModal();
                                }
                            }
                        }),
                        (n.dispose = function () {
                            [window, this._element, this._dialog].forEach(function (t) {
                                return e(t).off(".bs.modal");
                            }),
                                e(document).off("focusin.bs.modal"),
                                e.removeData(this._element, "bs.modal"),
                                (this._config = null),
                                (this._element = null),
                                (this._dialog = null),
                                (this._backdrop = null),
                                (this._isShown = null),
                                (this._isBodyOverflowing = null),
                                (this._ignoreBackdropClick = null),
                                (this._isTransitioning = null),
                                (this._scrollbarWidth = null);
                        }),
                        (n.handleUpdate = function () {
                            this._adjustDialog();
                        }),
                        (n._getConfig = function (t) {
                            return (t = a(a({}, L), t)), c.typeCheckConfig("modal", t, P), t;
                        }),
                        (n._triggerBackdropTransition = function () {
                            var t = this;
                            if ("static" === this._config.backdrop) {
                                var n = e.Event("hidePrevented.bs.modal");
                                if ((e(this._element).trigger(n), n.defaultPrevented)) return;
                                this._element.classList.add("modal-static");
                                var i = c.getTransitionDurationFromElement(this._element);
                                e(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        t._element.classList.remove("modal-static");
                                    })
                                    .emulateTransitionEnd(i),
                                    this._element.focus();
                            } else this.hide();
                        }),
                        (n._showElement = function (t) {
                            var n = this,
                                i = e(this._element).hasClass("fade"),
                                o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                            (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                                (this._element.style.display = "block"),
                                this._element.removeAttribute("aria-hidden"),
                                this._element.setAttribute("aria-modal", !0),
                                e(this._dialog).hasClass("modal-dialog-scrollable") && o ? (o.scrollTop = 0) : (this._element.scrollTop = 0),
                                i && c.reflow(this._element),
                                e(this._element).addClass("show"),
                                this._config.focus && this._enforceFocus();
                            var r = e.Event("shown.bs.modal", { relatedTarget: t }),
                                s = function () {
                                    n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(r);
                                };
                            if (i) {
                                var a = c.getTransitionDurationFromElement(this._dialog);
                                e(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a);
                            } else s();
                        }),
                        (n._enforceFocus = function () {
                            var t = this;
                            e(document)
                                .off("focusin.bs.modal")
                                .on("focusin.bs.modal", function (n) {
                                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                                });
                        }),
                        (n._setEscapeEvent = function () {
                            var t = this;
                            this._isShown
                                ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                                      t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
                                  })
                                : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
                        }),
                        (n._setResizeEvent = function () {
                            var t = this;
                            this._isShown
                                ? e(window).on("resize.bs.modal", function (e) {
                                      return t.handleUpdate(e);
                                  })
                                : e(window).off("resize.bs.modal");
                        }),
                        (n._hideModal = function () {
                            var t = this;
                            (this._element.style.display = "none"),
                                this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                (this._isTransitioning = !1),
                                this._showBackdrop(function () {
                                    e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal");
                                });
                        }),
                        (n._removeBackdrop = function () {
                            this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
                        }),
                        (n._showBackdrop = function (t) {
                            var n = this,
                                i = e(this._element).hasClass("fade") ? "fade" : "";
                            if (this._isShown && this._config.backdrop) {
                                if (
                                    ((this._backdrop = document.createElement("div")),
                                    (this._backdrop.className = "modal-backdrop"),
                                    i && this._backdrop.classList.add(i),
                                    e(this._backdrop).appendTo(document.body),
                                    e(this._element).on("click.dismiss.bs.modal", function (t) {
                                        n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : t.target === t.currentTarget && n._triggerBackdropTransition();
                                    }),
                                    i && c.reflow(this._backdrop),
                                    e(this._backdrop).addClass("show"),
                                    !t)
                                )
                                    return;
                                if (!i) return void t();
                                var o = c.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass("show");
                                var r = function () {
                                    n._removeBackdrop(), t && t();
                                };
                                if (e(this._element).hasClass("fade")) {
                                    var s = c.getTransitionDurationFromElement(this._backdrop);
                                    e(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
                                } else r();
                            } else t && t();
                        }),
                        (n._adjustDialog = function () {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                        }),
                        (n._resetAdjustments = function () {
                            (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                        }),
                        (n._checkScrollbar = function () {
                            var t = document.body.getBoundingClientRect();
                            (this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                        }),
                        (n._setScrollbar = function () {
                            var t = this;
                            if (this._isBodyOverflowing) {
                                var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                                    i = [].slice.call(document.querySelectorAll(".sticky-top"));
                                e(n).each(function (n, i) {
                                    var o = i.style.paddingRight,
                                        r = e(i).css("padding-right");
                                    e(i)
                                        .data("padding-right", o)
                                        .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                                }),
                                    e(i).each(function (n, i) {
                                        var o = i.style.marginRight,
                                            r = e(i).css("margin-right");
                                        e(i)
                                            .data("margin-right", o)
                                            .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                                    });
                                var o = document.body.style.paddingRight,
                                    r = e(document.body).css("padding-right");
                                e(document.body)
                                    .data("padding-right", o)
                                    .css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
                            }
                            e(document.body).addClass("modal-open");
                        }),
                        (n._resetScrollbar = function () {
                            var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                            e(t).each(function (t, n) {
                                var i = e(n).data("padding-right");
                                e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
                            });
                            var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                            e(n).each(function (t, n) {
                                var i = e(n).data("margin-right");
                                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
                            });
                            var i = e(document.body).data("padding-right");
                            e(document.body).removeData("padding-right"), (document.body.style.paddingRight = i || "");
                        }),
                        (n._getScrollbarWidth = function () {
                            var t = document.createElement("div");
                            (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
                            var e = t.getBoundingClientRect().width - t.clientWidth;
                            return document.body.removeChild(t), e;
                        }),
                        (t._jQueryInterface = function (n, i) {
                            return this.each(function () {
                                var o = e(this).data("bs.modal"),
                                    r = a(a(a({}, L), e(this).data()), "object" == typeof n && n ? n : {});
                                if ((o || ((o = new t(this, r)), e(this).data("bs.modal", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n](i);
                                } else r.show && o.show(i);
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return L;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
                var n,
                    i = this,
                    o = c.getSelectorFromElement(this);
                o && (n = document.querySelector(o));
                var r = e(n).data("bs.modal") ? "toggle" : a(a({}, e(n).data()), e(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
                var s = e(n).one("show.bs.modal", function (t) {
                    t.isDefaultPrevented() ||
                        s.one("hidden.bs.modal", function () {
                            e(i).is(":visible") && i.focus();
                        });
                });
                F._jQueryInterface.call(e(n), r, this);
            }),
                (e.fn.modal = F._jQueryInterface),
                (e.fn.modal.Constructor = F),
                (e.fn.modal.noConflict = function () {
                    return (e.fn.modal = j), F._jQueryInterface;
                });
            var R = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                M = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
                B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
            function q(t, e, n) {
                if (0 === t.length) return t;
                if (n && "function" == typeof n) return n(t);
                for (
                    var i = new window.DOMParser().parseFromString(t, "text/html"),
                        o = Object.keys(e),
                        r = [].slice.call(i.body.querySelectorAll("*")),
                        s = function (t, n) {
                            var i = r[t],
                                s = i.nodeName.toLowerCase();
                            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                            var a = [].slice.call(i.attributes),
                                l = [].concat(e["*"] || [], e[s] || []);
                            a.forEach(function (t) {
                                (function (t, e) {
                                    var n = t.nodeName.toLowerCase();
                                    if (-1 !== e.indexOf(n)) return -1 === R.indexOf(n) || Boolean(t.nodeValue.match(B) || t.nodeValue.match(H));
                                    for (
                                        var i = e.filter(function (t) {
                                                return t instanceof RegExp;
                                            }),
                                            o = 0,
                                            r = i.length;
                                        o < r;
                                        o++
                                    )
                                        if (n.match(i[o])) return !0;
                                    return !1;
                                })(t, l) || i.removeAttribute(t.nodeName);
                            });
                        },
                        a = 0,
                        l = r.length;
                    a < l;
                    a++
                )
                    s(a);
                return i.body.innerHTML;
            }
            var Q = "tooltip",
                W = e.fn[Q],
                U = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                V = ["sanitize", "whiteList", "sanitizeFn"],
                Y = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object",
                    popperConfig: "(null|object)",
                },
                z = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                X = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: !0,
                    sanitizeFn: null,
                    whiteList: M,
                    popperConfig: null,
                },
                K = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip",
                },
                $ = (function () {
                    function t(t, e) {
                        if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                        (this._isEnabled = !0),
                            (this._timeout = 0),
                            (this._hoverState = ""),
                            (this._activeTrigger = {}),
                            (this._popper = null),
                            (this.element = t),
                            (this.config = this._getConfig(e)),
                            (this.tip = null),
                            this._setListeners();
                    }
                    var i = t.prototype;
                    return (
                        (i.enable = function () {
                            this._isEnabled = !0;
                        }),
                        (i.disable = function () {
                            this._isEnabled = !1;
                        }),
                        (i.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled;
                        }),
                        (i.toggle = function (t) {
                            if (this._isEnabled)
                                if (t) {
                                    var n = this.constructor.DATA_KEY,
                                        i = e(t.currentTarget).data(n);
                                    i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
                                        (i._activeTrigger.click = !i._activeTrigger.click),
                                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                                } else {
                                    if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                                    this._enter(null, this);
                                }
                        }),
                        (i.dispose = function () {
                            clearTimeout(this._timeout),
                                e.removeData(this.element, this.constructor.DATA_KEY),
                                e(this.element).off(this.constructor.EVENT_KEY),
                                e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                                this.tip && e(this.tip).remove(),
                                (this._isEnabled = null),
                                (this._timeout = null),
                                (this._hoverState = null),
                                (this._activeTrigger = null),
                                this._popper && this._popper.destroy(),
                                (this._popper = null),
                                (this.element = null),
                                (this.config = null),
                                (this.tip = null);
                        }),
                        (i.show = function () {
                            var t = this;
                            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var i = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(i);
                                var o = c.findShadowRoot(this.element),
                                    r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() || !r) return;
                                var s = this.getTipElement(),
                                    a = c.getUID(this.constructor.NAME);
                                s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass("fade");
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                    u = this._getAttachment(l);
                                this.addAttachmentClass(u);
                                var h = this._getContainer();
                                e(s).data(this.constructor.DATA_KEY, this),
                                    e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(h),
                                    e(this.element).trigger(this.constructor.Event.INSERTED),
                                    (this._popper = new n(this.element, s, this._getPopperConfig(u))),
                                    e(s).addClass("show"),
                                    "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                                var f = function () {
                                    t.config.animation && t._fixTransition();
                                    var n = t._hoverState;
                                    (t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t);
                                };
                                if (e(this.tip).hasClass("fade")) {
                                    var d = c.getTransitionDurationFromElement(this.tip);
                                    e(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(d);
                                } else f();
                            }
                        }),
                        (i.hide = function (t) {
                            var n = this,
                                i = this.getTipElement(),
                                o = e.Event(this.constructor.Event.HIDE),
                                r = function () {
                                    "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                        n._cleanTipClass(),
                                        n.element.removeAttribute("aria-describedby"),
                                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                                        null !== n._popper && n._popper.destroy(),
                                        t && t();
                                };
                            if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
                                if (
                                    (e(i).removeClass("show"),
                                    "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                    (this._activeTrigger.click = !1),
                                    (this._activeTrigger.focus = !1),
                                    (this._activeTrigger.hover = !1),
                                    e(this.tip).hasClass("fade"))
                                ) {
                                    var s = c.getTransitionDurationFromElement(i);
                                    e(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s);
                                } else r();
                                this._hoverState = "";
                            }
                        }),
                        (i.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (i.isWithContent = function () {
                            return Boolean(this.getTitle());
                        }),
                        (i.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-tooltip-" + t);
                        }),
                        (i.getTipElement = function () {
                            return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                        }),
                        (i.setContent = function () {
                            var t = this.getTipElement();
                            this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show");
                        }),
                        (i.setElementContent = function (t, n) {
                            "object" != typeof n || (!n.nodeType && !n.jquery)
                                ? this.config.html
                                    ? (this.config.sanitize && (n = q(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n))
                                    : t.text(n)
                                : this.config.html
                                ? e(n).parent().is(t) || t.empty().append(n)
                                : t.text(e(n).text());
                        }),
                        (i.getTitle = function () {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                        }),
                        (i._getPopperConfig = function (t) {
                            var e = this;
                            return a(
                                a(
                                    {},
                                    {
                                        placement: t,
                                        modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                        onCreate: function (t) {
                                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                        },
                                        onUpdate: function (t) {
                                            return e._handlePopperPlacementChange(t);
                                        },
                                    }
                                ),
                                this.config.popperConfig
                            );
                        }),
                        (i._getOffset = function () {
                            var t = this,
                                e = {};
                            return (
                                "function" == typeof this.config.offset
                                    ? (e.fn = function (e) {
                                          return (e.offsets = a(a({}, e.offsets), t.config.offset(e.offsets, t.element) || {})), e;
                                      })
                                    : (e.offset = this.config.offset),
                                e
                            );
                        }),
                        (i._getContainer = function () {
                            return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
                        }),
                        (i._getAttachment = function (t) {
                            return z[t.toUpperCase()];
                        }),
                        (i._setListeners = function () {
                            var t = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n)
                                    e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                        return t.toggle(e);
                                    });
                                else if ("manual" !== n) {
                                    var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element)
                                        .on(i, t.config.selector, function (e) {
                                            return t._enter(e);
                                        })
                                        .on(o, t.config.selector, function (e) {
                                            return t._leave(e);
                                        });
                                }
                            }),
                                (this._hideModalHandler = function () {
                                    t.element && t.hide();
                                }),
                                e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                                this.config.selector ? (this.config = a(a({}, this.config), {}, { trigger: "manual", selector: "" })) : this._fixTitle();
                        }),
                        (i._fixTitle = function () {
                            var t = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                        }),
                        (i._enter = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                                t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                                e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
                                    ? (n._hoverState = "show")
                                    : (clearTimeout(n._timeout),
                                      (n._hoverState = "show"),
                                      n.config.delay && n.config.delay.show
                                          ? (n._timeout = setTimeout(function () {
                                                "show" === n._hoverState && n.show();
                                            }, n.config.delay.show))
                                          : n.show());
                        }),
                        (i._leave = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                                t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
                                n._isWithActiveTrigger() ||
                                    (clearTimeout(n._timeout),
                                    (n._hoverState = "out"),
                                    n.config.delay && n.config.delay.hide
                                        ? (n._timeout = setTimeout(function () {
                                              "out" === n._hoverState && n.hide();
                                          }, n.config.delay.hide))
                                        : n.hide());
                        }),
                        (i._isWithActiveTrigger = function () {
                            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                            return !1;
                        }),
                        (i._getConfig = function (t) {
                            var n = e(this.element).data();
                            return (
                                Object.keys(n).forEach(function (t) {
                                    -1 !== V.indexOf(t) && delete n[t];
                                }),
                                "number" == typeof (t = a(a(a({}, this.constructor.Default), n), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                                "number" == typeof t.title && (t.title = t.title.toString()),
                                "number" == typeof t.content && (t.content = t.content.toString()),
                                c.typeCheckConfig(Q, t, this.constructor.DefaultType),
                                t.sanitize && (t.template = q(t.template, t.whiteList, t.sanitizeFn)),
                                t
                            );
                        }),
                        (i._getDelegateConfig = function () {
                            var t = {};
                            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t;
                        }),
                        (i._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(U);
                            null !== n && n.length && t.removeClass(n.join(""));
                        }),
                        (i._handlePopperPlacementChange = function (t) {
                            (this.tip = t.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                        }),
                        (i._fixTransition = function () {
                            var t = this.getTipElement(),
                                n = this.config.animation;
                            null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.tooltip"),
                                    o = "object" == typeof n && n;
                                if ((i || !/dispose|hide/.test(n)) && (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return X;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return Q;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return "bs.tooltip";
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return K;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return ".bs.tooltip";
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return Y;
                                },
                            },
                        ]),
                        t
                    );
                })();
            (e.fn[Q] = $._jQueryInterface),
                (e.fn[Q].Constructor = $),
                (e.fn[Q].noConflict = function () {
                    return (e.fn[Q] = W), $._jQueryInterface;
                });
            var G = "popover",
                J = e.fn[G],
                Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                tt = a(
                    a({}, $.Default),
                    {},
                    { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }
                ),
                et = a(a({}, $.DefaultType), {}, { content: "(string|element|function)" }),
                nt = {
                    HIDE: "hide.bs.popover",
                    HIDDEN: "hidden.bs.popover",
                    SHOW: "show.bs.popover",
                    SHOWN: "shown.bs.popover",
                    INSERTED: "inserted.bs.popover",
                    CLICK: "click.bs.popover",
                    FOCUSIN: "focusin.bs.popover",
                    FOCUSOUT: "focusout.bs.popover",
                    MOUSEENTER: "mouseenter.bs.popover",
                    MOUSELEAVE: "mouseleave.bs.popover",
                },
                it = (function (t) {
                    var n, i;
                    function r() {
                        return t.apply(this, arguments) || this;
                    }
                    (i = t), ((n = r).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), (n.__proto__ = i);
                    var s = r.prototype;
                    return (
                        (s.isWithContent = function () {
                            return this.getTitle() || this._getContent();
                        }),
                        (s.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-popover-" + t);
                        }),
                        (s.getTipElement = function () {
                            return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
                        }),
                        (s.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(".popover-header"), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
                        }),
                        (s._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content;
                        }),
                        (s._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(Z);
                            null !== n && n.length > 0 && t.removeClass(n.join(""));
                        }),
                        (r._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data("bs.popover"),
                                    i = "object" == typeof t ? t : null;
                                if ((n || !/dispose|hide/.test(t)) && (n || ((n = new r(this, i)), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]();
                                }
                            });
                        }),
                        o(r, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return tt;
                                },
                            },
                            {
                                key: "NAME",
                                get: function () {
                                    return G;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function () {
                                    return "bs.popover";
                                },
                            },
                            {
                                key: "Event",
                                get: function () {
                                    return nt;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function () {
                                    return ".bs.popover";
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return et;
                                },
                            },
                        ]),
                        r
                    );
                })($);
            (e.fn[G] = it._jQueryInterface),
                (e.fn[G].Constructor = it),
                (e.fn[G].noConflict = function () {
                    return (e.fn[G] = J), it._jQueryInterface;
                });
            var ot = "scrollspy",
                rt = e.fn[ot],
                st = { offset: 10, method: "auto", target: "" },
                at = { offset: "number", method: "string", target: "(string|element)" },
                lt = (function () {
                    function t(t, n) {
                        var i = this;
                        (this._element = t),
                            (this._scrollElement = "BODY" === t.tagName ? window : t),
                            (this._config = this._getConfig(n)),
                            (this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item"),
                            (this._offsets = []),
                            (this._targets = []),
                            (this._activeTarget = null),
                            (this._scrollHeight = 0),
                            e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
                                return i._process(t);
                            }),
                            this.refresh(),
                            this._process();
                    }
                    var n = t.prototype;
                    return (
                        (n.refresh = function () {
                            var t = this,
                                n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                                i = "auto" === this._config.method ? n : this._config.method,
                                o = "position" === i ? this._getScrollTop() : 0;
                            (this._offsets = []),
                                (this._targets = []),
                                (this._scrollHeight = this._getScrollHeight()),
                                [].slice
                                    .call(document.querySelectorAll(this._selector))
                                    .map(function (t) {
                                        var n,
                                            r = c.getSelectorFromElement(t);
                                        if ((r && (n = document.querySelector(r)), n)) {
                                            var s = n.getBoundingClientRect();
                                            if (s.width || s.height) return [e(n)[i]().top + o, r];
                                        }
                                        return null;
                                    })
                                    .filter(function (t) {
                                        return t;
                                    })
                                    .sort(function (t, e) {
                                        return t[0] - e[0];
                                    })
                                    .forEach(function (e) {
                                        t._offsets.push(e[0]), t._targets.push(e[1]);
                                    });
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.scrollspy"),
                                e(this._scrollElement).off(".bs.scrollspy"),
                                (this._element = null),
                                (this._scrollElement = null),
                                (this._config = null),
                                (this._selector = null),
                                (this._offsets = null),
                                (this._targets = null),
                                (this._activeTarget = null),
                                (this._scrollHeight = null);
                        }),
                        (n._getConfig = function (t) {
                            if ("string" != typeof (t = a(a({}, st), "object" == typeof t && t ? t : {})).target && c.isElement(t.target)) {
                                var n = e(t.target).attr("id");
                                n || ((n = c.getUID(ot)), e(t.target).attr("id", n)), (t.target = "#" + n);
                            }
                            return c.typeCheckConfig(ot, t, at), t;
                        }),
                        (n._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                        }),
                        (n._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                        }),
                        (n._getOffsetHeight = function () {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                        }),
                        (n._process = function () {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                n = this._config.offset + e - this._getOffsetHeight();
                            if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i);
                            } else {
                                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                                for (var o = this._offsets.length; o--; ) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                            }
                        }),
                        (n._activate = function (t) {
                            (this._activeTarget = t), this._clear();
                            var n = this._selector.split(",").map(function (e) {
                                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                                }),
                                i = e([].slice.call(document.querySelectorAll(n.join(","))));
                            i.hasClass("dropdown-item")
                                ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active"))
                                : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                                e(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
                        }),
                        (n._clear = function () {
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .filter(function (t) {
                                    return t.classList.contains("active");
                                })
                                .forEach(function (t) {
                                    return t.classList.remove("active");
                                });
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this).data("bs.scrollspy");
                                if ((i || ((i = new t(this, "object" == typeof n && n)), e(this).data("bs.scrollspy", i)), "string" == typeof n)) {
                                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                    i[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return st;
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(window).on("load.bs.scrollspy.data-api", function () {
                for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--; ) {
                    var i = e(t[n]);
                    lt._jQueryInterface.call(i, i.data());
                }
            }),
                (e.fn[ot] = lt._jQueryInterface),
                (e.fn[ot].Constructor = lt),
                (e.fn[ot].noConflict = function () {
                    return (e.fn[ot] = rt), lt._jQueryInterface;
                });
            var ct = e.fn.tab,
                ut = (function () {
                    function t(t) {
                        this._element = t;
                    }
                    var n = t.prototype;
                    return (
                        (n.show = function () {
                            var t = this;
                            if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active")) || e(this._element).hasClass("disabled"))) {
                                var n,
                                    i,
                                    o = e(this._element).closest(".nav, .list-group")[0],
                                    r = c.getSelectorFromElement(this._element);
                                if (o) {
                                    var s = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                                    i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
                                }
                                var a = e.Event("hide.bs.tab", { relatedTarget: this._element }),
                                    l = e.Event("show.bs.tab", { relatedTarget: i });
                                if ((i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented())) {
                                    r && (n = document.querySelector(r)), this._activate(this._element, o);
                                    var u = function () {
                                        var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                                            o = e.Event("shown.bs.tab", { relatedTarget: i });
                                        e(i).trigger(n), e(t._element).trigger(o);
                                    };
                                    n ? this._activate(n, n.parentNode, u) : u();
                                }
                            }
                        }),
                        (n.dispose = function () {
                            e.removeData(this._element, "bs.tab"), (this._element = null);
                        }),
                        (n._activate = function (t, n, i) {
                            var o = this,
                                r = (!n || ("UL" !== n.nodeName && "OL" !== n.nodeName) ? e(n).children(".active") : e(n).find("> li > .active"))[0],
                                s = i && r && e(r).hasClass("fade"),
                                a = function () {
                                    return o._transitionComplete(t, r, i);
                                };
                            if (r && s) {
                                var l = c.getTransitionDurationFromElement(r);
                                e(r).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l);
                            } else a();
                        }),
                        (n._transitionComplete = function (t, n, i) {
                            if (n) {
                                e(n).removeClass("active");
                                var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                                o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                            }
                            if (
                                (e(t).addClass("active"),
                                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                                c.reflow(t),
                                t.classList.contains("fade") && t.classList.add("show"),
                                t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
                            ) {
                                var r = e(t).closest(".dropdown")[0];
                                if (r) {
                                    var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                                    e(s).addClass("active");
                                }
                                t.setAttribute("aria-expanded", !0);
                            }
                            i && i();
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.tab");
                                if ((o || ((o = new t(this)), i.data("bs.tab", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n]();
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                        ]),
                        t
                    );
                })();
            e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                t.preventDefault(), ut._jQueryInterface.call(e(this), "show");
            }),
                (e.fn.tab = ut._jQueryInterface),
                (e.fn.tab.Constructor = ut),
                (e.fn.tab.noConflict = function () {
                    return (e.fn.tab = ct), ut._jQueryInterface;
                });
            var ht = e.fn.toast,
                ft = { animation: "boolean", autohide: "boolean", delay: "number" },
                dt = { animation: !0, autohide: !0, delay: 500 },
                pt = (function () {
                    function t(t, e) {
                        (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
                    }
                    var n = t.prototype;
                    return (
                        (n.show = function () {
                            var t = this,
                                n = e.Event("show.bs.toast");
                            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                                this._config.animation && this._element.classList.add("fade");
                                var i = function () {
                                    t._element.classList.remove("showing"),
                                        t._element.classList.add("show"),
                                        e(t._element).trigger("shown.bs.toast"),
                                        t._config.autohide &&
                                            (t._timeout = setTimeout(function () {
                                                t.hide();
                                            }, t._config.delay));
                                };
                                if ((this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
                                    var o = c.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o);
                                } else i();
                            }
                        }),
                        (n.hide = function () {
                            if (this._element.classList.contains("show")) {
                                var t = e.Event("hide.bs.toast");
                                e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
                            }
                        }),
                        (n.dispose = function () {
                            clearTimeout(this._timeout),
                                (this._timeout = null),
                                this._element.classList.contains("show") && this._element.classList.remove("show"),
                                e(this._element).off("click.dismiss.bs.toast"),
                                e.removeData(this._element, "bs.toast"),
                                (this._element = null),
                                (this._config = null);
                        }),
                        (n._getConfig = function (t) {
                            return (t = a(a(a({}, dt), e(this._element).data()), "object" == typeof t && t ? t : {})), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
                        }),
                        (n._setListeners = function () {
                            var t = this;
                            e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                                return t.hide();
                            });
                        }),
                        (n._close = function () {
                            var t = this,
                                n = function () {
                                    t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
                                };
                            if ((this._element.classList.remove("show"), this._config.animation)) {
                                var i = c.getTransitionDurationFromElement(this._element);
                                e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
                            } else n();
                        }),
                        (t._jQueryInterface = function (n) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data("bs.toast");
                                if ((o || ((o = new t(this, "object" == typeof n && n)), i.data("bs.toast", o)), "string" == typeof n)) {
                                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                                    o[n](this);
                                }
                            });
                        }),
                        o(t, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "4.5.0";
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function () {
                                    return ft;
                                },
                            },
                            {
                                key: "Default",
                                get: function () {
                                    return dt;
                                },
                            },
                        ]),
                        t
                    );
                })();
            (e.fn.toast = pt._jQueryInterface),
                (e.fn.toast.Constructor = pt),
                (e.fn.toast.noConflict = function () {
                    return (e.fn.toast = ht), pt._jQueryInterface;
                }),
                (t.Alert = f),
                (t.Button = p),
                (t.Carousel = w),
                (t.Collapse = D),
                (t.Dropdown = x),
                (t.Modal = F),
                (t.Popover = it),
                (t.Scrollspy = lt),
                (t.Tab = ut),
                (t.Toast = pt),
                (t.Tooltip = $),
                (t.Util = c),
                Object.defineProperty(t, "__esModule", { value: !0 });
        })(e, n(0), n(1));
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        n(0), n(3), n.p;
//         $(document).ready(() => {
//             !(function () {
//                 var t = document.getElementById("bd-docs-nav");
//                 let e = parseInt(sessionStorage.getItem("sidebar-scroll-top"), 10);
//                 if (isNaN(e)) {
//                     var n,
//                         i = t.querySelectorAll(".active"),
//                         o = 0;
//                     for (n = i.length - 1; n > 0; n--) {
//                         var r = i[n];
//                         void 0 !== r && (o += r.offsetTop);
//                     }
//                     (o -= t.offsetTop), void 0 !== r && o > 0.5 * t.clientHeight && (t.scrollTop = o - 0.2 * t.clientHeight);
//                 } else t.scrollTop = e;
//                 window.addEventListener("beforeunload", () => {
//                     sessionStorage.setItem("sidebar-scroll-top", t.scrollTop);
//                 });
//             })(),
//                 $(window).on("activate.bs.scrollspy", function () {
//                     document.querySelectorAll("#bd-toc-nav a").forEach((t) => {
//                         t.parentElement.classList.remove("active");
//                     }),
//                         document.querySelectorAll("#bd-toc-nav a.active").forEach((t) => {
//                             t.parentElement.classList.add("active");
//                         });
//                 });
//         });
    },
]);
