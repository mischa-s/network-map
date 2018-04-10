webpackHotUpdate(3,{

/***/ "./src/worldmap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_queue__ = __webpack_require__("./node_modules/d3-queue/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_tip__ = __webpack_require__("./node_modules/d3-tip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_tip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3_tip__);
var _jsxFileName = 'C:\\Users\\Kathrin\\Documents\\Dev\\alumnimap\\network-map\\src\\worldmap.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import './App.css'
/*import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
*/


//import 'src/topojson.v1.min.js'


//import 'src/simple-statistics.min.js'
//import {babelstandalone} from 'babel-standalone'

/*
<script src="http://d3js.org/d3.v4.min.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>
<script src="http://d3js.org/topojson.v1.min.js"></script>
<script src="https://d3js.org/d3-geo-projection.v1.min.js"></script>
<script src="d3-tip.js"></script>
<script src='https://unpkg.com/simple-statistics@2.0.0/dist/simple-statistics.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.10.3/babel.min.js'></script>
*/

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart(props) {
    _classCallCheck(this, BarChart);

    var _this = _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this, props));

    _this.createWordMap = _this.createWordMap.bind(_this);
    return _this;
  }

  _createClass(BarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createWordMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.createWordMap();
    }
  }, {
    key: 'createWordMap',
    value: function createWordMap() {

      // configuration
      var colorVariable = 'population';
      var geoIDVariable = 'id';
      var format = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].format(',');

      // Set tooltips
      var tip = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
        return '<strong>Country: </strong><span class=\'details\'>' + d.properties.name + '<br></span><strong>Population: </strong><span class=\'details\'>' + format(d[colorVariable]) + '</span>';
      });

      tip.direction(function (d) {
        if (d.properties.name === 'Antarctica') return 'n';
        // Americas
        if (d.properties.name === 'Greenland') return 's';
        if (d.properties.name === 'Canada') return 'e';
        if (d.properties.name === 'USA') return 'e';
        if (d.properties.name === 'Mexico') return 'e';
        // Europe
        if (d.properties.name === 'Iceland') return 's';
        if (d.properties.name === 'Norway') return 's';
        if (d.properties.name === 'Sweden') return 's';
        if (d.properties.name === 'Finland') return 's';
        if (d.properties.name === 'Russia') return 'w';
        // Asia
        if (d.properties.name === 'China') return 'w';
        if (d.properties.name === 'Japan') return 's';
        // Oceania
        if (d.properties.name === 'Indonesia') return 'w';
        if (d.properties.name === 'Papua New Guinea') return 'w';
        if (d.properties.name === 'Australia') return 'w';
        if (d.properties.name === 'New Zealand') return 'w';
        // otherwise if not specified
        return 'n';
      });

      tip.offset(function (d) {
        // [top, left]
        if (d.properties.name === 'Antarctica') return [0, 0];
        // Americas
        if (d.properties.name === 'Greenland') return [10, -10];
        if (d.properties.name === 'Canada') return [24, -28];
        if (d.properties.name === 'USA') return [-5, 8];
        if (d.properties.name === 'Mexico') return [12, 10];
        if (d.properties.name === 'Chile') return [0, -15];
        // Europe
        if (d.properties.name === 'Iceland') return [15, 0];
        if (d.properties.name === 'Norway') return [10, -28];
        if (d.properties.name === 'Sweden') return [10, -8];
        if (d.properties.name === 'Finland') return [10, 0];
        if (d.properties.name === 'France') return [-9, 66];
        if (d.properties.name === 'Italy') return [-8, -6];
        if (d.properties.name === 'Russia') return [5, 385];
        // Africa
        if (d.properties.name === 'Madagascar') return [-10, 10];
        // Asia
        if (d.properties.name === 'China') return [-16, -8];
        if (d.properties.name === 'Mongolia') return [-5, 0];
        if (d.properties.name === 'Pakistan') return [-10, 13];
        if (d.properties.name === 'India') return [-11, -18];
        if (d.properties.name === 'Nepal') return [-8, 1];
        if (d.properties.name === 'Myanmar') return [-12, 0];
        if (d.properties.name === 'Laos') return [-12, -8];
        if (d.properties.name === 'Vietnam') return [-12, -4];
        if (d.properties.name === 'Japan') return [5, 5];
        // Oceania
        if (d.properties.name === 'Indonesia') return [0, -5];
        if (d.properties.name === 'Papua New Guinea') return [-5, -10];
        if (d.properties.name === 'Australia') return [-15, 0];
        if (d.properties.name === 'New Zealand') return [-15, 0];
        // otherwise if not specified
        return [-10, 0];
      });

      __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].select('body').style('overflow', 'hidden');

      var parentWidth = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].select('body').node().getBoundingClientRect().width;
      var margin = { top: 0, right: 0, bottom: 0, left: 0 };
      var width = 960 - margin.left - margin.right;
      var height = 500 - margin.top - margin.bottom;

      var color = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].scaleQuantile().range(['rgb(247,251,255)', 'rgb(222,235,247)', 'rgb(198,219,239)', 'rgb(158,202,225)', 'rgb(107,174,214)', 'rgb(66,146,198)', 'rgb(33,113,181)', 'rgb(8,81,156)', 'rgb(8,48,107)', 'rgb(3,19,43)']);

      var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].select('body').append('svg').attr('width', width).attr('height', height).append('g').attr('class', 'map');

      var projection = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].geoRobinson().scale(148).rotate([352, 0, 0]).translate([width / 2, height / 2]);

      var path = __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].geoPath().projection(projection);

      svg.call(tip);

      Object(__WEBPACK_IMPORTED_MODULE_2_d3_queue__["a" /* queue */])().defer(__WEBPACK_IMPORTED_MODULE_1_d3__["d3"].json, 'world_countries.json').defer(__WEBPACK_IMPORTED_MODULE_1_d3__["d3"].tsv, 'world_population.tsv').await(ready);

      function ready(error, geography, data) {
        data.forEach(function (d) {
          d[colorVariable] = Number(d[colorVariable].replace(',', ''));
        });

        var colorVariableValueByID = {};

        data.forEach(function (d) {
          colorVariableValueByID[d[geoIDVariable]] = d[colorVariable];
        });
        geography.features.forEach(function (d) {
          d[colorVariable] = colorVariableValueByID[d.id];
        });

        // calculate ckmeans clusters
        // then use the max value of each cluster
        // as a break
        var numberOfClasses = color.range().length - 1;
        var ckmeansClusters = ss.ckmeans(data.map(function (d) {
          return d[colorVariable];
        }), numberOfClasses);
        var ckmeansBreaks = ckmeansClusters.map(function (d) {
          return __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].min(d);
        });
        console.log('numberOfClasses', numberOfClasses);
        console.log('ckmeansClusters', ckmeansClusters);
        console.log('ckmeansBreaks', ckmeansBreaks);

        // set the domain of the color scale based on our data
        color.domain(ckmeansBreaks);
        //
        // .domain(jenksNaturalBreaks)
        //
        // .domain(d3.extent(data, d => d[colorVariable]));
        //
        // .domain([
        //   10000,
        //   100000,
        //   500000,
        //   1000000,
        //   5000000,
        //   10000000,
        //   50000000,
        //   100000000,
        //   500000000,
        //   1500000000
        // ]);

        svg.append('g').attr('class', 'countries').selectAll('path').data(geography.features).enter().append('path').attr('d', path).style('fill', function (d) {
          if (typeof colorVariableValueByID[d.id] !== 'undefined') {
            return color(colorVariableValueByID[d.id]);
          }
          return 'white';
        }).style('fill-opacity', 0.8).style('stroke', function (d) {
          if (d[colorVariable] !== 0) {
            return 'white';
          }
          return 'lightgray';
        }).style('stroke-width', 1).style('stroke-opacity', 0.5)
        // tooltips
        .on('mouseover', function (d) {
          tip.show(d);
          __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].select(this).style('fill-opacity', 1).style('stroke-opacity', 1).style('stroke-width', 2);
        }).on('mouseout', function (d) {
          tip.hide(d);
          __WEBPACK_IMPORTED_MODULE_1_d3__["d3"].select(this).style('fill-opacity', 0.8).style('stroke-opacity', 0.5).style('stroke-width', 1);
        });

        svg.append('path').datum(topojson.mesh(geography.features, function (a, b) {
          return a.id !== b.id;
        })).attr('class', 'names').attr('d', path);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg', { ref: function ref(node) {
          return _this2.node = node;
        },
        width: 500, height: 500, __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return BarChart;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = WordMap;

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BarChart, 'BarChart', 'C:/Users/Kathrin/Documents/Dev/alumnimap/network-map/src/worldmap.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Kathrin/Documents/Dev/alumnimap/network-map/src/worldmap.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.5067762bd43c97267ca5.hot-update.js.map