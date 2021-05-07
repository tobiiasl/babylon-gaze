(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/tln/git/babylon-gaze/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4QRZ":
    /*!********************************************!*\
      !*** ./src/app/engine/engine.component.ts ***!
      \********************************************/

    /*! exports provided: EngineComponent */

    /***/
    function QRZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EngineComponent", function () {
        return EngineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./engine.service */
      "eW6i");

      var _c0 = ["rendererCanvas"];

      var EngineComponent = /*#__PURE__*/function () {
        function EngineComponent(engServ) {
          _classCallCheck(this, EngineComponent);

          this.engServ = engServ;
        }

        _createClass(EngineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname;
            var host = path.split('/').pop();

            if (host.length === 0) {
              console.error('No RU host name specified. Add e.g. /tg03b-080200100361.local or /192.168.75.51 to the url ');
            }

            console.log("Connecting to \"".concat(host, "\""));
            this.engServ.createScene(this.rendererCanvas, host);
            this.engServ.animate();
          }
        }]);

        return EngineComponent;
      }();

      EngineComponent.ɵfac = function EngineComponent_Factory(t) {
        return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]));
      };

      EngineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EngineComponent,
        selectors: [["app-engine"]],
        viewQuery: function EngineComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
          }
        },
        decls: 3,
        vars: 0,
        consts: [[1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""]],
        template: function EngineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        version: __webpack_require__(
        /*! ../../package.json */
        "kiQV").version
      };
      /***/
    },

    /***/
    "BeKh":
    /*!***************************************!*\
      !*** ./src/app/mock/document.mock.ts ***!
      \***************************************/

    /*! exports provided: DocumentMock */

    /***/
    function BeKh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentMock", function () {
        return DocumentMock;
      });

      var DocumentMock = /*#__PURE__*/function (_Document) {
        _inherits(DocumentMock, _Document);

        var _super = _createSuper(DocumentMock);

        function DocumentMock() {
          var _this;

          _classCallCheck(this, DocumentMock);

          _this = _super.apply(this, arguments);
          _this.readyState = 'loading';
          return _this;
        }

        return DocumentMock;
      }( /*#__PURE__*/_wrapNativeSuper(Document));
      /***/

    },

    /***/
    "J5iR":
    /*!*************************************!*\
      !*** ./src/app/mock/window.mock.ts ***!
      \*************************************/

    /*! exports provided: WindowMock */

    /***/
    function J5iR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowMock", function () {
        return WindowMock;
      });
      /* harmony import */


      var _document_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./document.mock */
      "BeKh");
      /* harmony import */


      var _storage_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.mock */
      "XgZI");

      var WindowMock = /*#__PURE__*/function (_Window) {
        _inherits(WindowMock, _Window);

        var _super2 = _createSuper(WindowMock);

        function WindowMock() {
          var _this2;

          _classCallCheck(this, WindowMock);

          _this2 = _super2.apply(this, arguments);
          _this2.document = new _document_mock__WEBPACK_IMPORTED_MODULE_0__["DocumentMock"]();
          _this2.localStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__["StorageMock"]();
          _this2.sessionStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__["StorageMock"]();
          return _this2;
        }

        return WindowMock;
      }( /*#__PURE__*/_wrapNativeSuper(Window));
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _engine_engine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./engine/engine.component */
      "4QRZ");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-engine");
          }
        },
        directives: [_engine_engine_component__WEBPACK_IMPORTED_MODULE_1__["EngineComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "XgZI":
    /*!**************************************!*\
      !*** ./src/app/mock/storage.mock.ts ***!
      \**************************************/

    /*! exports provided: StorageMock */

    /***/
    function XgZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageMock", function () {
        return StorageMock;
      });

      var StorageMock = /*#__PURE__*/function () {
        function StorageMock() {
          _classCallCheck(this, StorageMock);

          this.length = 0;
        }

        _createClass(StorageMock, [{
          key: "clear",
          value: function clear() {
            return null;
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return null;
          }
        }, {
          key: "key",
          value: function key(index) {
            return null;
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            return null;
          }
        }, {
          key: "setItem",
          value: function setItem(key, value) {
            return null;
          }
        }]);

        return StorageMock;
      }();
      /***/

    },

    /***/
    "Y0XY":
    /*!*************************!*\
      !*** ./src/app/gaze.ts ***!
      \*************************/

    /*! exports provided: getGaze */

    /***/
    function Y0XY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGaze", function () {
        return getGaze;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var getGaze = function getGaze(host) {
        var ws = new WebSocket("ws://".concat(host, "/websocket"), 'g3api');
        var gaze$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var keepaliveMsg = JSON.stringify({
          method: 'POST',
          id: 2,
          path: '//rudimentary!keepalive',
          'body': []
        });
        var intervalId;
        ws.addEventListener('open', function () {
          ws.send(JSON.stringify({
            method: 'POST',
            id: 1,
            path: '//rudimentary:gaze',
            body: null
          }));
          var signalId;
          ws.addEventListener('close', function () {
            clearInterval(intervalId);
          });
          ws.addEventListener('message', function (msg2) {
            signalId = JSON.parse(msg2.data)['body'];
            intervalId = setInterval(function () {
              return ws.send(keepaliveMsg);
            }, 3000);
            ws.addEventListener('message', function (msg) {
              var data = JSON.parse(msg.data);

              if (data.signal === signalId) {
                gaze$.next(data.body[1]);
              }
            });
          }, {
            once: true
          });
        });
        return gaze$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (obj) {
          return Object.keys(obj).length > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (gaze) {
          return gaze.gaze3d;
        }));
      };
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/window-ref.service */
      "axyF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _engine_engine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./engine/engine.component */
      "4QRZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__["WindowRefService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_4__["EngineComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "axyF":
    /*!************************************************!*\
      !*** ./src/app/services/window-ref.service.ts ***!
      \************************************************/

    /*! exports provided: WindowRefService */

    /***/
    function axyF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowRefService", function () {
        return WindowRefService;
      });
      /* harmony import */


      var _mock_window_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../mock/window.mock */
      "J5iR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var getWindow = function getWindow() {
        return window != null ? window : new _mock_window_mock__WEBPACK_IMPORTED_MODULE_0__["WindowMock"]();
      };

      var WindowRefService = /*#__PURE__*/function () {
        function WindowRefService() {
          _classCallCheck(this, WindowRefService);

          this.windowObject = getWindow();
        }

        _createClass(WindowRefService, [{
          key: "window",
          get: function get() {
            return this.windowObject;
          }
        }, {
          key: "document",
          get: function get() {
            return this.window.document;
          }
        }, {
          key: "localStore",
          get: function get() {
            return this.window.localStorage;
          }
        }, {
          key: "sessionStorage",
          get: function get() {
            return this.window.sessionStorage;
          }
        }]);

        return WindowRefService;
      }();

      WindowRefService.ɵfac = function WindowRefService_Factory(t) {
        return new (t || WindowRefService)();
      };

      WindowRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: WindowRefService,
        factory: WindowRefService.ɵfac
      });
      /***/
    },

    /***/
    "eW6i":
    /*!******************************************!*\
      !*** ./src/app/engine/engine.service.ts ***!
      \******************************************/

    /*! exports provided: EngineService */

    /***/
    function eW6i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EngineService", function () {
        return EngineService;
      });
      /* harmony import */


      var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../services/window-ref.service */
      "axyF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @babylonjs/core */
      "v5Mq");
      /* harmony import */


      var _gaze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../gaze */
      "Y0XY");

      var EngineService = /*#__PURE__*/function () {
        function EngineService(ngZone, windowRef) {
          _classCallCheck(this, EngineService);

          this.ngZone = ngZone;
          this.windowRef = windowRef;
        }

        _createClass(EngineService, [{
          key: "createScene",
          value: function createScene(canvas, host) {
            var _this3 = this;

            // The first step is to get the reference of the canvas element    from our HTML document
            this.canvas = canvas.nativeElement; // Then, load the Babylon 3D engine:

            this.engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Engine"](this.canvas, true); // This creates a basic Babylon Scene object (non-mesh)

            this.scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Scene"](this.engine); // This creates and positions a free camera (non-mesh)

            this.camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["FreeCamera"]("camera1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -20), this.scene); // This targets the camera to scene origin

            this.camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Zero()); // This attaches the camera to the canvas

            this.camera.attachControl(canvas, true); // This creates a light, aiming 0,1,0 - to the sky (non-mesh)

            var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["HemisphericLight"]("light1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-1, 1, -1), this.scene); // Default intensity is 1. Let's dim the light a small amount

            light.intensity = 1;
            var eyes1 = this.createEyePair(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"](0, 0.85, 1), this.scene);
            this.eyesSetPosition(eyes1, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
            var flyposition = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -10);
            var scaleFactor = 1.7 / 59;
            Object(_gaze__WEBPACK_IMPORTED_MODULE_3__["getGaze"])(host).subscribe(function (gaze) {
              flyposition = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](gaze[0], gaze[1], -gaze[2]).scale(scaleFactor);
            });
            var index = 0;
            setInterval(function () {
              index++;
              var speed = 0.3;

              _this3.eyesLookAt(eyes1, flyposition);
            }, 1000 / 60);
          }
        }, {
          key: "eyesSetPosition",
          value: function eyesSetPosition(eyes, position) {
            var origoDistance = Math.abs(eyes.left.position.x - eyes.right.position.x);
            var leftX = position.x - origoDistance / 2;
            var rightX = position.x + origoDistance / 2;
            eyes.left.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](leftX, position.y, position.z);
            eyes.right.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](rightX, position.y, position.z);
          }
        }, {
          key: "eyesLookAt",
          value: function eyesLookAt(eyes, point) {
            this.eyeLookAt(eyes.left, point);
            this.eyeLookAt(eyes.right, point);
          }
        }, {
          key: "eyeLookAt",
          value: function eyeLookAt(eye, point) {
            var gazeVector = point.subtract(eye.position);
            var alpha = Math.atan2(gazeVector.y, -gazeVector.z);
            var beta = Math.atan2(gazeVector.x, -gazeVector.z);
            eye.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](alpha, -beta);
          }
        }, {
          key: "createEye",
          value: function createEye(color, radius, scene) {
            var eyeball = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateSphere("eyeball", {
              diameter: 2 * radius,
              segments: 16
            }, scene); // const eyeballmaterial = new CellMaterial("eyeballmaterial", scene);


            var eyeballmaterial = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("eyeballmaterial", scene);
            eyeballmaterial.diffuseColor = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"].White();
            eyeball.material = eyeballmaterial;

            var iris = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateSphere("pupil", {
              diameter: 2 * 0.4 * radius,
              segments: 8
            }, scene);

            iris.position.z = -radius * .97;
            iris.scaling.z = 0.05; // Make it flat

            var irismaterial = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("irismaterial", scene);
            irismaterial.diffuseColor = color;
            iris.material = irismaterial;

            var pupil = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateSphere("pupil", {
              diameter: 2 * 0.2 * radius,
              segments: 16
            }, scene);

            pupil.position.z = -radius * 1;
            pupil.scaling.z = 0.1; // Make it flat

            var pupilmaterial = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("pupilmaterial", scene);
            pupilmaterial.disableLighting = true;
            pupilmaterial.diffuseColor = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"].Black();
            pupil.material = pupilmaterial;

            var eye = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Mesh"].MergeMeshes([eyeball, iris, pupil], true, true, undefined, false, true);

            return eye;
          }
        }, {
          key: "createEyePair",
          value: function createEyePair(color, scene) {
            var radius = 1;
            var left = this.createEye(color, radius, scene);
            var right = this.createEye(color, radius, scene);
            var distanceBetweenEyes = 1.7 * radius;
            left.position.x = -distanceBetweenEyes;
            right.position.x = distanceBetweenEyes;
            return {
              left: left,
              right: right
            };
          }
        }, {
          key: "animate",
          value: function animate() {
            var _this4 = this;

            // We have to run this outside angular zones,
            // because it could trigger heavy changeDetection cycles.
            this.ngZone.runOutsideAngular(function () {
              var rendererLoopCallback = function rendererLoopCallback() {
                _this4.scene.render();
              };

              if (_this4.windowRef.document.readyState !== 'loading') {
                _this4.engine.runRenderLoop(rendererLoopCallback);
              } else {
                _this4.windowRef.window.addEventListener('DOMContentLoaded', function () {
                  _this4.engine.runRenderLoop(rendererLoopCallback);
                });
              }

              _this4.windowRef.window.addEventListener('resize', function () {
                _this4.engine.resize();
              });
            });
          }
        }]);

        return EngineService;
      }();

      EngineService.ɵfac = function EngineService_Factory(t) {
        return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__["WindowRefService"]));
      };

      EngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EngineService,
        factory: EngineService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "kiQV":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */

    /***/
    function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"babylon-gaze\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build:both\":\"npm run build && npm run build:prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.2.5\",\"@angular/common\":\"~11.2.5\",\"@angular/compiler\":\"~11.2.5\",\"@angular/core\":\"~11.2.5\",\"@angular/forms\":\"~11.2.5\",\"@angular/platform-browser\":\"~11.2.5\",\"@angular/platform-browser-dynamic\":\"~11.2.5\",\"@angular/router\":\"~11.2.5\",\"@babylonjs/core\":\"~4.2.0\",\"babylonjs-materials\":\"^4.2.0\",\"bootstrap\":\"^4.6.0\",\"rxjs\":\"~6.6.6\",\"tslib\":\"^2.1.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1102.4\",\"@angular/cli\":\"~11.2.4\",\"@angular/compiler-cli\":\"~11.2.5\",\"@angular/language-service\":\"~11.2.5\",\"@types/jasmine\":\"~3.6.6\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^14.14.34\",\"codelyzer\":\"^6.0.1\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"karma\":\"~6.2.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~9.1.1\",\"tslint\":\"~6.1.3\",\"typescript\":\"~4.1.5\"}}");
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map