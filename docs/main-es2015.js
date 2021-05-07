(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tln/git/babylon-gaze/src/main.ts */"zUnb");


/***/ }),

/***/ "4QRZ":
/*!********************************************!*\
  !*** ./src/app/engine/engine.component.ts ***!
  \********************************************/
/*! exports provided: EngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineComponent", function() { return EngineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.service */ "eW6i");




const _c0 = ["rendererCanvas"];
class EngineComponent {
    constructor(engServ) {
        this.engServ = engServ;
    }
    ngOnInit() {
        const path = window.location.pathname;
        const host = path.split('/').pop();
        if (host.length === 0) {
            console.error('No RU host name specified. Add e.g. /tg03b-080200100361.local or /192.168.75.51 to the url ');
        }
        console.log(`Connecting to "${host}"`);
        this.engServ.createScene(this.rendererCanvas, host);
        this.engServ.animate();
    }
}
EngineComponent.ɵfac = function EngineComponent_Factory(t) { return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"])); };
EngineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineComponent, selectors: [["app-engine"]], viewQuery: function EngineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
    } }, decls: 3, vars: 0, consts: [[1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""]], template: function EngineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    version: __webpack_require__(/*! ../../package.json */ "kiQV").version
};


/***/ }),

/***/ "BeKh":
/*!***************************************!*\
  !*** ./src/app/mock/document.mock.ts ***!
  \***************************************/
/*! exports provided: DocumentMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentMock", function() { return DocumentMock; });
class DocumentMock extends Document {
    constructor() {
        super(...arguments);
        this.readyState = 'loading';
    }
}


/***/ }),

/***/ "J5iR":
/*!*************************************!*\
  !*** ./src/app/mock/window.mock.ts ***!
  \*************************************/
/*! exports provided: WindowMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowMock", function() { return WindowMock; });
/* harmony import */ var _document_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.mock */ "BeKh");
/* harmony import */ var _storage_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.mock */ "XgZI");


class WindowMock extends Window {
    constructor() {
        super(...arguments);
        this.document = new _document_mock__WEBPACK_IMPORTED_MODULE_0__["DocumentMock"]();
        this.localStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__["StorageMock"]();
        this.sessionStorage = new _storage_mock__WEBPACK_IMPORTED_MODULE_1__["StorageMock"]();
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/engine.component */ "4QRZ");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-engine");
    } }, directives: [_engine_engine_component__WEBPACK_IMPORTED_MODULE_1__["EngineComponent"]], encapsulation: 2 });


/***/ }),

/***/ "XgZI":
/*!**************************************!*\
  !*** ./src/app/mock/storage.mock.ts ***!
  \**************************************/
/*! exports provided: StorageMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageMock", function() { return StorageMock; });
class StorageMock {
    constructor() {
        this.length = 0;
    }
    clear() { return null; }
    getItem(key) { return null; }
    key(index) { return null; }
    removeItem(key) { return null; }
    setItem(key, value) { return null; }
}


/***/ }),

/***/ "Y0XY":
/*!*************************!*\
  !*** ./src/app/gaze.ts ***!
  \*************************/
/*! exports provided: getGaze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaze", function() { return getGaze; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


const getGaze = function (host) {
    const ws = new WebSocket(`ws://${host}/websocket`, 'g3api');
    const gaze$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    const keepaliveMsg = JSON.stringify({ method: 'POST', id: 2, path: '//rudimentary!keepalive', 'body': [] });
    let intervalId;
    ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ method: 'POST', id: 1, path: '//rudimentary:gaze', body: null }));
        let signalId;
        ws.addEventListener('close', () => {
            clearInterval(intervalId);
        });
        ws.addEventListener('message', (msg2) => {
            signalId = JSON.parse(msg2.data)['body'];
            intervalId = setInterval(() => ws.send(keepaliveMsg), 3000);
            ws.addEventListener('message', (msg) => {
                const data = JSON.parse(msg.data);
                if (data.signal === signalId) {
                    gaze$.next(data.body[1]);
                }
            });
        }, { once: true });
    });
    return gaze$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((obj) => Object.keys(obj).length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((gaze) => gaze.gaze3d));
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/window-ref.service */ "axyF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/engine.component */ "4QRZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__["WindowRefService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _engine_engine_component__WEBPACK_IMPORTED_MODULE_4__["EngineComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "axyF":
/*!************************************************!*\
  !*** ./src/app/services/window-ref.service.ts ***!
  \************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _mock_window_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/window.mock */ "J5iR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


const getWindow = () => window != null ? window : new _mock_window_mock__WEBPACK_IMPORTED_MODULE_0__["WindowMock"]();
class WindowRefService {
    constructor() {
        this.windowObject = getWindow();
    }
    get window() {
        return this.windowObject;
    }
    get document() {
        return this.window.document;
    }
    get localStore() {
        return this.window.localStorage;
    }
    get sessionStorage() {
        return this.window.sessionStorage;
    }
}
WindowRefService.ɵfac = function WindowRefService_Factory(t) { return new (t || WindowRefService)(); };
WindowRefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WindowRefService, factory: WindowRefService.ɵfac });


/***/ }),

/***/ "eW6i":
/*!******************************************!*\
  !*** ./src/app/engine/engine.service.ts ***!
  \******************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/window-ref.service */ "axyF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core */ "v5Mq");
/* harmony import */ var _gaze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gaze */ "Y0XY");






class EngineService {
    constructor(ngZone, windowRef) {
        this.ngZone = ngZone;
        this.windowRef = windowRef;
    }
    createScene(canvas, host) {
        // The first step is to get the reference of the canvas element    from our HTML document
        this.canvas = canvas.nativeElement;
        // Then, load the Babylon 3D engine:
        this.engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Engine"](this.canvas, true);
        // This creates a basic Babylon Scene object (non-mesh)
        this.scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Scene"](this.engine);
        // This creates and positions a free camera (non-mesh)
        this.camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["FreeCamera"]("camera1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -20), this.scene);
        // This targets the camera to scene origin
        this.camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Zero());
        // This attaches the camera to the canvas
        this.camera.attachControl(canvas, true);
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["HemisphericLight"]("light1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-1, 1, -1), this.scene);
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 1;
        var eyes1 = this.createEyePair(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"](0, 0.85, 1), this.scene);
        this.eyesSetPosition(eyes1, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        let flyposition = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -10);
        const scaleFactor = 1.7 / 59;
        Object(_gaze__WEBPACK_IMPORTED_MODULE_3__["getGaze"])(host).subscribe((gaze) => {
            flyposition = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](gaze[0], gaze[1], -gaze[2]).scale(scaleFactor);
        });
        var index = 0;
        setInterval(() => {
            index++;
            var speed = 0.3;
            this.eyesLookAt(eyes1, flyposition);
        }, 1000 / 60);
    }
    eyesSetPosition(eyes, position) {
        var origoDistance = Math.abs(eyes.left.position.x - eyes.right.position.x);
        var leftX = position.x - origoDistance / 2;
        var rightX = position.x + origoDistance / 2;
        eyes.left.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](leftX, position.y, position.z);
        eyes.right.position = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](rightX, position.y, position.z);
    }
    eyesLookAt(eyes, point) {
        this.eyeLookAt(eyes.left, point);
        this.eyeLookAt(eyes.right, point);
    }
    eyeLookAt(eye, point) {
        var gazeVector = point.subtract(eye.position);
        var alpha = Math.atan2(gazeVector.y, -gazeVector.z);
        var beta = Math.atan2(gazeVector.x, -gazeVector.z);
        eye.rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](alpha, -beta);
    }
    createEye(color, radius, scene) {
        var eyeball = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateSphere("eyeball", { diameter: 2 * radius, segments: 16 }, scene);
        // const eyeballmaterial = new CellMaterial("eyeballmaterial", scene);
        const eyeballmaterial = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("eyeballmaterial", scene);
        eyeballmaterial.diffuseColor = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"].White();
        eyeball.material = eyeballmaterial;
        var iris = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateSphere("pupil", { diameter: 2 * 0.4 * radius, segments: 8 }, scene);
        iris.position.z = -radius * .97;
        iris.scaling.z = 0.05; // Make it flat
        const irismaterial = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("irismaterial", scene);
        irismaterial.diffuseColor = color;
        iris.material = irismaterial;
        var pupil = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateSphere("pupil", { diameter: 2 * 0.2 * radius, segments: 16 }, scene);
        pupil.position.z = -radius * 1;
        pupil.scaling.z = 0.1; // Make it flat
        const pupilmaterial = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("pupilmaterial", scene);
        pupilmaterial.disableLighting = true;
        pupilmaterial.diffuseColor = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Color3"].Black();
        pupil.material = pupilmaterial;
        var eye = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Mesh"].MergeMeshes([eyeball, iris, pupil], true, true, undefined, false, true);
        return eye;
    }
    createEyePair(color, scene) {
        var radius = 1;
        var left = this.createEye(color, radius, scene);
        var right = this.createEye(color, radius, scene);
        var distanceBetweenEyes = 1.7 * radius;
        left.position.x = -distanceBetweenEyes;
        right.position.x = distanceBetweenEyes;
        return { left, right };
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            const rendererLoopCallback = () => {
                this.scene.render();
            };
            if (this.windowRef.document.readyState !== 'loading') {
                this.engine.runRenderLoop(rendererLoopCallback);
            }
            else {
                this.windowRef.window.addEventListener('DOMContentLoaded', () => {
                    this.engine.runRenderLoop(rendererLoopCallback);
                });
            }
            this.windowRef.window.addEventListener('resize', () => {
                this.engine.resize();
            });
        });
    }
}
EngineService.ɵfac = function EngineService_Factory(t) { return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_window_ref_service__WEBPACK_IMPORTED_MODULE_0__["WindowRefService"])); };
EngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EngineService, factory: EngineService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"babylon-gaze\",\"version\":\"1.0.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build:both\":\"npm run build && npm run build:prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.2.5\",\"@angular/common\":\"~11.2.5\",\"@angular/compiler\":\"~11.2.5\",\"@angular/core\":\"~11.2.5\",\"@angular/forms\":\"~11.2.5\",\"@angular/platform-browser\":\"~11.2.5\",\"@angular/platform-browser-dynamic\":\"~11.2.5\",\"@angular/router\":\"~11.2.5\",\"@babylonjs/core\":\"~4.2.0\",\"babylonjs-materials\":\"^4.2.0\",\"bootstrap\":\"^4.6.0\",\"rxjs\":\"~6.6.6\",\"tslib\":\"^2.1.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1102.4\",\"@angular/cli\":\"~11.2.4\",\"@angular/compiler-cli\":\"~11.2.5\",\"@angular/language-service\":\"~11.2.5\",\"@types/jasmine\":\"~3.6.6\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^14.14.34\",\"codelyzer\":\"^6.0.1\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"karma\":\"~6.2.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~9.1.1\",\"tslint\":\"~6.1.3\",\"typescript\":\"~4.1.5\"}}");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map