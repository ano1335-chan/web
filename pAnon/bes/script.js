"use strict";

require("core-js/modules/es6.array.slice.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.function.name.js");

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es6.array.from.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

require("core-js/modules/es6.regexp.match.js");

require("core-js/modules/es6.regexp.replace.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

geDeviceType = {
  PC: Math.pow(2, 0),
  Tab: Math.pow(2, 1),
  SP: Math.pow(2, 2)
};

Get_DeviceType = function Get_DeviceType() {
  var res;
  var ua = navigator.userAgent;

  if (ua.match(/(iPhone|iPod|Android.*Mobile)/i)) {
    res = geDeviceType.SP;
  } else if (ua.match(/iPad|Android|Silk|Kindle/i)) {
    res = geDeviceType.Tab;
  } else {
    res = geDeviceType.PC;
  }

  return res;
};

Check_DeviceType = function Check_DeviceType(cdt) {
  if (!cdt) {
    throw new Error('Error: Invalid value for "Check_DeviceType()" parameter.');
  }

  var gdt = Get_DeviceType();
  var res = 0 < (gdt & cdt);
  return res;
};

RubyEncoder = function RubyEncoder() {
  var d1wSource = document.getElementsByName("nmSource"); // rep = document.getElementById("nmSource").value;

  var d1wDisplay = document.getElementsByName("nmDisplay"); // console.log(str);

  for (var i = 0; i < d1wSource.length; i++) {
    console.log("i: ".concat(i));
    var rep = d1wSource[i].value;
    rep = rep.replace(/^ +/g, '').replace(/ +$/g, '').replace(/\u30FB/g, '･').replace(/\uFF08/g, '(').replace(/\uFF09/g, ')').replace(/\u201D/g, '"').replace(/\u2019/g, "'").replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    }).replace(/([^・･ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝=←↑→＊\*／\/※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）\(\)”’\"\'][^ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝=←↑→＊\*／\/※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）\(\)”’\"\']*)[（\(]([ぁ-ゖァ-ヶー・･]+)[）\)]/g, '<ruby><rb>$1</rb><rp>(</rp><rt>$2</rt><rp>)</rp></ruby>') // .replace(/([^ ぁ-ゖァ-ヶＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝←↑→＊※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）()”’\"\']+)[（(]([ぁ-ゖァ-ヶ・･]+) ?([ぁ-ゖァ-ヶ・･]*?)[）)]/gs,
    // '<ruby><rb>$1</rb><rp>(</rp><rt>$2$3</rt><rp>)</rp></ruby>')
    .replace(/ *(\r\n|\n|\r|\n)/g, '<br>\n');
    d1wDisplay[i].innerHTML = rep; // d1wSource[i].value = "";
    // [・][^ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＜＞（）”’]+（[ぁ-ゖァ-ヶー]+）
  } // console.log(rep);

};

var dtpc = Check_DeviceType(geDeviceType.PC); // 複数･条件をチェックしたい場合は論理和「||(OR)」で演算すれば良い。
// 「|(OR)」だとビット論理和になってしまうので要注意。

var dtmv = Check_DeviceType(geDeviceType.Tab) || Check_DeviceType(geDeviceType.SP);
console.log("dtpc: ".concat(dtpc));
console.log("dtmv: ".concat(dtmv));
var a1wRemark_PC = document.getElementsByClassName("Remark_PC");
var a1wRemark_Mobile = document.getElementsByClassName("Remark_Mobile");
console.log("a1wRemark_PC.length: ".concat(a1wRemark_PC.length));
console.log(a1wRemark_PC);

var _iterator = _createForOfIteratorHelper(a1wRemark_PC),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var rm = _step.value;

    if (!dtpc) {
      rm.style.display = 'none';
    } else {
      rm.style.display = 'block';
    }

    console.log("rm.style.display: ".concat(rm.style.display));
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(a1wRemark_Mobile),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _rm = _step2.value;

    if (dtpc) {
      _rm.style.display = 'none';
    } else {
      _rm.style.display = 'block';
    }

    console.log("rm.style.display: ".concat(_rm.style.display));
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

RubyEncoder();