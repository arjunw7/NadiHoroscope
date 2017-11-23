webpackJsonp([0],{

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plants_plants__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, pouchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pouchService = pouchService;
        this.dbInit = {
            "_id": "212601219",
            "plants": [
                {
                    "id": 1,
                    "plant_name": "Satpura Thermal Power Station",
                    "plant_address": "Sarni, Madhya Pradesh, India",
                    "assessments": [
                        { "id": 1, "plant_id": 1, "assessment_name": "Field Visit", "assessment_date": "2017-02-10", "user_name": "Mohit Rai" },
                        { "id": 2, "plant_id": 1, "assessment_name": "Mock Assessment", "assessment_date": "2017-03-10", "user_name": "Mohit Rai" }
                    ]
                },
                {
                    "id": 2,
                    "plant_name": "ONGC Tripura Power Company",
                    "plant_address": "Palatana, Udaipur, India",
                    "assessments": []
                },
                {
                    "id": 3,
                    "plant_name": "Yelahanka Diesel Power Station",
                    "plant_address": "Yelahanka, Bangalore, India",
                    "assessments": []
                },
                {
                    "id": 4,
                    "plant_name": "Gangtok Diesel Power Station",
                    "plant_address": "Gangtok, Sikkim, India",
                    "assessments": []
                }
            ]
        };
        this.pouchService.updatePlants(this.dbInit);
        this.pouchService.getData().then(function (data) {
            _this.allData = data;
        });
    }
    HomePage.prototype.showPlantsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plants_plants__["a" /* PlantsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\home\home.html"*/`<ion-content>\n    <div class="homePage">\n        <div class="logo">\n            <img src="assets/imgs/monogram.png" alt="" srcset="">\n        </div>\n        <div class="homeButtons">\n            <button (click)="showPlantsPage()">Plant Assessment</button>\n            <button>Analyse data</button>\n        </div>\n    </div>\n    <div class="footer">\n        © General Electric, 2017\n    </div>\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pouchService__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assessments_assessments__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlantsPage = (function () {
    function PlantsPage(navCtrl, pouchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pouchService = pouchService;
        this.pouchService.getData().then(function (data) {
            _this.plantsList = data[0].plants;
            console.log(_this.plantsList);
        });
    }
    PlantsPage.prototype.showAssessmentsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__assessments_assessments__["a" /* AssessmentsPage */], {
            plant_id: id
        });
    };
    PlantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'plants',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\plants\plants.html"*/`<ion-content>\n\n    <div class="plantsPage">\n\n        <div class="plantTag">\n\n            Select Plant\n\n        </div>\n\n        <select [(ngModel)]="plant_id">\n\n           <option *ngFor="let item of plantsList" value="{{item.id}}">{{item.plant_name}}</option>\n\n       </select>\n\n        <button (click)="showAssessmentsPage(plant_id)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\plants\plants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_pouchService__["a" /* PouchService */]])
    ], PlantsPage);
    return PlantsPage;
}());

//# sourceMappingURL=plants.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newAssessment_newAssessment__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssessmentsPage = (function () {
    function AssessmentsPage(navCtrl, navParams, pouchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pouchService = pouchService;
        this.selectedPlantId = navParams.get('plant_id');
        this.pouchService.getData().then(function (data) {
            _this.plantsList = data[0].plants;
            for (var i = 0; i < _this.plantsList.length; i++) {
                if (_this.plantsList[i].id == _this.selectedPlantId) {
                    _this.selectedPlant = _this.plantsList[i];
                }
            }
            _this.assessmentList = _this.selectedPlant.assessments;
        });
    }
    AssessmentsPage.prototype.newAssessmentsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newAssessment_newAssessment__["a" /* NewAssessmentPage */], {
            currentPlant: this.selectedPlant
        });
    };
    AssessmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'assessments',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\assessments\assessments.html"*/`<ion-content>\n\n    <div class="assessmentPage">\n\n        <div class="plantName">\n\n            {{selectedPlant.plant_name}}\n\n        </div>\n\n        <div class="plantAddress">\n\n            {{selectedPlant.plant_address}}\n\n        </div>\n\n        <div class="assessmentTag">\n\n            Select Assessment\n\n        </div>\n\n        <select [(ngModel)]="assessment_id">\n\n            <option *ngFor="let item of assessmentList" value="{{item.id}}">{{item.assessment_name}}</option>\n\n        </select>\n\n        <button (click)="newAssessmentsPage(assessment_id)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\assessments\assessments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */]])
    ], AssessmentsPage);
    return AssessmentsPage;
}());

//# sourceMappingURL=assessments.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAssessmentPage = (function () {
    function NewAssessmentPage(navCtrl, navParams, fileChooser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileChooser = fileChooser;
        this.selectedPlant = navParams.get('currentPlant');
    }
    NewAssessmentPage.prototype.takePicture = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Camera */].getPicture({
            destinationType: __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            _this.selectedFile = '';
        }, function (err) {
            console.log(err);
        });
    };
    NewAssessmentPage.prototype.uploadFile = function () {
        this.fileChooser.open()
            .then(function (uri) {
            this.selectedFile = uri;
            this.base64Image = '';
        })
            .catch(function (e) { return console.log(e); });
    };
    NewAssessmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newAssessment',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\newAssessment\newAssessment.html"*/`<ion-content>\n\n    <div class="newAssessmentPage">\n\n        <div class="plantName">\n\n            {{selectedPlant.plant_name}}\n\n        </div>\n\n        <div class="plantAddress">\n\n            {{selectedPlant.plant_address}}\n\n        </div>\n\n\n\n        <div class="newAssButtons">\n\n            <button (click)="uploadFile()">Upload</button>\n\n            <div class="midText">\n\n                or\n\n            </div>\n\n            <button (click)="takePicture()">Capture</button>\n\n        </div>\n\n        <div class="capturedImage">\n\n            <img [src]="base64Image" *ngIf="base64Image" /> {{selectedFile}}\n\n        </div>\n\n        <label>File name</label><br>\n\n        <input type="text"><br>\n\n        <label>Category</label><br>\n\n        <select>\n\n            <option value=""></option>\n\n            <option value="">Boiler 1</option>\n\n            <option value="">Boiler 2</option>\n\n            <option value="">Boiler 3</option>\n\n            <option value="">Boiler 4</option>\n\n        </select><br>\n\n        <label>Sub-category</label><br>\n\n        <select>\n\n            <option value=""></option>\n\n            <option value="">Boiler 1</option>\n\n            <option value="">Boiler 2</option>\n\n            <option value="">Boiler 3</option>\n\n            <option value="">Boiler 4</option>\n\n        </select><br>\n\n        <label>Description</label><br>\n\n        <input type="text">\n\n        <br>\n\n        <div class="newAssessmentSubmit">\n\n            <button>Continue</button>\n\n        </div>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\newAssessment\newAssessment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], NewAssessmentPage);
    return NewAssessmentPage;
}());

//# sourceMappingURL=newAssessment.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(521);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_plants_plants__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_assessments_assessments__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_newAssessment_newAssessment__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pouchService__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_chooser__ = __webpack_require__(496);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_plants_plants__["a" /* PlantsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_assessments_assessments__["a" /* AssessmentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newAssessment_newAssessment__["a" /* NewAssessmentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_plants_plants__["a" /* PlantsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_assessments_assessments__["a" /* AssessmentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newAssessment_newAssessment__["a" /* NewAssessmentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_8__services_pouchService__["a" /* PouchService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PouchService = (function () {
    function PouchService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__["a" /* default */]('powerdb');
        this.remote = 'http://localhost:5984/powerdb';
        var options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.db.sync(this.remote, options);
    }
    PouchService.prototype.getData = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    PouchService.prototype.createPlants = function (plant) {
        this.db.post(plant);
    };
    PouchService.prototype.updatePlants = function (plant) {
        this.db.put(plant).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deletePlants = function (plant) {
        this.db.remove(plant).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //A document was deleted
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            //A document was updated
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            else {
                this.data.push(change.doc);
            }
        }
    };
    PouchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PouchService);
    return PouchService;
}());

//# sourceMappingURL=pouchService.js.map

/***/ })

},[497]);
//# sourceMappingURL=main.js.map