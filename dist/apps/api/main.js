/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const api_interfaces_1 = __webpack_require__("./libs/api-interfaces/src/lib/api-interfaces.ts");
const common_1 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const api_interfaces_2 = __webpack_require__("./libs/api-interfaces/src/index.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
const path_1 = __webpack_require__("path");
const fs_1 = __webpack_require__("fs");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    postKudos(kudos) {
        return this.appService.saveKudos(kudos);
    }
    getKudos() {
        return this.appService.getKudos();
    }
    uploadedFile(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return req.files.map(file => file.filename);
        });
    }
    getFile(id) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), `/upload/${id}`));
        return new common_1.StreamableFile(file);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)("hello"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof api_interfaces_2.Message !== "undefined" && api_interfaces_2.Message) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
tslib_1.__decorate([
    (0, common_1.Post)("kudos"),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof api_interfaces_1.Kudos !== "undefined" && api_interfaces_1.Kudos) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "postKudos", null);
tslib_1.__decorate([
    (0, common_1.Get)("kudos"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], AppController.prototype, "getKudos", null);
tslib_1.__decorate([
    (0, common_1.Post)("upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "uploadedFile", null);
tslib_1.__decorate([
    (0, common_1.Get)("video/:id"),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof common_1.StreamableFile !== "undefined" && common_1.StreamableFile) === "function" ? _c : Object)
], AppController.prototype, "getFile", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _d : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.register({
                dest: './upload',
            })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.kudosList = [];
    }
    getData() {
        return { message: 'Welcome to api!' };
    }
    saveKudos(kudos) {
        this.kudosList.push(kudos);
    }
    getKudos() {
        return this.kudosList;
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./libs/api-interfaces/src/lib/api-interfaces.ts"), exports);


/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map