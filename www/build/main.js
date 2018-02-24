webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instructions_instructions__ = __webpack_require__(197);
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
    function HomePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.patient = {
            "name": "",
            "age": "",
            "height": "",
            "weight": "",
            "gender": ""
        };
    }
    HomePage.prototype.showInstructionsPage = function () {
        if (!this.patient || !this.patient.name || !this.patient.age || !this.patient.height || !this.patient.weight || !this.patient.gender) {
            this.presentToast('Please enter all the fields.');
        }
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__instructions_instructions__["a" /* InstructionsPage */], {
                patient: this.patient
            });
    };
    HomePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\home\home.html"*/`<ion-content>\n\n    <div class="homePage">\n\n        <div class="pageName">\n\n            Patient Details\n\n        </div>\n\n        <label>Name</label><br>\n\n        <input [(ngModel)]="patient.name" type="text"><br>\n\n        <label>Age (Years)</label><br>\n\n        <input [(ngModel)]="patient.age" type="number"><br>\n\n        <label>Height (Feet)</label><br>\n\n        <input [(ngModel)]="patient.height" type="number"><br>\n\n        <label>Weight (KGs)</label><br>\n\n        <input [(ngModel)]="patient.weight" type="number"><br>\n\n        <label>Gender</label><br>\n\n        <select [(ngModel)]="patient.gender">\n\n            <option value="male">Male</option>\n\n            <option value="female">Female</option>\n\n        </select><br><br>\n\n        <button (click)="showInstructionsPage(patient)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstructionsPage = (function () {
    function InstructionsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.patient = navParams.get('patient');
    }
    InstructionsPage.prototype.showInputPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__input_input__["a" /* InputPage */], {
            patient: this.patient
        });
    };
    InstructionsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InstructionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'instructions',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\instructions\instructions.html"*/`<ion-content>\n\n    <!-- <ion-icon (click)="goBack()" ios="ios-arrow-back" md="md-arrow-back"></ion-icon> -->\n\n    <div class="instructionsPage">\n\n        <!-- <div class="userName">\n\n            <ion-icon ios="ios-contact" md="ios-contact"></ion-icon> {{patient.name}}\n\n        </div> -->\n\n        <div class="handImage" *ngIf="patient.gender==\'female\'">\n\n            <img src="assets/imgs/hand1.png" alt="" srcset="">\n\n        </div>\n\n        <div class="handImage1" *ngIf="patient.gender==\'male\'">\n\n            <img src="assets/imgs/hand2.png" alt="" srcset="">\n\n        </div>\n\n        <div class="instructions">\n\n            <ul>\n\n                <li *ngIf="patient.gender==\'female\'">Band should be tied on left hand.</li>\n\n                <li *ngIf="patient.gender==\'male\'">Band should be tied on right hand.</li>\n\n                <li>Band should be be worn below the bone near the thumb on the wrist.</li>\n\n                <li>Band should not be very tight and must be placed exactly as shown in the image.</li>\n\n                <li>Eyes should be closed and legs apart.</li>\n\n                <li>Patient should not be asleep.</li>\n\n            </ul>\n\n        </div>\n\n        <button (click)="showInputPage()">Start test</button>\n\n    </div>\n\n\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\instructions\instructions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], InstructionsPage);
    return InstructionsPage;
}());

//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_survey__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputPage = (function () {
    function InputPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.inputs = {
            "vatta_vatta": "",
            "vatta_pitta": "",
            "vatta_kapha": "",
            "pitta_vatta": "",
            "pitta_pitta": "",
            "pitta_kapha": "",
            "kapha_vatta": "",
            "kapha_pitta": "",
            "kapha_kapha": ""
        };
        this.inputData = [
            {
                "id": 1,
                "name": "vatta_vatta",
                "value": ""
            },
            {
                "id": 2,
                "name": "vatta_pitta",
                "value": ""
            },
            {
                "id": 3,
                "name": "vatta_kapha",
                "value": ""
            },
            {
                "id": 4,
                "name": "pitta_vatta",
                "value": ""
            },
            {
                "id": 5,
                "name": "pitta_pitta",
                "value": ""
            },
            {
                "id": 6,
                "name": "pitta_kapha",
                "value": ""
            },
            {
                "id": 7,
                "name": "kapha_vatta",
                "value": ""
            },
            {
                "id": 8,
                "name": "kapha_pitta",
                "value": ""
            },
            {
                "id": 9,
                "name": "kapha_kapha",
                "value": ""
            }
        ];
        this.patient = navParams.get('patient');
    }
    InputPage.prototype.ionViewWillEnter = function () {
        this.inputs = {
            "vatta_vatta": "",
            "vatta_pitta": "",
            "vatta_kapha": "",
            "pitta_vatta": "",
            "pitta_pitta": "",
            "pitta_kapha": "",
            "kapha_vatta": "",
            "kapha_pitta": "",
            "kapha_kapha": ""
        };
        this.inputData = [
            {
                "id": 1,
                "name": "vatta_vatta",
                "value": ""
            },
            {
                "id": 2,
                "name": "vatta_pitta",
                "value": ""
            },
            {
                "id": 3,
                "name": "vatta_kapha",
                "value": ""
            },
            {
                "id": 4,
                "name": "pitta_vatta",
                "value": ""
            },
            {
                "id": 5,
                "name": "pitta_pitta",
                "value": ""
            },
            {
                "id": 6,
                "name": "pitta_kapha",
                "value": ""
            },
            {
                "id": 7,
                "name": "kapha_vatta",
                "value": ""
            },
            {
                "id": 8,
                "name": "kapha_pitta",
                "value": ""
            },
            {
                "id": 9,
                "name": "kapha_kapha",
                "value": ""
            }
        ];
    };
    InputPage.prototype.showSurveyPage = function () {
        if (!this.inputs.vatta_vatta || !this.inputs.vatta_pitta || !this.inputs.vatta_kapha || !this.inputs.pitta_vatta || !this.inputs.pitta_pitta || !this.inputs.pitta_kapha || !this.inputs.kapha_vatta || !this.inputs.kapha_pitta || !this.inputs.kapha_kapha) {
            this.presentToast("Please enter all the fields");
        }
        else {
            this.inputData[0].value = this.inputs.vatta_vatta;
            this.inputData[1].value = this.inputs.vatta_pitta;
            this.inputData[2].value = this.inputs.vatta_kapha;
            this.inputData[3].value = this.inputs.pitta_vatta;
            this.inputData[4].value = this.inputs.pitta_pitta;
            this.inputData[5].value = this.inputs.pitta_kapha;
            this.inputData[6].value = this.inputs.kapha_vatta;
            this.inputData[7].value = this.inputs.kapha_pitta;
            this.inputData[8].value = this.inputs.kapha_kapha;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__survey_survey__["a" /* SurveyPage */], {
                patient: this.patient,
                inputData: this.inputData,
            });
        }
    };
    InputPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'inputPage',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\input\input.html"*/`<ion-content>\n\n    <div class="inputPage">\n\n        <div class="pageName">\n\n            Enter all values\n\n        </div>\n\n        <div class="allFields">\n\n            <div class="field">\n\n                <label>1. Vatta-Vatta</label><br>\n\n                <input [(ngModel)]="inputs.vatta_vatta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>2. Vatta-Pitta</label>\n\n                <input [(ngModel)]="inputs.vatta_pitta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>3. Vatta-Kapha</label><br>\n\n                <input [(ngModel)]="inputs.vatta_kapha" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>4. Pitta-Vatta</label><br>\n\n                <input [(ngModel)]="inputs.pitta_vatta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>5. Pitta-Pitta</label><br>\n\n                <input [(ngModel)]="inputs.pitta_pitta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>6. Pitta-Kapha</label><br>\n\n                <input [(ngModel)]="inputs.pitta_kapha" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>7. Kapha-Vatta</label><br>\n\n                <input [(ngModel)]="inputs.kapha_vatta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>8. Kapha-Pitta</label><br>\n\n                <input [(ngModel)]="inputs.kapha_pitta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>9. Kapha-Kapha</label><br>\n\n                <input [(ngModel)]="inputs.kapha_kapha" type="number"><br>\n\n            </div>\n\n        </div>\n\n        <button (click)="showSurveyPage(inputData)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\input\input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyPage = (function () {
    function SurveyPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formStatus1 = false;
        this.formStatus2 = false;
        this.formStatus3 = false;
        this.ftotal = 0;
        this.fstatus = "";
        this.noSolution = true;
        this.form1 = {
            "abdomenPain": "",
            "spicy": "",
            "nonSpicy": "",
            "acidity": "",
            "headache": "",
            "vomiting": "",
            "vomitRelief": "0",
            "bloodStool": "",
            "piles": "0"
        };
        this.form2 = {
            "diabetes": "",
            "diabetesFamily": "",
            "stomache": "",
            "burps": "",
            "vomit": "",
            "vomitTime": ""
        };
        this.form3 = {
            "swallow": "",
            "part": ""
        };
        this.patient = navParams.get('patient');
        this.inputData = navParams.get('inputData');
        this.inputData1 = navParams.get('inputData');
        for (var i = 0; i < this.inputData.length - 1; i++) {
            for (var j = 0; j < this.inputData.length - i - 1; j++) {
                if (this.inputData[j].value < this.inputData[j + 1].value) {
                    var temp = this.inputData[j];
                    this.inputData[j] = this.inputData[j + 1];
                    this.inputData[j + 1] = temp;
                }
            }
        }
        if (this.check456(this.inputData)) {
            if ((this.inputData[0].id == 4 && this.inputData[1].id == 2) || (this.inputData[0].id == 2 && this.inputData[1].id == 4)) {
                this.formStatus1 = true;
                this.noSolution = false;
            }
            else if (this.inputData[0].id == 5) {
                this.formStatus2 = true;
                this.noSolution = false;
            }
            else if ((this.inputData[0].id == 6 && this.inputData[1].id == 5) || (this.inputData[0].id == 5 && this.inputData[1].id == 6)) {
                this.formStatus3 = true;
                this.noSolution = false;
            }
            console.log(this.inputData);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                score: "NA",
                maxScore: "NA",
                status: "No signs of ulcer.",
                patient: this.patient,
                inputData: this.inputData1
            });
        }
    }
    SurveyPage.prototype.submitForm1 = function () {
        if (!this.form1.abdomenPain || !this.form1.spicy || !this.form1.nonSpicy || !this.form1.acidity || !this.form1.headache || !this.form1.bloodStool) {
            this.presentToast("Please fill all the fields");
        }
        else {
            if (this.form1.headache == 'yes' && !this.form1.vomiting) {
                this.presentToast("Please fill all the fields");
            }
            else if (this.form1.headache == 'yes' && this.form1.vomiting == 'yes' && !this.form1.vomitRelief) {
                this.presentToast("Please fill all the fields");
            }
            else {
                if (this.form1.bloodStool == 'yes' && !this.form1.piles) {
                    this.presentToast("Please fill all the fields");
                }
                else {
                    var total = parseFloat(this.form1.abdomenPain) + parseFloat(this.form1.spicy) + parseFloat(this.form1.nonSpicy) + parseFloat(this.form1.acidity) + parseFloat(this.form1.vomitRelief) + parseFloat(this.form1.piles);
                    var status = "";
                    if (total <= 3)
                        status = "No Ulcer";
                    else if (total > 3 && total <= 10)
                        status = "In future you may have ulcer, take necessary precautions";
                    else if (total > 10 && total <= 15)
                        status = "Ulcer in initial stages";
                    else if (total > 15)
                        status = "Very high chances of intestinal ulcer";
                    this.ftotal = total;
                    this.fstatus = status;
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                        score: this.ftotal,
                        maxScore: 20,
                        status: this.fstatus,
                        patient: this.patient,
                        inputData: this.inputData1
                    });
                }
            }
        }
    };
    SurveyPage.prototype.submitForm2 = function () {
        console.log(this.form2);
        if (!this.form2.diabetes && !this.form2.stomache && !this.form2.burps && !this.form2.vomit) {
            this.presentToast("Please fill all the fields");
        }
        else {
            if (this.form2.diabetes != 'no' && this.form2.vomit != 'yes') {
                var total = parseFloat(this.form2.diabetes) + parseFloat(this.form2.stomache) + parseFloat(this.form2.burps) + parseFloat(this.form2.vomit);
                this.resultForm2(total);
            }
            else if (this.form2.diabetes == 'no' && this.form2.vomit != 'yes') {
                if (!this.form2.diabetesFamily) {
                    this.presentToast("Please fill all the fields");
                }
                else {
                    var total = parseFloat(this.form2.diabetesFamily) + parseFloat(this.form2.stomache) + parseFloat(this.form2.burps) + parseFloat(this.form2.vomit);
                    this.resultForm2(total);
                }
            }
            else if (this.form2.diabetes != 'no' && this.form2.vomit == 'yes') {
                if (!this.form2.vomitTime) {
                    this.presentToast("Please fill all the fields");
                }
                else {
                    var total = parseFloat(this.form2.diabetes) + parseFloat(this.form2.stomache) + parseFloat(this.form2.burps) + parseFloat(this.form2.vomitTime);
                    this.resultForm2(total);
                }
            }
            else if (this.form2.diabetes == 'no' && this.form2.vomit == 'yes') {
                if (!this.form2.diabetesFamily || !this.form2.vomitTime) {
                    this.presentToast("Please fill all the fields");
                }
                else {
                    var total = parseFloat(this.form2.diabetesFamily) + parseFloat(this.form2.stomache) + parseFloat(this.form2.burps) + parseFloat(this.form2.vomitTime);
                    this.resultForm2(total);
                }
            }
        }
    };
    SurveyPage.prototype.resultForm2 = function (total) {
        var status = "";
        if (total <= 2)
            status = "No Ulcer";
        else if (total > 2 && total <= 5 && total != 2.5)
            status = "In future you may have ulcer (Avoid spicy food)";
        else if (total == 2.5)
            status = "Get your diabetes checked";
        else if (total > 5 && total <= 9)
            status = "Ulcer in initial stages";
        else if (total > 9)
            status = "Very high chances ulcer";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
            score: total,
            maxScore: 12,
            status: status,
            patient: this.patient,
            inputData: this.inputData1
        });
    };
    SurveyPage.prototype.submitForm3 = function () {
        console.log(this.form3);
        if (!this.form3.swallow) {
            this.presentToast("Please fill all the fields");
        }
        else if (this.form3.swallow != 'yes') {
            this.resultForm3(0);
        }
        else if (this.form3.swallow == 'yes' && !this.form3.part) {
            this.presentToast("please fill all the fields");
        }
        else {
            var total = parseFloat(this.form3.part);
            this.resultForm3(total);
        }
    };
    SurveyPage.prototype.resultForm3 = function (total) {
        var status = "";
        if (total == 0)
            status = "No Ulcer";
        else if (total == 2)
            status = "Mouth Ulcer";
        else if (total == 3)
            status = "Ulcer in Oesophagus";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
            score: total,
            maxScore: 3,
            status: status,
            patient: this.patient,
            inputData: this.inputData1
        });
    };
    SurveyPage.prototype.check456 = function (obj) {
        var s4 = false;
        var s5 = false;
        var s6 = false;
        for (var i = 0; i < 4; i++) {
            if (obj[i].id == "4")
                s4 = true;
            else if (obj[i].id == "5")
                s5 = true;
            else if (obj[i].id == "6")
                s6 = true;
        }
        if (s4 && s5 && s6)
            return true;
        else
            return false;
    };
    SurveyPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SurveyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'survey',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\survey\survey.html"*/`<ion-content>\n\n    <div class="surveyPage">\n\n        <div class="pageName" *ngIf="!noSolution">\n\n            Patient Details\n\n        </div>\n\n        <div *ngIf="formStatus1">\n\n            <label>Pain in abdomen?</label><br>\n\n            <select [(ngModel)]="form1.abdomenPain">\n\n                <option value="3">Yes</option>\n\n                <option value="0.5">No</option>\n\n            </select><br>\n\n            <label>Status after eating spicy food?</label><br>\n\n            <select [(ngModel)]="form1.spicy">\n\n                <option value="4">Pain increases</option>\n\n                <option value="0">No effect</option>\n\n            </select><br>\n\n            <label>Status after eating non-spicy food?</label><br>\n\n            <select [(ngModel)]="form1.nonSpicy">\n\n                <option value="3">Pain decreases</option>\n\n                <option value="0">Pain increases</option>\n\n            </select><br>\n\n            <label>History of heavy acidity?</label><br>\n\n            <select [(ngModel)]="form1.acidity">\n\n                <option value="2">Yes</option>\n\n                <option value="0">No</option>\n\n            </select><br>\n\n            <label>Any headaches?</label><br>\n\n            <select [(ngModel)]="form1.headache">\n\n                <option value="yes">Yes</option>\n\n                <option value="0">No</option>\n\n            </select><br>\n\n            <label *ngIf="form1.headache==\'yes\'">Does it follow vomiting?<br></label>\n\n            <select [(ngModel)]="form1.vomiting" *ngIf="form1.headache==\'yes\'">\n\n                <option value="yes">Yes</option>\n\n                <option value="0">No</option><br>\n\n            </select>\n\n            <label *ngIf="form1.vomiting==\'yes\'">Does headache gets relieved after vomiting?<br></label>\n\n            <select [(ngModel)]="form1.vomitRelief" *ngIf="form1.vomiting==\'yes\'">\n\n                <option value="3">Yes</option>\n\n                <option value="0">No</option><br>\n\n            </select>\n\n            <label>Blood in stool?</label><br>\n\n            <select [(ngModel)]="form1.bloodStool">\n\n                <option value="yes">Yes</option>\n\n                <option value="0">No</option>\n\n            </select><br>\n\n            <label *ngIf="form1.bloodStool==\'yes\'">Do you have piles?<br></label>\n\n            <select [(ngModel)]="form1.piles" *ngIf="form1.bloodStool==\'yes\'">\n\n                <option value="0">Yes</option>\n\n                <option value="5">No</option><br>\n\n            </select>\n\n            <br>\n\n            <button (click)="submitForm1()">Continue</button>\n\n        </div>\n\n        <div *ngIf="formStatus2">\n\n            <label>Do you have diabetes?</label><br>\n\n            <select [(ngModel)]="form2.diabetes">\n\n                    <option value="1">Yes</option>\n\n                    <option value="no">No</option>\n\n                </select><br>\n\n            <label *ngIf="form2.diabetes==\'no\'">Any family history of diabetes?<br></label>\n\n            <select [(ngModel)]="form2.diabetesFamily" *ngIf="form2.diabetes==\'no\'">\n\n                    <option value="0.5">Yes</option>\n\n                    <option value="3">No</option><br>\n\n                </select>\n\n            <label>Do you have stomach ache?</label><br>\n\n            <select [(ngModel)]="form2.stomache">\n\n                    <option value="3">Yes</option>\n\n                    <option value="0">No</option>\n\n                </select><br>\n\n            <label>Acidic burps?</label><br>\n\n            <select [(ngModel)]="form2.burps">\n\n                    <option value="2">Yes</option>\n\n                    <option value="0.5">No</option>\n\n                </select><br>\n\n            <label>Vomiting after eating spicy food?<br></label>\n\n            <select [(ngModel)]="form2.vomit">\n\n                    <option value="yes">Yes</option>\n\n                    <option value="1.5">No</option><br>\n\n                </select>\n\n            <label *ngIf="form2.vomit==\'yes\'">How much time does it take?<br></label>\n\n            <select [(ngModel)]="form2.vomitTime" *ngIf="form2.vomit==\'yes\'">\n\n                    <option value="4">Within 10 minutes</option>\n\n                    <option value="3">about 45 minutes</option><br>\n\n                </select>\n\n            <button (click)="submitForm2()">Continue</button>\n\n        </div>\n\n        <div *ngIf="formStatus3">\n\n            <label>Problem in swallowing food or water?</label><br>\n\n            <select [(ngModel)]="form3.swallow">\n\n                        <option value="yes">Yes</option>\n\n                        <option value="0">No</option>\n\n                    </select><br>\n\n            <label *ngIf="form3.swallow==\'yes\'">Burning sensation in which part?<br></label>\n\n            <select [(ngModel)]="form3.part" *ngIf="form3.swallow==\'yes\'">\n\n                        <option value="2">Mouth</option>\n\n                        <option value="3">Inside neck</option><br>\n\n                    </select>\n\n            <button (click)="submitForm3()">Continue</button>\n\n        </div>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\survey\survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultPage = (function () {
    function ResultPage(navCtrl, pouchService, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pouchService = pouchService;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.newReading = {
            "id": "",
            "patientName": "",
            "patientAge": "",
            "patientHeight": "",
            "patientWeight": "",
            "patientGender": "",
            "value1": "",
            "value2": "",
            "value3": "",
            "value4": "",
            "value5": "",
            "value6": "",
            "value7": "",
            "value8": "",
            "value9": "",
            "score": "",
            "dignosis": ""
        };
        this.score = navParams.get('score');
        this.maxScore = navParams.get('maxScore');
        this.status = navParams.get('status');
        this.patient = navParams.get('patient');
        this.inputData = navParams.get('inputData');
        console.log(this.score);
        console.log(this.maxScore);
        console.log(this.status);
        console.log(this.patient);
        console.log(this.inputData);
        this.bmi = (parseFloat(this.patient.weight) / (parseFloat(this.patient.height) * 0.305)) / (parseFloat(this.patient.height) * 0.305);
        if (this.bmi >= 25.0)
            this.bodyWeight = "Kapha Body";
        else if (this.bmi >= 18.50 && this.bmi < 25.0)
            this.bodyWeight = "Pitta Body";
        else
            this.bodyWeight = "Vatta Body";
        console.log(this.bodyWeight);
        this.pouchService.getData().then(function (data) {
            _this.allData = data[0].readings;
            console.log(_this.allData);
            _this.newReading.id = _this.allData.length + 1;
            _this.newReading.patientName = _this.patient.name;
            _this.newReading.patientAge = _this.patient.age;
            _this.newReading.patientHeight = _this.patient.height;
            _this.newReading.patientWeight = _this.patient.weight;
            _this.newReading.patientGender = _this.patient.gender;
            for (var i = 0; i < _this.inputData.length; i++) {
                if (_this.inputData[i].id == 1)
                    _this.newReading.value1 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 2)
                    _this.newReading.value2 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 3)
                    _this.newReading.value3 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 4)
                    _this.newReading.value4 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 5)
                    _this.newReading.value5 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 6)
                    _this.newReading.value6 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 7)
                    _this.newReading.value7 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 8)
                    _this.newReading.value8 = _this.inputData[i].value;
                else if (_this.inputData[i].id == 9)
                    _this.newReading.value9 = _this.inputData[i].value;
            }
            _this.newReading.score = _this.score + '/' + _this.maxScore;
            _this.newReading.dignosis = _this.status;
            _this.allData.push(_this.newReading);
            _this.pouchService.updatePlants(_this.allData);
        });
    }
    ResultPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ResultPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ResultPage.prototype.returnHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'result',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\result\result.html"*/`<ion-content>\n\n    <div class="resultPage">\n\n        <div class="score" *ngIf="score!=\'NA\'">\n\n            Score - {{score}}/{{maxScore}}<br> {{bodyWeight}}\n\n        </div>\n\n        <div class="score" *ngIf="score==\'NA\'">\n\n            Congratulations!\n\n        </div>\n\n        <div class="diagnosis">\n\n            {{status}}\n\n        </div>\n\n        <div class="points" *ngIf="status==\'In future you may have ulcer, take necessary precautions\'">\n\n            <b>Food</b><br> What to eat:<br>\n\n            <i>\n\n                1. Fruits<br>\n\n                2. Eat light lunch and dinner.<br>\n\n                3. Avoid consumption of starch(wheat, rice).<br>\n\n            </i> What not to eat:<br>\n\n            <i>\n\n                1. Fermented food(bread, yoghurt)\n\n                2. Chilled water.\n\n                3. Tea, coffee, sweets.\n\n                4. Spicy food.\n\n            </i>\n\n            <b>Lifestyle</b><br>\n\n            <i>\n\n                1. Do not stay awake late at night<br>\n\n                2. Drink luke warm water as soon as you get up in morning.<br>\n\n                3. Morning walk will help.<br>\n\n                4. Avoid Painkillers.<br>\n\n            </i>\n\n            <b>Yoga</b><br>\n\n            <i>\n\n                1. Anulom Vilom<br>\n\n                2. Shitali Pranayam.<br>\n\n                3. Agnisar Kriya.<br>\n\n                4. Bhyangasan.<br>\n\n                5. Savasan<br>\n\n                &nbsp;&nbsp;Do pranayam and asana slowly without exerting pressure and hurting yourself.\n\n            </i>\n\n        </div>\n\n        <div class="points" *ngIf="status==\'In future you may have ulcer (Avoid spicy food)\'">\n\n            <b>Food</b><br> What to eat:<br>\n\n            <i>\n\n                    1. Fruits<br>\n\n                    2. Eat light lunch and dinner.<br>\n\n                    3. Avoid consumption of starch(wheat, rice).<br>\n\n                </i> What not to eat:<br>\n\n            <i>\n\n                    1. Fermented food(bread, yoghurt)\n\n                    2. Chilled water.\n\n                    3. Tea, coffee, sweets.\n\n                    4. Spicy food.\n\n                </i>\n\n            <b>Lifestyle</b><br>\n\n            <i>\n\n                    1. Do not stay awake late at night<br>\n\n                    2. Drink luke warm water as soon as you get up in morning.<br>\n\n                    3. Morning walk will help.<br>\n\n                    4. Avoid Painkillers.<br>\n\n                </i>\n\n            <b>Yoga</b><br>\n\n            <i>\n\n                    1. Anulom Vilom<br>\n\n                    2. Shitali Pranayam.<br>\n\n                    3. Agnisar Kriya.<br>\n\n                    4. Bhyangasan.<br>\n\n                    5. Savasan<br>\n\n                    &nbsp;&nbsp;Do pranayam and asana slowly without exerting pressure and hurting yourself.\n\n                </i>\n\n        </div>\n\n        <button (click)="returnHome()">Home</button>\n\n    </div>\n\n    <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\result\result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pouchService__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historyItem_historyItem__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams, toastCtrl, pouchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.pouchService = pouchService;
        this.pouchService.getData().then(function (data) {
            _this.allData = data[0].readings;
        });
    }
    HistoryPage.prototype.showHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__landing_landing__["a" /* LandingPage */]);
    };
    HistoryPage.prototype.openItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__historyItem_historyItem__["a" /* HistoryItemPage */], {
            item: item
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'history',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\history\history.html"*/`<ion-content>\n\n    <div class="HistoryPage">\n\n        <div class="pageName">\n\n            Recent Tests\n\n        </div>\n\n        <div class="allReadings">\n\n            <div class="readingItem" (click)="openItem(item)" *ngFor="let item of allData">\n\n                <div class="pname">\n\n                    Patient Name - {{item.patientName}}\n\n                </div>\n\n                <div class="pscore">\n\n                    Score - {{item.score}}\n\n                </div>\n\n                <div class="pdignosis">\n\n                    Result - {{item.dignosis}}\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <button (click)="showHomePage()">Home</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\history\history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__services_pouchService__["a" /* PouchService */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryItemPage = (function () {
    function HistoryItemPage(navCtrl, navParams, toastCtrl, pouchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.pouchService = pouchService;
        this.item = navParams.get('item');
    }
    HistoryItemPage.prototype.showHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HistoryItemPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HistoryItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'historyItem',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\historyItem\historyItem.html"*/`<ion-content>\n\n    <div class="HistoryPage">\n\n        <div class="pageName">\n\n            Patient Details\n\n        </div>\n\n        <div class="allReadings">\n\n            <div class="readingItem">\n\n                <div class="pname" style="line-height:2rem">\n\n                    Patient Name - {{item.patientName}}<br> Age - {{item.patientAge}}<br> Height - {{item.patientHeight}}<br> Weight - {{item.patientWeight}}<br> Gender - {{item.patientGender}}<br> Value1 - {{item.value1}}<br> Value2 - {{item.value2}}<br>                    Value3 - {{item.value3}}<br> Value4 - {{item.value4}}<br> Value5 - {{item.value5}}<br> Value6 - {{item.value6}}<br> Value7 - {{item.value7}}<br> Value8 - {{item.value8}}<br> Value9 - {{item.value9}}<br> Score - {{item.score}}<br> Diagnosis\n\n                    - {{item.dignosis}}\n\n                </div>\n\n            </div>\n\n\n\n            <button (click)="goBack()">Back</button>\n\n        </div>\n\n    </div>\n\n    <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\historyItem\historyItem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */]])
    ], HistoryItemPage);
    return HistoryItemPage;
}());

//# sourceMappingURL=historyItem.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pouchService__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_instructions_instructions__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_input_input__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_result_result__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_history_history__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_historyItem_historyItem__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historyItem_historyItem__["a" /* HistoryItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historyItem_historyItem__["a" /* HistoryItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_pouchService__["a" /* PouchService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(52);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PouchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pouchdb__ = __webpack_require__(283);
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
        this.db = new __WEBPACK_IMPORTED_MODULE_1_pouchdb__["a" /* default */]('nadiHoroscope');
        this.remote = 'http://127.0.0.1:5984/nadiHoroscope/';
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
    PouchService.prototype.createPlants = function (reading) {
        this.db.post(reading);
    };
    PouchService.prototype.updatePlants = function (reading) {
        this.db.put(reading).catch(function (err) {
            console.log(err);
        });
    };
    PouchService.prototype.deletePlants = function (reading) {
        this.db.remove(reading).catch(function (err) {
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

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pouchService__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingPage = (function () {
    function LandingPage(navCtrl, navParams, toastCtrl, pouchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.pouchService = pouchService;
        this.dbInit = {
            "_id": "212601219",
            "readings": [
                {
                    "id": 1,
                    "patientName": "Arjun Wadhwa",
                    "patientAge": "23",
                    "patientHeight": "5.7",
                    "patientWeight": "63",
                    "patientGender": "male",
                    "value1": "6",
                    "value2": "7",
                    "value3": "6",
                    "value4": "8",
                    "value5": "6.7",
                    "value6": "6.8",
                    "value7": "6",
                    "value8": "5",
                    "value9": "5",
                    "score": "10/12",
                    "dignosis": "No Chances of Ulcer"
                }
            ]
        };
        this.pouchService.updatePlants(this.dbInit);
    }
    LandingPage.prototype.showHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LandingPage.prototype.showHistoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__history_history__["a" /* HistoryPage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'landing',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\landing\landing.html"*/`<ion-content>\n\n    <div class="LandingPage">\n\n        <div class="logo">\n\n            <img src="assets/imgs/logo_white.png" alt="" srcset="">\n\n        </div>\n\n        <div class="tagline">\n\n            Welcome to Nadi Horoscope\n\n        </div>\n\n        <button (click)="showHomePage()">Continue</button>\n\n        <button (click)="showHistoryPage()">Recent Tests</button>\n\n    </div>\n\n    <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\landing\landing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__services_pouchService__["a" /* PouchService */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map