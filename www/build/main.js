webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pouchService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assessments_assessments__ = __webpack_require__(201);
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
    function PlantsPage(navCtrl, pouchService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pouchService = pouchService;
        this.toastCtrl = toastCtrl;
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
            _this.plantsList = data[0].plants;
        });
    }
    PlantsPage.prototype.showAssessmentsPage = function (id) {
        if (!this.plant_id) {
            this.presentToast('Please select a plant.');
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__assessments_assessments__["a" /* AssessmentsPage */], {
                plant_id: id
            });
        }
    };
    PlantsPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    PlantsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PlantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'plants',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\plants\plants.html"*/`<ion-content>\n\n\n\n    <div class="plantsPage">\n\n        <div class="appName">\n\n            Steam Plant Solutions Configurator\n\n        </div>\n\n        <div class="logo">\n\n            <img src="assets/imgs/monogram.png" alt="" srcset="">\n\n        </div>\n\n        <div class="plantTag">\n\n            Select Plant\n\n        </div>\n\n        <select [(ngModel)]="plant_id">\n\n           <option *ngFor="let item of plantsList" value="{{item.id}}">{{item.plant_name}}</option>\n\n       </select>\n\n        <button (click)="showAssessmentsPage(plant_id)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\plants\plants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_pouchService__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PlantsPage);
    return PlantsPage;
}());

//# sourceMappingURL=plants.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssessmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(52);
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
    function AssessmentsPage(navCtrl, navParams, pouchService, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pouchService = pouchService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.selectedPlantId = navParams.get('plant_id');
        this.pouchService.getData().then(function (data) {
            _this.allData = data;
            _this.plantsList = data[0].plants;
            for (var i = 0; i < _this.plantsList.length; i++) {
                if (_this.plantsList[i].id == _this.selectedPlantId) {
                    _this.selectedPlant = _this.plantsList[i];
                    _this.selectedPlantIndex = i;
                }
            }
            _this.assessmentList = _this.selectedPlant.assessments;
        });
    }
    AssessmentsPage.prototype.newAssessmentsPage = function () {
        if (!this.assessment_id) {
            this.presentToast('Please select an existing project or create new.');
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                currentPlant: this.selectedPlant
            });
        }
    };
    AssessmentsPage.prototype.createNewAssessment = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'New project',
            message: '*all fields are mandatory',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Project title'
                },
                {
                    name: 'sso',
                    placeholder: "SSO"
                },
                {
                    name: 'date',
                    placeholder: 'Date'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.addAssessment({ assessment_name: data.title, assessment_date: data.date, user_name: data.sso });
                    }
                }
            ]
        });
        prompt.present();
    };
    AssessmentsPage.prototype.addAssessment = function (data) {
        this.newAssessmentID = this.allData[0].plants[this.selectedPlantIndex].assessments.length;
        console.log(data);
        this.allData[0].plants[this.selectedPlantIndex].assessments.push({
            id: this.newAssessmentID + 1,
            plant_id: parseInt(this.selectedPlantId),
            assessment_name: data.assessment_name,
            assessment_date: data.assessment_date,
            user_name: data.user_name
        });
        console.log(this.allData);
        this.pouchService.updatePlants(this.allData[0]);
    };
    AssessmentsPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AssessmentsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AssessmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'assessments',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\assessments\assessments.html"*/`<ion-content>\n\n    <ion-icon (click)="goBack()" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n    <div class="assessmentPage">\n\n        <div class="plantName">\n\n            {{selectedPlant.plant_name}}\n\n        </div>\n\n        <div class="plantAddress">\n\n            {{selectedPlant.plant_address}}\n\n        </div>\n\n        <div class="assessmentTag" *ngIf="assessmentList[0]">\n\n            Select Project\n\n        </div>\n\n        <select [(ngModel)]="assessment_id" *ngIf="assessmentList[0]">\n\n            <option *ngFor="let item of assessmentList" value="{{item.id}}">{{item.assessment_name}}</option>\n\n        </select>\n\n        <br>\n\n        <div class="assessmentTag2" *ngIf="!assessmentList[0]">\n\n            <i>No existing projects</i>\n\n        </div>\n\n        <div class="midOr" *ngIf="assessmentList[0]">\n\n            or\n\n        </div>\n\n        <div class="createNewButton">\n\n            <button (click)="createNewAssessment()">Create new</button>\n\n        </div>\n\n        <button (click)="newAssessmentsPage(assessment_id)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\assessments\assessments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AssessmentsPage);
    return AssessmentsPage;
}());

//# sourceMappingURL=assessments.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__files_files__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newAssessment_newAssessment__ = __webpack_require__(204);
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
    function HomePage(navCtrl, navParams, pouchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pouchService = pouchService;
        this.currentPlant = navParams.get('currentPlant');
    }
    HomePage.prototype.showPlantsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newAssessment_newAssessment__["a" /* NewAssessmentPage */], {
            currentPlant: this.currentPlant
        });
    };
    HomePage.prototype.showFilesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__files_files__["a" /* FilesPage */]);
    };
    HomePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\home\home.html"*/`<ion-content>\n\n    <ion-icon (click)="goBack()" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n    <div class="homePage">\n\n        <div class="plantName">\n\n            {{currentPlant.plant_name}}\n\n        </div>\n\n        <div class="plantAddress">\n\n            {{currentPlant.plant_address}}\n\n        </div>\n\n        <div class="homeButtons">\n\n            <button>Value Calculator</button>\n\n            <button (click)="showPlantsPage()">Assessment</button>\n\n            <button>Solution Configurator</button>\n\n            <button>Solution Stack</button>\n\n        </div>\n\n    </div>\n\n    <div class="footer">\n\n        © General Electric, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilesPage = (function () {
    function FilesPage(navCtrl, file) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.file = file;
        this.downloads = 0;
        this.file.listDir(this.file.externalRootDirectory, 'Download').then(function (data) {
            _this.downloads = data;
        });
    }
    FilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'files',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\files\files.html"*/`<ion-content>\n\n    <ion-icon (click)="goBack()" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n    <div class="filesPage">\n\n        <ion-list *ngFor="let item of downloads">\n\n            <ion-item>\n\n                {{item.name}}\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\files\files.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], FilesPage);
    return FilesPage;
}());

//# sourceMappingURL=files.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAssessmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(207);
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
    function NewAssessmentPage(navCtrl, navParams, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.folderStructure = [
            {
                "categoryName": "Boiler",
                "subCategory": [
                    {
                        "name": "Boiler",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Mills",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Fans",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "APH",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "SCR/SNCR",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Others",
                        "subCategory": []
                    }
                ]
            },
            {
                "categoryName": "AQCS",
                "subCategory": [
                    {
                        "name": "FGD",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "ESP",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    }
                ]
            },
            {
                "categoryName": "Material Handling",
                "subCategory": [
                    {
                        "name": "CHP",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "AHP",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    }
                ]
            },
            {
                "categoryName": "Steam Turbine",
                "subCategory": [
                    {
                        "name": "ST Module",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Bypass System",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "CEP",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "BFP",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Feed Water Heaters",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Gland Steam Condensor",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Others",
                        "subCategory": []
                    }
                ]
            },
            {
                "categoryName": "Cooling System",
                "subCategory": [
                    {
                        "name": "Condensor",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Cooling Towers",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "CW Pumps",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    }
                ]
            },
            {
                "categoryName": "Water",
                "subCategory": [
                    {
                        "name": "Raw Water System",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Desalination",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "DM Plant",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Condensate Polishing Plant",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Chemical Treatment Plant",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "FGD Water Treatment",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Cooling Tower Water Treatment",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Others",
                        "subCategory": []
                    }
                ]
            },
            {
                "categoryName": "Generator & Electrical",
                "subCategory": [
                    {
                        "name": "Generator",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Exitation System",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Transformers",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Switch Gear",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Battery",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "DG Set",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Others",
                        "subCategory": []
                    }
                ]
            },
            {
                "categoryName": "Control System",
                "subCategory": [
                    {
                        "name": "Control System",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Instrumentation",
                        "subCategory": ["Drawings", "Design Data", "Others"]
                    },
                    {
                        "name": "Others",
                        "subCategory": []
                    }
                ]
            },
            {
                "categoryName": "Others",
                "subCategory": []
            }
        ];
        this.folderSubCategory = [];
        this.folderSubCategorySub = [];
        this.lastImage = null;
        this.selectedPlant = navParams.get('currentPlant');
    }
    NewAssessmentPage.prototype.getSubcategories = function (category_id) {
        this.folderSubCategory = this.folderStructure[category_id].subCategory;
    };
    NewAssessmentPage.prototype.getSubcategoriesSub = function (sub_category_id) {
        this.folderSubCategorySub = this.folderStructure[this.category].subCategory[sub_category_id].subCategory;
    };
    NewAssessmentPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    NewAssessmentPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    _this.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    _this.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName());
                });
            }
            else {
                _this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(_this.correctPath, _this.currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    NewAssessmentPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    NewAssessmentPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        // this.file.createDir(this.file.externalRootDirectory,'PlantData', true).then(success =>{
        //   this.presentToast('Directory Created.');
        // }, error => {
        //   this.presentToast('Directory not Created.');
        // })
        this.file.copyFile(namePath, currentName, this.file.externalRootDirectory + 'PlantData', newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    NewAssessmentPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    NewAssessmentPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.externalRootDirectory + 'Plantdata/' + img;
        }
    };
    NewAssessmentPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    NewAssessmentPage.prototype.uploadData = function () {
        if (!this.fileName || !this.category || !this.subCategory || !this.lastImage) {
            this.presentToast('Please fill all required fields.');
        }
        else {
            this.presentToast('File uploaded successfully.');
            delete this.fileName;
            delete this.category;
            delete this.subCategory;
            delete this.description;
            delete this.lastImage;
        }
    };
    NewAssessmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newAssessment',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ionreddit\src\pages\newAssessment\newAssessment.html"*/`<ion-content>\n\n    <ion-icon (click)="goBack()" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n    <div class="newAssessmentPage">\n\n        <div class="plantName">\n\n            {{selectedPlant.plant_name}}\n\n        </div>\n\n        <div class="plantAddress">\n\n            {{selectedPlant.plant_address}}\n\n        </div>\n\n\n\n        <div class="newAssButtons">\n\n            <button (click)="presentActionSheet()">Select File</button>\n\n        </div>\n\n        <div class="capturedImage">\n\n            <img src="{{pathForImage(lastImage)}}" style="width:100%" [hidden]="lastImage === null">\n\n            <!-- <img [src]="base64Image" *ngIf="base64Image" /> {{selectedFile}} -->\n\n        </div>\n\n        <label>File name</label><br>\n\n        <input [(ngModel)]="fileName" type="text"><br>\n\n\n\n        <label>Category</label><br>\n\n        <select [(ngModel)]="category" (change)="getSubcategories(category)">\n\n            <option *ngFor="let item of folderStructure; let i = index" value="{{i}}">{{item.categoryName}}</option>\n\n        </select><br>\n\n\n\n        <label *ngIf="folderSubCategory[0]">Sub-category 1</label><br *ngIf="folderSubCategory[0]">\n\n        <select [(ngModel)]="subCategory" *ngIf="folderSubCategory[0]" (change)="getSubcategoriesSub(subCategory)">\n\n            <option *ngFor="let item of folderSubCategory; let j = index" value="{{j}}">{{item.name}}</option>\n\n        </select><br *ngIf="folderSubCategory[0]">\n\n\n\n        <label *ngIf="folderSubCategorySub[0]">Sub-category 2 </label><br *ngIf="folderSubCategorySub[0]">\n\n        <select [(ngModel)]="subCategory1" *ngIf="folderSubCategorySub[0]">\n\n            <option *ngFor="let item of folderSubCategorySub" value="{{item}}">{{item}}</option>\n\n        </select><br *ngIf="folderSubCategorySub[0]">\n\n        <label>Description</label><br>\n\n        <input [(ngModel)]="description" type="text">\n\n        <br>\n\n        <div (click)="uploadData()" class="newAssessmentSubmit">\n\n            <button>Upload</button>\n\n        </div>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ionreddit\src\pages\newAssessment\newAssessment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewAssessmentPage);
    return NewAssessmentPage;
}());

//# sourceMappingURL=newAssessment.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_plants_plants__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_assessments_assessments__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_newAssessment_newAssessment__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_files_files__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_pouchService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__ = __webpack_require__(206);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_newAssessment_newAssessment__["a" /* NewAssessmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_files_files__["a" /* FilesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_plants_plants__["a" /* PlantsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_assessments_assessments__["a" /* AssessmentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newAssessment_newAssessment__["a" /* NewAssessmentPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_files_files__["a" /* FilesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_pouchService__["a" /* PouchService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_plants_plants__ = __webpack_require__(196);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_plants_plants__["a" /* PlantsPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__(284);
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

},[208]);
//# sourceMappingURL=main.js.map