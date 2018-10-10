/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mobx-react/index.module.js":
/*!*************************************************!*\
  !*** ./node_modules/mobx-react/index.module.js ***!
  \*************************************************/
/*! exports provided: propTypes, PropTypes, onError, observer, Observer, renderReporter, componentByNodeRegistery, componentByNodeRegistry, trackComponents, useStaticRendering, Provider, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReporter", function() { return renderReporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentByNodeRegistery", function() { return componentByNodeRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentByNodeRegistry", function() { return componentByNodeRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackComponents", function() { return trackComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




// These functions can be stubbed out in specific environments
var unstable_batchedUpdates$1 = undefined;

'use strict';

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var EventEmitter = function () {
    function EventEmitter() {
        classCallCheck(this, EventEmitter);
        this.listeners = [];
    }

    createClass(EventEmitter, [{
        key: "on",
        value: function on(cb) {
            var _this = this;

            this.listeners.push(cb);
            return function () {
                var index = _this.listeners.indexOf(cb);
                if (index !== -1) _this.listeners.splice(index, 1);
            };
        }
    }, {
        key: "emit",
        value: function emit(data) {
            this.listeners.forEach(function (fn) {
                return fn(data);
            });
        }
    }]);
    return EventEmitter;
}();

// Copied from React.PropTypes
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
            rest[_key - 6] = arguments[_key];
        }

        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
            componentName = componentName || "<<anonymous>>";
            propFullName = propFullName || propName;
            if (props[propName] == null) {
                if (isRequired) {
                    var actual = props[propName] === null ? "null" : "undefined";
                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
                }
                return null;
            } else {
                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
            }
        });
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}

// Copied from React.PropTypes
function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
        return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
        return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
    }

    return false;
}

// Copied from React.PropTypes
function getPropType(propValue) {
    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
    if (Array.isArray(propValue)) {
        return "array";
    }
    if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
    }
    if (isSymbol(propType, propValue)) {
        return "symbol";
    }
    return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes
function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === "object") {
        if (propValue instanceof Date) {
            return "date";
        } else if (propValue instanceof RegExp) {
            return "regexp";
        }
    }
    return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
            if (allowNativeType) {
                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
            }
            var mobxChecker = void 0;
            switch (mobxType) {
                case "Array":
                    mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
                    break;
                case "Object":
                    mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
                    break;
                case "Map":
                    mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
                    break;
                default:
                    throw new Error("Unexpected mobxType: " + mobxType);
            }
            var propValue = props[propName];
            if (!mobxChecker(propValue)) {
                var preciseType = getPreciseType(propValue);
                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
            }
            return null;
        });
    });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            rest[_key2 - 5] = arguments[_key2];
        }

        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
            if (typeof typeChecker !== "function") {
                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
            }
            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
            if (error instanceof Error) return error;
            var propValue = props[propName];
            for (var i = 0; i < propValue.length; i++) {
                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
                if (error instanceof Error) return error;
            }
            return null;
        });
    });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");



var propTypes = Object.freeze({
	observableArray: observableArray,
	observableArrayOf: observableArrayOf,
	observableMap: observableMap,
	observableObject: observableObject,
	arrayOrObservableArray: arrayOrObservableArray,
	arrayOrObservableArrayOf: arrayOrObservableArrayOf,
	objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
    // `function() {}` has prototype, but `() => {}` doesn't
    // `() => {}` via Babel has prototype too.
    return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
    mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);

var proxiedInjectorProps = {
    contextTypes: {
        get: function get$$1() {
            return injectorContextTypes;
        },
        set: function set$$1(_) {
            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
        },
        configurable: true,
        enumerable: false
    },
    isMobxInjector: {
        value: true,
        writable: true,
        configurable: true,
        enumerable: true
    }

    /**
     * Store Injection
     */
};function createStoreInjector(grabStoresFn, component, injectNames) {
    var _class, _temp2;

    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
    if (injectNames) displayName += "-with-" + injectNames;

    var Injector = (_temp2 = _class = function (_Component) {
        inherits(Injector, _Component);

        function Injector() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Injector);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
                _this.wrappedInstance = instance;
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Injector, [{
            key: "render",
            value: function render() {
                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
                // See this test: 'using a custom injector is not too reactive' in inject.js
                var newProps = {};
                for (var key in this.props) {
                    if (this.props.hasOwnProperty(key)) {
                        newProps[key] = this.props[key];
                    }
                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
                for (var _key2 in additionalProps) {
                    newProps[_key2] = additionalProps[_key2];
                }

                if (!isStateless(component)) {
                    newProps.ref = this.storeRef;
                }

                return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(component, newProps);
            }
        }]);
        return Injector;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.displayName = displayName, _temp2);

    // Static fields from component should be visible on the generated Injector

    hoistNonReactStatics_cjs(Injector, component);

    Injector.wrappedComponent = component;
    Object.defineProperties(Injector, proxiedInjectorProps);

    return Injector;
}

function grabStoresByName(storeNames) {
    return function (baseStores, nextProps) {
        storeNames.forEach(function (storeName) {
            if (storeName in nextProps // prefer props over stores
            ) return;
            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
            nextProps[storeName] = baseStores[storeName];
        });
        return nextProps;
    };
}

/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */
function inject() /* fn(stores, nextProps) or ...storeNames */{
    var grabStoresFn = void 0;
    if (typeof arguments[0] === "function") {
        grabStoresFn = arguments[0];
        return function (componentClass) {
            var injected = createStoreInjector(grabStoresFn, componentClass);
            injected.isMobxInjector = false; // supress warning
            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
            // see #111
            injected = observer(injected);
            injected.isMobxInjector = true; // restore warning
            return injected;
        };
    } else {
        var storeNames = [];
        for (var i = 0; i < arguments.length; i++) {
            storeNames[i] = arguments[i];
        }grabStoresFn = grabStoresByName(storeNames);
        return function (componentClass) {
            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
        };
    }
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";

/**
 * dev tool support
 */
var isDevtoolsEnabled = false;

var isUsingStaticRendering = false;

var warnedAboutObserverInjectDeprecation = false;

// WeakMap<Node, Object>;
var componentByNodeRegistry = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();

var createdSymbols = {};

function createRealSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol(name);
    }
    return "$mobxReactProp$" + name + Math.random();
}

function createSymbol(name) {
    if (!createdSymbols[name]) {
        createdSymbols[name] = createRealSymbol(name);
    }
    return createdSymbols[name];
}

var skipRenderKey = createSymbol("skipRender");
var isForcingUpdateKey = createSymbol("isForcingUpdate");

/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */
function setHiddenProp(target, prop, value) {
    if (!Object.hasOwnProperty.call(target, prop)) {
        Object.defineProperty(target, prop, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        });
    } else {
        target[prop] = value;
    }
}

function findDOMNode$2(component) {
    if (react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"]) {
        try {
            return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(component);
        } catch (e) {
            // findDOMNode will throw in react-test-renderer, see:
            // See https://github.com/mobxjs/mobx-react/issues/216
            // Is there a better heuristic?
            return null;
        }
    }
    return null;
}

function reportRendering(component) {
    var node = findDOMNode$2(component);
    if (node && componentByNodeRegistry) componentByNodeRegistry.set(node, component);

    renderReporter.emit({
        event: "render",
        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
        totalTime: Date.now() - component.__$mobRenderStart,
        component: component,
        node: node
    });
}

function trackComponents() {
    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
    isUsingStaticRendering = useStaticRendering;
}

/**
 * Errors reporter
 */

var errorsReporter = new EventEmitter();

/**
 * Utilities
 */

function patch(target, funcName) {
    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var base = target[funcName];
    var mixinFunc = reactiveMixin[funcName];
    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
        mixinFunc.apply(this, arguments);
        base.apply(this, arguments);
    } : function () {
        base.apply(this, arguments);
        mixinFunc.apply(this, arguments);
    };

    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
    // ...but that breaks react-hot-loader, see #231...
    target[funcName] = f;
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

function makeComponentReactive(render) {
    var _this2 = this;

    if (isUsingStaticRendering === true) return render.call(this);

    function reactiveRender() {
        var _this = this;

        isRenderingPending = false;
        var exception = undefined;
        var rendering = undefined;
        reaction.track(function () {
            if (isDevtoolsEnabled) {
                _this.__$mobRenderStart = Date.now();
            }
            try {
                rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
            } catch (e) {
                exception = e;
            }
            if (isDevtoolsEnabled) {
                _this.__$mobRenderEnd = Date.now();
            }
        });
        if (exception) {
            errorsReporter.emit(exception);
            throw exception;
        }
        return rendering;
    }

    // Generate friendly name for debugging
    var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
    var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalInstance && this._reactInternalInstance._debugID || this._reactInternalFiber && this._reactInternalFiber._debugID;
    /**
     * If props are shallowly modified, react will render anyway,
     * so atom.reportChanged() should not result in yet another re-render
     */
    setHiddenProp(this, skipRenderKey, false);
    /**
     * forceUpdate will re-assign this.props. We don't want that to cause a loop,
     * so detect these changes
     */
    setHiddenProp(this, isForcingUpdateKey, false);

    // wire up reactive render
    var baseRender = render.bind(this);
    var isRenderingPending = false;

    var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + "#" + rootNodeID + ".render()", function () {
        if (!isRenderingPending) {
            // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
            // This unidiomatic React usage but React will correctly warn about this so we continue as usual
            // See #85 / Pull #44
            isRenderingPending = true;
            if (typeof _this2.componentWillReact === "function") _this2.componentWillReact(); // TODO: wrap in action?
            if (_this2.__$mobxIsUnmounted !== true) {
                // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
                // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
                // However, people also claim this migth happen during unit tests..
                var hasError = true;
                try {
                    setHiddenProp(_this2, isForcingUpdateKey, true);
                    if (!_this2[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this2);
                    hasError = false;
                } finally {
                    setHiddenProp(_this2, isForcingUpdateKey, false);
                    if (hasError) reaction.dispose();
                }
            }
        }
    });
    reaction.reactComponent = this;
    reactiveRender[mobxAdminProperty] = reaction;
    this.render = reactiveRender;
    return reactiveRender.call(this);
}

/**
 * ReactiveMixin
 */
var reactiveMixin = {
    componentWillUnmount: function componentWillUnmount() {
        if (isUsingStaticRendering === true) return;
        this.render[mobxAdminProperty] && this.render[mobxAdminProperty].dispose();
        this.__$mobxIsUnmounted = true;
        if (isDevtoolsEnabled) {
            var node = findDOMNode$2(this);
            if (node && componentByNodeRegistry) {
                componentByNodeRegistry.delete(node);
            }
            renderReporter.emit({
                event: "destroy",
                component: this,
                node: node
            });
        }
    },

    componentDidMount: function componentDidMount() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (isUsingStaticRendering) {
            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
        }
        // update on any state changes (as is the default)
        if (this.state !== nextState) {
            return true;
        }
        // update if props are shallowly not equal, inspired by PureRenderMixin
        // we could return just 'false' here, and avoid the `skipRender` checks etc
        // however, it is nicer if lifecycle events are triggered like usually,
        // so we return true here if props are shallowly modified.
        return !shallowEqual(this.props, nextProps);
    }
};

function makeObservableProp(target, propName) {
    var valueHolderKey = createSymbol(propName + " value holder");
    var atomHolderKey = createSymbol(propName + " atom holder");
    function getAtom() {
        if (!this[atomHolderKey]) {
            setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
        }
        return this[atomHolderKey];
    }
    Object.defineProperty(target, propName, {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            getAtom.call(this).reportObserved();
            return this[valueHolderKey];
        },
        set: function set$$1(v) {
            if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
                setHiddenProp(this, valueHolderKey, v);
                setHiddenProp(this, skipRenderKey, true);
                getAtom.call(this).reportChanged();
                setHiddenProp(this, skipRenderKey, false);
            } else {
                setHiddenProp(this, valueHolderKey, v);
            }
        }
    });
}

/**
 * Observer function / decorator
 */
function observer(arg1, arg2) {
    if (typeof arg1 === "string") {
        throw new Error("Store names should be provided as array");
    }
    if (Array.isArray(arg1)) {
        // TODO: remove in next major
        // component needs stores
        if (!warnedAboutObserverInjectDeprecation) {
            warnedAboutObserverInjectDeprecation = true;
            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
        }
        if (!arg2) {
            // invoked as decorator
            return function (componentClass) {
                return observer(arg1, componentClass);
            };
        } else {
            return inject.apply(null, arg1)(observer(arg2));
        }
    }
    var componentClass = arg1;

    if (componentClass.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }
    if (componentClass.__proto__ === react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
        console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together");
    }

    // Stateless function component:
    // If it is function but doesn't seem to be a react class constructor,
    // wrap it to a react class automatically
    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !react__WEBPACK_IMPORTED_MODULE_1__["Component"].isPrototypeOf(componentClass)) {
        var _class, _temp;

        var observerComponent = observer((_temp = _class = function (_Component) {
            inherits(_class, _Component);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: "render",
                value: function render() {
                    return componentClass.call(this, this.props, this.context);
                }
            }]);
            return _class;
        }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
        hoistNonReactStatics_cjs(observerComponent, componentClass);
        return observerComponent;
    }

    if (!componentClass) {
        throw new Error("Please pass a valid component to 'observer'");
    }

    var target = componentClass.prototype || componentClass;
    mixinLifecycleEvents(target);
    componentClass.isMobXReactObserver = true;
    makeObservableProp(target, "props");
    makeObservableProp(target, "state");
    var baseRender = target.render;
    target.render = function () {
        return makeComponentReactive.call(this, baseRender);
    };
    return componentClass;
}

function mixinLifecycleEvents(target) {
    ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
        patch(target, funcName);
    });
    if (!target.shouldComponentUpdate) {
        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
    } else {
        if (target.shouldComponentUpdate !== reactiveMixin.shouldComponentUpdate) {
            // TODO: make throw in next major
            console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react.");
        }
    }
}

var Observer = observer(function (_ref) {
    var children = _ref.children,
        observerInject = _ref.inject,
        render = _ref.render;

    var component = children || render;
    if (typeof component === "undefined") {
        return null;
    }
    if (!observerInject) {
        return component();
    }
    // TODO: remove in next major
    console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");
    var InjectComponent = inject(observerInject)(component);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InjectComponent, null);
});

Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
        return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
    }

    if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
        return;
    }
    return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
    render: ObserverPropsCheck,
    children: ObserverPropsCheck
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component$$1) {
  var prototype = Component$$1.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component$$1.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component$$1;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component$$1.displayName || Component$$1.name;
    var newApiName =
      typeof Component$$1.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component$$1.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component$$1;
}

var _class;
var _temp;

var specialReactKeys = { children: true, key: true, ref: true };

var Provider = (_temp = _class = function (_Component) {
    inherits(Provider, _Component);

    function Provider(props, context) {
        classCallCheck(this, Provider);

        var _this = possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

        _this.state = {};
        copyStores(props, _this.state);
        return _this;
    }

    createClass(Provider, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        }
    }, {
        key: "getChildContext",
        value: function getChildContext() {
            var stores = {};
            // inherit stores
            copyStores(this.context.mobxStores, stores);
            // add own stores
            copyStores(this.props, stores);
            return {
                mobxStores: stores
            };
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
            if (!nextProps) return null;
            if (!prevState) return nextProps;

            // Maybe this warning is too aggressive?
            if (Object.keys(nextProps).filter(validStoreName).length !== Object.keys(prevState).filter(validStoreName).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
                if (validStoreName(key) && prevState[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
            }return nextProps;
        }
    }]);
    return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.contextTypes = {
    mobxStores: objectOrObservableObject
}, _class.childContextTypes = {
    mobxStores: objectOrObservableObject.isRequired
}, _temp);


function copyStores(from, to) {
    if (!from) return;
    for (var key in from) {
        if (validStoreName(key)) to[key] = from[key];
    }
}

function validStoreName(key) {
    return !specialReactKeys[key] && key !== "suppressChangedStoreWarning";
}

// TODO: kill in next major
polyfill(Provider);

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) throw new Error("mobx-react requires mobx to be available");

if (typeof react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"] === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"] });else if (typeof unstable_batchedUpdates$1 === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: unstable_batchedUpdates$1 });

var onError = function onError(fn) {
    return errorsReporter.on(fn);
};

/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    var mobx$1 = { spy: mobx__WEBPACK_IMPORTED_MODULE_0__["spy"], extras: { getDebugName: mobx__WEBPACK_IMPORTED_MODULE_0__["getDebugName"] } };
    var mobxReact = {
        renderReporter: renderReporter,
        componentByNodeRegistry: componentByNodeRegistry,
        componentByNodeRegistery: componentByNodeRegistry,
        trackComponents: trackComponents
    };
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}




/***/ }),

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: Reaction, untracked, IDerivationState, createAtom, spy, comparer, isObservableObject, isBoxedObservable, isObservableArray, ObservableMap, isObservableMap, transaction, observable, computed, isObservable, isObservableProp, isComputed, isComputedProp, extendObservable, observe, intercept, autorun, reaction, when, action, isAction, runInAction, keys, values, entries, set, remove, has, get, decorate, configure, onBecomeObserved, onBecomeUnobserved, flow, toJS, trace, getDependencyTree, getObserverTree, _resetGlobalState, _getGlobalState, getDebugName, getAtom, _getAdministration, _allowStateChanges, _allowStateChangesInsideComputed, isArrayLike, $mobx, _isComputingDerivation, onReactionError, _interceptReads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads$$1; });
/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};















function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR$$1 = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY$$1 = [];
Object.freeze(EMPTY_ARRAY$$1);
var EMPTY_OBJECT$$1 = {};
Object.freeze(EMPTY_OBJECT$$1);
function getNextId$$1() {
    return ++globalState$$1.mobxGuid;
}
function fail$$1(message) {
    invariant$$1(false, message);
    throw "X"; // unreachable
}
function invariant$$1(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR$$1));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated$$1(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated$$1("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once$$1(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop$$1 = function () { };
function unique$$1(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject$$1(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject$$1(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

function addHiddenProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable$$1(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable$$1(object, prop) {
    if ("development" !== "production" && !isPropertyConfigurable$$1(object, prop))
        fail$$1("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate$$1(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject$$1(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike$$1(x) {
    return Array.isArray(x) || isObservableArray$$1(x);
}
function isES6Map$$1(thing) {
    return thing instanceof Map;
}
function getMapLikeKeys$$1(map) {
    if (isPlainObject$$1(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map$$1(map) || isObservableMap$$1(map))
        return Array.from(map.keys());
    return fail$$1("Cannot get keys from '" + map + "'");
}
function toPrimitive$$1(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx$$1 = Symbol("mobx administration");
var Atom$$1 = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom$$1(name) {
        if (name === void 0) { name = "Atom@" + getNextId$$1(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom$$1.prototype.onBecomeUnobserved = function () {
        // noop
    };
    Atom$$1.prototype.onBecomeObserved = function () {
        /* noop */
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom$$1.prototype.reportObserved = function () {
        return reportObserved$$1(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom$$1.prototype.reportChanged = function () {
        startBatch$$1();
        propagateChanged$$1(this);
        endBatch$$1();
    };
    Atom$$1.prototype.toString = function () {
        return this.name;
    };
    return Atom$$1;
}());
var isAtom$$1 = createInstanceofPredicate$$1("Atom", Atom$$1);
function createAtom$$1(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop$$1; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop$$1; }
    var atom = new Atom$$1(name);
    onBecomeObserved$$1(atom, onBecomeObservedHandler);
    onBecomeUnobserved$$1(atom, onBecomeUnobservedHandler);
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual$$1(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer$$1 = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol$$1 = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators$$1 = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance$$1(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance$$1(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance$$1(target) {
    if (target[mobxDidRunLazyInitializersSymbol$$1] === true)
        return;
    var decorators = target[mobxPendingDecorators$$1];
    if (decorators) {
        addHiddenProp$$1(target, mobxDidRunLazyInitializersSymbol$$1, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator$$1(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate$$1(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ("development" !== "production" && !quacksLikeADecorator$$1(arguments))
                fail$$1("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators$$1)) {
                var inheritedDecorators = target[mobxPendingDecorators$$1];
                addHiddenProp$$1(target, mobxPendingDecorators$$1, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators$$1][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator$$1(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY$$1;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator$$1(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer$$1(v, _, name) {
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name });
    return v;
}
function shallowEnhancer$$1(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject$$1(v) || isObservableArray$$1(v) || isObservableMap$$1(v))
        return v;
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name, deep: false });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name, deep: false });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name, deep: false });
    return fail$$1("development" !== "production" &&
        "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer$$1(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer$$1(v, oldValue, name) {
    if ("development" !== "production" && isObservable$$1(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual$$1(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer$$1(enhancer) {
    invariant$$1(enhancer);
    var decorator = createPropDecorator$$1(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant$$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject$$1(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions$$1 = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions$$1);
function assertValidOption(key) {
    if (!/^(deep|name|defaultDecorator|proxy)$/.test(key))
        fail$$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions$$1(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions$$1;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail$$1("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator$$1 = createDecoratorForEnhancer$$1(deepEnhancer$$1);
var shallowDecorator = createDecoratorForEnhancer$$1(shallowEnhancer$$1);
var refDecorator$$1 = createDecoratorForEnhancer$$1(referenceEnhancer$$1);
var refStructDecorator = createDecoratorForEnhancer$$1(refStructEnhancer$$1);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer$$1
            : deepEnhancer$$1;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator$$1.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject$$1(v)
        ? observable$$1.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable$$1.array(v, arg2)
            : isES6Map$$1(v)
                ? observable$$1.map(v, arg2)
                : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$$1("development" !== "production" &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableValue$$1(value, getEnhancerFromOptions(o), o.name);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions$$1(options);
        return createObservableArray$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableMap$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions$$1(options);
        if (o.proxy === false) {
            return extendObservable$$1({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(o);
            var base = extendObservable$$1({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject$$1(base);
            extendObservableObjectWithProperties$$1(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator$$1,
    shallow: shallowDecorator,
    deep: deepDecorator$$1,
    struct: refStructDecorator
};
var observable$$1 = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable$$1[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$$1(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator$$1 = createPropDecorator$$1(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get$$1 = descriptor.get, set$$1 = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    var options = decoratorArgs[0] || {};
    asObservableObject$$1(instance).addComputedProp(decoratorTarget, propertyName, __assign({ get: get$$1,
        set: set$$1, context: instance }, options));
});
var computedStructDecorator = computedDecorator$$1({ equals: comparer$$1.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed$$1 = function computed$$1(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator$$1.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator$$1.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant$$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant$$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue$$1(opts);
};
computed$$1.struct = computedStructDecorator;

function createAction$$1(actionName, fn) {
    if (true) {
        invariant$$1(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction$$1(actionName, fn, this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction$$1(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled$$1() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart$$1({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart$$1();
    startBatch$$1();
    var prevAllowStateChanges = allowStateChangesStart$$1(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd$$1(runInfo.prevAllowStateChanges);
    endBatch$$1();
    untrackedEnd$$1(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production")
        spyReportEnd$$1({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges$$1(allowStateChanges$$1, func) {
    var prev = allowStateChangesStart$$1(allowStateChanges$$1);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd$$1(prev);
    }
    return res;
}
function allowStateChangesStart$$1(allowStateChanges$$1) {
    var prev = globalState$$1.allowStateChanges;
    globalState$$1.allowStateChanges = allowStateChanges$$1;
    return prev;
}
function allowStateChangesEnd$$1(prev) {
    globalState$$1.allowStateChanges = prev;
}
function allowStateChangesInsideComputed$$1(func) {
    var prev = globalState$$1.computationDepth;
    globalState$$1.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState$$1.computationDepth = prev;
    }
    return res;
}

var UNCHANGED$$1 = {};
var ObservableValue$$1 = /** @class */ (function (_super) {
    __extends(ObservableValue$$1, _super);
    function ObservableValue$$1(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId$$1(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled$$1() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport$$1({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue$$1.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED$$1) {
            var notifySpy = isSpyEnabled$$1();
            if (notifySpy && "development" !== "production") {
                spyReportStart$$1({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableValue$$1.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed$$1(this);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return UNCHANGED$$1;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : UNCHANGED$$1;
    };
    ObservableValue$$1.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners$$1(this)) {
            notifyListeners$$1(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue$$1.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableValue$$1.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener$$1(this, listener);
    };
    ObservableValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue$$1.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ObservableValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue$$1;
}(Atom$$1));
var isObservableValue$$1 = createInstanceofPredicate$$1("ObservableValue", ObservableValue$$1);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue$$1 = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue$$1(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.value = new CaughtException$$1(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode$$1.NONE;
        this.firstGet = true;
        if ("development" !== "production" && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId$$1();
        if (options.set)
            this.setter = createAction$$1(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer$$1.structural
                    : comparer$$1.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue$$1.prototype.onBecomeStale = function () {
        propagateMaybeChanged$$1(this);
    };
    ComputedValue$$1.prototype.onBecomeUnobserved = function () { };
    ComputedValue$$1.prototype.onBecomeObserved = function () { };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue$$1.prototype.get = function () {
        var _this = this;
        if (this.keepAlive && this.firstGet) {
            this.firstGet = false;
            autorun$$1(function () { return _this.get(); });
        }
        if (this.isComputing)
            fail$$1("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState$$1.inBatch === 0 && this.observers.size === 0) {
            if (shouldCompute$$1(this)) {
                this.warnAboutUntrackedRead();
                startBatch$$1(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch$$1();
            }
        }
        else {
            reportObserved$$1(this);
            if (shouldCompute$$1(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed$$1(this);
        }
        var result = this.value;
        if (isCaughtException$$1(result))
            throw result.cause;
        return result;
    };
    ComputedValue$$1.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException$$1(res))
            throw res.cause;
        return res;
    };
    ComputedValue$$1.prototype.set = function (value) {
        if (this.setter) {
            invariant$$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant$$1(false, "development" !== "production" &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue$$1.prototype.trackAndCompute = function () {
        if (isSpyEnabled$$1() && "development" !== "production") {
            spyReport$$1({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException$$1(oldValue) ||
            isCaughtException$$1(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue$$1.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState$$1.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction$$1(this, this.derivation, this.scope);
        }
        else {
            if (globalState$$1.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException$$1(e);
                }
            }
        }
        globalState$$1.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue$$1.prototype.suspend = function () {
        clearObserving$$1(this);
        this.value = undefined; // don't hold on to computed value!
    };
    ComputedValue$$1.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun$$1(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart$$1();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd$$1(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue$$1.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail$$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode$$1.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState$$1.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue$$1.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ComputedValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue$$1;
}());
var isComputedValue$$1 = createInstanceofPredicate$$1("ComputedValue", ComputedValue$$1);

var IDerivationState;
(function (IDerivationState$$1) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState$$1[IDerivationState$$1["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState$$1[IDerivationState$$1["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState$$1[IDerivationState$$1["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState$$1[IDerivationState$$1["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode$$1;
(function (TraceMode$$1) {
    TraceMode$$1[TraceMode$$1["NONE"] = 0] = "NONE";
    TraceMode$$1[TraceMode$$1["LOG"] = 1] = "LOG";
    TraceMode$$1[TraceMode$$1["BREAK"] = 2] = "BREAK";
})(TraceMode$$1 || (TraceMode$$1 = {}));
var CaughtException$$1 = /** @class */ (function () {
    function CaughtException$$1(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException$$1;
}());
function isCaughtException$$1(e) {
    return e instanceof CaughtException$$1;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute$$1(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart$$1(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue$$1(obj)) {
                    if (globalState$$1.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd$$1(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd$$1(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0$$1(derivation);
            untrackedEnd$$1(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation$$1() {
    return globalState$$1.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed$$1(atom) {
    var hasObservers$$1 = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState$$1.computationDepth > 0 && hasObservers$$1)
        fail$$1("development" !== "production" &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState$$1.allowStateChanges && (hasObservers$$1 || globalState$$1.enforceActions === "strict"))
        fail$$1("development" !== "production" &&
            (globalState$$1.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction$$1(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0$$1(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState$$1.runId;
    var prevTracking = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = derivation;
    var result;
    if (globalState$$1.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException$$1(e);
        }
    }
    globalState$$1.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver$$1(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver$$1(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving$$1(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver$$1(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked$$1(action$$1) {
    var prev = untrackedStart$$1();
    try {
        return action$$1();
    }
    finally {
        untrackedEnd$$1(prev);
    }
}
function untrackedStart$$1() {
    var prev = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = null;
    return prev;
}
function untrackedEnd$$1(prev) {
    globalState$$1.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0$$1(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "disableErrorBoundaries",
    "runId"
];
var MobXGlobals$$1 = /** @class */ (function () {
    function MobXGlobals$$1() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
    }
    return MobXGlobals$$1;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState$$1 = (function () {
    var global = getGlobal$$1();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals$$1().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals$$1();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals$$1());
    }
})();
function isolateGlobalState$$1() {
    if (globalState$$1.pendingReactions.length ||
        globalState$$1.inBatch ||
        globalState$$1.isRunningReactions)
        fail$$1("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal$$1().__mobxInstanceCount === 0)
            getGlobal$$1().__mobxGlobals = undefined;
        globalState$$1 = new MobXGlobals$$1();
    }
}
function getGlobalState$$1() {
    return globalState$$1;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState$$1() {
    var defaultGlobals = new MobXGlobals$$1();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState$$1[key] = defaultGlobals[key];
    globalState$$1.allowStateChanges = !globalState$$1.enforceActions;
}
function getGlobal$$1() {
    return typeof window !== "undefined" ? window : global;
}

function hasObservers$$1(observable$$1) {
    return observable$$1.observers && observable$$1.observers.size > 0;
}
function getObservers$$1(observable$$1) {
    return observable$$1.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver$$1(observable$$1, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable$$1.observers.add(node);
    if (observable$$1.lowestObserverState > node.dependenciesState)
        observable$$1.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver$$1(observable$$1, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable$$1.observers.delete(node);
    if (observable$$1.observers.size === 0) {
        // deleting last observer
        queueForUnobservation$$1(observable$$1);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation$$1(observable$$1) {
    if (observable$$1.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable$$1.isPendingUnobservation = true;
        globalState$$1.pendingUnobservations.push(observable$$1);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch$$1() {
    globalState$$1.inBatch++;
}
function endBatch$$1() {
    if (--globalState$$1.inBatch === 0) {
        runReactions$$1();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState$$1.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable$$1 = list[i];
            observable$$1.isPendingUnobservation = false;
            if (observable$$1.observers.size === 0) {
                if (observable$$1.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable$$1.isBeingObserved = false;
                    observable$$1.onBecomeUnobserved();
                }
                if (observable$$1 instanceof ComputedValue$$1) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable$$1.suspend();
                }
            }
        }
        globalState$$1.pendingUnobservations = [];
    }
}
function reportObserved$$1(observable$$1) {
    var derivation = globalState$$1.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable$$1.lastAccessedBy) {
            observable$$1.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable$$1;
            if (!observable$$1.isBeingObserved) {
                observable$$1.isBeingObserved = true;
                observable$$1.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable$$1.observers.size === 0 && globalState$$1.inBatch > 0) {
        queueForUnobservation$$1(observable$$1);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged$$1(observable$$1) {
    // invariantLOS(observable, "changed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed$$1(observable$$1) {
    // invariantLOS(observable, "confirmed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable$$1.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged$$1(observable$$1) {
    // invariantLOS(observable, "maybe start");
    if (observable$$1.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable$$1.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable$$1) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable$$1.name + "'");
    if (derivation.isTracing === TraceMode$$1.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree$$1(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable$$1.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue$$1 ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction$$1 = /** @class */ (function () {
    function Reaction$$1(name, onInvalidate, errorHandler) {
        if (name === void 0) { name = "Reaction@" + getNextId$$1(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode$$1.NONE;
    }
    Reaction$$1.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction$$1.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState$$1.pendingReactions.push(this);
            runReactions$$1();
        }
    };
    Reaction$$1.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction$$1.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch$$1();
            this._isScheduled = false;
            if (shouldCompute$$1(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled$$1() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport$$1({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch$$1();
        }
    };
    Reaction$$1.prototype.track = function (fn) {
        startBatch$$1();
        var notify = isSpyEnabled$$1();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart$$1({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction$$1(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving$$1(this);
        }
        if (isCaughtException$$1(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd$$1({
                time: Date.now() - startTime
            });
        }
        endBatch$$1();
    };
    Reaction$$1.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState$$1.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled$$1()) {
            spyReport$$1({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState$$1.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction$$1.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch$$1();
                clearObserving$$1(this);
                endBatch$$1();
            }
        }
    };
    Reaction$$1.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx$$1] = this;
        return r;
    };
    Reaction$$1.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction$$1.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace$$1(this, enterBreakPoint);
    };
    return Reaction$$1;
}());
function onReactionError$$1(handler) {
    globalState$$1.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState$$1.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState$$1.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions$$1() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState$$1.inBatch > 0 || globalState$$1.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState$$1.isRunningReactions = true;
    var allReactions = globalState$$1.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState$$1.isRunningReactions = false;
}
var isReaction$$1 = createInstanceofPredicate$$1("Reaction", Reaction$$1);
function setReactionScheduler$$1(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled$$1() {
    return "development" !== "production" && !!globalState$$1.spyListeners.length;
}
function spyReport$$1(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState$$1.spyListeners.length)
        return;
    var listeners = globalState$$1.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart$$1(event) {
    if (false)
        {}
    var change = __assign({}, event, { spyReportStart: true });
    spyReport$$1(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd$$1(change) {
    if (false)
        {}
    if (change)
        spyReport$$1(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport$$1(END_EVENT);
}
function spy$$1(listener) {
    if (false) {}
    else {
        globalState$$1.spyListeners.push(listener);
        return once$$1(function () {
            globalState$$1.spyListeners = globalState$$1.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail$$1("development" !== "production" && "@action fields are not reassignable");
}
function namedActionDecorator$$1(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ("development" !== "production" && descriptor.get !== undefined) {
                return fail$$1("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction$$1(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction$$1(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator$$1(name).apply(this, arguments);
    };
}
function actionFieldDecorator$$1(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp$$1(this, prop, action$$1(name, value));
            }
        });
    };
}
function boundActionDecorator$$1(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction$$1(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction$$1(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction$$1(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action$$1 = function action$$1(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction$$1(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction$$1(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator$$1(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp$$1(arg1, arg2, createAction$$1(arg1.name || arg2, arg3.value));
    }
    else {
        return namedActionDecorator$$1(arg2).apply(null, arguments);
    }
};
action$$1.bound = boundActionDecorator$$1;
function runInAction$$1(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant$$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction$$1(actionName, fn, this, undefined);
}
function isAction$$1(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction$$1(target, propertyName, fn) {
    addHiddenProp$$1(target, propertyName, createAction$$1(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun$$1(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof view === "function", "Autorun expects a function as first argument");
        invariant$$1(isAction$$1(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId$$1();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction$$1;
    if (runSync) {
        // normal autorun
        reaction$$1 = new Reaction$$1(name, function () {
            this.track(reactionRunner);
        }, opts.onError);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction$$1 = new Reaction$$1(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction$$1.isDisposed)
                        reaction$$1.track(reactionRunner);
                });
            }
        }, opts.onError);
    }
    function reactionRunner() {
        view(reaction$$1);
    }
    reaction$$1.schedule();
    return reaction$$1.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction$$1(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof expression === "function", "First argument to reaction should be a function");
        invariant$$1(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId$$1();
    var effectAction = action$$1(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer$$1.structural
        : opts.equals || comparer$$1.default;
    var r = new Reaction$$1(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg2 === "string" ? getAtom$$1(thing, arg2) : getAtom$$1(thing);
    var cb = typeof arg2 === "string" ? arg3 : arg2;
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$$1("development" !== "production" && "Not an atom that can be (un)observed");
    atom[hook] = function () {
        orig.call(this);
        cb.call(this);
    };
    return function () {
        atom[hook] = orig;
    };
}

function configure$$1(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler;
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated$$1("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail$$1("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState$$1.enforceActions = ea;
        globalState$$1.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState$$1.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (options.isolateGlobalState === true) {
        isolateGlobalState$$1();
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState$$1.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler$$1(reactionScheduler);
    }
}

function decorate$$1(thing, decorators) {
    "development" !== "production" &&
        invariant$$1(isPlainObject$$1(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
        "development" !== "production" &&
            invariant$$1(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable$$1(target, properties, decorators, options) {
    if (true) {
        invariant$$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant$$1(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant$$1(!isObservableMap$$1(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions$$1(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(options);
    initializeInstance$$1(target); // Fixes #1740
    asObservableObject$$1(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions$$1(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator$$1 : deepDecorator$$1);
}
function extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator) {
    if (true) {
        invariant$$1(!isObservable$$1(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail$$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    startBatch$$1();
    try {
        for (var key in properties) {
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (Object.getOwnPropertyDescriptor(target, key))
                    fail$$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
                if (isComputed$$1(descriptor.value))
                    fail$$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator$$1
                    : defaultDecorator;
            if ("development" !== "production" && typeof decorator !== "function")
                fail$$1("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch$$1();
    }
}

function getDependencyTree$$1(thing, property) {
    return nodeToDependencyTree(getAtom$$1(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique$$1(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree$$1(thing, property) {
    return nodeToObserverTree(getAtom$$1(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers$$1(node))
        result.observers = Array.from(getObservers$$1(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow$$1(generator) {
    if (arguments.length !== 1)
        fail$$1("development" && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action$$1(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var res = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        res.cancel = action$$1(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res_1 = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res_1.value);
                yieldedPromise.then(noop$$1, noop$$1);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return res;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads$$1(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap$$1(thing) || isObservableArray$$1(thing) || isObservableValue$$1(thing)) {
        target = getAdministration$$1(thing);
    }
    else if (isObservableObject$$1(thing)) {
        if (typeof propOrHandler !== "string")
            return fail$$1("development" !== "production" &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration$$1(thing, propOrHandler);
    }
    else {
        return fail$$1("development" !== "production" &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail$$1("development" !== "production" && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept$$1(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration$$1(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration$$1(thing, property).intercept(handler);
}

function _isComputed$$1(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject$$1(value) === false)
            return false;
        if (!value[$mobx$$1].values.has(property))
            return false;
        var atom = getAtom$$1(value, property);
        return isComputedValue$$1(atom);
    }
    return isComputedValue$$1(value);
}
function isComputed$$1(value) {
    if (arguments.length > 1)
        return fail$$1("development" !== "production" &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed$$1(value);
}
function isComputedProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1("development" !== "production" &&
            "isComputed expected a property name as second argument");
    return _isComputed$$1(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ("development" !== "production" &&
            (isObservableMap$$1(value) || isObservableArray$$1(value)))
            return fail$$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject$$1(value)) {
            return value[$mobx$$1].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject$$1(value) ||
        !!value[$mobx$$1] ||
        isAtom$$1(value) ||
        isReaction$$1(value) ||
        isComputedValue$$1(value));
}
function isObservable$$1(value) {
    if (arguments.length !== 1)
        fail$$1("development" !== "production" &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1("development" !== "production" && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return obj[$mobx$$1].getKeys();
    }
    if (isObservableMap$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$$1("development" !== "production" &&
        "'keys()' can only be used on observable objects, arrays and maps");
}
function values$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableArray$$1(obj)) {
        return obj.slice();
    }
    return fail$$1("development" !== "production" &&
        "'values()' can only be used on observable objects, arrays and maps");
}
function entries$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail$$1("development" !== "production" &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set$$1(obj, key, value) {
    if (arguments.length === 2) {
        startBatch$$1();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set$$1(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch$$1();
        }
        return;
    }
    if (isObservableObject$$1(obj)) {
        var adm = obj[$mobx$$1];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap$$1(obj)) {
        obj.set(key, value);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        startBatch$$1();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch$$1();
    }
    else {
        return fail$$1("development" !== "production" &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        
        obj[$mobx$$1].remove(key);
    }
    else if (isObservableMap$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail$$1("development" !== "production" &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration$$1(obj);
        return adm.has(key);
    }
    else if (isObservableMap$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray$$1(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail$$1("development" !== "production" &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get$$1(obj, key) {
    if (!has$$1(obj, key))
        return undefined;
    if (isObservableObject$$1(obj)) {
        return obj[key];
    }
    else if (isObservableMap$$1(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray$$1(obj)) {
        return obj[key];
    }
    else {
        return fail$$1("development" !== "production" &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe$$1(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration$$1(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration$$1(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!isObservable$$1(source))
        return source;
    var detectCycles = options.detectCycles === true;
    if (detectCycles &&
        source !== null &&
        typeof source === "object" &&
        __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray$$1(source)) {
        var res = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res[i] = toAdd[i];
        return res;
    }
    if (isObservableObject$$1(source)) {
        var res = cache(__alreadySeen, source, {}, options);
        keys$$1(source); // make sure we track the keys of the object
        for (var key in source) {
            res[key] = toJSHelper(source[key], options, __alreadySeen);
        }
        return res;
    }
    if (isObservableMap$$1(source)) {
        if (options.exportMapsAsObjects === false) {
            var res_1 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_1.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_1;
        }
        else {
            var res_2 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_2[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_2;
        }
    }
    if (isObservableValue$$1(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    return source;
}
function toJS$$1(source, options) {
    if (!isObservable$$1(source))
        return source;
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    var detectCycles = options.detectCycles === true;
    var __alreadySeen;
    if (detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace$$1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$$1("development" !== "production" &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode$$1.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode$$1.BREAK : TraceMode$$1.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState$$1.trackingDerivation;
        case 1:
            return getAtom$$1(args[0]);
        case 2:
            return getAtom$$1(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction$$1(action$$1, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch$$1();
    try {
        return action$$1.apply(thisArg);
    }
    finally {
        endBatch$$1();
    }
}

function when$$1(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx$$1].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId$$1();
    var effectAction = createAction$$1(opts.name + "-effect", effect);
    var disposer = autorun$$1(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ("development" !== "production" && opts && opts.onError)
        return fail$$1("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx$$1];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (typeof name === "string")
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return target[name];
        var adm = getAdm(target);
        var observable$$1 = adm.values.get(name);
        if (observable$$1 instanceof Atom$$1)
            return observable$$1.get();
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (typeof name === "string")
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (typeof name !== "string")
            return false;
        set$$1(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (typeof name !== "string")
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail$$1("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject$$1(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx$$1].proxy = proxy;
    return proxy;
}

function hasInterceptors$$1(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor$$1(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once$$1(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange$$1(interceptable, change) {
    var prevU = untrackedStart$$1();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant$$1(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd$$1(prevU);
    }
}

function hasListeners$$1(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener$$1(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once$$1(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners$$1(listenable, change) {
    var prevU = untrackedStart$$1();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd$$1(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx$$1)
            return target[$mobx$$1];
        if (name === "length")
            return target[$mobx$$1].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx$$1].setArrayLength(value);
            return true;
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
            return true;
        }
        if (!isNaN(name)) {
            arrayExtensions.set.call(target, parseInt(name), value);
            return true;
        }
        return false;
    },
    preventExtensions: function (target) {
        fail$$1("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray$$1(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId$$1(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp$$1(adm.values, $mobx$$1, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart$$1(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd$$1(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom$$1(name || "ObservableArray@" + getNextId$$1());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values$$1) {
        if (this.dehancer !== undefined && this.values.length > 0)
            return values$$1.map(this.dehancer);
        return values$$1;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener$$1(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY$$1;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY$$1;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx$$1].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx$$1];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx$$1].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx$$1];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx$$1];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx$$1];
        var values$$1 = adm.values;
        if (index < values$$1.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed$$1(adm.atom);
            var oldValue = values$$1[index];
            if (hasInterceptors$$1(adm)) {
                var change = interceptChange$$1(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values$$1[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values$$1.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values$$1.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx$$1];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate$$1("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray$$1(thing) {
    return isObject$$1(thing) && isObservableArrayAdministration(thing[$mobx$$1]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap$$1 = /** @class */ (function () {
    function ObservableMap$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableMap@" + getNextId$$1(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom$$1(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap$$1.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap$$1.prototype.has = function (key) {
        if (this._hasMap.has(key))
            return this._hasMap.get(key).get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap$$1.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap$$1.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            transaction$$1(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data.get(key);
                observable$$1.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableMap$$1.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = new ObservableValue$$1(value, referenceEnhancer$$1, this.name + "." + key + "?", false);
            this._hasMap.set(key, entry);
        }
        return entry;
    };
    ObservableMap$$1.prototype._updateValue = function (key, newValue) {
        var observable$$1 = this._data.get(key);
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED$$1) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableMap$$1.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._keysAtom);
        transaction$$1(function () {
            var observable$$1 = new ObservableValue$$1(newValue, _this.enhancer, _this.name + "." + key, false);
            _this._data.set(key, observable$$1);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    ObservableMap$$1.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap$$1.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap$$1.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys$$1.length
                    ? { value: self.get(keys$$1[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap$$1.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys$$1.length) {
                    var key = keys$$1[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap$$1.prototype[(_a = $mobx$$1, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap$$1.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap$$1.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (isPlainObject$$1(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map$$1(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail$$1("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap$$1.prototype.replace = function (values$$1) {
        var _this = this;
        transaction$$1(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys$$1(values$$1);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values$$1);
        });
        return this;
    };
    Object.defineProperty(ObservableMap$$1.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap$$1.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                res["" + key] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap$$1.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap$$1.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap$$1.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return key + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap$$1.prototype.observe = function (listener, fireImmediately) {
        "development" !== "production" &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener$$1(this, listener);
    };
    ObservableMap$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    return ObservableMap$$1;
}());
/* 'var' fixes small-build issue */
var isObservableMap$$1 = createInstanceofPredicate$$1("ObservableMap", ObservableMap$$1);

var ObservableObjectAdministration$$1 = /** @class */ (function () {
    function ObservableObjectAdministration$$1(target, values$$1, name, defaultEnhancer) {
        if (values$$1 === void 0) { values$$1 = new Map(); }
        this.target = target;
        this.values = values$$1;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom$$1(name + ".keys");
    }
    ObservableObjectAdministration$$1.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration$$1.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable$$1 = this.values.get(key);
        if (observable$$1 instanceof ComputedValue$$1) {
            observable$$1.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable$$1.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== UNCHANGED$$1) {
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue$$1(exists, referenceEnhancer$$1, this.name + "." + key.toString() + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration$$1.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable$$1(target, propName);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable$$1 = new ObservableValue$$1(newValue, enhancer, this.name + "." + propName, false);
        this.values.set(propName, observable$$1);
        newValue = observable$$1.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig$$1(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration$$1.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + propName;
        this.values.set(propName, new ComputedValue$$1(options));
        if (propertyOwner === target || isPropertyConfigurable$$1(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig$$1(propName));
    };
    ObservableObjectAdministration$$1.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch$$1();
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
        finally {
            endBatch$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration$$1.prototype.observe = function (callback, fireImmediately) {
        "development" !== "production" &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener$$1(this, callback);
    };
    ObservableObjectAdministration$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableObjectAdministration$$1.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners$$1(this);
        var notifySpy = isSpyEnabled$$1();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration$$1.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue$$1)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration$$1;
}());
function asObservableObject$$1(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer$$1; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx$$1))
        return target[$mobx$$1];
    "development" !== "production" &&
        invariant$$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject$$1(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId$$1();
    if (!name)
        name = "ObservableObject@" + getNextId$$1();
    var adm = new ObservableObjectAdministration$$1(target, new Map(), name, defaultEnhancer);
    addHiddenProp$$1(target, $mobx$$1, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig$$1(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx$$1].read(propName);
            },
            set: function (v) {
                this[$mobx$$1].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx$$1];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance$$1(owner);
        return owner[$mobx$$1];
    }
    return adm;
}
function generateComputedPropConfig$$1(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate$$1("ObservableObjectAdministration", ObservableObjectAdministration$$1);
function isObservableObject$$1(thing) {
    if (isObject$$1(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        return isObservableObjectAdministration(thing[$mobx$$1]);
    }
    return false;
}

function getAtom$$1(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray$$1(thing)) {
            if (property !== undefined)
                fail$$1("development" !== "production" &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx$$1].atom;
        }
        if (isObservableMap$$1(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable$$1 = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable$$1)
                fail$$1("development" !== "production" &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        if (property && !thing[$mobx$$1])
            thing[property]; // See #1072
        if (isObservableObject$$1(thing)) {
            if (!property)
                return fail$$1("development" !== "production" && "please specify a property");
            var observable$$1 = thing[$mobx$$1].values.get(property);
            if (!observable$$1)
                fail$$1("development" !== "production" &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction$$1(thing[$mobx$$1])) {
            // disposer function
            return thing[$mobx$$1];
        }
    }
    return fail$$1("development" !== "production" && "Cannot obtain atom from " + thing);
}
function getAdministration$$1(thing, property) {
    if (!thing)
        fail$$1("Expecting some object");
    if (property !== undefined)
        return getAdministration$$1(getAtom$$1(thing, property));
    if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing))
        return thing;
    if (isObservableMap$$1(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance$$1(thing);
    if (thing[$mobx$$1])
        return thing[$mobx$$1];
    fail$$1("development" !== "production" && "Cannot obtain administration from " + thing);
}
function getDebugName$$1(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom$$1(thing, property);
    else if (isObservableObject$$1(thing) || isObservableMap$$1(thing))
        named = getAdministration$$1(thing);
    else
        named = getAtom$$1(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual$$1(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys$$1 = Object.keys(a), key;
        length = keys$$1.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys$$1[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray$$1(a))
        return a.slice();
    if (isES6Map$$1(a) || isObservableMap$$1(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = self;
    return iterator;
}
function self() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = typeof window !== "undefined" ? window : global;
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}

(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production") {
        console.warn(
        // Template literal(backtick) is used for fix issue with rollup-plugin-commonjs https://github.com/rollup/rollup-plugin-commonjs/issues/344
        "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// Devtools support
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy$$1,
        extras: {
            getDebugName: getDebugName$$1
        },
        $mobx: $mobx$$1
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/AppState.ts":
/*!*****************************!*\
  !*** ./src/app/AppState.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
const data_1 = __webpack_require__(/*! ../data/data */ "./src/data/data.ts");
class AppState {
    constructor() {
        this.questionsSinceRetryIncorrect = 0;
        this.defaultProgress = { resumeAtIndex: undefined, currentQuestionIndex: [0, 0, 0], answeredCorrently: [], answeredIncorrectly: [] };
        this.questionPool = data_1.getData();
        this.numberOfQuestions = this.getTotalNumberOfQuestions();
        let progressFromStorage = this.getProgressFromLocalStorage();
        this.progress = progressFromStorage ? progressFromStorage : this.defaultProgress;
        this.currentQuestion = this.getQuestion(this.progress.currentQuestionIndex);
        mobx_1.autorun(() => { this.saveProgress(); });
    }
    getTotalNumberOfQuestions() {
        let sum = 0;
        for (let i = 0; i < this.questionPool.subelements.length; i += 1)
            for (let j = 0; j < this.questionPool.subelements[i].groups.length; j += 1)
                sum += this.questionPool.subelements[i].groups[j].questions.length;
        return sum;
    }
    saveProgress() {
        if (window.localStorage) {
            window.localStorage.setItem(AppState.localStorageProgressKey, JSON.stringify(this.progress));
        }
    }
    getProgressFromLocalStorage() {
        if (window.localStorage) {
            let indexString = window.localStorage.getItem(AppState.localStorageProgressKey);
            if (indexString) {
                return JSON.parse(indexString);
            }
        }
        return undefined;
    }
    getQuestion(index) {
        return this.questionPool.subelements[index[0]].groups[index[1]].questions[index[2]];
    }
    getQuestionPoolLengths(index) {
        //if(!this.questionPool.subelements[index[1]].groups[index[2]]) debugger;
        return [
            this.questionPool.subelements.length,
            this.questionPool.subelements[index[0]].groups.length,
            this.questionPool.subelements[index[0]].groups[index[1]].questions.length
        ];
    }
    // Actions
    selectAnswer(tag) {
        let firstChoice = this.correctAnswer === undefined;
        this.correctAnswer = tag == this.currentQuestion.correctAnswer;
        if (firstChoice) {
            if (this.correctAnswer) {
                // Tuples are objects, so if we just push it it'll push the pointer and the pushed values will change under us
                // array.slice() can be used to do a shallow clone but typescript considers the output to be an array, so we need to cast
                this.progress.answeredCorrently.push(this.progress.currentQuestionIndex.slice());
            }
            else
                this.progress.answeredIncorrectly.push(this.progress.currentQuestionIndex.slice());
        }
    }
    resetProgress() {
        this.progress = this.defaultProgress;
    }
    setQuestion(index) {
        this.correctAnswer = undefined;
        this.progress.currentQuestionIndex = index;
        this.currentQuestion = this.getQuestion(index);
    }
    nextQuestion() {
        if (this.correctAnswer === undefined) {
            this.progress.answeredIncorrectly.push(this.copy(this.progress.currentQuestionIndex));
        }
        let nextQuestion;
        // If resumeAtIndex is defined then we should try to get more incorrect questions
        if (!this.progress.resumeAtIndex) {
            nextQuestion = this.computeNextQuestionIndex(this.progress.currentQuestionIndex);
            if (nextQuestion[2] == 0) {
                // If this is a change of topics
                this.progress.resumeAtIndex = this.copy(nextQuestion);
            }
        }
        if (this.progress.resumeAtIndex) {
            nextQuestion = this.computeNextRetryIncorrectIndex();
            if (!nextQuestion) {
                nextQuestion = this.progress.resumeAtIndex;
                this.progress.resumeAtIndex = null;
            }
        }
        if (nextQuestion) {
            this.setQuestion(nextQuestion);
        }
    }
    copy(index) {
        return index.slice();
    }
    computeNextRetryIncorrectIndex() {
        if (this.progress.answeredIncorrectly.length > 0) {
            return this.progress.answeredIncorrectly.shift();
        }
        return undefined;
    }
    computeNextQuestionIndex(currentIndex) {
        let index = this.copy(currentIndex);
        let lengths = this.getQuestionPoolLengths(index);
        index[2] += 1;
        if (index[2] >= lengths[2]) {
            index[2] = 0;
            index[1] += 1;
            if (index[1] >= lengths[1]) {
                index[1] = 0;
                index[0] += 1;
                if (index[0] >= lengths[0]) {
                    index = undefined;
                }
            }
        }
        return index;
    }
}
AppState.localStorageProgressKey = 'Progress';
__decorate([
    mobx_1.observable
], AppState.prototype, "currentQuestion", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "correctAnswer", void 0);
__decorate([
    mobx_1.observable
], AppState.prototype, "progress", void 0);
exports.AppState = AppState;


/***/ }),

/***/ "./src/components/Answer.tsx":
/*!***********************************!*\
  !*** ./src/components/Answer.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Answer extends React.Component {
    render() {
        return React.createElement("p", { className: "Answer", onClick: () => { this.props.store.selectAnswer(this.props.answer.tag); } },
            this.props.answer.tag.toUpperCase(),
            " - ",
            this.props.answer.text,
            " ");
    }
}
exports.Answer = Answer;


/***/ }),

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
const Question_1 = __webpack_require__(/*! ./Question */ "./src/components/Question.tsx");
const Button_1 = __webpack_require__(/*! ./Button */ "./src/components/Button.tsx");
let App = class App extends React.Component {
    getCorrect(store) {
        if (store.correctAnswer !== undefined) {
            return React.createElement("p", null, store.correctAnswer ? "CORRECT" : "INCORRECT");
        }
    }
    render() {
        const store = this.props.store;
        return React.createElement("div", null,
            React.createElement("p", null,
                " CORRECT: ",
                store.progress.answeredCorrently.length * 100.0 / store.numberOfQuestions,
                "%   INCORRECT: ",
                store.progress.answeredIncorrectly.length * 100.0 / store.numberOfQuestions,
                "% "),
            React.createElement(Question_1.Question, { store: store, question: store.currentQuestion }),
            this.getCorrect(store),
            React.createElement(Button_1.Button, { text: "Next Question", action: () => { store.nextQuestion(); } }),
            React.createElement(Button_1.Button, { text: "Reset Progress", action: () => { store.resetProgress(); } }));
    }
};
App = __decorate([
    mobx_react_1.observer
], App);
exports.App = App;


/***/ }),

/***/ "./src/components/Button.tsx":
/*!***********************************!*\
  !*** ./src/components/Button.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Button extends React.Component {
    render() {
        return React.createElement("button", { className: "Button", onClick: this.props.action },
            " ",
            this.props.text,
            " ");
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/components/Question.tsx":
/*!*************************************!*\
  !*** ./src/components/Question.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Answer_1 = __webpack_require__(/*! ./Answer */ "./src/components/Answer.tsx");
class Question extends React.Component {
    clickHandler(key) {
        console.log('Clicked: ' + key);
    }
    render() {
        // let answers = this.props.answers.map(
        //     (answer) => {
        //         if(this.props.showCorrectAnswer &&
        //             answer.key === this.props.correctAnswer) {
        //                 answer.symbol+='*';
        //         }
        //         answer.correct = answer.key === this.props.correctAnswer;
        //         answer.onClick = this.clickHandler;
        //         answer.id = answer.key;
        //         return <Answer {...answer} />
        //     });
        let answers = this.props.question.answers.map((answer) => {
            return React.createElement(Answer_1.Answer, { store: this.props.store, answer: answer, key: answer.tag });
        });
        return React.createElement("div", { className: "QuestionDiv" },
            React.createElement("p", { className: "Question" },
                this.props.question.tag,
                " ",
                this.props.question.text),
            answers);
    }
}
exports.Question = Question;


/***/ }),

/***/ "./src/data/data.ts":
/*!**************************!*\
  !*** ./src/data/data.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = __webpack_require__(/*! ./input */ "./src/data/input.ts");
function getData() {
    return parseAll(input_1.questionPoolText);
}
exports.getData = getData;
function parseAll(text) {
    let questionPool = { info: '', subelements: [] };
    let subelements = text.split("SUBELEMENT ");
    questionPool.info = subelements[0];
    subelements.shift();
    subelements.forEach(element => {
        questionPool.subelements.push(parseSubelement(element));
    });
    return questionPool;
}
function parseSubelement(text) {
    let subelement = { info: '', groups: [] };
    let groups = text.split("\n\n\n");
    subelement.info = groups[0];
    groups.shift();
    groups.forEach(element => {
        let group = parseGroup(element);
        group && subelement.groups.push(group);
    });
    return subelement;
}
function parseGroup(text) {
    if (text.trim() == "") {
        return;
    }
    let group = { info: '', questions: [] };
    let questions = text.split("~~");
    let first = questions[0].split("\n\n");
    group.info = first[0];
    questions[0] = first[1];
    if (questions)
        questions.forEach(element => {
            let question = parseQuestion(element);
            question && group.questions.push(question);
        });
    return group;
}
function parseQuestion(text) {
    if (text == undefined || text == '') {
        return;
    }
    text = text.trim();
    if (text == "END") {
        return;
    }
    let lines = text.split("\n");
    let info = lines[0].split(" ");
    let question = { tag: '', text: '', correctAnswer: '', answers: [] };
    question.tag = info[0];
    if (!info[1])
        debugger;
    question.correctAnswer = info[1].substring(1, 2);
    question.text = lines[1];
    lines.shift();
    lines.shift();
    lines.forEach(element => {
        question.answers.push(parseAnswer(element));
    });
    return question;
}
function parseAnswer(text) {
    let answer = { tag: '', text: '' };
    answer.tag = text.substring(0, 1);
    answer.text = text.substring(2);
    return answer;
}


/***/ }),

/***/ "./src/data/input.ts":
/*!***************************!*\
  !*** ./src/data/input.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* Format:
SUBELEMENT


T1A

T1A01

T1A02


T1B

T1B01
...


T1Z
...
T1Z99


SUBELEMENT T2
...
*/
exports.questionPoolText = `
NCVEC Public Domain Release Monday, January 08,2018
FCC Exam Element 2 Question Pool for Technician Class
 Effective 7/01/2018-6/30/2022

Errata Released January 12,2018
T1F11-Distractor A; Typo change word They to The
T4A01- Change to correct answer; Correct answer is D
T5B13-Distractor A; Typo change GHZ to GHz
T6A07-Modified Question; What electrical component is usually constructed as a coil of wire?
T8C8-Distractor A; Typo change VOIP to VoIP





SUBELEMENT T1 � FCC Rules, descriptions, and definitions for the Amateur Radio Service, operator and station license responsibilities - [6 Exam Questions - 6 Groups]


T1A - Amateur Radio Service: purpose and permissible use of the Amateur Radio Service, operator/primary station license grant; Meanings of basic terms used in FCC rules; Interference; RACES rules; Phonetics; Frequency Coordinator

T1A01 (C) [97.1]
Which of the following is a purpose of the Amateur Radio Service as stated in the FCC rules and regulations?
A. Providing personal radio communications for as many citizens as possible
B. Providing communications for international non-profit organizations
C. Advancing skills in the technical and communication phases of the radio art
D. All of these choices are correct 
~~

T1A02 (C) [97.1]
Which agency regulates and enforces the rules for the Amateur Radio Service in the United States?
A. FEMA
B. Homeland Security
C. The FCC
D. All of these choices are correct
~~

T1A03 (D) [97.119(b)(2)]
What are the FCC rules regarding the use of a phonetic alphabet for station identification in the Amateur Radio Service?
A. It is required when transmitting emergency messages
B. It is prohibited
C. It is required when in contact with foreign stations
D. It is encouraged
~~

T1A04 (A) [97.5(b)(1)]
How many operator/primary station license grants may be held by any one person?
A. One
B. No more than two
C. One for each band on which the person plans to operate
D. One for each permanent station location from which the person plans to operate
~~

T1A05 (C) [97.7]
What is proof of possession of an FCC-issued operator/primary license grant?
A. A printed operator/primary station license issued by the FCC must be displayed at the transmitter site
B. The control operator must have an operator/primary station license in his or her possession when in control of a transmitter
C. The control operator's operator/primary station license must appear in the FCC ULS consolidated licensee database
D. All of these choices are correct
~~

T1A06 (C) [97.3(a)(9)]
What is the FCC Part 97 definition of a "beacon"?
A. A government transmitter marking the amateur radio band edges
B. A bulletin sent by the FCC to announce a national emergency
C. An amateur station transmitting communications for the purposes of observing propagation or related experimental activities
D. A continuous transmission of weather information authorized in the amateur bands by the National Weather Service
~~

T1A07 (C) [97.3(a)(41)]
What is the FCC Part 97 definition of a "space station"?
A. Any satellite orbiting the earth
B. A manned satellite orbiting the earth
C. An amateur station located more than 50 km above the Earth's surface
D. An amateur station using amateur radio satellites for relay of signals
~~

T1A08 (B) [97.3(a)(22)]
Which of the following entities recommends transmit/receive channels and other parameters for auxiliary and repeater stations?
A. Frequency Spectrum Manager appointed by the FCC
B. Volunteer Frequency Coordinator recognized by local amateurs
C. FCC Regional Field Office 
D. International Telecommunications Union
~~

T1A09 (C) [97.3(a)(22)]
Who selects a Frequency Coordinator?
A. The FCC Office of Spectrum Management and Coordination Policy 
B. The local chapter of the Office of National Council of Independent Frequency Coordinators
C. Amateur operators in a local or regional area whose stations are eligible to be repeater or auxiliary stations
D. FCC Regional Field Office
~~

T1A10 (D) [97.3(a)(38), 97.407]
Which of the following describes the Radio Amateur Civil Emergency Service (RACES)? 
A. A radio service using amateur frequencies for emergency management or civil defense communications
B. A radio service using amateur stations for emergency management or civil defense communications
C. An emergency service using amateur operators certified by a civil defense organization as being enrolled in that organization
D. All of these choices are correct
~~

T1A11 (B) [97.101 (d)]
When is willful interference to other amateur radio stations permitted?
A. To stop another amateur station which is breaking the FCC rules
B. At no time 
C. When making short test transmissions
D. At any time, stations in the Amateur Radio Service are not protected from willful interference
~~


T1B - Authorized frequencies: frequency allocations; ITU; emission modes; restricted sub-bands; spectrum sharing; transmissions near band edges; contacting the International Space Station; power output 

T1B01 (B) 
What is the International Telecommunications Union (ITU)?
A. An agency of the United States Department of Telecommunications Management
B. A United Nations agency for information and communication technology issues
C. An independent frequency coordination agency
D. A department of the FCC
~~

T1B02 (B) [97.301, 97.207(c)]
Which amateur radio stations may make contact with an amateur radio station on the International Space Station (ISS) using 2 meter and 70 cm band frequencies?
A. Only members of amateur radio clubs at NASA facilities
B. Any amateur holding a Technician or higher-class license
C. Only the astronaut's family members who are hams
D. Contacts with the ISS are not permitted on amateur radio frequencies
~~

T1B03 (B) [97.301(a)]
Which frequency is within the 6 meter amateur band?
A. 49.00 MHz
B. 52.525 MHz
C. 28.50 MHz
D. 222.15 MHz
~~

T1B04 (A) [97.301(a)]
Which amateur band are you using when your station is transmitting on 146.52 MHz?
A. 2 meter band
B. 20 meter band
C. 14 meter band
D. 6 meter band
~~

T1B05 (B) [97.305(c)]
What is the limitation for emissions on the frequencies between 219 and 220 MHz?
A. Spread spectrum only
B. Fixed digital message forwarding systems only
C. Emergency traffic only
D. Fast-scan television only
~~

T1B06 (B) [97.301(e), 97.305]
On which HF bands does a Technician class operator have phone privileges?
A. None
B. 10 meters only
C. 80 meters, 40 meters, 15 meters and 10 meters
D. 30 meters only
~~

T1B07 (A) [97.305(a), (c)]
Which of the following VHF/UHF frequencies ranges are limited to CW only?
A. 50.0 MHz to 50.1 MHz and 144.0 MHz to 144.1 MHz
B. 219 MHz to 220 MHz and 420.0 MHz to 420.1 MHz
C. 902.0 MHz to 902.1 MHZ
D. All of these choices are correct
~~

T1B08 (A) [97.303]
Which of the following is a result of the fact that the Amateur Radio Service is secondary in all or portions of some amateur bands (such as portions of the 70 cm band)?
A. U.S. amateurs may find non-amateur stations in those portions, and must avoid interfering with them
B. U.S. amateurs must give foreign amateur stations priority in those portions
C. International communications are not permitted in those portions
D. Digital transmissions are not permitted in those portions
~~

T1B09 (D) [97.101(a), 97.301(a-e)]
Why should you not set your transmit frequency to be exactly at the edge of an amateur band or sub-band?
A. To allow for calibration error in the transmitter frequency display
B. So that modulation sidebands do not extend beyond the band edge
C. To allow for transmitter frequency drift
D. All of these choices are correct
~~

T1B10 (D) [97.301(e), 97.305(c)]
Which of the following HF bands have frequencies available to the Technician class operator for RTTY and data transmissions? 
A. 10 meters, 12 meters, 17 meters, and 40 meters
B. 10 meters, 15 meters, 40 meters, 80 meters
C. 30 meters only
D. 10 meters only
~~

T1B11 (A) [97.313]
What is the maximum peak envelope power output for Technician class operators using their assigned portions of the HF bands?
A. 200 watts
B. 100 watts
C. 50 watts
D. 10 watts
~~

T1B12 (D) [97.313(b)]
Except for some specific restrictions, what is the maximum peak envelope power output for Technician class operators using frequencies above 30 MHz?
A. 50 watts
B. 100 watts
C. 500 watt
D. 1500 watts
~~


T1C - Operator licensing: operator classes; sequential and vanity call sign systems; international communications; reciprocal operation; places where the Amateur Radio Service is regulated by the FCC; name and address on FCC license database; license term; renewal; grace period

T1C01 (D) [97.9(a), 97.17(a)]
For which license classes are new licenses currently available from the FCC?
A. Novice, Technician, General, Advanced
B. Technician, Technician Plus, General, Advanced
C. Novice, Technician Plus, General, Advanced
D. Technician, General, Amateur Extra
~~

T1C02 (D) [97.19]
Who may select a desired call sign under the vanity call sign rules?
A. Only a licensed amateur with a General or Amateur Extra class license
B. Only a licensed amateur with an Amateur Extra class license
C. Only a licensed amateur who has been licensed continuously for more than 10 years
D. Any licensed amateur
~~

T1C03 (A) [97.117]
What types of international communications is an FCC-licensed amateur radio station permitted to make?
A. Communications incidental to the purposes of the Amateur Radio Service and remarks of a personal character
B. Communications incidental to conducting business or remarks of a personal nature
C. Only communications incidental to contest exchanges, all other communications are prohibited
D. Any communications that would be permitted by an international broadcast station
~~

T1C04 (A) [97.107]
When are you allowed to operate your amateur station in a foreign country?
A. When the foreign country authorizes it
B. When there is a mutual agreement allowing third party communications
C. When authorization permits amateur communications in a foreign language
D. When you are communicating with non-licensed individuals in another country
~~

T1C05 (A)
Which of the following is a valid call sign for a Technician class amateur radio station?
A. K1XXX
B. KA1X
C. W1XX
D. All of these choices are correct
~~

T1C06 (D) [97.5(a)(2)]
From which of the following locations may an FCC-licensed amateur station transmit?
A. From within any country that belongs to the International Telecommunications Union
B. From within any country that is a member of the United Nations 
C. From anywhere within International Telecommunications Union (ITU) Regions 2 and 3
D. From any vessel or craft located in international waters and documented or registered in the United States
~~

T1C07 (B) [97.23]
What may result when correspondence from the FCC is returned as undeliverable because the grantee failed to provide and maintain a correct mailing address with the FCC?
A. Fine or imprisonment
B. Revocation of the station license or suspension of the operator license
C. Require the licensee to be re-examined
D. A reduction of one rank in operator class
~~

T1C08 (C) [97.25]
What is the normal term for an FCC-issued primary station/operator amateur radio license grant?
A. Five years
B. Life
C. Ten years
D. Twenty years
~~

T1C09 (A) [97.21(a)(b)]
What is the grace period following the expiration of an amateur license within which the license may be renewed?
A. Two years
B. Three years
C. Five years
D. Ten years 
~~

T1C10 (C) [97.5a]
How soon after passing the examination for your first amateur radio license may you operate a transmitter on an Amateur Radio Service frequency? 
A. Immediately
B. 30 days after the test date
C. As soon as your operator/station license grant appears in the FCC�s license database
D. You must wait until you receive your license in the mail from the FCC
~~

T1C11 (A) [97.21(b)]
If your license has expired and is still within the allowable grace period, may you continue to operate a transmitter on Amateur Radio Service frequencies?
A. No, transmitting is not allowed until the FCC license database shows that the license has been renewed
B. Yes, but only if you identify using the suffix GP
C. Yes, but only during authorized nets
D. Yes, for up to two years
~~


T1D - Authorized and prohibited transmission: communications with other countries; music; exchange of information with other services; indecent language; compensation for use of station; retransmission of other amateur signals; codes and ciphers; sale of equipment; unidentified transmissions; one-way transmission

T1D01 (A) [97.111(a)(1)]
With which countries are FCC-licensed amateur radio stations prohibited from exchanging communications?
A. Any country whose administration has notified the International Telecommunications Union (ITU) that it objects to such communications
B. Any country whose administration has notified the American Radio Relay League (ARRL) that it objects to such communications
C. Any country engaged in hostilities with another country
D. Any country in violation of the War Powers Act of 1934
~~

T1D02 (B) [97.113(b),97.111(b)]
Under which of the following circumstances may an amateur radio station make one-way transmissions?
A. Under no circumstances
B. When transmitting code practice, information bulletins, or transmissions necessary to provide emergency communications
C. At any time, as long as no music is transmitted
D. At any time, as long as the material being transmitted did not originate from a commercial broadcast station
~~

T1D03 (C) [97.211(b), 97.215(b), 97.114(a)(4)]
When is it permissible to transmit messages encoded to hide their meaning?
A. Only during contests
B. Only when operating mobile
C. Only when transmitting control commands to space stations or radio control craft
D. Only when frequencies above 1280 MHz are used
~~

T1D04 (A) [97.113(a)(4), 97.113(c)]
Under what conditions is an amateur station authorized to transmit music using a phone emission?
A. When incidental to an authorized retransmission of manned spacecraft communications
B. When the music produces no spurious emissions
C. When the purpose is to interfere with an illegal transmission
D. When the music is transmitted above 1280 MHz
~~

T1D05 (A) [97.113(a)(3)(ii)]
When may amateur radio operators use their stations to notify other amateurs of the availability of equipment for sale or trade?
A. When the equipment is normally used in an amateur station and such activity is not conducted on a regular basis
B. When the asking price is $100.00 or less
C. When the asking price is less than its appraised value
D. When the equipment is not the personal property of either the station licensee or the control operator or their close relatives
~~

T1D06 (B) [97.113(a)(4)]
What, if any, are the restrictions concerning transmission of language that may be considered indecent or obscene?
A. The FCC maintains a list of words that are not permitted to be used on amateur frequencies
B. Any such language is prohibited
C. The ITU maintains a list of words that are not permitted to be used on amateur frequencies
D. There is no such prohibition 
~~

T1D07 (B) [97.113(d)]
What types of amateur stations can automatically retransmit the signals of other amateur stations?
A. Auxiliary, beacon, or Earth stations
B. Repeater, auxiliary, or space stations
C. Beacon, repeater, or space stations
D. Earth, repeater, or space stations
~~

T1D08 (B) [97.113(a)(3)(iii)]
In which of the following circumstances may the control operator of an amateur station receive compensation for operating that station? 
A. When the communication is related to the sale of amateur equipment by the control operator's employer
B. When the communication is incidental to classroom instruction at an educational institution
C. When the communication is made to obtain emergency information for a local broadcast station
D. All of these choices are correct
~~

T1D09 (A) [97.113(5)(b)]
Under which of the following circumstances are amateur stations authorized to transmit signals related to broadcasting, program production, or news gathering, assuming no other means is available?
A. Only where such communications directly relate to the immediate safety of human life or protection of property
B. Only when broadcasting communications to or from the space shuttle
C. Only where noncommercial programming is gathered and supplied exclusively to the National Public Radio network 
D. Only when using amateur repeaters linked to the internet
~~

T1D10 (D) [97.3(a)(10)]
What is the meaning of the term �broadcasting� in the FCC rules for the Amateur Radio Service?
A. Two-way transmissions by amateur stations
B. Transmission of music
C. Transmission of messages directed only to amateur operators
D. Transmissions intended for reception by the general public
~~

T1D11 (D) [97.119(a)]
When may an amateur station transmit without on-the-air identification?
A. When the transmissions are of a brief nature to make station adjustments
B. When the transmissions are unmodulated
C. When the transmitted power level is below 1 watt
D. When transmitting signals to control model craft
~~


T1E - Control operator and control types: control operator required; eligibility; designation of control operator; privileges and duties; control point; local, automatic and remote control; location of control operator 

T1E01 (D) [97.7(a)]
When is an amateur station permitted to transmit without a control operator?
A. When using automatic control, such as in the case of a repeater
B. When the station licensee is away and another licensed amateur is using the station
C. When the transmitting station is an auxiliary station
D. Never
~~

T1E02 (D) [97.301, 97.207(c)]
Who may be the control operator of a station communicating through an amateur satellite or space station?
A. Only an Amateur Extra class operator
B. A General class or higher licensee who has a satellite operator certification
C. Only an Amateur Extra class operator who is also an AMSAT member
D. Any amateur whose license privileges allow them to transmit on the satellite uplink frequency
~~

T1E03 (A) [97.103(b)]
Who must designate the station control operator?
A. The station licensee
B. The FCC
C. The frequency coordinator
D. The ITU
~~

T1E04 (D) [97.103(b)]
What determines the transmitting privileges of an amateur station?
A. The frequency authorized by the frequency coordinator
B. The frequencies printed on the license grant
C. The highest class of operator license held by anyone on the premises
D. The class of operator license held by the control operator
~~

T1E05 (C) [97.3(a)(14)]
What is an amateur station control point?
A. The location of the station�s transmitting antenna
B. The location of the station transmitting apparatus 
C. The location at which the control operator function is performed
D. The mailing address of the station licensee
~~

T1E06 (A) [97.301]
When, under normal circumstances, may a Technician class licensee be the control operator of a station operating in an exclusive Amateur Extra class operator segment of the amateur bands?
A. At no time
B. When operating a special event station
C. As part of a multi-operator contest team
D. When using a club station whose trustee is an Amateur Extra class operator licensee
~~

T1E07 (D) [97.103(a)]
When the control operator is not the station licensee, who is responsible for the proper operation of the station?
A. All licensed amateurs who are present at the operation
B. Only the station licensee
C. Only the control operator
D. The control operator and the station licensee are equally responsible
~~

T1E08 (A) [97.3(a)(6), 97.205(d)]
Which of the following is an example of automatic control?
A. Repeater operation
B. Controlling the station over the internet
C. Using a computer or other device to send CW automatically
D. Using a computer or other device to identify automatically
~~

T1E09 (D) [97.109(c)]
Which of the following is true of remote control operation?
A. The control operator must be at the control point
B. A control operator is required at all times
C. The control operator indirectly manipulates the controls
D. All these choices are correct
~~

T1E10 (B) [97.3(a)(39)]
Which of the following is an example of remote control as defined in Part 97?
A. Repeater operation
B. Operating the station over the internet
C. Controlling a model aircraft, boat, or car by amateur radio
D. All of these choices are correct
~~

T1E11 (D) [97.103(a)]
Who does the FCC presume to be the control operator of an amateur station, unless documentation to the contrary is in the station records?
A. The station custodian
B. The third-party participant
C. The person operating the station equipment
D. The station licensee
~~


T1F - Station identification; repeaters; third-party communications; club stations; FCC inspection 

T1F01 (B) [97.103(c)]
When must the station licensee make the station and its records available for FCC inspection?
A. At any time ten days after notification by the FCC of such an inspection
B. At any time upon request by an FCC representative
C. Only after failing to comply with an FCC notice of violation
D. Only when presented with a valid warrant by an FCC official or government agent
~~

T1F02 (C) [97.119 (a)]
When using tactical identifiers such as �Race Headquarters� during a community service net operation, how often must your station transmit the station�s FCC-assigned call sign? 
A. Never, the tactical call is sufficient
B. Once during every hour
C. At the end of each communication and every ten minutes during a communication
D. At the end of every transmission
~~

T1F03 (D) [97.119(a)]
When is an amateur station required to transmit its assigned call sign?
A. At the beginning of each contact, and every 10 minutes thereafter
B. At least once during each transmission 
C. At least every 15 minutes during and at the end of a communication
D. At least every 10 minutes during and at the end of a communication
~~

T1F04 (C) [97.119(b)(2)]
Which of the following is an acceptable language to use for station identification when operating in a phone sub-band?
A. Any language recognized by the United Nations
B. Any language recognized by the ITU
C. The English language
D. English, French, or Spanish
~~

T1F05 (B) [97.119(b)(2)]
What method of call sign identification is required for a station transmitting phone signals?
A. Send the call sign followed by the indicator RPT
B. Send the call sign using a CW or phone emission
C. Send the call sign followed by the indicator R
D. Send the call sign using only a phone emission
~~

T1F06 (D) [97.119(c)]
Which of the following formats of a self-assigned indicator is acceptable when identifying using a phone transmission?
A. KL7CC stroke W3
B. KL7CC slant W3
C. KL7CC slash W3
D. All of these choices are correct
~~

T1F07 (B) [97.115(a)(2)]
Which of the following restrictions apply when a non-licensed person is allowed to speak to a foreign station using a station under the control of a Technician class control operator?
A. The person must be a U.S. citizen
B. The foreign station must be one with which the U.S. has a third-party agreement
C. The licensed control operator must do the station identification
D. All of these choices are correct
~~

T1F08 (A) [97.3(a)(47)]
What is meant by the term "Third Party Communications"?
A. A message from a control operator to another amateur station control operator on behalf of another person
B. Amateur radio communications where three stations are in communications with one another
C. Operation when the transmitting equipment is licensed to a person other than the control operator
D. Temporary authorization for an unlicensed person to transmit on the amateur bands for technical experiments
~~

T1F09 (C) [97.3(a)(40)]
What type of amateur station simultaneously retransmits the signal of another amateur station on a different channel or channels?
A. Beacon station
B. Earth station
C. Repeater station
D. Message forwarding station
~~

T1F10 (A) [97.205(g)]
Who is accountable should a repeater inadvertently retransmit communications that violate the FCC rules?
A. The control operator of the originating station
B. The control operator of the repeater
C. The owner of the repeater
D. Both the originating station and the repeater owner
~~

T1F11 (B) [97.5(b)(2)]
Which of the following is a requirement for the issuance of a club station license grant?
A. The trustee must have an Amateur Extra class operator license grant
B. The club must have at least four members
C. The club must be registered with the American Radio Relay League
D. All of these choices are correct
~~


SUBELEMENT T2 - Operating Procedures - [3 Exam Questions - 3 Groups]


T2A - Station operation: choosing an operating frequency; calling another station; test transmissions; procedural signs; use of minimum power; choosing an operating frequency; band plans; calling frequencies; repeater offsets 

T2A01 (B)
Which of the following is a common repeater frequency offset in the 2 meter band?
A. Plus or minus 5 Mhz
B. Plus or minus 600 kHz
C. Plus or minus 500 kHz
D. Plus or minus 1 Mhz
~~

T2A02 (A)
What is the national calling frequency for FM simplex operations in the 2 meter band?
A. 146.520 MHz
B. 145.000 MHz
C. 432.100 MHz
D. 446.000 MHz
~~

T2A03 (A)
What is a common repeater frequency offset in the 70 cm band?
A. Plus or minus 5 Mhz
B. Plus or minus 600 kHz
C. Plus or minus 500 kHz
D. Plus or minus 1 Mhz
~~

T2A04 (B)
What is an appropriate way to call another station on a repeater if you know the other station's call sign?
A. Say "break, break," then say the station's call sign
B. Say the station's call sign, then identify with your call sign
C. Say "CQ" three times, then the other station's call sign
D. Wait for the station to call CQ, then answer it
~~

T2A05 (C)
How should you respond to a station calling CQ?
A. Transmit "CQ" followed by the other station�s call sign
B. Transmit your call sign followed by the other station�s call sign
C. Transmit the other station�s call sign followed by your call sign
D. Transmit a signal report followed by your call sign
~~

T2A06 (A)
Which of the following is required when making on-the-air test transmissions?
A. Identify the transmitting station
B. Conduct tests only between 10 p.m. and 6 a.m. local time
C. Notify the FCC of the transmissions
D. All of these choices are correct
~~

T2A07 (A)
What is meant by "repeater offset?"
A. The difference between a repeater�s transmit frequency and its receive frequency
B. The repeater has a time delay to prevent interference
C. The repeater station identification is done on a separate frequency
D. The number of simultaneous transmit frequencies used by a repeater
~~

T2A08 (D)
What is the meaning of the procedural signal �CQ�?
A. Call on the quarter hour
B. A new antenna is being tested (no station should answer)
C. Only the called station should transmit
D. Calling any station
~~

T2A09 (B)
What brief statement indicates that you are listening on a repeater and looking for a contact?
A. The words �Hello test� followed by your call sign
B. Your call sign 
C. The repeater call sign followed by your call sign
D. The letters �QSY� followed by your call sign
~~

T2A10 (A)
What is a band plan, beyond the privileges established by the FCC?
A. A voluntary guideline for using different modes or activities within an amateur band
B. A mandated list of operating schedules
C. A list of scheduled net frequencies
D. A plan devised by a club to indicate frequency band usage
~~

T2A11 (C)
What kind of communication is taking place when an amateur station is transmitting and receiving on the same frequency?
A. Full duplex
B. Diplex
C. Simplex
D. Multiplex
~~

T2A12 (D)
Which of the following is a guideline when choosing an operating frequency for calling CQ?
A. Listen first to be sure that no one else is using the frequency
B. Ask if the frequency is in use
C. Make sure you are in your assigned band
D. All of these choices are correct
~~


T2B � VHF/UHF operating practices: SSB phone; FM repeater; simplex; splits and shifts; CTCSS; DTMF; tone squelch; carrier squelch; phonetics; operational problem resolution; Q signals 

T2B01 (C)
What is the most common use of the �reverse split� function of a VHF/UHF transceiver?
A. Reduce power output
B. Increase power output
C. Listen on a repeater�s input frequency
D. Listen on a repeater�s output frequency
~~

T2B02 (D)
What term describes the use of a sub-audible tone transmitted along with normal voice audio to open the squelch of a receiver?
A. Carrier squelch
B. Tone burst
C. DTMF
D. CTCSS
~~

T2B03 (B)
If a station is not strong enough to keep a repeater�s receiver squelch open, which of the following might allow you to receive the station�s signal?
A. Open the squelch on your radio
B. Listen on the repeater input frequency
C. Listen on the repeater output frequency
D. Increase your transmit power
~~

T2B04 (D)
Which of the following could be the reason you are unable to access a repeater whose output you can hear?
A. Improper transceiver offset
B. The repeater may require a proper CTCSS tone from your transceiver
C. The repeater may require a proper DCS tone from your transceiver
D. All of these choices are correct

~~

T2B05 (C)
What might be the problem if a repeater user says your transmissions are breaking up on voice peaks?
A. You have the incorrect offset
B. You need to talk louder 
C. You are talking too loudly
D. Your transmit power is too high
~~

T2B06 (A)
What type of tones are used to control repeaters linked by the Internet Relay Linking Project (IRLP) protocol?
A. DTMF
B. CTCSS
C. Echolink
D. Sub-audible
~~

T2B07 (C)
How can you join a digital repeater�s �talk group�?
A. Register your radio with the local FCC office
B. Join the repeater owner�s club
C. Program your radio with the group�s ID or code
D. Sign your call after the courtesy tone
~~

T2B08 (A)
Which of the following applies when two stations transmitting on the same frequency interfere with each other?
A. Common courtesy should prevail, but no one has absolute right to an amateur frequency
B. Whoever has the strongest signal has priority on the frequency
C. Whoever has been on the frequency the longest has priority on the frequency
D. The station that has the weakest signal has priority on the frequency
~~

T2B09 (B)
What is a �talk group� on a DMR digital repeater?
A. A group of operators sharing common interests
B. A way for groups of users to share a channel at different times without being heard by other users on the channel
C. A protocol that increases the signal-to-noise ratio when multiple repeaters are linked together
D. A net that meets at a particular time
~~

T2B10 (A)
Which Q signal indicates that you are receiving interference from other stations?
A. QRM
B. QRN
C. QTH
D. QSB
~~

T2B11 (B)
Which Q signal indicates that you are changing frequency?
A. QRU
B. QSY
C. QSL
D. QRZ
~~

T2B12 (A)
Why are simplex channels designated in the VHF/UHF band plans?
A. So that stations within mutual communications range can communicate without tying up a repeater
B. For contest operation
C. For working DX only
D. So that stations with simple transmitters can access the repeater without automated offset
~~

T2B13 (C)
Where may SSB phone be used in amateur bands above 50 MHz?
A. Only in sub-bands allocated to General class or higher licensees
B. Only on repeaters
C. In at least some portion of all these bands
D. On any band as long as power is limited to 25 watts
~~

T2B14 (A)
Which of the following describes a linked repeater network?
A. A network of repeaters where signals received by one repeater are repeated by all the repeaters
B. A repeater with more than one receiver
C. Multiple repeaters with the same owner
D. A system of repeaters linked by APRS
~~


T2C � Public service: emergency and non-emergency operations; applicability of FCC rules; RACES and ARES; net and traffic procedures; operating restrictions during emergencies

T2C01 (D) [97.103(a)]
When do the FCC rules NOT apply to the operation of an amateur station?
A. When operating a RACES station
B. When operating under special FEMA rules
C. When operating under special ARES rules
D. Never, FCC rules always apply
~~

T2C02 (B)
What is meant by the term "NCS" used in net operation?
A. Nominal Control System
B. Net Control Station
C. National Communications Standard
D. Normal Communications Syntax
~~

T2C03 (C)
What should be done when using voice modes to ensure that voice messages containing unusual words are received correctly?
A. Send the words by voice and Morse code
B. Speak very loudly into the microphone
C. Spell the words using a standard phonetic alphabet
D. All of these choices are correct
~~

T2C04 (D)
What do RACES and ARES have in common?
A. They represent the two largest ham clubs in the United States
B. Both organizations broadcast road and weather information
C. Neither may handle emergency traffic supporting public service agencies
D. Both organizations may provide communications during emergencies
~~

T2C05 (A)
What does the term �traffic� refer to in net operation?
A. Formal messages exchanged by net stations
B. The number of stations checking in and out of a net
C. Operation by mobile or portable stations
D. Requests to activate the net by a served agency
~~

T2C06 (C)
Which of the following is an accepted practice to get the immediate attention of a net control station when reporting an emergency?
A. Repeat "SOS" three times followed by the call sign of the reporting station
B. Press the push-to-talk button three times
C. Begin your transmission by saying "Priority" or "Emergency" followed by your call sign
D. Play a pre-recorded emergency alert tone followed by your call sign
~~

T2C07 (C)
Which of the following is an accepted practice for an amateur operator who has checked into a net?
A. Provided that the frequency is quiet, announce the station call sign and location every 5 minutes
B. Move 5 kHz away from the net's frequency and use high power to ask other hams to keep clear of the net frequency
C. Remain on frequency without transmitting until asked to do so by the net control station
D. All of the choices are correct 
~~

T2C08 (A)
Which of the following is a characteristic of good traffic handling? 
A. Passing messages exactly as received
B. Making decisions as to whether messages are worthy of relay or delivery
C. Ensuring that any newsworthy messages are relayed to the news media
D. All of these choices are correct
~~

T2C09 (D)
Are amateur station control operators ever permitted to operate outside the frequency privileges of their license class?
A. No
B. Yes, but only when part of a FEMA emergency plan
C. Yes, but only when part of a RACES emergency plan
D. Yes, but only if necessary in situations involving the immediate safety of human life or protection of property
~~

T2C10 (D)
What information is contained in the preamble of a formal traffic message?
A. The email address of the originating station
B. The address of the intended recipient
C. The telephone number of the addressee
D. The information needed to track the message 
~~

T2C11 (A)
What is meant by the term �check,� in reference to a formal traffic message?
A. The number of words or word equivalents in the text portion of the message
B. The value of a money order attached to the message
C. A list of stations that have relayed the message
D. A box on the message form that indicates that the message was received and/or relayed
~~

T2C12 (A)
What is the Amateur Radio Emergency Service (ARES)?
A. Licensed amateurs who have voluntarily registered their qualifications and equipment for communications duty in the public service
B. Licensed amateurs who are members of the military and who voluntarily agreed to provide message handling services in the case of an emergency
C. A training program that provides licensing courses for those interested in obtaining an amateur license to use during emergencies
D. A training program that certifies amateur operators for membership in the Radio Amateur Civil Emergency Service
~~


SUBELEMENT T3 � Radio wave characteristics: properties of radio waves; propagation modes � [3 Exam Questions - 3 Groups]


T3A - Radio wave characteristics: how a radio signal travels; fading; multipath; polarization; wavelength vs absorption; antenna orientation

T3A01 (D)
What should you do if another operator reports that your station�s 2 meter signals were strong just a moment ago, but now they are weak or distorted?
A. Change the batteries in your radio to a different type
B. Turn on the CTCSS tone
C. Ask the other operator to adjust his squelch control
D. Try moving a few feet or changing the direction of your antenna if possible, as reflections may be causing multi-path distortion
~~

T3A02 (B)
Why might the range of VHF and UHF signals be greater in the winter?
A. Less ionospheric absorption 
B. Less absorption by vegetation 
C.�Less solar activity
D. Less tropospheric absorption
~~

T3A03 (C)
What antenna polarization is normally used for long-distance weak-signal CW and SSB contacts using the VHF and UHF bands?
A. Right-hand circular
B. Left-hand circular
C. Horizontal
D. Vertical
~~

T3A04 (B)
What can happen if the antennas at opposite ends of a VHF or UHF line of sight radio link are not using the same polarization?
A. The modulation sidebands might become inverted
B. Signals could be significantly weaker
C. Signals have an echo effect on voices
D. Nothing significant will happen
~~

T3A05 (B)
When using a directional antenna, how might your station be able to access a distant repeater if buildings or obstructions are blocking the direct line of sight path?
A. Change from vertical to horizontal polarization
B. Try to find a path that reflects signals to the repeater
C. Try the long path
D. Increase the antenna SWR
~~

T3A06 (B)
What term is commonly used to describe the rapid fluttering sound sometimes heard from mobile stations that are moving while transmitting?
A. Flip-flopping
B. Picket fencing
C. Frequency shifting
D. Pulsing
~~

T3A07 (A)
What type of wave carries radio signals between transmitting and receiving stations?
A. Electromagnetic
B. Electrostatic
C. Surface acoustic
D. Magnetostrictive
~~

T3A08 (C)
Which of the following is a likely cause of irregular fading of signals received by ionospheric reflection?
A. Frequency shift due to Faraday rotation
B. Interference from thunderstorms
C. Random combining of signals arriving via different paths 
D. Intermodulation distortion 
~~

T3A09 (B)
Which of the following results from the fact that skip signals refracted from the ionosphere are elliptically polarized?
A. Digital modes are unusable
B. Either vertically or horizontally polarized antennas may be used for transmission or reception
C. FM voice is unusable
D. Both the transmitting and receiving antennas must be of the same polarization
~~

T3A10 (D)
What may occur if data signals arrive via multiple paths?
A. Transmission rates can be increased by a factor equal to the number of separate paths observed
B. Transmission rates must be decreased by a factor equal to the number of separate paths observed
C. No significant changes will occur if the signals are transmitted using FM
D. Error rates are likely to increase
~~

T3A11 (C)
Which part of the atmosphere enables the propagation of radio signals around the world?
A. The stratosphere
B. The troposphere
C. The ionosphere
D. The magnetosphere
~~

T3A12 (B)
How might fog and light rain affect radio range on 10 meters and 6 meters?
A. Fog and rain absorb these wavelength bands 
B. Fog and light rain will have little effect on these bands
C. Fog and rain will deflect these signals
D. For and rain will increase radio range
~~

T3A13 (C)
What weather condition would decrease range at microwave frequencies?
A. High winds
B. Low barometric pressure
C.�Precipitation 
D. Colder temperatures
~~


T3B - Radio and electromagnetic wave properties: the electromagnetic spectrum; wavelength vs frequency; nature and velocity of electromagnetic waves; definition of UHF, VHF, HF bands; calculating wavelength

T3B01 (C)
What is the name for the distance a radio wave travels during one complete cycle?
A. Wave speed
B. Waveform
C. Wavelength
D. Wave spread
~~

T3B02 (A)
What property of a radio wave is used to describe its polarization?
A. The orientation of the electric field
B. The orientation of the magnetic field
C. The ratio of the energy in the magnetic field to the energy in the electric field
D. The ratio of the velocity to the wavelength
~~

T3B03 (C)
What are the two components of a radio wave?
A. AC and DC
B. Voltage and current
C. Electric and magnetic fields
D. Ionizing and non-ionizing radiation
~~

T3B04 (A)
How fast does a radio wave travel through free space?
A. At the speed of light
B. At the speed of sound
C. Its speed is inversely proportional to its wavelength
D. Its speed increases as the frequency increases
~~

T3B05 (B)
How does the wavelength of a radio wave relate to its frequency?
A. The wavelength gets longer as the frequency increases
B. The wavelength gets shorter as the frequency increases
C. There is no relationship between wavelength and frequency
D. The wavelength depends on the bandwidth of the signal
~~

T3B06 (D)
What is the formula for converting frequency to approximate wavelength in meters?
A. Wavelength in meters equals frequency in hertz multiplied by 300
B. Wavelength in meters equals frequency in hertz divided by 300
C. Wavelength in meters equals frequency in megahertz divided by 300
D. Wavelength in meters equals 300 divided by frequency in megahertz
~~

T3B07 (A)
What property of radio waves is often used to identify the different frequency bands?
A. The approximate wavelength
B. The magnetic intensity of waves
C. The time it takes for waves to travel one mile
D. The voltage standing wave ratio of waves
~~

T3B08 (B)
What are the frequency limits of the VHF spectrum?
A. 30 to 300 kHz
B. 30 to 300 MHz
C. 300 to 3000 kHz
D. 300 to 3000 MHz
~~

T3B09 (D)
What are the frequency limits of the UHF spectrum?
A. 30 to 300 kHz
B. 30 to 300 MHz
C. 300 to 3000 kHz
D. 300 to 3000 MHz
~~

T3B10 (C)
What frequency range is referred to as HF?
A. 300 to 3000 MHz
B. 30 to 300 MHz
C. 3 to 30 MHz
D. 300 to 3000 kHz
~~

T3B11 (B)
What is the approximate velocity of a radio wave as it travels through free space?
A. 150,000 kilometers per second
B. 300,000,000 meters per second
C. 300,000,000 miles per hour
D. 150,000 miles per hour
~~


T3C - Propagation modes: line of sight; sporadic E; meteor and auroral scatter and reflections; tropospheric ducting; F layer skip; radio horizon 

T3C01 (C)
Why are direct (not via a repeater) UHF signals rarely heard from stations outside your local coverage area?
A. They are too weak to go very far
B. FCC regulations prohibit them from going more than 50 miles
C. UHF signals are usually not reflected by the ionosphere
D. UHF signals are absorbed by the ionospheric D layer
~~

T3C02 (C)
Which of the following is an advantage of HF vs VHF and higher frequencies?
A. HF antennas are generally smaller
B. HF accommodates wider bandwidth signals
C. Long distance ionospheric propagation is far more common on HF
D. There is less atmospheric interference (static) on HF
~~

T3C03 (B)
What is a characteristic of VHF signals received via auroral reflection?
A. Signals from distances of 10,000 or more miles are common
B. The signals exhibit rapid fluctuations of strength and often sound distorted
C. These types of signals occur only during winter nighttime hours
D. These types of signals are generally strongest when your antenna is aimed west
~~

T3C04 (B)
Which of the following propagation types is most commonly associated with occasional strong over-the-horizon signals on the 10, 6, and 2 meter bands?
A. Backscatter
B. Sporadic E
C. D layer absorption
D. Gray-line propagation
~~

T3C05 (A)
Which of the following effects might cause radio signals to be heard despite obstructions between the transmitting and receiving stations?
A. Knife-edge diffraction
B. Faraday rotation
C. Quantum tunneling 
D. Doppler shift
~~

T3C06 (A)
What mode is responsible for allowing over-the-horizon VHF and UHF communications to ranges of approximately 300 miles on a regular basis?
A. Tropospheric scatter
B. D-layer refraction
C. F2-layer refraction
D. Faraday rotation
~~

T3C07 (B)
What band is best suited for communicating via meteor scatter?
A. 10 meters
B. 6 meters
C. 2 meters
D. 70 centimeters
~~

T3C08 (D)
What causes tropospheric ducting?
A. Discharges of lightning during electrical storms
B. Sunspots and solar flares
C. Updrafts from hurricanes and tornadoes
D. Temperature inversions in the atmosphere
~~

T3C09 (A)
What is generally the best time for long-distance 10 meter band propagation via the F layer?
A. From dawn to shortly after sunset during periods of high sunspot activity
B. From shortly after sunset to dawn during periods of high sunspot activity
C. From dawn to shortly after sunset during periods of low sunspot activity
D. From shortly after sunset to dawn during periods of low sunspot activity
~~

T3C10 (A)
Which of the following bands may provide long distance communications during the peak of the sunspot cycle?
A. Six or ten meters
B. 23 centimeters
C. 70 centimeters or 1.25 meters
D. All of these choices are correct
~~

T3C11 (C)
Why do VHF and UHF radio signals usually travel somewhat farther than the visual line of sight distance between two stations?
A. Radio signals move somewhat faster than the speed of light
B. Radio waves are not blocked by dust particles
C. The Earth seems less curved to radio waves than to light
D. Radio waves are blocked by dust particles
~~


SUBELEMENT T4 - Amateur radio practices and station set-up � [2 Exam Questions - 2 Groups]


T4A � Station setup: connecting microphones; reducing unwanted emissions; power source; connecting a computer; RF grounding; connecting digital equipment; connecting an SWR meter

T4A01 (D)
What must be considered to determine the minimum current capacity needed for a transceiver's power supply?
A. Efficiency of the transmitter at full power output
B. Receiver and control circuit power
C. Power supply regulation and heat dissipation
D. All of these are correct
~~

T4A02 (D)
How might a computer be used as part of an amateur radio station?
A. For logging contacts and contact information
B. For sending and/or receiving CW
C. For generating and decoding digital signals
D. All of these choices are correct
~~

T4A03 (A)
Why should wiring between the power source and radio be heavy-gauge wire and kept as short as possible?
A. To avoid voltage falling below that needed for proper operation
B. To provide a good counterpoise for the antenna
C. To avoid RF interference
D. All of these choices are correct
~~

T4A04 (C)
Which computer sound card port is connected to a transceiver�s headphone or speaker output for operating digital modes?
A. Headphone output
B. Mute
C. Microphone or line input
D. PCI or SDI
~~

T4A05 (A)
What is the proper location for an external SWR meter?
A. In series with the feed line, between the transmitter and antenna
B. In series with the station's ground
C. In parallel with the push-to-talk line and the antenna
D. In series with the power supply cable, as close as possible to the radio
~~

T4A06 (C)
Which of the following connections might be used between a voice transceiver and a computer for digital operation?
A. Receive and transmit mode, status, and location
B. Antenna and RF power
C. Receive audio, transmit audio, and push-to-talk (PTT)
D. NMEA GPS location and dc power
~~

T4A07 (C)
How is a computer�s sound card used when conducting digital communications?
A. The sound card communicates between the computer CPU and the video display
B. The sound card records the audio frequency for video display
C. The sound card provides audio to the radio's microphone input and converts received audio to digital form
D. All of these choices are correct
~~

T4A08 (D)
Which of the following conductors provides the lowest impedance to RF signals?
A. Round stranded wire 
B. Round copper-clad steel wire
C. Twisted-pair cable
D. Flat strap
~~

T4A09 (D)
Which of the following could you use to cure distorted audio caused by RF current on the shield of a microphone cable?
A. Band-pass filter
B. Low-pass filter
C. Preamplifier
D. Ferrite choke
~~

T4A10 (B)
What is the source of a high-pitched whine that varies with engine speed in a mobile transceiver�s receive audio?
A. The ignition system
B. The alternator
C. The electric fuel pump
D. Anti-lock braking system controllers
~~

T4A11 (A)
Where should the negative return connection of a mobile transceiver's power cable be connected?
A. At the battery or engine block ground strap
B. At the antenna mount
C. To any metal part of the vehicle
D. Through the transceiver�s mounting bracket
~~


T4B - Operating controls: tuning; use of filters; squelch function; AGC; repeater offset; memory channels 

T4B01 (B)
What may happen if a transmitter is operated with the microphone gain set too high?
A. The output power might be too high
B. The output signal might become distorted
C. The frequency might vary
D. The SWR might increase
~~

T4B02 (A)
Which of the following can be used to enter the operating frequency on a modern transceiver?
A. The keypad or VFO knob
B. The CTCSS or DTMF encoder
C. The Automatic Frequency Control
D. All of these choices are correct
~~

T4B03 (D)
What is the purpose of the squelch control on a transceiver?
A. To set the highest level of volume desired
B. To set the transmitter power level
C. To adjust the automatic gain control
D. To mute receiver output noise when no signal is being received
~~

T4B04 (B)
What is a way to enable quick access to a favorite frequency on your transceiver?
A. Enable the CTCSS tones
B. Store the frequency in a memory channel
C. Disable the CTCSS tones
D. Use the scan mode to select the desired frequency
~~

T4B05 (C)
Which of the following would reduce ignition interference to a receiver?
A. Change frequency slightly
B. Decrease the squelch setting
C. Turn on the noise blanker
D. Use the RIT control
~~

T4B06 (D)
Which of the following controls could be used if the voice pitch of a single-sideband signal seems too high or low?
A. The AGC or limiter
B. The bandwidth selection
C. The tone squelch
D. The receiver RIT or clarifier
~~

T4B07 (B)
What does the term �RIT� mean?
A. Receiver Input Tone
B. Receiver Incremental Tuning
C. Rectifier Inverter Test
D. Remote Input Transmitter
~~

T4B08 (B)
What is the advantage of having multiple receive bandwidth choices on a multimode transceiver?
A. Permits monitoring several modes at once
B. Permits noise or interference reduction by selecting a bandwidth matching the mode
C. Increases the number of frequencies that can be stored in memory
D. Increases the amount of offset between receive and transmit frequencies
~~

T4B09 (C)
Which of the following is an appropriate receive filter bandwidth for minimizing noise and interference for SSB reception?
A. 500 Hz
B. 1000 Hz
C. 2400 Hz
D. 5000 Hz
~~

T4B10 (A)
Which of the following is an appropriate receive filter bandwidth for minimizing noise and interference for CW reception?
A. 500 Hz
B. 1000 Hz
C. 2400 Hz
D. 5000 Hz
~~

T4B11 (C)
What is the common meaning of the term "repeater offset"?
A. The distance between the repeater�s transmit and receive antennas
B. The time delay before the repeater timer resets
C. The difference between the repeater�s transmit and receive frequencies
D. Matching the antenna impedance to the feed line impedance
~~

T4B12 (A)
What is the function of automatic gain control, or AGC?
A. To keep received audio relatively constant
B. To protect an antenna from lightning
C. To eliminate RF on the station cabling
D. An asymmetric goniometer control used for antenna matching 
~~

T4B13 (B)
Which of the following could be used to remove power line noise or ignition noise?
A. Squelch
B. Noise blanker
C. Notch filter
D. All of these choices are correct
~~

T4B14 (C)
Which of the following is a use for the scanning function of an FM transceiver?
A. To check incoming signal deviation
B. To prevent interference to nearby repeaters
C. To scan through a range of frequencies to check for activity
D. To check for messages left on a digital bulletin board
~~


SUBELEMENT T5 � Electrical principles: math for electronics; electronic principles; Ohm�s Law � [4 Exam Questions - 4 Groups]


T5A - Electrical principles, units, and terms: current and voltage; conductors and insulators; alternating and direct current; series and parallel circuits

T5A01 (D)
Electrical current is measured in which of the following units?
A. Volts
B. Watts
C. Ohms
D. Amperes
~~

T5A02 (B)
Electrical power is measured in which of the following units?
A. Volts
B. Watts
C. Ohms
D. Amperes
~~

T5A03 (D)
What is the name for the flow of electrons in an electric circuit?
A. Voltage
B. Resistance
C. Capacitance
D. Current 
~~

T5A04 (B)
What is the name for a current that flows only in one direction?
A. Alternating current
B. Direct current
C. Normal current
D. Smooth current
~

T5A05 (A)
What is the electrical term for the electromotive force (EMF) that causes electron flow?
A. Voltage
B. Ampere-hours
C. Capacitance
D. Inductance
~~

T5A06 (A)
How much voltage does a mobile transceiver typically require?
A. About 12 volts
B. About 30 volts
C. About 120 volts
D. About 240 volts
~~

T5A07 (C)
Which of the following is a good electrical conductor?
A. Glass
B. Wood
C. Copper
D. Rubber
~~

T5A08 (B)
Which of the following is a good electrical insulator?
A. Copper
B. Glass
C. Aluminum
D. Mercury
~~

T5A09 (A)
What is the name for a current that reverses direction on a regular basis?
A. Alternating current
B. Direct current
C. Circular current
D. Vertical current
~~

T5A10 (C)
Which term describes the rate at which electrical energy is used?
A. Resistance
B. Current
C. Power
D. Voltage
~~

T5A11 (A)
What is the unit of electromotive force?
A. The volt
B. The watt
C. The ampere
D. The ohm
~~

T5A12 (D)
What describes the number of times per second that an alternating current makes a complete cycle?
A. Pulse rate
B. Speed
C. Wavelength
D. Frequency
~~

T5A13 (A)
In which type of circuit is current the same through all components?
A. Series
B. Parallel
C. Resonant
D. Branch
~~

T5A14 (B)
In which type of circuit is voltage the same across all components?
A. Series
B. Parallel
C. Resonant
D. Branch
~~


T5B - Math for electronics: conversion of electrical units; decibels; the metric system 

T5B01 (C)
How many milliamperes is 1.5 amperes?
A. 15 milliamperes
B. 150 milliamperes
C. 1500 milliamperes
D. 15,000 milliamperes
~~

T5B02 (A)
What is another way to specify a radio signal frequency of 1,500,000 hertz?
A. 1500 kHz
B. 1500 MHz
C. 15 GHz
D. 150 kHz
~~

T5B03 (C)
How many volts are equal to one kilovolt?
A. One one-thousandth of a volt
B. One hundred volts
C. One thousand volts
D. One million volts
~~

T5B04 (A)
How many volts are equal to one microvolt?
A. One one-millionth of a volt
B. One million volts
C. One thousand kilovolts
D. One one-thousandth of a volt
~~

T5B05 (B)
Which of the following is equal to 500 milliwatts?
A. 0.02 watts
B. 0.5 watts
C. 5 watts
D. 50 watts
~~

T5B06 (C)
If an ammeter calibrated in amperes is used to measure a 3000-milliampere current, what reading would it show?
A. 0.003 amperes
B. 0.3 amperes
C. 3 amperes
D. 3,000,000 amperes
~~

T5B07 (C)
If a frequency display calibrated in megahertz shows a reading of 3.525 MHz, what would it show if it were calibrated in kilohertz? 
A. 0.003525 kHz
B. 35.25 kHz
C. 3525 kHz
D. 3,525,000 kHz
~~ 

T5B08 (B)
How many microfarads are equal to 1,000,000 picofarads?
A. 0.001 microfarads
B. 1 microfarad
C. 1000 microfarads
D. 1,000,000,000 microfarads
~~ 

T5B09 (B)
What is the approximate amount of change, measured in decibels (dB), of a power increase from 5 watts to 10 watts?
A. 2 dB
B. 3 dB
C. 5 dB
D. 10 dB
~~

T5B10 (C)
What is the approximate amount of change, measured in decibels (dB), of a power decrease from 12 watts to 3 watts?
A. -1 dB
B. -3 dB
C. -6 dB
D. -9 dB
~~

T5B11 (A)
What is the amount of change, measured in decibels (dB), of a power increase from 20 watts to 200 watts?
A. 10 dB
B. 12 dB
C. 18 dB
D. 28 dB
~~

T5B12 (A)
Which of the following frequencies is equal to 28,400 kHz?
A. 28.400 MHz
B. 2.800 MHz
C. 284.00 MHz
D. 28.400 kHz
~~

T5B13 (C)
If a frequency display shows a reading of 2425 MHz, what frequency is that in GHz?
A. 0.002425 GHz
B. 24.25 GHz
C. 2.425 GHz
D. 2425 GHz
~~


T5C - Electronic principles: capacitance; inductance; current flow in circuits; alternating current; definition of RF; definition of polarity; DC power calculations; impedance

T5C01 (D)
What is the ability to store energy in an electric field called?
A. Inductance
B. Resistance
C. Tolerance 
D. Capacitance
~~

T5C02 (A)
What is the basic unit of capacitance?
A. The farad
B. The ohm
C. The volt
D. The henry
~~

T5C03 (D)
What is the ability to store energy in a magnetic field called?
A. Admittance
B. Capacitance
C. Resistance
D. Inductance
~~

T5C04 (C)
What is the basic unit of inductance?
A. The coulomb
B. The farad
C. The henry
D. The ohm
~~

T5C05 (A)
What is the unit of frequency?
A. Hertz
B. Henry
C. Farad
D. Tesla
~~

T5C06 (A)
What does the abbreviation �RF� refer to? 
A. Radio frequency signals of all types
B. The resonant frequency of a tuned circuit
C. The real frequency transmitted as opposed to the apparent frequency
D. Reflective force in antenna transmission lines 
~~

T5C07 (B)
A radio wave is made up of what type of energy?
A. Pressure
B. Electromagnetic
C. Gravity
D. Thermal
~~

T5C08 (A)
What is the formula used to calculate electrical power in a DC circuit?
A. Power (P) equals voltage (E) multiplied by current (I)
B. Power (P) equals voltage (E) divided by current (I)
C. Power (P) equals voltage (E) minus current (I)
D. Power (P) equals voltage (E) plus current (I)
~~

T5C09 (A)
How much power is being used in a circuit when the applied voltage is 13.8 volts DC and the current is 10 amperes?
A. 138 watts
B. 0.7 watts
C. 23.8 watts
D. 3.8 watts
~~

T5C10 (B)
How much power is being used in a circuit when the applied voltage is 12 volts DC and the current is 2.5 amperes?
A. 4.8 watts
B. 30 watts
C. 14.5 watts
D. 0.208 watts
~~

T5C11 (B)
How many amperes are flowing in a circuit when the applied voltage is 12 volts DC and the load is 120 watts?
A. 0.1 amperes
B. 10 amperes
C. 12 amperes
D. 132 amperes
~~

T5C12 (A)
What is impedance? 
A. A measure of the opposition to AC current flow in a circuit
B. The inverse of resistance
C. The Q or Quality Factor of a component
D. The power handling capability of a component
~~

T5C13 (D)
What are the units of impedance? 
A. Volts
B. Amperes
C. Coulombs
D. Ohms
~~

T5C14 (D)
What is the proper abbreviation for megahertz?
A. mHz
B. mhZ
C. Mhz
D. MHz
~~


T5D � Ohm�s Law: formulas and usage; components in series and parallel 

T5D01 (B)
What formula is used to calculate current in a circuit?
A. Current (I) equals voltage (E) multiplied by resistance (R)
B. Current (I) equals voltage (E) divided by resistance (R)
C. Current (I) equals voltage (E) added to resistance (R)
D. Current (I) equals voltage (E) minus resistance (R)
~~

T5D02 (A)
What formula is used to calculate voltage in a circuit?
A. Voltage (E) equals current (I) multiplied by resistance (R)
B. Voltage (E) equals current (I) divided by resistance (R)
C. Voltage (E) equals current (I) added to resistance (R)
D. Voltage (E) equals current (I) minus resistance (R)
~~

T5D03 (B)
What formula is used to calculate resistance in a circuit?
A. Resistance (R) equals voltage (E) multiplied by current (I)
B. Resistance (R) equals voltage (E) divided by current (I)
C. Resistance (R) equals voltage (E) added to current (I)
D. Resistance (R) equals voltage (E) minus current (I)
~~

T5D04 (B)
What is the resistance of a circuit in which a current of 3 amperes flows through a resistor connected to 90 volts?
A. 3 ohms
B. 30 ohms
C. 93 ohms
D. 270 ohms
~~

T5D05 (C)
What is the resistance in a circuit for which the applied voltage is 12 volts and the current flow is 1.5 amperes?
A. 18 ohms
B. 0.125 ohms
C. 8 ohms
D. 13.5 ohms
~~

T5D06 (A)
What is the resistance of a circuit that draws 4 amperes from a 12-volt source?
A. 3 ohms
B. 16 ohms
C. 48 ohms
D. 8 Ohms
~~

T5D07 (D)
What is the current in a circuit with an applied voltage of 120 volts and a resistance of 80 ohms?
A. 9600 amperes
B. 200 amperes
C. 0.667 amperes
D. 1.5 amperes
~~

T5D08 (C)
What is the current through a 100-ohm resistor connected across 200 volts?
A. 20,000 amperes
B. 0.5 amperes
C. 2 amperes
D. 100 amperes
~~

T5D09 (C)
What is the current through a 24-ohm resistor connected across 240 volts?
A. 24,000 amperes
B. 0.1 amperes
C. 10 amperes
D. 216 amperes
~~

T5D10 (A)
What is the voltage across a 2-ohm resistor if a current of 0.5 amperes flows through it?
A. 1 volt
B. 0.25 volts
C. 2.5 volts
D. 1.5 volts
~~

T5D11 (B)
What is the voltage across a 10-ohm resistor if a current of 1 ampere flows through it?
A. 1 volt
B. 10 volts
C. 11 volts
D. 9 volts
~~

T5D12 (D)
What is the voltage across a 10-ohm resistor if a current of 2 amperes flows through it?
A. 8 volts
B. 0.2 volts
C. 12 volts
D. 20 volts
~~

T5D13 (B)
What happens to current at the junction of two components in series? 
A. It divides equally between them
B. It is unchanged
C. It divides based on the on the value of the components
D. The current in the second component is zero
~~

T5D14 (A)
What happens to current at the junction of two components in parallel?
A. It divides between them dependent on the value of the components
B. It is the same in both components
C. Its value doubles
D. Its value is halved
~~

T5D15 (C)
What is the voltage across each of two components in series with a voltage source?
A. The same voltage as the source
B. Half the source voltage
C. It is determined by the type and value of the components
D. Twice the source voltage
~~

T5D16 (D)
What is the voltage across each of two components in parallel with a voltage source?
A. It is determined by the type and value of the components
B. Half the source voltage
C. Twice the source voltage
D. The same voltage as the source
~~


SUBELEMENT T6 � Electrical components; circuit diagrams; component functions � [4 Exam Questions - 4 Groups]


T6A - Electrical components: fixed and variable resistors; capacitors and inductors; fuses; switches; batteries

T6A01 (B)
What electrical component opposes the flow of current in a DC circuit?
A. Inductor
B. Resistor
C. Voltmeter
D. Transformer
~~

T6A02 (C)
What type of component is often used as an adjustable volume control?
A. Fixed resistor
B. Power resistor
C. Potentiometer
D. Transformer
~~

T6A03 (B)
What electrical parameter is controlled by a potentiometer?
A. Inductance
B. Resistance
C. Capacitance
D. Field strength
~~

T6A04 (B)
What electrical component stores energy in an electric field?
A. Resistor
B. Capacitor
C. Inductor
D. Diode
~~

T6A05 (D)
What type of electrical component consists of two or more conductive surfaces separated by an insulator?
A. Resistor
B. Potentiometer
C. Oscillator
D. Capacitor
~~

T6A06 (C)
What type of electrical component stores energy in a magnetic field?
A. Resistor
B. Capacitor
C. Inductor
D. Diode
~~

T6A07 (D)
What electrical component usually is constructed as a coil of wire?
A. Switch
B. Capacitor
C. Diode
D. Inductor
~~

T6A08 (B)
What electrical component is used to connect or disconnect electrical circuits?
A. Magnetron
B. Switch
C. Thermistor
D. All of these choices are correct
~~

T6A09 (A)
What electrical component is used to protect other circuit components from current overloads?
A. Fuse
B. Capacitor
C. Inductor
D. All of these choices are correct
~~

T6A10 (D)
Which of the following battery types is rechargeable?
A. Nickel-metal hydride
B. Lithium-ion
C. Lead-acid gel-cell
D. All of these choices are correct
~~

T6A11 (B)
Which of the following battery types is not rechargeable?
A. Nickel-cadmium
B. Carbon-zinc
C. Lead-acid 
D. Lithium-ion
~~


T6B � Semiconductors: basic principles and applications of solid state devices; diodes and transistors 

T6B01 (D)
What class of electronic components uses a voltage or current signal to control current flow?
A. Capacitors
B. Inductors
C. Resistors
D. Transistors
~~

T6B02 (C)
What electronic component allows current to flow in only one direction?
A. Resistor
B. Fuse
C. Diode
D. Driven element
~~

T6B03 (C)
Which of these components can be used as an electronic switch or amplifier?
A. Oscillator
B. Potentiometer
C. Transistor
D. Voltmeter
~~

T6B04 (B)
Which of the following components can consist of three layers of semiconductor material?
A. Alternator
B. Transistor
C. Triode
D. Pentagrid converter
~~

T6B05 (A)
Which of the following electronic components can amplify signals?
A. Transistor
B. Variable resistor
C. Electrolytic capacitor
D. Multi-cell battery
~~

T6B06 (B)
How is the cathode lead of a semiconductor diode often marked on the package?
A. With the word "cathode"
B. With a stripe
C. With the letter C
D. With the letter K
~~

T6B07 (B)
What does the abbreviation LED stand for?
A. Low Emission Diode
B. Light Emitting Diode
C. Liquid Emission Detector
D. Long Echo Delay
~~

T6B08 (A)
What does the abbreviation FET stand for?
A. Field Effect Transistor
B. Fast Electron Transistor
C. Free Electron Transmitter
D. Frequency Emission Transmitter
~~

T6B09 (C)
What are the names of the two electrodes of a diode?
A. Plus and minus
B. Source and drain
C. Anode and cathode
D. Gate and base
~~

T6B10 (B)
Which of the following could be the primary gain-producing component in an RF power amplifier?
A. Transformer
B. Transistor
C. Reactor
D. Resistor
~~

T6B11 (A)
What is the term that describes a device's ability to amplify a signal?
A. Gain
B. Forward resistance
C. Forward voltage drop
D. On resistance
~~


T6C - Circuit diagrams; schematic symbols 

T6C01 (C)
What is the name of an electrical wiring diagram that uses standard component symbols?
A. Bill of materials
B. Connector pinout
C. Schematic
D. Flow chart
~~

T6C02 (A)
What is component 1 in figure T1?
A. Resistor
B. Transistor
C. Battery
D. Connector
~~

T6C03 (B)
What is component 2 in figure T1?
A. Resistor
B. Transistor
C. Indicator lamp
D. Connector
~~

T6C04 (C)
What is component 3 in figure T1?
A. Resistor
B. Transistor
C. Lamp
D. Ground symbol
~~

T6C05 (C)
What is component 4 in figure T1?
A. Resistor
B. Transistor
C. Battery
D. Ground symbol
~~

T6C06 (B)
What is component 6 in figure T2?
A. Resistor
B. Capacitor
C. Regulator IC
D. Transistor
~~

T6C07 (D)
What is component 8 in figure T2?
A. Resistor
B. Inductor
C. Regulator IC
D. Light emitting diode
~~

T6C08 (C)
What is component 9 in figure T2?
A. Variable capacitor
B. Variable inductor
C. Variable resistor
D. Variable transformer
~~

T6C09 (D)
What is component 4 in figure T2?
A. Variable inductor
B. Double-pole switch
C. Potentiometer
D. Transformer
~~

T6C10 (D)
What is component 3 in figure T3?
A. Connector
B. Meter
C. Variable capacitor
D. Variable inductor
~~

T6C11 (A)
What is component 4 in figure T3?
A. Antenna
B. Transmitter
C. Dummy load
D. Ground
~~

T6C12 (A)
What do the symbols on an electrical schematic represent?
A. Electrical components
B. Logic states
C. Digital codes
D. Traffic nodes
~~

T6C13 (C)
Which of the following is accurately represented in electrical schematics?
A. Wire lengths
B. Physical appearance of components
C. The way components are interconnected
D. All of these choices are correct
~~


T6D - Component functions: rectification; switches; indicators; power supply components; resonant circuit; shielding; power transformers; integrated circuits

T6D01 (B)
Which of the following devices or circuits changes an alternating current into a varying direct current signal?
A. Transformer
B. Rectifier
C. Amplifier
D. Reflector
~~

T6D02 (A)
What is a relay?
A. An electrically-controlled switch
B. A current controlled amplifier
C. An optical sensor
D. A pass transistor
~~

T6D03 (A)
What type of switch is represented by component 3 in figure T2?
A. Single-pole single-throw
B. Single-pole double-throw
C. Double-pole single-throw
D. Double-pole double-throw
~~

T6D04 (C)
Which of the following displays an electrical quantity as a numeric value?
A. Potentiometer
B. Transistor
C. Meter
D. Relay
~~

T6D05 (A)
What type of circuit controls the amount of voltage from a power supply?
A. Regulator
B. Oscillator
C. Filter
D. Phase inverter
~~

T6D06 (B)
What component is commonly used to change 120V AC house current to a lower AC voltage for other uses?
A. Variable capacitor
B. Transformer
C. Transistor
D. Diode
~~

T6D07 (A)
Which of the following is commonly used as a visual indicator?
A. LED
B. FET
C. Zener diode
D. Bipolar transistor
~~

T6D08 (D)
Which of the following is combined with an inductor to make a tuned circuit?
A. Resistor
B. Zener diode
C. Potentiometer
D. Capacitor
~~

T6D09 (C)
What is the name of a device that combines several semiconductors and other components into one package?
A. Transducer
B. Multi-pole relay
C. Integrated circuit
D. Transformer
~~

T6D10 (C)
What is the function of component 2 in Figure T1?
A. Give off light when current flows through it
B. Supply electrical energy
C. Control the flow of current
D. Convert electrical energy into radio waves
~~

T6D11 (A)
Which of the following is a resonant or tuned circuit?
A. An inductor and a capacitor connected in series or parallel to form a filter
B. A type of voltage regulator
C. A resistor circuit used for reducing standing wave ratio
D. A circuit designed to provide high-fidelity audio
~~

T6D12 (C)
Which of the following is a common reason to use shielded wire?
A. To decrease the resistance of DC power connections
B. To increase the current carrying capability of the wire
C. To prevent coupling of unwanted signals to or from the wire
D. To couple the wire to other signals
~~


SUBELEMENT T7 � Station equipment: common transmitter and receiver problems; antenna measurements; troubleshooting; basic repair and testing � [4 Exam Questions - 4 Groups]


T7A � Station equipment: receivers; transmitters; transceivers; modulation; transverters; transmit and receive amplifiers

T7A01 (B)
Which term describes the ability of a receiver to detect the presence of a signal?
A. Linearity
B. Sensitivity
C. Selectivity
D. Total Harmonic Distortion
~~

T7A02 (B)
What is a transceiver?
A.�A type of antenna switch
B. A unit combining the functions of a transmitter and a receiver
C. A component in a repeater that filters out unwanted interference
D. A type of antenna matching network
~~

T7A03 (B)
Which of the following is used to convert a radio signal from one frequency to another?
A. Phase splitter
B. Mixer
C. Inverter
D. Amplifier
~~

T7A04 (C)
Which term describes the ability of a receiver to discriminate between multiple signals?
A. Discrimination ratio
B. Sensitivity
C. Selectivity
D. Harmonic distortion
~~

T7A05 (D)
What is the name of a circuit that generates a signal at a specific frequency?
A. Reactance modulator
B. Product detector
C. Low-pass filter
D. Oscillator
~~

T7A06 (C)
What device converts the RF input and output of a transceiver to another band?
A. High-pass filter
B. Low-pass filter
C. Transverter
D. Phase converter
~~

T7A07 (D)
What is meant by �PTT�?
A. Pre-transmission tuning to reduce transmitter harmonic emission
B. Precise tone transmissions used to limit repeater access to only certain signals
C. A primary transformer tuner use to match antennas
D. The push-to-talk function that switches between receive and transmit
~~

T7A08 (C)
Which of the following describes combining speech with an RF carrier signal?
A. Impedance matching
B. Oscillation
C. Modulation
D. Low-pass filtering
~~

T7A09 (B)
What is the function of the SSB/CW-FM switch on a VHF power amplifier?
A. Change the mode of the transmitted signal
B. Set the amplifier for proper operation in the selected mode
C. Change the frequency range of the amplifier to operate in the proper portion of the band
D. Reduce the received signal noise 
~~

T7A10 (B)
What device increases the low-power output from a handheld transceiver?
A. A voltage divider
B. An RF power amplifier
C. An impedance network
D. All of these choices are correct
~~

T7A11 (A)
Where is an RF preamplifier installed?
A. Between the antenna and receiver
B. At the output of the transmitter's power amplifier
C. Between a transmitter and antenna tuner
D. At the receiver's audio output
~~


T7B � Common transmitter and receiver problems: symptoms of overload and overdrive; distortion; causes of interference; interference and consumer electronics; part 15 devices; over-modulation; RF feedback; off frequency signals

T7B01 (D)
What can you do if you are told your FM handheld or mobile transceiver is over-deviating?
A. Talk louder into the microphone
B. Let the transceiver cool off
C. Change to a higher power level
D. Talk farther away from the microphone
~~

T7B02 (A)
What would cause a broadcast AM or FM radio to receive an amateur radio transmission unintentionally?
A. The receiver is unable to reject strong signals outside the AM or FM band
B. The microphone gain of the transmitter is turned up too high
C. The audio amplifier of the transmitter is overloaded
D. The deviation of an FM transmitter is set too low
~~

T7B03 (D)
Which of the following can cause radio frequency interference?
A. Fundamental overload
B. Harmonics
C. Spurious emissions
D. All of these choices are correct
~~

T7B04 (D)
Which of the following is a way to reduce or eliminate interference from an amateur transmitter to a nearby telephone?
A. Put a filter on the amateur transmitter
B. Reduce the microphone gain
C. Reduce the SWR on the transmitter transmission line
D. Put an RF filter on the telephone
~~

T7B05 (A)
How can overload of a non-amateur radio or TV receiver by an amateur signal be reduced or eliminated?
A. Block the amateur signal with a filter at the antenna input of the affected receiver
B. Block the interfering signal with a filter on the amateur transmitter
C. Switch the transmitter from FM to SSB
D. Switch the transmitter to a narrow-band mode
~~

T7B06 (A)
Which of the following actions should you take if a neighbor tells you that your station�s transmissions are interfering with their radio or TV reception?
A. Make sure that your station is functioning properly and that it does not cause interference to your own radio or television when it is tuned to the same channel 
B. Immediately turn off your transmitter and contact the nearest FCC office for assistance
C. Tell them that your license gives you the right to transmit and nothing can be done to reduce the interference
D. Install a harmonic doubler on the output of your transmitter and tune it until the interference is eliminated
~~

T7B07 (D)
Which of the following can reduce overload to a VHF transceiver from a nearby FM broadcast station?
A. RF preamplifier
B. Double-shielded coaxial cable
C. Using headphones instead of the speaker
D. Band-reject filter
~~

T7B08 (D)
What should you do if something in a neighbor�s home is causing harmful interference to your amateur station?
A. Work with your neighbor to identify the offending device
B. Politely inform your neighbor about the rules that prohibit the use of devices that cause interference
C. Check your station and make sure it meets the standards of good amateur practice
D. All of these choices are correct
~~

T7B09 (A)
What is a Part 15 device?
A. An unlicensed device that may emit low-powered radio signals on frequencies used by a licensed service
B. An amplifier that has been type-certified for amateur radio
C. A device for long-distance communications using special codes sanctioned by the International Amateur Radio Union
D. A type of test set used to determine whether a transmitter complies with FCC regulation 91.15
~~

T7B10 (D)
What might be a problem if you receive a report that your audio signal through the repeater is distorted or unintelligible?
A. Your transmitter is slightly off frequency
B. Your batteries are running low
C. You are in a bad location
D. All of these choices are correct
~~

T7B11 (C)
What is a symptom of RF feedback in a transmitter or transceiver?
A. Excessive SWR at the antenna connection
B. The transmitter will not stay on the desired frequency
C. Reports of garbled, distorted, or unintelligible voice transmissions
D. Frequent blowing of power supply fuses
~~

T7B12 (D)
What should be the first step to resolve cable TV interference from your ham radio transmission?
A. Add a low-pass filter to the TV antenna input
B. Add a high-pass filter to the TV antenna input
C. Add a preamplifier to the TV antenna input
D. Be sure all TV coaxial connectors are installed properly
~~


T7C � Antenna measurements and troubleshooting: measuring SWR; dummy loads; coaxial cables; causes of feed line failures

T7C01 (A)
What is the primary purpose of a dummy load?
A. To prevent transmitting signals over the air when making tests
B. To prevent over-modulation of a transmitter
C. To improve the efficiency of an antenna
D. To improve the signal-to-noise ratio of a receiver
~~

T7C02 (B)
Which of the following instruments can be used to determine if an antenna is resonant at the desired operating frequency?
A. A VTVM
B. An antenna analyzer
C. A Q meter
D. A frequency counter
~~

T7C03 (A)
What, in general terms, is standing wave ratio (SWR)?
A. A measure of how well a load is matched to a transmission line
B. The ratio of high to low impedance in a feed line
C. The transmitter efficiency ratio
D. An indication of the quality of your station�s ground connection
~~

T7C04 (C)
What reading on an SWR meter indicates a perfect impedance match between the antenna and the feed line?
A. 2 to 1
B. 1 to 3
C. 1 to 1
D. 10 to 1
~~

T7C05 (A)
Why do most solid-state amateur radio transmitters reduce output power as SWR increases?
A. To protect the output amplifier transistors
B. To comply with FCC rules on spectral purity
C. Because power supplies cannot supply enough current at high SWR
D. To improve the impedance match to the feed line
~~

T7C06 (D)
What does an SWR reading of 4:1 indicate?
A. Loss of -4 dB
B. Good impedance match
C. Gain of +4 dB
D. Impedance mismatch
~~

T7C07 (C)
What happens to power lost in a feed line?
A. It increases the SWR
B. It comes back into your transmitter and could cause damage
C. It is converted into heat
D. It can cause distortion of your signal
~~

T7C08 (D)
What instrument other than an SWR meter could you use to determine if a feed line and antenna are properly matched?
A. Voltmeter
B. Ohmmeter
C. Iambic pentameter
D. Directional wattmeter
~~

T7C09 (A)
Which of the following is the most common cause for failure of coaxial cables?
A. Moisture contamination
B. Gamma rays
C. The velocity factor exceeds 1.0
D. Overloading
~~

T7C10 (D)
Why should the outer jacket of coaxial cable be resistant to ultraviolet light?
A. Ultraviolet resistant jackets prevent harmonic radiation
B. Ultraviolet light can increase losses in the cable�s jacket
C. Ultraviolet and RF signals can mix, causing interference
D. Ultraviolet light can damage the jacket and allow water to enter the cable
~~

T7C11 (C)
What is a disadvantage of air core coaxial cable when compared to foam or solid dielectric types?
A. It has more loss per foot
B. It cannot be used for VHF or UHF antennas
C. It requires special techniques to prevent water absorption
D. It cannot be used at below freezing temperatures
~~

T7C12 (B)
What does a dummy load consist of?
A. A high-gain amplifier and a TR switch
B. A non-inductive resistor and a heat sink
C. A low-voltage power supply and a DC relay
D. A 50 ohm reactance used to terminate a transmission line 
~~


T7D � Basic repair and testing: soldering; using basic test instruments; connecting a voltmeter, ammeter, or ohmmeter 

T7D01 (B)
Which instrument would you use to measure electric potential or electromotive force?
A. An ammeter
B. A voltmeter
C. A wavemeter
D. An ohmmeter
~~

T7D02 (B)
What is the correct way to connect a voltmeter to a circuit?
A. In series with the circuit
B. In parallel with the circuit
C. In quadrature with the circuit
D. In phase with the circuit
~~

T7D03 (A)
How is a simple ammeter connected to a circuit?
A. In series with the circuit
B. In parallel with the circuit
C. In quadrature with the circuit
D. In phase with the circuit
~~

T7D04 (D)
Which instrument is used to measure electric current?
A. An ohmmeter
B. A wavemeter
C. A voltmeter
D. An ammeter
~~

T7D05 (D)
What instrument is used to measure resistance?
A. An oscilloscope
B. A spectrum analyzer
C. A noise bridge
D. An ohmmeter
~~

T7D06 (C)
Which of the following might damage a multimeter?
A. Measuring a voltage too small for the chosen scale
B. Leaving the meter in the milliamps position overnight
C. Attempting to measure voltage when using the resistance setting
D. Not allowing it to warm up properly
~~

T7D07 (D)
Which of the following measurements are commonly made using a multimeter?
A. SWR and RF power
B. Signal strength and noise
C. Impedance and reactance
D. Voltage and resistance
~~

T7D08 (C)
Which of the following types of solder is best for radio and electronic use?
A. Acid-core solder
B. Silver solder
C. Rosin-core solder
D. Aluminum solder
~~

T7D09 (C)
What is the characteristic appearance of a cold solder joint?
A. Dark black spots
B. A bright or shiny surface
C. A grainy or dull surface
D. A greenish tint
~~

T7D10 (B)
What is probably happening when an ohmmeter, connected across an unpowered circuit, initially indicates a low resistance and then shows increasing resistance with time?
A. The ohmmeter is defective
B. The circuit contains a large capacitor
C. The circuit contains a large inductor
D. The circuit is a relaxation oscillator
~~

T7D11 (B)
Which of the following precautions should be taken when measuring circuit resistance with an ohmmeter?
A. Ensure that the applied voltages are correct
B. Ensure that the circuit is not powered
C. Ensure that the circuit is grounded
D. Ensure that the circuit is operating at the correct frequency
~~

T7D12 (B)
Which of the following precautions should be taken when measuring high voltages with a voltmeter?
A. Ensure that the voltmeter has very low impedance
B. Ensure that the voltmeter and leads are rated for use at the voltages to be measured
C. Ensure that the circuit is grounded through the voltmeter
D. Ensure that the voltmeter is set to the correct frequency
~~


SUBELEMENT T8 � Modulation modes: amateur satellite operation; operating activities; non-voice and digital communications � [4 Exam Questions - 4 Groups]


T8A � Modulation modes: bandwidth of various signals; choice of emission type

T8A01 (C)
Which of the following is a form of amplitude modulation?
A. Spread spectrum
B. Packet radio
C. Single sideband
D. Phase shift keying (PSK)
~~ 

T8A02 (A)
What type of modulation is most commonly used for VHF packet radio transmissions?
A. FM
B. SSB
C. AM
D. PSK
~~

T8A03 (C)
Which type of voice mode is most often used for long-distance (weak signal) contacts on the VHF and UHF bands?
A. FM
B. DRM
C. SSB
D. PM
~~

T8A04 (D)
Which type of modulation is most commonly used for VHF and UHF voice repeaters?
A. AM
B. SSB
C. PSK
D. FM
~~

T8A05 (C)
Which of the following types of emission has the narrowest bandwidth?
A. FM voice
B. SSB voice
C. CW
D. Slow-scan TV
~~

T8A06 (A)
Which sideband is normally used for 10 meter HF, VHF, and UHF single-sideband communications?
A. Upper sideband
B. Lower sideband
C. Suppressed sideband
D. Inverted sideband
~~

T8A07 (C)
What is an advantage of single sideband (SSB) over FM for voice transmissions?
A. SSB signals are easier to tune
B. SSB signals are less susceptible to interference
C. SSB signals have narrower bandwidth
D. All of these choices are correct
~~ 

T8A08 (B)
What is the approximate bandwidth of a single sideband (SSB) voice signal?
A. 1 kHz
B. 3 kHz
C. 6 kHz
D. 15 kHz
~~

T8A09 (C)
What is the approximate bandwidth of a VHF repeater FM phone signal?
A. Less than 500 Hz 
B. About 150 kHz
C. Between 10 and 15 kHz
D. Between 50 and 125 kHz
~~

T8A10 (B)
What is the typical bandwidth of analog fast-scan TV transmissions on the 70 centimeter band?
A. More than 10 MHz
B. About 6 MHz
C. About 3 MHz
D. About 1 MHz
~~

T8A11 (B)
What is the approximate maximum bandwidth required to transmit a CW signal?
A. 2.4 kHz
B. 150 Hz
C. 1000 Hz
D. 15 kHz
~~


T8B - Amateur satellite operation; Doppler shift; basic orbits; operating protocols; transmitter power considerations; telemetry and telecommand; satellite tracking 

T8B01 (C)
What telemetry information is typically transmitted by satellite beacons?
A. The signal strength of received signals
B. Time of day accurate to plus or minus 1/10 second
C. Health and status of the satellite
D. All of these choices are correct
~~

T8B02 (B)
What is the impact of using too much effective radiated power on a satellite uplink?
A. Possibility of commanding the satellite to an improper mode
B. Blocking access by other users
C. Overloading the satellite batteries
D. Possibility of rebooting the satellite control computer
~~

T8B03 (D)
Which of the following are provided by satellite tracking programs?
A. Maps showing the real-time position of the satellite track over the earth
B. The time, azimuth, and elevation of the start, maximum altitude, and end of a pass
C. The apparent frequency of the satellite transmission, including effects of Doppler shift
D. All of these choices are correct
~~

T8B04 (D)
What mode of transmission is used for satellite beacons?
A. RTTY
B. CW
C. Packet
D. All of these choices are correct
~~

T8B05 (D)
What is a satellite beacon?
A. The primary transmit antenna on the satellite
B. An indicator light that shows where to point your antenna
C. A reflective surface on the satellite
D. A transmission from a satellite that contains status information
~~

T8B06 (B)
Which of the following are inputs to a satellite tracking program?
A. The weight of the satellite
B. The Keplerian elements
C. The last observed time of zero Doppler shift
D. All of these choices are correct
~~

T8B07 (C)
With regard to satellite communications, what is Doppler shift?
A. A change in the satellite orbit
B. A mode where the satellite receives signals on one band and transmits on another
C. An observed change in signal frequency caused by relative motion between the satellite and the earth station
D. A special digital communications mode for some satellites
~~

T8B08 (B)
What is meant by the statement that a satellite is operating in mode U/V?
A. The satellite uplink is in the 15 meter band and the downlink is in the 10 meter band
B. The satellite uplink is in the 70 centimeter band and the downlink is in the 2 meter band
C. The satellite operates using ultraviolet frequencies
D. The satellite frequencies are usually variable
~~

T8B09 (B)
What causes spin fading of satellite signals?
A. Circular polarized noise interference radiated from the sun 
B. Rotation of the satellite and its antennas
C. Doppler shift of the received signal
D. Interfering signals within the satellite uplink band 
~~

T8B10 (C)
What do the initials LEO tell you about an amateur satellite?
A. The satellite battery is in Low Energy Operation mode
B. The satellite is performing a Lunar Ejection Orbit maneuver
C. The satellite is in a Low Earth Orbit
D. The satellite uses Light Emitting Optics
~~

T8B11 (A)
Who may receive telemetry from a space station?
A. Anyone who can receive the telemetry signal
B. A licensed radio amateur with a transmitter equipped for interrogating the satellite
C. A licensed radio amateur who has been certified by the protocol developer
D. A licensed radio amateur who has registered for an access code from AMSAT
~~

T8B12 (C)
Which of the following is a good way to judge whether your uplink power is neither too low nor too high?
A. Check your signal strength report in the telemetry data
B. Listen for distortion on your downlink signal
C. Your signal strength on the downlink should be about the same as the beacon
D. All of these choices are correct
~


T8C � Operating activities: radio direction finding; radio control; contests; linking over the internet; grid locators 

T8C01 (C)
Which of the following methods is used to locate sources of noise interference or jamming?
A. Echolocation
B. Doppler radar 
C. Radio direction finding
D. Phase locking
~~

T8C02 (B)
Which of these items would be useful for a hidden transmitter hunt?
A. Calibrated SWR meter
B. A directional antenna
C. A calibrated noise bridge
D. All of these choices are correct
~~

T8C03 (A)
What operating activity involves contacting as many stations as possible during a specified period?
A. Contesting
B. Net operations
C. Public service events
D. Simulated emergency exercises
~~

T8C04 (C)
Which of the following is good procedure when contacting another station in a radio contest?
A. Sign only the last two letters of your call if there are many other stations calling
B. Contact the station twice to be sure that you are in his log
C. Send only the minimum information needed for proper identification and the contest exchange
D. All of these choices are correct
~~

T8C05 (A)
What is a grid locator?
A. A letter-number designator assigned to a geographic location
B. A letter-number designator assigned to an azimuth and elevation
C. An instrument for neutralizing a final amplifier
D. An instrument for radio direction finding
~~

T8C06 (B)
How is access to some IRLP nodes accomplished?
A. By obtaining a password that is sent via voice to the node
B. By using DTMF signals
C. By entering the proper internet password
D. By using CTCSS tone codes
~~

T8C07 (D)
What is meant by Voice Over Internet Protocol (VoIP) as used in amateur radio?
A. A set of rules specifying how to identify your station when linked over the internet to another station
B. A set of guidelines for contacting DX stations during contests using internet access
C. A technique for measuring the modulation quality of a transmitter using remote sites monitored via the internet
D. A method of delivering voice communications over the internet using digital techniques
~~

T8C08 (A)
What is the Internet Radio Linking Project (IRLP)?
A. A technique to connect amateur radio systems, such as repeaters, via the internet using Voice Over Internet Protocol (VoIP)
B. A system for providing access to websites via amateur radio
C. A system for informing amateurs in real time of the frequency of active DX stations
D. A technique for measuring signal strength of an amateur transmitter via the internet
~~

T8C09 (D)
How might you obtain a list of active nodes that use VoIP?
A. By subscribing to an on line service
B. From on line repeater lists maintained by the local repeater frequency coordinator
C. From a repeater directory
D. All of these choices are correct
~~

T8C10 (D)
What must be done before you may use the Echolink system to communicate using a repeater?
A. You must complete the required Echolink training
B. You must have purchased a license to use the Echolink software
C. You must be sponsored by a current Echolink user
D. You must register your call sign and provide proof of license
~~

T8C11 (A)
What name is given to an amateur radio station that is used to connect other amateur stations to the internet?
A. A gateway
B. A repeater
C. A digipeater
D. A beacon
~~


T8D � Non-voice and digital communications: image signals; digital modes; CW; packet radio; PSK31; APRS; error detection and correction; NTSC; amateur radio networking; Digital Mobile/Migration Radio

T8D01 (D)
Which of the following is a digital communications mode?
A. Packet radio
B. IEEE 802.11
C. JT65
D. All of these choices are correct
~~

T8D02 (A)
What does the term �APRS� mean?
A. Automatic Packet Reporting System
B. Associated Public Radio Station
C. Auto Planning Radio Set-up
D. Advanced Polar Radio System
~~

T8D03 (D)
Which of the following devices is used to provide data to the transmitter when sending automatic position reports from a mobile amateur radio station?
A. The vehicle speedometer
B. A WWV receiver
C. A connection to a broadcast FM sub-carrier receiver
D. A Global Positioning System receiver
~~

T8D04 (C)
What type of transmission is indicated by the term "NTSC?"
A. A Normal Transmission mode in Static Circuit
B. A special mode for earth satellite uplink
C. An analog fast scan color TV signal
D. A frame compression scheme for TV signals
~~

T8D05 (A)
Which of the following is an application of APRS (Automatic Packet Reporting System)?
A. Providing real-time tactical digital communications in conjunction with a map showing the locations of stations
B. Showing automatically the number of packets transmitted via PACTOR during a specific time interval
C. Providing voice over internet connection between repeaters
D. Providing information on the number of stations signed into a repeater
~~

T8D06 (B)
What does the abbreviation "PSK" mean?
A. Pulse Shift Keying
B. Phase Shift Keying
C. Packet Short Keying
D. Phased Slide Keying
~~

T8D07 (A)
Which of the following best describes DMR (Digital Mobile Radio or Digital Migration Radio)?
A. A technique for time-multiplexing two digital voice signals on a single 12.5 kHz repeater channel
B. An automatic position tracking mode for FM mobiles communicating through repeaters
C. An automatic computer logging technique for hands-off logging when communicating while operating a vehicle
D. A digital technique for transmitting on two repeater inputs simultaneously for automatic error correction
~~

T8D08 (D)
Which of the following may be included in packet transmissions?
A. A check sum that permits error detection
B. A header that contains the call sign of the station to which the information is being sent
C. Automatic repeat request in case of error
D. All of these choices are correct 
~~

T8D09 (C)
What code is used when sending CW in the amateur bands?
A. Baudot
B. Hamming
C. International Morse
D. All of these choices are correct
~~

T8D10 (D)
Which of the following operating activities is supported by digital mode software in the WSJT suite?
A. Moonbounce or Earth-Moon-Earth
B. Weak-signal propagation beacons
C. Meteor scatter
D. All of these choices are correct
~~

T8D11 (C)
What is an ARQ transmission system?
A. A special transmission format limited to video signals
B. A system used to encrypt command signals to an amateur radio satellite
C. A digital scheme whereby the receiving station detects errors and sends a request to the sending station to retransmit the information 
D. A method of compressing the data in a message so more information can be sent in a shorter time 
~~

T8D12 (A)
Which of the following best describes Broadband-Hamnet(TM), also referred to as a high-speed multi-media network?
A. An amateur-radio-based data network using commercial Wi-Fi gear with modified firmware
B. A wide-bandwidth digital voice mode employing DRM protocols
C. A satellite communications network using modified commercial satellite TV hardware
D. An internet linking protocol used to network repeaters
~~

T8D13 (B)
What is FT8?
A. A wideband FM voice mode
B. A digital mode capable of operating in low signal-to-noise conditions that transmits on 15-second intervals
C. An eight channel multiplex mode for FM repeaters
D. A digital slow scan TV mode with forward error correction and automatic color compensation
~~

T8D14 (C)
What is an electronic keyer?
A. A device for switching antennas from transmit to receive
B. A device for voice activated switching from receive to transmit
C. A device that assists in manual sending of Morse code
D. An interlock to prevent unauthorized use of a radio 
~~


SUBELEMENT T9 � Antennas and feed lines - [2 Exam Questions - 2 Groups]


T9A � Antennas: vertical and horizontal polarization; concept of gain; common portable and mobile antennas; relationships between resonant length and frequency; concept of dipole antennas

T9A01 (C)
What is a beam antenna?
A. An antenna built from aluminum I-beams
B. An omnidirectional antenna invented by Clarence Beam
C. An antenna that concentrates signals in one direction
D. An antenna that reverses the phase of received signals
~~

T9A02 (A)
Which of the following describes a type of antenna loading?
A. Inserting an inductor in the radiating portion of the antenna to make it electrically longer
B. Inserting a resistor in the radiating portion of the antenna to make it resonant
C. Installing a spring in the base of a mobile vertical antenna to make it more flexible
D. Strengthening the radiating elements of a beam antenna to better resist wind damage
~~

T9A03 (B)
Which of the following describes a simple dipole oriented parallel to the Earth's surface?
A. A ground-wave antenna
B. A horizontally polarized antenna
C. A rhombic antenna
D. A vertically polarized antenna 
~~

T9A04 (A)
What is a disadvantage of the �rubber duck� antenna supplied with most handheld radio transceivers when compared to a full-sized quarter-wave antenna?
A. It does not transmit or receive as effectively
B. It transmits only circularly polarized signals
C. If the rubber end cap is lost, it will unravel very easily
D. All of these choices are correct
~~

T9A05 (C)
How would you change a dipole antenna to make it resonant on a higher frequency?
A. Lengthen it
B. Insert coils in series with radiating wires
C. Shorten it
D. Add capacitive loading to the ends of the radiating wires
~~

T9A06 (C)
What type of antennas are the quad, Yagi, and dish?
A. Non-resonant antennas
B. Log periodic antennas
C. Directional antennas
D. Isotropic antennas
~~

T9A07 (A)
What is a disadvantage of using a handheld VHF transceiver, with its integral antenna, inside a vehicle?
A. Signals might not propagate well due to the shielding effect of the vehicle
B. It might cause the transceiver to overheat
C. The SWR might decrease, decreasing the signal strength
D. All of these choices are correct
~~

T9A08 (C)
What is the approximate length, in inches, of a quarter-wavelength vertical antenna for 146 MHz?
A. 112
B. 50
C. 19
D. 12
~~

T9A09 (C)
What is the approximate length, in inches, of a half-wavelength 6 meter dipole antenna?
A. 6
B. 50
C. 112
D. 236
~~

T9A10 (C)
In which direction does a half-wave dipole antenna radiate the strongest signal?
A. Equally in all directions
B. Off the ends of the antenna
C. Broadside to the antenna
D. In the direction of the feed line
~~

T9A11 (C)
What is the gain of an antenna?
A. The additional power that is added to the transmitter power
B. The additional power that is lost in the antenna when transmitting on a higher frequency
C. The increase in signal strength in a specified direction compared to a reference antenna
D. The increase in impedance on receive or transmit compared to a reference antenna
~~

T9A12 (A)
What is an advantage of using a properly mounted 5/8 wavelength antenna for VHF or UHF mobile service?
A. It has a lower radiation angle and more gain than a 1/4 wavelength antenna
B. It has very high angle radiation for better communicating through a repeater
C. It eliminates distortion caused by reflected signals
D. It has 10 times the power gain of a 1/4 wavelength design 
~~


T9B � Feed lines: types, attenuation vs frequency, selecting; SWR concepts; Antenna tuners (couplers); RF Connectors: selecting, weather protection

T9B01 (B)
Why is it important to have low SWR when using coaxial cable feed line?
A. To reduce television interference 
B. To reduce signal loss
C. To prolong antenna life
D. All of these choices are correct
~~

T9B02 (B)
What is the impedance of most coaxial cables used in amateur radio installations?
A. 8 ohms
B. 50 ohms
C. 600 ohms
D. 12 ohms
~~

T9B03 (A)
Why is coaxial cable the most common feed line selected for amateur radio antenna systems?
A. It is easy to use and requires few special installation considerations
B. It has less loss than any other type of feed line
C. It can handle more power than any other type of feed line
D. It is less expensive than any other type of feed line
~~

T9B04 (A)
What is the major function of an antenna tuner (antenna coupler)?
A. It matches the antenna system impedance to the transceiver's output impedance
B. It helps a receiver automatically tune in weak stations
C. It allows an antenna to be used on both transmit and receive
D. It automatically selects the proper antenna for the frequency band being used
~~

T9B05 (D)
In general, what happens as the frequency of a signal passing through coaxial cable is increased?
A. The characteristic impedance decreases
B. The loss decreases
C. The characteristic impedance increases
D. The loss increases
~~

T9B06 (B)
Which of the following connectors is most suitable for frequencies above 400 MHz?
A. A UHF (PL-259/SO-239) connector
B. A Type N connector
C. An RS-213 connector
D. A DB-25 connector
~~

T9B07 (C)
Which of the following is true of PL-259 type coax connectors?
A. They are preferred for microwave operation
B. They are watertight
C. They are commonly used at HF frequencies
D. They are a bayonet type connector
~~

T9B08 (A)
Why should coax connectors exposed to the weather be sealed against water intrusion?
A. To prevent an increase in feed line loss
B. To prevent interference to telephones
C. To keep the jacket from becoming loose
D. All of these choices are correct
~~

T9B09 (B)
What can cause erratic changes in SWR readings?
A. The transmitter is being modulated
B. A loose connection in an antenna or a feed line
C. The transmitter is being over-modulated
D. Interference from other stations is distorting your signal
~~

T9B10 (C)
What is the electrical difference between RG-58 and RG-8 coaxial cable?
A. There is no significant difference between the two types
B. RG-58 cable has two shields
C. RG-8 cable has less loss at a given frequency
D. RG-58 cable can handle higher power levels
~~

T9B11 (C)
Which of the following types of feed line has the lowest loss at VHF and UHF?
A. 50-ohm flexible coax
B. Multi-conductor unbalanced cable
C. Air-insulated hard line
D. 75-ohm flexible coax
~~


SUBELEMENT T0 � Electrical safety: AC and DC power circuits; antenna installation; RF hazards � [3 Exam Questions - 3 Groups]


T0A � Power circuits and hazards: hazardous voltages; fuses and circuit breakers; grounding; lightning protection; battery safety; electrical code compliance

T0A01 (B)
Which of the following is a safety hazard of a 12-volt storage battery?
A. Touching both terminals with the hands can cause electrical shock
B. Shorting the terminals can cause burns, fire, or an explosion
C. RF emissions from the battery
D. All of these choices are correct
~~

T0A02 (D)
What health hazard is presented by electrical current flowing through the body?
A. It may cause injury by heating tissue
B. It may disrupt the electrical functions of cells
C. It may cause involuntary muscle contractions
D. All of these choices are correct
~~

T0A03 (C)
In the United States, what is connected to the green wire in a three-wire electrical AC plug?
A. Neutral
B. Hot
C. Equipment ground
D. The white wire
~~

T0A04 (B)
What is the purpose of a fuse in an electrical circuit?
A. To prevent power supply ripple from damaging a circuit
B. To interrupt power in case of overload
C. To limit current to prevent shocks
D. All of these choices are correct
~~

T0A05 (C)
Why is it unwise to install a 20-ampere fuse in the place of a 5-ampere fuse?
A. The larger fuse would be likely to blow because it is rated for higher current
B. The power supply ripple would greatly increase
C. Excessive current could cause a fire
D. All of these choices are correct
~~

T0A06 (D)
What is a good way to guard against electrical shock at your station?
A. Use three-wire cords and plugs for all AC powered equipment
B. Connect all AC powered station equipment to a common safety ground
C. Use a circuit protected by a ground-fault interrupter
D. All of these choices are correct
~~

T0A07 (D)
Which of these precautions should be taken when installing devices for lightning protection in a coaxial cable feed line?
A. Include a parallel bypass switch for each protector so that it can be switched out of the circuit when running high power
B. Include a series switch in the ground line of each protector to prevent RF overload from inadvertently damaging the protector
C. Keep the ground wires from each protector separate and connected to station ground
D. Mount all of the protectors on a metal plate that is in turn connected to an external ground rod
~~

T0A08 (A)
What safety equipment should always be included in home-built equipment that is powered from 120V AC power circuits?
A. A fuse or circuit breaker in series with the AC hot conductor
B. An AC voltmeter across the incoming power source
C. An inductor in parallel with the AC power source
D. A capacitor in series with the AC power source
~~

T0A09 (C)
What should be done to all external ground rods or earth connections?
A. Waterproof them with silicone caulk or electrical tape
B. Keep them as far apart as possible
C. Bond them together with heavy wire or conductive strap
D. Tune them for resonance on the lowest frequency of operation
~~

T0A10 (A)
What can happen if a lead-acid storage battery is charged or discharged too quickly?
A. The battery could overheat, give off flammable gas, or explode
B. The voltage can become reversed
C. The memory effect will reduce the capacity of the battery
D. All of these choices are correct
~~ 

T0A11 (D)
What kind of hazard might exist in a power supply when it is turned off and disconnected?
A. Static electricity could damage the grounding system
B. Circulating currents inside the transformer might cause damage
C. The fuse might blow if you remove the cover
D. You might receive an electric shock from the charge stored in large capacitors
~~


T0B � Antenna safety: tower safety and grounding; erecting an antenna support; safely installing an antenna

T0B01 (C)
When should members of a tower work team wear a hard hat and safety glasses?
A. At all times except when climbing the tower
B. At all times except when belted firmly to the tower
C. At all times when any work is being done on the tower
D. Only when the tower exceeds 30 feet in height
~~

T0B02 (C)
What is a good precaution to observe before climbing an antenna tower?
A. Make sure that you wear a grounded wrist strap
B. Remove all tower grounding connections
C. Put on a carefully inspected climbing harness (fall arrester) and safety glasses
D. All of the these choices are correct
~~

T0B03 (D)
Under what circumstances is it safe to climb a tower without a helper or observer?
A. When no electrical work is being performed
B. When no mechanical work is being performed
C. When the work being done is not more than 20 feet above the ground
D. Never
~~

T0B04 (C)
Which of the following is an important safety precaution to observe when putting up an antenna tower?
A. Wear a ground strap connected to your wrist at all times
B. Insulate the base of the tower to avoid lightning strikes
C. Look for and stay clear of any overhead electrical wires
D. All of these choices are correct
~~

T0B05 (C)
What is the purpose of a gin pole?
A. To temporarily replace guy wires
B. To be used in place of a safety harness
C. To lift tower sections or antennas
D. To provide a temporary ground
~~

T0B06 (D)
What is the minimum safe distance from a power line to allow when installing an antenna?
A. Half the width of your property
B. The height of the power line above ground
C. 1/2 wavelength at the operating frequency
D. Enough so that if the antenna falls unexpectedly, no part of it can come closer than 10 feet to the power wires
~~

T0B07 (C)
Which of the following is an important safety rule to remember when using a crank-up tower?
A. This type of tower must never be painted
B. This type of tower must never be grounded
C. This type of tower must not be climbed unless retracted or mechanical safety locking devices have been installed
D. All of these choices are correct
~~

T0B08 (C)
What is considered to be a proper grounding method for a tower?
A. A single four-foot ground rod, driven into the ground no more than 12 inches from the base
B. A ferrite-core RF choke connected between the tower and ground
C. Separate eight-foot long ground rods for each tower leg, bonded to the tower and each other
D. A connection between the tower base and a cold water pipe
~~

T0B09 (C)
Why should you avoid attaching an antenna to a utility pole?
A. The antenna will not work properly because of induced voltages
B. The utility company will charge you an extra monthly fee
C. The antenna could contact high-voltage power lines
D. All of these choices are correct
~~

T0B10 (C)
Which of the following is true when installing grounding conductors used for lightning protection?
A. Only non-insulated wire must be used
B. Wires must be carefully routed with precise right-angle bends
C. Sharp bends must be avoided
D. Common grounds must be avoided
~~

T0B11 (B)
Which of the following establishes grounding requirements for an amateur radio tower or antenna?
A. FCC Part 97 Rules
B. Local electrical codes
C. FAA tower lighting regulations
D. UL recommended practices
~~

T0B12 (C)
Which of the following is good practice when installing ground wires on a tower for lightning protection?
A. Put a loop in the ground connection to prevent water damage to the ground system
B. Make sure that all bends in the ground wires are clean, right-angle bends
C. Ensure that connections are short and direct
D. All of these choices are correct
~~

T0B13 (B)
What is the purpose of a safety wire through a turnbuckle used to tension guy lines?
A. Secure the guy if the turnbuckle breaks
B. Prevent loosening of the guy line from vibration
C. Prevent theft or vandalism
D. Deter unauthorized climbing of the tower
~~


T0C - RF hazards: radiation exposure; proximity to antennas; recognized safe power levels; exposure to others; radiation types; duty cycle 

T0C01 (D)
What type of radiation are VHF and UHF radio signals?
A. Gamma radiation
B. Ionizing radiation
C. Alpha radiation
D. Non-ionizing radiation
~~

T0C02 (B)
Which of the following frequencies has the lowest value for Maximum Permissible Exposure limit?
A. 3.5 MHz
B. 50 MHz
C. 440 MHz
D. 1296 MHz
~~

T0C03 (C)
What is the maximum power level that an amateur radio station may use at VHF frequencies before an RF exposure evaluation is required?
A. 1500 watts PEP transmitter output
B. 1 watt forward power
C. 50 watts PEP at the antenna
D. 50 watts PEP reflected power
~~

T0C04 (D)
What factors affect the RF exposure of people near an amateur station antenna?
A. Frequency and power level of the RF field
B. Distance from the antenna to a person
C. Radiation pattern of the antenna
D. All of these choices are correct
~~

T0C05 (D)
Why do exposure limits vary with frequency?
A. Lower frequency RF fields have more energy than higher frequency fields
B. Lower frequency RF fields do not penetrate the human body
C. Higher frequency RF fields are transient in nature
D. The human body absorbs more RF energy at some frequencies than at others
~~

T0C06 (D)
Which of the following is an acceptable method to determine that your station complies with FCC RF exposure regulations?
A. By calculation based on FCC OET Bulletin 65
B. By calculation based on computer modeling
C. By measurement of field strength using calibrated equipment
D. All of these choices are correct
~~

T0C07 (B)
What could happen if a person accidentally touched your antenna while you were transmitting?
A. Touching the antenna could cause television interference
B. They might receive a painful RF burn
C. They might develop radiation poisoning
D. All of these choices are correct
~~

T0C08 (A)
Which of the following actions might amateur operators take to prevent exposure to RF radiation in excess of FCC-supplied limits?
A. Relocate antennas
B. Relocate the transmitter
C. Increase the duty cycle
D. All of these choices are correct
~~

T0C09 (B)
How can you make sure your station stays in compliance with RF safety regulations?
A. By informing the FCC of any changes made in your station
B. By re-evaluating the station whenever an item of equipment is changed
C. By making sure your antennas have low SWR
D. All of these choices are correct
~~

T0C10 (A)
Why is duty cycle one of the factors used to determine safe RF radiation exposure levels?
A. It affects the average exposure of people to radiation
B. It affects the peak exposure of people to radiation
C. It takes into account the antenna feed line loss
D. It takes into account the thermal effects of the final amplifier
~~

T0C11 (C)
What is the definition of duty cycle during the averaging time for RF exposure? 
A. The difference between the lowest power output and the highest power output of a transmitter
B. The difference between the PEP and average power output of a transmitter
C. The percentage of time that a transmitter is transmitting
D. The percentage of time that a transmitter is not transmitting
~~

T0C12 (A)
How does RF radiation differ from ionizing radiation (radioactivity)?
A. RF radiation does not have sufficient energy to cause genetic damage
B. RF radiation can only be detected with an RF dosimeter
C. RF radiation is limited in range to a few feet
D. RF radiation is perfectly safe
~~

T0C13 (C)
If the averaging time for exposure is 6 minutes, how much power density is permitted if the signal is present for 3 minutes and absent for 3 minutes rather than being present for the entire 6 minutes? 
A. 3 times as much
B. 1/2 as much
C. 2 times as much
D. There is no adjustment allowed for shorter exposure times
~~~~
END 
`;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const AppState_1 = __webpack_require__(/*! ./app/AppState */ "./src/app/AppState.ts");
const App_1 = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
let appState = new AppState_1.AppState();
ReactDOM.render(React.createElement(App_1.App, { store: appState }), document.getElementById("example"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=qpot.js.map