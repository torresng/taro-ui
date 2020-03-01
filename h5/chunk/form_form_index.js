(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"115":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),r=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0},a=_interopRequireDefault(o(1)),i=o(138),l=o(131),u=_interopRequireDefault(o(4)),s=_interopRequireDefault(o(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(595);var c=function(e){function PageForm(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageForm);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageForm.__proto__||Object.getPrototypeOf(PageForm)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"value1":"","value2":"","value3":[],"text":"","isOpened":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageForm,u.default.Component),n(PageForm,[{"key":"handleChange","value":function handleChange(e,t){this.setState(function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=o,e}({},e,t))}},{"key":"handleSubmit","value":function handleSubmit(){var e=this.state,t=e.value1,o=e.value2,n=e.value3;t&&o?this.setState({"isOpened":!0,"text":n&&n.length>0?t+" / "+o+" / "+n.join(","):t+" / "+o}):this.setState({"isOpened":!0,"text":"表单必填项未填写完整"}),this.closeToast()}},{"key":"closeToast","value":function closeToast(){var e=this;setTimeout(function(){e.setState({"isOpened":!1})},2e3)}},{"key":"handleReset","value":function handleReset(){this.setState({"isOpened":!0,"text":"表单已被重置","value1":"","value2":"","value3":[]}),this.closeToast()}},{"key":"render","value":function render(){return a.default.createElement(l.View,{"className":"page"},a.default.createElement(s.default,{"title":"Form 表单"}),a.default.createElement(l.View,{"className":"doc-body"},a.default.createElement(l.View,{"className":"panel"},a.default.createElement(l.View,{"className":"panel__title"},"表单提交与重置"),a.default.createElement(l.View,{"className":"panel__content no-padding"},a.default.createElement(l.View,{"className":"component-item"},a.default.createElement(i.AtForm,{"onSubmit":this.handleSubmit.bind(this),"onReset":this.handleReset.bind(this)},a.default.createElement(i.AtInput,{"required":!0,"name":"value1","title":"文本","type":"text","placeholder":"单行文本","value":this.state.value1,"onChange":this.handleChange.bind(this,"value1")}),a.default.createElement(i.AtInput,{"required":!0,"name":"value2","title":"密码","type":"password","placeholder":"请输入密码","value":this.state.value2,"onChange":this.handleChange.bind(this,"value2")}),a.default.createElement(i.AtCheckbox,{"options":[{"label":"iPhone X","value":"iPhone X"},{"label":"HUAWEI P20","value":"HUAWEI P20"}],"selectedList":this.state.value3,"onChange":this.handleChange.bind(this,"value3")}),a.default.createElement(l.View,{"className":"component-item__btn-group"},a.default.createElement(l.View,{"className":"component-item__btn-group__btn-item"},a.default.createElement(i.AtButton,{"type":"primary","formType":"submit"},"提交")),a.default.createElement(l.View,{"className":"component-item__btn-group__btn-item"},a.default.createElement(i.AtButton,{"formType":"reset"},"重置")))))))),a.default.createElement(i.AtToast,{"text":this.state.text,"isOpened":this.state.isOpened}))}},{"key":"componentDidMount","value":function componentDidMount(){r(PageForm.prototype.__proto__||Object.getPrototypeOf(PageForm.prototype),"componentDidMount",this)&&r(PageForm.prototype.__proto__||Object.getPrototypeOf(PageForm.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){r(PageForm.prototype.__proto__||Object.getPrototypeOf(PageForm.prototype),"componentDidShow",this)&&r(PageForm.prototype.__proto__||Object.getPrototypeOf(PageForm.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){r(PageForm.prototype.__proto__||Object.getPrototypeOf(PageForm.prototype),"componentDidHide",this)&&r(PageForm.prototype.__proto__||Object.getPrototypeOf(PageForm.prototype),"componentDidHide",this).call(this)}}]),PageForm}();t.default=c},"133":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),r=_interopRequireDefault(o(1)),a=_interopRequireDefault(o(4)),i=_interopRequireDefault(o(132)),l=o(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(134);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.default.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return r.default.createElement(l.View,{"className":"doc-header"},r.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"134":function(e,t,o){},"595":function(e,t,o){}}]);