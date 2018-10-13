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
        this.defaultProgress = { resumeAtIndex: undefined, currentQuestionIndex: [0, 0, 0], answeredCorrently: [], answeredIncorrectly: [], answeredIncorrectlyOnce: [] };
        this.questionPool = data_1.getData();
        this.numberOfQuestions = this.getTotalNumberOfQuestions();
        let progressFromStorage = this.getProgressFromLocalStorage();
        if (progressFromStorage && !progressFromStorage.answeredIncorrectlyOnce) {
            progressFromStorage.answeredIncorrectlyOnce = [];
        }
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
            else {
                this.progress.answeredIncorrectly.push(this.progress.currentQuestionIndex.slice());
                this.incorrect(this.progress.currentQuestionIndex);
            }
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
    incorrect(qi) {
        if (!this.progress.answeredIncorrectlyOnce.find(AppState.compare(qi))) {
            this.progress.answeredIncorrectlyOnce.push(qi);
        }
    }
    static compare(qi) {
        return (e) => {
            return (qi[0] === e[0] && qi[1] === e[1] && qi[2] === e[2]);
        };
    }
    dumpIncorrectOnceIds() {
        let incorrect = this.progress.answeredIncorrectlyOnce.map(e => {
            return this.questionPool.subelements[e[0]].groups[e[1]].questions[e[2]].tag;
        });
        let p = document.createElement('p');
        p.innerText = JSON.stringify(incorrect);
        document.body.appendChild(p);
    }
    nextQuestion() {
        if (this.correctAnswer === undefined) {
            this.progress.answeredIncorrectly.push(this.copy(this.progress.currentQuestionIndex));
            this.incorrect(this.progress.currentQuestionIndex);
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
                (store.progress.answeredCorrently.length * 100.0 / store.numberOfQuestions).toFixed(2),
                "% "),
            React.createElement("p", null,
                " INCORRECT: ",
                (store.progress.answeredIncorrectly.length * 100.0 / store.numberOfQuestions).toFixed(2),
                "% "),
            React.createElement("p", null,
                " INCORRECTONCE: ",
                (store.progress.answeredIncorrectlyOnce.length * 100.0 / store.numberOfQuestions).toFixed(2),
                "%"),
            React.createElement(Question_1.Question, { store: store, question: store.currentQuestion }),
            this.getCorrect(store),
            React.createElement(Button_1.Button, { text: "Next Question", action: () => { store.nextQuestion(); } }),
            React.createElement(Button_1.Button, { text: "Show Incorrect Once", action: () => store.dumpIncorrectOnceIds() }),
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

/***/ "./src/data/GeneralPool.ts":
/*!*********************************!*\
  !*** ./src/data/GeneralPool.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generalPool = `
SUBELEMENT G1 - COMMISSION'S RULES [5 Exam Questions - 5 Groups]


G1A - General Class control operator frequency privileges; primary and secondary allocations 

G1A01 (C) [97.301(d)]
On which of the following bands is a General Class license holder granted all amateur frequency privileges?
A. 60, 20, 17, and 12 meters
B. 160, 80, 40, and 10 meters
C. 160, 60, 30, 17, 12, and 10 meters
D. 160, 30, 17, 15, 12, and 10 meters
~~

G1A02 (B) [97.305]
On which of the following bands is phone operation prohibited?
A. 160 meters
B. 30 meters
C. 17 meters
D. 12 meters
~~

G1A03 (B) [97.305]
On which of the following bands is image transmission prohibited? 
A. 160 meters
B. 30 meters
C. 20 meters
D. 12 meters
~~

G1A04 (D) [97.303 (h)]
Which of the following amateur bands is restricted to communication on only specific channels, rather than frequency ranges?
A. 11 meters
B. 12 meters
C. 30 meters
D. 60 meters
~~

G1A05 (A) [97.301(d)]
Which of the following frequencies is in the General Class portion of the 40-meter band?
A. 7.250 MHz
B. 7.500 MHz
C. 40.200 MHz
D. 40.500 MHz
~~

G1A06 (C) [97.301(d)]  
Which of the following frequencies is within the General Class portion of the 75-meter phone band?
A. 1875 kHz
B. 3750 kHz
C. 3900 kHz
D. 4005 kHz
~~

G1A07 (C) [97.301(d)]
Which of the following frequencies is within the General Class portion of the 20-meter phone band?
A. 14005 kHz
B. 14105 kHz
C. 14305 kHz
D. 14405 kHz
~~

G1A08 (C) [97.301(d)]  
Which of the following frequencies is within the General Class portion of the 80-meter band?
A. 1855 kHz
B. 2560 kHz
C. 3560 kHz
D. 3650 kHz
~~

G1A09 (C) [97.301(d)]  
Which of the following frequencies is within the General Class portion of the 15-meter band?
A. 14250 kHz
B. 18155 kHz
C. 21300 kHz
D. 24900 kHz
~~

G1A10 (D) [97.301(d)]
Which of the following frequencies is available to a control operator holding a General Class license?
A. 28.020 MHz
B. 28.350 MHz
C. 28.550 MHz
D. All of these choices are correct
~~

G1A11 (B) [97.301]  
When General Class licensees are not permitted to use the entire voice portion of a particular band, which portion of the voice segment is generally available to them? 
A. The lower frequency end
B. The upper frequency end
C. The lower frequency end on frequencies below 7.3 MHz and the upper end on frequencies above 14.150 MHz
D. The upper frequency end on frequencies below 7.3 MHz and the lower end on frequencies above 14.150 MHz
~~

G1A12 (C) [97.303] 
Which of the following applies when the FCC rules designate the Amateur Service as a secondary user on a band?
A. Amateur stations must record the call sign of the primary service station before operating on a frequency assigned to that station 
B. Amateur stations are allowed to use the band only during emergencies
C. Amateur stations are allowed to use the band only if they do not cause harmful interference to primary users
D. Amateur stations may only operate during specific hours of the day, while primary users are permitted 24 hour use of the band
~~

G1A13 (D) [97.303(h)(2)(j)]
What is the appropriate action if, when operating on either the 30-meter or 60-meter bands, a station in the primary service interferes with your contact? 
A. Notify the FCCs regional Engineer in Charge of the interference 
B. Increase your transmitter's power to overcome the interference 
C. Attempt to contact the station and request that it stop the interference 
D. Move to a clear frequency or stop transmitting
~~

G1A14 (B) [97.301(d)]  
In what ITU region is operation in the 7.175 to 7.300 MHz band permitted for a control operator holding an FCC issued General Class license?
A. Region 1
B. Region 2
C. Region 3
D. All three regions
~~


G1B - Antenna structure limitations; good engineering and good amateur practice; beacon operation; prohibited transmissions; retransmitting radio signals 

G1B01 (C) [97.15(a)]
What is the maximum height above ground to which an antenna structure may be erected without requiring notification to the FAA and registration with the FCC, provided it is not at or near a public use airport?
A. 50 feet
B. 100 feet
C. 200 feet
D. 300 feet
~~

G1B02 (D) [97.203(b)]  
With which of the following conditions must beacon stations comply?
A. A beacon station may not use automatic control
B. The frequency must be coordinated with the National Beacon Organization
C. The frequency must be posted on the Internet or published in a national periodical
D. There must be no more than one beacon signal transmitting in the same band from the same station location
~~

G1B03 (A) [97.3(a)(9)]
Which of the following is a purpose of a beacon station as identified in the FCC rules?
A. Observation of propagation and reception
B. Automatic identification of repeaters
C. Transmission of bulletins of general interest to Amateur Radio licensees
D. Identifying net frequencies
~~

G1B04 (A) [97.113(b)]
Which of the following must be true before amateur stations may provide communications to broadcasters for dissemination to the public?
A. The communications must directly relate to the immediate safety of human life or protection of property and there must be no other means of communication reasonably available before or at the time of the event
B. The communications must be approved by a local emergency preparedness official and conducted on officially designated frequencies
C. The FCC must have declared a state of emergency
D. All of these choices are correct
~~

G1B05 (D) [97.113(c)]
When may music be transmitted by an amateur station?
A. At any time, as long as it produces no spurious emissions
B. When it is unintentionally transmitted from the background at the transmitter
C. When it is transmitted on frequencies above 1215 MHz
D. When it is an incidental part of a manned space craft retransmission
~~

G1B06 (B) [97.113(a)(4) and 97.207(f)]
When is an amateur station permitted to transmit secret codes?
A. During a declared communications emergency
B. To control a space station
C. Only when the information is of a routine, personal nature
D. Only with Special Temporary Authorization from the FCC
~~

G1B07 (B) [97.113(a)(4)]   
What are the restrictions on the use of abbreviations or procedural signals in the Amateur Service?
A. Only "Q" signals are permitted
B. They may be used if they do not obscure the meaning of a message
C. They are not permitted
D. Only "10 codes" are permitted
~~	

G1B08 (D) [97.101(a)] 
When choosing a transmitting frequency, what should you do to comply with good amateur practice?
A. Insure that the frequency and mode selected are within your license class privileges 
B. Follow generally accepted band plans agreed to by the Amateur Radio community
C. Monitor the frequency before transmitting
D. All of these choices are correct
~~

G1B09 (A) [97.113(a)(3)]
When may an amateur station transmit communications in which the licensee or control operator has a pecuniary (monetary) interest?
A. When other amateurs are being notified of the sale of apparatus normally used in an amateur station and such activity is not done on a regular basis
B. Only when there is no other means of communications readily available
C. When other amateurs are being notified of the sale of any item with a monetary value less than $200 and such activity is not done on a regular basis
D. Never
~~

G1B10 (C) [97.203(c)]
What is the power limit for beacon stations?
A. 10 watts PEP output
B. 20 watts PEP output
C. 100 watts PEP output
D. 200 watts PEP output
~~

G1B11 (C) [97.101(a)]
How does the FCC require an amateur station to be operated in all respects not specifically covered by the Part 97 rules?
A. In conformance with the rules of the IARU
B. In conformance with Amateur Radio custom
C. In conformance with good engineering and good amateur practice
D. All of these choices are correct 
~~

G1B12 (A) [97.101(a)]
Who or what determines "good engineering and good amateur practice" as applied to the operation of an amateur station in all respects not covered by the Part 97 rules?
A. The FCC
B. The Control Operator
C. The IEEE
D. The ITU
~~


G1C - Transmitter power regulations; data emission standards

G1C01 (A) [97.313(c)(1)]
What is the maximum transmitting power an amateur station may use on 10.140 MHz?
A. 200 watts PEP output
B. 1000 watts PEP output
C. 1500 watts PEP output
D. 2000 watts PEP output
~~

G1C02 (C) [97.313(a),(b)] 
What is the maximum transmitting power an amateur station may use on the 12-meter band?
A. 50 watts PEP output
B. 200 watts PEP output
C. 1500 watts PEP output
D. An effective radiated power equivalent to 100 watts from a half-wave dipole
~~

G1C03 (A) [97.303(h)(1)] 
What is the maximum bandwidth permitted by FCC rules for Amateur Radio stations transmitting on USB frequencies in the 60-meter band?
A. 2.8 kHz
B. 5.6 kHz
C. 1.8 kHz
D. 3 kHz 
~~

G1C04 (A) [97.313(a)] 
Which of the following limitations apply to transmitter power on every amateur band?
A. Only the minimum power necessary to carry out the desired communications should be used
B. Power must be limited to 200 watts when transmitting between 14.100 MHz and 14.150 MHz
C. Power should be limited as necessary to avoid interference to another radio service on the frequency
D. Effective radiated power cannot exceed 1500 watts
~~

G1C05 (C) [97.313(c)(2)]  
Which of the following is a limitation on transmitter power on the 28 MHz band for a General Class control operator?
A. 100 watts PEP output
B. 1000 watts PEP output
C. 1500 watts PEP output
D. 2000 watts PEP output
~~

G1C06 (D) [97.313]
Which of the following is a limitation on transmitter power on the 1.8 MHz band?
A. 200 watts PEP output
B. 1000 watts PEP output
C. 1200 watts PEP output
D. 1500 watts PEP output
~~

G1C07 (D) [97.305(c), 97.307(f)(3)] 
What is the maximum symbol rate permitted for RTTY or data emission transmission on the 20-meter band?
A. 56 kilobaud
B. 19.6 kilobaud
C. 1200 baud
D. 300 baud
~~

G1C08 (D) [97.307(f)(3)] 
What is the maximum symbol rate permitted for RTTY or data emission transmitted at frequencies below 28 MHz? 
A. 56 kilobaud 
B. 19.6 kilobaud 
C. 1200 baud 
D. 300 baud 
~~

G1C09 (A) [97.305(c) and 97.307(f)(5)] 
What is the maximum symbol rate permitted for RTTY or data emission transmitted on the 1.25-meter and 70-centimeter bands?
A. 56 kilobaud 
B. 19.6 kilobaud 
C. 1200 baud 
D. 300 baud 
~~	

G1C10 (C) [97.305(c) and 97.307(f)(4)]
What is the maximum symbol rate permitted for RTTY or data emission transmissions on the 10-meter band?
A. 56 kilobaud
B. 19.6 kilobaud
C. 1200 baud
D. 300 baud
~~

G1C11 (B) [97.305(c) and 97.307(f)(5)]
What is the maximum symbol rate permitted for RTTY or data emission transmissions on the 2-meter band?
A. 56 kilobaud
B. 19.6 kilobaud
C. 1200 baud
D. 300 baud
~~


G1D - Volunteer Examiners and Volunteer Examiner Coordinators; temporary identification 

G1D01 (A) [97.501, 97.505(a)]  
Who may receive credit for the elements represented by an expired amateur radio license?
A. Any person who can demonstrate that they once held an FCC issued General, Advanced, or Amateur Extra class license that was not revoked by the FCC 
B. Anyone who held an FCC issued amateur radio license that has been expired for not less than 5 years and not more than 15 years
C. Any person who previously held an amateur license issued by another country, but only if that country has a current reciprocal licensing agreement with the FCC
D. Only persons who once held an FCC issued Novice, Technician, or Technician Plus license
~~

G1D02 (C) [97.509(b)(3)(i)]
What license examinations may you administer when you are an accredited VE holding a General Class operator license?
A. General and Technician
B. General only
C. Technician only
D. Extra, General and Technician
~~

G1D03 (C) [97.9(b)] 
On which of the following band segments may you operate if you are a Technician Class operator and have a CSCE for General Class privileges?
A. Only the Technician band segments until your upgrade is posted in the FCC database
B. Only on the Technician band segments until your license arrives in the mail
C. On any General or Technician Class band segment
D. On any General or Technician Class band segment except 30-meters and 60-meters
~~

G1D04 (A) [97.509(3)(i)(c)] 
Which of the following is a requirement for administering a Technician Class license examination?
A. At least three General Class or higher VEs must observe the examination  
B. At least two General Class or higher VEs must be present 
C. At least two General Class or higher VEs must be present, but only one need be Extra Class 
D. At least three VEs of Technician Class or higher must observe the examination  
~~

G1D05 (D) [97.509(b)(3)(i)] 
Which of the following must a person have before they can be an administering VE for a Technician Class license examination?
A. Notification to the FCC that you want to give an examination
B. Receipt of a CSCE for General Class
C. Possession of a properly obtained telegraphy license
D. An FCC General Class or higher license and VEC accreditation
~~

G1D06 (A) [97.119(f)(2)]
When must you add the special identifier "AG" after your call sign if you are a Technician Class licensee and have a CSCE for General Class operator privileges, but the FCC has not yet posted your upgrade on its website ?
A. Whenever you operate using General Class frequency privileges 
B. Whenever you operate on any amateur frequency
C. Whenever you operate using Technician frequency privileges 
D. A special identifier is not required as long as your General Class license application has been filed with the FCC
~~

G1D07 (C) [97.509(b)(1)] 
Volunteer Examiners are accredited by what organization?
A. The Federal Communications Commission
B. The Universal Licensing System
C. A Volunteer Examiner Coordinator
D. The Wireless Telecommunications Bureau
~~

G1D08 (B) [97.509(b)(3)] 
Which of the following criteria must be met for a non-U.S. citizen to be an accredited Volunteer Examiner?
A. The person must be a resident of the U.S. for a minimum of 5 years
B. The person must hold an FCC granted Amateur Radio license of General Class or above
C. The person’s home citizenship must be in ITU region 2
D. None of these choices is correct; a non-U.S. citizen cannot be a Volunteer Examiner
~~

G1D09 (C) [97.9(b)]
How long is a Certificate of Successful Completion of Examination (CSCE) valid for exam element credit?
A. 30 days
B. 180 days
C. 365 days
D. For as long as your current license is valid 
~~

G1D10 (B) [97.509(b)(2)]
What is the minimum age that one must be to qualify as an accredited Volunteer Examiner?
A. 12 years
B. 18 years
C. 21 years 
D. There is no age limit
~~

G1D11 (D)  
If a person has an expired FCC issued amateur radio license of General Class or higher, what is required before they can receive a new license? 
A. They must have a letter from the FCC showing they once held an amateur or commercial license
B. There are no requirements other than being able to show a copy of the expired license
C. The applicant must be able to produce a copy of a page from a call book published in the USA showing his or her name and address
D. The applicant must pass the current element 2 exam 
~~


G1E – Control categories; repeater regulations; harmful interference; third party rules; ITU regions; automatically controlled digital station

G1E01 (A) [97.115(b)(2)]  
Which of the following would disqualify a third party from participating in stating a message over an amateur station?
A. The third party’s amateur license has been revoked and not reinstated 
B. The third party is not a U.S. citizen
C. The third party is a licensed amateur
D. The third party is speaking in a language other than English
~~

G1E02 (D) [97.205(b)]
When may a 10-meter repeater retransmit the 2-meter signal from a station having a Technician Class control operator?
A. Under no circumstances
B. Only if the station on 10-meters is operating under a Special Temporary Authorization allowing such retransmission
C. Only during an FCC declared general state of communications emergency
D. Only if the 10-meter repeater control operator holds at least a General Class license
~~

G1E03 (A) [97.221] 
What is required to conduct communications with a digital station operating under automatic control outside the automatic control band segments?
A. The station initiating the contact must be under local or remote control
B. The interrogating transmission must be made by another automatically controlled station
C. No third party traffic maybe be transmitted 
D. The control operator of the interrogating station must hold an Extra Class license  
~~

G1E04 (D) [97.13(b), 97.303, 97.311(b)]
Which of the following conditions require a licensed Amateur Radio operator to take specific steps to avoid harmful interference to other users or facilities?
A. When operating within one mile of an FCC Monitoring Station
B. When using a band where the Amateur Service is secondary
C. When a station is transmitting spread spectrum emissions
D. All of these choices are correct
~~

G1E05 (C) [97.115(a)(2),97.117] 
What types of messages for a third party in another country may be transmitted by an amateur station?
A. Any message, as long as the amateur operator is not paid
B. Only messages for other licensed amateurs
C. Only messages relating to Amateur Radio or remarks of a personal character, or messages relating to emergencies or disaster relief
D. Any messages, as long as the text of the message is recorded in the station log
~~

G1E06 (A) [97.205(c)]
Which of the following applies in the event of interference between a coordinated repeater and an uncoordinated repeater?
A. The licensee of the uncoordinated repeater has primary responsibility to resolve the interference
B. The licensee of the coordinated repeater has primary responsibility to resolve the interference
C. Both repeater licensees share equal responsibility to resolve the interference
D. The frequency coordinator bears primary responsibility to resolve the interference
~~

G1E07 (C) [97.115(a)(2)] 
With which foreign countries is third party traffic prohibited, except for messages directly involving emergencies or disaster relief communications?
A. Countries in ITU Region 2
B. Countries in ITU Region 1
C. Every foreign country, unless there is a third party agreement in effect with that country
D. Any country which is not a member of the International Amateur Radio Union (IARU)
~~

G1E08 (B) [97.115(a)(b)]
Which of the following is a requirement for a non-licensed person to communicate with a foreign Amateur Radio station from a station with an FCC-granted license at which an FCC licensed control operator is present?
A. Information must be exchanged in English
B. The foreign amateur station must be in a country with which the United States has a third party agreement
C. The control operator must have at least a General Class license
D. All of these choices are correct
~~

G1E09 (C) [97.119(b)(2)] 
What language must be used when identifying your station if you are using a language other than English in making a contact using phone emission?
A. The language being used for the contact
B. Any language recognized by the United Nations
C. English only
D. English, Spanish, French, or German
~~

G1E11 (C) [97.221] 
Which of the following is the FCC term for an unattended digital station that transfers messages to and from the Internet?
A. Locally controlled station
B. Robotically controlled station
C. Automatically controlled digital station
D. Fail-safe digital station
~~

G1E12 (A) [97.115] 
Under what circumstances are messages that are sent via digital modes exempt from Part 97 third party rules that apply to other modes of communication?
A. Under no circumstances
B. When messages are encrypted
C. When messages are not encrypted
D. When under automatic control
~~

G1E13 (D) [97.221, 97.305]   
On what bands may automatically controlled stations transmitting RTTY or data emissions communicate with other automatically controlled digital stations?
A. On any band segment where digital operation is permitted
B. Anywhere in the non-phone segments of the 10-meter or shorter wavelength bands
C. Only in the non-phone Extra Class segments of the bands
D. Anywhere in the 1.25-meter or shorter wavelength bands, and in specified segments of the 80-meter through 2-meter bands 
~~


SUBELEMENT G2 - OPERATING PROCEDURES [5 Exam Questions - 5 Groups]


G2A - Phone operating procedures; USB/LSB conventions; procedural signals; breaking into a contact; VOX operation

G2A01 (A) 
Which sideband is most commonly used for voice communications on frequencies of 14 MHz or higher?
A. Upper sideband
B. Lower sideband
C. Vestigial sideband
D. Double sideband
~~

G2A02 (B) 
Which of the following modes is most commonly used for voice communications on the 160-meter, 75-meter, and 40-meter bands?
A. Upper sideband
B. Lower sideband
C. Vestigial sideband
D. Double sideband
~~

G2A03 (A) 
Which of the following is most commonly used for SSB voice communications in the VHF and UHF bands?
A. Upper sideband
B. Lower sideband
C. Vestigial sideband
D. Double sideband
~~

G2A04 (A) 
Which mode is most commonly used for voice communications on the 17-meter and 12-meter bands?
A. Upper sideband 
B. Lower sideband
C. Vestigial sideband
D. Double sideband
~~

G2A05 (C) 
Which mode of voice communication is most commonly used on the HF amateur bands? 
A. Frequency modulation 
B. Double sideband 
C. Single sideband 
D. Phase modulation 
~~

G2A06 (B) 
Which of the following is an advantage when using single sideband as compared to other analog voice modes on the HF amateur bands?
A. Very high fidelity voice modulation 
B. Less bandwidth used and greater power efficiency 
C. Ease of tuning on receive and immunity to impulse noise
D. Less subject to interference from atmospheric static crashes 
~~

G2A07 (B) 
Which of the following statements is true of the single sideband voice mode? 
A. Only one sideband and the carrier are transmitted; the other sideband is suppressed
B. Only one sideband is transmitted; the other sideband and carrier are suppressed 
C. SSB is the only voice mode that is authorized on the 20-meter, 15-meter, and 10-meter amateur bands
D. SSB is the only voice mode that is authorized on the 160-meter, 75-meter and 40-meter amateur bands 
~~

G2A08 (B)  
Which of the following is a recommended way to break into a contact when using phone?
A. Say "QRZ" several times followed by your call sign
B. Say your call sign during a break between transmissions by the other stations
C. Say "Break Break Break" and wait for a response 
D. Say "CQ" followed by the call sign of either station
~~

G2A09 (D) 
Why do most amateur stations use lower sideband on the 160-meter, 75-meter and 40-meter bands?
A. Lower sideband is more efficient than upper sideband at these frequencies
B. Lower sideband is the only sideband legal on these frequency bands
C. Because it is fully compatible with an AM detector
D. Current amateur practice is to use lower sideband on these frequency bands
~~

G2A10 (B) 
Which of the following statements is true of voice VOX operation versus PTT operation?
A. The received signal is more natural sounding
B. It allows "hands free" operation
C. It occupies less bandwidth
D. It provides more power output
~~

G2A11 (C) 
What does the expression "CQ DX" usually indicate?
A. A general call for any station
B. The caller is listening for a station in Germany 
C. The caller is looking for any station outside their own country
D. A distress call
~~


G2B - Operating courtesy; band plans; emergencies, including drills and emergency communications

G2B01 (C) 
Which of the following is true concerning access to frequencies in non-emergency situations?
A. Nets always have priority
B. QSOs in progress always have priority
C. Except during FCC declared emergencies, no one has priority access to frequencies 
D. Contest operations must always yield to non-contest use of frequencies
~~

G2B02 (B) 
What is the first thing you should do if you are communicating with another amateur station and hear a station in distress break in?
A. Continue your communication because you were on the frequency first
B. Acknowledge the station in distress and determine what assistance may be needed
C. Change to a different frequency
D. Immediately cease all transmissions
~~

G2B03 (C) 
If propagation changes during your contact and you notice increasing interference from other activity on the same frequency, what should you do?
A. Tell the interfering stations to change frequency 
B. Report the interference to your local Amateur Auxiliary Coordinator 
C. As a common courtesy, move your contact to another frequency 
D. Increase power to overcome interference
~~

G2B04 (B) 
When selecting a CW transmitting frequency, what minimum separation should be used to minimize interference to stations on adjacent frequencies?
A. 5 to 50 Hz 
B. 150 to 500 Hz 
C. 1 to 3 kHz 
D. 3 to 6 kHz 
~~

G2B05 (B) 
What is the customary minimum frequency separation between SSB signals under normal conditions?
A. Between 150 and 500 Hz 
B. Approximately 3 kHz 
C. Approximately 6 kHz 
D. Approximately 10 kHz 
~~

G2B06 (A) 
What is a practical way to avoid harmful interference on an apparently clear frequency before calling CQ on CW or phone?
A. Send "QRL?" on CW, followed by your call sign; or, if using phone, ask if the frequency is in use, followed by your call sign
B. Listen for 2 minutes before calling CQ 
C. Send the letter "V" in Morse code several times and listen for a response or say "test" several times and listen for a response
D. Send "QSY" on CW or if using phone, announce "the frequency is in use", then give your call and listen for a response
~~

G2B07 (C) 
Which of the following complies with good amateur practice when choosing a frequency on which to initiate a call?
A. Check to see if the channel is assigned to another station
B. Identify your station by transmitting your call sign at least 3 times
C. Follow the voluntary band plan for the operating mode you intend to use
D. All of these choices are correct
~~

G2B08 (A) 
What is the "DX window" in a voluntary band plan?
A. A portion of the band that should not be used for contacts between stations within the 48 contiguous United States 
B. An FCC rule that prohibits contacts between stations within the United States and possessions in that portion of the band 
C. An FCC rule that allows only digital contacts in that portion of the band 
D. A portion of the band that has been voluntarily set aside for digital contacts only 
~~

G2B09 (A) [97.407(a)] 
Who may be the control operator of an amateur station transmitting in RACES to assist relief operations during a disaster?
A. Only a person holding an FCC issued amateur operator license
B. Only a RACES net control operator
C. A person holding an FCC issued amateur operator license or an appropriate government official
D. Any control operator when normal communication systems are operational
~~

G2B10 (D) [97.407(b)] 
When may the FCC restrict normal frequency operations of amateur stations participating in RACES?
A. When they declare a temporary state of communication emergency
B. When they seize your equipment for use in disaster communications
C. Only when all amateur stations are instructed to stop transmitting
D. When the President’s War Emergency Powers have been invoked
~~

G2B11 (A) [97.405] 
What frequency should be used to send a distress call?
A. Whichever frequency has the best chance of communicating the distress message
B. Only frequencies authorized for RACES or ARES stations
C. Only frequencies that are within your operating privileges
D. Only frequencies used by police, fire or emergency medical services
~~

G2B12 (C) [97.405(b)] 
When is an amateur station allowed to use any means at its disposal to assist another station in distress?
A. Only when transmitting in RACES 
B. At any time when transmitting in an organized net
C. At any time during an actual emergency
D. Only on authorized HF frequencies
~~


G2C - CW operating procedures and procedural signals; Q signals and common abbreviations: full break in

G2C01 (D) 
Which of the following describes full break-in telegraphy (QSK)?
A. Breaking stations send the Morse code prosign BK
B. Automatic keyers are used to send Morse code instead of hand keys
C. An operator must activate a manual send/receive switch before and after every transmission
D. Transmitting stations can receive between code characters and elements
~~

G2C02 (A) 
What should you do if a CW station sends "QRS"?
A. Send slower
B. Change frequency
C. Increase your power
D. Repeat everything twice
~~

G2C03 (C) 
What does it mean when a CW operator sends "KN" at the end of a transmission?
A. Listening for novice stations
B. Operating full break-in
C. Listening only for a specific station or stations
D. Closing station now
~~

G2C04 (D) 
What does the Q signal "QRL?" mean?
A. "Will you keep the frequency clear?" 
B. "Are you operating full break-in" or "Can you operate full break-in?"
C. "Are you listening only for a specific station?" 
D. "Are you busy?", or "Is this frequency in use?"
~~

G2C05 (B) 
What is the best speed to use when answering a CQ in Morse code?
A. The fastest speed at which you are comfortable copying
B. The speed at which the CQ was sent
C. A slow speed until contact is established
D. At the standard calling speed of 5 wpm
~~

G2C06 (D) 
What does the term "zero beat" mean in CW operation?
A. Matching the speed of the transmitting station
B. Operating split to avoid interference on frequency
C. Sending without error
D. Matching your transmit frequency to the frequency of a received signal
~~

G2C07 (A) 
When sending CW, what does a "C" mean when added to the RST report?
A. Chirpy or unstable signal
B. Report was read from an S meter rather than estimated
C. 100 percent copy
D. Key clicks
~~

G2C08 (C) 
What prosign is sent to indicate the end of a formal message when using CW? 
A. SK 
B. BK 
C. AR
D. KN
~~

G2C09 (C) 
What does the Q signal "QSL" mean?
A. Send slower
B. We have already confirmed by card
C. I acknowledge receipt
D. We have worked before
~~

G2C10 (B) 
What does the Q signal "QRN" mean?
A. Send more slowly
B. I am troubled by static
C. Zero beat my signal
D. Stop sending
~~

G2C11 (D) 
What does the Q signal "QRV" mean?
A. You are sending too fast
B. There is interference on the frequency
C. I am quitting for the day
D. I am ready to receive messages
~~


G2D - Amateur Auxiliary; minimizing interference; HF operations

G2D01 (A) 
What is the Amateur Auxiliary to the FCC?
A. Amateur volunteers who are formally enlisted to monitor the airwaves for rules violations 
B. Amateur volunteers who conduct amateur licensing examinations 
C. Amateur volunteers who conduct frequency coordination for amateur VHF repeaters 
D. Amateur volunteers who use their station equipment to help civil defense organizations in times of emergency 
~~

G2D02 (B) 
Which of the following are objectives of the Amateur Auxiliary?
A. To conduct efficient and orderly amateur licensing examinations 
B. To encourage self-regulation and compliance with the rules by radio amateur operators 
C. To coordinate repeaters for efficient and orderly spectrum usage 
D. To provide emergency and public safety communications 
~~

G2D03 (B) 
What skills learned during hidden transmitter hunts are of help to the Amateur Auxiliary? 
A. Identification of out of band operation 
B. Direction finding used to locate stations violating FCC Rules
C. Identification of different call signs 
D. Hunters have an opportunity to transmit on non-amateur frequencies 
~~

G2D04 (B)  
Which of the following describes an azimuthal projection map?
A. A map that shows accurate land masses
B. A map that shows true bearings and distances from a particular location 
C. A map that shows the angle at which an amateur satellite crosses the equator 
D. A map that shows the number of degrees longitude that an amateur satellite appears to move westward at the equator with each orbit 
~~

G2D05 (B) [97.111(a)(1)] 
When is it permissible to communicate with amateur stations in countries outside the areas administered by the Federal Communications Commission?
A. Only when the foreign country has a formal third party agreement filed with the FCC
B. When the contact is with amateurs in any country except those whose administrations have notified the ITU that they object to such communications
C. When the contact is with amateurs in any country as long as the communication is conducted in English
D. Only when the foreign country is a member of the International Amateur Radio Union
~~

G2D06 (C)
How is a directional antenna pointed when making a "long-path" contact with another station?
A. Toward the rising Sun 
B. Along the gray line 
C. 180 degrees from its short-path heading
D. Toward the north
~~
G2D07 (A) [97.303(i)] 
Which of the following is required by the FCC rules when operating in the 60-meter band?
A. If you are using other than a dipole antenna, you must keep a record of the gain of your antenna
B. You must keep a record of the date, time, frequency, power level and stations worked 
C. You must keep a record of all third party traffic
D. You must keep a record of the manufacturer of your equipment and the antenna used
~~

G2D08 (D) 
What is a reason why many amateurs keep a station log?
A. The ITU requires a log of all international contacts
B. The ITU requires a log of all international third party traffic
C. The log provides evidence of operation needed to renew a license without retest 
D. To help with a reply if the FCC requests information
~~

G2D09 (D)
What information is traditionally contained in a station log?
A. Date and time of contact
B. Band and/or frequency of the contact 
C. Call sign of station contacted and the signal report given 
D. All of these choices are correct
~~

G2D10 (B) 
What is QRP operation?
A. Remote piloted model control
B. Low power transmit operation
C. Transmission using Quick Response Protocol
D. Traffic relay procedure net operation
~~

G2D11 (C) 
Which HF antenna would be the best to use for minimizing interference?
A. A quarter-wave vertical antenna
B. An isotropic antenna 
C. A directional antenna
D. An omnidirectional antenna
~~


G2E - Digital operating: procedures, procedural signals and common abbreviations

G2E01 (D) 
Which mode is normally used when sending an RTTY signal via AFSK with an SSB transmitter?
A. USB
B. DSB
C. CW
D. LSB
~~

G2E02 (B)  
How can a PACTOR modem or controller be used to determine if the channel is in use by other PACTOR stations? 
A. Unplug the data connector temporarily and see if the channel-busy indication is turned off 
B. Put the modem or controller in a mode which allows monitoring communications without a connection 
C. Transmit UI packets several times and wait to see if there is a response from another PACTOR station 
D. Send the message: "Is this frequency in use?" 
~~

G2E03 (D)  
What symptoms may result from other signals interfering with a PACTOR or WINMOR transmission?
A. Frequent retries or timeouts
B. Long pauses in message transmission
C. Failure to establish a connection between stations
D. All of these choices are correct 
~~

G2E04 (B) 
What segment of the 20-meter band is most often used for digital transmissions?
A. 14.000 - 14.050 MHz
B. 14.070 - 14.100 MHz
C. 14.150 - 14.225 MHz
D. 14.275 - 14.350 MHz
~~

G2E05 (B)  
What is the standard sideband used to generate a JT65 or JT9 digital signal when using AFSK in any amateur band?
A. LSB
B. USB
C. DSB
D. SSB
~~

G2E06 (B) 
What is the most common frequency shift for RTTY emissions in the amateur HF bands?
A. 85 Hz
B. 170 Hz
C. 425 Hz
D. 850 Hz
~~

G2E07 (A)  
What segment of the 80-meter band is most commonly used for digital transmissions?
A. 3570 – 3600 kHz
B. 3500 – 3525 kHz
C. 3700 – 3750 kHz
D. 3775 – 3825 kHz
~~

G2E08 (D) 
In what segment of the 20-meter band are most PSK31 operations commonly found?
A. At the bottom of the slow-scan TV segment, near 14.230 MHz
B. At the top of the SSB phone segment, near 14.325 MHz
C. In the middle of the CW segment, near 14.100 MHz
D. Below the RTTY segment, near 14.070 MHz
~~

G2E09 (C) 
How do you join a contact between two stations using the PACTOR protocol? 
A. Send broadcast packets containing your call sign while in MONITOR mode 
B. Transmit a steady carrier until the PACTOR protocol times out and disconnects 
C. Joining an existing contact is not possible, PACTOR connections are limited to two stations 
D. Send a NAK response continuously so that the sending station has to pause
~~

G2E10 (D)   
Which of the following is a way to establish contact with a digital messaging system gateway station?
A. Send an email to the system control operator 
B. Send QRL in Morse code 
C. Respond when the station broadcasts its SSID 
D. Transmit a connect message on the station’s published frequency 
~~

G2E11 (D) 
What is indicated on a waterfall display by one or more vertical lines adjacent to a PSK31 signal?
A. Long Path propagation
B. Backscatter propagation
C. Insufficient modulation
D. Overmodulation
~~

G2E12 (C) 
Which of the following describes a waterfall display?
A. Frequency is horizontal, signal strength is vertical, time is intensity
B. Frequency is vertical, signal strength is intensity, time is horizontal
C. Frequency is horizontal, signal strength is intensity, time is vertical
D. Frequency is vertical, signal strength is horizontal, time is intensity
~~

G2E13 (A) 
Which communication system sometimes uses the Internet to transfer messages?
A. Winlink
B. RTTY
C. ARES
D. Skywarn
~~

G2E14 (D) 
What could be wrong if you cannot decode an RTTY or other FSK signal even 
though it is apparently tuned in properly? 
A. The mark and space frequencies may be reversed 
B. You may have selected the wrong baud rate 
C. You may be listening on the wrong sideband 
D. All of these choices are correct 
~~


SUBELEMENT G3 - RADIO WAVE PROPAGATION [3 Exam Questions - 3 Groups] 


G3A - Sunspots and solar radiation; ionospheric disturbances; propagation forecasting and indices 

G3A01 (A) 
What is the significance of the sunspot number with regard to HF propagation?
A.  Higher sunspot numbers generally indicate a greater probability of good propagation at higher frequencies
B.  Lower sunspot numbers generally indicate greater probability of sporadic E propagation
C.  A zero sunspot number indicate radio propagation is not possible on any band
D.  All of these choices are correct.
~~

G3A02 (B) 
What effect does a Sudden Ionospheric Disturbance have on the daytime ionospheric propagation of HF radio waves?
A. It enhances propagation on all HF frequencies
B. It disrupts signals on lower frequencies more than those on higher frequencies 
C. It disrupts communications via satellite more than direct communications
D. None, because only areas on the night side of the Earth are affected
~~

G3A03 (C)  
Approximately how long does it take the increased ultraviolet and X-ray radiation from solar flares to affect radio propagation on the Earth?
A. 28 days 
B. 1 to 2 hours
C. 8 minutes
D. 20 to 40 hours 
~~

G3A04 (D) 
Which of the following are least reliable for long distance communications during periods of low solar activity?
A. 80 meters and 160 meters
B. 60 meters and 40 meters
C. 30 meters and 20 meters
D. 15 meters, 12 meters and 10 meters
~~ 


G3A05 (D)  
What is the solar flux index?
A. A measure of the highest frequency that is useful for ionospheric propagation between two points on the Earth 
B. A count of sunspots which is adjusted for solar emissions
C. Another name for the American sunspot number 
D. A measure of solar radiation at 10.7 centimeters wavelength
~~

G3A06 (D) 
What is a geomagnetic storm?
A. A sudden drop in the solar flux index
B. A thunderstorm which affects radio propagation
C. Ripples in the ionosphere
D. A temporary disturbance in the Earth's magnetosphere
~~

G3A07 (D) 
At what point in the solar cycle does the 20-meter band usually support worldwide propagation during daylight hours?
A. At the summer solstice
B. Only at the maximum point of the solar cycle
C. Only at the minimum point of the solar cycle
D. At any point in the solar cycle
~~

G3A08 (B) 
Which of the following effects can a geomagnetic storm have on radio propagation?
A. Improved high-latitude HF propagation
B. Degraded high-latitude HF propagation
C. Improved ground-wave propagation
D. Improved chances of UHF ducting
~~

G3A09 (C) 
What effect does a high sunspot number have on radio communications?
A. High-frequency radio signals become weak and distorted
B. Frequencies above 300 MHz become usable for long-distance communication
C. Long-distance communication in the upper HF and lower VHF range is enhanced
D. Microwave communications become unstable
~~

G3A10 (C) 
What causes HF propagation conditions to vary periodically in a 28 day cycle?
A. Long term oscillations in the upper atmosphere
B. Cyclic variation in the Earth’s radiation belts
C. The Sun’s rotation on its axis
D. The position of the Moon in its orbit
~~

G3A11 (D) 
Approximately how long is the typical sunspot cycle?
A. 8 minutes
B. 40 hours
C. 28 days
D. 11 years
~~

G3A12 (B) 
What does the K-index indicate?
A. The relative position of sunspots on the surface of the Sun
B. The short term stability of the Earth’s magnetic field
C. The stability of the Sun's magnetic field
D. The solar radio flux at Boulder, Colorado
~~

G3A13 (C) 
What does the A-index indicate? 
A. The relative position of sunspots on the surface of the Sun 
B. The amount of polarization of the Sun's electric field
C. The long term stability of the Earth’s geomagnetic field
D. The solar radio flux at Boulder, Colorado
~~

G3A14 (B)
How are radio communications usually affected by the charged particles that reach the Earth from solar coronal holes?
A. HF communications are improved
B. HF communications are disturbed
C. VHF/UHF ducting is improved
D. VHF/UHF ducting is disturbed
~~

G3A15 (D) 
How long does it take charged particles from coronal mass ejections to affect radio propagation on the Earth?
A. 28 days
B. 14 days
C. 4 to 8 minutes
D. 20 to 40 hours
~~

G3A16 (A)
What is a possible benefit to radio communications resulting from periods of high geomagnetic activity?
A. Auroras that can reflect VHF signals
B. Higher signal strength for HF signals passing through the polar regions
C. Improved HF long path propagation
D. Reduced long delayed echoes 
~~


G3B - Maximum Usable Frequency; Lowest Usable Frequency; propagation

G3B01 (D)
How might a sky-wave signal sound if it arrives at your receiver by both short path and long path propagation?
A. Periodic fading approximately every 10 seconds
B. Signal strength increased by 3 dB 
C. The signal might be cancelled causing severe attenuation
D. A well-defined echo might be heard
~~

G3B02 (A) 
Which of the following is a good indicator of the possibility of sky-wave propagation on the 6-meter band?
A. Short skip sky-wave propagation on the 10-meter band
B. Long skip sky-wave propagation on the 10-meter band
C. Severe attenuation of signals on the 10-meter band
D. Long delayed echoes on the 10-meter band
~~

G3B03 (A) 
Which of the following applies when selecting a frequency for lowest attenuation when transmitting on HF?
A. Select a frequency just below the MUF
B. Select a frequency just above the LUF
C. Select a frequency just below the critical frequency
D. Select a frequency just above the critical frequency
~~

G3B04 (A) 
What is a reliable way to determine if the MUF is high enough to support skip propagation between your station and a distant location on frequencies between 14 and 30 MHz?
A. Listen for signals from an international beacon in the frequency range you plan to use
B. Send a series of dots on the band and listen for echoes from your signal
C. Check the strength of TV signals from Western Europe
D. Check the strength of signals in the MF AM broadcast band
~~

G3B05 (A) 
What usually happens to radio waves with frequencies below the MUF and above the LUF when they are sent into the ionosphere?
A. They are bent back to the Earth
B. They pass through the ionosphere
C. They are amplified by interaction with the ionosphere
D. They are bent and trapped in the ionosphere to circle the Earth
~~

G3B06 (C)
What usually happens to radio waves with frequencies below the LUF?
A. They are bent back to the Earth
B. They pass through the ionosphere
C. They are completely absorbed by the ionosphere
D. They are bent and trapped in the ionosphere to circle the Earth
~~

G3B07 (A)
What does LUF stand for?
A. The Lowest Usable Frequency for communications between two points
B. The Longest Universal Function for communications between two points
C. The Lowest Usable Frequency during a 24 hour period
D. The Longest Universal Function during a 24 hour period
~~

G3B08 (B)
What does MUF stand for?
A. The Minimum Usable Frequency for communications between two points
B. The Maximum Usable Frequency for communications between two points
C. The Minimum Usable Frequency during a 24 hour period
D. The Maximum Usable Frequency during a 24 hour period
~~

G3B09 (C)
What is the approximate maximum distance along the Earth's surface that is normally covered in one hop using the F2 region?
A. 180 miles
B. 1,200 miles
C. 2,500 miles
D. 12,000 miles
~~

G3B10 (B)
What is the approximate maximum distance along the Earth's surface that is normally covered in one hop using the E region?
A. 180 miles 
B. 1,200 miles 
C. 2,500 miles 
D. 12,000 miles 
~~

G3B11 (A) 
What happens to HF propagation when the LUF exceeds the MUF?
A. No HF radio frequency will support ordinary sky-wave communications over the path
B. HF communications over the path are enhanced
C. Double hop propagation along the path is more common
D. Propagation over the path on all HF frequencies is enhanced
~~

G3B12 (D)
What factor or factors affect the MUF?
A. Path distance and location
B. Time of day and season
C. Solar radiation and ionospheric disturbances
D. All of these choices are correct
~~


G3C - Ionospheric layers; critical angle and frequency; HF scatter; Near Vertical Incidence Sky-wave

G3C01 (A)
Which ionospheric layer is closest to the surface of the Earth?
A. The D layer
B. The E layer
C. The F1 layer
D. The F2 layer
~~

G3C02 (A) 
Where on the Earth do ionospheric layers reach their maximum height?
A. Where the Sun is overhead
B. Where the Sun is on the opposite side of the Earth
C. Where the Sun is rising 
D. Where the Sun has just set 
~~

G3C03 (C)
Why is the F2 region mainly responsible for the longest distance radio wave propagation?
A. Because it is the densest ionospheric layer
B. Because it does not absorb radio waves as much as other ionospheric regions
C. Because it is the highest ionospheric region
D. All of these choices are correct
~~

G3C04 (D)
What does the term "critical angle" mean as used in radio wave propagation?
A. The long path azimuth of a distant station
B. The short path azimuth of a distant station
C. The lowest takeoff angle that will return a radio wave to the Earth under specific ionospheric conditions
D. The highest takeoff angle that will return a radio wave to the Earth under specific ionospheric conditions 
~~

G3C05 (C) 
Why is long distance communication on the 40-meter, 60-meter, 80-meter and 160-meter bands more difficult during the day?
A. The F layer absorbs signals at these frequencies during daylight hours
B. The F layer is unstable during daylight hours
C. The D layer absorbs signals at these frequencies during daylight hours
D. The E layer is unstable during daylight hours
~~

G3C06 (B)
What is a characteristic of HF scatter signals?
A. They have high intelligibility
B. They have a wavering sound
C. They have very large swings in signal strength
D. All of these choices are correct
~~

G3C07 (D) 
What makes HF scatter signals often sound distorted?
A. The ionospheric layer involved is unstable
B. Ground waves are absorbing much of the signal
C. The E-region is not present
D. Energy is scattered into the skip zone through several different radio wave paths
~~

G3C08 (A) 
Why are HF scatter signals in the skip zone usually weak?
A. Only a small part of the signal energy is scattered into the skip zone
B. Signals are scattered from the magnetosphere which is not a good reflector
C. Propagation is through ground waves which absorb most of the signal energy
D. Propagations is through ducts in F region which absorb most of the energy
~~

G3C09 (B) 
What type of radio wave propagation allows a signal to be detected at a distance too far for ground wave propagation but too near for normal sky-wave propagation?
A. Faraday rotation
B. Scatter
C. Sporadic-E skip
D. Short-path skip
~~

G3C10 (D)
Which of the following might be an indication that signals heard on the HF bands are being received via scatter propagation?
A. The communication is during a sunspot maximum
B. The communication is during a sudden ionospheric disturbance
C. The signal is heard on a frequency below the Maximum Usable Frequency
D. The signal is heard on a frequency above the Maximum Usable Frequency
~~

G3C11 (B)
Which of the following antenna types will be most effective for skip communications on 40-meters during the day?
A. A vertical antenna
B. A horizontal dipole placed between 1/8 and 1/4 wavelength above the ground
C. A left-hand circularly polarized antenna
D. A right-hand circularly polarized antenna
~~

G3C12 (D)
Which ionospheric layer is the most absorbent of long skip signals during daylight hours on frequencies below 10 MHz?
A. The F2 layer
B. The F1 layer
C. The E layer
D. The D layer
~~

G3C13 (B) 
What is Near Vertical Incidence Sky-wave (NVIS) propagation?
A. Propagation near the MUF
B. Short distance MF or HF propagation using high elevation angles
C. Long path HF propagation at sunrise and sunset
D. Double hop propagation near the LUF 
~~


SUBELEMENT G4 - AMATEUR RADIO PRACTICES [5 Exam Questions - 5 groups]


G4A – Station Operation and set up

G4A01 (B) 
What is the purpose of the "notch filter" found on many HF transceivers?
A. To restrict the transmitter voice bandwidth
B. To reduce interference from carriers in the receiver passband
C. To eliminate receiver interference from impulse noise sources
D. To enhance the reception of a specific frequency on a crowded band
~~

G4A02 (C) 
What is one advantage of selecting the opposite or "reverse" sideband when receiving CW signals on a typical HF transceiver?
A. Interference from impulse noise will be eliminated
B. More stations can be accommodated within a given signal passband
C. It may be possible to reduce or eliminate interference from other signals
D. Accidental out of band operation can be prevented
~~

G4A03 (C) 
What is normally meant by operating a transceiver in "split" mode?
A. The radio is operating at half power
B. The transceiver is operating from an external power source
C. The transceiver is set to different transmit and receive frequencies
D. The transmitter is emitting an SSB signal, as opposed to DSB operation
~~

G4A04 (B) 
What reading on the plate current meter of a vacuum tube RF power amplifier indicates correct adjustment of the plate tuning control?
A. A pronounced peak
B. A pronounced dip
C. No change will be observed
D. A slow, rhythmic oscillation
~~

G4A05 (C) 
What is a reason to use Automatic Level Control (ALC) with an RF power amplifier?
A. To balance the transmitter audio frequency response
B. To reduce harmonic radiation
C. To reduce distortion due to excessive drive
D. To increase overall efficiency
~~

G4A06 (C) 
What type of device is often used to match transmitter output impedance to an impedance not equal to 50 ohms?
A. Balanced modulator
B. SWR Bridge
C. Antenna coupler or antenna tuner
D. Q Multiplier
~~

G4A07 (D) 
What condition can lead to permanent damage to a solid-state RF power amplifier?
A. Insufficient drive power
B. Low input SWR
C. Shorting the input signal to ground
D. Excessive drive power
~~

G4A08 (D) 
What is the correct adjustment for the load or coupling control of a vacuum tube RF power amplifier?
A. Minimum SWR on the antenna
B. Minimum plate current without exceeding maximum allowable grid current
C. Highest plate voltage while minimizing grid current
D. Maximum power output without exceeding maximum allowable plate current
~~

G4A09 (C) 
Why is a time delay sometimes included in a transmitter keying circuit?
A. To prevent stations from interfering with one another
B. To allow the transmitter power regulators to charge properly
C. To allow time for transmit-receive changeover operations to complete properly before RF output is allowed
D. To allow time for a warning signal to be sent to other stations
~~

G4A10 (B) 
What is the purpose of an electronic keyer?
A. Automatic transmit/receive switching
B. Automatic generation of strings of dots and dashes for CW operation 
C. VOX operation
D. Computer interface for PSK and RTTY operation
~~

G4A11 (A) 
Which of the following is a use for the IF shift control on a receiver?
A. To avoid interference from stations very close to the receive frequency
B. To change frequency rapidly
C. To permit listening on a different frequency from that on which you are transmitting
D. To tune in stations that are slightly off frequency without changing your transmit frequency
~~

G4A12 (C)  
Which of the following is a common use for the dual VFO feature on a transceiver? 
A. To allow transmitting on two frequencies at once
B. To permit full duplex operation, that is transmitting and receiving at the same time
C. To permit monitoring of two different frequencies
D. To facilitate computer interface
~~

G4A13 (A) 
What is one reason to use the attenuator function that is present on many HF transceivers?
A. To reduce signal overload due to strong incoming signals
B. To reduce the transmitter power when driving a linear amplifier
C. To reduce power consumption when operating from batteries
D. To slow down received CW signals for better copy
~~

G4A14 (B) 
What is likely to happen if a transceiver’s ALC system is not set properly when transmitting AFSK signals with the radio using single sideband mode?
A. ALC will invert the modulation of the AFSK mode
B. Improper action of ALC distorts the signal and can cause spurious emissions
C. When using digital modes, too much ALC activity can cause the transmitter to overheat
D. All of these choices are correct
~~

G4A15 (D) 
Which of the following can be a symptom of transmitted RF being picked up by an audio cable carrying AFSK data signals between a computer and a transceiver?
A. The VOX circuit does not un-key the transmitter
B. The transmitter signal is distorted
C. Frequent connection timeouts
D. All of these choices are correct
~~


G4B - Test and monitoring equipment; two-tone test

G4B01 (D)
What item of test equipment contains horizontal and vertical channel amplifiers?
A. An ohmmeter
B. A signal generator
C. An ammeter
D. An oscilloscope
~~

G4B02 (D) 
Which of the following is an advantage of an oscilloscope versus a digital voltmeter?
A. An oscilloscope uses less power
B. Complex impedances can be easily measured
C. Input impedance is much lower
D. Complex waveforms can be measured
~~

G4B03 (A) 
Which of the following is the best instrument to use when checking the keying waveform of a CW transmitter?
A. An oscilloscope
B. A field strength meter
C. A sidetone monitor
D. A wavemeter
~~

G4B04 (D) 
What signal source is connected to the vertical input of an oscilloscope when checking the RF envelope pattern of a transmitted signal?
A. The local oscillator of the transmitter
B. An external RF oscillator
C. The transmitter balanced mixer output
D. The attenuated RF output of the transmitter
~~

G4B05 (D) 
Why is high input impedance desirable for a voltmeter?
A. It improves the frequency response
B. It decreases battery consumption in the meter
C. It improves the resolution of the readings
D. It decreases the loading on circuits being measured
~~

G4B06 (C) 
What is an advantage of a digital voltmeter as compared to an analog voltmeter?
A. Better for measuring computer circuits
B. Better for RF measurements
C. Better precision for most uses
D. Faster response
~~

G4B07 (B) 
What signals are used to conduct a two-tone test?
A. Two audio signals of the same frequency shifted 90 degrees
B. Two non-harmonically related audio signals
C. Two swept frequency tones
D. Two audio frequency range square wave signals of equal amplitude
~~

G4B08 (A) 
Which of the following instruments may be used to monitor relative RF output when making antenna and transmitter adjustments?
A. A field strength meter
B. An antenna noise bridge
C. A multimeter
D. A Q meter
~~

G4B09 (B) 
Which of the following can be determined with a field strength meter?
A. The radiation resistance of an antenna
B. The radiation pattern of an antenna
C. The presence and amount of phase distortion of a transmitter
D. The presence and amount of amplitude distortion of a transmitter
~~

G4B10 (A) 
Which of the following can be determined with a directional wattmeter?
A. Standing wave ratio
B. Antenna front-to-back ratio
C. RF interference
D. Radio wave propagation
~~

G4B11 (C) 
Which of the following must be connected to an antenna analyzer when it is being used for SWR measurements?
A. Receiver 
B. Transmitter 
C. Antenna and feed line 
D. All of these choices are correct 
~~

G4B12 (B) 
What problem can occur when making measurements on an antenna system with an antenna analyzer? 
A. Permanent damage to the analyzer may occur if it is operated into a high SWR
B. Strong signals from nearby transmitters can affect the accuracy of measurements 
C. The analyzer can be damaged if measurements outside the ham bands are attempted
D. Connecting the analyzer to an antenna can cause it to absorb harmonics
~~

G4B13 (C) 
What is a use for an antenna analyzer other than measuring the SWR of an antenna system? 
A. Measuring the front to back ratio of an antenna
B. Measuring the turns ratio of a power transformer
C. Determining the impedance of an unknown or unmarked coaxial cable
D. Determining the gain of a directional antenna
~~

G4B14 (D) 
What is an instance in which the use of an instrument with analog readout may be preferred over an instrument with a digital readout?
A. When testing logic circuits
B. When high precision is desired
C. When measuring the frequency of an oscillator
D. When adjusting tuned circuits
~~

G4B15 (A) 
What type of transmitter performance does a two-tone test analyze?
A. Linearity 
B. Percentage of suppression of carrier and undesired sideband for SSB
C. Percentage of frequency modulation
D. Percentage of carrier phase shift
~~


G4C - Interference with consumer electronics; grounding; DSP

G4C01 (B) 
Which of the following might be useful in reducing RF interference to audio frequency devices?
A. Bypass inductor
B. Bypass capacitor
C. Forward-biased diode
D. Reverse-biased diode
~~

G4C02 (C) 
Which of the following could be a cause of interference covering a wide range of frequencies? 
A. Not using a balun or line isolator to feed balanced antennas 
B. Lack of rectification of the transmitter's signal in power conductors 
C. Arcing at a poor electrical connection 
D. Using a balun to feed an unbalanced antenna
~~

G4C03 (C) 
What sound is heard from an audio device or telephone if there is interference from a nearby single sideband phone transmitter?
A. A steady hum whenever the transmitter is on the air
B. On-and-off humming or clicking
C. Distorted speech
D. Clearly audible speech
~~

G4C04 (A) 
What is the effect on an audio device or telephone system if there is interference from a nearby CW transmitter?
A. On-and-off humming or clicking
B. A CW signal at a nearly pure audio frequency
C. A chirpy CW signal
D. Severely distorted audio
~~

G4C05 (D)  
What might be the problem if you receive an RF burn when touching your equipment while transmitting on an HF band, assuming the equipment is connected to a ground rod?
A. Flat braid rather than round wire has been used for the ground wire
B. Insulated wire has been used for the ground wire
C. The ground rod is resonant
D. The ground wire has high impedance on that frequency
~~

G4C06 (C) 
What effect can be caused by a resonant ground connection?
A. Overheating of ground straps
B. Corrosion of the ground rod
C. High RF voltages on the enclosures of station equipment
D. A ground loop
~~

G4C07 (A) 
What is one good way to avoid unwanted effects of stray RF energy in an amateur station?
A. Connect all equipment grounds together 
B. Install an RF filter in series with the ground wire
C. Use a ground loop for best conductivity 
D. Install a few ferrite beads on the ground wire where it connects to your station
~~

G4C08 (A)  
Which of the following would reduce RF interference caused by common-mode current on an audio cable?
A. Placing a ferrite choke around the cable
B. Adding series capacitors to the conductors
C. Adding shunt inductors to the conductors
D. Adding an additional insulating jacket to the cable
~~

G4C09 (D) 
How can a ground loop be avoided?
A. Connect all ground conductors in series
B. Connect the AC neutral conductor to the ground wire
C. Avoid using lock washers and star washers when making ground connections
D. Connect all ground conductors to a single point
~~

G4C10 (A) 
What could be a symptom of a ground loop somewhere in your station?
A. You receive reports of "hum" on your station's transmitted signal
B. The SWR reading for one or more antennas is suddenly very high
C. An item of station equipment starts to draw excessive amounts of current
D. You receive reports of harmonic interference from your station
~~

G4C11 (B) 
Which of the following is a function of a digital signal processor?
A. To provide adequate grounding
B. To remove noise from received signals
C. To increase antenna gain
D. To increase antenna bandwidth
~~

G4C12 (A) 
Which of the following is an advantage of a receiver DSP IF filter as compared to an analog filter? 
A. A wide range of filter bandwidths and shapes can be created
B. Fewer digital components are required
C. Mixing products are greatly reduced
D. The DSP filter is much more effective at VHF frequencies
~~

G4C13 (B) 
Which of the following can perform automatic notching of interfering carriers?
A. Bandpass tuning
B. A Digital Signal Processor (DSP) filter
C. Balanced mixing
D. A noise limiter
~~


G4D - Speech processors; S meters; sideband operation near band edges

G4D01 (A) 
What is the purpose of a speech processor as used in a modern transceiver?
A. Increase the intelligibility of transmitted phone signals during poor conditions 
B. Increase transmitter bass response for more natural sounding SSB signals
C. Prevent distortion of voice signals
D. Decrease high-frequency voice output to prevent out of band operation
~~

G4D02 (B) 
Which of the following describes how a speech processor affects a transmitted single sideband phone signal?
A. It increases peak power
B. It increases average power
C. It reduces harmonic distortion
D. It reduces intermodulation distortion
~~

G4D03 (D) 
Which of the following can be the result of an incorrectly adjusted speech processor?
A. Distorted speech
B. Splatter
C. Excessive background pickup
D. All of these choices are correct
~~

G4D04 (C)
What does an S meter measure?
A. Conductance
B. Impedance
C. Received signal strength
D. Transmitter power output
~~

G4D05 (D) 
How does a signal that reads 20 dB over S9 compare to one that reads S9 on a receiver, assuming a properly calibrated S meter?
A. It is 10 times less powerful
B. It is 20 times less powerful
C. It is 20 times more powerful
D. It is 100 times more powerful
~~

G4D06 (A) 
Where is an S meter found?
A. In a receiver
B. In an SWR bridge
C. In a transmitter
D. In a conductance bridge
~~

G4D07 (C) 
How much must the power output of a transmitter be raised to change the
S meter reading on a distant receiver from S8 to S9?
A. Approximately 1.5 times
B. Approximately 2 times
C. Approximately 4 times
D. Approximately 8 times
~~

G4D08 (C) 
What frequency range is occupied by a 3 kHz LSB signal when the displayed carrier frequency is set to 7.178 MHz? 
A. 7.178 to 7.181 MHz
B. 7.178 to 7.184 MHz
C. 7.175 to 7.178 MHz
D. 7.1765 to 7.1795 MHz
~~

G4D09 (B) 
What frequency range is occupied by a 3 kHz USB signal with the displayed carrier frequency set to 14.347 MHz?
A. 14.347 to 14.647 MHz
B. 14.347 to 14.350 MHz
C. 14.344 to 14.347 MHz
D. 14.3455 to 14.3485 MHz
~~

G4D10 (A) 
How close to the lower edge of the 40-meter General Class phone segment should your displayed carrier frequency be when using 3 kHz wide LSB?
A. At least 3 kHz above the edge of the segment
B. At least 3 kHz below the edge of the segment
C. Your displayed carrier frequency may be set at the edge of the segment
D. At least 1 kHz above the edge of the segment
~~

G4D11 (B) 
How close to the upper edge of the 20-meter General Class band should your displayed carrier frequency be when using 3 kHz wide USB? 
A. At least 3 kHz above the edge of the band
B. At least 3 kHz below the edge of the band
C. Your displayed carrier frequency may be set at the edge of the band
D. At least 1 kHz below the edge of the segment 
~~


G4E - HF mobile radio installations; emergency and battery powered operation 

G4E01 (C) 
What is the purpose of a capacitance hat on a mobile antenna?
A. To increase the power handling capacity of a whip antenna
B. To allow automatic band changing 
C. To electrically lengthen a physically short antenna
D. To allow remote tuning 
~~

G4E02 (D) 
What is the purpose of a corona ball on a HF mobile antenna?
A. To narrow the operating bandwidth of the antenna
B. To increase the "Q" of the antenna
C. To reduce the chance of damage if the antenna should strike an object
D. To reduce high voltage discharge from the tip of the antenna
~~

G4E03 (A) 
Which of the following direct, fused power connections would be the best for a 100 watt HF mobile installation? 
A. To the battery using heavy gauge wire 
B. To the alternator or generator using heavy gauge wire
C. To the battery using resistor wire 
D. To the alternator or generator using resistor wire
~~

G4E04 (B)  
Why is it best NOT to draw the DC power for a 100 watt HF transceiver from a vehicle’s auxiliary power socket?
A. The socket is not wired with an RF-shielded power cable
B. The socket's wiring may be inadequate for the current drawn by the transceiver
C. The DC polarity of the socket is reversed from the polarity of modern HF transceivers
D. Drawing more than 50 watts from this socket could cause the engine to overheat
~~

G4E05 (C) 
Which of the following most limits the effectiveness of an HF mobile transceiver operating in the 75-meter band?
A. "Picket Fencing" signal variation
B. The wire gauge of the DC power line to the transceiver
C. The antenna system
D. FCC rules limiting mobile output power on the 75-meter band
~~

G4E06 (C)  
What is one disadvantage of using a shortened mobile antenna as opposed to a full size antenna?
A. Short antennas are more likely to cause distortion of transmitted signals
B. Short antennas can only receive circularly polarized signals
C. Operating bandwidth may be very limited
D. Harmonic radiation may increase
~~

G4E07 (D) 
Which of the following may cause interference to be heard in the receiver of an HF radio installed in a recent model vehicle?
A. The battery charging system
B. The fuel delivery system 
C. The vehicle control computer 
D. All of these choices are correct 
~~

G4E08 (A)
What is the name of the process by which sunlight is changed directly into electricity?
A. Photovoltaic conversion
B. Photon emission
C. Photosynthesis
D. Photon decomposition
~~

G4E09 (B) 
What is the approximate open-circuit voltage from a fully illuminated silicon photovoltaic cell?
A. 0.02 VDC
B. 0.5 VDC
C. 0.2 VDC
D. 1.38 VDC
~~

G4E10 (B) 
What is the reason that a series diode is connected between a solar panel and a storage battery that is being charged by the panel?
A. The diode serves to regulate the charging voltage to prevent overcharge
B. The diode prevents self-discharge of the battery though the panel during times of low or no illumination
C. The diode limits the current flowing from the panel to a safe value
D. The diode greatly increases the efficiency during times of high illumination
~~

G4E11 (C) 
Which of the following is a disadvantage of using wind as the primary source of power for an emergency station?
A. The conversion efficiency from mechanical energy to electrical energy is less than 2 percent
B. The voltage and current ratings of such systems are not compatible with amateur equipment
C. A large energy storage system is needed to supply power when the wind is not blowing
D. All of these choices are correct
~~


SUBELEMENT G5 – ELECTRICAL PRINCIPLES [3 Exam Questions – 3 Groups] 


G5A - Reactance; inductance; capacitance; impedance; impedance matching

G5A01 (C)
What is impedance?
A. The electric charge stored by a capacitor
B. The inverse of resistance
C. The opposition to the flow of current in an AC circuit
D. The force of repulsion between two similar electric fields
~~

G5A02 (B)
What is reactance?
A. Opposition to the flow of direct current caused by resistance
B. Opposition to the flow of alternating current caused by capacitance or inductance
C. A property of ideal resistors in AC circuits
D. A large spark produced at switch contacts when an inductor is 
de-energized 
~~

G5A03 (D)
Which of the following causes opposition to the flow of alternating current in an inductor?
A. Conductance
B. Reluctance
C. Admittance
D. Reactance
~~

G5A04 (C)
Which of the following causes opposition to the flow of alternating current in a capacitor?
A. Conductance
B. Reluctance
C. Reactance
D. Admittance
~~

G5A05 (D) 
How does an inductor react to AC?
A. As the frequency of the applied AC increases, the reactance decreases
B. As the amplitude of the applied AC increases, the reactance increases
C. As the amplitude of the applied AC increases, the reactance decreases
D. As the frequency of the applied AC increases, the reactance increases
~~

G5A06 (A) 
How does a capacitor react to AC?
A. As the frequency of the applied AC increases, the reactance decreases
B. As the frequency of the applied AC increases, the reactance increases
C. As the amplitude of the applied AC increases, the reactance increases
D. As the amplitude of the applied AC increases, the reactance decreases
~~

G5A07 (D)  
What happens when the impedance of an electrical load is equal to the output impedance of a power source, assuming both impedances are resistive? 
A. The source delivers minimum power to the load
B. The electrical load is shorted
C. No current can flow through the circuit
D. The source can deliver maximum power to the load
~~

G5A08 (A)  
Why is impedance matching important?
A. So the source can deliver maximum power to the load
B. So the load will draw minimum power from the source
C. To ensure that there is less resistance than reactance in the circuit
D. To ensure that the resistance and reactance in the circuit are equal
~~

G5A09 (B)
What unit is used to measure reactance?
A. Farad
B. Ohm
C. Ampere
D. Siemens
~~

G5A10 (B)
What unit is used to measure impedance?
A. Volt
B. Ohm
C. Ampere
D. Watt
~~

G5A11 (A) 
Which of the following describes one method of impedance matching between two AC circuits?
A. Insert an LC network between the two circuits
B. Reduce the power output of the first circuit
C. Increase the power output of the first circuit
D. Insert a circulator between the two circuits
~~

G5A12 (B)  
What is one reason to use an impedance matching transformer?
A. To minimize transmitter power output
B. To maximize the transfer of power
C. To reduce power supply ripple
D. To minimize radiation resistance
~~

G5A13 (D) 
Which of the following devices can be used for impedance matching at radio frequencies?
A. A transformer
B. A Pi-network
C. A length of transmission line
D. All of these choices are correct
~~


G5B - The Decibel; current and voltage dividers; electrical power calculations; sine wave root-mean-square (RMS) values; PEP calculations

G5B01 (B)
What dB change represents a two-times increase or decrease in power?
A. Approximately 2 dB
B. Approximately 3 dB
C. Approximately 6 dB
D. Approximately 12 dB
~~

G5B02 (C)  
How does the total current relate to the individual currents in each branch of a purely resistive parallel circuit?
A. It equals the average of each branch current
B. It decreases as more parallel branches are added to the circuit
C. It equals the sum of the currents through each branch 
D. It is the sum of the reciprocal of each individual voltage drop 
~~

G5B03 (B)
How many watts of electrical power are used if 400 VDC is supplied to an 800 ohm load?
A. 0.5 watts
B. 200 watts
C. 400 watts
D. 3200 watts
~~

G5B04 (A)
How many watts of electrical power are used by a 12 VDC light bulb that draws 0.2 amperes?
A. 2.4 watts
B. 24 watts
C. 6 watts
D. 60 watts
~

G5B05 (A) 
How many watts are dissipated when a current of 7.0 milliamperes flows through 1.25 kilohms resistance?
A. Approximately 61 milliwatts
B. Approximately 61 watts
C. Approximately 11 milliwatts
D. Approximately 11 watts
~~

G5B06 (B)
What is the output PEP from a transmitter if an oscilloscope measures 200 volts peak-to-peak across a 50 ohm dummy load connected to the transmitter output?
A. 1.4 watts
B. 100 watts
C. 353.5 watts
D. 400 watts
~~

G5B07 (C) 
What value of an AC signal produces the same power dissipation in a resistor as a DC voltage of the same value? 
A. The peak-to-peak value 
B. The peak value 
C. The RMS value 
D. The reciprocal of the RMS value
~~

***G5B08 (D) *** QUESTION REMOVED BY QPC  February 4, 2015****
What is the peak-to-peak voltage of a sine wave that has an RMS voltage of 120 volts? 
A. 84.8 volts 
B. 169.7 volts 
C. 240.0 volts
D. 339.4 volts 
~~

G5B09 (B) 
What is the RMS voltage of a sine wave with a value of 17 volts peak? 
A. 8.5 volts 
B. 12 volts 
C. 24 volts 
D. 34 volts 
~~

G5B10 (C) 
What percentage of power loss would result from a transmission line loss of 1 dB?
A. 10.9 percent
B. 12.2 percent
C. 20.5 percent
D. 25.9 percent
~~

G5B11 (B)
What is the ratio of peak envelope power to average power for an unmodulated carrier?
A. 0.707
B. 1.00
C. 1.414
D. 2.00
~~

G5B12 (B) 
What would be the RMS voltage across a 50 ohm dummy load dissipating 1200 watts?
A. 173 volts
B. 245 volts
C. 346 volts
D. 692 volts
~~

G5B13 (B) 
What is the output PEP of an unmodulated carrier if an average reading wattmeter connected to the transmitter output indicates 1060 watts?
A. 530 watts
B. 1060 watts
C. 1500 watts
D. 2120 watts
~~

G5B14 (B)
What is the output PEP from a transmitter if an oscilloscope measures 500 volts peak-to-peak across a 50 ohm resistive load connected to the transmitter output?
A. 8.75 watts
B. 625 watts
C. 2500 watts
D. 5000 watts
~~


G5C – Resistors, capacitors, and inductors in series and parallel; transformers

G5C01 (C)
What causes a voltage to appear across the secondary winding of a transformer when an AC voltage source is connected across its primary winding?
A. Capacitive coupling
B. Displacement current coupling
C. Mutual inductance
D. Mutual capacitance
~~

G5C02 (A) 
What happens if you reverse the primary and secondary windings of a 4:1 voltage step down transformer?
A. The secondary voltage becomes 4 times the primary voltage
B. The transformer no longer functions as it is a unidirectional device
C. Additional resistance must be added in series with the primary to prevent overload
D. Additional resistance must be added in parallel with the secondary to prevent overload
~~

G5C03 (B) 
Which of the following components should be added to an existing resistor to increase the resistance?
A. A resistor in parallel
B. A resistor in series
C. A capacitor in series
D. A capacitor in parallel
~~

G5C04 (C) 
What is the total resistance of three 100 ohm resistors in parallel?
A. 0.30 ohms
B. 0.33 ohms
C. 33.3 ohms
D. 300 ohms
~~

G5C05 (C) 
If three equal value resistors in series produce 450 ohms, what is the value of each resistor?
A. 1500 ohms
B. 90 ohms
C. 150 ohms
D. 175 ohms
~~

G5C06 (C) 
What is the RMS voltage across a 500-turn secondary winding in a transformer if the 2250-turn primary is connected to 120 VAC?
A. 2370 volts
B. 540 volts
C. 26.7 volts
D. 5.9 volts
~~

G5C07 (A)
What is the turns ratio of a transformer used to match an audio amplifier having 600 ohm output impedance to a speaker having 4 ohm impedance?
A. 12.2 to 1
B. 24.4 to 1
C. 150 to 1
D. 300 to 1
~~

G5C08 (D) 
What is the equivalent capacitance of two 5.0 nanofarad capacitors and one 750 picofarad capacitor connected in parallel?
A. 576.9 nanofarads
B. 1733 picofarads
C. 3583 picofarads
D. 10.750 nanofarads
~~

G5C09 (C)
What is the capacitance of three 100 microfarad capacitors connected in series?
A. 0.30 microfarads
B. 0.33 microfarads
C. 33.3 microfarads
D. 300 microfarads
~~

G5C10 (C) 
What is the inductance of three 10 millihenry inductors connected in parallel?
A. 0.30 henrys
B. 3.3 henrys
C. 3.3 millihenrys
D. 30 millihenrys
~~

G5C11 (C) 
What is the inductance of a 20 millihenry inductor connected in series with a 50 millihenry inductor?
A. 0.07 millihenrys
B. 14.3 millihenrys
C. 70 millihenrys
D. 1000 millihenrys
~~

G5C12 (B)  
What is the capacitance of a 20 microfarad capacitor connected in series with a 50 microfarad capacitor?
A. 0.07 microfarads
B. 14.3 microfarads
C. 70 microfarads
D. 1000 microfarads
~~

G5C13 (C) 
Which of the following components should be added to a capacitor to increase the capacitance?
A. An inductor in series 
B. A resistor in series
C. A capacitor in parallel
D. A capacitor in series
~~

G5C14 (D) 
Which of the following components should be added to an inductor to increase the inductance?
A. A capacitor in series
B. A resistor in parallel
C. An inductor in parallel
D. An inductor in series
~~

G5C15 (A) 
What is the total resistance of a 10 ohm, a 20 ohm, and a 50 ohm resistor connected in parallel?
A. 5.9 ohms
B. 0.17 ohms
C. 10000 ohms
D. 80 ohms
~~

G5C16 (B) 
Why is the conductor of the primary winding of many voltage step up transformers larger in diameter than the conductor of the secondary winding?
A. To improve the coupling between the primary and secondary
B. To accommodate the higher current of the primary
C. To prevent parasitic oscillations due to resistive losses in the primary
D. To insure that the volume of the primary winding is equal to the volume of the secondary winding
~~

G5C17 (C) 
What is the value in nanofarads (nF) of a 22,000 pF capacitor?
A. 0.22 nF          
B. 2.2 nF         
C. 22 nF            
D. 220 nF        
~~

G5C18 (D) 
What is the value in microfarads of a 4700 nanofarad (nF) capacitor? 
A. 47 µF
B. 0.47 µF
C. 47,000 µF 
D. 4.7 µF
~~


SUBELEMENT G6 – CIRCUIT COMPONENTS [2 Exam Questions – 2 Groups]


G6A – Resistors; Capacitors; Inductors; Rectifiers; solid state diodes and transistors; vacuum tubes; batteries

G6A01 (C) 
What is the minimum allowable discharge voltage for maximum life of a standard 12 volt lead acid battery?
A. 6 volts
B. 8.5 volts
C. 10.5 volts
D. 12 volts
~~

G6A02 (B) 
What is an advantage of the low internal resistance of nickel-cadmium batteries?
A. Long life
B. High discharge current
C. High voltage
D. Rapid recharge
~~

G6A03 (B) 
What is the approximate junction threshold voltage of a germanium diode?
A. 0.1 volt
B. 0.3 volts
C. 0.7 volts
D. 1.0 volts
~~

G6A04 (D)  
When is it acceptable to recharge a carbon-zinc primary cell?
A. As long as the voltage has not been allowed to drop below 1.0 volt
B. When the cell is kept warm during the recharging period
C. When a constant current charger is used
D. Never
~~

G6A05 (C) 
What is the approximate junction threshold voltage of a conventional silicon diode?
A. 0.1 volt
B. 0.3 volts
C. 0.7 volts
D. 1.0 volts
~~

G6A06 (A) 
Which of the following is an advantage of using a Schottky diode in an RF switching circuit rather than a standard silicon diode?
A. Lower capacitance
B. Lower inductance
C. Longer switching times
D. Higher breakdown voltage
~~

G6A07 (A) 
What are the stable operating points for a bipolar transistor used as a switch in a logic circuit?
A. Its saturation and cutoff regions
B. Its active region (between the cutoff and saturation regions)
C. Its peak and valley current points
D. Its enhancement and depletion modes
~~

G6A08 (D)  
Why must the cases of some large power transistors be insulated from ground?
A. To increase the beta of the transistor
B. To improve the power dissipation capability
C. To reduce stray capacitance
D. To avoid shorting the collector or drain voltage to ground
~~

G6A09 (B) 
Which of the following describes the construction of a MOSFET?
A. The gate is formed by a back-biased junction
B. The gate is separated from the channel with a thin insulating layer
C. The source is separated from the drain by a thin insulating layer
D. The source is formed by depositing metal on silicon
~~

G6A10 (A) 
Which element of a triode vacuum tube is used to regulate the flow of electrons between cathode and plate?
A. Control grid
B. Heater
C. Screen Grid
D. Trigger electrode
~~

G6A11 (B) 
Which of the following solid state devices is most like a vacuum tube in its general operating characteristics?
A. A bipolar transistor
B. A field effect transistor
C. A tunnel diode
D. A varistor
~~

G6A12 (A) 
What is the primary purpose of a screen grid in a vacuum tube?
A. To reduce grid-to-plate capacitance
B. To increase efficiency
C. To increase the control grid resistance
D. To decrease plate resistance
~~

G6A13 (D) 
Why is the polarity of applied voltages important for polarized capacitors?
A. Incorrect polarity can cause the capacitor to short-circuit
B. Reverse voltages can destroy the dielectric layer of an electrolytic capacitor
C. The capacitor could overheat and explode
D. All of these choices are correct 
~~

G6A14 (D)  
Which of the following is an advantage of ceramic capacitors as compared to other types of capacitors?
A. Tight tolerance
B. High stability
C. High capacitance for given volume
D. Comparatively low cost
~~

G6A15 (C)  
Which of the following is an advantage of an electrolytic capacitor?
A. Tight tolerance
B. Much less leakage than any other type
C. High capacitance for a given volume
D. Inexpensive RF capacitor
~~

G6A16 (C) 
What will happen to the resistance if the temperature of a resistor is increased?
A. It will change depending on the resistor’s reactance coefficient
B. It will stay the same
C. It will change depending on the resistor's temperature coefficient
D. It will become time dependent
~~

G6A17 (B)  
Which of the following is a reason not to use wire-wound resistors in an RF circuit?
A. The resistor's tolerance value would not be adequate for such a circuit
B. The resistor's inductance could make circuit performance unpredictable
C. The resistor could overheat
D. The resistor's internal capacitance would detune the circuit
~~

G6A18 (D)  
What is an advantage of using a ferrite core toroidal inductor?
A. Large values of inductance may be obtained
B. The magnetic properties of the core may be optimized for a specific range of frequencies
C. Most of the magnetic field is contained in the core
D. All of these choices are correct
~~

G6A19 (C) 
How should the winding axes of two solenoid inductors be oriented to minimize their mutual inductance?
A. In line
B. Parallel to each other
C. At right angles to each other
D. Interleaved
~~


G6B - Analog and digital integrated circuits (ICs); microprocessors; memory; I/O devices; microwave ICs (MMICs); display devices 

G6B01 (D)  
Which of the following is an analog integrated circuit?
A. NAND Gate
B. Microprocessor
C. Frequency Counter
D. Linear voltage regulator
~~

G6B02 (B)  
What is meant by the term MMIC?
A. Multi Megabyte Integrated Circuit
B. Monolithic Microwave Integrated Circuit
C. Military Manufactured Integrated Circuit
D. Mode Modulated Integrated Circuit
~~

G6B03 (A) 
Which of the following is an advantage of CMOS integrated circuits compared to TTL integrated circuits?
A. Low power consumption
B. High power handling capability
C. Better suited for RF amplification
D. Better suited for power supply regulation
~~

G6B04 (B)  
What is meant by the term ROM?
A. Resistor Operated Memory
B. Read Only Memory
C. Random Operational Memory
D. Resistant to Overload Memory
~~

G6B05 (C) 
What is meant when memory is characterized as non-volatile?
A. It is resistant to radiation damage
B. It is resistant to high temperatures
C. The stored information is maintained even if power is removed
D. The stored information cannot be changed once written
~~

G6B06 (D) 
What kind of device is an integrated circuit operational amplifier?
A. Digital
B. MMIC
C. Programmable Logic
D. Analog
~~

G6B07 (D) 
Which of the following is an advantage of an LED indicator compared to an incandescent indicator?
A. Lower power consumption
B. Faster response time
C. Longer life
D. All of these choices are correct
~~

G6B08 (D)
How is an LED biased when emitting light?
A. Beyond cutoff
B. At the Zener voltage
C. Reverse Biased
D. Forward Biased
~~

G6B09 (A) 
Which of the following is a characteristic of a liquid crystal display?
A. It requires ambient or back lighting
B. It offers a wide dynamic range
C. It has a wide viewing angle
D. All of these choices are correct
~~

G6B10 (A) 
What two devices in an Amateur Radio station might be connected using a USB interface?
A. Computer and transceiver
B. Microphone and transceiver
C. Amplifier and antenna 
D. Power supply and amplifier
~~

G6B11 (B) 
What is a microprocessor?
A. A low power analog signal processor used as a microwave detector
B. A computer on a single integrated circuit
C. A microwave detector, amplifier, and local oscillator on a single integrated circuit
D. A low voltage amplifier used in a microwave transmitter modulator stage
~~

G6B12 (D) 
Which of the following connectors would be a good choice for a serial data port?
A. PL-259
B. Type N
C. Type SMA
D. DE-9
~~

G6B13 (C)
Which of these connector types is commonly used for RF connections at frequencies up to 150 MHz? 
A. Octal
B. RJ-11
C. PL-259
D. DB-25 
~~

G6B14 (C)
Which of these connector types is commonly used for audio signals in Amateur Radio stations? 
A. PL-259 
B. BNC 
C. RCA Phono
D. Type N 
~~

G6B15 (B)
What is the main reason to use keyed connectors instead of non-keyed types?
A. Prevention of use by unauthorized persons
B. Reduced chance of incorrect mating
C. Higher current carrying capacity
D. All of these choices are correct
~~

G6B16 (A) 
Which of the following describes a type N connector?
A. A moisture-resistant RF connector useful to 10 GHz
B. A small bayonet connector used for data circuits
C. A threaded connector used for hydraulic systems 
D. An audio connector used in surround-sound installations
~~

G6B17 (C) 
What is the general description of a DIN type connector?
A. A special connector for microwave interfacing
B. A DC power connector rated for currents between 30 and 50 amperes
C. A family of multiple circuit connectors suitable for audio and control signals
D. A special watertight connector for use in marine applications
~~

G6B18 (B)
What is a type SMA connector?
A. A large bayonet connector usable at power levels in excess of 1 KW
B. A small threaded connector suitable for signals up to several GHz
C. A connector designed for serial multiple access signals
D. A type of push-on connector intended for high voltage applications
~~


SUBELEMENT G7 – PRACTICAL CIRCUITS [3 Exam Questions – 3 Groups]


G7A Power supplies; and schematic symbols

G7A01 (B) 
What useful feature does a power supply bleeder resistor provide?
A. It acts as a fuse for excess voltage
B. It ensures that the filter capacitors are discharged when power is removed
C. It removes shock hazards from the induction coils
D. It eliminates ground loop current
~~

G7A02 (D) 
Which of the following components are used in a power supply filter network?
A. Diodes
B. Transformers and transducers
C. Quartz crystals
D. Capacitors and inductors
~~

G7A03 (D) 
What is the peak-inverse-voltage across the rectifiers in a full-wave bridge power supply?
A. One-quarter the normal output voltage of the power supply
B. Half the normal output voltage of the power supply
C. Double the normal peak output voltage of the power supply
D. Equal to the normal peak output voltage of the power supply
~~

G7A04 (D) 
What is the peak-inverse-voltage across the rectifier in a half-wave power supply?
A. One-half the normal peak output voltage of the power supply
B. One-half the normal output voltage of the power supply
C. Equal to the normal output voltage of the power supply
D. Two times the normal peak output voltage of the power supply
~~

G7A05 (B) 
What portion of the AC cycle is converted to DC by a half-wave rectifier?
A. 90 degrees
B. 180 degrees
C. 270 degrees
D. 360 degrees
~~

G7A06 (D) 
What portion of the AC cycle is converted to DC by a full-wave rectifier?
A. 90 degrees
B. 180 degrees
C. 270 degrees
D. 360 degrees
~~

G7A07 (A) 
What is the output waveform of an unfiltered full-wave rectifier connected to a resistive load?
A. A series of DC pulses at twice the frequency of the AC input
B. A series of DC pulses at the same frequency as the AC input
C. A sine wave at half the frequency of the AC input
D. A steady DC voltage
~~

G7A08 (C) 
Which of the following is an advantage of a switchmode power supply as compared to a linear power supply?
A. Faster switching time makes higher output voltage possible
B. Fewer circuit components are required
C. High frequency operation allows the use of smaller components
D. All of these choices are correct
~~

G7A09 (C) 
Which symbol in figure G7-1 represents a field effect transistor?
A. Symbol 2
B. Symbol 5
C. Symbol 1
D. Symbol 4
~~

G7A10 (D) 
Which symbol in figure G7-1 represents a Zener diode?
A. Symbol 4
B. Symbol 1
C. Symbol 11
D. Symbol 5
~~

G7A11 (B) 
Which symbol in figure G7-1 represents an NPN junction transistor?
A. Symbol 1
B. Symbol 2
C. Symbol 7
D. Symbol 11
~~

G7A12 (C) 
Which symbol in Figure G7-1 represents a multiple-winding transformer?
A. Symbol 4
B. Symbol 7
C. Symbol 6
D. Symbol 1 
~~

G7A13 (A) 
Which symbol in Figure G7-1 represents a tapped inductor?
A. Symbol 7
B. Symbol 11
C. Symbol 6
D. Symbol 1
~~


G7B - Digital circuits; amplifiers and oscillators 

G7B01 (A) 
Complex digital circuitry can often be replaced by what type of integrated circuit?
A. Microcontroller
B. Charge-coupled device
C. Phase detector
D. Window comparator
~~

G7B02 (A) 
Which of the following is an advantage of using the binary system when processing digital signals?
A. Binary "ones" and "zeros" are easy to represent by an "on" or "off" state
B. The binary number system is most accurate
C. Binary numbers are more compatible with analog circuitry
D. All of these choices are correct
~~

G7B03 (B) 
Which of the following describes the function of a two input AND gate?
A. Output is high when either or both inputs are low
B. Output is high only when both inputs are high
C. Output is low when either or both inputs are high
D. Output is low only when both inputs are high
~~

G7B04 (C)  
Which of the following describes the function of a two input NOR gate?
A. Output is high when either or both inputs are low
B. Output is high only when both inputs are high
C. Output is low when either or both inputs are high
D. Output is low only when both inputs are high
~~

G7B05 (C) 
How many states does a 3-bit binary counter have?
A. 3
B. 6
C. 8
D. 16
~~

G7B06 (A)
What is a shift register?
A. A clocked array of circuits that passes data in steps along the array
B. An array of operational amplifiers used for tri-state arithmetic operations
C. A digital mixer
D. An analog mixer
~~

G7B07 (D) 
What are the basic components of virtually all sine wave oscillators?
A. An amplifier and a divider
B. A frequency multiplier and a mixer
C. A circulator and a filter operating in a feed-forward loop
D. A filter and an amplifier operating in a feedback loop 
~~

G7B08 (B) 
How is the efficiency of an RF power amplifier determined?
A. Divide the DC input power by the DC output power
B. Divide the RF output power by the DC input power
C. Multiply the RF input power by the reciprocal of the RF output power
D. Add the RF input power to the DC output power
~~

G7B09 (C)
What determines the frequency of an LC oscillator?
A. The number of stages in the counter
B. The number of stages in the divider
C. The inductance and capacitance in the tank circuit
D. The time delay of the lag circuit 
~~

G7B10 (D)
Which of the following is a characteristic of a Class A amplifier?
A. Low standby power
B. High Efficiency
C. No need for bias
D. Low distortion
~~

G7B11 (B)
For which of the following modes is a Class C power stage appropriate for amplifying a modulated signal?
A. SSB
B. CW
C. AM
D. All of these choices are correct 
~~

G7B12 (D) 
Which of these classes of amplifiers has the highest efficiency?
A. Class A
B. Class B
C. Class AB
D. Class C
~~

G7B13 (B) 
What is the reason for neutralizing the final amplifier stage of a transmitter?
A. To limit the modulation index
B. To eliminate self-oscillations
C. To cut off the final amplifier during standby periods
D. To keep the carrier on frequency
~~

G7B14 (B)  
Which of the following describes a linear amplifier?
A. Any RF power amplifier used in conjunction with an amateur transceiver
B. An amplifier in which the output preserves the input waveform
C. A Class C high efficiency amplifier
D. An amplifier used as a frequency multiplier
~~


G7C - Receivers and transmitters; filters, oscillators 

G7C01 (B) 
Which of the following is used to process signals from the balanced modulator then send them to the mixer in some single sideband phone transmitters?
A. Carrier oscillator 
B. Filter 
C. IF amplifier 
D. RF amplifier 
~~

G7C02 (D)  
Which circuit is used to combine signals from the carrier oscillator and speech amplifier then send the result to the filter in some single sideband phone transmitters?
A. Discriminator
B. Detector
C. IF amplifier
D. Balanced modulator
~~

G7C03 (C) 
What circuit is used to process signals from the RF amplifier and local oscillator then send the result to the IF filter in a superheterodyne receiver?
A. Balanced modulator
B. IF amplifier
C. Mixer
D. Detector
~~

G7C04 (D)  
What circuit is used to combine signals from the IF amplifier and BFO and send the result to the AF amplifier in some single sideband receivers?
A. RF oscillator
B. IF filter
C. Balanced modulator
D. Product detector	
~~

G7C05 (D)
Which of the following is an advantage of a transceiver controlled by a direct digital synthesizer (DDS)?
A. Wide tuning range and no need for band switching
B. Relatively high power output
C. Relatively low power consumption
D. Variable frequency with the stability of a crystal oscillator
~~

G7C06 (B)
What should be the impedance of a low-pass filter as compared to the impedance of the transmission line into which it is inserted? 
A. Substantially higher
B. About the same
C. Substantially lower
D. Twice the transmission line impedance
~~

G7C07 (C)
What is the simplest combination of stages that implement a superheterodyne receiver?
A. RF amplifier, detector, audio amplifier
B. RF amplifier, mixer, IF discriminator
C. HF oscillator, mixer, detector
D. HF oscillator, prescaler, audio amplifier
~~

G7C08 (D)
What type of circuit is used in many FM receivers to convert signals coming from the IF amplifier to audio?
A. Product detector
B. Phase inverter
C. Mixer
D. Discriminator
~~

G7C09 (D)
Which of the following is needed for a Digital Signal Processor IF filter?
A. An analog to digital converter
B. A digital to analog converter
C. A digital processor chip
D. All of the these choices are correct
~~

G7C10 (B)
How is Digital Signal Processor filtering accomplished?
A. By using direct signal phasing
B. By converting the signal from analog to digital and using digital processing
C. By differential spurious phasing
D. By converting the signal from digital to analog and taking the difference of mixing products
~~

G7C11 (A) 
What is meant by the term "software defined radio" (SDR)?
A. A radio in which most major signal processing functions are performed by software
B. A radio that provides computer interface for automatic logging of band and frequency
C. A radio that uses crystal filters designed using software
D. A computer model that can simulate performance of a radio to aid in the design process
~~


SUBELEMENT G8 – SIGNALS AND EMISSIONS [3 Exam Questions – 3 Groups]


G8A - Carriers and modulation: AM; FM; single sideband; modulation envelope; digital modulation; overmodulation 

G8A01 (B) 
How is an FSK signal generated?
A. By keying an FM transmitter with a sub-audible tone
B. By changing an oscillator’s frequency directly with a digital control signal
C. By using a transceiver’s computer data interface protocol to change frequencies
D. By reconfiguring the CW keying input to act as a tone generator
~~

G8A02 (B)
What is the name of the process that changes the phase angle of an RF wave to convey information?
A. Phase convolution
B. Phase modulation
C. Angle convolution
D. Radian inversion
~~

G8A03 (D) 
What is the name of the process that changes the instantaneous frequency of an RF wave to convey information?
A. Frequency convolution
B. Frequency transformation
C. Frequency conversion
D. Frequency modulation
~~

G8A04 (B) 
What emission is produced by a reactance modulator connected to a transmitter RF amplifier stage?
A. Multiplex modulation
B. Phase modulation
C. Amplitude modulation
D. Pulse modulation
~~

G8A05 (D) 
What type of modulation varies the instantaneous power level of the RF signal?
A. Frequency shift keying
B. Phase modulation
C. Frequency modulation
D. Amplitude modulation
~~

G8A06 (C) 
What is one advantage of carrier suppression in a single sideband phone transmission versus full carrier amplitude modulation?
A. Audio fidelity is improved
B. Greater modulation percentage is obtainable with lower distortion
C. Available transmitter power can be used more effectively
D. Simpler receiving equipment can be used
~~

G8A07 (A) 
Which of the following phone emissions uses the narrowest bandwidth?
A. Single sideband
B. Double sideband
C. Phase modulation
D. Frequency modulation
~~

G8A08 (D)
Which of the following is an effect of overmodulation?
A. Insufficient audio
B. Insufficient bandwidth
C. Frequency drift
D. Excessive bandwidth
~~

G8A09 (B)
What control is typically adjusted for proper ALC setting on an amateur single sideband transceiver?
A. The RF clipping level
B. Transmit audio or microphone gain
C. Antenna inductance or capacitance
D. Attenuator level
~~

G8A10 (C) 
What is meant by the term flat-topping when referring to a single sideband phone transmission?
A. Signal distortion caused by insufficient collector current
B. The transmitter's automatic level control (ALC) is properly adjusted
C. Signal distortion caused by excessive drive
D. The transmitter's carrier is properly suppressed
~~

G8A11 (A) 
What is the modulation envelope of an AM signal? 
A. The waveform created by connecting the peak values of the modulated signal
B. The carrier frequency that contains the signal 
C. Spurious signals that envelop nearby frequencies 
D. The bandwidth of the modulated signal
~~


G8B - Frequency mixing; multiplication; bandwidths of various modes; deviation; duty cycle

G8B01 (A)
What receiver stage combines a 14.250 MHz input signal with a 13.795 MHz oscillator signal to produce a 455 kHz intermediate frequency (IF) signal?
A. Mixer
B. BFO
C. VFO
D. Discriminator
~~

G8B02 (B)
If a receiver mixes a 13.800 MHz VFO with a 14.255 MHz received signal to produce a 455 kHz intermediate frequency (IF) signal, what type of interference will a 13.345 MHz signal produce in the receiver?
A. Quadrature noise
B. Image response
C. Mixer interference 
D. Intermediate interference
~~

G8B03 (A)
What is another term for the mixing of two RF signals?
A. Heterodyning
B. Synthesizing
C. Cancellation
D. Phase inverting
~~

G8B04 (D)
What is the stage in a VHF FM transmitter that generates a harmonic of a lower frequency signal to reach the desired operating frequency?
A. Mixer
B. Reactance modulator
C. Pre-emphasis network
D. Multiplier
~~

G8B05 (D)  
What is the approximate bandwidth of a PACTOR3 signal at maximum data rate?
A. 31.5 Hz
B. 500 Hz
C. 1800 Hz
D. 2300 Hz
~~

G8B06 (D)
What is the total bandwidth of an FM phone transmission having 5 kHz deviation and 3 kHz modulating frequency?
A. 3 kHz
B. 5 kHz
C. 8 kHz
D. 16 kHz
~~

G8B07 (B)
What is the frequency deviation for a 12.21 MHz reactance modulated oscillator in a 5 kHz deviation, 146.52 MHz FM phone transmitter?
A. 101.75 Hz
B. 416.7 Hz
C. 5 kHz
D. 60 kHz
~~

G8B08 (B)
Why is it important to know the duty cycle of the mode you are using when transmitting?
A. To aid in tuning your transmitter
B. Some modes have high duty cycles which could exceed the transmitter's average power rating.
C. To allow time for the other station to break in during a transmission
D. All of these choices are correct
~~

G8B09 (D) 
Why is it good to match receiver bandwidth to the bandwidth of the operating mode?
A. It is required by FCC rules
B. It minimizes power consumption in the receiver
C. It improves impedance matching of the antenna
D. It results in the best signal to noise ratio
~~

G8B10 (B) 
What is the relationship between transmitted symbol rate and bandwidth?
A. Symbol rate and bandwidth are not related
B. Higher symbol rates require wider bandwidth
C. Lower symbol rates require wider bandwidth
D. Bandwidth is always half the symbol rate
~~


G8C – Digital emission modes  

G8C01 (B) 
Which of the following digital modes is designed to operate at extremely low signal strength on the HF bands? 
A. FSK441 and Hellschreiber
B. JT9 and JT65
C. Clover
D. RTTY
~~

G8C02 (A) 
How many data bits are sent in a single PSK31 character?
A. The number varies
B. 5
C. 7
D. 8
~~

G8C03 (C) 
What part of a data packet contains the routing and handling information?
A. Directory
B. Preamble
C. Header
D. Footer
~~

G8C04 (C) 
Which of the following describes Baudot code?
A. A 7-bit code with start, stop and parity bits
B. A code using error detection and correction 
C. A 5-bit code with additional start and stop bits
D. A code using SELCAL and LISTEN
~~

G8C05 (A) 
In the PACTOR protocol, what is meant by an NAK response to a transmitted packet?
A. The receiver is requesting the packet be retransmitted
B. The receiver is reporting the packet was received without error
C. The receiver is busy decoding the packet
D. The entire file has been received correctly
~~

G8C06 (B)   
What action results from a failure to exchange information due to excessive transmission attempts when using PACTOR or WINMOR? 
A. The checksum overflows
B. The connection is dropped
C. Packets will be routed incorrectly
D. Encoding reverts to the default character set
~~

G8C07 (B) 
How does the receiving station respond to an ARQ data mode packet containing errors?
A. It terminates the contact
B. It requests the packet be retransmitted
C. It sends the packet back to the transmitting station
D. It requests a change in transmitting protocol
~~

G8C08 (B) 
Which of the following statements is true about PSK31?
A. Upper case letters make the signal stronger
B. Upper case letters use longer Varicode signals and thus slow down transmission
C. Varicode Error Correction is used to ensure accurate message reception
D. Higher power is needed as compared to RTTY for similar error rates
~~

G8C09 (A) 
What does the number 31 represent in "PSK31"?
A. The approximate transmitted symbol rate
B. The version of the PSK protocol
C. The year in which PSK31 was invented
D. The number of characters that can be represented by PSK31
~~

G8C10 (C) 
How does forward error correction (FEC) allow the receiver to correct errors in received data packets?
A. By controlling transmitter output power for optimum signal strength
B. By using the varicode character set
C. By transmitting redundant information with the data
D. By using a parity bit with each character
~~

G8C11 (D)  
How are the two separate frequencies of a Frequency Shift Keyed (FSK) signal identified?
A. Dot and Dash
B. On and Off
C. High and Low
D. Mark and Space
~~

G8C12 (A)  
Which type of code is used for sending characters in a PSK31 signal?
A. Varicode
B. Viterbi
C. Volumetric
D. Binary
~~


SUBELEMENT G9 – ANTENNAS AND FEED LINES [4 Exam Questions – 4 Groups]


G9A - Antenna feed lines: characteristic impedance, and attenuation; SWR calculation, measurement and effects; matching networks 

G9A01 (A)
Which of the following factors determine the characteristic impedance of a parallel conductor antenna feed line?
A. The distance between the centers of the conductors and the radius of the conductors
B. The distance between the centers of the conductors and the length of the line
C. The radius of the conductors and the frequency of the signal
D. The frequency of the signal and the length of the line
~~

G9A02 (B)
What are the typical characteristic impedances of coaxial cables used for antenna feed lines at amateur stations?
A. 25 and 30 ohms
B. 50 and 75 ohms
C. 80 and 100 ohms
D. 500 and 750 ohms
~~

G9A03 (D)
What is the characteristic impedance of flat ribbon TV type twinlead?
A. 50 ohms
B. 75 ohms
C. 100 ohms
D. 300 ohms
~~

G9A04 (C)
What might cause reflected power at the point where a feed line connects to an antenna?
A. Operating an antenna at its resonant frequency
B. Using more transmitter power than the antenna can handle
C. A difference between feed line impedance and antenna feed point impedance
D. Feeding the antenna with unbalanced feed line
~~

G9A05 (B)
How does the attenuation of coaxial cable change as the frequency of the signal it is carrying increases?
A. Attenuation is independent of frequency
B. Attenuation increases
C. Attenuation decreases
D. Attenuation reaches a maximum at approximately 18 MHz
~~

G9A06 (D) 
In what units is RF feed line loss usually expressed?
A. Ohms per 1000 feet
B. Decibels per 1000 feet
C. Ohms per 100 feet
D. Decibels per 100 feet
~~

G9A07 (D)
What must be done to prevent standing waves on an antenna feed line?
A. The antenna feed point must be at DC ground potential
B. The feed line must be cut to a length equal to an odd number of electrical quarter wavelengths 
C. The feed line must be cut to a length equal to an even number of physical half wavelengths 
D. The antenna feed point impedance must be matched to the characteristic impedance of the feed line
~~

G9A08 (B)
If the SWR on an antenna feed line is 5 to 1, and a matching network at the transmitter end of the feed line is adjusted to 1 to 1 SWR, what is the resulting SWR on the feed line?
A. 1 to 1
B. 5 to 1
C. Between 1 to 1 and 5 to 1 depending on the characteristic impedance of the line
D. Between 1 to 1 and 5 to 1 depending on the reflected power at the transmitter
~~

G9A09 (A)
What standing wave ratio will result when connecting a 50 ohm feed line to a non-reactive load having 200 ohm impedance?
A. 4:1
B. 1:4
C. 2:1
D. 1:2
~~

G9A10 (D)
What standing wave ratio will result when connecting a 50 ohm feed line to a non-reactive load having 10 ohm impedance?
A. 2:1
B. 50:1
C. 1:5
D. 5:1
~~

G9A11 (B)
What standing wave ratio will result when connecting a 50 ohm feed line to a non-reactive load having 50 ohm impedance?
A. 2:1
B. 1:1
C. 50:50
D. 0:0
~~

G9A12 (A) 
What standing wave ratio will result when connecting a 50 ohm feed line to a non-reactive load having 25 ohm impedance?
A. 2:1
B. 2.5:1
C. 1.25:1
D. You cannot determine SWR from impedance values
~~

G9A13 (C)
What standing wave ratio will result when connecting a 50 ohm feed line to an antenna that has a purely resistive 300 ohm feed point impedance?
A. 1.5:1
B. 3:1
C. 6:1
D. You cannot determine SWR from impedance values
~~

G9A14 (B) 
What is the interaction between high standing wave ratio (SWR) and transmission line loss?
A. There is no interaction between transmission line loss and SWR
B. If a transmission line is lossy, high SWR will increase the loss 
C. High SWR makes it difficult to measure transmission line loss
D. High SWR reduces the relative effect of transmission line loss
~~

G9A15 (A) 
What is the effect of transmission line loss on SWR measured at the input to the line?
A.  The higher the transmission line loss, the more the SWR will read artificially low
B.  The higher the transmission line loss, the more the SWR will read artificially high
C.  The higher the transmission line loss, the more accurate the SWR measurement will be
D.  Transmission line loss does not affect the SWR measurement
~~


G9B - Basic antennas

G9B01 (B) 
What is one disadvantage of a directly fed random-wire HF antenna?
A. It must be longer than 1 wavelength 
B. You may experience RF burns when touching metal objects in your station 
C. It produces only vertically polarized radiation
D. It is more effective on the lower HF bands than on the higher bands 
~~

G9B02 (B) 
Which of the following is a common way to adjust the feed point impedance of a quarter wave ground plane vertical antenna to be approximately 50 ohms?
A. Slope the radials upward
B. Slope the radials downward
C. Lengthen the radials
D. Shorten the radials 
~~

G9B03 (B)
What happens to the feed point impedance of a ground plane antenna when its radials are changed from horizontal to sloping downward?
A. It decreases
B. It increases
C. It stays the same
D. It reaches a maximum at an angle of 45 degrees
~~

G9B04 (A) 
What is the radiation pattern of a dipole antenna in free space in the plane of the conductor?
A. It is a figure-eight at right angles to the antenna
B. It is a figure-eight off both ends of the antenna
C. It is a circle (equal radiation in all directions)
D. It has a pair of lobes on one side of the antenna and a single lobe on the other side
~~

G9B05 (C)
How does antenna height affect the horizontal (azimuthal) radiation pattern of a horizontal dipole HF antenna?
A. If the antenna is too high, the pattern becomes unpredictable
B. Antenna height has no effect on the pattern
C. If the antenna is less than 1/2 wavelength high, the azimuthal pattern is almost omnidirectional
D. If the antenna is less than 1/2 wavelength high, radiation off the ends of the wire is eliminated
~~

G9B06 (C) 
Where should the radial wires of a ground-mounted vertical antenna system be placed?
A. As high as possible above the ground
B. Parallel to the antenna element
C. On the surface of the Earth or buried a few inches below the ground
D. At the center of the antenna
~~

G9B07 (B)
How does the feed point impedance of a 1/2 wave dipole antenna change as the antenna is lowered below 1/4 wave above ground?
A. It steadily increases
B. It steadily decreases
C. It peaks at about 1/8 wavelength above ground
D. It is unaffected by the height above ground
~~

G9B08 (A)
How does the feed point impedance of a 1/2 wave dipole change as the feed point is moved from the center toward the ends?
A. It steadily increases
B. It steadily decreases
C. It peaks at about 1/8 wavelength from the end
D. It is unaffected by the location of the feed point
~~

G9B09 (A) 
Which of the following is an advantage of a horizontally polarized as compared to a vertically polarized HF antenna?
A. Lower ground reflection losses 
B. Lower feed point impedance
C. Shorter Radials
D. Lower radiation resistance 
~~

G9B10 (D)
What is the approximate length for a 1/2 wave dipole antenna cut for 14.250 MHz?
A. 8 feet
B. 16 feet
C. 24 feet
D. 32 feet
~~

G9B11 (C)
What is the approximate length for a 1/2 wave dipole antenna cut for 3.550 MHz?
A. 42 feet
B. 84 feet
C. 131 feet
D. 263 feet
~~

G9B12 (A)
What is the approximate length for a 1/4 wave vertical antenna cut for 28.5 MHz?
A. 8 feet
B. 11 feet
C. 16 feet
D. 21 feet
~~


G9C - Directional antennas

G9C01 (A)  
Which of the following would increase the bandwidth of a Yagi antenna?
A. Larger diameter elements
B. Closer element spacing
C. Loading coils in series with the element
D. Tapered-diameter elements
~~

G9C02 (B)
What is the approximate length of the driven element of a Yagi antenna?
A. 1/4 wavelength
B. 1/2 wavelength
C. 3/4 wavelength
D. 1 wavelength
~~

G9C03 (B) 
Which statement about a three-element, single-band Yagi antenna is true?
A. The reflector is normally the shortest element
B. The director is normally the shortest element
C. The driven element is the longest element
D. Low feed point impedance increases bandwidth
~~

G9C04 (A)  
Which statement about a three-element, single-band Yagi antenna is true?
A. The reflector is normally the longest element
B. The director is normally the longest element 
C. The reflector is normally the shortest element
D. All of the elements must be the same length
~~

G9C05 (A)   
How does increasing boom length and adding directors affect a Yagi antenna?
A. Gain increases
B. Beamwidth increases
C. Front to back ratio decreases 
D. Front to side ratio decreases
~~

G9C06 (D) 
What configuration of the loops of a two-element quad antenna must be used for the antenna to operate as a beam antenna, assuming one of the elements is used as a reflector? 
A. The driven element must be fed with a balun transformer
B. There must be an open circuit in the driven element at the point opposite the feed point
C. The reflector element must be approximately 5 percent shorter than the driven element
D. The reflector element must be approximately 5 percent longer than the driven element
~~

G9C07 (C)
What does "front-to-back ratio" mean in reference to a Yagi antenna?
A. The number of directors versus the number of reflectors
B. The relative position of the driven element with respect to the reflectors and directors
C. The power radiated in the major radiation lobe compared to the power radiated in exactly the opposite direction
D. The ratio of forward gain to dipole gain
~~

G9C08 (D)
What is meant by the "main lobe" of a directive antenna?
A. The magnitude of the maximum vertical angle of radiation
B. The point of maximum current in a radiating antenna element
C. The maximum voltage standing wave point on a radiating element
D. The direction of maximum radiated field strength from the antenna
~~

G9C09 (B) 
How does the gain of two 3-element horizontally polarized Yagi antennas spaced vertically 1/2 wavelength apart typically compare to the gain of a single 3-element Yagi?
A. Approximately 1.5 dB higher
B. Approximately 3 dB higher
C. Approximately 6 dB higher
D. Approximately 9 dB higher
~~

G9C10 (D)
Which of the following is a Yagi antenna design variable that could be adjusted to optimize forward gain, front-to-back ratio, or SWR bandwidth? 
A. The physical length of the boom
B. The number of elements on the boom
C. The spacing of each element along the boom
D. All of these choices are correct
~~

G9C11 (A) 
What is the purpose of a gamma match used with Yagi antennas?
A. To match the relatively low feed point impedance to 50 ohms
B. To match the relatively high feed point impedance to 50 ohms
C. To increase the front-to-back ratio
D. To increase the main lobe gain
~~

G9C12 (A)
Which of the following is an advantage of using a gamma match for impedance matching of a Yagi antenna to 50 ohm coax feed line?
A. It does not require that the elements be insulated from the boom
B. It does not require any inductors or capacitors
C. It is useful for matching multiband antennas
D. All of these choices are correct
~~

G9C13 (A)
Approximately how long is each side of the driven element of a quad antenna?
A. 1/4 wavelength
B. 1/2 wavelength
C. 3/4 wavelength
D. 1 wavelength
~~

G9C14 (B)
How does the forward gain of a two-element quad antenna compare to the forward gain of a three-element Yagi antenna?
A. About 2/3 as much
B. About the same
C. About 1.5 times as much
D. About twice as much 
~~

G9C15 (B)
Approximately how long is each side of the reflector element of a quad antenna?
A. Slightly less than 1/4 wavelength
B. Slightly more than 1/4 wavelength
C. Slightly less than 1/2 wavelength
D. Slightly more than 1/2 wavelength
~~

G9C16 (D)
How does the gain of a two-element delta-loop beam compare to the gain of a two-element quad antenna?
A. 3 dB higher
B. 3 dB lower
C. 2.54 dB higher
D. About the same
~~

G9C17 (B)  
Approximately how long is each leg of a symmetrical delta-loop antenna?
A. 1/4 wavelength
B. 1/3 wavelength
C. 1/2 wavelength
D. 2/3 wavelength
~~

G9C18 (A) 
What happens when the feed point of a quad antenna of any shape is moved from the midpoint of the top or bottom to the midpoint of either side?
A. The polarization of the radiated signal changes from horizontal to vertical
B. The polarization of the radiated signal changes from vertical to horizontal
C. There is no change in polarization
D. The radiated signal becomes circularly polarized
~~

G9C19 (B)  
How does antenna gain stated in dBi compare to gain stated in dBd for the same antenna?
A. dBi gain figures are 2.15 dB lower then dBd gain figures
B. dBi gain figures are 2.15 dB higher than dBd gain figures
C. dBi gain figures are the same as the square root of dBd gain figures multiplied by 2.15
D. dBi gain figures are the reciprocal of dBd gain figures + 2.15 dB
~~

G9C20 (A)  
What is meant by the terms dBi and dBd when referring to antenna gain?
A. dBi refers to an isotropic antenna, dBd refers to a dipole antenna
B. dBi refers to an ionospheric reflecting antenna, dBd refers to a dissipative antenna
C. dBi refers to an inverted-vee antenna, dBd refers to a downward reflecting antenna
D. dBi refers to an isometric antenna, dBd refers to a discone antenna 
~~


G9D - Specialized antennas

G9D01 (D)
What does the term NVIS mean as related to antennas?
A. Nearly Vertical Inductance System
B. Non-Varying Indicated SWR
C. Non-Varying Impedance Smoothing
D. Near Vertical Incidence sky-wave
~~

G9D02 (B)  
Which of the following is an advantage of an NVIS antenna?
A. Low vertical angle radiation for working stations out to ranges of several thousand kilometers
B. High vertical angle radiation for working stations within a radius of a few hundred kilometers
C. High forward gain
D. All of these choices are correct 
~~

G9D03 (D)  
At what height above ground is an NVIS antenna typically installed?
A. As close to 1/2 wavelength as possible
B. As close to one wavelength as possible
C. Height is not critical as long as it is significantly more than 1/2 wavelength
D. Between 1/10 and 1/4 wavelength
~~

G9D04 (A) 
What is the primary purpose of antenna traps?
A. To permit multiband operation
B. To notch spurious frequencies
C. To provide balanced feed point impedance
D. To prevent out of band operation
~~

G9D05 (D) 
What is an advantage of vertical stacking of horizontally polarized Yagi antennas?
A. It allows quick selection of vertical or horizontal polarization
B. It allows simultaneous vertical and horizontal polarization
C. It narrows the main lobe in azimuth
D. It narrows the main lobe in elevation
~~

G9D06 (A)
Which of the following is an advantage of a log periodic antenna?
A. Wide bandwidth
B. Higher gain per element than a Yagi antenna
C. Harmonic suppression
D. Polarization diversity
~~

G9D07 (A)
Which of the following describes a log periodic antenna?
A. Length and spacing of the elements increase logarithmically from one end of the boom to the other
B. Impedance varies periodically as a function of frequency
C. Gain varies logarithmically as a function of frequency
D. SWR varies periodically as a function of boom length
~~

G9D08 (B)  
Why is a Beverage antenna not used for transmitting?
A. Its impedance is too low for effective matching
B. It has high losses compared to other types of antennas
C. It has poor directivity
D. All of these choices are correct
~~

G9D09 (B)   
Which of the following is an application for a Beverage antenna?
A. Directional transmitting for low HF bands
B. Directional receiving for low HF bands
C. Portable direction finding at higher HF frequencies
D. Portable direction finding at lower HF frequencies
~~

G9D10 (D)  
Which of the following describes a Beverage antenna?
A. A vertical antenna
B. A broad-band mobile antenna 
C. A helical antenna for space reception
D. A very long and low directional receiving antenna
~~

G9D11 (D)
Which of the following is a disadvantage of multiband antennas?
A. They present low impedance on all design frequencies
B. They must be used with an antenna tuner
C. They must be fed with open wire line
D. They have poor harmonic rejection
~~


SUBELEMENT G0 – ELECTRICAL AND RF SAFETY [2 Exam Questions – 2 Groups]


G0A - RF safety principles, rules and guidelines; routine station evaluation

G0A01 (A)
What is one way that RF energy can affect human body tissue?
A. It heats body tissue
B. It causes radiation poisoning
C. It causes the blood count to reach a dangerously low level
D. It cools body tissue
~~

G0A02 (D)
Which of the following properties is important in estimating whether an RF signal exceeds the maximum permissible exposure (MPE)?
A. Its duty cycle
B. Its frequency
C. Its power density
D. All of these choices are correct
~~

G0A03 (D) [97.13(c)(1)]
How can you determine that your station complies with FCC RF exposure regulations?
A. By calculation based on FCC OET Bulletin 65
B. By calculation based on computer modeling
C. By measurement of field strength using calibrated equipment
D. All of these choices are correct
~~

G0A04 (D) 
What does "time averaging" mean in reference to RF radiation exposure?
A. The average amount of power developed by the transmitter over a specific 24 hour period 
B. The average time it takes RF radiation to have any long-term effect on the body 
C. The total time of the exposure
D. The total RF exposure averaged over a certain time
~~

G0A05 (A)
What must you do if an evaluation of your station shows RF energy radiated from your station exceeds permissible limits?
A. Take action to prevent human exposure to the excessive RF fields
B. File an Environmental Impact Statement (EIS-97) with the FCC
C. Secure written permission from your neighbors to operate above the controlled MPE limits
D. All of these choices are correct
~~

G0A06 (D) 
What precaution should be taken when installing a ground-mounted antenna?
A. It should not be installed higher than you can reach
B. It should not be installed in a wet area
C. It should limited to 10 feet in height
D. It should be installed such that it is protected against unauthorized access
~~

G0A07 (A)  
What effect does transmitter duty cycle have when evaluating RF exposure? 
A. A lower transmitter duty cycle permits greater short-term exposure levels
B. A higher transmitter duty cycle permits greater short-term exposure levels
C. Low duty cycle transmitters are exempt from RF exposure evaluation requirements
D. High duty cycle transmitters are exempt from RF exposure requirements 
~~

G0A08 (C) 
Which of the following steps must an amateur operator take to ensure compliance with RF safety regulations when transmitter power exceeds levels specified in FCC Part 97.13?
A. Post a copy of FCC Part 97.13 in the station
B. Post a copy of OET Bulletin 65 in the station
C. Perform a routine RF exposure evaluation
D. All of these choices are correct
~~

G0A09 (B) 
What type of instrument can be used to accurately measure an RF field?
A. A receiver with an S meter
B. A calibrated field strength meter with a calibrated antenna
C. An SWR meter with a peak-reading function 
D. An oscilloscope with a high-stability crystal marker generator
~~

G0A10 (D) 
What is one thing that can be done if evaluation shows that a neighbor might receive more than the allowable limit of RF exposure from the main lobe of a directional antenna?
A. Change to a non-polarized antenna with higher gain 
B. Post a warning sign that is clearly visible to the neighbor 
C. Use an antenna with a higher front-to-back ratio
D. Take precautions to ensure that the antenna cannot be pointed in their direction
~~

G0A11 (C)
What precaution should you take if you install an indoor transmitting antenna?
A. Locate the antenna close to your operating position to minimize feed line radiation
B. Position the antenna along the edge of a wall to reduce parasitic radiation
C. Make sure that MPE limits are not exceeded in occupied areas
D. Make sure the antenna is properly shielded
~~

G0A12 (B) 
What precaution should you take whenever you make adjustments or repairs to an antenna?
A. Ensure that you and the antenna structure are grounded
B. Turn off the transmitter and disconnect the feed line
C. Wear a radiation badge
D. All of these choices are correct
~~


G0B - Safety in the ham shack: electrical shock and treatment, safety grounding, fusing, interlocks, wiring, antenna and tower safety

G0B01 (A) 
Which wire or wires in a four-conductor connection should be attached to fuses or circuit breakers in a device operated from a 240 VAC single phase source?
A. Only the two wires carrying voltage 
B. Only the neutral wire
C. Only the ground wire
D. All wires
~~

G0B02 (C)
What is the minimum wire size that may be safely used for a circuit that draws up to 20 amperes of continuous current?
A. AWG number 20
B. AWG number 16
C. AWG number 12
D. AWG number 8
~~

G0B03 (D)
Which size of fuse or circuit breaker would be appropriate to use with a circuit that uses AWG number 14 wiring? 
A. 100 amperes
B. 60 amperes
C. 30 amperes
D. 15 amperes
~~

G0B04 (A) 
Which of the following is a primary reason for not placing a gasoline-fueled generator inside an occupied area?
A. Danger of carbon monoxide poisoning
B. Danger of engine over torque
C. Lack of oxygen for adequate combustion
D. Lack of nitrogen for adequate combustion
~~

G0B05 (B) 
Which of the following conditions will cause a Ground Fault Circuit Interrupter (GFCI) to disconnect the 120 or 240 Volt AC line power to a device?
A. Current flowing from one or more of the voltage-carrying wires to the neutral wire
B. Current flowing from one or more of the voltage-carrying wires directly to ground
C. Overvoltage on the voltage-carrying wires
D. All of these choices are correct
~~

G0B06 (D)
Why must the metal enclosure of every item of station equipment be grounded?
A. It prevents a blown fuse in the event of an internal short circuit
B. It prevents signal overload
C. It ensures that the neutral wire is grounded
D. It ensures that hazardous voltages cannot appear on the chassis
~~

G0B07 (B) 
Which of these choices should be observed when climbing a tower using a safety belt or harness?
A. Never lean back and rely on the belt alone to support your weight
B. Confirm that the belt is rated for the weight of the climber and that it is within its allowable service life
C. Ensure that all heavy tools are securely fastened to the belt D-ring
D. All of these choices are correct
~~

G0B08 (B)
What should be done by any person preparing to climb a tower that supports electrically powered devices?
A. Notify the electric company that a person will be working on the tower
B. Make sure all circuits that supply power to the tower are locked out and tagged
C. Unground the base of the tower
D. All of these choices are correct
~~

G0B09 (D)
Why should soldered joints not be used with the wires that connect the base of a tower to a system of ground rods?
A. The resistance of solder is too high
B. Solder flux will prevent a low conductivity connection
C. Solder has too high a dielectric constant to provide adequate lightning protection
D. A soldered joint will likely be destroyed by the heat of a lightning strike
~~

G0B10 (A) 
Which of the following is a danger from lead-tin solder?
A. Lead can contaminate food if hands are not washed carefully after handling the solder
B. High voltages can cause lead-tin solder to disintegrate suddenly
C. Tin in the solder can "cold flow" causing shorts in the circuit
D. RF energy can convert the lead into a poisonous gas
~~

G0B11 (D) 
Which of the following is good practice for lightning protection grounds?
A. They must be bonded to all buried water and gas lines
B. Bends in ground wires must be made as close as possible to a right angle
C. Lightning grounds must be connected to all ungrounded wiring
D. They must be bonded together with all other grounds
~~

G0B12 (C) 
What is the purpose of a power supply interlock?
A. To prevent unauthorized changes to the circuit that would void the manufacturer’s warranty
B. To shut down the unit if it becomes too hot
C. To ensure that dangerous voltages are removed if the cabinet is opened
D. To shut off the power supply if too much voltage is produced
~~

G0B13 (A)
What must you do when powering your house from an emergency generator?
A. Disconnect the incoming utility power feed
B. Insure that the generator is not grounded
C. Insure that all lightning grounds are disconnected
D. All of these choices are correct
~~

G0B14 (C)
Which of the following is covered by the National Electrical Code?
A. Acceptable bandwidth limits
B. Acceptable modulation limits 
C. Electrical safety inside the ham shack
D. RF exposure limits of the human body
~~

G0B15 (A)  
Which of the following is true of an emergency generator installation?
A. The generator should be located in a well-ventilated area 
B. The generator must be insulated from ground
C. Fuel should be stored near the generator for rapid refueling in case of an emergency
D. All of these choices are correct
~~
`;


/***/ }),

/***/ "./src/data/data.ts":
/*!**************************!*\
  !*** ./src/data/data.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import { techPool } from './TechPool';
const GeneralPool_1 = __webpack_require__(/*! ./GeneralPool */ "./src/data/GeneralPool.ts");
function getData() {
    return parseAll(GeneralPool_1.generalPool);
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
    if (text == undefined || text.trim() == '') {
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