import { ref as yi, reactive as Lr, onMounted as Br, watch as Ir, onUnmounted as Nr, defineComponent as Vr, openBlock as Yr, createElementBlock as Ur, normalizeClass as xi, createElementVNode as Xr, unref as Me, normalizeStyle as qr } from "vue";
function mt(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function Li(u, t) {
  u.prototype = Object.create(t.prototype), u.prototype.constructor = u, u.__proto__ = t;
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var it = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ht = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ti, W, V, at = 1e8, D = 1 / at, Ne = Math.PI * 2, Gr = Ne / 4, Wr = 0, Bi = Math.sqrt, Hr = Math.cos, $r = Math.sin, X = function(t) {
  return typeof t == "string";
}, F = function(t) {
  return typeof t == "function";
}, yt = function(t) {
  return typeof t == "number";
}, ei = function(t) {
  return typeof t > "u";
}, dt = function(t) {
  return typeof t == "object";
}, Q = function(t) {
  return t !== !1;
}, ii = function() {
  return typeof window < "u";
}, de = function(t) {
  return F(t) || X(t);
}, Ii = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, H = Array.isArray, Ve = /(?:-?\.?\d|\.)+/gi, Ni = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ut = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, De = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Vi = /[+-]=-?[.\d]+/, Yi = /[^,'"\[\]\s]+/gi, Kr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, A, st, Ye, ri, rt = {}, ye = {}, Ui, Xi = function(t) {
  return (ye = Nt(t, rt)) && J;
}, ni = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, xe = function(t, e) {
  return !e && console.warn(t);
}, qi = function(t, e) {
  return t && (rt[t] = e) && ye && (ye[t] = e) || rt;
}, oe = function() {
  return 0;
}, Qr = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, pe = {
  suppressEvents: !0,
  kill: !1
}, jr = {
  suppressEvents: !0
}, si = {}, bt = [], Ue = {}, Gi, tt = {}, Ee = {}, vi = 30, me = [], ai = "", oi = function(t) {
  var e = t[0], i, r;
  if (dt(e) || F(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = me.length; r-- && !me[r].targetTest(e); )
      ;
    i = me[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new pr(t[r], i))) || t.splice(r, 1);
  return t;
}, Lt = function(t) {
  return t._gsap || oi(ot(t))[0]._gsap;
}, Wi = function(t, e, i) {
  return (i = t[e]) && F(i) ? t[e]() : ei(i) && t.getAttribute && t.getAttribute(e) || i;
}, j = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, L = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, q = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, qt = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Zr = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, ve = function() {
  var t = bt.length, e = bt.slice(0), i, r;
  for (Ue = {}, bt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Hi = function(t, e, i, r) {
  bt.length && !W && ve(), t.render(e, i, r || W && e < 0 && (t._initted || t._startAt)), bt.length && !W && ve();
}, $i = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Yi).length < 2 ? e : X(t) ? t.trim() : t;
}, Ki = function(t) {
  return t;
}, ft = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Jr = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, Nt = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Ti = function u(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = dt(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, Te = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ne = function(t) {
  var e = t.parent || A, i = t.keyframes ? Jr(H(t.keyframes)) : ft;
  if (Q(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, tn = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Qi = function(t, e, i, r, n) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var s = t[r], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, Oe = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, St = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
}, Bt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, en = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Xe = function(t, e, i, r) {
  return t._startAt && (W ? t._startAt.revert(pe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, rn = function u(t) {
  return !t || t._ts && u(t.parent);
}, wi = function(t) {
  return t._repeat ? $t(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, $t = function(t, e) {
  var i = Math.floor(t /= e);
  return t && i === t ? i - 1 : i;
}, we = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, ke = function(t) {
  return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0));
}, Ce = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ke(t), i._dirty || Bt(i, t)), t;
}, ji = function(t, e) {
  var i;
  if ((e._time || e._initted && !e._dur) && (i = we(t.rawTime(), e), (!e._dur || ce(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -D;
  }
}, lt = function(t, e, i, r) {
  return e.parent && St(e), e._start = q((yt(i) ? i : i || t !== A ? nt(t, i, e) : t._time) + e._delay), e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Qi(t, e, "_first", "_last", t._sort ? "_start" : 0), qe(e) || (t._recent = e), r || ji(t, e), t._ts < 0 && Ce(t, t._tTime), t;
}, Zi = function(t, e) {
  return (rt.ScrollTrigger || ni("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t);
}, Ji = function(t, e, i, r, n) {
  if (fi(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !W && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Gi !== et.frame)
    return bt.push(t), t._lazy = [n, r], 1;
}, nn = function u(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e));
}, qe = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, sn = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && nn(t) && !(!t._initted && qe(t)) || (t._ts < 0 || t._dp._ts < 0) && !qe(t)) ? 0 : 1, a = t._rDelay, o = 0, f, h, _;
  if (a && t._repeat && (o = ce(0, t._tDur, e), h = $t(o, a), t._yoyo && h & 1 && (s = 1 - s), h !== $t(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || W || r || t._zTime === D || !e && t._zTime) {
    if (!t._initted && Ji(t, e, r, i, o))
      return;
    for (_ = t._zTime, t._zTime = e || (i ? D : 0), i || (i = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && Xe(t, e, i, !0), t._onUpdate && !i && ut(t, "onUpdate"), o && t._repeat && !i && t.parent && ut(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && St(t, 1), !i && !W && (ut(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
}, an = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, Kt = function(t, e, i, r) {
  var n = t._repeat, s = q(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && Ce(t, t._tTime = t._tDur * a), t.parent && ke(t), i || Bt(t.parent, t), t;
}, bi = function(t) {
  return t instanceof K ? Bt(t) : Kt(t, t._dur);
}, on = {
  _start: 0,
  endTime: oe,
  totalDuration: oe
}, nt = function u(t, e, i) {
  var r = t.labels, n = t._recent || on, s = t.duration() >= at ? n.endTime(!1) : t._dur, a, o, f;
  return X(e) && (isNaN(e) || e in r) ? (o = e.charAt(0), f = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), f && i && (o = o / 100 * (H(i) ? i[0] : i).totalDuration()), a > 1 ? u(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e;
}, se = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (a = s, o = i; o && !("immediateRender" in a); )
      a = o.vars.defaults || {}, o = Q(o.vars.inherit) && o.parent;
    s.immediateRender = Q(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new U(e[0], s, e[n + 1]);
}, kt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, ce = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, G = function(t, e) {
  return !X(t) || !(e = Kr.exec(t)) ? "" : e[1];
}, un = function(t, e, i) {
  return kt(i, function(r) {
    return ce(t, e, r);
  });
}, Ge = [].slice, tr = function(t, e) {
  return t && dt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && dt(t[0])) && !t.nodeType && t !== st;
}, fn = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return X(r) && !e || tr(r, 1) ? (n = i).push.apply(n, ot(r)) : i.push(r);
  }) || i;
}, ot = function(t, e, i) {
  return V && !e && V.selector ? V.selector(t) : X(t) && !i && (Ye || !Qt()) ? Ge.call((e || ri).querySelectorAll(t), 0) : H(t) ? fn(t, i) : tr(t) ? Ge.call(t, 0) : t ? [t] : [];
}, We = function(t) {
  return t = ot(t)[0] || xe("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ot(e, i.querySelectorAll ? i : i === t ? xe("Invalid scope") || ri.createElement("div") : t);
  };
}, er = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, ir = function(t) {
  if (F(t))
    return t;
  var e = dt(t) ? t : {
    each: t
  }, i = It(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = r > 0 && r < 1, o = isNaN(r) || a, f = e.axis, h = r, _ = r;
  return X(r) ? h = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && o && (h = r[0], _ = r[1]), function(c, d, m) {
    var l = (m || e).length, p = s[l], g, y, x, T, v, S, P, b, w;
    if (!p) {
      if (w = e.grid === "auto" ? 0 : (e.grid || [1, at])[1], !w) {
        for (P = -at; P < (P = m[w++].getBoundingClientRect().left) && w < l; )
          ;
        w--;
      }
      for (p = s[l] = [], g = o ? Math.min(w, l) * h - 0.5 : r % w, y = w === at ? 0 : o ? l * _ / w - 0.5 : r / w | 0, P = 0, b = at, S = 0; S < l; S++)
        x = S % w - g, T = y - (S / w | 0), p[S] = v = f ? Math.abs(f === "y" ? T : x) : Bi(x * x + T * T), v > P && (P = v), v < b && (b = v);
      r === "random" && er(p), p.max = P - b, p.min = b, p.v = l = (parseFloat(e.amount) || parseFloat(e.each) * (w > l ? l - 1 : f ? f === "y" ? l / w : w : Math.max(w, l / w)) || 0) * (r === "edges" ? -1 : 1), p.b = l < 0 ? n - l : n, p.u = G(e.amount || e.each) || 0, i = i && l < 0 ? _r(i) : i;
    }
    return l = (p[c] - p.min) / p.max || 0, q(p.b + (i ? i(l) : l) * p.v) + p.u;
  };
}, He = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = q(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (yt(i) ? 0 : G(i));
  };
}, rr = function(t, e) {
  var i = H(t), r, n;
  return !i && dt(t) && (r = i = t.radius || at, t.values ? (t = ot(t.values), (n = !yt(t[0])) && (r *= r)) : t = He(t.increment)), kt(e, i ? F(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), f = at, h = 0, _ = t.length, c, d; _--; )
      n ? (c = t[_].x - a, d = t[_].y - o, c = c * c + d * d) : c = Math.abs(t[_] - a), c < f && (f = c, h = _);
    return h = !r || f <= r ? t[h] : s, n || h === s || yt(s) ? h : h + G(s);
  } : He(t));
}, nr = function(t, e, i, r) {
  return kt(H(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return H(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, hn = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, ln = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || G(i));
  };
}, _n = function(t, e, i) {
  return ar(t, e, 0, 1, i);
}, sr = function(t, e, i) {
  return kt(i, function(r) {
    return t[~~e(r)];
  });
}, cn = function u(t, e, i) {
  var r = e - t;
  return H(t) ? sr(t, u(0, t.length), e) : kt(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, dn = function u(t, e, i) {
  var r = e - t, n = r * 2;
  return H(t) ? sr(t, u(0, t.length - 1), e) : kt(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, ue = function(t) {
  for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
    s = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(a ? Yi : Ve), i += t.substr(e, r - e) + nr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return i + t.substr(e, t.length - e);
}, ar = function(t, e, i, r, n) {
  var s = e - t, a = r - i;
  return kt(n, function(o) {
    return i + ((o - t) / s * a || 0);
  });
}, pn = function u(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = X(t), a = {}, o, f, h, _, c;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (H(t) && !H(e)) {
      for (h = [], _ = t.length, c = _ - 2, f = 1; f < _; f++)
        h.push(u(t[f - 1], t[f]));
      _--, n = function(m) {
        m *= _;
        var l = Math.min(c, ~~m);
        return h[l](m - l);
      }, i = e;
    } else
      r || (t = Nt(H(t) ? [] : {}, t));
    if (!h) {
      for (o in e)
        ui.call(a, t, o, "get", e[o]);
      n = function(m) {
        return _i(m, a) || (s ? t.p : t);
      };
    }
  }
  return kt(i, n);
}, Pi = function(t, e, i) {
  var r = t.labels, n = at, s, a, o;
  for (s in r)
    a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s, n = a);
  return o;
}, ut = function(t, e, i) {
  var r = t.vars, n = r[e], s = V, a = t._ctx, o, f, h;
  if (n)
    return o = r[e + "Params"], f = r.callbackScope || t, i && bt.length && ve(), a && (V = a), h = o ? n.apply(f, o) : n.call(f), V = s, h;
}, ie = function(t) {
  return St(t), t.scrollTrigger && t.scrollTrigger.kill(!!W), t.progress() < 1 && ut(t, "onInterrupt"), t;
}, Xt, or = [], ur = function(t) {
  if (!ii()) {
    or.push(t);
    return;
  }
  t = !t.name && t.default || t;
  var e = t.name, i = F(t), r = e && !i && t.init ? function() {
    this._props = [];
  } : t, n = {
    init: oe,
    render: _i,
    add: ui,
    kill: En,
    modifier: Dn,
    rawVars: 0
  }, s = {
    targetTest: 0,
    get: 0,
    getSetter: li,
    aliases: {},
    register: 0
  };
  if (Qt(), t !== r) {
    if (tt[e])
      return;
    ft(r, ft(Te(t, n), s)), Nt(r.prototype, Nt(n, Te(t, s))), tt[r.prop = e] = r, t.targetTest && (me.push(r), si[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
  }
  qi(e, r), t.register && t.register(J, r, Z);
}, M = 255, re = {
  aqua: [0, M, M],
  lime: [0, M, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, M],
  navy: [0, 0, 128],
  white: [M, M, M],
  olive: [128, 128, 0],
  yellow: [M, M, 0],
  orange: [M, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [M, 0, 0],
  pink: [M, 192, 203],
  cyan: [0, M, M],
  transparent: [M, M, M, 0]
}, Ae = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * M + 0.5 | 0;
}, fr = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : re.black, n, s, a, o, f, h, _, c, d, m;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), re[t])
      r = re[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & M, r & M, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & M, t & M];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = m = t.match(Ve), !e)
        o = +r[0] % 360 / 360, f = +r[1] / 100, h = +r[2] / 100, s = h <= 0.5 ? h * (f + 1) : h + f - h * f, n = h * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Ae(o + 1 / 3, n, s), r[1] = Ae(o, n, s), r[2] = Ae(o - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(Ni), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(Ve) || re.transparent;
    r = r.map(Number);
  }
  return e && !m && (n = r[0] / M, s = r[1] / M, a = r[2] / M, _ = Math.max(n, s, a), c = Math.min(n, s, a), h = (_ + c) / 2, _ === c ? o = f = 0 : (d = _ - c, f = h > 0.5 ? d / (2 - _ - c) : d / (_ + c), o = _ === n ? (s - a) / d + (s < a ? 6 : 0) : _ === s ? (a - n) / d + 2 : (n - s) / d + 4, o *= 60), r[0] = ~~(o + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(h * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, hr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(Pt).forEach(function(n) {
    var s = n.match(Ut) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Si = function(t, e, i) {
  var r = "", n = (t + r).match(Pt), s = e ? "hsla(" : "rgba(", a = 0, o, f, h, _;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = fr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (h = hr(t), o = i.c, o.join(r) !== h.c.join(r)))
    for (f = t.replace(Pt, "1").split(Ut), _ = f.length - 1; a < _; a++)
      r += f[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(Pt), _ = f.length - 1; a < _; a++)
      r += f[a] + n[a];
  return r + f[_];
}, Pt = function() {
  var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in re)
    u += "|" + t + "\\b";
  return new RegExp(u + ")", "gi");
}(), mn = /hsl[a]?\(/, lr = function(t) {
  var e = t.join(" "), i;
  if (Pt.lastIndex = 0, Pt.test(e))
    return i = mn.test(e), t[1] = Si(t[1], i), t[0] = Si(t[0], i, hr(t[1])), !0;
}, fe, et = function() {
  var u = Date.now, t = 500, e = 33, i = u(), r = i, n = 1e3 / 240, s = n, a = [], o, f, h, _, c, d, m = function l(p) {
    var g = u() - r, y = p === !0, x, T, v, S;
    if (g > t && (i += g - e), r += g, v = r - i, x = v - s, (x > 0 || y) && (S = ++_.frame, c = v - _.time * 1e3, _.time = v = v / 1e3, s += x + (x >= n ? 4 : n - x), T = 1), y || (o = f(l)), T)
      for (d = 0; d < a.length; d++)
        a[d](v, c, S, p);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(p) {
      return c / (1e3 / (p || 60));
    },
    wake: function() {
      Ui && (!Ye && ii() && (st = Ye = window, ri = st.document || {}, rt.gsap = J, (st.gsapVersions || (st.gsapVersions = [])).push(J.version), Xi(ye || st.GreenSockGlobals || !st.gsap && st || {}), h = st.requestAnimationFrame, or.forEach(ur)), o && _.sleep(), f = h || function(p) {
        return setTimeout(p, s - _.time * 1e3 + 1 | 0);
      }, fe = 1, m(2));
    },
    sleep: function() {
      (h ? st.cancelAnimationFrame : clearTimeout)(o), fe = 0, f = oe;
    },
    lagSmoothing: function(p, g) {
      t = p || 1 / 0, e = Math.min(g || 33, t);
    },
    fps: function(p) {
      n = 1e3 / (p || 240), s = _.time * 1e3 + n;
    },
    add: function(p, g, y) {
      var x = g ? function(T, v, S, P) {
        p(T, v, S, P), _.remove(x);
      } : p;
      return _.remove(p), a[y ? "unshift" : "push"](x), Qt(), x;
    },
    remove: function(p, g) {
      ~(g = a.indexOf(p)) && a.splice(g, 1) && d >= g && d--;
    },
    _listeners: a
  }, _;
}(), Qt = function() {
  return !fe && et.wake();
}, O = {}, gn = /^[\d.\-M][\d.\-,\s]/, yn = /["']/g, xn = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, f; n < s; n++)
    o = i[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, f = o.substr(0, a), e[r] = isNaN(f) ? f.replace(yn, "").trim() : +f, r = o.substr(a + 1).trim();
  return e;
}, vn = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Tn = function(t) {
  var e = (t + "").split("("), i = O[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [xn(e[1])] : vn(t).split(",").map($i)) : O._CE && gn.test(t) ? O._CE("", t) : i;
}, _r = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, cr = function u(t, e) {
  for (var i = t._first, r; i; )
    i instanceof K ? u(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, It = function(t, e) {
  return t && (F(t) ? t : O[t] || Tn(t)) || e;
}, Vt = function(t, e, i, r) {
  i === void 0 && (i = function(o) {
    return 1 - e(1 - o);
  }), r === void 0 && (r = function(o) {
    return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return j(t, function(a) {
    O[a] = rt[a] = n, O[s = a.toLowerCase()] = i;
    for (var o in n)
      O[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o] = n[o];
  }), n;
}, dr = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Re = function u(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Ne * (Math.asin(1 / r) || 0), a = function(h) {
    return h === 1 ? 1 : r * Math.pow(2, -10 * h) * $r((h - s) * n) + 1;
  }, o = t === "out" ? a : t === "in" ? function(f) {
    return 1 - a(1 - f);
  } : dr(a);
  return n = Ne / n, o.config = function(f, h) {
    return u(t, f, h);
  }, o;
}, ze = function u(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : dr(i);
  return r.config = function(n) {
    return u(t, n);
  }, r;
};
j("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
  var e = t < 5 ? t + 1 : t;
  Vt(u + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Vt("Elastic", Re("in"), Re("out"), Re());
(function(u, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(a) {
    return a < e ? u * a * a : a < i ? u * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? u * (a -= 2.25 / t) * a + 0.9375 : u * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Vt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Vt("Expo", function(u) {
  return u ? Math.pow(2, 10 * (u - 1)) : 0;
});
Vt("Circ", function(u) {
  return -(Bi(1 - u * u) - 1);
});
Vt("Sine", function(u) {
  return u === 1 ? 1 : -Hr(u * Gr) + 1;
});
Vt("Back", ze("in"), ze("out"), ze());
O.SteppedEase = O.steps = rt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - D;
    return function(a) {
      return ((r * ce(0, s, a) | 0) + n) * i;
    };
  }
};
Ht.ease = O["quad.out"];
j("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
  return ai += u + "," + u + "Params,";
});
var pr = function(t, e) {
  this.id = Wr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Wi, this.set = e ? e.getSetter : li;
}, jt = /* @__PURE__ */ function() {
  function u(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Kt(this, +e.duration, 1, 1), this.data = e.data, V && (this._ctx = V, V.data.push(this)), fe || et.wake();
  }
  var t = u.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Qt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ce(this, i), !n._dp || n.parent || ji(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && lt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Hi(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + wi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + wi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? $t(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i) {
    if (!arguments.length)
      return this._rts === -D ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var r = this.parent && this._ts ? we(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -D ? 0 : this._rts, this.totalTime(ce(-Math.abs(this._delay), this._tDur, r), !0), ke(this), en(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Qt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && lt(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Q(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? we(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = jr);
    var r = W;
    return W = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), W = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (r._ts || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, bi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, bi(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(nt(this, i), Q(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, Q(r));
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -D, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(n) {
      var s = F(i) ? i : Ki, a = function() {
        var f = r.then;
        r.then = null, F(s) && (s = s(r)) && (s.then || s === r) && (r.then = f), n(s), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    ie(this);
  }, u;
}();
ft(jt.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -D,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var K = /* @__PURE__ */ function(u) {
  Li(t, u);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = u.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Q(i.sortChildren), A && lt(i.parent || A, mt(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && Zi(mt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return se(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return se(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, a) {
    return se(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ne(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new U(r, n, nt(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return lt(this, U.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, a, o, f, h) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = h, s.parent = this, new U(r, s, nt(this, o)), this;
  }, e.staggerFrom = function(r, n, s, a, o, f, h) {
    return s.runBackwards = 1, ne(s).immediateRender = Q(s.immediateRender), this.staggerTo(r, n, s, a, o, f, h);
  }, e.staggerFromTo = function(r, n, s, a, o, f, h, _) {
    return a.startAt = s, ne(a).immediateRender = Q(a.immediateRender), this.staggerTo(r, n, a, o, f, h, _);
  }, e.render = function(r, n, s) {
    var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, h = r <= 0 ? 0 : q(r), _ = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, m, l, p, g, y, x, T, v, S, P;
    if (this !== A && h > o && r >= 0 && (h = o), h !== this._tTime || s || _) {
      if (a !== this._time && f && (h += this._time - a, r += this._time - a), c = h, T = this._start, x = this._ts, g = !x, _ && (f || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (S = this._yoyo, p = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(p * 100 + r, n, s);
        if (c = q(h % p), h === o ? (l = this._repeat, c = f) : (l = ~~(h / p), l && l === h / p && (c = f, l--), c > f && (c = f)), v = $t(this._tTime, p), !a && this._tTime && v !== l && this._tTime - v * p - this._dur <= 0 && (v = l), S && l & 1 && (c = f - c, P = 1), l !== v && !this._lock) {
          var b = S && v & 1, w = b === (S && l & 1);
          if (l < v && (b = !b), a = b ? 0 : f, this._lock = 1, this.render(a || (P ? 0 : q(l * p)), n, !f)._lock = 0, this._tTime = h, !n && this.parent && ut(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, o = this._tDur, w && (this._lock = 2, a = b ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !g)
            return this;
          cr(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = an(this, q(a), q(c)), y && (h -= c - (c = y._start))), this._tTime = h, this._time = c, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !n && !l && (ut(this, "onStart"), this._tTime !== h))
        return this;
      if (c >= a && r >= 0)
        for (d = this._first; d; ) {
          if (m = d._next, (d._act || c >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s), c !== this._time || !this._ts && !g) {
              y = 0, m && (h += this._zTime = -D);
              break;
            }
          }
          d = m;
        }
      else {
        d = this._last;
        for (var k = r < 0 ? r : c; d; ) {
          if (m = d._prev, (d._act || k <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || W && (d._initted || d._startAt)), c !== this._time || !this._ts && !g) {
              y = 0, m && (h += this._zTime = k ? -D : D);
              break;
            }
          }
          d = m;
        }
      }
      if (y && !n && (this.pause(), y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = T, ke(this), this.render(r, n, s);
      this._onUpdate && !n && ut(this, "onUpdate", !0), (h === o && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (h === o && this._ts > 0 || !h && this._ts < 0) && St(this, 1), !n && !(r < 0 && !a) && (h || a || !o) && (ut(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < o && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (yt(n) || (n = nt(this, n, r)), !(r instanceof jt)) {
      if (H(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (X(r))
        return this.addLabel(r, n);
      if (F(r))
        r = U.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? lt(this, r, n) : this;
  }, e.getChildren = function(r, n, s, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -at);
    for (var o = [], f = this._first; f; )
      f._start >= a && (f instanceof U ? n && o.push(f) : (s && o.push(f), r && o.push.apply(o, f.getChildren(!0, n, s)))), f = f._next;
    return o;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return X(r) ? this.removeLabel(r) : F(r) ? this.killTweensOf(r) : (Oe(this, r), r === this._recent && (this._recent = this._last), Bt(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = q(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), u.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = nt(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var a = U.delayedCall(0, n || oe, s);
    return a.data = "isPause", this._hasPause = 1, lt(this, a, nt(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = nt(this, r); n; )
      n._start === r && n.data === "isPause" && St(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), o = a.length; o--; )
      vt !== a[o] && a[o].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], a = ot(r), o = this._first, f = yt(n), h; o; )
      o instanceof U ? Zr(o._targets, a) && (f ? (!vt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h), o = o._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = nt(s, r), o = n, f = o.startAt, h = o.onStart, _ = o.onStartParams, c = o.immediateRender, d, m = U.to(s, ft({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || D,
      onStart: function() {
        if (s.pause(), !d) {
          var p = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          m._dur !== p && Kt(m, p, 0, 1).render(m._time, !0, !0), d = 1;
        }
        h && h.apply(m, _ || []);
      }
    }, n));
    return c ? m.render(0) : m;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, ft({
      startAt: {
        time: nt(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Pi(this, nt(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Pi(this, nt(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, o = this.labels, f; a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (f in o)
        o[f] >= s && (o[f] += r);
    return Bt(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return u.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Bt(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, a = s._last, o = at, f, h, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (_ = s.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), h = a._start, h > o && s._sort && a._ts && !s._lock ? (s._lock = 1, lt(s, a, h - a._delay, 1)._lock = 0) : o = h, h < 0 && a._ts && (n -= h, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += h / s._ts, s._time -= h, s._tTime -= h), s.shiftChildren(-h, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = f;
      Kt(s, s === A && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (A._ts && (Hi(A, we(r, A)), Gi = et.frame), et.frame >= vi) {
      vi += it.autoSleep || 120;
      var n = A._first;
      if ((!n || !n._ts) && it.autoSleep && et._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || et.sleep();
      }
    }
  }, t;
}(jt);
ft(K.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var wn = function(t, e, i, r, n, s, a) {
  var o = new Z(this._pt, t, e, 0, 1, Tr, null, n), f = 0, h = 0, _, c, d, m, l, p, g, y;
  for (o.b = i, o.e = r, i += "", r += "", (g = ~r.indexOf("random(")) && (r = ue(r)), s && (y = [i, r], s(y, t, e), i = y[0], r = y[1]), c = i.match(De) || []; _ = De.exec(r); )
    m = _[0], l = r.substring(f, _.index), d ? d = (d + 1) % 5 : l.substr(-5) === "rgba(" && (d = 1), m !== c[h++] && (p = parseFloat(c[h - 1]) || 0, o._pt = {
      _next: o._pt,
      p: l || h === 1 ? l : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: m.charAt(1) === "=" ? qt(p, m) - p : parseFloat(m) - p,
      m: d && d < 4 ? Math.round : 0
    }, f = De.lastIndex);
  return o.c = f < r.length ? r.substring(f, r.length) : "", o.fp = a, (Vi.test(r) || g) && (o.e = 0), this._pt = o, o;
}, ui = function(t, e, i, r, n, s, a, o, f, h) {
  F(r) && (r = r(n || 0, t, s));
  var _ = t[e], c = i !== "get" ? i : F(_) ? f ? t[e.indexOf("set") || !F(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : _, d = F(_) ? f ? kn : xr : hi, m;
  if (X(r) && (~r.indexOf("random(") && (r = ue(r)), r.charAt(1) === "=" && (m = qt(c, r) + (G(c) || 0), (m || m === 0) && (r = m))), !h || c !== r || $e)
    return !isNaN(c * r) && r !== "" ? (m = new Z(this._pt, t, e, +c || 0, r - (c || 0), typeof _ == "boolean" ? Mn : vr, 0, d), f && (m.fp = f), a && m.modifier(a, this, t), this._pt = m) : (!_ && !(e in t) && ni(e, r), wn.call(this, t, e, c, r, d, o || it.stringFilter, f));
}, bn = function(t, e, i, r, n) {
  if (F(t) && (t = ae(t, n, e, i, r)), !dt(t) || t.style && t.nodeType || H(t) || Ii(t))
    return X(t) ? ae(t, n, e, i, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = ae(t[a], n, e, i, r);
  return s;
}, mr = function(t, e, i, r, n, s) {
  var a, o, f, h;
  if (tt[t] && (a = new tt[t]()).init(n, a.rawVars ? e[t] : bn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new Z(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Xt))
    for (f = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
      f[a._props[h]] = o;
  return a;
}, vt, $e, fi = function u(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, o = r.lazy, f = r.onUpdate, h = r.onUpdateParams, _ = r.callbackScope, c = r.runBackwards, d = r.yoyoEase, m = r.keyframes, l = r.autoRevert, p = t._dur, g = t._startAt, y = t._targets, x = t.parent, T = x && x.data === "nested" ? x.vars.targets : y, v = t._overwrite === "auto" && !ti, S = t.timeline, P, b, w, k, C, z, B, I, E, Y, N, $, Ct;
  if (S && (!m || !n) && (n = "none"), t._ease = It(n, Ht.ease), t._yEase = d ? _r(It(d === !0 ? n : d, Ht.ease)) : 0, d && t._yoyo && !t._repeat && (d = t._yEase, t._yEase = t._ease, t._ease = d), t._from = !S && !!r.runBackwards, !S || m && !r.stagger) {
    if (I = y[0] ? Lt(y[0]).harness : 0, $ = I && r[I.prop], P = Te(r, si), g && (g._zTime < 0 && g.progress(1), e < 0 && c && a && !l ? g.render(-1, !0) : g.revert(c && p ? pe : Qr), g._lazy = 0), s) {
      if (St(t._startAt = U.set(y, ft({
        data: "isStart",
        overwrite: !1,
        parent: x,
        immediateRender: !0,
        lazy: !g && Q(o),
        startAt: null,
        delay: 0,
        onUpdate: f,
        onUpdateParams: h,
        callbackScope: _,
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W || !a && !l) && t._startAt.revert(pe), a && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && p && !g) {
      if (e && (a = !1), w = ft({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !g && Q(o),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: x
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, P), $ && (w[I.prop] = $), St(t._startAt = U.set(y, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (W ? t._startAt.revert(pe) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        u(t._startAt, D, D);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, o = p && Q(o) || o && !p, b = 0; b < y.length; b++) {
      if (C = y[b], B = C._gsap || oi(y)[b]._gsap, t._ptLookup[b] = Y = {}, Ue[B.id] && bt.length && ve(), N = T === y ? b : T.indexOf(C), I && (E = new I()).init(C, $ || P, t, N, T) !== !1 && (t._pt = k = new Z(t._pt, C, E.name, 0, 1, E.render, E, 0, E.priority), E._props.forEach(function(Mt) {
        Y[Mt] = k;
      }), E.priority && (z = 1)), !I || $)
        for (w in P)
          tt[w] && (E = mr(w, P, t, N, C, T)) ? E.priority && (z = 1) : Y[w] = k = ui.call(t, C, w, "get", P[w], N, T, 0, r.stringFilter);
      t._op && t._op[b] && t.kill(C, t._op[b]), v && t._pt && (vt = t, A.killTweensOf(C, Y, t.globalTime(e)), Ct = !t.parent, vt = 0), t._pt && o && (Ue[B.id] = 1);
    }
    z && wr(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !Ct, m && e <= 0 && S.render(at, !0, !0);
}, Pn = function(t, e, i, r, n, s, a) {
  var o = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, h, _, c;
  if (!o)
    for (o = t._ptCache[e] = [], _ = t._ptLookup, c = t._targets.length; c--; ) {
      if (f = _[c][e], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
          f = f._next;
      if (!f)
        return $e = 1, t.vars[e] = "+=0", fi(t, a), $e = 0, 1;
      o.push(f);
    }
  for (c = o.length; c--; )
    h = o[c], f = h._pt || h, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c, f.c = i - f.s, h.e && (h.e = L(i) + G(h.e)), h.b && (h.b = f.s + G(h.b));
}, Sn = function(t, e) {
  var i = t[0] ? Lt(t[0]).harness : 0, r = i && i.aliases, n, s, a, o;
  if (!r)
    return e;
  n = Nt({}, e);
  for (s in r)
    if (s in n)
      for (o = r[s].split(","), a = o.length; a--; )
        n[o[a]] = n[s];
  return n;
}, On = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, a;
  if (H(e))
    a = i[t] || (i[t] = []), e.forEach(function(o, f) {
      return a.push({
        t: f / (e.length - 1) * 100,
        v: o,
        e: n
      });
    });
  else
    for (s in e)
      a = i[s] || (i[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, ae = function(t, e, i, r, n) {
  return F(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? ue(t) : t;
}, gr = ai + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", yr = {};
j(gr + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
  return yr[u] = 1;
});
var U = /* @__PURE__ */ function(u) {
  Li(t, u);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = u.call(this, s ? r : ne(r)) || this;
    var o = a.vars, f = o.duration, h = o.delay, _ = o.immediateRender, c = o.stagger, d = o.overwrite, m = o.keyframes, l = o.defaults, p = o.scrollTrigger, g = o.yoyoEase, y = r.parent || A, x = (H(i) || Ii(i) ? yt(i[0]) : "length" in r) ? [i] : ot(i), T, v, S, P, b, w, k, C;
    if (a._targets = x.length ? oi(x) : xe("GSAP target " + i + " not found. https://greensock.com", !it.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, m || c || de(f) || de(h)) {
      if (r = a.vars, T = a.timeline = new K({
        data: "nested",
        defaults: l || {},
        targets: y && y.data === "nested" ? y.vars.targets : x
      }), T.kill(), T.parent = T._dp = mt(a), T._start = 0, c || de(f) || de(h)) {
        if (P = x.length, k = c && ir(c), dt(c))
          for (b in c)
            ~gr.indexOf(b) && (C || (C = {}), C[b] = c[b]);
        for (v = 0; v < P; v++)
          S = Te(r, yr), S.stagger = 0, g && (S.yoyoEase = g), C && Nt(S, C), w = x[v], S.duration = +ae(f, mt(a), v, w, x), S.delay = (+ae(h, mt(a), v, w, x) || 0) - a._delay, !c && P === 1 && S.delay && (a._delay = h = S.delay, a._start += h, S.delay = 0), T.to(w, S, k ? k(v, w, x) : 0), T._ease = O.none;
        T.duration() ? f = h = 0 : a.timeline = 0;
      } else if (m) {
        ne(ft(T.vars.defaults, {
          ease: "none"
        })), T._ease = It(m.ease || r.ease || "none");
        var z = 0, B, I, E;
        if (H(m))
          m.forEach(function(Y) {
            return T.to(x, Y, ">");
          }), T.duration();
        else {
          S = {};
          for (b in m)
            b === "ease" || b === "easeEach" || On(b, m[b], S, m.easeEach);
          for (b in S)
            for (B = S[b].sort(function(Y, N) {
              return Y.t - N.t;
            }), z = 0, v = 0; v < B.length; v++)
              I = B[v], E = {
                ease: I.e,
                duration: (I.t - (v ? B[v - 1].t : 0)) / 100 * f
              }, E[b] = I.v, T.to(x, E, z), z += E.duration;
          T.duration() < f && T.to({}, {
            duration: f - T.duration()
          });
        }
      }
      f || a.duration(f = T.duration());
    } else
      a.timeline = 0;
    return d === !0 && !ti && (vt = mt(a), A.killTweensOf(x), vt = 0), lt(y, mt(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (_ || !f && !m && a._start === q(y._time) && Q(_) && rn(mt(a)) && y.data !== "nested") && (a._tTime = -D, a.render(Math.max(0, -h) || 0)), p && Zi(mt(a), p), a;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var a = this._time, o = this._tDur, f = this._dur, h = r < 0, _ = r > o - D && !h ? o : r < D ? 0 : r, c, d, m, l, p, g, y, x, T;
    if (!f)
      sn(this, r, n, s);
    else if (_ !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (c = _, x = this.timeline, this._repeat) {
        if (l = f + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(l * 100 + r, n, s);
        if (c = q(_ % l), _ === o ? (m = this._repeat, c = f) : (m = ~~(_ / l), m && m === _ / l && (c = f, m--), c > f && (c = f)), g = this._yoyo && m & 1, g && (T = this._yEase, c = f - c), p = $t(this._tTime, l), c === a && !s && this._initted)
          return this._tTime = _, this;
        m !== p && (x && this._yEase && cr(x, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1, this.render(q(l * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ji(this, h ? r : c, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (f !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = _, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (T || this._ease)(c / f), this._from && (this.ratio = y = 1 - y), c && !a && !n && !m && (ut(this, "onStart"), this._tTime !== _))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      x && x.render(r < 0 ? r : !c && g ? -D : x._dur * x._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (h && Xe(this, r, n, s), ut(this, "onUpdate")), this._repeat && m !== p && this.vars.onRepeat && !n && this.parent && ut(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (h && !this._onUpdate && Xe(this, r, !0, !0), (r || !f) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && St(this, 1), !n && !(h && !a) && (_ || a || g) && (ut(this, _ === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < o && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), u.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, a) {
    fe || et.wake(), this._ts || this.play();
    var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || fi(this, o), f = this._ease(o / this._dur), Pn(this, r, n, s, a, f, o) ? this.resetTo(r, n, s, a) : (Ce(this, 0), this.parent || Qi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ie(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, vt && vt.vars.overwrite !== !0)._first || ie(this), this.parent && s !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o = r ? ot(r) : a, f = this._ptLookup, h = this._pt, _, c, d, m, l, p, g;
    if ((!n || n === "all") && tn(a, o))
      return n === "all" && (this._pt = 0), ie(this);
    for (_ = this._op = this._op || [], n !== "all" && (X(n) && (l = {}, j(n, function(y) {
      return l[y] = 1;
    }), n = l), n = Sn(a, n)), g = a.length; g--; )
      if (~o.indexOf(a[g])) {
        c = f[g], n === "all" ? (_[g] = n, m = c, d = {}) : (d = _[g] = _[g] || {}, m = n);
        for (l in m)
          p = c && c[l], p && ((!("kill" in p.d) || p.d.kill(l) === !0) && Oe(this, p, "_pt"), delete c[l]), d !== "all" && (d[l] = 1);
      }
    return this._initted && !this._pt && h && ie(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return se(1, arguments);
  }, t.delayedCall = function(r, n, s, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, t.fromTo = function(r, n, s) {
    return se(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return A.killTweensOf(r, n, s);
  }, t;
}(jt);
ft(U.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
j("staggerTo,staggerFrom,staggerFromTo", function(u) {
  U[u] = function() {
    var t = new K(), e = Ge.call(arguments, 0);
    return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), t[u].apply(t, e);
  };
});
var hi = function(t, e, i) {
  return t[e] = i;
}, xr = function(t, e, i) {
  return t[e](i);
}, kn = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Cn = function(t, e, i) {
  return t.setAttribute(e, i);
}, li = function(t, e) {
  return F(t[e]) ? xr : ei(t[e]) && t.setAttribute ? Cn : hi;
}, vr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Mn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Tr = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, _i = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, Dn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, En = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Oe(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, An = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, wr = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, Z = /* @__PURE__ */ function() {
  function u(e, i, r, n, s, a, o, f, h) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || vr, this.d = o || this, this.set = f || hi, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = u.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = An, this.m = i, this.mt = n, this.tween = r;
  }, u;
}();
j(ai + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
  return si[u] = 1;
});
rt.TweenMax = rt.TweenLite = U;
rt.TimelineLite = rt.TimelineMax = K;
A = new K({
  sortChildren: !1,
  defaults: Ht,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
it.stringFilter = lr;
var Zt = [], ge = {}, Rn = [], Oi = 0, Fe = function(t) {
  return (ge[t] || Rn).map(function(e) {
    return e();
  });
}, Ke = function() {
  var t = Date.now(), e = [];
  t - Oi > 2 && (Fe("matchMediaInit"), Zt.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, a, o, f;
    for (a in r)
      s = st.matchMedia(r[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, f = 1);
    f && (i.revert(), o && e.push(i));
  }), Fe("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i);
  }), Oi = t, Fe("matchMedia"));
}, br = /* @__PURE__ */ function() {
  function u(e, i) {
    this.selector = i && We(i), this.data = [], this._r = [], this.isReverted = !1, e && this.add(e);
  }
  var t = u.prototype;
  return t.add = function(i, r, n) {
    F(i) && (n = r, r = i, i = F);
    var s = this, a = function() {
      var f = V, h = s.selector, _;
      return f && f !== s && f.data.push(s), n && (s.selector = We(n)), V = s, _ = r.apply(s, arguments), F(_) && s._r.push(_), V = f, s.selector = h, s.isReverted = !1, _;
    };
    return s.last = a, i === F ? a(s) : i ? s[i] = a : a;
  }, t.ignore = function(i) {
    var r = V;
    V = null, i(this), V = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof u ? i.push.apply(i, r.getTweens()) : r instanceof U && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i) {
      var s = this.getTweens();
      this.data.forEach(function(o) {
        o.data === "isFlip" && (o.revert(), o.getChildren(!0, !0, !1).forEach(function(f) {
          return s.splice(s.indexOf(f), 1);
        }));
      }), s.map(function(o) {
        return {
          g: o.globalTime(0),
          t: o
        };
      }).sort(function(o, f) {
        return f.g - o.g || -1;
      }).forEach(function(o) {
        return o.t.revert(i);
      }), this.data.forEach(function(o) {
        return !(o instanceof jt) && o.revert && o.revert(i);
      }), this._r.forEach(function(o) {
        return o(i, n);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(o) {
        return o.kill && o.kill();
      });
    if (this.clear(), r) {
      var a = Zt.indexOf(this);
      ~a && Zt.splice(a, 1);
    }
  }, t.revert = function(i) {
    this.kill(i || {});
  }, u;
}(), zn = /* @__PURE__ */ function() {
  function u(e) {
    this.contexts = [], this.scope = e;
  }
  var t = u.prototype;
  return t.add = function(i, r, n) {
    dt(i) || (i = {
      matches: i
    });
    var s = new br(0, n || this.scope), a = s.conditions = {}, o, f, h;
    this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (f in i)
      f === "all" ? h = 1 : (o = st.matchMedia(i[f]), o && (Zt.indexOf(s) < 0 && Zt.push(s), (a[f] = o.matches) && (h = 1), o.addListener ? o.addListener(Ke) : o.addEventListener("change", Ke)));
    return h && r(s), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, u;
}(), be = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return ur(r);
    });
  },
  timeline: function(t) {
    return new K(t);
  },
  getTweensOf: function(t, e) {
    return A.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    X(t) && (t = ot(t)[0]);
    var n = Lt(t || {}).get, s = i ? Ki : $i;
    return i === "native" && (i = ""), t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(a, o, f) {
      return s((tt[a] && tt[a].get || n)(t, a, o, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = ot(t), t.length > 1) {
      var r = t.map(function(h) {
        return J.quickSetter(h, e, i);
      }), n = r.length;
      return function(h) {
        for (var _ = n; _--; )
          r[_](h);
      };
    }
    t = t[0] || {};
    var s = tt[e], a = Lt(t), o = a.harness && (a.harness.aliases || {})[e] || e, f = s ? function(h) {
      var _ = new s();
      Xt._pt = 0, _.init(t, i ? h + i : h, Xt, 0, [t]), _.render(1, _), Xt._pt && _i(1, Xt);
    } : a.set(t, o);
    return s ? f : function(h) {
      return f(t, o, i ? h + i : h, a, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = J.to(t, Nt((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})), s = function(o, f, h) {
      return n.resetTo(e, o, f, h);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return A.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = It(t.ease, Ht.ease)), Ti(Ht, t || {});
  },
  config: function(t) {
    return Ti(it, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !tt[a] && !rt[a] && xe(e + " effect requires " + a + " plugin.");
    }), Ee[e] = function(a, o, f) {
      return i(ot(a), ft(o || {}, n), f);
    }, s && (K.prototype[e] = function(a, o, f) {
      return this.add(Ee[e](a, dt(o) ? o : (f = o) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    O[t] = It(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? It(t, e) : O;
  },
  getById: function(t) {
    return A.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new K(t), r, n;
    for (i.smoothChildTiming = Q(t.smoothChildTiming), A.remove(i), i._dp = 0, i._time = i._tTime = A._time, r = A._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof U && r.vars.onComplete === r._targets[0])) && lt(i, r, r._start - r._delay), r = n;
    return lt(A, i, 0), i;
  },
  context: function(t, e) {
    return t ? new br(t, e) : V;
  },
  matchMedia: function(t) {
    return new zn(t);
  },
  matchMediaRefresh: function() {
    return Zt.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || Ke();
  },
  addEventListener: function(t, e) {
    var i = ge[t] || (ge[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = ge[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: cn,
    wrapYoyo: dn,
    distribute: ir,
    random: nr,
    snap: rr,
    normalize: _n,
    getUnit: G,
    clamp: un,
    splitColor: fr,
    toArray: ot,
    selector: We,
    mapRange: ar,
    pipe: hn,
    unitize: ln,
    interpolate: pn,
    shuffle: er
  },
  install: Xi,
  effects: Ee,
  ticker: et,
  updateRoot: K.updateRoot,
  plugins: tt,
  globalTimeline: A,
  core: {
    PropTween: Z,
    globals: qi,
    Tween: U,
    Timeline: K,
    Animation: jt,
    getCache: Lt,
    _removeLinkedListItem: Oe,
    reverting: function() {
      return W;
    },
    context: function(t) {
      return t && V && (V.data.push(t), t._ctx = V), V;
    },
    suppressOverwrites: function(t) {
      return ti = t;
    }
  }
};
j("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
  return be[u] = U[u];
});
et.add(K.updateRoot);
Xt = be.to({}, {
  duration: 0
});
var Fn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, Ln = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Fn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Le = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(a) {
        var o, f;
        if (X(n) && (o = {}, j(n, function(h) {
          return o[h] = 1;
        }), n = o), e) {
          o = {};
          for (f in n)
            o[f] = e(n[f]);
          n = o;
        }
        Ln(a, n);
      };
    }
  };
}, J = be.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, a, o;
    this.tween = i;
    for (s in e)
      o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Le("roundProps", He), Le("modifiers"), Le("snap", rr)) || be;
U.version = K.version = J.version = "3.11.5";
Ui = 1;
ii() && Qt();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ki, Tt, Gt, ci, Ft, Ci, di, Bn = function() {
  return typeof window < "u";
}, xt = {}, zt = 180 / Math.PI, Wt = Math.PI / 180, Yt = Math.atan2, Mi = 1e8, pi = /([A-Z])/g, In = /(left|right|width|margin|padding|x)/i, Nn = /[\s,\(]\S/, _t = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Qe = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Vn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Yn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Un = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Pr = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Sr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Xn = function(t, e, i) {
  return t.style[e] = i;
}, qn = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Gn = function(t, e, i) {
  return t._gsap[e] = i;
}, Wn = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, Hn = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, $n = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, R = "transform", ht = R + "Origin", Kn = function u(t, e) {
  var i = this, r = this.target, n = r.style;
  if (t in xt) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = _t[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(s) {
        return i.tfm[s] = gt(r, s);
      }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : gt(r, t);
    else
      return _t.transform.split(",").forEach(function(s) {
        return u.call(i, s, e);
      });
    if (this.props.indexOf(R) >= 0)
      return;
    r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ht, e, "")), t = R;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Or = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Qn = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(pi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = di(), (!n || !n.isStart) && !i[R] && (Or(i), r.uncache = 1);
  }
}, kr = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Qn,
    save: Kn
  };
  return t._gsap || J.core.getCache(t), e && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Cr, je = function(t, e) {
  var i = Tt.createElementNS ? Tt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tt.createElement(t);
  return i.style ? i : Tt.createElement(t);
}, ct = function u(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(pi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && u(t, Jt(e) || e, 1) || "";
}, Di = "O,Moz,ms,Ms,Webkit".split(","), Jt = function(t, e, i) {
  var r = e || Ft, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Di[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Di[s] : "") + t;
}, Ze = function() {
  Bn() && window.document && (ki = window, Tt = ki.document, Gt = Tt.documentElement, Ft = je("div") || {
    style: {}
  }, je("div"), R = Jt(R), ht = R + "Origin", Ft.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Cr = !!Jt("perspective"), di = J.core.reverting, ci = 1);
}, Be = function u(t) {
  var e = je("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
  if (Gt.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = u;
    } catch {
    }
  else
    this._gsapBBox && (s = this._gsapBBox());
  return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Gt.removeChild(e), this.style.cssText = n, s;
}, Ei = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Mr = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Be.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Be || (e = Be.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Ei(t, ["x", "cx", "x1"]) || 0,
    y: +Ei(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Dr = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mr(t));
}, he = function(t, e) {
  if (e) {
    var i = t.style;
    e in xt && e !== ht && (e = R), i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(e.replace(pi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, wt = function(t, e, i, r, n, s) {
  var a = new Z(t._pt, e, i, 0, 1, s ? Sr : Pr);
  return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
}, Ai = {
  deg: 1,
  rad: 1,
  turn: 1
}, jn = {
  grid: 1,
  flex: 1
}, Ot = function u(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = Ft.style, o = In.test(e), f = t.tagName.toLowerCase() === "svg", h = (f ? "client" : "offset") + (o ? "Width" : "Height"), _ = 100, c = r === "px", d = r === "%", m, l, p, g;
  return r === s || !n || Ai[r] || Ai[s] ? n : (s !== "px" && !c && (n = u(t, e, i, "px")), g = t.getCTM && Dr(t), (d || s === "%") && (xt[e] || ~e.indexOf("adius")) ? (m = g ? t.getBBox()[o ? "width" : "height"] : t[h], L(d ? n / m * _ : n / 100 * m)) : (a[o ? "width" : "height"] = _ + (c ? s : r), l = ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, g && (l = (t.ownerSVGElement || {}).parentNode), (!l || l === Tt || !l.appendChild) && (l = Tt.body), p = l._gsap, p && d && p.width && o && p.time === et.time && !p.uncache ? L(n / p.width * _) : ((d || s === "%") && !jn[ct(l, "display")] && (a.position = ct(t, "position")), l === t && (a.position = "static"), l.appendChild(Ft), m = Ft[h], l.removeChild(Ft), a.position = "absolute", o && d && (p = Lt(l), p.time = et.time, p.width = l[h]), L(c ? m * n / _ : m && n ? _ / m * n : 0))));
}, gt = function(t, e, i, r) {
  var n;
  return ci || Ze(), e in _t && e !== "transform" && (e = _t[e], ~e.indexOf(",") && (e = e.split(",")[0])), xt[e] && e !== "transform" ? (n = _e(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Se(ct(t, ht)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Pe[e] && Pe[e](t, e, i) || ct(t, e) || Wi(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ot(t, e, n, i) + i : n;
}, Zn = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Jt(e, t, 1), s = n && ct(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = ct(t, "borderTopColor"));
  }
  var a = new Z(this._pt, t.style, e, 0, 1, Tr), o = 0, f = 0, h, _, c, d, m, l, p, g, y, x, T, v;
  if (a.b = i, a.e = r, i += "", r += "", r === "auto" && (t.style[e] = r, r = ct(t, e) || r, t.style[e] = i), h = [i, r], lr(h), i = h[0], r = h[1], c = i.match(Ut) || [], v = r.match(Ut) || [], v.length) {
    for (; _ = Ut.exec(r); )
      p = _[0], y = r.substring(o, _.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), p !== (l = c[f++] || "") && (d = parseFloat(l) || 0, T = l.substr((d + "").length), p.charAt(1) === "=" && (p = qt(d, p) + T), g = parseFloat(p), x = p.substr((g + "").length), o = Ut.lastIndex - x.length, x || (x = x || it.units[e] || T, o === r.length && (r += x, a.e += x)), T !== x && (d = Ot(t, e, l, x) || 0), a._pt = {
        _next: a._pt,
        p: y || f === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: g - d,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = o < r.length ? r.substring(o, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? Sr : Pr;
  return Vi.test(r) && (a.e = 0), this._pt = a, a;
}, Ri = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Jn = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Ri[i] || i, e[1] = Ri[r] || r, e.join(" ");
}, ts = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o, f;
    if (n === "all" || n === !0)
      r.cssText = "", o = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        a = n[f], xt[a] && (o = 1, a = a === "transformOrigin" ? ht : R), he(i, a);
    o && (he(i, R), s && (s.svg && i.removeAttribute("transform"), _e(i, 1), s.uncache = 1, Or(r)));
  }
}, Pe = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new Z(t._pt, e, i, 0, 0, ts);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, le = [1, 0, 0, 1, 0, 0], Er = {}, Ar = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, zi = function(t) {
  var e = ct(t, R);
  return Ar(e) ? le : e.substr(7).match(Ni).map(L);
}, mi = function(t, e) {
  var i = t._gsap || Lt(t), r = t.style, n = zi(t), s, a, o, f;
  return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? le : n) : (n === le && !t.offsetParent && t !== Gt && !i.svg && (o = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (f = 1, a = t.nextElementSibling, Gt.appendChild(t)), n = zi(t), o ? r.display = o : he(t, "display"), f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Gt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Je = function(t, e, i, r, n, s) {
  var a = t._gsap, o = n || mi(t, !0), f = a.xOrigin || 0, h = a.yOrigin || 0, _ = a.xOffset || 0, c = a.yOffset || 0, d = o[0], m = o[1], l = o[2], p = o[3], g = o[4], y = o[5], x = e.split(" "), T = parseFloat(x[0]) || 0, v = parseFloat(x[1]) || 0, S, P, b, w;
  i ? o !== le && (P = d * p - m * l) && (b = T * (p / P) + v * (-l / P) + (l * y - p * g) / P, w = T * (-m / P) + v * (d / P) - (d * y - m * g) / P, T = b, v = w) : (S = Mr(t), T = S.x + (~x[0].indexOf("%") ? T / 100 * S.width : T), v = S.y + (~(x[1] || x[0]).indexOf("%") ? v / 100 * S.height : v)), r || r !== !1 && a.smooth ? (g = T - f, y = v - h, a.xOffset = _ + (g * d + y * l) - g, a.yOffset = c + (g * m + y * p) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = v, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[ht] = "0px 0px", s && (wt(s, a, "xOrigin", f, T), wt(s, a, "yOrigin", h, v), wt(s, a, "xOffset", _, a.xOffset), wt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + v);
}, _e = function(t, e) {
  var i = t._gsap || new pr(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), f = ct(t, ht) || "0", h, _, c, d, m, l, p, g, y, x, T, v, S, P, b, w, k, C, z, B, I, E, Y, N, $, Ct, Mt, te, Dt, gi, pt, Et;
  return h = _ = c = l = p = g = y = x = T = 0, d = m = 1, i.svg = !!(t.getCTM && Dr(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[R] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[R] !== "none" ? o[R] : "")), r.scale = r.rotate = r.translate = "none"), P = mi(t, i.svg), i.svg && (i.uncache ? ($ = t.getBBox(), f = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px", N = "") : N = !e && t.getAttribute("data-svg-origin"), Je(t, N || f, !!N || i.originIsAbsolute, i.smooth !== !1, P)), v = i.xOrigin || 0, S = i.yOrigin || 0, P !== le && (C = P[0], z = P[1], B = P[2], I = P[3], h = E = P[4], _ = Y = P[5], P.length === 6 ? (d = Math.sqrt(C * C + z * z), m = Math.sqrt(I * I + B * B), l = C || z ? Yt(z, C) * zt : 0, y = B || I ? Yt(B, I) * zt + l : 0, y && (m *= Math.abs(Math.cos(y * Wt))), i.svg && (h -= v - (v * C + S * B), _ -= S - (v * z + S * I))) : (Et = P[6], gi = P[7], Mt = P[8], te = P[9], Dt = P[10], pt = P[11], h = P[12], _ = P[13], c = P[14], b = Yt(Et, Dt), p = b * zt, b && (w = Math.cos(-b), k = Math.sin(-b), N = E * w + Mt * k, $ = Y * w + te * k, Ct = Et * w + Dt * k, Mt = E * -k + Mt * w, te = Y * -k + te * w, Dt = Et * -k + Dt * w, pt = gi * -k + pt * w, E = N, Y = $, Et = Ct), b = Yt(-B, Dt), g = b * zt, b && (w = Math.cos(-b), k = Math.sin(-b), N = C * w - Mt * k, $ = z * w - te * k, Ct = B * w - Dt * k, pt = I * k + pt * w, C = N, z = $, B = Ct), b = Yt(z, C), l = b * zt, b && (w = Math.cos(b), k = Math.sin(b), N = C * w + z * k, $ = E * w + Y * k, z = z * w - C * k, Y = Y * w - E * k, C = N, E = $), p && Math.abs(p) + Math.abs(l) > 359.9 && (p = l = 0, g = 180 - g), d = L(Math.sqrt(C * C + z * z + B * B)), m = L(Math.sqrt(Y * Y + Et * Et)), b = Yt(E, Y), y = Math.abs(b) > 2e-4 ? b * zt : 0, T = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (N = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Ar(ct(t, R)), N && t.setAttribute("transform", N))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = _ - ((i.yPercent = _ && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = L(d), i.scaleY = L(m), i.rotation = L(l) + a, i.rotationX = L(p) + a, i.rotationY = L(g) + a, i.skewX = y + a, i.skewY = x + a, i.transformPerspective = T + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || 0) && (r[ht] = Se(f)), i.xOffset = i.yOffset = 0, i.force3D = it.force3D, i.renderTransform = i.svg ? is : Cr ? Rr : es, i.uncache = 0, i;
}, Se = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ie = function(t, e, i) {
  var r = G(e);
  return L(parseFloat(e) + parseFloat(Ot(t, "x", i + "px", r))) + r;
}, es = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rr(t, e);
}, At = "0deg", ee = "0px", Rt = ") ", Rr = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.z, f = i.rotation, h = i.rotationY, _ = i.rotationX, c = i.skewX, d = i.skewY, m = i.scaleX, l = i.scaleY, p = i.transformPerspective, g = i.force3D, y = i.target, x = i.zOrigin, T = "", v = g === "auto" && t && t !== 1 || g === !0;
  if (x && (_ !== At || h !== At)) {
    var S = parseFloat(h) * Wt, P = Math.sin(S), b = Math.cos(S), w;
    S = parseFloat(_) * Wt, w = Math.cos(S), s = Ie(y, s, P * w * -x), a = Ie(y, a, -Math.sin(S) * -x), o = Ie(y, o, b * w * -x + x);
  }
  p !== ee && (T += "perspective(" + p + Rt), (r || n) && (T += "translate(" + r + "%, " + n + "%) "), (v || s !== ee || a !== ee || o !== ee) && (T += o !== ee || v ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Rt), f !== At && (T += "rotate(" + f + Rt), h !== At && (T += "rotateY(" + h + Rt), _ !== At && (T += "rotateX(" + _ + Rt), (c !== At || d !== At) && (T += "skew(" + c + ", " + d + Rt), (m !== 1 || l !== 1) && (T += "scale(" + m + ", " + l + Rt), y.style[R] = T || "translate(0, 0)";
}, is = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.rotation, f = i.skewX, h = i.skewY, _ = i.scaleX, c = i.scaleY, d = i.target, m = i.xOrigin, l = i.yOrigin, p = i.xOffset, g = i.yOffset, y = i.forceCSS, x = parseFloat(s), T = parseFloat(a), v, S, P, b, w;
  o = parseFloat(o), f = parseFloat(f), h = parseFloat(h), h && (h = parseFloat(h), f += h, o += h), o || f ? (o *= Wt, f *= Wt, v = Math.cos(o) * _, S = Math.sin(o) * _, P = Math.sin(o - f) * -c, b = Math.cos(o - f) * c, f && (h *= Wt, w = Math.tan(f - h), w = Math.sqrt(1 + w * w), P *= w, b *= w, h && (w = Math.tan(h), w = Math.sqrt(1 + w * w), v *= w, S *= w)), v = L(v), S = L(S), P = L(P), b = L(b)) : (v = _, b = c, S = P = 0), (x && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (x = Ot(d, "x", s, "px"), T = Ot(d, "y", a, "px")), (m || l || p || g) && (x = L(x + m - (m * v + l * P) + p), T = L(T + l - (m * S + l * b) + g)), (r || n) && (w = d.getBBox(), x = L(x + r / 100 * w.width), T = L(T + n / 100 * w.height)), w = "matrix(" + v + "," + S + "," + P + "," + b + "," + x + "," + T + ")", d.setAttribute("transform", w), y && (d.style[R] = w);
}, rs = function(t, e, i, r, n) {
  var s = 360, a = X(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? zt : 1), f = o - r, h = r + f + "deg", _, c;
  return a && (_ = n.split("_")[1], _ === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), _ === "cw" && f < 0 ? f = (f + s * Mi) % s - ~~(f / s) * s : _ === "ccw" && f > 0 && (f = (f - s * Mi) % s - ~~(f / s) * s)), t._pt = c = new Z(t._pt, e, i, r, f, Vn), c.e = h, c.u = "deg", t._props.push(i), c;
}, Fi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, ns = function(t, e, i) {
  var r = Fi({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, o, f, h, _, c, d, m;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[R] = e, a = _e(i, 1), he(i, R), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[R], s[R] = e, a = _e(i, 1), s[R] = f);
  for (o in xt)
    f = r[o], h = a[o], f !== h && n.indexOf(o) < 0 && (d = G(f), m = G(h), _ = d !== m ? Ot(i, o, f, m) : parseFloat(f), c = parseFloat(h), t._pt = new Z(t._pt, a, o, _, c - _, Qe), t._pt.u = m || 0, t._props.push(o));
  Fi(a, r);
};
j("padding,margin,Width,Radius", function(u, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
    return t < 2 ? u + a : "border" + a + u;
  });
  Pe[t > 1 ? "border" + u : u] = function(a, o, f, h, _) {
    var c, d;
    if (arguments.length < 4)
      return c = s.map(function(m) {
        return gt(a, m, f);
      }), d = c.join(" "), d.split(c[0]).length === 5 ? c[0] : d;
    c = (h + "").split(" "), d = {}, s.forEach(function(m, l) {
      return d[m] = c[l] = c[l] || c[(l - 1) / 2 | 0];
    }), a.init(o, d, _);
  };
});
var zr = {
  name: "css",
  register: Ze,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, a = t.style, o = i.vars.startAt, f, h, _, c, d, m, l, p, g, y, x, T, v, S, P, b;
    ci || Ze(), this.styles = this.styles || kr(t), b = this.styles.props, this.tween = i;
    for (l in e)
      if (l !== "autoRound" && (h = e[l], !(tt[l] && mr(l, e, i, r, t, n)))) {
        if (d = typeof h, m = Pe[l], d === "function" && (h = h.call(i, r, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = ue(h)), m)
          m(this, t, l, h, i) && (P = 1);
        else if (l.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(l) + "").trim(), h += "", Pt.lastIndex = 0, Pt.test(f) || (p = G(f), g = G(h)), g ? p !== g && (f = Ot(t, l, f, g) + g) : p && (h += p), this.add(a, "setProperty", f, h, r, n, 0, 0, l), s.push(l), b.push(l, 0, a[l]);
        else if (d !== "undefined") {
          if (o && l in o ? (f = typeof o[l] == "function" ? o[l].call(i, r, t, n) : o[l], X(f) && ~f.indexOf("random(") && (f = ue(f)), G(f + "") || (f += it.units[l] || G(gt(t, l)) || ""), (f + "").charAt(1) === "=" && (f = gt(t, l))) : f = gt(t, l), c = parseFloat(f), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), _ = parseFloat(h), l in _t && (l === "autoAlpha" && (c === 1 && gt(t, "visibility") === "hidden" && _ && (c = 0), b.push("visibility", 0, a.visibility), wt(this, a, "visibility", c ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), l !== "scale" && l !== "transform" && (l = _t[l], ~l.indexOf(",") && (l = l.split(",")[0]))), x = l in xt, x) {
            if (this.styles.save(l), T || (v = t._gsap, v.renderTransform && !e.parseTransform || _e(t, e.parseTransform), S = e.smoothOrigin !== !1 && v.smooth, T = this._pt = new Z(this._pt, a, R, 0, 1, v.renderTransform, v, 0, -1), T.dep = 1), l === "scale")
              this._pt = new Z(this._pt, v, "scaleY", v.scaleY, (y ? qt(v.scaleY, y + _) : _) - v.scaleY || 0, Qe), this._pt.u = 0, s.push("scaleY", l), l += "X";
            else if (l === "transformOrigin") {
              b.push(ht, 0, a[ht]), h = Jn(h), v.svg ? Je(t, h, 0, S, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0, g !== v.zOrigin && wt(this, v, "zOrigin", v.zOrigin, g), wt(this, a, l, Se(f), Se(h)));
              continue;
            } else if (l === "svgOrigin") {
              Je(t, h, 1, S, 0, this);
              continue;
            } else if (l in Er) {
              rs(this, v, l, c, y ? qt(c, y + h) : h);
              continue;
            } else if (l === "smoothOrigin") {
              wt(this, v, "smooth", v.smooth, h);
              continue;
            } else if (l === "force3D") {
              v[l] = h;
              continue;
            } else if (l === "transform") {
              ns(this, h, t);
              continue;
            }
          } else
            l in a || (l = Jt(l) || l);
          if (x || (_ || _ === 0) && (c || c === 0) && !Nn.test(h) && l in a)
            p = (f + "").substr((c + "").length), _ || (_ = 0), g = G(h) || (l in it.units ? it.units[l] : p), p !== g && (c = Ot(t, l, f, g)), this._pt = new Z(this._pt, x ? v : a, l, c, (y ? qt(c, y + _) : _) - c, !x && (g === "px" || l === "zIndex") && e.autoRound !== !1 ? Un : Qe), this._pt.u = g || 0, p !== g && g !== "%" && (this._pt.b = f, this._pt.r = Yn);
          else if (l in a)
            Zn.call(this, t, l, f, y ? y + h : h);
          else if (l in t)
            this.add(t, l, f || t[l], y ? y + h : h, r, n);
          else if (l !== "parseTransform") {
            ni(l, h);
            continue;
          }
          x || (l in a ? b.push(l, 0, a[l]) : b.push(l, 1, f || t[l])), s.push(l);
        }
      }
    P && wr(this);
  },
  render: function(t, e) {
    if (e.tween._time || !di())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: gt,
  aliases: _t,
  getSetter: function(t, e, i) {
    var r = _t[e];
    return r && r.indexOf(",") < 0 && (e = r), e in xt && e !== ht && (t._gsap.x || gt(t, "x")) ? i && Ci === i ? e === "scale" ? Wn : Gn : (Ci = i || {}) && (e === "scale" ? Hn : $n) : t.style && !ei(t.style[e]) ? Xn : ~e.indexOf("-") ? qn : li(t, e);
  },
  core: {
    _removeProperty: he,
    _getMatrix: mi
  }
};
J.utils.checkPrefix = Jt;
J.core.getStyleSaver = kr;
(function(u, t, e, i) {
  var r = j(u + "," + t + "," + e, function(n) {
    xt[n] = 1;
  });
  j(t, function(n) {
    it.units[n] = "deg", Er[n] = 1;
  }), _t[r[13]] = u + "," + t, j(i, function(n) {
    var s = n.split(":");
    _t[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
j("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
  it.units[u] = "px";
});
J.registerPlugin(zr);
var Fr = J.registerPlugin(zr) || J;
Fr.core.Tween;
function ss(u, t) {
  const e = yi();
  let i = 0, r = yi(!1);
  const n = Lr({ x: 0, y: 0 }), s = { x: 0, y: 0 }, a = { left: 0, right: 0, top: 0, bottom: 0 }, o = (p) => p instanceof TouchEvent ? p.changedTouches[0] : p, f = (p) => {
    var y;
    if (u.disable)
      return;
    const g = o(p);
    (p.target === e.value || p.target === ((y = e.value) == null ? void 0 : y.parentElement) || p.target === u.eventProcessEl) && (n.x = g.pageX - s.x, n.y = g.pageY - s.y, r.value = !0, t("change", _(g)));
  }, h = (p) => {
    if (!r.value)
      return;
    const g = o(p);
    if (console.log(g.pageX, g.pageY, a), g.pageX < a.left || g.pageX > a.right || g.pageY < a.top || g.pageY > a.bottom) {
      console.log("out area"), d(g);
      return;
    }
    const y = g.pageX - s.x, x = g.pageY - s.y, T = Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2));
    T > i ? (n.x = y / (T / i), n.y = x / (T / i)) : (n.x = y, n.y = x), t("change", _(g)), p.preventDefault();
  }, _ = (p) => ({ radius: i, offsetByOriginX: n.x, offsetByOriginY: n.y, pageX: p.pageX, pageY: p.pageY }), c = (p) => {
    if (!r.value)
      return;
    const g = o(p);
    d(g);
  }, d = (p) => {
    r.value = !1, Fr.to(n, {
      x: 0,
      y: 0,
      duration: 0.2,
      onUpdate() {
        t("change", _(p));
      },
      onComplete() {
        t("change", _(p));
      }
    });
  }, m = () => {
    const p = e.value.getBoundingClientRect();
    if (s.x = p.x + p.width / 2, s.y = p.y + p.height / 2, u.eventProcessEl === window)
      a.left = 0, a.top = 0, a.right = window.innerWidth, a.bottom = window.innerHeight;
    else {
      const x = u.eventProcessEl.getBoundingClientRect();
      a.left = x.left, a.top = x.top, a.bottom = x.bottom, a.right = x.right;
    }
    const g = e.value.parentElement.getBoundingClientRect();
    i = Math.min(g.width, g.height) / 2;
  };
  Br(() => {
    m();
  });
  function l(p, g) {
    p instanceof HTMLElement || (p = window);
    let y = g ? "addEventListener" : "removeEventListener", x = {};
    g && (x.passive = !1), p.addEventListener, p[y]("touchstart", f, x), p[y]("mousedown", f, x), p[y]("touchmove", h, x), p[y]("mousemove", h, x), p[y]("touchend", c, x), p[y]("mouseup", c, x);
  }
  return Ir(() => u.eventProcessEl, (p, g) => {
    m();
  }), l(window, !0), Nr(() => {
    l(window, !1);
  }), window.addEventListener("resize", () => {
    m();
  }), window.addEventListener("load", () => {
    m();
  }), {
    btnElPosition: n,
    controlBtnEl: e,
    isDraging: r
  };
}
const as = /* @__PURE__ */ Vr({
  __name: "HandleControl",
  props: {
    eventProcessEl: { default: () => window },
    disable: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(u, { emit: t }) {
    const e = u, {
      btnElPosition: i,
      controlBtnEl: r,
      isDraging: n
    } = ss(e, t);
    return (s, a) => (Yr(), Ur("div", {
      class: xi(["handle-control-wrap", { "handle-disable": s.disable }])
    }, [
      Xr("div", {
        class: xi(["h-c-btn", { "h-c-btn-wc": Me(n) }]),
        ref_key: "controlBtnEl",
        ref: r,
        style: qr({ left: Me(i).x + "px", top: Me(i).y + "px" })
      }, null, 6)
    ], 2));
  }
});
const os = (u, t) => {
  const e = u.__vccOpts || u;
  for (const [i, r] of t)
    e[i] = r;
  return e;
}, fs = /* @__PURE__ */ os(as, [["__scopeId", "data-v-c0180f40"]]);
export {
  fs as HandleControl
};
