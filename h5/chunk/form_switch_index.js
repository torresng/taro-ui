(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"121":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0},i=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(4)),l=n(131),c=n(138),u=_interopRequireDefault(n(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(608);var p=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleChange=function(t){e.setState({"switchValue":t})},e.state={"switchValue":!0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),o(Index,[{"key":"render","value":function render(){return i.default.createElement(l.View,{"className":"page"},i.default.createElement(u.default,{"title":"Switch 开关"}),i.default.createElement(l.View,{"className":"doc-body"},i.default.createElement(l.View,{"className":"panel"},i.default.createElement(l.View,{"className":"panel__title"},"基础用法"),i.default.createElement(l.View,{"className":"panel__content no-padding"},i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(c.AtForm,null,i.default.createElement(c.AtSwitch,{"title":"开启中","checked":this.state.switchValue,"onChange":this.handleChange}),i.default.createElement(c.AtSwitch,{"title":"已关闭","border":!1}))))),i.default.createElement(l.View,{"className":"panel"},i.default.createElement(l.View,{"className":"panel__title"},"禁用状态"),i.default.createElement(l.View,{"className":"panel__content no-padding"},i.default.createElement(l.View,{"className":"example-item"},i.default.createElement(c.AtForm,null,i.default.createElement(c.AtSwitch,{"title":"不可点击","checked":!0,"disabled":!0}),i.default.createElement(c.AtSwitch,{"title":"不可点击","border":!1,"disabled":!0})))))))}},{"key":"componentDidMount","value":function componentDidMount(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&r(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}();t.default=p},"133":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(4)),a=_interopRequireDefault(n(132)),l=n(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(134);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,i.default.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(l.View,{"className":"doc-header"},r.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":a.default.string}},"134":function(e,t,n){},"608":function(e,t,n){}}]);