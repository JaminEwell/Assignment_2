"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductFilter, _React$Component);

  var _super = _createSuper(ProductFilter);

  function ProductFilter() {
    _classCallCheck(this, ProductFilter);

    return _super.apply(this, arguments);
  }

  _createClass(ProductFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the product filter.");
    }
  }]);

  return ProductFilter;
}(React.Component);

var ProductRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  var _super2 = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var style = this.props.rowStyle;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        style: style
      }, this.props.product_id), /*#__PURE__*/React.createElement("td", {
        style: style
      }, this.props.product_title));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductTable, _React$Component3);

  var _super3 = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super3.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: "1px solid silver",
        padding: 4
      };
      return /*#__PURE__*/React.createElement("table", {
        style: {
          borderCollapse: "collapse"
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "ID"), /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(ProductRow, {
        rowStyle: rowStyle,
        product_id: 1,
        product_title: "Error in console when clicking Add"
      }), /*#__PURE__*/React.createElement(ProductRow, {
        rowStyle: rowStyle,
        product_id: 2,
        product_title: "Missing bottom border on panel"
      })));
    }
  }]);

  return ProductTable;
}(React.Component);

var ProductAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(ProductAdd, _React$Component4);

  var _super4 = _createSuper(ProductAdd);

  function ProductAdd() {
    _classCallCheck(this, ProductAdd);

    return _super4.apply(this, arguments);
  }

  _createClass(ProductAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add an product.");
    }
  }]);

  return ProductAdd;
}(React.Component);

var ProductList = /*#__PURE__*/function (_React$Component5) {
  _inherits(ProductList, _React$Component5);

  var _super5 = _createSuper(ProductList);

  function ProductList() {
    _classCallCheck(this, ProductList);

    return _super5.apply(this, arguments);
  }

  _createClass(ProductList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement(ProductFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, null));
    }
  }]);

  return ProductList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));