webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 1%; padding-left: 1%\">\r\n  <img src=\"../assets/revature_logo_250.png\" >\r\n</div>\r\n<div class=\"container col-md-9 col-md-offset-3 \" >\r\n  <div >\r\n      <app-menu-bar></app-menu-bar>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interceptors_springXsrfInterceptor__ = __webpack_require__("./src/app/interceptors/springXsrfInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_bar_menu_bar_component__ = __webpack_require__("./src/app/components/menu-bar/menu-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_overview_overview_component__ = __webpack_require__("./src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_batches_batches_component__ = __webpack_require__("./src/app/components/batches/batches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__ = __webpack_require__("./src/app/components/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_locations_add_dialog_location_add_dialog_component__ = __webpack_require__("./src/app/components/locations/add-dialog/location-add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_curricula_curricula_component__ = __webpack_require__("./src/app/components/curricula/curricula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_trainers_trainers_component__ = __webpack_require__("./src/app/components/trainers/trainers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_reports_reports_component__ = __webpack_require__("./src/app/components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__ = __webpack_require__("./src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_trainer_trainer_service__ = __webpack_require__("./src/app/services/trainer/trainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_skill_skill_service__ = __webpack_require__("./src/app/services/skill/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_s3_credential_s3_credential_service__ = __webpack_require__("./src/app/services/s3-credential/s3-credential.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_url_url_service__ = __webpack_require__("./src/app/services/url/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_in_memory_web_api__ = __webpack_require__("./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__mockdb_in_mem_db_service__ = __webpack_require__("./src/app/mockdb/in-mem-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_trainers_trainers_add_trainers_add_component__ = __webpack_require__("./src/app/components/trainers/trainers-add/trainers-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_trainers_trainer_item_trainer_item_component__ = __webpack_require__("./src/app/components/trainers/trainer-item/trainer-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_batches_batches_component__["a" /* BatchesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["i" /* LocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_curricula_curricula_component__["a" /* CurriculaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_trainers_trainers_component__["a" /* TrainersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["a" /* LocationAddLocationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["d" /* LocationDeleteLocationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["g" /* LocationEditLocationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_locations_add_dialog_location_add_dialog_component__["a" /* LocationAddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["c" /* LocationDeleteBuildingDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["f" /* LocationEditBuildingDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["b" /* LocationAddRoomDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["e" /* LocationDeleteRoomDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["h" /* LocationEditRoomDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_trainers_trainers_add_trainers_add_component__["a" /* TrainersAddComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_trainers_trainer_item_trainer_item_component__["a" /* TrainerItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_23__material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_24_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_25__mockdb_in_mem_db_service__["a" /* InMemDbService */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_trainer_trainer_service__["a" /* TrainerService */],
                __WEBPACK_IMPORTED_MODULE_19__services_skill_skill_service__["a" /* SkillService */],
                __WEBPACK_IMPORTED_MODULE_20__services_s3_credential_s3_credential_service__["a" /* S3CredentialService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_21__services_url_url_service__["a" /* UrlService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_5__interceptors_springXsrfInterceptor__["a" /* SpringXsrfInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["a" /* LocationAddLocationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["d" /* LocationDeleteLocationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["g" /* LocationEditLocationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_locations_add_dialog_location_add_dialog_component__["a" /* LocationAddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["c" /* LocationDeleteBuildingDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["f" /* LocationEditBuildingDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["b" /* LocationAddRoomDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["e" /* LocationDeleteRoomDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_locations_locations_component__["h" /* LocationEditRoomDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_trainers_trainers_add_trainers_add_component__["a" /* TrainersAddComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__ = __webpack_require__("./src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_batches_batches_component__ = __webpack_require__("./src/app/components/batches/batches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_locations_locations_component__ = __webpack_require__("./src/app/components/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_curricula_curricula_component__ = __webpack_require__("./src/app/components/curricula/curricula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_trainers_trainers_component__ = __webpack_require__("./src/app/components/trainers/trainers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_reports_reports_component__ = __webpack_require__("./src/app/components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_settings_settings_component__ = __webpack_require__("./src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
        pathMatch: 'full'
    },
    {
        path: 'overview',
        component: __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__["a" /* OverviewComponent */]
    },
    {
        path: 'batches',
        component: __WEBPACK_IMPORTED_MODULE_3__components_batches_batches_component__["a" /* BatchesComponent */]
    },
    {
        path: 'locations',
        component: __WEBPACK_IMPORTED_MODULE_4__components_locations_locations_component__["i" /* LocationsComponent */]
    },
    {
        path: 'curriculum',
        component: __WEBPACK_IMPORTED_MODULE_5__components_curricula_curricula_component__["a" /* CurriculaComponent */]
    },
    {
        path: 'trainers',
        component: __WEBPACK_IMPORTED_MODULE_6__components_trainers_trainers_component__["a" /* TrainersComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'reports',
        component: __WEBPACK_IMPORTED_MODULE_8__components_reports_reports_component__["a" /* ReportsComponent */]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_9__components_settings_settings_component__["a" /* SettingsComponent */]
    }
];
var AppRouting = (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/components/batches/batches.component.css":
/***/ (function(module, exports) {

module.exports = "#check, #checkcell{\r\n  max-width: 25px;\r\n}\r\n.mat-expansion-panel {\r\n  background-color: black;\r\n}\r\n.mat-expansion-panel-body {\r\n  background-color: white;\r\n}\r\n.mat-expansion-panel-header {\r\n  background-color: black;\r\n}\r\n.mat-expansion-panel-header-title {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n.mat-icon {\r\n  color: darkorange;\r\n}\r\n.mat-icon-button {\r\n  line-height: 5.6rem;\r\n  min-width: 0;\r\n  width: 5.6rem;\r\n  height: 5.6rem;\r\n  border-radius: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/batches/batches.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div style=\"margin-top: 5%\">-->\r\n\r\n  <!--&lt;!&ndash;&#45;&#45;&#45;&#45;&#45;&#45;Create New Batch -&#45;&#45;&#45;&#45;&ndash;&gt;-->\r\n  <!--&lt;!&ndash; Only Appears if they are admin &#45;&#45;&#45;&#45;&ndash;&gt;-->\r\n  <!--<mat-accordion>-->\r\n    <!--<mat-expansion-panel>-->\r\n      <!--<mat-expansion-panel-header>-->\r\n        <!--<mat-panel-title>-->\r\n          <!--{{firstTabHeader}}-->\r\n        <!--</mat-panel-title>-->\r\n        <!--<mat-icon svgIcon=\"thumbs-up\"></mat-icon>-->\r\n        <!--<mat-icon svgIcon=\"thumbs-up\"></mat-icon>-->\r\n      <!--</mat-expansion-panel-header>-->\r\n\r\n      <!--<form class=\"example-form\">-->\r\n        <!--<div class=\"example-container\">-->\r\n          <!--<div>-->\r\n            <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Core Curriculum\" >-->\r\n              <!--<mat-option *ngFor=\"let Curriculum of Curriculums\" [value]=\"Curriculum.value\" >-->\r\n                <!--{{ Curriculum.viewValue }}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Focus\">-->\r\n              <!--<mat-option *ngFor=\"let focus of focuses\" [value]=\"focus.value\">-->\r\n                <!--{{ focus.viewValue }}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Skills\" [formControl]=\"skills\" multiple>-->\r\n              <!--<mat-option *ngFor=\"let skill of skillsList\" [value]=\"skill\">{{skill}}</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--</div>-->\r\n          <!--<div>-->\r\n          <!--<mat-form-field>-->\r\n            <!--<input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a start date\">-->\r\n            <!--<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>-->\r\n            <!--<mat-datepicker #picker1></mat-datepicker>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose an end date\">-->\r\n            <!--<mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>-->\r\n            <!--<mat-datepicker #picker2></mat-datepicker>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<input matInput placeholder=\"spans {{datebetween}} weeks\" readonly>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<input matInput placeholder=\"Name\">-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--</div>-->\r\n          <!--<div>-->\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Trainer\">-->\r\n              <!--<mat-option *ngFor=\"let trainer of trainers\" [value]=\"trainer.value\">-->\r\n                <!--{{ trainer.viewValue }}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Co-Trainer\">-->\r\n              <!--<mat-option *ngFor=\"let trainer of trainers\" [value]=\"trainer.value\">-->\r\n                <!--{{ trainer.viewValue }}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n            <!--</div>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Location\">-->\r\n              <!--<mat-option *ngFor=\"let location of locations\" [value]=\"location\">-->\r\n                <!--{{ location.location.toString().valueOf() }}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Building\">-->\r\n              <!--<mat-option *ngFor=\"let building of buildings\" [value]=\"building.value\">-->\r\n                <!--{{ building.viewValue}}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n          <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Room\">-->\r\n              <!--<mat-option *ngFor=\"let room of rooms\" [value]=\"room.value\">-->\r\n                <!--{{ room.viewValue }}-->\r\n              <!--</mat-option>-->\r\n            <!--</mat-select>-->\r\n          <!--</mat-form-field>-->\r\n\r\n\r\n        <!--</div>-->\r\n        <!--&lt;!&ndash;Coriculum <input type=\"text\" name=\"coriculum\">&ndash;&gt;-->\r\n      <!--</form>-->\r\n\r\n    <!--</mat-expansion-panel>-->\r\n\r\n\r\n\r\n  <!--</mat-accordion>-->\r\n\r\n  <!--&lt;!&ndash;&#45;&#45;&#45;&#45;All Batches-&#45;&#45;&#45;&#45;&ndash;&gt;-->\r\n  <!--&lt;!&ndash;&#45;&#45;&#45;&#45;This has some Admin properties-&#45;&#45;&#45;&#45;&ndash;&gt;-->\r\n  <!--<mat-accordion>-->\r\n    <!--<mat-expansion-panel>-->\r\n      <!--<mat-expansion-panel-header>-->\r\n        <!--<mat-panel-title>-->\r\n          <!--All Batches-->\r\n        <!--</mat-panel-title>-->\r\n      <!--</mat-expansion-panel-header>-->\r\n      <!--<div class=\"example-container_mat-elevation-z8\">-->\r\n        <!--<mat-table #table [dataSource]=\"batchData\" matSort>-->\r\n\r\n          <!--&lt;!&ndash; Checkbox Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Checkbox\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header id=\"check\"> </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\" id=\"checkcell\"> <mat-checkbox></mat-checkbox> </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n\r\n          <!--&lt;!&ndash; Name Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Name\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.name}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; Curriculum Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Curriculum\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Curriculum </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.curriculum}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; Focus Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Focus\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Focus </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.focus}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; Trainer Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Trainer/Co-Trainer\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Trainer/Cotrainer </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.trainer}} / {{batch.cotrainer}}</mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; Location Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Location\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Location </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.location}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; Building Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Building\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Building </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.building}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; Room Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Room\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header > Room </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.room}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; StartDate Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"StartDate\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> StartDate </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.startDate| date : 'dd/MM/yyyy'}}</mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--&lt;!&ndash; EndDate Column &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"EndDate\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header> EndDate </mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\"> {{batch.endDate| date : 'dd/MM/yyyy'}} </mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n\r\n          <!--&lt;!&ndash; Buttons &ndash;&gt;-->\r\n          <!--<ng-container matColumnDef=\"Icons\">-->\r\n            <!--<mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>-->\r\n            <!--<mat-cell *matCellDef=\"let batch\">-->\r\n\r\n              <!--<button mat-icon-button color (click)=\"EditBatch()\">-->\r\n                <!--<mat-icon matTooltip=\"Edit\" matTooltipPosition=\"above\">mode_edit</mat-icon>-->\r\n              <!--</button>-->\r\n              <!--<button mat-icon-button color (click)=\"CloneBatch()\">-->\r\n                <!--<mat-icon matTooltip=\"Clone\" matTooltipPosition=\"above\">filter_none</mat-icon>-->\r\n              <!--</button>-->\r\n              <!--<button mat-icon-button color>-->\r\n                <!--<mat-icon matTooltip=\"Delete\" matTooltipPosition=\"above\">delete</mat-icon>-->\r\n              <!--</button>-->\r\n              <!--<button mat-icon-button color>-->\r\n                <!--<mat-icon matTooltip=\"Synchronize\" matTooltipPosition=\"above\">publish</mat-icon>-->\r\n              <!--</button>-->\r\n            <!--</mat-cell>-->\r\n          <!--</ng-container>-->\r\n\r\n          <!--<mat-header-row *matHeaderRowDef=\"batchValues\"></mat-header-row>-->\r\n          <!--<mat-row *matRowDef=\"let row; columns: batchValues;\"></mat-row>-->\r\n        <!--</mat-table>-->\r\n      <!--</div>-->\r\n\r\n    <!--</mat-expansion-panel>-->\r\n  <!--</mat-accordion>-->\r\n\r\n  <!--&lt;!&ndash;-&#45;&#45;Batch TimeLine&#45;&#45;&#45;&#45;&ndash;&gt;-->\r\n  <!--<mat-accordion>-->\r\n    <!--<mat-expansion-panel>-->\r\n      <!--<mat-expansion-panel-header>-->\r\n        <!--<mat-panel-title>-->\r\n          <!--Batch Timeline-->\r\n        <!--</mat-panel-title>-->\r\n      <!--</mat-expansion-panel-header>-->\r\n\r\n    <!--</mat-expansion-panel>-->\r\n  <!--</mat-accordion>-->\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/batches/batches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BatchesComponent = (function () {
    function BatchesComponent(iconRegistry, sanitizer) {
        // FAKE VALUES FOR THE FIRST TAB
        this.datebetween = 0;
        this.Curriculums = [
            { value: 'java-0', viewValue: 'JAVA' },
            { value: 'c++-1', viewValue: 'C++' },
            { value: 'angular-2', viewValue: 'ANGULAR 4' }
        ];
        this.focuses = [
            { value: 'microservices-0', viewValue: 'Microservices' },
            { value: 'focus2-1', viewValue: 'Focus 2' },
            { value: 'focus3-2', viewValue: 'Focus 3' }
        ];
        this.skills = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.skillsList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.trainers = [
            { value: 'trainer-0', viewValue: 'August Duet' },
            { value: 'trainer-1', viewValue: 'Emily Higgins' },
            { value: 'trainer-2', viewValue: 'Steven Kelsey' }
        ];
        // locations = [
        //   {value: 'location-0', viewValue: 'Revature HQ - Reston,VA'},
        //   {value: 'location-1', viewValue: 'CUNY - SPS,NY'}
        // ];
        this.locations = [
            {
                location: 'Reston HQ - Reston, VA',
                building: [
                    {
                        name: 'Douglas  Pace',
                        rooms: [{ name: '101' }]
                    },
                    {
                        name: 'Mcleod  Mueller'
                    }
                ]
            },
            {
                location: 'CUNY - New York, NY',
                building: [
                    {
                        name: 'SPS'
                    },
                    {
                        name: 'QUEENS COLLEGE'
                    }
                ]
            }
        ];
        this.buildings = [
            { value: 'building-0', viewValue: 'Reston' },
            { value: 'trainer-1', viewValue: 'CSPS' },
            { value: 'trainer-2', viewValue: 'Steven Kelsey' }
        ];
        this.rooms = [{ value: 'room-0', viewValue: '201' }, { value: 'room-1', viewValue: '301' }];
        this.firstTabHeader = 'Create New Batch';
        //  VALUES FOR THE ALL BATCHES TAB
        this.batchValues = [
            'Checkbox',
            'Name',
            'Curriculum',
            'Focus',
            'Trainer/Co-Trainer',
            'Location',
            'Building',
            'Room',
            'StartDate',
            'EndDate',
            'Icons'
        ];
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    BatchesComponent.prototype.ngOnInit = function () { };
    BatchesComponent.prototype.ngAfterViewInit = function () {
        // this.batchData.sort = this.sort;
    };
    BatchesComponent.prototype.EditBatch = function () {
        this.firstTabHeader = 'Edit Batch';
    };
    BatchesComponent.prototype.CloneBatch = function () {
        this.firstTabHeader = 'Clone Batch';
    };
    BatchesComponent.prototype.DeleteBatch = function () { };
    BatchesComponent.prototype.SynchronizeBatch = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */])
    ], BatchesComponent.prototype, "sort", void 0);
    BatchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-batches',
            template: __webpack_require__("./src/app/components/batches/batches.component.html"),
            styles: [__webpack_require__("./src/app/components/batches/batches.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], BatchesComponent);
    return BatchesComponent;
}());



/***/ }),

/***/ "./src/app/components/curricula/curricula.component.css":
/***/ (function(module, exports) {

module.exports = ".fill-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n.container-curricula{\r\n  margin-top: 5%;\r\n}\r\n.toolbar-curricula{\r\n  background-color: #38464E;\r\n  color: white;\r\n  max-height: 50px;\r\n}\r\n/* #38464E #3D5360*/\r\n.toolbar-curricula-sub{\r\n  background-color:#3D5360;\r\n  color: white;\r\n\r\n}\r\n.toolbar-mat-buttons {\r\n  margin: 12px 6px;\r\n}\r\n.mat-expansion-panel-header-title {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n.panel-title-fix {\r\n  padding-top: 8px;\r\n}\r\n.icon-margin-fix {\r\n  margin:0px;\r\n}\r\n.button-orange {\r\n  background-color: #FB8C00;\r\n  margin: 5px;\r\n}\r\n.item-detail{\r\n  margin: 2%;\r\n}\r\n[hidden]{\r\n  display: none;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/curricula/curricula.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-curricula\">\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <mat-toolbar class=\"toolbar-curricula\">\r\n        <span>Curricula</span>\r\n        <span class=\"fill-space\"></span>\r\n      </mat-toolbar>\r\n      <!-- Expandable Content Core Curricula-->\r\n      <mat-card>\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header class=\"toolbar-curricula-sub\">\r\n            <mat-panel-title>\r\n              <span class=\"panel-title-fix\">Core Curricula</span>\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              <span class=\"fill-space\"></span>\r\n              <button mat-icon-button (click)=\"clickTest($event)\" [hidden]=\"!isAdmin\">\r\n                <mat-icon class=\"icon-margin-fix\" matTooltip=\"Add New Curriculum\">add_circle_outline</mat-icon>\r\n              </button>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n          <div class=\"mat-panel-content\">\r\n            <mat-list>\r\n              <div class=\"item-detail\" *ngFor=\"let curr of currData\">\r\n                <div *ngIf=\"curr.active && curr.core\">\r\n                  <mat-list-item>\r\n                      <div>\r\n                        <h3> {{curr.name}}</h3>\r\n                        <p>Skills: {{curr.skills}}</p>\r\n                      </div>\r\n                      <span class=\"fill-space\"></span>\r\n                      <button mat-icon-button class=\"button-orange\" (click)=\"clickTest($event)\" [hidden]=\"!isAdmin\">\r\n                        <mat-icon class=\"icon-margin-fix\" matTooltip=\"Edit Curriculum\">mode_edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"button-orange\" (click)=\"clickTest($event)\" [hidden]=\"!isAdmin\">\r\n                        <mat-icon class=\"icon-margin-fix\" matTooltip=\"Remove Core\">remove_circle</mat-icon>\r\n                      </button>\r\n                  </mat-list-item>\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n\r\n            </mat-list>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      </mat-card>\r\n\r\n      <!-- Focuses-->\r\n      <mat-card>\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header class=\"toolbar-curricula-sub\">\r\n              <mat-panel-title>\r\n                <span class=\"panel-title-fix\">Focuses</span>\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                <span class=\"fill-space\"></span>\r\n                <button mat-icon-button (click)=\"clickTest($event)\" [hidden]=\"!isAdmin\">\r\n                  <mat-icon class=\"icon-margin-fix\" matTooltip=\"Add New Focus\">add_circle_outline</mat-icon>\r\n                </button>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <div class=\"mat-panel-content\">\r\n              <mat-list>\r\n                <div class=\"item-detail\" *ngFor=\"let curr of currData\">\r\n                  <div *ngIf=\"curr.active && !curr.core\">\r\n                    <mat-list-item>\r\n                      <div>\r\n                        <h3> {{curr.name}}</h3>\r\n                        <p>Skills: {{curr.skills}}</p>\r\n                      </div>\r\n                      <span class=\"fill-space\"></span>\r\n                      <button mat-icon-button class=\"button-orange\" (click)=\"clickTest($event)\" [hidden]=\"!isAdmin\">\r\n                        <mat-icon class=\"icon-margin-fix\" matTooltip=\"Edit Curriculum\">mode_edit</mat-icon>\r\n                      </button>\r\n                      <button mat-icon-button class=\"button-orange\" (click)=\"clickTest($event)\" [hidden]=\"!isAdmin\">\r\n                        <mat-icon class=\"icon-margin-fix\" matTooltip=\"Remove Core\">remove_circle</mat-icon>\r\n                      </button>\r\n                    </mat-list-item>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n              </mat-list>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </mat-card>\r\n\r\n      <!-- Skills -->\r\n      <mat-card>\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header class=\"toolbar-curricula-sub\">\r\n            <mat-panel-title>\r\n              <span class=\"panel-title-fix\">Skills</span>\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              <span class=\"fill-space\"></span>\r\n              <button mat-icon-button (click)=\"clickTest($event)\">\r\n                <mat-icon class=\"icon-margin-fix\" matTooltip=\"Add New Skill\">add_circle_outline</mat-icon>\r\n              </button>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n            <div class=\"mat-panel-content\">\r\n              <mat-list>\r\n                <mat-list-item>\r\n\r\n                </mat-list-item>\r\n              </mat-list>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </mat-card>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <!--<mat-card>\r\n    <mat-card-content>\r\n      <mat-toolbar class=\"toolbar-curriculum\">\r\n        <span>Curricula</span>\r\n        <span class=\"fill-space\"></span>\r\n      </mat-toolbar>\r\n\r\n      &lt;!&ndash; Core Curricula Content&ndash;&gt;\r\n      <mat-card>\r\n        <mat-toolbar class=\"toolbar-curriculum-sub\">\r\n          <span>Curricula</span>\r\n          <span class=\"fill-space\"></span>\r\n\r\n          &lt;!&ndash; New Curriculum Button if isManager is true&ndash;&gt;\r\n          &lt;!&ndash;<button mat-icon-button=\"\" *ngIf = \"isManager\" (click)=\"showAddCore($event)\" >&ndash;&gt;\r\n          <button mat-icon-button class=\"toolbar-mat-buttons\">\r\n            <mat-icon title=\"New Curriculum\" (click)=\"clickTest($event)\">add_circle_outline</mat-icon>\r\n          </button>\r\n        </mat-toolbar>\r\n\r\n\r\n      </mat-card>\r\n    </mat-card-content>\r\n  </mat-card>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/curricula/curricula.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurriculaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurriculaComponent = (function () {
    function CurriculaComponent() {
        this.isAdmin = true;
        this.currData = [
            {
                currId: 1,
                name: '.NET',
                core: true,
                active: true,
                skills: ['Core .NET', 'AngularJS', 'C#', 'ASP.NET', 'MVC', 'T-SQL']
            },
            {
                currId: 2,
                name: 'JAVA',
                core: true,
                active: true,
                skills: ['Core JAVA', 'Angular4', 'HTML5', 'Spring', 'MVC', 'SQL']
            },
            {
                currId: 3,
                name: 'SDET',
                core: true,
                active: true,
                skills: ['Core SDET', 'Python', 'UFT', 'Manual Testing']
            },
            {
                currId: 4,
                name: 'IntelliJ',
                core: true,
                active: true,
                skills: ['JAVA']
            },
            {
                currId: 5,
                name: 'Salesforce',
                core: true,
                active: true,
                skills: []
            },
            {
                currId: 6,
                name: 'Microservices',
                core: false,
                active: true,
                skills: ['Core JAVA', 'JUnit', 'Spring', 'REST', 'MVC', 'SOAP']
            },
            {
                currId: 7,
                name: 'Pega',
                core: false,
                active: true,
                skills: ['Pega']
            },
            {
                currId: 8,
                name: 'Oracle Fusion',
                core: false,
                active: true,
                skills: ['Core JAVA', 'Oracle SQL']
            },
            {
                currId: 9,
                name: 'C++',
                core: true,
                active: false,
                skills: ['Core C++']
            }
        ];
    }
    CurriculaComponent.prototype.ngOnInit = function () { };
    CurriculaComponent.prototype.clickTest = function (evt) {
        console.log('button clicked');
        evt.stopPropagation();
    };
    CurriculaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-curricula',
            template: __webpack_require__("./src/app/components/curricula/curricula.component.html"),
            styles: [__webpack_require__("./src/app/components/curricula/curricula.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurriculaComponent);
    return CurriculaComponent;
}());



/***/ }),

/***/ "./src/app/components/locations/add-dialog/location-add-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add {{ addType | titlecase }}</h2>\r\n<div mat-dialog-content>\r\n    <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n        <input matInput tabindex=\"1\" [(ngModel)]=\"typeContent.name\" [placeholder]=\"(addType | titlecase) + ' Name'\">\r\n    </mat-form-field>\r\n    <div *ngIf=\"addType === 'location'\">\r\n        <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n            <input matInput tabindex=\"2\" [(ngModel)]=\"data.location.city\" placeholder=\"City\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n            <input matInput tabindex=\"3\" [(ngModel)]=\"data.location.state\" placeholder=\"State\">\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"data.building\" tabindex=\"4\">Add</button>\r\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/locations/add-dialog/location-add-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAddDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LocationAddDialogComponent = (function () {
    // dialogContent;
    function LocationAddDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationAddDialogComponent.prototype.ngOnInit = function () {
        this.addType = this.data.addType;
        switch (this.data.addType) {
            case 'location':
                {
                    this.typeContent = this.data.location;
                }
                break;
            case 'building':
                {
                    this.typeContent = this.data.building;
                }
                break;
            case 'room':
                {
                    this.typeContent = this.data.room;
                }
                break;
        }
    };
    LocationAddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationAddDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-add-dialog',
            template: __webpack_require__("./src/app/components/locations/add-dialog/location-add-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationAddDialogComponent);
    return LocationAddDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/locations/location-add-location-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add New Location</h2>\r\n<div mat-dialog-content>\r\n  <p>Location Name:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.location.name\">\r\n  </mat-form-field>\r\n  <p>City:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"2\" [(ngModel)]=\"data.location.city\">\r\n  </mat-form-field>\r\n  <p>State:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"3\" [(ngModel)]=\"data.location.state\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.location\" tabindex=\"4\">Add</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-add-room-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add New Room</h2>\r\n<div mat-dialog-content>\r\n  <p>Room Name:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.room.name\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.room\" tabindex=\"4\">Add</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-delete-building-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete This Building?</h1>\r\n<h4> {{data.building.name}}</h4>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.building\" tabindex=\"2\">Yes</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-delete-location-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete This Location?</h1>\r\n<h4> {{data.location.name}}</h4>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.location\" tabindex=\"2\">Yes</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-delete-room-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete This Room?</h1>\r\n<h4> {{data.room.name}}</h4>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.room\" tabindex=\"2\">Yes</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-edit-building-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Building</h2>\r\n<div mat-dialog-content>\r\n  <p>Building Name:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.building.name\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.building\" tabindex=\"4\">Update</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-edit-location-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Location</h2>\r\n<div mat-dialog-content>\r\n  <p>Location Name:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.location.name\">\r\n  </mat-form-field>\r\n  <p>City:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"2\" [(ngModel)]=\"data.location.city\">\r\n  </mat-form-field>\r\n  <p>State:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"3\" [(ngModel)]=\"data.location.state\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.location\" tabindex=\"4\">Update</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/location-edit-room-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Room</h2>\r\n<div mat-dialog-content>\r\n  <p>Room Name:</p>\r\n  <mat-form-field class=\"update-form\" style=\"width: 100%\">\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.room.name\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.room\" tabindex=\"4\">Update</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/locations.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-expansion-panel {\r\n  background-color: #37474F;\r\n}\r\n\r\n.mat-expansion-panel-body {\r\n  background-color: white;\r\n}\r\n\r\n.mat-expansion-panel-header {\r\n  background-color: #37474F;\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.mat-expansion-panel-header-description {\r\n  color: white;\r\n}\r\n\r\n.fill-space{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.mat-icon {\r\n  margin-left: 10px;\r\n  color: gray;\r\n}\r\n\r\n#download {\r\n  position:relative;\r\n  bottom:30px;\r\n  left:0px;\r\n  visibility:hidden;\r\n}\r\n\r\n#download:hover .downloadText{\r\n  visibility:visible;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 5%\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel [expanded]=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <h4>Locations</h4>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"fill-space\"></span>\r\n          <mat-icon matTooltip=\"Add Location\" class=\"material-icons\" (click)=\"openAddLocationDialog($event)\"> add_location</mat-icon>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n\r\n      <div style=\"padding-top: .5%\">\r\n        <mat-accordion>\r\n          <mat-expansion-panel *ngFor=\"let location of locations\" >\r\n            <mat-expansion-panel-header (click)=\"collapseAll(location.id)\">\r\n              <mat-panel-title>\r\n                <mat-icon mat-list-icon svgIcon=\"location\"></mat-icon>\r\n                <h4 mat-line>{{location.name}} &nbsp;</h4>\r\n                <p mat-line> &nbsp;{{location.city}}, {{location.state}} </p>\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                <span class=\"fill-space\"></span>\r\n                <mat-icon matTooltip=\"Add Building\" class=\"material-icons\" (click)=\"openAddBuildingDialog($event, location)\"> add_circle</mat-icon>\r\n                <mat-icon matTooltip=\"Remove Location\" class=\"material-icons\" (click)=\"openDeleteLocationDialog($event, location)\"> location_off</mat-icon>\r\n                <mat-icon matTooltip=\"Edit Location\" class=\"material-icons\" (click)=\"openEditLocationDialog($event, location)\"> edit</mat-icon>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <div style=\"padding-top: .5%\">\r\n              <mat-accordion *ngFor=\"let building of location.buildings\">\r\n                <mat-expansion-panel [expanded]=\"expanded[location.id]\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      <mat-icon mat-list-icon svgIcon=\"building\"></mat-icon>\r\n                      <h4 mat-line>{{building.name}}</h4>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                      <span class=\"fill-space\"></span>\r\n                      <mat-icon matTooltip=\"Add Room\" class=\"material-icons\" (click)=\"openAddRoomDialog($event, location, building)\"> add_circle_outline</mat-icon>\r\n                      <mat-icon matTooltip=\"Remove Building\" class=\"material-icons\" (click)=\"openDeleteBuildingDialog($event, location, building)\"> remove_circle</mat-icon>\r\n                      <mat-icon matTooltip=\"Edit Building\" class=\"material-icons\" (click)=\"openEditBuildingDialog($event, location, building)\"> edit</mat-icon>\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n\r\n                  <div style=\"padding-top: .5%\">\r\n                    <mat-list *ngFor=\"let room of building.rooms\">\r\n                      <mat-list-item >\r\n                        <h4 mat-line><mat-icon style=\"color: black\">store</mat-icon>{{room.name}}</h4>\r\n                        <span class=\"fill-space\"></span>\r\n                        <mat-icon matTooltip=\"Remove Room\" class=\"material-icons\" style=\"color: black; cursor: pointer\" (click)=\"openDeleteRoomDialog($event, location, building, room)\"> remove_circle_outline</mat-icon>\r\n                        <mat-icon matTooltip=\"Edit Room\" class=\"material-icons\"style=\"color: black; cursor: pointer\" (click)=\"openEditRoomDialog($event, location, room)\"> edit</mat-icon>\r\n                      </mat-list-item>\r\n                      <mat-divider></mat-divider>\r\n                    </mat-list>\r\n                  </div>\r\n\r\n                </mat-expansion-panel >\r\n              </mat-accordion>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LocationDeleteLocationDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationAddLocationDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LocationEditLocationDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LocationDeleteBuildingDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LocationEditBuildingDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocationAddRoomDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LocationDeleteRoomDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LocationEditRoomDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_dialog_location_add_dialog_component__ = __webpack_require__("./src/app/components/locations/add-dialog/location-add-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LocationDeleteLocationDialogComponent = (function () {
    function LocationDeleteLocationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationDeleteLocationDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationDeleteLocationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-delete-location-dialog',
            template: __webpack_require__("./src/app/components/locations/location-delete-location-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationDeleteLocationDialogComponent);
    return LocationDeleteLocationDialogComponent;
}());

var LocationAddLocationDialogComponent = (function () {
    function LocationAddLocationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationAddLocationDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationAddLocationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-add-location-dialog',
            template: __webpack_require__("./src/app/components/locations/location-add-location-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationAddLocationDialogComponent);
    return LocationAddLocationDialogComponent;
}());

var LocationEditLocationDialogComponent = (function () {
    function LocationEditLocationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationEditLocationDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationEditLocationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-edit-location-dialog',
            template: __webpack_require__("./src/app/components/locations/location-edit-location-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationEditLocationDialogComponent);
    return LocationEditLocationDialogComponent;
}());

// @Component({
//   selector: 'app-location-add-building-dialog',
//   templateUrl: './location-add-building-dialog.component.html'
// })
// export class LocationAddBuildingDialogComponent {
//   constructor(
//     public dialogRef: MatDialogRef<LocationAddBuildingDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
var LocationDeleteBuildingDialogComponent = (function () {
    function LocationDeleteBuildingDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationDeleteBuildingDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationDeleteBuildingDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-delete-building-dialog',
            template: __webpack_require__("./src/app/components/locations/location-delete-building-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationDeleteBuildingDialogComponent);
    return LocationDeleteBuildingDialogComponent;
}());

var LocationEditBuildingDialogComponent = (function () {
    function LocationEditBuildingDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationEditBuildingDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationEditBuildingDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-edit-building-dialog',
            template: __webpack_require__("./src/app/components/locations/location-edit-building-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationEditBuildingDialogComponent);
    return LocationEditBuildingDialogComponent;
}());

var LocationAddRoomDialogComponent = (function () {
    function LocationAddRoomDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationAddRoomDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationAddRoomDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-add-room-dialog',
            template: __webpack_require__("./src/app/components/locations/location-add-room-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationAddRoomDialogComponent);
    return LocationAddRoomDialogComponent;
}());

var LocationDeleteRoomDialogComponent = (function () {
    function LocationDeleteRoomDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationDeleteRoomDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationDeleteRoomDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-delete-room-dialog',
            template: __webpack_require__("./src/app/components/locations/location-delete-room-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationDeleteRoomDialogComponent);
    return LocationDeleteRoomDialogComponent;
}());

var LocationEditRoomDialogComponent = (function () {
    function LocationEditRoomDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LocationEditRoomDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LocationEditRoomDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-edit-room-dialog',
            template: __webpack_require__("./src/app/components/locations/location-edit-room-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], LocationEditRoomDialogComponent);
    return LocationEditRoomDialogComponent;
}());

var LocationsComponent = (function () {
    function LocationsComponent(iconRegistry, sanitizer, dialog) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.expanded = [];
        this.locations = [
            {
                id: '13F',
                name: 'Revature HQ',
                city: 'Reaston',
                state: 'VA',
                buildings: [
                    {
                        name: 'Building 1',
                        rooms: [
                            {
                                name: 'Room 101'
                            },
                            {
                                name: 'Room 102'
                            }
                        ]
                    },
                    {
                        name: 'Building 2',
                        rooms: [
                            {
                                name: 'Room 201'
                            },
                            {
                                name: 'Room 202'
                            }
                        ]
                    }
                ]
            },
            {
                id: '13E',
                name: 'CUNY',
                city: 'New York',
                state: 'NY',
                buildings: [
                    {
                        name: 'SPS',
                        rooms: [
                            {
                                name: 'Room 216'
                            },
                            {
                                name: 'Room 220'
                            }
                        ]
                    },
                    {
                        name: 'Queens College',
                        rooms: [
                            {
                                name: 'Room 301'
                            },
                            {
                                name: 'Room 302'
                            }
                        ]
                    }
                ]
            }
        ];
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var location_1 = _a[_i];
            this.expanded[location_1.id] = false;
        }
        iconRegistry.addSvgIcon('location', sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_location_city_black_48px.svg'));
        iconRegistry.addSvgIcon('building', sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_business_black_48px.svg'));
        iconRegistry.addSvgIcon('room', sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_business_black_48px.svg'));
    }
    LocationsComponent.prototype.ngOnInit = function () { };
    LocationsComponent.prototype.collapseAll = function (id) {
        this.expanded[id] = !this.expanded[id];
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var location_2 = _a[_i];
            if (location_2.id !== id) {
                this.expanded[location_2.id] = false;
            }
        }
    };
    LocationsComponent.prototype.addLocation = function (location) {
        // call service
    };
    LocationsComponent.prototype.updateLocation = function (location) {
        // call service
    };
    LocationsComponent.prototype.deleteLocation = function (location) {
        // call service
    };
    LocationsComponent.prototype.openAddLocationDialog = function (evt) {
        var _this = this;
        evt.stopPropagation();
        var location = {
            id: '',
            name: '',
            city: '',
            state: '',
            buildings: []
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_dialog_location_add_dialog_component__["a" /* LocationAddDialogComponent */], {
            width: '450px',
            data: {
                addType: 'location',
                location: location
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addLocation(result);
            }
        });
    };
    LocationsComponent.prototype.openDeleteLocationDialog = function (evt, location) {
        var _this = this;
        evt.stopPropagation();
        var dialogRef = this.dialog.open(LocationDeleteLocationDialogComponent, {
            width: '250px',
            data: {
                location: location
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteLocation(result);
            }
        });
    };
    LocationsComponent.prototype.openEditLocationDialog = function (evt, location) {
        var _this = this;
        evt.stopPropagation();
        var dialogRef = this.dialog.open(LocationEditLocationDialogComponent, {
            width: '450px',
            data: {
                location: location
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.updateLocation(result);
            }
        });
    };
    LocationsComponent.prototype.openAddBuildingDialog = function (evt, location) {
        var _this = this;
        evt.stopPropagation();
        var building = {
            name: '',
            rooms: []
        };
        // const dialogRef = this.dialog.open(LocationAddBuildingDialogComponent, {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_dialog_location_add_dialog_component__["a" /* LocationAddDialogComponent */], {
            width: '450px',
            data: {
                addType: 'building',
                building: building
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                location.buildings.push(result);
                _this.updateLocation(location);
            }
        });
    };
    LocationsComponent.prototype.openDeleteBuildingDialog = function (evt, location, building) {
        var _this = this;
        evt.stopPropagation();
        var dialogRef = this.dialog.open(LocationDeleteBuildingDialogComponent, {
            width: '250px',
            data: {
                building: building
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                location.buildings = location.buildings.filter(function (e) { return e !== result; });
                _this.updateLocation(location);
            }
        });
    };
    LocationsComponent.prototype.openEditBuildingDialog = function (evt, location, building) {
        var _this = this;
        evt.stopPropagation();
        var dialogRef = this.dialog.open(LocationEditBuildingDialogComponent, {
            width: '450px',
            data: {
                building: building
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.updateLocation(location);
            }
        });
    };
    LocationsComponent.prototype.openAddRoomDialog = function (evt, location, building) {
        var _this = this;
        evt.stopPropagation();
        var room = {
            roomName: ''
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_dialog_location_add_dialog_component__["a" /* LocationAddDialogComponent */], {
            width: '450px',
            data: {
                addType: 'room',
                room: room
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                building.rooms.push(result);
                _this.updateLocation(location);
            }
        });
    };
    LocationsComponent.prototype.openDeleteRoomDialog = function (evt, location, building, room) {
        var _this = this;
        evt.stopPropagation();
        var dialogRef = this.dialog.open(LocationDeleteRoomDialogComponent, {
            width: '250px',
            data: {
                room: room
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                building.rooms = building.rooms.filter(function (e) { return e !== result; });
                _this.updateLocation(location);
            }
        });
    };
    LocationsComponent.prototype.openEditRoomDialog = function (evt, location, room) {
        var _this = this;
        evt.stopPropagation();
        var dialogRef = this.dialog.open(LocationEditRoomDialogComponent, {
            width: '450px',
            data: {
                room: room
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.updateLocation(location);
            }
        });
    };
    LocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locations',
            template: __webpack_require__("./src/app/components/locations/locations.component.html"),
            styles: [__webpack_require__("./src/app/components/locations/locations.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_url_url_service__ = __webpack_require__("./src/app/services/url/url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(url) {
        this.url = url;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //window.location.href = this.url.getUrl();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_url_url_service__["a" /* UrlService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu-bar/menu-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-tab-label {\r\n  min-width: 0.9vw !important;\r\n  background-color: transparent;\r\n  color: black;\r\n}\r\n\r\n/* Styles for the active tab label */\r\n\r\n.mat-tab-label.mat-tab-label-active {\r\n  outline-color: orangered;\r\n  color: orangered;\r\n}\r\n\r\n.mat-ink-bar {\r\n  background-color: orangered !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/menu-bar/menu-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <mat-tab-group class=\"tabs col-md-12\" (selectedTabChange)=\"selectTab($event)\" [(selectedIndex)]=\"selectedTab\" data-cy=\"navbar\">\r\n    <mat-tab label=\"OVERVIEW\">\r\n    </mat-tab>\r\n    <mat-tab label=\"BATCHES\">\r\n    </mat-tab>\r\n    <mat-tab label=\"LOCATIONS\">\r\n    </mat-tab>\r\n    <mat-tab label=\"CURRICULA\">\r\n    </mat-tab>\r\n    <mat-tab label=\"TRAINERS\">\r\n    </mat-tab>\r\n    <mat-tab label=\"PROFILE\">\r\n    </mat-tab>\r\n    <mat-tab label=\"REPORTS\">\r\n    </mat-tab>\r\n    <mat-tab label=\"SETTINGS\">\r\n    </mat-tab>\r\n    <mat-tab label=\"LOGOUT\">\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/menu-bar/menu-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBarComponent = (function () {
    function MenuBarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.selectedTab = 0;
        this.tabs = ['overview', 'batches', 'locations', 'curriculum', 'trainers', 'profile', 'reports', 'settings', 'logout'];
    }
    MenuBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                console.log('current url', event.url.split('/'));
                _this.selectedTab = _this.tabs.indexOf(event.url.split('/')[1]);
            }
        });
    };
    MenuBarComponent.prototype.selectTab = function (evt) {
        //localStorage.setItem('active', evt.index);
        this.router.navigate([this.tabs[evt.index]]);
        /*
              switch (evt.index) {
              case 0: this.toOverview();
              break;
    
              case 1: this.toBatches();
              break;
    
              case 2: this.toLocations();
                break;
    
              case 3: this.toCurricula();
                break;
    
              case 4: this.toTrainers();
                break;
    
              case 5: this.toProfile();
                break;
    
              case 6: this.toReports();
                break;
    
              case 7: this.toSettings();
                break;
    
              case 8: this.logout();
                break;
            }
        */
    };
    /*
      toOverview() {
      this.router.navigate([('overview')]);
    }
  
    toBatches() {
      this.router.navigate([('batches')]);
    }
  
    toLocations() {
      this.router.navigate([('locations')]);
    }
  
    toCurricula() {
      this.router.navigate([('curriculum')]);
    }
  
    toTrainers() {
      this.router.navigate([('trainers')]);
    }
  
    toProfile() {
      this.router.navigate([('profile')]);
    }
  
    toReports() {
      this.router.navigate([('reports')]);
    }
  
    toSettings() {
      this.router.navigate([('settings')]);
    }
  
  */
    MenuBarComponent.prototype.logout = function () {
        //has to redirect to login page
    };
    MenuBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-bar',
            template: __webpack_require__("./src/app/components/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/menu-bar/menu-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "./src/app/components/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-paginator-active {\r\n  outline-color: orangered;\r\n  color: orangered;\r\n}\r\n\r\n.mat-expansion-panel {\r\n  background-color: #333;\r\n}\r\n\r\n.mat-expansion-panel-body {\r\n  background-color: white;\r\n}\r\n\r\n.mat-expansion-panel-header {\r\n  background-color: #333;\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.mat-expansion-panel-header-description {\r\n  color: white;\r\n}\r\n\r\n.fill-space{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.mat-icon {\r\n  margin: 4px;\r\n  color: white;\r\n}\r\n\r\n#download {\r\n  position:relative;\r\n  bottom:30px;\r\n  left:0px;\r\n  visibility:hidden;\r\n}\r\n\r\n#download:hover .downloadText{\r\n  visibility:visible;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 5%\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel [expanded]=\"true\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          All Batches\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"fill-space\"></span>\r\n          <mat-icon title=\"Export to CSV\" (click)=\"exportToCSV($event)\">get_app</mat-icon>\r\n\r\n          <mat-icon [matMenuTriggerFor]=\"menu\" (click)=\"openMenu($event)\">\r\n            menu\r\n          </mat-icon>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <span>In Progress</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <span>Beginging within two weeks</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <span>All</span>\r\n            </button>\r\n          </mat-menu>\r\n\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n\r\n      <div class=\"example-container mat-elevation-z8\">\r\n        <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.name}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Start Date Column -->\r\n          <ng-container matColumnDef=\"startDate\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.startDate | date: 'mediumDate'}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- End Date Column -->\r\n          <ng-container matColumnDef=\"endDate\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> End Date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.endDate | date: 'mediumDate'}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Curriculum Column -->\r\n          <ng-container matColumnDef=\"curriculum\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Curriculum </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.curriculum}}</mat-cell>\r\n          </ng-container>\r\n          \r\n          <!-- Focus Column -->\r\n          <ng-container matColumnDef=\"focus\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Focus </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.focus}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Trainer Column -->\r\n          <ng-container matColumnDef=\"trainer\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Trainer </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.trainer}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- CoTrainer Column -->\r\n          <ng-container matColumnDef=\"cotrainer\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Trainer </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.cotrainer}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Location Column -->\r\n          <ng-container matColumnDef=\"location\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Location </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.location}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Building Column -->\r\n          <ng-container matColumnDef=\"building\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Building </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.building}}</mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Room Column -->\r\n          <ng-container matColumnDef=\"room\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Room </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> {{batch.room}}</mat-cell>\r\n          </ng-container>\r\n\r\n\r\n          <!-- Progress Bar -->\r\n          <ng-container matColumnDef=\"progress\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let batch\"> <mat-card>\r\n              <mat-card-content>\r\n                  <mat-progress-bar\r\n                    class=\"example-margin\"\r\n                    [color]=\"color\"\r\n                    [mode]=\"mode\"\r\n                    [value]=\"value\"\r\n                    [bufferValue]=\"bufferValue\">\r\n                  </mat-progress-bar>\r\n              </mat-card-content>\r\n            </mat-card>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- Header rows of the Display -->\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n\r\n  <!-- COMMENTING OUT PREVIOUS HARD CODED ELEMENTS TABLE -->\r\n\r\n      <!-- <div class=\"example-container mat-elevation-z8\">\r\n        <mat-table #table [dataSource]=\"dataSource\" matSort> -->\r\n\r\n          <!-- Position Column -->\r\n          <!-- <ng-container matColumnDef=\"position\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n          </ng-container> -->\r\n\r\n          <!-- Name Column -->\r\n          <!-- <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n          </ng-container> -->\r\n\r\n          <!-- Weight Column -->\r\n          <!-- <ng-container matColumnDef=\"weight\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n          </ng-container> -->\r\n\r\n          <!-- Symbol Column -->\r\n          <!-- <ng-container matColumnDef=\"symbol\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"progress\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> <mat-card>\r\n              <mat-card-content>\r\n                  <mat-progress-bar\r\n                    class=\"example-margin\"\r\n                    [color]=\"color\"\r\n                    [mode]=\"mode\"\r\n                    [value]=\"value\"\r\n                    [bufferValue]=\"bufferValue\">\r\n                  </mat-progress-bar>\r\n              </mat-card-content>\r\n            </mat-card>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n        <mat-paginator [length]=\"100\"\r\n                       [pageSize]=\"10\"\r\n                       [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n        </mat-paginator>\r\n\r\n      </div> -->\r\n    \r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// --------------------------------- HARD CODED ELEMENT DATA... SHOULD BE DELETED --------------------------------------
// const ELEMENT_DATA: Element[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
// ];
var OverviewComponent = (function () {
    function OverviewComponent() {
        // ---------------------- OLD DEFAULT CODE FROM LAST BATCH --------------------------
        // displayedColumns = ['position', 'name', 'weight', 'symbol', 'progress'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        //-----------------------------------------------------------------------------------
        this.color = 'warn';
        this.mode = 'determinate';
        this.value = 10;
        this.bufferValue = 75;
        // ----------------------- NEW CODE FROM NEW HOPE -----------------------------------
        this.batchList = [];
        this.displayedColumns = [
            'name',
            'startDate',
            'endDate',
            'curriculum',
            'focus',
            'trainer',
            'cotrainer',
            'location',
            'building',
            'room',
            'progress'
        ];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](this.batchList);
        // Booleans for testing
        this.isExported = false;
    }
    OverviewComponent.prototype.ngOnInit = function () { };
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    // --------------------------------
    OverviewComponent.prototype.exportToCSV = function (evt) {
        evt.stopPropagation();
        // this.csvService.download(this.dataSource, 'Batches');
        // const angular2Csv = new Angular2Csv(this.batchList, 'batches');
        this.isExported = true;
    };
    OverviewComponent.prototype.openMenu = function (evt) {
        evt.stopPropagation();
    };
    // --------------------------------- END OF THE OLD -----------------------------------------------------
    // ----------------------------------BEGIN OPERATION NEW HOPE -------------------------------------------
    OverviewComponent.prototype.applyFilter = function (filterType) {
        /**
         *  FILTER TYPE!!!
         *  0 - By All
         *  1 - In Progress
         *  2 - Beginging in two weeks
         */
        if (filterType === 0) {
            // Todo
        }
    };
    OverviewComponent.prototype.computeNumOfWeeksBetween = function (startDate, endDate) {
        var numberOfDays = Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24);
        var numberOfWeeks = Math.round(numberOfDays / 7);
        return numberOfWeeks;
    };
    OverviewComponent.prototype.getCurrentWeek = function (startDate) {
        var currentDate = new Date(Date.now());
        var numberOfDays = Math.abs(currentDate - startDate) / (1000 * 60 * 60 * 24);
        var weekNumber = Math.round(numberOfDays / 7);
        return weekNumber;
    };
    OverviewComponent.prototype.getCurrentProgress = function (batch) {
        var training_duration = this.computeNumOfWeeksBetween(batch.startDate, batch.endDate);
        if (training_duration === 0) {
            return 0;
        }
        var batch_current_week = this.getCurrentWeek(batch.startDate);
        var progress = batch_current_week / training_duration;
        return progress * 100;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */])
    ], OverviewComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */])
    ], OverviewComponent.prototype, "paginator", void 0);
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/components/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/components/overview/overview.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".revOrange {\r\n  color: #f26a25;\r\n}\r\n\r\n.md-toolbar-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.md-toolbar {\r\n  padding: 0px 16px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.md-list-item {\r\n  border-radius: 10px;\r\n  margin: 6px 8px;\r\n  padding: 0 6px;\r\n}\r\n\r\n.inputFile {\r\n  display: none;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nmat-toolbar-row {\r\n  background-color: #37474f;\r\n  color: #e0e4e6;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\nmat-card {\r\n  margin: 0 16px;\r\n  padding: 0;\r\n}\r\n\r\nmat-card-content {\r\n  margin: 0;\r\n  padding: 16px;\r\n}\r\n\r\n.mat-list-item-content {\r\n  padding: 0;\r\n}\r\n\r\nmat-icon {\r\n  margin: 0;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;&lt;!&ndash; IMPORTANT READ HERE FIRST  &ndash;&gt;&ndash;&gt;-->\r\n<!--\r\nI have created two ng-shows with two different md-cards, find the section where there are  many empty comment blocks\r\nThe top one is only for the user to change their profileCtrl\r\nThe second md-card/ng-show is for other users to look at other trainers profiles but arent allowed to make a change.\r\n\r\n -->\r\n<div style=\"margin-top: 5%\">\r\n  <!--<mat-card *ngIf=\"tId == -1\" md-whiteframe=\"8\" ng-cloak>-->\r\n  <mat-card>\r\n    <mat-toolbar-row>\r\n      <mat-toolbar class=\"md-toolbar\" layout=\"columns\">\r\n          <span>Profile</span>\r\n          <span class=\"md-toolbar-spacer\"></span>\r\n          <button mat-icon-button (click)=\"updateName()\">\r\n            <mat-icon matTooltip=\"Save\" class=\"material-icons\">save</mat-icon>\r\n          </button>\r\n      </mat-toolbar>\r\n    </mat-toolbar-row>\r\n\r\n    <!--info section-->\r\n    <mat-card-content *ngIf=\"trainer != undefined && skills != undefined\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-2\">\r\n          <img layout=\"column\" style=\"border-radius: 50%;\" alt=\"\"\r\n               ng-src=\"https://app.revature.com/core/resources/download/default/interns/image?t=1486138020884\"\r\n               id=\"displayImage\" class=\"width-200 height-200\"\r\n               src=\"https://app.revature.com/core/resources/download/default/interns/image?t=1486138020884\">\r\n        </div>\r\n        <div class=\"col-lg-10\">\r\n          <div>\r\n            <h1>{{this.trainer.firstName}} {{this.trainer.lastName}}</h1>\r\n            <form [formGroup]=\"nameForm\">\r\n              <mat-form-field flex>\r\n                <input matInput class=\"formControl\" placeholder=\"First Name\" formControlName=\"firstName\" required>\r\n              </mat-form-field>\r\n              <mat-form-field flex>\r\n                <input matInput class=\"formControl\" placeholder=\"Last Name\" name=\"lastLast\" formControlName=\"lastName\" required>\r\n              </mat-form-field>\r\n            </form>\r\n          </div>\r\n          <div layout=\"row\">\r\n            <!--need to figure out accessing the file, as far as permissions go-->\r\n            <label> Current Resume: </label>\r\n            <label *ngIf=\"trainer.resume != null\">{{trainer.resume}}</label>\r\n            <label *ngIf=\"trainer.resume == null\">No resume on file</label> <br>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-1\">\r\n              <button mat-icon-button (click)=\"inputResume.click()\">\r\n                <input class=\"inputFile\" #inputResume type=\"file\" (change)=\"getFiles($event)\">\r\n                <mat-icon matTooltip=\"Add/Update Resume\" position=\"below\" class=\"material-icons revOrange\">add_circle</mat-icon>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-11\" *ngIf=\"myFile != undefined\">\r\n              <label>{{myFile[0].name}}</label>\r\n              <button mat-button (click)=\"uploadResume()\">Update</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n\r\n    <!--skills section-->\r\n    <mat-toolbar-row>\r\n      <mat-toolbar class=\"md-toolbar\">\r\n        <span>Skills</span>\r\n        <span class=\"md-toolbar-spacer\"></span>\r\n        <button mat-icon-button (click)=\"saveTSkills()\">\r\n          <mat-icon matTooltip=\"Save\" class=\"material-icons\">save</mat-icon>\r\n        </button>\r\n      </mat-toolbar>\r\n    </mat-toolbar-row>\r\n    <!--<mat-card-content *ngIf=\"trainer != undefined && skills != undefined\">-->\r\n    <mat-card-content>\r\n      <div class=\"md-padding\" layout=\"column\">\r\n        <h2 matSubheader>Select a skill:</h2>\r\n        <mat-chip-list>\r\n          <mat-chip *ngFor=\"let skill of skillsList\" (click)=\"addSkill(skill)\">\r\n            {{skill}}\r\n          </mat-chip>\r\n        </mat-chip-list>\r\n        <hr>\r\n        <h2 matSubheader>Current skills:</h2>\r\n        <mat-list>\r\n          <button mat-button class=\"md-list-item\" *ngFor=\"let skill of trainer.skills\" (click)=\"removeSkill(skill)\">\r\n            <mat-icon class=\"material-icons\" style=\"color: #FB8C00\">stars</mat-icon>\r\n            <h5>{{skill.name}}</h5>\r\n          </button>\r\n        </mat-list>\r\n      </div>\r\n    </mat-card-content>\r\n\r\n    <!--certifications section-->\r\n    <!--<mat-card-content *ngIf=\"trainer != undefined && skills != undefined\">-->\r\n    <mat-toolbar-row>\r\n      <mat-toolbar class=\"md-toolbar\">\r\n        <span>Certifications</span>\r\n        <span class=\"md-toolbar-spacer\"></span>\r\n        <button mat-icon-button (click)=\"inputCert.click()\">\r\n          <input class=\"inputFile\" #inputCert  type=\"file\" (change)=\"getCert($event)\">\r\n          <mat-icon matTooltip=\"Add Certification\" class=\"material-icons md-toolbar-icon\">add_circle</mat-icon>\r\n        </button>\r\n      </mat-toolbar>\r\n    </mat-toolbar-row>\r\n\r\n    <mat-card-content>\r\n      <!--see the list of certifications and remove any that exist-->\r\n      <div class=\"md-padding\" layout=\"column\">\r\n        <div class=\"certAddBox\" layout=\"row\" *ngIf=\"certFile != undefined\">\r\n          <div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Certification Name\" name=\"certName\" [(ngModel)]=\"certName\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <label>{{certFile[0].name}}</label>\r\n            <button mat-button (click)=\"uploadCertification()\" *ngIf=\"certName != undefined\">Update</button>\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <mat-divider *ngIf=\"certFile != undefined\"></mat-divider>\r\n        <span *ngIf=\"trainer.certifications == null\">\r\n                <h6>You have no certifications selected. Try adding some.</h6>\r\n            </span>\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let cert of trainer.certifications\">\r\n            <mat-icon matListIcon class=\"material-icons\" style=\"color: black;\">insert_drive_file</mat-icon>\r\n            <h3 matLine>{{cert.name}}</h3>\r\n            <span class=\"md-toolbar-spacer\"></span>\r\n            <button mat-icon-button class=\"md-icon-button\" (click)=\"removeCertification(cert)\">\r\n              <mat-icon matTooltip=\"Remove Certification\" class=\"material-icons\" style=\"color: black\">remove_circle</mat-icon>\r\n            </button>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n    </mat-card-content>\r\n\r\n    <div *ngIf=\"trainer == undefined || skills == undefined\" layout=\"column\" layout-wrap layout-align=\"center center\">\r\n      <div flex=\"100\"> &nbsp;</div>\r\n      <mat-spinner flex=\"100\" md-mode=\"indeterminate\"></mat-spinner>\r\n      <div flex=\"100\"> &nbsp;</div>\r\n    </div>\r\n  </mat-card>\r\n\r\n\r\n  <!--  -->\r\n  <!--  -->\r\n  <!--  -->\r\n  <!--  -->\r\n  <div *ngIf=\"false\">\r\n\r\n    <!--<mat-card *ngIf=\"tId > -1\" md-whiteframe=\"8\" ng-cloak>-->\r\n    <mat-card md-whiteframe=\"8\" ng-cloak>\r\n      <mat-toolbar layout=\"columns\">\r\n        <div class=\"md-toolbar-tools\">\r\n          <span> Profile </span>\r\n        </div>\r\n      </mat-toolbar>\r\n\r\n      <!--info section-->\r\n      <!--<mat-card-content layout=\"columns\" layout-padding flex *ngIf=\"trainer != undefined && skills != undefined\">-->\r\n      <mat-card-content layout=\"columns\" layout-padding flex>\r\n        <img layout=\"column\" style=\"border-radius: 50%\" alt=\"\"\r\n             ng-src=\"https://app.revature.com/core/resources/download/default/interns/image?t=1486138020884\"\r\n             id=\"displayImage\" class=\"width-200 height-200\"\r\n             src=\"https://app.revature.com/core/resources/download/default/interns/image?t=1486138020884\">\r\n        <div layout=\"column\">\r\n          <div layout=\"row\" flex layout-fill>\r\n            <!--<form class=\"nameForm\" name=\"nameForm\" (submit)=\"updateName(nameForm.$valid)\" novalidate>-->\r\n            <!--<mat-form-field flex>-->\r\n\r\n            <!--<h3>{{trainer.firstName}}</h3>-->\r\n            <!--</mat-form-field>-->\r\n            <!--<mat-form-field flex>-->\r\n\r\n            <!--<h3>{{trainer.lastName}}</h3>-->\r\n            <!--</mat-form-field>-->\r\n            <!--</form>-->\r\n          </div>\r\n          <div layout=\"row\">\r\n            <!--need to figure out accessing the file, as far as permissions go-->\r\n            <label> Current Resume: </label>\r\n            <label *ngIf=\"trainer.resume != null\"> {{trainer.resume}}</label>\r\n            <label *ngIf=\"trainer.resume == null\">No resume on file</label> <br>\r\n          </div>\r\n          <div layout=\"row\">\r\n            <!--<input class=\"ng-hide\" id=\"input-file-id\"  type=\"file\" [(ngModel)]=\"myFile\">-->\r\n            <label *ngIf=\"lockProfile\" class=\"md-button md-icon-button\">\r\n              <mat-icon class=\"material-icons revOrange\"> add_circle</mat-icon>\r\n              <span matTooltip=\"Add\" class=\"md-title\"> Add/Update Resume </span>\r\n            </label>\r\n            <div *ngIf=\"myFile != undefined\">\r\n              <!--<label>{{myFile.name}}</label>-->\r\n              <button mat-button *ngIf=\"lockProfile\" (click)=\"uploadResume()\">Update</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n      <!--skills section-->\r\n      <mat-card-content *ngIf=\"trainer != undefined && skills != undefined\">\r\n        <mat-toolbar class=\"md-primary md-hue-2\" layout=\"columns\">\r\n          <div class=\"md-toolbar-tools\">\r\n            <span> Skills </span>\r\n            <button mat-button class=\"mat-icon-button\" *ngIf=\"lockProfile\" (click)=\"saveTSkills()\">\r\n              <span matTooltip=\"Save\" class=\"md-title\"> Save Skills </span>\r\n              <i class=\"material-icons\">save</i>\r\n            </button>\r\n          </div>\r\n        </mat-toolbar>\r\n        <div class=\"md-padding\" layout=\"column\">\r\n          <h2 matSubheader *ngIf=\"lockProfile\">Select a skill:</h2>\r\n          <mat-chip *ngFor=\"let skill of skillsList\" (click)=\"addSkill(skill)\">\r\n            {{skill}}\r\n          </mat-chip>\r\n          <mat-chip-list class=\"fixedRows\">\r\n            <h2 matSubheader>Current skills:</h2>\r\n            <button mat-button class=\"md-list-item\" *ngFor=\"let skill of trainer.skills\">\r\n              <mat-icon class=\"md-avatar-icon material-icons\" style=\"color: #FB8C00;\">stars</mat-icon>\r\n              <h5>{{skill.name}}</h5>\r\n            </button>\r\n          </mat-chip-list>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n      <!--certifications section-->\r\n      <mat-card-content *ngIf=\"trainer != undefined && skills != undefined\">\r\n        <mat-toolbar class=\"md-primary md-hue-2\" layout=\"columns\">\r\n          <div class=\"md-toolbar-tools\">\r\n            <span> Certifications </span>\r\n            <span flex> </span>\r\n            <!--<input class=\"ng-hide\" id=\"input-file-cert\" type=\"file\" [(ngModel)]=\"certFile\">-->\r\n            <label class=\"md-icon-button\" *ngIf=\"lockProfile\">\r\n              <mat-icon md-menu-origin class=\"material-icons\"> add_circle</mat-icon>\r\n              <span matTooltip=\"add\" class=\"md-title\"> Add Certification </span>\r\n            </label>\r\n          </div>\r\n        </mat-toolbar>\r\n        <!--see the list of certifications and remove any that exist-->\r\n        <div class=\"md-padding\" layout=\"column\">\r\n          <div class=\"certAddBox\" layout=\"row\" *ngIf=\"certFile != undefined\">\r\n            <div>\r\n              <mat-form-field flex>\r\n                <label> Certification Name </label>\r\n                <!--<input [(ngModel)]=\"certName\" required>-->\r\n              </mat-form-field>\r\n              <br>\r\n              <!--<label>{{certFile.name}}</label>-->\r\n              <!--<button mat-button *ngIf=\"lockProfile\" (click)=\"uploadCertification()\" *ngIf=\"certName != undefined\">Update-->\r\n              <!--</button>-->\r\n              <br>\r\n            </div>\r\n          </div>\r\n          <mat-divider *ngIf=\"certFile != undefined\"></mat-divider>\r\n          <span *ngIf=\"trainer.certifications == null\">\r\n                <h6>You have no certifications selected. Try adding some.</h6>\r\n            </span>\r\n          <mat-list>\r\n            <mat-list-item *ngFor=\"let cert of trainer.certifications\">\r\n              <mat-icon md-svg-icon=\"img/ic_sim_card_black_24px.svg\" class=\"revOrange\"></mat-icon>\r\n              <h3> {{cert.name}} </h3>\r\n              <span flex></span>\r\n              <button mat-button class=\"md-icon-button\" *ngIf=lockProfile (click)=\"removeCertification(cert)\">\r\n                <span matTooltip=\"Remove\" class=\"md-title revOrange\">Remove Certification</span>\r\n                <i class=\"material-icons\">remove_circle</i>\r\n              </button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n      </mat-card-content>\r\n\r\n      <div *ngIf=\"trainer == undefined || skills == undefined\" layout=\"column\" layout-wrap layout-align=\"center center\">\r\n        <div flex=\"100\"> &nbsp;</div>\r\n        <mat-spinner flex=\"100\" md-mode=\"indeterminate\"></mat-spinner>\r\n        <div flex=\"100\"> &nbsp;</div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_skill_skill_service__ = __webpack_require__("./src/app/services/skill/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trainer_trainer_service__ = __webpack_require__("./src/app/services/trainer/trainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_s3_credential_s3_credential_service__ = __webpack_require__("./src/app/services/s3-credential/s3-credential.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(trainerService, skillService, s3Service) {
        this.trainerService = trainerService;
        this.skillService = skillService;
        this.s3Service = s3Service;
        this.fb = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]();
        this.nameForm = this.fb.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required)
        });
        // data
        this.skills = [
            { skillId: 1, name: 'Java', active: true },
            { skillId: 2, name: 'SQL', active: true },
            { skillId: 3, name: 'Angular', active: true },
            { skillId: 4, name: 'C++', active: true }
        ];
        this.nameFound = false;
        this.certFile = null;
        this.skillsList = [];
        this.trainer = {
            trainerId: 1,
            firstName: 'Joseph',
            lastName: 'Wong',
            skills: [],
            resume: null,
            certifications: [],
            active: true
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.populateSkillList();
        // data gathering
        // id is hard coded for testing. unless you click on a trainer in the trainer page.
        // if (this.tId > -1) {
        //   this.lockProfile = false;
        //   this.trainerService.getById(this.tId).subscribe(response => {this.trainer = response; this.getAllSkills(); },
        //     () => this.showToast('Could not fetch trainer.'));
        // } else {
        //   this.trainerService.getByFirstNameAndLastName(this.fName, this.lName).subscribe(response => {this.trainer = response; this.getAllSkills(); },
        //     () => this.showToast('Could not fetch trainer.'));
        //   this.lockProfile = true;
        // }
        //
        // // grab credentials for s3
        // this.s3Service.getCreds().subscribe( response => this.creds = response, () => this.showToast('Failed to fetch Credentials'));
    };
    ProfileComponent.prototype.getFiles = function (event) {
        this.myFile = event.target.files;
        console.log(this.myFile);
    };
    ProfileComponent.prototype.getCert = function (event) {
        this.certFile = event.target.files;
    };
    ProfileComponent.prototype.showToast = function (message) {
        // this.aCtrl.showToast( message );
    };
    ProfileComponent.prototype.uploadResume = function () {
        //   const path = 'Resumes/' + this.trainer.trainerId + '_' + this.myFile.name;
        //
        //   // This initializes a bucket with the keys obtained from Creds rest controller
        //   const bucket = new AWS.S3({
        //     apiVersion: '2006-03-01',
        //     accessKeyId: this.creds.ID,
        //     secretAccessKey: this.creds.SecretKey,
        //     region: 'us-east-1',
        //     httpOptions: {
        //       proxy: 'http://dev.assignforce.revature.pro/'
        //     }
        //   });
        //
        //   // set the parameters needed to put an object in the aws s3 bucket
        //   const params = {
        //     Bucket: this.creds.BucketName,
        //     Key: path,
        //     Body: this.myFile
        //   };
        //
        //   // putting an object in the s3 bucket
        //   bucket.putObject(params, function (err) {
        //     if (err) {
        //       this.showToast('could not upload file.');
        //       return;
        //     }
        //   });
        //
        this.trainer.resume = this.myFile[0].name; // set the trainer resume to the file name(s3 file key to grab that object)
        //
        //   // save the modified trainer resume field
        //   this.trainerService.update(this.trainer).subscribe( () => {},
        //     () => this.showToast('Failed to upload resume'),
        //     () => this.showToast('Resume upload finished'));
        //
        //   // set my file to undefined so that update and label will be hidden in the html
        this.myFile = undefined;
    };
    //Updates user's name
    ProfileComponent.prototype.updateName = function () {
        console.log(this.nameForm.value.firstName);
        this.nameFound = true;
        this.trainer.firstName = this.nameForm.value.firstName;
        this.trainer.lastName = this.nameForm.value.lastName;
    };
    // called to save the current state of the trainers skills
    ProfileComponent.prototype.saveTSkills = function () {
        var _this = this;
        this.trainerService
            .update(this.trainer)
            .subscribe(function () { }, function () { return _this.showToast('Could not save your skills.'); }, function () { return _this.showToast('Skills have been saved!'); });
    };
    // add a skill to the current trainer
    ProfileComponent.prototype.addSkill = function (skill) {
        // add the skill to the trainer skill array
        for (var i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === skill) {
                this.trainer.skills.push(this.skills[i]);
                break;
            }
        }
        this.remove(skill);
    };
    // remove the same skill from the skill list array
    ProfileComponent.prototype.remove = function (skill) {
        var index = this.skillsList.indexOf(skill);
        if (index >= 0) {
            this.skillsList.splice(index, 1);
        }
    };
    // remove a trainer skill on the bottom
    ProfileComponent.prototype.removeSkill = function (skill) {
        for (var i = 0; i < this.trainer.skills.length; i++) {
            if (this.trainer.skills[i] === skill) {
                this.skillsList.push(skill.name);
                this.trainer.skills.splice(i, 1);
                break;
            }
        }
    };
    // // func to upload a resume to the s3 bucket
    ProfileComponent.prototype.uploadCertification = function () {
        // set the path to certifications folder and use trainer id with the file name
        var path = 'Certifications/' + this.trainer.trainerId + '_' + this.certFile[0].name;
        //
        //   // create a certification object to save in the database
        var certification = {
            file: path,
            name: this.certName,
            trainer: this.trainer.trainerId
        };
        //
        this.trainer.certifications.push(certification); // add the certification to the trainer
        //
        //   // update trainer
        //   this.trainerService.update(this.trainer).subscribe( () => {},
        //     () => this.showToast('Failed saving Certification.'),
        //     () => this.showToast('Certification has been saved.'));
        //
        //   // create a aws s3 bucket
        //   const bucket = new AWS.S3({
        //     apiVersion: '2006-03-01',
        //     accessKeyId: this.creds.ID,
        //     secretAccessKey: this.creds.SecretKey,
        //     region: 'us-east-1',
        //     sslEnabled: false,
        //     httpOptions: {
        //       proxy: 'http://dev.assignforce.revature.pro/'
        //     }
        //   });
        //
        //   // set the parameters needed to put an object in the aws s3 bucket
        //   const params = {
        //     Bucket: this.creds.BucketName,
        //     Key: path,
        //     Body: this.certFile
        //   };
        //
        //   // putting an object in the s3 bucket
        //   bucket.putObject(params, function (err) {
        //     if (err) {
        //       this.showToast('File could not be uploaded.');
        //     }
        //   });
        //
        this.certFile = undefined;
        this.certName = undefined;
    };
    // remove a certification from a trainer(need to remove the certification from the certification Table)
    ProfileComponent.prototype.removeCertification = function (cert) {
        var _this = this;
        for (var i = 0; i < this.trainer.certifications.length; i++) {
            if (cert.name === this.trainer.certifications[i].name) {
                this.trainer.certifications.splice(i, 1);
            }
        }
        this.trainerService
            .update(this.trainer)
            .subscribe(function () { }, function (err) { return _this.showToast(err); }, function () { return _this.showToast('Removed Certification Successfully'); });
    };
    // queries the database for skills. to be called after a change to the skills array
    // rePullSkills() {
    //   this.skillsList = undefined;
    //   this.skillService.getAll().subscribe( response => this.skillsList = response, () => this.showToast('Could not fetch skills.'));
    // }
    // queries the database for the trainer. to be called after a change to the trainer's properties
    ProfileComponent.prototype.pullTrainer = function () {
        var _this = this;
        this.trainer = undefined;
        this.trainerService
            .getById(this.tId)
            .subscribe(function (response) { return (_this.trainer = response); }, function () { return _this.showToast('Could not fetch trainer.'); });
    };
    // grab all the skills and create a skill list
    ProfileComponent.prototype.getAllSkills = function () {
        var _this = this;
        this.skillService.getAll().subscribe(function (response) {
            _this.skills = response;
            var status = true;
            for (var i = 0; i < _this.skills.length; i++) {
                for (var j = 0; j < _this.trainer.skills.length; j++) {
                    if (_this.skills[j].skillId === _this.skills[i].skillId) {
                        status = false;
                        break;
                    }
                }
                if (status) {
                    _this.skillsList.push(_this.skills[i].name);
                }
                status = true;
            }
        }, function () { return _this.showToast('Could not fetch skills.'); });
    };
    ProfileComponent.prototype.populateSkillList = function () {
        for (var i = 0; i < this.skills.length; i++) {
            this.skillsList.push(this.skills[i].name);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProfileComponent.prototype, "fName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProfileComponent.prototype, "lName", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_trainer_trainer_service__["a" /* TrainerService */],
            __WEBPACK_IMPORTED_MODULE_1__services_skill_skill_service__["a" /* SkillService */],
            __WEBPACK_IMPORTED_MODULE_3__services_s3_credential_s3_credential_service__["a" /* S3CredentialService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/reports.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.mat-header-cell.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reports works!\r\n</p>\r\n\r\n<!--Main Toolbar -->\r\n<mat-toolbar color=\"#333\">\r\n  <mat-toolbar-row>\r\n    <span> Reports </span>\r\n    <span flex> </span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<!--Future Projection Tab-->\r\n<mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Batch Projection</mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<!--Graduates Table and Graph Accordion-->\r\n<mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Graduate Summary for 2017</mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"example-container mat-elevation-z8\">\r\n      <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"position\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"weight\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"symbol\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<!--Incoming Trianee Table and Graph Accordion-->\r\n<mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Incoming Trainee Summary for 2018</mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"example-container mat-elevation-z8\">\r\n      <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"position\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"weight\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"symbol\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./src/app/components/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
];
var ReportsComponent = (function () {
    function ReportsComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatTableDataSource */](ELEMENT_DATA);
    }
    ReportsComponent.prototype.ngOnInit = function () { };
    ReportsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSort */])
    ], ReportsComponent.prototype, "sort", void 0);
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reports',
            template: __webpack_require__("./src/app/components/reports/reports.component.html"),
            styles: [__webpack_require__("./src/app/components/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/trainers/trainer-item/trainer-item.component.css":
/***/ (function(module, exports) {

module.exports = ".revOrange {\r\n  color: #f26a25;\r\n}\r\n\r\n.md-toolbar-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nmat-card {\r\n  margin: 0 16px;\r\n  padding: 0;\r\n}\r\n\r\nmat-toolbar {\r\n  padding: 0px 16px;\r\n  background-color: #37474f;\r\n  color: #e0e4e6;\r\n}\r\n\r\nmat-list-item {\r\n  margin-right: 7px;\r\n  -webkit-transition: background 0.3s linear;\r\n  transition: background 0.3s linear;\r\n}\r\n\r\nmat-list-item:hover {\r\n  background-color: #dddddd;\r\n}\r\n\r\nmat-card-content {\r\n  margin: 0px;\r\n  padding: 16px;\r\n}\r\n\r\nmat-icon {\r\n  margin: 0;\r\n}\r\n\r\ni {\r\n  margin: 0px;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/trainers/trainer-item/trainer-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list-item mat-ripple=\"#ff0000\" *ngIf=\"trainer.active\">\r\n  <mat-icon matListIcon style=\"color: #000;\" >people</mat-icon>\r\n    <h4 matLine> {{ trainer.firstName }} {{ trainer.lastName }} </h4>\r\n    <p *ngIf=\"trainer.skills.length > 0\" matLine> Skills: Test </p>\r\n    <p *ngIf=\"trainer.skills.length <= 0\" matLine> Skills: none </p>\r\n  <span class=\"md-toolbar-spacer\"> </span>\r\n\r\n  <button mat-icon-button (click)=\"grabS3Resume(trainer)\" matTooltip=\"Download Resume\">\r\n    <mat-icon class=\"revOrange\">file_download</mat-icon>\r\n  </button>\r\n  <button mat-icon-button (click)=\"removeTrainer(trainer)\" *ngIf=\"isManager==true\" matTooltip=\"Deactivate Trainer\">\r\n    <mat-icon class=\"revOrange\">remove_circle</mat-icon>\r\n  </button>\r\n</mat-list-item>\r\n\r\n<mat-list-item class=\"md-2-line\" mat-ripple=\"#ff0000\" *ngIf=\"!trainer.active\">\r\n  <mat-icon matListIcon style=\"color: #000;\" >people</mat-icon>\r\n    <h4 matLine> {{ trainer.firstName }} {{ trainer.lastName }} </h4>\r\n    <p *ngIf=\"trainer.skills\" matLine> Skills: Test </p>\r\n    <p *ngIf=\"!trainer.skills\" matLine> Skills: none </p>\r\n  <span class=\"md-toolbar-spacer\"> </span>\r\n  <!--button activates a Trainer-->\r\n  <button mat-icon-button (click)=\"activateTrainer(trainer)\" *ngIf=\"isManager==true\" matTooltip=\"Reactivate Trainer\">\r\n    <mat-icon class=\"revOrange\">add_circle</mat-icon>\r\n  </button>\r\n</mat-list-item>"

/***/ }),

/***/ "./src/app/components/trainers/trainer-item/trainer-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Trainer__ = __webpack_require__("./src/app/model/Trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainerItemComponent = (function () {
    function TrainerItemComponent() {
        // @Input() trainer: Trainer = new Trainer();
        this.trainer = null;
    }
    TrainerItemComponent.prototype.ngOnInit = function () {
        this.isManager = true;
    };
    TrainerItemComponent.prototype.removeTrainer = function (trainer) {
        trainer.active = false;
    };
    TrainerItemComponent.prototype.activateTrainer = function (trainer) {
        trainer.active = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_Trainer__["a" /* Trainer */])
    ], TrainerItemComponent.prototype, "trainer", void 0);
    TrainerItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trainer-item',
            template: __webpack_require__("./src/app/components/trainers/trainer-item/trainer-item.component.html"),
            styles: [__webpack_require__("./src/app/components/trainers/trainer-item/trainer-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainerItemComponent);
    return TrainerItemComponent;
}());



/***/ }),

/***/ "./src/app/components/trainers/trainers-add/trainers-add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trainers/trainers-add/trainers-add.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h2 mat-dialog-title>Add New Trainer</h2>-->\r\n<!--<div mat-dialog-content>-->\r\n  <!--<p>First Name:</p>-->\r\n  <!--<mat-form-field class=\"update-form\" style=\"width: 100%\">-->\r\n    <!--<input matInput tabindex=\"1\" [(ngModel)]=\"data.trainer.firstName\">-->\r\n  <!--</mat-form-field>-->\r\n  <!--<p>Last Name:</p>-->\r\n  <!--<mat-form-field class=\"update-form\" style=\"width: 100%\">-->\r\n    <!--<input matInput tabindex=\"2\"  [(ngModel)]=\"data.trainer.lastName\">-->\r\n  <!--</mat-form-field>-->\r\n<!--</div>-->\r\n<!--<div mat-dialog-actions>-->\r\n  <!--<button mat-button [mat-dialog-close]=\"data.trainer\" tabindex=\"4\" (click)=\"onSubmit()\">Add</button>-->\r\n  <!--<button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/trainers/trainers-add/trainers-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainersAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Skill__ = __webpack_require__("./src/app/model/Skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trainer_trainer_service__ = __webpack_require__("./src/app/services/trainer/trainer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TrainersAddComponent = (function () {
    function TrainersAddComponent(dialogRef, dataP, trainerService) {
        this.dialogRef = dialogRef;
        this.dataP = dataP;
        this.trainerService = trainerService;
        this.Skillz = [
            {
                skillId: 1,
                name: 'Java',
                active: true
            }
        ];
        this.trainer = {
            trainerId: 0,
            firstName: '',
            lastName: '',
            skills: __WEBPACK_IMPORTED_MODULE_2__model_Skill__["a" /* Skill */][1],
            certifications: '',
            active: true,
            resume: '',
            unavailabilities: null
        };
        this.data = {
            trainer: this.trainer
        };
    }
    TrainersAddComponent.prototype.ngOnInit = function () { };
    // onSubmit() {
    //   this.trainerService.create(this.trainer);
    // }
    TrainersAddComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TrainersAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trainers-add',
            template: __webpack_require__("./src/app/components/trainers/trainers-add/trainers-add.component.html"),
            styles: [__webpack_require__("./src/app/components/trainers/trainers-add/trainers-add.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__services_trainer_trainer_service__["a" /* TrainerService */]])
    ], TrainersAddComponent);
    return TrainersAddComponent;
}());



/***/ }),

/***/ "./src/app/components/trainers/trainers.component.css":
/***/ (function(module, exports) {

module.exports = ".revOrange {\r\n  color: #f26a25;\r\n}\r\n\r\n.md-toolbar-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nmat-card {\r\n  margin: 0 16px;\r\n  padding: 0;\r\n}\r\n\r\nmat-toolbar {\r\n  padding: 0px 16px;\r\n  background-color: #37474F;\r\n  color: #E0E4E6;\r\n}\r\n\r\nmat-list-item{\r\n  margin-right: 7px;\r\n  -webkit-transition: background 0.3s linear;\r\n  transition: background 0.3s linear;\r\n}\r\n\r\nmat-list-item:hover{\r\n  background-color: #DDDDDD;\r\n}\r\n\r\nmat-card-content {\r\n  margin: 0px;\r\n  padding: 16px;\r\n}\r\n\r\nmat-icon {\r\n  margin: 0;\r\n}\r\n\r\ni {\r\n  margin: 0px;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/trainers/trainers.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 5%\"></div>\r\n<mat-card>\r\n  <!--orange trainer title above list of trainers-->\r\n  <mat-toolbar>\r\n    <mat-toolbar-row>\r\n      <span> Trainers </span>\r\n      <span class=\"md-toolbar-spacer\"> </span>\r\n      <button mat-icon-button *ngIf=\"isManager==true\" (click)=\"addTrainer()\"  matTooltip=\"Add Trainer\">\r\n        <mat-icon>add_circle</mat-icon>\r\n      </button>\r\n      <button mat-icon-button (click)=\"showCalendar()\" matTooltip=\"View PTO Calendar\">\r\n        <mat-icon>perm_contact_calendar</mat-icon>\r\n      </button>\r\n\r\n      <!--<button class=\"mat-icon-button\" ng-click=\"tCtrl.googleAuth()\">-->\r\n      <!--<mat-tooltip class=\"mat-title\"> Google Authentication </mat-tooltip>-->\r\n      <!--<mat-icon mat-svg-icon=\"img/ic_perm_contact_calendar_white_24px.svg\"> </mat-icon>-->\r\n      <!--</button>-->\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <!--shows a list of all the active trainers-->\r\n  <mat-card-content *ngIf=\"trainers != undefined\">\r\n    <mat-list *ngFor=\"let trainer of trainers\">\r\n    <app-trainer-item [trainer]=\"trainer\" *ngIf=\"trainer.active\"></app-trainer-item>\r\n    </mat-list>\r\n  </mat-card-content>\r\n  <!--displays a loading circle if trainers is undefined-->\r\n  <div *ngIf=\"trainers == undefined\">\r\n    <div fxFlex=\"100\"> &nbsp;</div>\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n    <div fxFlex=\"100\"> &nbsp;</div>\r\n  </div>\r\n\r\n  <!--toolbar for the inactive trainers-->\r\n  <mat-toolbar fxLayout=\"column\">\r\n    <mat-toolbar-row>\r\n      <span class=\"cardbody\"> Inactive Trainers </span>\r\n      <span fxFlex> </span>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <!--shows a list of all inactive trainers-->\r\n  <mat-card-content class=\"md-padding\" *ngIf=\"trainers != undefined\">\r\n    <mat-list *ngFor=\" let trainer of trainers\">\r\n     <app-trainer-item [trainer]=\"trainer\" *ngIf=\"!trainer.active\"></app-trainer-item>\r\n    </mat-list>\r\n  </mat-card-content>\r\n  <!--shows a loading circle if trainers is undefined-->\r\n  <div *ngIf=\"trainers == undefined\" fxLayout=\"column\" fxLayoutWrap fxLayoutAlign=\"center center\">\r\n    <div fxFlex=\"100\"> &nbsp;</div>\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n    <div fxFlex=\"100\"> &nbsp;</div>\r\n  </div>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/trainers/trainers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Skill__ = __webpack_require__("./src/app/model/Skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainers_add_trainers_add_component__ = __webpack_require__("./src/app/components/trainers/trainers-add/trainers-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainersComponent = (function () {
    function TrainersComponent() {
        this.Skillz = [
            {
                skillId: 1,
                name: 'Java',
                active: true
            }
        ];
    }
    TrainersComponent.prototype.ngOnInit = function () {
        this.isManager = false;
        var Skillz = [
            {
                skillId: 1,
                name: 'Java',
                active: true
            }
        ];
        this.trainers = [
            {
                trainerId: 1,
                firstName: 'James',
                lastName: 'Smith',
                skills: Skillz,
                certifications: 'Certs',
                active: true,
                resume: 'Resume'
            },
            {
                trainerId: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                skills: Skillz,
                certifications: 'Certs',
                active: false,
                resume: 'Resume'
            },
            {
                trainerId: 3,
                firstName: 'Jon',
                lastName: 'Jones',
                skills: Skillz,
                certifications: 'Certs',
                active: false,
                resume: 'Resume'
            },
            {
                trainerId: 4,
                firstName: 'Daniel',
                lastName: 'Cormier',
                skills: Skillz,
                certifications: 'Certs',
                active: true,
                resume: 'Resume'
            }
        ];
    };
    TrainersComponent.prototype.showCalendar = function () { };
    TrainersComponent.prototype.goToTrainer = function (trainer) { };
    TrainersComponent.prototype.grabS3Resume = function (trainer) { };
    TrainersComponent.prototype.addTrainer = function () {
        //add trainer
        var trainer = {
            trainerId: 0,
            firstName: '',
            lastName: '',
            skills: __WEBPACK_IMPORTED_MODULE_1__model_Skill__["a" /* Skill */][1],
            certifications: '',
            active: true,
            resume: '',
            unavailabilities: []
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__trainers_add_trainers_add_component__["a" /* TrainersAddComponent */], {
            width: '450px',
            data: {
                trainer: trainer
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //  this.addTrainer(result);
            }
        });
    };
    TrainersComponent.prototype.activateTrainer = function (trainer) {
        trainer.active = true;
    };
    TrainersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trainers',
            template: __webpack_require__("./src/app/components/trainers/trainers.component.html"),
            styles: [__webpack_require__("./src/app/components/trainers/trainers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainersComponent);
    return TrainersComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/springXsrfInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpringXsrfInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpringXsrfInterceptor = (function () {
    function SpringXsrfInterceptor(tokenService) {
        this.tokenService = tokenService;
        this.headerName = 'X-XSRF-TOKEN';
    }
    SpringXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    SpringXsrfInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["i" /* HttpXsrfTokenExtractor */]])
    ], SpringXsrfInterceptor);
    return SpringXsrfInterceptor;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */]
            ],
            declarations: []
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/mockdb/in-mem-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_batch_data__ = __webpack_require__("./src/app/mockdb/mockdata/batch.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mockdata_building_data__ = __webpack_require__("./src/app/mockdb/mockdata/building.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mockdata_curriculum_data__ = __webpack_require__("./src/app/mockdb/mockdata/curriculum.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mockdata_location_data__ = __webpack_require__("./src/app/mockdb/mockdata/location.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mockdata_setting_data__ = __webpack_require__("./src/app/mockdb/mockdata/setting.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mockdata_skill_data__ = __webpack_require__("./src/app/mockdb/mockdata/skill.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mockdata_trainer_data__ = __webpack_require__("./src/app/mockdb/mockdata/trainer.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InMemDbService = (function () {
    function InMemDbService() {
    }
    InMemDbService.prototype.createDb = function () {
        return {
            batch: __WEBPACK_IMPORTED_MODULE_1__mockdata_batch_data__["a" /* batches */],
            building: __WEBPACK_IMPORTED_MODULE_2__mockdata_building_data__["a" /* buildings */],
            curricula: __WEBPACK_IMPORTED_MODULE_3__mockdata_curriculum_data__["a" /* curriculum */],
            location: __WEBPACK_IMPORTED_MODULE_4__mockdata_location_data__["a" /* locations */],
            setting: __WEBPACK_IMPORTED_MODULE_5__mockdata_setting_data__["a" /* settings */],
            skill: __WEBPACK_IMPORTED_MODULE_6__mockdata_skill_data__["a" /* skills */],
            trainer: __WEBPACK_IMPORTED_MODULE_7__mockdata_trainer_data__["a" /* trainers */]
        };
    };
    InMemDbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], InMemDbService);
    return InMemDbService;
}());



/***/ }),

/***/ "./src/app/mockdb/mockdata/batch.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return batches; });
var batches = [
    {
        id: 187,
        name: '1708 Aug14 Java',
        startDate: 1502683200000,
        endDate: 1508472000000,
        curriculum: {
            currId: 1,
            name: 'Java',
            skills: [
                {
                    skillId: 4,
                    name: 'AngularJS',
                    active: true
                },
                {
                    skillId: 1,
                    name: 'Core Java',
                    active: true
                },
                {
                    skillId: 2,
                    name: 'JUnit',
                    active: true
                },
                {
                    skillId: 3,
                    name: 'Spring',
                    active: true
                },
                {
                    skillId: 50,
                    name: 'Java Servlets',
                    active: true
                },
                {
                    skillId: 51,
                    name: 'JSP',
                    active: true
                },
                {
                    skillId: 25,
                    name: 'Oracle SQL',
                    active: true
                },
                {
                    skillId: 48,
                    name: 'JDBC',
                    active: true
                },
                {
                    skillId: 49,
                    name: 'HTML',
                    active: true
                },
                {
                    skillId: 52,
                    name: 'Freemarker',
                    active: true
                },
                {
                    skillId: 53,
                    name: 'CSS',
                    active: true
                },
                {
                    skillId: 54,
                    name: 'jQuery',
                    active: true
                },
                {
                    skillId: 55,
                    name: 'Hibernate',
                    active: true
                },
                {
                    skillId: 56,
                    name: 'REST',
                    active: true
                },
                {
                    skillId: 57,
                    name: 'SOAP',
                    active: true
                }
            ],
            active: true,
            core: true
        },
        focus: null,
        batchStatus: {
            batchStatusID: 1,
            batchStatusName: 'Scheduled'
        },
        trainer: {
            trainerId: 13,
            firstName: 'Genesis',
            lastName: 'Bonds',
            resume: null,
            unavailabilities: [
                {
                    startDate: 1494820800000,
                    endDate: 1500609600000,
                    id: 212
                },
                {
                    startDate: 1493006400000,
                    endDate: 1495166400000,
                    id: 40
                },
                {
                    startDate: 1493006400000,
                    endDate: 1495166400000,
                    id: 44
                },
                {
                    startDate: 1502683200000,
                    endDate: 1508472000000,
                    id: 348
                },
                {
                    startDate: 1510549200000,
                    endDate: 1516942800000,
                    id: 472
                }
            ],
            skills: [],
            certifications: [],
            active: true
        },
        cotrainer: {
            trainerId: 36,
            firstName: 'Mehrab',
            lastName: 'Rahman',
            resume: null,
            unavailabilities: [
                {
                    startDate: 1512363600000,
                    endDate: 1518757200000,
                    id: 490
                },
                {
                    startDate: 1521432000000,
                    endDate: 1527220800000,
                    id: 609
                }
            ],
            skills: [
                {
                    skillId: 4,
                    name: 'AngularJS',
                    active: true
                },
                {
                    skillId: 1,
                    name: 'Core Java',
                    active: true
                },
                {
                    skillId: 2,
                    name: 'JUnit',
                    active: true
                },
                {
                    skillId: 5,
                    name: 'Selenium/WebDriver',
                    active: true
                },
                {
                    skillId: 3,
                    name: 'Spring',
                    active: true
                },
                {
                    skillId: 50,
                    name: 'Java Servlets',
                    active: true
                },
                {
                    skillId: 51,
                    name: 'JSP',
                    active: true
                },
                {
                    skillId: 25,
                    name: 'Oracle SQL',
                    active: true
                },
                {
                    skillId: 48,
                    name: 'JDBC',
                    active: true
                },
                {
                    skillId: 49,
                    name: 'HTML',
                    active: true
                },
                {
                    skillId: 53,
                    name: 'CSS',
                    active: true
                },
                {
                    skillId: 55,
                    name: 'Hibernate',
                    active: true
                },
                {
                    skillId: 56,
                    name: 'REST',
                    active: true
                },
                {
                    skillId: 57,
                    name: 'SOAP',
                    active: true
                },
                {
                    skillId: 69,
                    name: 'TestNG',
                    active: true
                },
                {
                    skillId: 68,
                    name: 'Cucumber',
                    active: true
                }
            ],
            certifications: [],
            active: true
        },
        skills: [],
        batchLocation: {
            id: 22,
            locationId: 1,
            locationName: 'Revature HQ',
            buildingId: 1,
            buildingName: '11730 Plaza American Drive (HQ)',
            roomId: 122,
            roomName: '209'
        }
    },
    {
        id: 191,
        name: '1610 Oct24 Java',
        startDate: 1477281600000,
        endDate: 1483678800000,
        curriculum: {
            currId: 1,
            name: 'Java',
            skills: [
                {
                    skillId: 4,
                    name: 'AngularJS',
                    active: true
                },
                {
                    skillId: 1,
                    name: 'Core Java',
                    active: true
                },
                {
                    skillId: 2,
                    name: 'JUnit',
                    active: true
                },
                {
                    skillId: 3,
                    name: 'Spring',
                    active: true
                },
                {
                    skillId: 50,
                    name: 'Java Servlets',
                    active: true
                },
                {
                    skillId: 51,
                    name: 'JSP',
                    active: true
                },
                {
                    skillId: 25,
                    name: 'Oracle SQL',
                    active: true
                },
                {
                    skillId: 48,
                    name: 'JDBC',
                    active: true
                },
                {
                    skillId: 49,
                    name: 'HTML',
                    active: true
                },
                {
                    skillId: 52,
                    name: 'Freemarker',
                    active: true
                },
                {
                    skillId: 53,
                    name: 'CSS',
                    active: true
                },
                {
                    skillId: 54,
                    name: 'jQuery',
                    active: true
                },
                {
                    skillId: 55,
                    name: 'Hibernate',
                    active: true
                },
                {
                    skillId: 56,
                    name: 'REST',
                    active: true
                },
                {
                    skillId: 57,
                    name: 'SOAP',
                    active: true
                }
            ],
            active: true,
            core: true
        },
        focus: null,
        batchStatus: {
            batchStatusID: 1,
            batchStatusName: 'Scheduled'
        },
        trainer: {
            trainerId: 11,
            firstName: 'Nicholas',
            lastName: 'Jurczak',
            resume: null,
            unavailabilities: [
                {
                    startDate: 1507521600000,
                    endDate: 1513314000000,
                    id: 473
                },
                {
                    startDate: 1519621200000,
                    endDate: 1525406400000,
                    id: 553
                },
                {
                    startDate: 1499659200000,
                    endDate: 1505448000000,
                    id: 257
                }
            ],
            skills: [],
            certifications: [],
            active: true
        },
        cotrainer: {
            trainerId: 10,
            firstName: 'Richard',
            lastName: 'Orr',
            resume: null,
            unavailabilities: [
                {
                    startDate: 1477281600000,
                    endDate: 1481259600000,
                    id: 1
                },
                {
                    startDate: 1498449600000,
                    endDate: 1504238400000,
                    id: 208
                },
                {
                    startDate: 1508731200000,
                    endDate: 1513314000000,
                    id: 468
                },
                {
                    startDate: 1515387600000,
                    endDate: 1521172800000,
                    id: 491
                }
            ],
            skills: [],
            certifications: [],
            active: true
        },
        skills: [
            {
                skillId: 1,
                name: 'Core Java',
                active: true
            },
            {
                skillId: 2,
                name: 'JUnit',
                active: true
            },
            {
                skillId: 3,
                name: 'Spring',
                active: true
            },
            {
                skillId: 4,
                name: 'AngularJS',
                active: true
            },
            {
                skillId: 25,
                name: 'Oracle SQL',
                active: true
            },
            {
                skillId: 48,
                name: 'JDBC',
                active: true
            },
            {
                skillId: 49,
                name: 'HTML',
                active: true
            },
            {
                skillId: 50,
                name: 'Java Servlets',
                active: true
            },
            {
                skillId: 51,
                name: 'JSP',
                active: true
            },
            {
                skillId: 52,
                name: 'Freemarker',
                active: true
            },
            {
                skillId: 53,
                name: 'CSS',
                active: true
            },
            {
                skillId: 54,
                name: 'jQuery',
                active: true
            },
            {
                skillId: 55,
                name: 'Hibernate',
                active: true
            },
            {
                skillId: 56,
                name: 'REST',
                active: true
            },
            {
                skillId: 57,
                name: 'SOAP',
                active: true
            }
        ],
        batchLocation: {
            id: 23,
            locationId: 1,
            locationName: 'Revature HQ',
            buildingId: null,
            buildingName: null,
            roomId: null,
            roomName: null
        }
    },
    {
        id: 192,
        name: '1611 Nov28 SDET',
        startDate: 1480309200000,
        endDate: 1486702800000,
        curriculum: {
            currId: 3,
            name: 'SDET',
            skills: [
                {
                    skillId: 5,
                    name: 'Selenium/WebDriver',
                    active: true
                },
                {
                    skillId: 47,
                    name: 'Core SDET',
                    active: true
                },
                {
                    skillId: 69,
                    name: 'TestNG',
                    active: true
                },
                {
                    skillId: 72,
                    name: 'Manual Testing',
                    active: true
                },
                {
                    skillId: 70,
                    name: 'Pyhton',
                    active: true
                },
                {
                    skillId: 71,
                    name: 'UFT',
                    active: true
                },
                {
                    skillId: 68,
                    name: 'Cucumber',
                    active: true
                }
            ],
            active: true,
            core: true
        },
        focus: null,
        batchStatus: {
            batchStatusID: 1,
            batchStatusName: 'Scheduled'
        },
        trainer: {
            trainerId: 7,
            firstName: 'Yuvi',
            lastName: 'Damodaran',
            resume: null,
            unavailabilities: [
                {
                    startDate: 1522641600000,
                    endDate: 1528430400000,
                    id: 615
                },
                {
                    startDate: 1499054400000,
                    endDate: 1504843200000,
                    id: 272
                },
                {
                    startDate: 1494216000000,
                    endDate: 1501214400000,
                    id: 32
                },
                {
                    startDate: 1493006400000,
                    endDate: 1495166400000,
                    id: 67
                },
                {
                    startDate: 1512968400000,
                    endDate: 1519362000000,
                    id: 492
                },
                {
                    startDate: 1505102400000,
                    endDate: 1510894800000,
                    id: 527
                },
                {
                    startDate: 1494216000000,
                    endDate: 1500004800000,
                    id: 529
                },
                {
                    startDate: 1493006400000,
                    endDate: 1493956800000,
                    id: 531
                }
            ],
            skills: [],
            certifications: [],
            active: true
        },
        cotrainer: null,
        skills: [
            {
                skillId: 5,
                name: 'Selenium/WebDriver',
                active: true
            },
            {
                skillId: 47,
                name: 'Core SDET',
                active: true
            },
            {
                skillId: 69,
                name: 'TestNG',
                active: true
            },
            {
                skillId: 72,
                name: 'Manual Testing',
                active: true
            },
            {
                skillId: 70,
                name: 'Pyhton',
                active: true
            },
            {
                skillId: 71,
                name: 'UFT',
                active: true
            },
            {
                skillId: 68,
                name: 'Cucumber',
                active: true
            }
        ],
        batchLocation: {
            id: 24,
            locationId: 1,
            locationName: 'Revature HQ',
            buildingId: null,
            buildingName: null,
            roomId: null,
            roomName: null
        }
    }
];


/***/ }),

/***/ "./src/app/mockdb/mockdata/building.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buildings; });
var buildings = [
    {
        name: 'Testing',
        location: 5,
        active: false,
        rooms: [],
        id: 52
    },
    {
        name: 'Chicago',
        location: 45,
        active: true,
        rooms: [],
        id: 64
    },
    {
        name: '11730 Plaza American Drive (HQ)',
        location: 1,
        active: true,
        rooms: [
            {
                roomID: 7,
                roomName: '208',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1495425600000,
                        endDate: 1501214400000,
                        id: 233
                    },
                    {
                        startDate: 1500868800000,
                        endDate: 1506657600000,
                        id: 312
                    },
                    {
                        startDate: 1493006400000,
                        endDate: 1493956800000,
                        id: 43
                    },
                    {
                        startDate: 1493006400000,
                        endDate: 1493956800000,
                        id: 532
                    },
                    {
                        startDate: 1494216000000,
                        endDate: 1500004800000,
                        id: 530
                    }
                ],
                active: true
            },
            {
                roomID: 1,
                roomName: '201',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1490587200000,
                        endDate: 1496376000000,
                        id: 12
                    },
                    {
                        startDate: 1499659200000,
                        endDate: 1505448000000,
                        id: 258
                    }
                ],
                active: true
            },
            {
                roomID: 2,
                roomName: '202',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1494216000000,
                        endDate: 1495166400000,
                        id: 211
                    },
                    {
                        startDate: 1502078400000,
                        endDate: 1507867200000,
                        id: 318
                    },
                    {
                        startDate: 1488171600000,
                        endDate: 1493956800000,
                        id: 33
                    },
                    {
                        startDate: 1498449600000,
                        endDate: 1504238400000,
                        id: 316
                    }
                ],
                active: true
            },
            {
                roomID: 3,
                roomName: '204',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1479099600000,
                        endDate: 1484283600000,
                        id: 4
                    },
                    {
                        startDate: 1493006400000,
                        endDate: 1498795200000,
                        id: 201
                    },
                    {
                        startDate: 1505102400000,
                        endDate: 1510894800000,
                        id: 528
                    }
                ],
                active: true
            },
            {
                roomID: 4,
                roomName: '205',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1498449600000,
                        endDate: 1504238400000,
                        id: 238
                    },
                    {
                        startDate: 1491796800000,
                        endDate: 1497585600000,
                        id: 37
                    }
                ],
                active: true
            },
            {
                roomID: 5,
                roomName: 'X1',
                building: 1,
                unavailabilities: [],
                active: false
            },
            {
                roomID: 6,
                roomName: '207',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1489982400000,
                        endDate: 1495771200000,
                        id: 6
                    },
                    {
                        startDate: 1489982400000,
                        endDate: 1495771200000,
                        id: 10
                    },
                    {
                        startDate: 1497844800000,
                        endDate: 1503633600000,
                        id: 254
                    }
                ],
                active: true
            },
            {
                roomID: 100,
                roomName: 'X2',
                building: 1,
                unavailabilities: [],
                active: false
            },
            {
                roomID: 101,
                roomName: 'X3',
                building: 1,
                unavailabilities: [],
                active: false
            },
            {
                roomID: 122,
                roomName: '209',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1495425600000,
                        endDate: 1501214400000,
                        id: 218
                    },
                    {
                        startDate: 1502683200000,
                        endDate: 1508472000000,
                        id: 349
                    }
                ],
                active: true
            },
            {
                roomID: 102,
                roomName: '203',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1494820800000,
                        endDate: 1500609600000,
                        id: 213
                    },
                    {
                        startDate: 1494820800000,
                        endDate: 1500609600000,
                        id: 47
                    }
                ],
                active: true
            },
            {
                roomID: 103,
                roomName: '206',
                building: 1,
                unavailabilities: [],
                active: true
            },
            {
                roomID: 142,
                roomName: '214',
                building: 1,
                unavailabilities: [
                    {
                        startDate: 1500868800000,
                        endDate: 1506657600000,
                        id: 314
                    }
                ],
                active: true
            }
        ],
        id: 1
    }
];


/***/ }),

/***/ "./src/app/mockdb/mockdata/curriculum.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curriculum; });
var curriculum = [
    {
        currId: 2,
        name: '.NET',
        skills: [
            {
                skillId: 59,
                name: 'ASP.NET MVC',
                active: true
            },
            {
                skillId: 60,
                name: 'ASP.NET WEB API',
                active: true
            },
            {
                skillId: 58,
                name: 'C#',
                active: true
            },
            {
                skillId: 66,
                name: 'ADO.NET',
                active: true
            },
            {
                skillId: 62,
                name: 'MSTest',
                active: true
            },
            {
                skillId: 67,
                name: 'T-SQL',
                active: true
            },
            {
                skillId: 65,
                name: 'Entity Framework',
                active: true
            },
            {
                skillId: 63,
                name: 'xUnit',
                active: true
            },
            {
                skillId: 64,
                name: 'NLog',
                active: true
            },
            {
                skillId: 61,
                name: 'IIS',
                active: true
            },
            {
                skillId: 46,
                name: 'Core .NET',
                active: true
            }
        ],
        active: true,
        core: true
    },
    {
        currId: 1,
        name: 'Java',
        skills: [
            {
                skillId: 4,
                name: 'AngularJS',
                active: true
            },
            {
                skillId: 1,
                name: 'Core Java',
                active: true
            },
            {
                skillId: 2,
                name: 'JUnit',
                active: true
            },
            {
                skillId: 3,
                name: 'Spring',
                active: true
            },
            {
                skillId: 50,
                name: 'Java Servlets',
                active: true
            },
            {
                skillId: 51,
                name: 'JSP',
                active: true
            },
            {
                skillId: 25,
                name: 'Oracle SQL',
                active: true
            },
            {
                skillId: 48,
                name: 'JDBC',
                active: true
            },
            {
                skillId: 49,
                name: 'HTML',
                active: true
            },
            {
                skillId: 52,
                name: 'Freemarker',
                active: true
            },
            {
                skillId: 53,
                name: 'CSS',
                active: true
            },
            {
                skillId: 54,
                name: 'jQuery',
                active: true
            },
            {
                skillId: 55,
                name: 'Hibernate',
                active: true
            },
            {
                skillId: 56,
                name: 'REST',
                active: true
            },
            {
                skillId: 57,
                name: 'SOAP',
                active: true
            }
        ],
        active: true,
        core: true
    },
    {
        currId: 3,
        name: 'SDET',
        skills: [
            {
                skillId: 5,
                name: 'Selenium/WebDriver',
                active: true
            },
            {
                skillId: 47,
                name: 'Core SDET',
                active: true
            },
            {
                skillId: 69,
                name: 'TestNG',
                active: true
            },
            {
                skillId: 72,
                name: 'Manual Testing',
                active: true
            },
            {
                skillId: 70,
                name: 'Pyhton',
                active: true
            },
            {
                skillId: 71,
                name: 'UFT',
                active: true
            },
            {
                skillId: 68,
                name: 'Cucumber',
                active: true
            }
        ],
        active: true,
        core: true
    }
];


/***/ }),

/***/ "./src/app/mockdb/mockdata/location.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locations; });
var locations = [
    {
        id: 1,
        name: 'Revature HQ',
        city: 'Reston',
        state: 'VA',
        active: true,
        buildings: [
            {
                id: 1,
                name: '11730 Plaza American Drive (HQ)',
                location: 1,
                active: true,
                rooms: [
                    {
                        roomID: 7,
                        roomName: '208',
                        building: 1,
                        unavailabilities: [
                            {
                                startDate: 1495425600000,
                                endDate: 1501214400000,
                                id: 233
                            },
                            {
                                startDate: 1500868800000,
                                endDate: 1506657600000,
                                id: 312
                            }
                        ],
                        active: true
                    },
                    {
                        active: true,
                        roomID: 1,
                        roomName: '201',
                        building: 1,
                        unavailabilities: [
                            {
                                startDate: 1490587200000,
                                endDate: 1496376000000,
                                id: 12
                            },
                            {
                                startDate: 1499659200000,
                                endDate: 1505448000000,
                                id: 258
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Tempe',
        city: 'ASU',
        state: 'AZ',
        active: true,
        buildings: [
            {
                id: 2,
                name: 'ASU Building 1',
                location: 2,
                active: true,
                rooms: []
            }
        ]
    },
    {
        id: 4,
        name: 'USF',
        city: 'Tempa',
        state: 'FL',
        active: true,
        buildings: []
    }
];


/***/ }),

/***/ "./src/app/mockdb/mockdata/setting.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
var settings = [
    {
        settingId: 1,
        alias: 'global',
        trainersPerPage: 0,
        reportGrads: 22,
        batchLength: 11,
        reportIncomingGrads: 26,
        minBatchSize: 10,
        maxBatchSize: 20,
        trainerBreakDays: 14,
        defaultLocation: 1,
        defaultBuilding: null,
        defaultNamePattern: '$y$m $mmm$d $c'
    }
];


/***/ }),

/***/ "./src/app/mockdb/mockdata/skill.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skills; });
var skills = [
    {
        skillId: 4,
        name: 'AngularJS',
        active: true
    },
    {
        skillId: 1,
        name: 'Core Java',
        active: true
    },
    {
        skillId: 2,
        name: 'JUnit',
        active: true
    },
    {
        skillId: 5,
        name: 'Selenium/WebDriver',
        active: true
    },
    {
        skillId: 3,
        name: 'Spring',
        active: true
    }
];


/***/ }),

/***/ "./src/app/mockdb/mockdata/trainer.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trainers; });
var trainers = [
    {
        trainerId: 1,
        firstName: 'August',
        lastName: 'Duet',
        resume: null,
        unavailabilities: [
            {
                startDate: 1502078400000,
                endDate: 1507867200000,
                id: 317
            },
            {
                startDate: 1517806800000,
                endDate: 1523592000000,
                id: 555
            },
            {
                startDate: 1508731200000,
                endDate: 1515128400000,
                id: 412
            },
            {
                startDate: 1495425600000,
                endDate: 1501214400000,
                id: 217
            },
            {
                startDate: 1494820800000,
                endDate: 1501819200000,
                id: 48
            },
            {
                startDate: 1494820800000,
                endDate: 1501819200000,
                id: 46
            }
        ],
        skills: [
            {
                skillId: 4,
                name: 'AngularJS',
                active: true
            },
            {
                skillId: 1,
                name: 'Core Java',
                active: true
            },
            {
                skillId: 2,
                name: 'JUnit',
                active: true
            },
            {
                skillId: 3,
                name: 'Spring',
                active: true
            },
            {
                skillId: 50,
                name: 'Java Servlets',
                active: true
            },
            {
                skillId: 51,
                name: 'JSP',
                active: true
            },
            {
                skillId: 48,
                name: 'JDBC',
                active: true
            },
            {
                skillId: 49,
                name: 'HTML',
                active: true
            },
            {
                skillId: 52,
                name: 'Freemarker',
                active: true
            },
            {
                skillId: 53,
                name: 'CSS',
                active: true
            },
            {
                skillId: 54,
                name: 'jQuery',
                active: true
            },
            {
                skillId: 55,
                name: 'Hibernate',
                active: true
            },
            {
                skillId: 56,
                name: 'REST',
                active: true
            },
            {
                skillId: 57,
                name: 'SOAP',
                active: true
            },
            {
                skillId: 70,
                name: 'Pyhton',
                active: true
            }
        ],
        certifications: [],
        active: true
    },
    {
        trainerId: 2,
        firstName: 'Fred',
        lastName: 'Belotte',
        resume: null,
        unavailabilities: [
            {
                startDate: 1494216000000,
                endDate: 1495166400000,
                id: 210
            },
            {
                startDate: 1512363600000,
                endDate: 1518757200000,
                id: 489
            },
            {
                startDate: 1520827200000,
                endDate: 1526616000000,
                id: 610
            },
            {
                startDate: 1503288000000,
                endDate: 1509681600000,
                id: 387
            },
            {
                startDate: 1495425600000,
                endDate: 1501214400000,
                id: 232
            }
        ],
        skills: [],
        certifications: [],
        active: true
    },
    {
        trainerId: 3,
        firstName: 'Joe',
        lastName: 'Kirkbride',
        resume: null,
        unavailabilities: [
            {
                startDate: 1498449600000,
                endDate: 1504238400000,
                id: 237
            }
        ],
        skills: [],
        certifications: [],
        active: false
    }
];


/***/ }),

/***/ "./src/app/model/Skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = (function () {
    function Skill(skillId, name, active) {
        this.skillId = skillId;
        this.name = name;
        this.active = active;
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/model/Trainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trainer; });
var Trainer = (function () {
    function Trainer(trainerId, firstName, lastName, skills, certifications, active, resume, unavailabilities) {
        this.trainerId = trainerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = skills;
        this.certifications = certifications;
        this.active = active;
        this.resume = resume;
        this.unavailabilities = unavailabilities;
    }
    return Trainer;
}());



/***/ }),

/***/ "./src/app/services/s3-credential/s3-credential.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S3CredentialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var S3CredentialService = (function () {
    function S3CredentialService(http) {
        this.http = http;
        this.url = '/api/v2/s3Creds';
    }
    S3CredentialService.prototype.getCreds = function () {
        return this.http.get(this.url);
    };
    S3CredentialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]])
    ], S3CredentialService);
    return S3CredentialService;
}());



/***/ }),

/***/ "./src/app/services/skill/skill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillService = (function () {
    function SkillService(http) {
        this.http = http;
        this.url = 'api/v2/skill';
    }
    // var Skill = $resource('api/v2/skill/:skillId',{skillId:'@skillId'},{update:{method:'PUT', url:});
    SkillService.prototype.getEmptySkill = function () {
        // return new Skill();
    };
    SkillService.prototype.create = function (skill) {
        return this.http.post("" + this.url, skill);
    };
    SkillService.prototype.getAll = function () {
        return this.http.get("" + this.url);
    };
    SkillService.prototype.getById = function (skillId) {
        return this.http.get(this.url + "/" + skillId);
    };
    SkillService.prototype.update = function (skill) {
        return this.http.put("" + this.url, skill);
    };
    SkillService.prototype.delete = function (skillId) {
        return this.http.delete(this.url + "/" + skillId);
    };
    SkillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/services/trainer/trainer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainerService = (function () {
    function TrainerService(http) {
        this.http = http;
        this.url = 'api/v2/trainer';
    }
    // created an empty Trainer
    TrainerService.prototype.getEmptyTrainer = function () {
        // return new Trainer();
    };
    // Gets all trainers in the database
    TrainerService.prototype.getAll = function () {
        return this.http.get("" + this.url);
    };
    TrainerService.prototype.getById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    TrainerService.prototype.getByFirstNameAndLastName = function (fName, lName) {
        return this.http.get(this.url + "/" + fName + "/" + lName);
    };
    TrainerService.prototype.create = function (trainer) {
        return this.http.post("" + this.url, trainer);
    };
    TrainerService.prototype.update = function (trainer) {
        console.log("" + this.url);
        return this.http.put("" + this.url, trainer);
    };
    TrainerService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    TrainerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]])
    ], TrainerService);
    return TrainerService;
}());



/***/ }),

/***/ "./src/app/services/url/url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlService = (function () {
    function UrlService(http) {
        this.http = http;
        this.url = 'https://localhost';
    }
    UrlService.prototype.getUrl = function () {
        return this.url;
    };
    UrlService.prototype.testCors1 = function () {
        return this.http.get(this.url);
    };
    UrlService.prototype.testCors2 = function () {
        return this.http.get(this.url + '/auth/userinfo');
    };
    UrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]])
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map