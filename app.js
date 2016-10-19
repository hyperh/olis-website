(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = null;
    hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/About.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Footer = require('./common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Hexagon = require('./common/Hexagon');

var _Hexagon2 = _interopRequireDefault(_Hexagon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'renderContactSection',
    value: function renderContactSection() {
      var hexagonSize = 360;
      if ((0, _jquery2.default)(window).width() < 768) {
        hexagonSize = 260;
      }
      return _react2.default.createElement(
        'div',
        { className: 'contact-section' },
        _react2.default.createElement(
          _Hexagon2.default,
          {
            size: hexagonSize,
            style: { margin: 'auto' }
            // color="#34A0DE"
            , color: 'rgba(8,190,213,0.5)'
          },
          _react2.default.createElement(
            _Hexagon2.default,
            {
              size: hexagonSize * 0.9,
              style: { margin: 'auto' }
              // color="#08BED5"
              , color: 'rgba(8,190,213,1)'
            },
            _react2.default.createElement(
              'div',
              { className: 'contact-container' },
              _react2.default.createElement(
                'div',
                { className: 'contact-title' },
                'Contact Us'
              ),
              _react2.default.createElement(
                'div',
                { className: 'contact-subtitle' },
                'Send us mail:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'contact-email' },
                _react2.default.createElement(
                  'a',
                  { href: 'mailto:info@getolis.com' },
                  'info@getolis.com'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'about' },
        _react2.default.createElement(
          'div',
          { className: 'about-header' },
          _react2.default.createElement(
            'div',
            { className: 'about-header-container' },
            _react2.default.createElement(
              'div',
              { className: 'text-content' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Our Vision'
              ),
              _react2.default.createElement(
                'div',
                { className: 'subtitle' },
                'Breaking down barriers to save your company time and money.'
              ),
              _react2.default.createElement(
                'div',
                { className: 'description' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Olis brings a solution to the table to allow companies to harness the power and productivity of their workforce.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Eliminate time-wasting meetings and say goodbye to overbearing email chains. You can cut through the noise and get to what you need to know.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Olis will allow you to break down departmental barriers and seamlessly collaborate with your own team or even across different organizations.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'img-content' },
              _react2.default.createElement('img', { src: '/assets/img/about-devices.png', alt: '', className: 'img-responsive' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'team-section' },
          _react2.default.createElement(
            'div',
            { className: 'title-container' },
            _react2.default.createElement(
              'h1',
              null,
              'Meet the Team'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'The people behind Olis.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'members-container' },
            _react2.default.createElement(
              'div',
              { className: 'member-item' },
              _react2.default.createElement(
                'div',
                { className: 'member-face' },
                _react2.default.createElement('img', { src: '/assets/img/adrian.jpg', alt: '' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'member-name' },
                'Adrian Li'
              ),
              _react2.default.createElement(
                'div',
                { className: 'member-role' },
                'Front-end development, Design'
              ),
              _react2.default.createElement('div', { className: 'member-social' }),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'member-description' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Adrian holds a BASc in Mechanical Engineering from The University of Toronto and a JD in Law from The University of British Columbia in Canada.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Having learned programming by himself as a teenager, he has always been passionate about solving problems and has built multiple websites and self-published two books online generating passive revenue. Adrian has also worked in the mining engineering industry.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'member-item' },
              _react2.default.createElement(
                'div',
                { className: 'member-face' },
                _react2.default.createElement('img', { src: '/assets/img/clifton.jpg', alt: '' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'member-name' },
                'Clifton Cheung'
              ),
              _react2.default.createElement(
                'div',
                { className: 'member-role' },
                'Business Development'
              ),
              _react2.default.createElement('div', { className: 'member-social' }),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'member-description' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Clifton has followed his passion for entrepreneurship founding numerous startups across various technology and manufacturing sectors both in the San Francisco Bay Area and across Asia. With over 13 years of business development and entrepreneurship experience.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'member-item' },
              _react2.default.createElement(
                'div',
                { className: 'member-face' },
                _react2.default.createElement('img', { src: '/assets/img/heyse.png', alt: '' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'member-name' },
                'Heyse Li'
              ),
              _react2.default.createElement(
                'div',
                { className: 'member-role' },
                'Back-end development, Design'
              ),
              _react2.default.createElement('div', { className: 'member-social' }),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'div',
                { className: 'member-description' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Heyse holds a BASc and MASc in Industrial Engineering from The University of Toronto.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'During his time as a research associate, he published multiple academic papers on the subjects of applied optimization, machine learning, and lung cancer. He has also published several Android apps after teaching himself how to program.'
                )
              )
            )
          )
        ),
        this.renderContactSection(),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;
});

;require.register("components/App.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          { inverse: true, fixedTop: true },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Olis'
              )
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Nav,
              { pullRight: true },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/problems' },
                  'Why Use a Chat Tool?'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/about' },
                  'About Us'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'content' },
          this.props.children
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
});

;require.register("components/Features.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _findInPage = require('material-ui/lib/svg-icons/action/find-in-page');

var _findInPage2 = _interopRequireDefault(_findInPage);

var _fontIcon = require('material-ui/lib/font-icon');

var _fontIcon2 = _interopRequireDefault(_fontIcon);

var _Footer = require('./common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_React$Component) {
  _inherits(Features, _React$Component);

  function Features() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Features);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Features.__proto__ || Object.getPrototypeOf(Features)).call.apply(_ref, [this].concat(args))), _this), _this.scrollHandler = function () {
      var interval = [50, 300];
      var transitionPercentage = ((0, _jquery2.default)(window).scrollTop() - interval[0]) / (interval[1] - interval[0]);
      var ele = (0, _jquery2.default)('.features-header-content');
      var minScale = 0.8;
      if (transitionPercentage < 0) {
        ele.css('opacity', '1');
        ele.css('transform', 'scale(1)');
      } else if (transitionPercentage > 1) {
        ele.css('opacity', '0');
        ele.css('transform', 'scale(' + minScale + ')');
      } else {
        ele.css('opacity', 1 - transitionPercentage);
        ele.css('transform', 'scale(' + ((1 - transitionPercentage) * (1 - minScale) + minScale) + ')');
      }
    }, _this.componentDidMount = function () {
      (0, _jquery2.default)(window).on("scroll", _this.scrollHandler);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Features, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _jquery2.default)(window).off("scroll", this.scrollHandler);
    }
  }, {
    key: 'renderFeaturesHeader',
    value: function renderFeaturesHeader() {
      return _react2.default.createElement(
        'div',
        { className: 'features-header' },
        _react2.default.createElement('div', { className: 'features-header-overlay' }),
        _react2.default.createElement(
          'div',
          { className: 'features-header-content' },
          _react2.default.createElement(
            'h1',
            { className: 'features-title' },
            'The Notepad'
          ),
          _react2.default.createElement(
            'h4',
            { className: 'features-subtitle' },
            'A Closer Look'
          )
        ),
        _react2.default.createElement('div', { className: 'top-bar' }),
        _react2.default.createElement('div', { className: 'bottom-bar' })
      );
    }
  }, {
    key: 'renderMiscItem',
    value: function renderMiscItem(props) {
      var icon = props.icon;
      var title = props.title;
      var desc = props.desc;

      var iconStyle = {
        fontSize: '64px',
        textAlign: 'center'
      };
      return _react2.default.createElement(
        'div',
        { className: 'misc-item' },
        _react2.default.createElement(
          'div',
          { className: 'feature-misc-icon' },
          _react2.default.createElement(
            _fontIcon2.default,
            {
              className: 'material-icons',
              style: iconStyle,
              color: '#FF4081'
            },
            icon
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'feature-misc-title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'feature-misc-desc' },
          desc
        )
      );
    }
  }, {
    key: 'renderMiscFeatures',
    value: function renderMiscFeatures() {
      return _react2.default.createElement(
        'div',
        { className: 'features-misc' },
        _react2.default.createElement(
          'div',
          { className: 'features-misc-container' },
          _react2.default.createElement(
            'h1',
            null,
            'More Features'
          ),
          _react2.default.createElement(
            'div',
            { className: 'misc-items-container' },
            _react2.default.createElement(this.renderMiscItem, {
              icon: 'question_answer',
              title: 'Flexible Chat Functionality',
              desc: 'Message your teammates directly or create an unlimited number of discussion groups.'
            }),
            _react2.default.createElement(this.renderMiscItem, {
              icon: 'lock',
              title: 'Secure, Private, and Reliable',
              desc: 'Bank-level security ensures that your data is kept safe.'
            }),
            _react2.default.createElement(this.renderMiscItem, {
              icon: 'mouse',
              title: 'Drag and Drop',
              desc: 'Easily share documents with your teammates.'
            }),
            _react2.default.createElement(this.renderMiscItem, {
              icon: 'extension',
              title: 'Third-Party Integrations',
              desc: 'You can improve your productivty by using our integrations with third-party software.'
            }),
            _react2.default.createElement(this.renderMiscItem, {
              icon: 'phonelink',
              title: 'Runs on Everything',
              desc: 'Olis is a complete multi-platform solution. Your data is seamlessly synced to all your connected devices.'
            })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'features' },
        this.renderFeaturesHeader(),
        _react2.default.createElement(
          'div',
          { className: 'features-headline' },
          'The one place for all the information you need.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'features-section', style: { backgroundColor: '#6082E6' } },
          _react2.default.createElement(
            'div',
            { className: 'features-section-container' },
            _react2.default.createElement(
              'div',
              { className: 'features-text' },
              _react2.default.createElement(
                'h2',
                null,
                'Find the Best Ideas'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Harness the power of your team\u2019s creativity by dropping in the Brainstorming widget. Your team can come up with ideas then vote for the best ones.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'features-img' },
              _react2.default.createElement('img', { src: '/assets/img/features-vote.png', className: 'img-responsive' })
            )
          ),
          _react2.default.createElement('div', { className: 'triangle triangle-bottom-left one' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'features-section reverse', style: { backgroundColor: '#5470C7' } },
          _react2.default.createElement(
            'div',
            { className: 'features-section-container' },
            _react2.default.createElement(
              'div',
              { className: 'features-text' },
              _react2.default.createElement(
                'h2',
                null,
                'Prioritize Important Contacts'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Meeting with someone important? Don\u2019t lose track of their information. Put a high visibility contact card on the Notepad.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'features-img' },
              _react2.default.createElement('img', { src: '/assets/img/features-contact.png', className: 'img-responsive' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'features-section', style: { backgroundColor: '#3D5291' } },
          _react2.default.createElement('div', { className: 'triangle triangle-top-left two' }),
          _react2.default.createElement(
            'div',
            { className: 'features-section-container' },
            _react2.default.createElement(
              'div',
              { className: 'features-text' },
              _react2.default.createElement(
                'h2',
                null,
                'Communicate Across Languages'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Enterprises in Asia often have to interact with people from a variety of countries. We offer simple one-click translations of individual chat messages.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Over 50 languages are supported so you\'ll never be left wondering what something means.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'features-img' },
              _react2.default.createElement('img', { src: '/assets/img/features-translate.png', className: 'img-responsive' })
            )
          ),
          _react2.default.createElement('div', { className: 'triangle triangle-bottom-left three' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'features-section reverse pb', style: { backgroundColor: '#2F3F70' } },
          _react2.default.createElement(
            'div',
            { className: 'features-section-container' },
            _react2.default.createElement(
              'div',
              { className: 'features-text' },
              _react2.default.createElement(
                'h2',
                null,
                'Work without Distractions'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Another way to reduce phone calls, emails, and other interruptions of the day. Manage the path to your door by taking control of how information reaches you.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'features-img' },
              _react2.default.createElement('img', { src: '/assets/img/features-notifications.png', className: 'img-responsive' })
            )
          )
        ),
        this.renderMiscFeatures(),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Features;
}(_react2.default.Component);

exports.default = Features;
});

;require.register("components/Home.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Header = require('./Home/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Problems = require('./Home/Problems');

var _Problems2 = _interopRequireDefault(_Problems);

var _AppShowcase = require('./Home/AppShowcase');

var _AppShowcase2 = _interopRequireDefault(_AppShowcase);

var _NotepadShowcase = require('./Home/NotepadShowcase');

var _NotepadShowcase2 = _interopRequireDefault(_NotepadShowcase);

var _CTA = require('./Home/CTA');

var _CTA2 = _interopRequireDefault(_CTA);

var _Footer = require('./common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.scrollHandler = function () {
      var interval = [50, 200];
      var transitionPercentage = ((0, _jquery2.default)(window).scrollTop() - interval[0]) / (interval[1] - interval[0]);

      if (transitionPercentage < 0) {
        (0, _jquery2.default)('.navbar').css('background-color', 'transparent');
      } else if (transitionPercentage > 1) {
        (0, _jquery2.default)('.navbar').css('background-color', '#313f70');
      } else {
        (0, _jquery2.default)('.navbar').css('background-color', 'rgba(49,63,112,' + transitionPercentage + ')');
      }
    }, _this.componentDidMount = function () {
      (0, _jquery2.default)('#content').css('margin-top', '0');
      (0, _jquery2.default)(window).on("scroll", _this.scrollHandler);
      if ((0, _jquery2.default)(window).scrollTop() === 0) {
        (0, _jquery2.default)('.navbar').css('background-color', 'transparent');
      }
      var viewportHeight = (0, _jquery2.default)(window).height();
      (0, _jquery2.default)('.header').css('height', viewportHeight + 'px');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _jquery2.default)('.navbar').css('background-color', '#313f70');
      (0, _jquery2.default)('#content').css('margin-top', '50px');
      (0, _jquery2.default)(window).off("scroll", this.scrollHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Problems2.default, null),
        _react2.default.createElement(_AppShowcase2.default, null),
        _react2.default.createElement(_NotepadShowcase2.default, null),
        _react2.default.createElement(_CTA2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
});

;require.register("components/Home/AppShowcase.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppShowcase = function (_React$Component) {
  _inherits(AppShowcase, _React$Component);

  function AppShowcase() {
    _classCallCheck(this, AppShowcase);

    return _possibleConstructorReturn(this, (AppShowcase.__proto__ || Object.getPrototypeOf(AppShowcase)).apply(this, arguments));
  }

  _createClass(AppShowcase, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-showcase' },
        _react2.default.createElement(
          'div',
          { className: 'section-title' },
          'Make chat productive.'
        ),
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6, smOffset: 3 },
              _react2.default.createElement(
                'div',
                { className: 'section-explanation' },
                'With our integrated chat and notepad solution, everyone in the team can now be on the same page no matter where they left off.'
              )
            )
          )
        ),
        _react2.default.createElement('img', {
          src: '/assets/img/main-app.png',
          alt: 'main app screenshot',
          className: 'img-responsive app-img'
        }),
        _react2.default.createElement('div', { className: 'white-bar' })
      );
    }
  }]);

  return AppShowcase;
}(_react2.default.Component);

exports.default = AppShowcase;
});

;require.register("components/Home/CTA.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _raisedButton = require('material-ui/lib/raised-button');

var _raisedButton2 = _interopRequireDefault(_raisedButton);

var _reactRotatingText = require('react-rotating-text');

var _reactRotatingText2 = _interopRequireDefault(_reactRotatingText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CTA = function (_React$Component) {
  _inherits(CTA, _React$Component);

  function CTA() {
    _classCallCheck(this, CTA);

    return _possibleConstructorReturn(this, (CTA.__proto__ || Object.getPrototypeOf(CTA)).apply(this, arguments));
  }

  _createClass(CTA, [{
    key: 'render',
    value: function render() {
      var words = ['productive', 'efficient', 'actionable', 'precise'];
      return _react2.default.createElement(
        'div',
        { className: 'cta' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 10, smOffset: 1 },
                _react2.default.createElement(
                  'div',
                  { className: 'section-title' },
                  'Chat less.',
                  _react2.default.createElement('br', null),
                  'Be more ',
                  _react2.default.createElement(_reactRotatingText2.default, { items: words, color: '#00bcd4' })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 4, smOffset: 2 },
                _react2.default.createElement(_reactBootstrap.Input, { type: 'email', placeholder: 'Enter email', className: 'cta-input' })
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 4 },
                _react2.default.createElement(_raisedButton2.default, {
                  label: 'Get on the waiting list!',
                  secondary: true,
                  fullWidth: true,
                  style: { height: '50px' }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return CTA;
}(_react2.default.Component);

exports.default = CTA;
});

;require.register("components/Home/Header.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactBootstrap = require('react-bootstrap');

var _raisedButton = require('material-ui/lib/raised-button');

var _raisedButton2 = _interopRequireDefault(_raisedButton);

var _reactRotatingText = require('react-rotating-text');

var _reactRotatingText2 = _interopRequireDefault(_reactRotatingText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var words = ['noise', 'distractions', 'time wasted', 'clutter', 'chaos'];
      return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'header-content' },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 10, smOffset: 1 },
                _react2.default.createElement(
                  'div',
                  { className: 'headline' },
                  _react2.default.createElement(
                    'span',
                    null,
                    'Effective team collaboration ',
                    _react2.default.createElement('div', { className: 'headline-break' }),
                    'without all the ',
                    _react2.default.createElement(_reactRotatingText2.default, { items: words, color: '#FF4081' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'headline-blurb' },
                  'Easily chat and extract key takeaways in one simple interface.'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { style: { marginTop: '50px' } },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 4, smOffset: 2 },
                _react2.default.createElement(_reactBootstrap.Input, { type: 'email', placeholder: 'Enter email', className: 'headline-input' })
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { sm: 4 },
                _react2.default.createElement(_raisedButton2.default, {
                  label: 'Get on the waiting list!',
                  primary: true,
                  fullWidth: true,
                  style: { height: '50px' }
                })
              )
            )
          )
        ),
        _react2.default.createElement('div', { className: 'triangle-left' }),
        _react2.default.createElement('div', { className: 'triangle-right' })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
});

;require.register("components/Home/NotepadShowcase.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _raisedButton = require('material-ui/lib/raised-button');

var _raisedButton2 = _interopRequireDefault(_raisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotepadShowcase = function (_React$Component) {
  _inherits(NotepadShowcase, _React$Component);

  function NotepadShowcase() {
    _classCallCheck(this, NotepadShowcase);

    return _possibleConstructorReturn(this, (NotepadShowcase.__proto__ || Object.getPrototypeOf(NotepadShowcase)).apply(this, arguments));
  }

  _createClass(NotepadShowcase, [{
    key: 'render',
    value: function render() {
      var highlightColor = "#00bcd4";
      return _react2.default.createElement(
        'div',
        { className: 'notepad-showcase' },
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            'div',
            { className: 'section-title' },
            'Introducing the Notepad.'
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 6, smOffset: 3 },
              _react2.default.createElement(
                'div',
                { className: 'section-explanation' },
                'No more scrolling up, the Notepad is the single place to summarize key decisions and action items for everyone to see.'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'notepad-details-container' },
          _react2.default.createElement(
            'div',
            { className: 'notepad-img' },
            _react2.default.createElement('img', {
              src: '/assets/img/main-notepad.png',
              alt: 'main app screenshot',
              className: 'img-responsive'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'notepad-desc' },
            _react2.default.createElement(
              'div',
              { className: 'notepad-text' },
              _react2.default.createElement(
                'h2',
                null,
                'The Notepad is here'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Don\u2019t lose track of the important things you need to do in the chaos of chat.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'The Notepad allows your whole team to write meeting minutes, manage tasks, track packages, analyze spreadsheets, brainstorm, and much more.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Collaborate conveniently in an easy to access location.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'notepad-text' },
              _react2.default.createElement(
                'h2',
                null,
                'Bots are here to help'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Bots are your business\u2019 best friend.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'The Notepad isn\u2019t just limited to simple collaborative tools. We at Olis are constantly developing the next generation of enterprise-use smart bots that can help your company efficiently and effectively automate important work so your team can focus on being more productive.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'An API will also be available soon for companies to quickly develop their own special bots to handle their own unique problems.'
              )
            )
          )
        ),
        _react2.default.createElement('div', { className: 'white-bar' })
      );
    }
  }]);

  return NotepadShowcase;
}(_react2.default.Component);

exports.default = NotepadShowcase;
});

;require.register("components/Home/Problems.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _raisedButton = require('material-ui/lib/raised-button');

var _raisedButton2 = _interopRequireDefault(_raisedButton);

var _accessTime = require('material-ui/lib/svg-icons/device/access-time');

var _accessTime2 = _interopRequireDefault(_accessTime);

var _findInPage = require('material-ui/lib/svg-icons/action/find-in-page');

var _findInPage2 = _interopRequireDefault(_findInPage);

var _directions = require('material-ui/lib/svg-icons/maps/directions');

var _directions2 = _interopRequireDefault(_directions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Problems = function (_React$Component) {
  _inherits(Problems, _React$Component);

  function Problems() {
    _classCallCheck(this, Problems);

    return _possibleConstructorReturn(this, (Problems.__proto__ || Object.getPrototypeOf(Problems)).apply(this, arguments));
  }

  _createClass(Problems, [{
    key: 'render',
    value: function render() {
      var highlightColor = '#FF4081';
      var iconStyle = {
        width: '64px',
        height: '64px',
        textAlign: 'center'
      };
      return _react2.default.createElement(
        'div',
        { className: 'problems' },
        _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                'div',
                { className: 'problem-headline' },
                'What\'s wrong with existing chat solutions?'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 8 },
              _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-icon' },
                    _react2.default.createElement(_accessTime2.default, { color: highlightColor, style: iconStyle })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-item-title' },
                    'Wasting Time'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-item-desc' },
                    'You feel chained to the software, not being able to step away without missing out.'
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-icon' },
                    _react2.default.createElement(_findInPage2.default, { color: highlightColor, style: iconStyle })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-item-title' },
                    'Digging for Information'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-item-desc' },
                    'Having to dig through 100s of messages trying to find key decisions and relevant takeaways.'
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 4 },
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-icon' },
                    _react2.default.createElement(_directions2.default, { color: highlightColor, style: iconStyle })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-item-title' },
                    'Lacking Action'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'problem-item-desc' },
                    'Spending too much time chatting and not enough time making decisions and planning actions.'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              'div',
              { className: 'center' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/problems' },
                _react2.default.createElement(_raisedButton2.default, {
                  label: 'Why do I even need chat?',
                  labelStyle: { color: highlightColor },
                  style: { margin: '25px 0 25px' }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Problems;
}(_react2.default.Component);

exports.default = Problems;
});

;require.register("components/Problems.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _SectionWrapper = require('./Problems/SectionWrapper');

var _SectionWrapper2 = _interopRequireDefault(_SectionWrapper);

var _raisedButton = require('material-ui/lib/raised-button');

var _raisedButton2 = _interopRequireDefault(_raisedButton);

var _Footer = require('./common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Problems = function (_React$Component) {
  _inherits(Problems, _React$Component);

  function Problems(props) {
    _classCallCheck(this, Problems);

    var _this = _possibleConstructorReturn(this, (Problems.__proto__ || Object.getPrototypeOf(Problems)).call(this, props));

    _this.state = {
      sourcesMenuOpen: false
    };
    return _this;
  }

  _createClass(Problems, [{
    key: 'toggleMenuOpen',
    value: function toggleMenuOpen() {
      var currentState = this.state.sourcesMenuOpen;
      this.setState({
        sourcesMenuOpen: !currentState
      });
    }
  }, {
    key: 'renderSourcesMenu',
    value: function renderSourcesMenu() {
      var menuOpen = this.state.sourcesMenuOpen;
      var menuStyle = {
        bottom: menuOpen ? '0' : '-280px'
      };
      var tabText = menuOpen ? 'Hide Sources' : 'Show Sources';
      return _react2.default.createElement(
        'div',
        { className: 'sources-menu', style: menuStyle },
        _react2.default.createElement(
          'div',
          { className: 'toggle-tab', onClick: this.toggleMenuOpen.bind(this) },
          tabText
        ),
        _react2.default.createElement(
          'div',
          { className: 'content-container' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://emailstatcenter.com/Usage.html', target: '_blank' },
              'Email Usage/Penetrations'
            ),
            ' \u2022 EmailStatCounter'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://www.ics.uci.edu/~gmark/Home_page/Research_files/CHI%202012.pdf', target: '_blank' },
              'A Pace Not Dictated by Electrons'
            ),
            ' \u2022 University of California'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://research.microsoft.com/en-us/um/people/horvitz/chi_2007_iqbal_horvitz.pdf', target: '_blank' },
              'Disruption and Recovery of Computing Tasks'
            ),
            ' \u2022 Microsoft Research'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://news.bbc.co.uk/1/hi/uk/4471607.stm', target: '_blank' },
              '\'Infomania\' worse than marijuana'
            ),
            ' \u2022 BBC News'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://e-meetings.verizonbusiness.com/global/en/meetingsinamerica/uswhitepaper.php', target: '_blank' },
              'Meetings in America'
            ),
            ' \u2022 Verizon Business'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://www.effectivemeetings.com/meetingbasics/meetstate.asp', target: '_blank' },
              'State of Meetings Today'
            ),
            ' \u2022 EffectiveMeetings'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://business.salary.com/why-how-your-employees-are-wasting-time-at-work/', target: '_blank' },
              'Why & How Your Employees are Wasting Time at Work'
            ),
            ' \u2022 Salary.com'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'http://www.keyorganization.com/time-management-statistics.php', target: '_blank' },
              'Time Management Statistics'
            ),
            ' \u2022 Key Organization Systyems'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'problems-page' },
        _react2.default.createElement(
          _SectionWrapper2.default,
          { imgSrc: '/assets/img/problems/time.jpg' },
          _react2.default.createElement(
            'h1',
            { className: 'section-title' },
            'YOUR TIME IS BEING WASTED'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'At least ',
            _react2.default.createElement(
              'span',
              { style: { color: '#F012BE' }, className: 'big-number' },
              '40%'
            ),
            ' of time at work is unproductive.'
          )
        ),
        _react2.default.createElement(
          _SectionWrapper2.default,
          { imgSrc: '/assets/img/problems/emails.jpg' },
          _react2.default.createElement(
            'h1',
            { className: 'section-title' },
            'THERE ARE TOO MANY EMAILS'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'Workers check their email ',
            _react2.default.createElement(
              'span',
              { style: { color: '#FFDC00' }, className: 'big-number' },
              '35'
            ),
            ' times an hour.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'It also takes them ',
            _react2.default.createElement(
              'span',
              { style: { color: '#FFDC00' }, className: 'big-number' },
              '16'
            ),
            ' minutes to refocus.'
          )
        ),
        _react2.default.createElement(
          _SectionWrapper2.default,
          { imgSrc: '/assets/img/problems/interruptions.jpg' },
          _react2.default.createElement(
            'h1',
            { className: 'section-title' },
            'YOU ARE CONSTANTLY INTERRUPTED'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'Up to ',
            _react2.default.createElement(
              'span',
              { style: { color: '#01FF01' }, className: 'big-number' },
              '80%'
            ),
            ' of all emails, calls, and other disruptions are not needed.'
          )
        ),
        _react2.default.createElement(
          _SectionWrapper2.default,
          { imgSrc: '/assets/img/problems/meetings.jpg' },
          _react2.default.createElement(
            'h1',
            { className: 'section-title' },
            'TOO MANY UNPRODUCTIVE MEETINGS'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'Workers spend ',
            _react2.default.createElement(
              'span',
              { style: { color: '#BA01FF' }, className: 'big-number' },
              '31'
            ),
            ' hours a month in meetings.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'And in those meetings, ',
            _react2.default.createElement(
              'span',
              { style: { color: '#BA01FF' }, className: 'big-number' },
              '39%'
            ),
            ' fall asleep.'
          )
        ),
        _react2.default.createElement(
          _SectionWrapper2.default,
          { imgSrc: '/assets/img/problems/skyline.jpg' },
          _react2.default.createElement(
            'h1',
            { className: 'section-title' },
            'BILLIONS LOST EVERY YEAR'
          ),
          _react2.default.createElement(
            'div',
            { className: 'section-subtitle' },
            'In the US alone, ',
            _react2.default.createElement(
              'span',
              { style: { color: '#0074D9' }, className: 'big-number' },
              '37 billion dollars'
            ),
            ' are lost to unproductivity every year.'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            _react2.default.createElement(_raisedButton2.default, {
              label: 'We can help',
              primary: true,
              style: { margin: '25px 0 25px' }
            })
          )
        ),
        _react2.default.createElement(_Footer2.default, null),
        this.renderSourcesMenu()
      );
    }
  }]);

  return Problems;
}(_react2.default.Component);

exports.default = Problems;
});

;require.register("components/Problems/SectionWrapper.jsx", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SectionWrapper = function (_React$Component) {
  _inherits(SectionWrapper, _React$Component);

  function SectionWrapper() {
    _classCallCheck(this, SectionWrapper);

    return _possibleConstructorReturn(this, (SectionWrapper.__proto__ || Object.getPrototypeOf(SectionWrapper)).apply(this, arguments));
  }

  _createClass(SectionWrapper, [{
    key: "render",
    value: function render() {
      var bgStyle = {
        backgroundImage: "url(" + this.props.imgSrc + ")"
      };
      return _react2.default.createElement(
        "div",
        { className: "problem-section" },
        _react2.default.createElement("div", { className: "problem-bg", style: bgStyle }),
        _react2.default.createElement("div", { className: "section-overlay" }),
        _react2.default.createElement(
          "div",
          { className: "section-content" },
          this.props.children
        )
      );
    }
  }]);

  return SectionWrapper;
}(_react2.default.Component);

exports.default = SectionWrapper;
});

;require.register("components/common/Footer.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _raisedButton = require('material-ui/lib/raised-button');

var _raisedButton2 = _interopRequireDefault(_raisedButton);

var _fontIcon = require('material-ui/lib/font-icon');

var _fontIcon2 = _interopRequireDefault(_fontIcon);

var _removeRedEye = require('material-ui/lib/svg-icons/image/remove-red-eye');

var _removeRedEye2 = _interopRequireDefault(_removeRedEye);

var _libraryBooks = require('material-ui/lib/svg-icons/av/library-books');

var _libraryBooks2 = _interopRequireDefault(_libraryBooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'contact-us' },
            'Contact Us'
          ),
          _react2.default.createElement(
            'div',
            { className: 'contact-email' },
            _react2.default.createElement(
              'a',
              { href: 'mailto:info@getolis.com' },
              _react2.default.createElement('i', { className: 'glyphicon glyphicon-envelope', style: { marginRight: '10px', verticalAlign: 'middle' } }),
              'info@getolis.com'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'footer-links' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement(_removeRedEye2.default, { color: 'white' }),
                _react2.default.createElement('br', null),
                'Privacy'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement(_libraryBooks2.default, { color: 'white' }),
                _react2.default.createElement('br', null),
                'Terms'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'copyright-text' },
            '\xA9 2016 OlisApp'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;
});

;require.register("components/common/Hexagon.jsx", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hexagon = function (_React$Component) {
  _inherits(Hexagon, _React$Component);

  function Hexagon() {
    _classCallCheck(this, Hexagon);

    return _possibleConstructorReturn(this, (Hexagon.__proto__ || Object.getPrototypeOf(Hexagon)).apply(this, arguments));
  }

  _createClass(Hexagon, [{
    key: 'render',
    value: function render() {
      var hexagonSize = this.props.size;
      var hexagonColor = this.props.color;
      var triangleHeight = (hexagonSize / 2 * (1 / Math.sqrt(3))).toFixed(0);

      var styles = {
        container: {
          position: 'relative',
          width: hexagonSize + 'px'
        },
        body: {
          backgroundColor: hexagonColor,
          width: hexagonSize + 'px',
          height: triangleHeight * 2 + 'px'
        },
        topTriangle: {
          width: '0',
          borderBottom: triangleHeight + 'px solid ' + hexagonColor,
          borderLeft: hexagonSize / 2 + 'px solid transparent',
          borderRight: hexagonSize / 2 + 'px solid transparent'
        },
        bottomTriangle: {
          width: '0',
          borderTop: triangleHeight + 'px solid ' + hexagonColor,
          borderLeft: hexagonSize / 2 + 'px solid transparent',
          borderRight: hexagonSize / 2 + 'px solid transparent'
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '100%'
        }
      };

      if (this.props.style) {
        styles.container = Object.assign(styles.container, this.props.style);
      }
      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement('div', { style: styles.topTriangle }),
        _react2.default.createElement('div', { style: styles.body }),
        _react2.default.createElement('div', { style: styles.bottomTriangle }),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          this.props.children
        )
      );
    }
  }]);

  return Hexagon;
}(_react2.default.Component);

exports.default = Hexagon;


Hexagon.defaultProps = {
  size: 240,
  color: 'red'
};
});

;require.register("initialize.js", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Problems = require('components/Problems');

var _Problems2 = _interopRequireDefault(_Problems);

var _About = require('components/About');

var _About2 = _interopRequireDefault(_About);

var _Features = require('components/Features');

var _Features2 = _interopRequireDefault(_Features);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleNewPageLoad = function handleNewPageLoad() {
  // Scroll to top on new page loads
  window.scrollTo(0, 0);

  // Close the navbar menu if it is open
  var navCollapse = (0, _jquery2.default)('.navbar-collapse')[0];
  if (navCollapse.classList.length === 3) {
    (0, _jquery2.default)('.navbar-toggle').click();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory, onUpdate: handleNewPageLoad },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _App2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'features', component: _Features2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'problems', component: _Problems2.default })
    )
  ), document.querySelector('#app'));
});
});

require.alias("react/react.js", "react");
require.alias("react-router/lib/index.js", "react-router");
require.alias("jquery/dist/jquery.js", "jquery");
require.alias("react-bootstrap/lib/index.js", "react-bootstrap");
require.alias("material-ui/lib/index.js", "material-ui");
require.alias("react-router/node_modules/warning/browser.js", "react-router/node_modules/warning");
require.alias("invariant/browser.js", "invariant");
require.alias("react-rotating-text/lib/ReactRotatingText.js", "react-rotating-text");
require.alias("history/lib/index.js", "history");
require.alias("warning/browser.js", "warning");
require.alias("react-prop-types/lib/index.js", "react-prop-types");
require.alias("react-overlays/lib/index.js", "react-overlays");
require.alias("brunch/node_modules/process/browser.js", "brunch/node_modules/process");
require.alias("react-overlays/node_modules/react-prop-types/lib/index.js", "react-overlays/node_modules/react-prop-types");
require.alias("inline-style-prefixer/lib/Prefixer.js", "inline-style-prefixer");
require.alias("react-overlays/node_modules/warning/browser.js", "react-overlays/node_modules/warning");
require.alias("bowser/src/bowser.js", "bowser");
require.alias("brunch/node_modules/process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map