import { R as React2, d as clsx, r as reactExports, e as useHealthStore, h as useEmergencyStore, f as useMedicineStore, g as generate24hVitals, j as jsxRuntimeExports, S as Skeleton, n as mockMedicines } from "./index-D1My1Djg.js";
import { A as AppLayout, d as Avatar, e as AvatarFallback, B as Badge, b as Clock, T as TriangleAlert, M as MapPin, f as Phone, P as Pill, X } from "./AppLayout-A3oTh0KX.js";
import { m as motion, H as Heart, B as Button } from "./proxy-CjookoZg.js";
import { U as User } from "./user-CzBdarbj.js";
import { S as Shield } from "./shield-CXbbi-B_.js";
import { W as Wind } from "./wind-DlVqBmNU.js";
import { T as TrendingUp } from "./trending-up-D74MSc9J.js";
import { A as Activity } from "./activity-Wrxa32qX.js";
import { A as AnimatePresence } from "./index-CXVWI1BC.js";
import { C as CircleCheck } from "./circle-check-BYTRUGAh.js";
import { g as isFunction, D as Dot, q as findAllByType, E as ErrorBar, L as Layer, f as filterProps, C as Curve, A as Animate, a as interpolateNumber, d as isEqual, b as isNil, h as hasClipDot, e as LabelList, j as getValueByDataKey, u as uniqueId, G as Global, k as getCateCoordinateOfLine, l as generateCategoricalChart, X as XAxis, Y as YAxis, n as formatAxisMap, R as ResponsiveContainer, o as CartesianGrid, T as Tooltip, B as Bar } from "./generateCategoricalChart-B-5iyfkv.js";
import { B as BarChart } from "./BarChart-C75_a5qY.js";
import { B as Bell } from "./users-A7LrIhw3.js";
import { B as BellOff } from "./bell-off--dhc1wOm.js";
var _excluded = ["type", "layout", "connectNulls", "ref"], _excluded2 = ["key"];
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Line = /* @__PURE__ */ function(_PureComponent) {
  function Line2() {
    var _this;
    _classCallCheck(this, Line2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Line2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: true,
      totalLength: 0
    });
    _defineProperty(_this, "generateSimpleStrokeDasharray", function(totalLength, length) {
      return "".concat(length, "px ").concat(totalLength - length, "px");
    });
    _defineProperty(_this, "getStrokeDasharray", function(length, totalLength, lines) {
      var lineLength = lines.reduce(function(pre, next) {
        return pre + next;
      });
      if (!lineLength) {
        return _this.generateSimpleStrokeDasharray(totalLength, length);
      }
      var count = Math.floor(length / lineLength);
      var remainLength = length % lineLength;
      var restLength = totalLength - length;
      var remainLines = [];
      for (var i = 0, sum = 0; i < lines.length; sum += lines[i], ++i) {
        if (sum + lines[i] > remainLength) {
          remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [remainLength - sum]);
          break;
        }
      }
      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
      return [].concat(_toConsumableArray(Line2.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function(line) {
        return "".concat(line, "px");
      }).join(", ");
    });
    _defineProperty(_this, "id", uniqueId("recharts-line-"));
    _defineProperty(_this, "pathRef", function(node) {
      _this.mainCurve = node;
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      _this.setState({
        isAnimationFinished: true
      });
      if (_this.props.onAnimationEnd) {
        _this.props.onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      _this.setState({
        isAnimationFinished: false
      });
      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(Line2, _PureComponent);
  return _createClass(Line2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      this.setState({
        totalLength
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      if (totalLength !== this.state.totalLength) {
        this.setState({
          totalLength
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      var curveDom = this.mainCurve;
      try {
        return curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
      } catch (err) {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar(needClip, clipPathId) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, points = _this$props.points, xAxis = _this$props.xAxis, yAxis = _this$props.yAxis, layout = _this$props.layout, children = _this$props.children;
      var errorBarItems = findAllByType(children, ErrorBar);
      if (!errorBarItems) {
        return null;
      }
      var dataPointFormatter = function dataPointFormatter2(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint.payload, dataKey)
        };
      };
      var errorBarProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ React2.createElement(Layer, errorBarProps, errorBarItems.map(function(item) {
        return /* @__PURE__ */ React2.cloneElement(item, {
          key: "bar-".concat(item.props.dataKey),
          data: points,
          xAxis,
          yAxis,
          layout,
          dataPointFormatter
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props2 = this.props, dot = _this$props2.dot, points = _this$props2.points, dataKey = _this$props2.dataKey;
      var lineProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, lineProps), customDotProps), {}, {
          index: i,
          cx: entry.x,
          cy: entry.y,
          value: entry.value,
          dataKey,
          payload: entry.payload,
          points
        });
        return Line2.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ React2.createElement(Layer, _extends({
        className: "recharts-line-dots",
        key: "dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderCurveStatically",
    value: function renderCurveStatically(points, needClip, clipPathId, props) {
      var _this$props3 = this.props, type = _this$props3.type, layout = _this$props3.layout, connectNulls = _this$props3.connectNulls;
      _this$props3.ref;
      var others = _objectWithoutProperties(_this$props3, _excluded);
      var curveProps = _objectSpread(_objectSpread(_objectSpread({}, filterProps(others, true)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null,
        points
      }, props), {}, {
        type,
        layout,
        connectNulls
      });
      return /* @__PURE__ */ React2.createElement(Curve, _extends({}, curveProps, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function renderCurveWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props4 = this.props, points = _this$props4.points, strokeDasharray = _this$props4.strokeDasharray, isAnimationActive = _this$props4.isAnimationActive, animationBegin = _this$props4.animationBegin, animationDuration = _this$props4.animationDuration, animationEasing = _this$props4.animationEasing, animationId = _this$props4.animationId, animateNewValues = _this$props4.animateNewValues, width = _this$props4.width, height = _this$props4.height;
      var _this$state = this.state, prevPoints = _this$state.prevPoints, totalLength = _this$state.totalLength;
      return /* @__PURE__ */ React2.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepData = points.map(function(entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = interpolateNumber(prev.x, entry.x);
              var interpolatorY = interpolateNumber(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }
            if (animateNewValues) {
              var _interpolatorX = interpolateNumber(width * 2, entry.x);
              var _interpolatorY = interpolateNumber(height / 2, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: entry.x,
              y: entry.y
            });
          });
          return _this2.renderCurveStatically(stepData, needClip, clipPathId);
        }
        var interpolator = interpolateNumber(0, totalLength);
        var curLength = interpolator(t);
        var currentStrokeDasharray;
        if (strokeDasharray) {
          var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map(function(num) {
            return parseFloat(num);
          });
          currentStrokeDasharray = _this2.getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = _this2.generateSimpleStrokeDasharray(totalLength, curLength);
        }
        return _this2.renderCurveStatically(points, needClip, clipPathId, {
          strokeDasharray: currentStrokeDasharray
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function renderCurve(needClip, clipPathId) {
      var _this$props5 = this.props, points = _this$props5.points, isAnimationActive = _this$props5.isAnimationActive;
      var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual(prevPoints, points))) {
        return this.renderCurveWithAnimation(needClip, clipPathId);
      }
      return this.renderCurveStatically(points, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props6 = this.props, hide = _this$props6.hide, dot = _this$props6.dot, points = _this$props6.points, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, top = _this$props6.top, left = _this$props6.left, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, id = _this$props6.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = clsx("recharts-line", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil(id) ? this.id : id;
      var _ref2 = (_filterProps = filterProps(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
        r: 3,
        strokeWidth: 2
      }, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 3 : _ref2$r, _ref2$strokeWidth = _ref2.strokeWidth, strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
      var _ref3 = hasClipDot(dot) ? dot : {}, _ref3$clipDot = _ref3.clipDot, clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
      var dotSize = r * 2 + strokeWidth;
      return /* @__PURE__ */ React2.createElement(Layer, {
        className: layerClass
      }, needClipX || needClipY ? /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ React2.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), !clipDot && /* @__PURE__ */ React2.createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /* @__PURE__ */ React2.createElement("rect", {
        x: left - dotSize / 2,
        y: top - dotSize / 2,
        width: width + dotSize,
        height: height + dotSize
      }))) : null, !hasSinglePoint && this.renderCurve(needClip, clipPathId), this.renderErrorBar(needClip, clipPathId), (hasSinglePoint || dot) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }, {
    key: "repeat",
    value: function repeat(lines, count) {
      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [0]) : lines;
      var result = [];
      for (var i = 0; i < count; ++i) {
        result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
      }
      return result;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;
      if (/* @__PURE__ */ React2.isValidElement(option)) {
        dotItem = /* @__PURE__ */ React2.cloneElement(option, props);
      } else if (isFunction(option)) {
        dotItem = option(props);
      } else {
        var key = props.key, dotProps = _objectWithoutProperties(props, _excluded2);
        var className = clsx("recharts-line-dot", typeof option !== "boolean" ? option.className : "");
        dotItem = /* @__PURE__ */ React2.createElement(Dot, _extends({
          key
        }, dotProps, {
          className
        }));
      }
      return dotItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty(Line, "displayName", "Line");
_defineProperty(Line, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: false,
  activeDot: true,
  dot: true,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Global.isSsr,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: false,
  label: false
});
_defineProperty(Line, "getComposedData", function(_ref4) {
  var props = _ref4.props, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, dataKey = _ref4.dataKey, bandSize = _ref4.bandSize, displayedData = _ref4.displayedData, offset = _ref4.offset;
  var layout = props.layout;
  var points = displayedData.map(function(entry, index) {
    var value = getValueByDataKey(entry, dataKey);
    if (layout === "horizontal") {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: isNil(value) ? null : yAxis.scale(value),
        value,
        payload: entry
      };
    }
    return {
      x: isNil(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        entry,
        index
      }),
      value,
      payload: entry
    };
  });
  return _objectSpread({
    points,
    layout
  }, offset);
});
var LineChart = generateCategoricalChart({
  chartName: "LineChart",
  GraphicalChild: Line,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
const TODAY_TIMELINE = [
  {
    id: "t1",
    time: "7:30 AM",
    label: "Woke up — good morning routine",
    icon: "wake"
  },
  {
    id: "t2",
    time: "8:00 AM",
    label: "Took Blood Pressure Medicine (Lisinopril 10mg)",
    icon: "medicine"
  },
  {
    id: "t3",
    time: "8:15 AM",
    label: "Completed morning walk — 12 min",
    icon: "check"
  },
  {
    id: "t4",
    time: "9:10 AM",
    label: "Took Vitamin D3 supplement",
    icon: "medicine"
  },
  {
    id: "t5",
    time: "10:23 AM",
    label: "Heart rate elevated alert triggered (HR 118)",
    icon: "alert"
  },
  {
    id: "t6",
    time: "12:00 PM",
    label: "Medication reminder sent — Metformin 500mg",
    icon: "reminder"
  },
  {
    id: "t7",
    time: "1:05 PM",
    label: "Took Metformin — afternoon dose confirmed",
    icon: "medicine"
  },
  {
    id: "t8",
    time: "2:30 PM",
    label: "Wellness check — all vitals normal",
    icon: "check"
  }
];
const INITIAL_NOTIFICATIONS = [
  {
    id: "n1",
    type: "medicine",
    message: "Lisinopril 20:00 dose overdue — not taken yet",
    timestamp: "2026-05-08T20:15:00",
    read: false
  },
  {
    id: "n2",
    type: "emergency",
    message: "Emergency resolved — High Heart Rate at 14:23",
    timestamp: "2026-05-07T14:30:00",
    read: false
  },
  {
    id: "n3",
    type: "wellness",
    message: "Weekly wellness check due — Friday 6:00 PM",
    timestamp: "2026-05-08T18:00:00",
    read: false
  },
  {
    id: "n4",
    type: "medicine",
    message: "Metformin 19:00 dose reminder sent to Martha",
    timestamp: "2026-05-08T19:00:00",
    read: false
  },
  {
    id: "n5",
    type: "wellness",
    message: "Sleep quality below average this week (6.2 hrs avg)",
    timestamp: "2026-05-08T07:00:00",
    read: true
  }
];
const ADHERENCE_7DAY = [
  { day: "Mon", adherence: 83 },
  { day: "Tue", adherence: 100 },
  { day: "Wed", adherence: 67 },
  { day: "Thu", adherence: 100 },
  { day: "Fri", adherence: 83 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 50 }
];
const WELLNESS_7DAY = [
  { day: "Mon", score: 78 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 85 },
  { day: "Fri", score: 80 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 84 }
];
function StatusBadge({
  value
}) {
  if (value === "emergency")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-destructive/20 text-destructive border border-destructive/40 animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 mr-1" }),
      " Emergency"
    ] });
  if (value === "attention")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 mr-1" }),
      " Attention Needed"
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1" }),
    " All Clear"
  ] });
}
function VitalCard({
  icon: Icon,
  label,
  value,
  unit,
  color,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "glass rounded-2xl p-4 flex flex-col gap-2 min-w-0",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-8 h-8 rounded-lg flex items-center justify-center ${color}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold font-display text-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground mb-0.5", children: unit })
        ] }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: sub })
      ]
    }
  );
}
const timelineIconMap = {
  wake: Activity,
  medicine: Pill,
  alert: TriangleAlert,
  reminder: Bell,
  check: CircleCheck
};
const timelineColorMap = {
  wake: "bg-primary/15 text-primary",
  medicine: "bg-secondary/15 text-secondary",
  alert: "bg-destructive/15 text-destructive",
  reminder: "bg-accent/15 text-accent",
  check: "bg-emerald-500/15 text-emerald-500"
};
function Caregiver() {
  const {
    heartRate,
    oxygenLevel,
    bloodPressure,
    activityStatus,
    wellnessScore,
    startSimulation
  } = useHealthStore();
  const { isEmergency, emergencyType, emergencyLog, cancelEmergency } = useEmergencyStore();
  const { reminders, getTodayProgress } = useMedicineStore();
  const [notifications, setNotifications] = reactExports.useState(
    INITIAL_NOTIFICATIONS
  );
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    startSimulation();
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, [startSimulation]);
  const weeklyHR = reactExports.useMemo(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const data = generate24hVitals();
    return days.map((day, i) => ({
      day,
      heartRate: Math.round(data[Math.min(i * 3, data.length - 1)].heartRate),
      oxygen: Math.round(data[Math.min(i * 3, data.length - 1)].oxygen)
    }));
  }, []);
  const progress = getTodayProgress();
  const overdue = reminders.filter((r) => {
    const now = /* @__PURE__ */ new Date();
    const current = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    return !r.taken && r.scheduledTime < current;
  });
  const overallStatus = reactExports.useMemo(() => {
    if (isEmergency) return "emergency";
    if (heartRate > 105 || oxygenLevel < 93 || overdue.length > 1)
      return "attention";
    return "clear";
  }, [isEmergency, heartRate, oxygenLevel, overdue.length]);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const markRead = (id) => setNotifications(
    (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
  );
  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const recentEmergencies = emergencyLog.slice(0, 10);
  const avgHR = Math.round(
    weeklyHR.reduce((a, b) => a + b.heartRate, 0) / weeklyHR.length
  );
  const avgO2 = Math.round(
    weeklyHR.reduce((a, b) => a + b.oxygen, 0) / weeklyHR.length
  );
  const avgWellness = Math.round(
    WELLNESS_7DAY.reduce((a, b) => a + b.score, 0) / WELLNESS_7DAY.length
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "caregiver.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2",
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "h-14 w-14 ring-2 ring-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-lg font-bold bg-primary/15 text-primary font-display", children: "MJ" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-foreground leading-tight", children: "Caregiver Dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }),
                "Monitoring:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Martha Johnson" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 text-xs px-3 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 mr-1.5" }),
              "Last Active: 2 minutes ago"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: overallStatus })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.section,
      {
        "data-ocid": "caregiver.live_status.panel",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-primary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Live Status Monitor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-emerald-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                "Live"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { value: overallStatus })
          ] }),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              "data-ocid": "caregiver.live_status.loading_state",
              children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-2xl" }, i))
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalCard,
              {
                icon: Heart,
                label: "Heart Rate",
                value: heartRate,
                unit: "bpm",
                color: heartRate > 105 ? "bg-destructive/15 text-destructive" : "bg-primary/15 text-primary",
                sub: heartRate > 105 ? "⚠ Elevated" : "Normal range"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalCard,
              {
                icon: Wind,
                label: "Oxygen Level",
                value: oxygenLevel,
                unit: "%",
                color: oxygenLevel < 93 ? "bg-destructive/15 text-destructive" : "bg-emerald-500/15 text-emerald-500",
                sub: oxygenLevel < 93 ? "⚠ Low" : "Healthy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalCard,
              {
                icon: TrendingUp,
                label: "Blood Pressure",
                value: `${bloodPressure.systolic}/${bloodPressure.diastolic}`,
                unit: "mmHg",
                color: bloodPressure.systolic > 140 ? "bg-accent/15 text-accent" : "bg-secondary/15 text-secondary",
                sub: bloodPressure.systolic > 140 ? "⚠ High" : "Controlled"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VitalCard,
              {
                icon: Activity,
                label: "Activity",
                value: activityStatus,
                unit: "",
                color: "bg-chart-5/15 text-chart-5",
                sub: `Wellness: ${wellnessScore}/100`
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.section,
      {
        "data-ocid": "caregiver.emergency.panel",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-2xl border p-5 ${isEmergency ? "bg-destructive/8 border-destructive/40 shadow-[0_0_30px_oklch(var(--destructive)/0.15)]" : "glass-dark border-border/20"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TriangleAlert,
                  {
                    className: `h-5 w-5 ${isEmergency ? "text-destructive animate-bounce" : "text-muted-foreground"}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Emergency Alert Center" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isEmergency && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  className: "bg-destructive/12 border border-destructive/40 rounded-xl p-4 mb-4",
                  "data-ocid": "caregiver.emergency.alert_card",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-destructive text-sm uppercase tracking-wide", children: "🚨 Active Emergency" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold text-foreground mt-1", children: emergencyType }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                        (/* @__PURE__ */ new Date()).toLocaleTimeString(),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 ml-2" }),
                        "Home — GPS acquired"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          type: "button",
                          size: "sm",
                          className: "bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xs gap-1",
                          "data-ocid": "caregiver.emergency.call_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                            " Call Now"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          size: "sm",
                          variant: "outline",
                          onClick: cancelEmergency,
                          className: "text-xs border-destructive/40 text-destructive hover:bg-destructive/10",
                          "data-ocid": "caregiver.emergency.resolve_button",
                          children: "Mark Resolved"
                        }
                      )
                    ] })
                  ] })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3", children: "Emergency History" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "space-y-2",
                  "data-ocid": "caregiver.emergency.history_list",
                  children: recentEmergencies.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-center py-6 text-muted-foreground text-sm",
                      "data-ocid": "caregiver.emergency.empty_state",
                      children: "No emergency events recorded."
                    }
                  ) : recentEmergencies.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -8 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: i * 0.05 },
                      className: "flex items-center justify-between gap-3 rounded-xl bg-muted/30 px-4 py-3",
                      "data-ocid": `caregiver.emergency.history.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive flex-shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: entry.type }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(entry.timestamp).toLocaleString() })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                          entry.notified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-primary/10 text-primary border-primary/20", children: "Notified" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs ${entry.resolved ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" : "bg-destructive/10 text-destructive border-destructive/20"}`,
                              children: entry.resolved ? "Resolved" : "Active"
                            }
                          )
                        ] })
                      ]
                    },
                    entry.id
                  ))
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.section,
      {
        "data-ocid": "caregiver.medicine.panel",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.15 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "h-5 w-5 text-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Medicine Adherence Report" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Today's Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground", children: [
                progress.taken,
                "/",
                progress.total,
                " taken"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "h-full rounded-full bg-secondary",
                initial: { width: 0 },
                animate: {
                  width: `${progress.total ? progress.taken / progress.total * 100 : 0}%`
                },
                transition: { duration: 0.8, delay: 0.3 }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "space-y-2 mb-5",
              "data-ocid": "caregiver.medicine.reminders_list",
              children: reminders.map((r, i) => {
                const now = /* @__PURE__ */ new Date();
                const pad = (n) => n.toString().padStart(2, "0");
                const current = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
                const isOver = !r.taken && r.scheduledTime < current;
                const med = mockMedicines.find((m) => m.id === r.medicineId);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between gap-3 rounded-xl bg-muted/30 px-3 py-2.5",
                    "data-ocid": `caregiver.medicine.reminder.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: (med == null ? void 0 : med.icon) ?? "💊" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: r.medicineName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.scheduledTime })
                        ] })
                      ] }),
                      r.taken ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/25", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1" }),
                        " Taken",
                        " ",
                        r.takenAt
                      ] }) : isOver ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs bg-destructive/12 text-destructive border-destructive/25 animate-pulse", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 mr-1" }),
                        " Overdue"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs bg-accent/12 text-accent border-accent/25", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 mr-1" }),
                        " Upcoming"
                      ] })
                    ]
                  },
                  r.id
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3", children: "7-Day Adherence (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-36",
              "data-ocid": "caregiver.medicine.adherence_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: ADHERENCE_7DAY,
                  margin: { top: 4, right: 4, left: -20, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        stroke: "oklch(var(--border)/0.3)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "day",
                        tick: {
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        domain: [0, 100],
                        tick: {
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        contentStyle: {
                          background: "oklch(var(--card))",
                          border: "1px solid oklch(var(--border)/0.3)",
                          borderRadius: 10,
                          fontSize: 12
                        },
                        formatter: (v) => [`${v}%`, "Adherence"]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "adherence",
                        fill: "oklch(var(--secondary))",
                        radius: [4, 4, 0, 0]
                      }
                    )
                  ]
                }
              ) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.section,
      {
        "data-ocid": "caregiver.weekly_summary.panel",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Weekly Health Summary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-5", children: [
            {
              label: "Avg Heart Rate",
              value: `${avgHR} bpm`,
              color: "text-primary"
            },
            {
              label: "Avg Oxygen",
              value: `${avgO2}%`,
              color: "text-emerald-500"
            },
            {
              label: "Avg Wellness",
              value: `${avgWellness}/100`,
              color: "text-secondary"
            }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl bg-muted/30 px-3 py-3 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold font-display ${stat.color}`, children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
              ]
            },
            stat.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide", children: "Heart Rate Trend (7 days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-40",
                  "data-ocid": "caregiver.weekly_summary.heartrate_chart",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    LineChart,
                    {
                      data: weeklyHR,
                      margin: { top: 4, right: 4, left: -20, bottom: 0 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CartesianGrid,
                          {
                            strokeDasharray: "3 3",
                            stroke: "oklch(var(--border)/0.3)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          XAxis,
                          {
                            dataKey: "day",
                            tick: {
                              fontSize: 11,
                              fill: "oklch(var(--muted-foreground))"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          YAxis,
                          {
                            tick: {
                              fontSize: 11,
                              fill: "oklch(var(--muted-foreground))"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Tooltip,
                          {
                            contentStyle: {
                              background: "oklch(var(--card))",
                              border: "1px solid oklch(var(--border)/0.3)",
                              borderRadius: 10,
                              fontSize: 12
                            },
                            formatter: (v) => [`${v} bpm`, "Heart Rate"]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Line,
                          {
                            type: "monotone",
                            dataKey: "heartRate",
                            stroke: "oklch(var(--primary))",
                            strokeWidth: 2,
                            dot: { fill: "oklch(var(--primary))", r: 3 },
                            activeDot: { r: 5 }
                          }
                        )
                      ]
                    }
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide", children: "Wellness Score Trend (7 days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-40",
                  "data-ocid": "caregiver.weekly_summary.wellness_chart",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    LineChart,
                    {
                      data: WELLNESS_7DAY,
                      margin: { top: 4, right: 4, left: -20, bottom: 0 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CartesianGrid,
                          {
                            strokeDasharray: "3 3",
                            stroke: "oklch(var(--border)/0.3)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          XAxis,
                          {
                            dataKey: "day",
                            tick: {
                              fontSize: 11,
                              fill: "oklch(var(--muted-foreground))"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          YAxis,
                          {
                            domain: [60, 100],
                            tick: {
                              fontSize: 11,
                              fill: "oklch(var(--muted-foreground))"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Tooltip,
                          {
                            contentStyle: {
                              background: "oklch(var(--card))",
                              border: "1px solid oklch(var(--border)/0.3)",
                              borderRadius: 10,
                              fontSize: 12
                            },
                            formatter: (v) => [`${v}`, "Wellness Score"]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Line,
                          {
                            type: "monotone",
                            dataKey: "score",
                            stroke: "oklch(var(--secondary))",
                            strokeWidth: 2,
                            dot: { fill: "oklch(var(--secondary))", r: 3 },
                            activeDot: { r: 5 }
                          }
                        )
                      ]
                    }
                  ) })
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.section,
        {
          "data-ocid": "caregiver.timeline.panel",
          initial: { opacity: 0, x: -16 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.25 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/20 h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Today's Activity Timeline" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", "data-ocid": "caregiver.timeline.list", children: TODAY_TIMELINE.map((event, i) => {
              const Icon = timelineIconMap[event.icon];
              const color = timelineColorMap[event.icon];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.05 + i * 0.05 },
                  className: "flex gap-3 pb-4 last:pb-0",
                  "data-ocid": `caregiver.timeline.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${color}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      i < TODAY_TIMELINE.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border/40 mt-1" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono", children: event.time }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-0.5 leading-snug", children: event.label })
                    ] })
                  ]
                },
                event.id
              );
            }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.section,
        {
          "data-ocid": "caregiver.notifications.panel",
          initial: { opacity: 0, x: 16 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/20 h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold font-display text-foreground", children: "Notification Center" }),
                unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-primary/15 text-primary border-primary/25", children: unreadCount })
              ] }),
              unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: markAllRead,
                  className: "text-xs text-muted-foreground hover:text-foreground",
                  "data-ocid": "caregiver.notifications.mark_all_read_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BellOff, { className: "h-3.5 w-3.5 mr-1" }),
                    " Mark all read"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "space-y-2",
                "data-ocid": "caregiver.notifications.list",
                children: notifications.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    layout: true,
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: n.read ? 0.6 : 1, y: 0 },
                    transition: { delay: i * 0.04 },
                    className: `flex items-start gap-3 rounded-xl px-3 py-3 transition-smooth ${n.read ? "bg-muted/20" : "bg-muted/40 border border-border/30"}`,
                    "data-ocid": `caregiver.notifications.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${n.type === "emergency" ? "bg-destructive/15 text-destructive" : n.type === "medicine" ? "bg-secondary/15 text-secondary" : "bg-primary/15 text-primary"}`,
                          children: n.type === "emergency" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" }) : n.type === "medicine" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-snug", children: n.message }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: new Date(n.timestamp).toLocaleString() })
                      ] }),
                      !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "icon",
                          className: "h-6 w-6 flex-shrink-0 text-muted-foreground hover:text-foreground",
                          onClick: () => markRead(n.id),
                          "aria-label": "Mark as read",
                          "data-ocid": `caregiver.notifications.mark_read_button.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
                        }
                      )
                    ]
                  },
                  n.id
                ))
              }
            )
          ] })
        }
      )
    ] })
  ] }) });
}
export {
  Caregiver as default
};
