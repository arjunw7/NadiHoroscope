webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instructions_instructions__ = __webpack_require__(196);
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
            selector: 'home',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\home\home.html"*/`<ion-content>\n\n    <div class="homePage">\n\n        <div class="pageName">\n\n            Patient Details\n\n        </div>\n\n        <label>Name</label><br>\n\n        <input [(ngModel)]="patient.name" type="text"><br>\n\n        <label>Age</label><br>\n\n        <input [(ngModel)]="patient.age" type="number"><br>\n\n        <label>Height</label><br>\n\n        <input [(ngModel)]="patient.height" type="number"><br>\n\n        <label>Weight</label><br>\n\n        <input [(ngModel)]="patient.weight" type="number"><br>\n\n        <label>Gender</label><br>\n\n        <select [(ngModel)]="patient.gender">\n\n            <option value="male">Male</option>\n\n            <option value="female">Female</option>\n\n        </select><br><br>\n\n        <button (click)="showInstructionsPage(patient)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input__ = __webpack_require__(197);
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
            selector: 'instructions',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\instructions\instructions.html"*/`<ion-content>\n\n    <!-- <ion-icon (click)="goBack()" ios="ios-arrow-back" md="md-arrow-back"></ion-icon> -->\n\n    <div class="instructionsPage">\n\n        <!-- <div class="userName">\n\n            <ion-icon ios="ios-contact" md="ios-contact"></ion-icon> {{patient.name}}\n\n        </div> -->\n\n        <div class="handImage">\n\n            <img src="assets/imgs/hand1.png" alt="" srcset="">\n\n        </div>\n\n        <div class="instructions">\n\n            <ul>\n\n                <li>Band should not be very tight and must be placed exactly as shown in the image.</li>\n\n                <li>Eyes should be closed and legs apart.</li>\n\n                <li>Patient should not be asleep.</li>\n\n            </ul>\n\n        </div>\n\n        <button (click)="showInputPage()">Start test</button>\n\n    </div>\n\n    <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\instructions\instructions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], InstructionsPage);
    return InstructionsPage;
}());

//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_survey__ = __webpack_require__(198);
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
            selector: 'inputPage',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\input\input.html"*/`<ion-content>\n\n    <div class="inputPage">\n\n        <div class="pageName">\n\n            Enter all values\n\n        </div>\n\n        <div class="allFields">\n\n            <div class="field">\n\n                <label>Vatta-Vatta</label><br>\n\n                <input [(ngModel)]="inputs.vatta_vatta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Vatta-Pitta</label>\n\n                <input [(ngModel)]="inputs.vatta_pitta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Vatta-Kapha</label><br>\n\n                <input [(ngModel)]="inputs.vatta_kapha" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Pitta-Vatta</label><br>\n\n                <input [(ngModel)]="inputs.pitta_vatta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Pitta-Pitta</label><br>\n\n                <input [(ngModel)]="inputs.pitta_pitta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Pitta-Kapha</label><br>\n\n                <input [(ngModel)]="inputs.pitta_kapha" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Kapha-Vatta</label><br>\n\n                <input [(ngModel)]="inputs.kapha_vatta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Kapha-Pitta</label><br>\n\n                <input [(ngModel)]="inputs.kapha_pitta" type="number"><br>\n\n            </div>\n\n            <div class="field">\n\n                <label>Kapha-Kapha</label><br>\n\n                <input [(ngModel)]="inputs.kapha_kapha" type="number"><br>\n\n            </div>\n\n        </div>\n\n        <button (click)="showSurveyPage(inputData)">Continue</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\input\input.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_result__ = __webpack_require__(199);
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
            if (this.inputData[0].id == 4 && this.inputData[1].id == 2) {
                this.formStatus1 = true;
                this.noSolution = false;
            }
            else if (this.inputData[0].id == 5) {
                this.formStatus2 = true;
                this.noSolution = false;
            }
            else if (this.inputData[0].id == 6 && this.inputData[1].id == 5) {
                this.formStatus3 = true;
                this.noSolution = false;
            }
            console.log(this.inputData);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
                score: -1,
                maxScore: 20,
                status: "No signs of ulcer."
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
                        status: this.fstatus
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
        else if (total > 2 && total <= 5)
            status = "In future you may have ulcer (Avoid spicy food)";
        else if (total > 5 && total <= 9)
            status = "Ulcer in initial stages";
        else if (total > 9)
            status = "Very high chances ulcer";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__result_result__["a" /* ResultPage */], {
            score: total,
            maxScore: 12,
            status: status
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
            status: status
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
            selector: 'survey',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\survey\survey.html"*/`<ion-content>\n\n    <div class="surveyPage">\n\n        <div class="pageName" *ngIf="!noSolution">\n\n            Patient Details\n\n        </div>\n\n        <div *ngIf="formStatus1">\n\n            <label>Pain in abdomen?</label><br>\n\n            <select [(ngModel)]="form1.abdomenPain">\n\n                <option value="3">Yes</option>\n\n                <option value="0.5">No</option>\n\n            </select><br>\n\n            <label>Status after eating spicy food?</label><br>\n\n            <select [(ngModel)]="form1.spicy">\n\n                <option value="4">Pain increases</option>\n\n                <option value="0">No effect</option>\n\n            </select><br>\n\n            <label>Status after eating non-spicy food?</label><br>\n\n            <select [(ngModel)]="form1.nonSpicy">\n\n                <option value="3">Pain decreases</option>\n\n                <option value="0">Pain increases</option>\n\n            </select><br>\n\n            <label>History of heavy acidity?</label><br>\n\n            <select [(ngModel)]="form1.acidity">\n\n                <option value="2">Yes</option>\n\n                <option value="0">No</option>\n\n            </select><br>\n\n            <label>Any headaches?</label><br>\n\n            <select [(ngModel)]="form1.headache">\n\n                <option value="yes">Yes</option>\n\n                <option value="0">No</option>\n\n            </select><br>\n\n            <label *ngIf="form1.headache==\'yes\'">Does it follow vomiting?<br></label>\n\n            <select [(ngModel)]="form1.vomiting" *ngIf="form1.headache==\'yes\'">\n\n                <option value="yes">Yes</option>\n\n                <option value="0">No</option><br>\n\n            </select>\n\n            <label *ngIf="form1.vomiting==\'yes\'">Does headache gets relieved after vomiting?<br></label>\n\n            <select [(ngModel)]="form1.vomitRelief" *ngIf="form1.vomiting==\'yes\'">\n\n                <option value="3">Yes</option>\n\n                <option value="0">No</option><br>\n\n            </select>\n\n            <label>Blood in stool?</label><br>\n\n            <select [(ngModel)]="form1.bloodStool">\n\n                <option value="yes">Yes</option>\n\n                <option value="0">No</option>\n\n            </select><br>\n\n            <label *ngIf="form1.bloodStool==\'yes\'">Do you have piles?<br></label>\n\n            <select [(ngModel)]="form1.piles" *ngIf="form1.bloodStool==\'yes\'">\n\n                <option value="0">Yes</option>\n\n                <option value="5">No</option><br>\n\n            </select>\n\n            <br>\n\n            <button (click)="submitForm1()">Continue</button>\n\n        </div>\n\n        <div *ngIf="formStatus2">\n\n            <label>Do you have diabetes?</label><br>\n\n            <select [(ngModel)]="form2.diabetes">\n\n                    <option value="1">Yes</option>\n\n                    <option value="no">No</option>\n\n                </select><br>\n\n            <label *ngIf="form2.diabetes==\'no\'">Any family history of diabetes?<br></label>\n\n            <select [(ngModel)]="form2.diabetesFamily" *ngIf="form2.diabetes==\'no\'">\n\n                    <option value="0.5">Yes</option>\n\n                    <option value="3">No</option><br>\n\n                </select>\n\n            <label>Do you have stomach ache?</label><br>\n\n            <select [(ngModel)]="form2.stomache">\n\n                    <option value="3">Yes</option>\n\n                    <option value="0">No</option>\n\n                </select><br>\n\n            <label>Acidic burps?</label><br>\n\n            <select [(ngModel)]="form2.burps">\n\n                    <option value="2">Yes</option>\n\n                    <option value="0.5">No</option>\n\n                </select><br>\n\n            <label>Vomiting after eating spicy food?<br></label>\n\n            <select [(ngModel)]="form2.vomit">\n\n                    <option value="yes">Yes</option>\n\n                    <option value="1.5">No</option><br>\n\n                </select>\n\n            <label *ngIf="form2.vomit==\'yes\'">How much time does it take?<br></label>\n\n            <select [(ngModel)]="form2.vomitTime" *ngIf="form2.vomit==\'yes\'">\n\n                    <option value="4">Within 10 minutes</option>\n\n                    <option value="3">about 45 minutes</option><br>\n\n                </select>\n\n            <button (click)="submitForm2()">Continue</button>\n\n        </div>\n\n        <div *ngIf="formStatus3">\n\n            <label>Problem in swallowing food or water?</label><br>\n\n            <select [(ngModel)]="form3.swallow">\n\n                        <option value="yes">Yes</option>\n\n                        <option value="0">No</option>\n\n                    </select><br>\n\n            <label *ngIf="form3.swallow==\'yes\'">Burning sensation in which part?<br></label>\n\n            <select [(ngModel)]="form3.part" *ngIf="form3.swallow==\'yes\'">\n\n                        <option value="2">Mouth</option>\n\n                        <option value="3">Inside neck</option><br>\n\n                    </select>\n\n            <button (click)="submitForm3()">Continue</button>\n\n        </div>\n\n    </div>\n\n    <!-- <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div> -->\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\survey\survey.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(99);
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
    function ResultPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.score = navParams.get('score');
        this.maxScore = navParams.get('maxScore');
        this.status = navParams.get('status');
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
            selector: 'result',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\result\result.html"*/`<ion-content>\n\n    <div class="resultPage">\n\n        <div class="score" *ngIf="score!=-1">\n\n            Score - {{score}}/{{maxScore}}\n\n        </div>\n\n        <div class="score" *ngIf="score==-1">\n\n            Congratulations!\n\n        </div>\n\n        <div class="diagnosis">\n\n            {{status}}\n\n        </div><br><br><br><br><br><br><br><br>\n\n        <button (click)="returnHome()">Home</button>\n\n    </div>\n\n    <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\result\result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_instructions_instructions__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_input_input__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_survey_survey__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_result_result__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(194);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_result_result__["a" /* ResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_result_result__["a" /* ResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(99);
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
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
    function LandingPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    LandingPage.prototype.showHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'landing',template:/*ion-inline-start:"C:\Users\212601219\Desktop\ULCER\src\pages\landing\landing.html"*/`<ion-content>\n\n    <div class="LandingPage">\n\n        <div class="logo">\n\n            <img src="assets/imgs/logo_white.png" alt="" srcset="">\n\n        </div>\n\n        <button (click)="showHomePage()">Continue</button>\n\n    </div>\n\n    <div class="footer">\n\n        © Nadi horoscope, 2017\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\212601219\Desktop\ULCER\src\pages\landing\landing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map