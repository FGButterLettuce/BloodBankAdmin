(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






 // Added by me

var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                aws_amplify_angular__WEBPACK_IMPORTED_MODULE_6__["AmplifyAngularModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <h1 padding-top=\"60px\" text-center><b>Hospital Endpoint</b></h1>\n  <div class=\"center-div\">\n    <ion-item>\n      <ion-input [(ngModel)]=\"input\" size=\"large\" placeholder=\"Search...\">\n      </ion-input>\n    </ion-item>\n    <ion-chip color=\"primary\" (click)=\"records()\">Records</ion-chip>\n    <ion-chip color=\"secondary\" (click)=\"donations()\">Donations</ion-chip>\n    <ion-chip color=\"tertiary\" (click)=\"donors()\">Donors</ion-chip>\n    <ion-chip color=\"warning\" (click)=\"hospitals()\">Hospitals</ion-chip>\n    <ion-chip color=\"success\"(click)=\"inventory()\">Inventory</ion-chip>\n    <ion-chip color=\"danger\" (click)=\"points()\">Points</ion-chip>\n    <ion-chip color=\"medium\" (click)=\"campaigns()\">Campaigns</ion-chip>\n\n\n    <ion-card text-center *ngIf=\"output\">\n      <ion-spinner *ngIf=\"loading\"></ion-spinner>\n      <div class=\"record\" *ngIf=\"recordres\">\n        <ion-card-title text-center>Records</ion-card-title>\n        <ion-item>\n          <ion-col text-center>RID</ion-col>\n          <ion-col text-center>HID</ion-col>\n          <ion-col text-center>EID</ion-col>\n          <ion-col text-center>Name</ion-col>\n          <ion-col text-center>Gender</ion-col>\n          <ion-col text-center>Age</ion-col>\n          <ion-col text-center>Date of Birth</ion-col>\n          <ion-col text-center>Blood Group</ion-col>\n        </ion-item>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>{{i.rid}}</ion-col>\n            <ion-col text-center>{{i.hid}}</ion-col>\n            <ion-col text-center>{{i.eid}}</ion-col>\n            <ion-col text-center>{{i.name}}</ion-col>\n            <ion-col text-center>{{i.gender}}</ion-col>\n            <ion-col text-center>{{i.age}}</ion-col>\n            <ion-col text-center>{{i.dob}}</ion-col>\n            <ion-col text-center>{{i.bloodgroup}}</ion-col>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"donation\" *ngIf=\"donationres\">\n        <ion-card-title text-center>Donations</ion-card-title>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>{{i.eid}}</ion-col>\n            <ion-col text-center>{{i.bloodgroup}}</ion-col>\n            <ion-col text-center *ngIf=\"i.cid\">{{i.cid}}</ion-col>\n            <ion-col text-center *ngIf=\"i.hid\">{{i.hid}}</ion-col>\n            <ion-col text-center>{{i.date}}</ion-col>\n            <ion-col text-center>{{i.bloodgroup}}</ion-col>\n            <ion-col text-center>{{i.success}}</ion-col>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class=\"donor\" *ngIf=\"donorres\">\n        <ion-card-title text-center>Donors</ion-card-title>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>{{i.eid}}</ion-col>\n            <ion-col text-center>{{i.email}}</ion-col>\n            <ion-col text-center>{{i.name}}</ion-col>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"inventory\" *ngIf=\"hospitalres\">\n        <ion-card-title text-center>Hospitals</ion-card-title>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>{{i.hid}}</ion-col>\n            <ion-col text-center>{{i.address}}</ion-col>\n            <ion-col text-center>{{i.hname}}</ion-col>\n            <ion-col text-center>{{i.pno}}</ion-col>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"inventory\" *ngIf=\"inventoryres\">\n        <ion-card-title text-center>Inventory</ion-card-title>\n        <ion-item>\n            <ion-col text-center>Blood Group</ion-col>\n            <ion-col text-center>Reserve Levels</ion-col>\n          </ion-item>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>\n              {{i.bloodgroup}}\n            </ion-col>\n            <ion-col>\n              {{i.reservelevels}}\n            </ion-col>\n          </ion-item>\n        </ion-list>\n        <ion-label>Enter Blood</ion-label><ion-input [(ngModel)]=\"emergencyblood\" placeholder = \"Blood Type\"></ion-input>\n        <ion-label>Enter Name of Hospital</ion-label><ion-input [(ngModel)]=\"emergencyhname\" placeholder = \"Hospital Name\"></ion-input>\n        <ion-button shape=\"round\" color=\"danger\" (click) = \"emergency()\">Send Emergency Request</ion-button>        \n      </div>\n\n      <div class=\"point\" *ngIf=\"pointres\">\n        <ion-card-title text-center>Point Editor</ion-card-title>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>{{i.eid}}</ion-col>\n            <ion-col text-center>\n              <ion-list *ngFor=\"let j of i.points\">\n                <ion-col>\n                  <ion-label>{{j.date}}&nbsp;&nbsp;{{j.point}}</ion-label>\n                </ion-col>\n              </ion-list>\n            </ion-col>\n            <ion-col text-center>\n              <ion-button shape=\"round\" color=\"danger\"(click)=addpoints(i.eid)>Add Points</ion-button> <!-- add functionality -->\n            </ion-col>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div class=\"campaign\" *ngIf=\"campaignres\">\n        <ion-card-title text-center>Campaigns</ion-card-title>\n        <ion-list *ngFor=\"let i of outputvalues\">\n          <ion-item>\n            <ion-col text-center>{{i.cid}}</ion-col>\n            <ion-col text-center>{{i.name}}</ion-col>\n            <ion-col text-center>{{i.address}}</ion-col>\n            <ion-col text-center>{{i.organization}}</ion-col>\n            <ion-col text-center>{{i.start}}</ion-col>\n            <ion-col text-center>{{i.end}}</ion-col>\n          </ion-item>\n        </ion-list>\n      </div>\n\n    </ion-card>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nion-content {\n  font-family: \"Poppins\", sans-serif; }\nion-input {\n  width: 800px;\n  font-family: \"Poppins\", sans-serif; }\nion-chip {\n  font-family: \"Poppins\", sans-serif; }\nh1 {\n  font-size: 2.5em;\n  font-family: \"Poppins\", sans-serif; }\nion-card {\n  width: 700px;\n  max-height: 900px; }\nion-card-title {\n  padding-top: 40px;\n  font-family: \"Poppins\", sans-serif; }\n.center-div {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 700px;\n  height: 400px;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFuayBBZG1pbi9CbG9vZEJhbmtBZG1pbi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQVk7QUFHWjtFQUNJLGtDQUFrQyxFQUFBO0FBR3RDO0VBQ0UsWUFBVztFQUNYLGtDQUFrQyxFQUFBO0FBR3BDO0VBQ0Usa0NBQWtDLEVBQUE7QUFHcEM7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDLEVBQUE7QUFHcEM7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCLEVBQUE7QUFFbEI7RUFDRSxpQkFBaUI7RUFDakIsa0NBQWtDLEVBQUE7QUFJcEM7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUViLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucycpO1xuXG5cbmlvbi1jb250ZW50e1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcblxufVxuaW9uLWlucHV0e1xuICB3aWR0aDo4MDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2hpcHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5oMXtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2FyZHtcbiAgd2lkdGg6NzAwcHg7XG4gIG1heC1oZWlnaHQ6OTAwcHg7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcblxufVxuXG4uY2VudGVyLWRpdlxue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(afs, amplify, alertController) {
        this.afs = afs;
        this.amplify = amplify;
        this.alertController = alertController;
        this.username = "7841996383554351";
        this.password = "superrocket";
        this.recordres = false;
        this.donorres = false;
        this.inventoryres = false;
        this.hospitalres = false;
        this.campaignres = false;
        this.donationres = false;
        this.pointres = false;
        this.loading = false;
        this.init();
        this.alerts = this.afs.collection('inventoryalerts');
    }
    HomePage.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: data,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.amplify.auth().signIn("7841996383554351", "superrocket")];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.toggle = function () {
        this.recordres = false;
        this.donorres = false;
        this.inventoryres = false;
        this.hospitalres = false;
        this.campaignres = false;
        this.donationres = false;
        this.pointres = false;
    };
    HomePage.prototype.records = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('recordsapi', '/records', {}).then(function (res) {
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    _this.recordres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('recordsapi', "/records/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                _this.output = true;
                                _this.recordres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.donations = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('donationsapi', '/donations', {}).then(function (res) {
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    console.log(_this.outputvalues);
                                    _this.donationres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('donationsapi', "/donations/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                _this.output = true;
                                _this.donationres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.donors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('donor', '/donor', {}).then(function (res) {
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    _this.donorres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('donor', "/donor/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                _this.output = true;
                                _this.donorres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.hospitals = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('hospitalsapi', '/hospitals', {}).then(function (res) {
                                console.log("reached api call");
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    _this.hospitalres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('hospitalsapi', "/hospitals/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                _this.output = true;
                                _this.hospitalres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.inventory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('inventoryapi', '/inventory', {}).then(function (res) {
                                console.log("reached api call");
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    _this.inventoryres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('inventory', "/inventory/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                _this.output = true;
                                _this.inventoryres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.points = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('points', '/points', {}).then(function (res) {
                                console.log("reached api call");
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    _this.pointres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('points', "/points/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                // console.log(this.outputvalues)
                                _this.pointres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.campaigns = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toggle(); // reset all cards to false
                        this.output = true;
                        this.loading = true;
                        if (!!this.input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.amplify.api().get('campaignsapi', '/campaigns', {}).then(function (res) {
                                if (res && res.length > 0) {
                                    _this.outputvalues = res;
                                    _this.campaignres = true;
                                    _this.loading = false;
                                }
                                else
                                    _this.presentAlert("Error issa blanka");
                            }).catch(function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.amplify.api().get('campaignsapi', "/campaigns/" + this.input, {}).then(function (res) {
                            if (res && res.length > 0) {
                                _this.outputvalues = res;
                                console.log(_this.outputvalues);
                                _this.campaignres = true;
                                _this.loading = false;
                            }
                            else
                                _this.presentAlert("No record found");
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.emergency = function () {
        if (this.emergencyblood && this.emergencyhname) {
            var alrt = {
                blood: this.emergencyblood,
                hname: this.emergencyhname
            };
            this.alerts.add(alrt);
            this.emergencyblood = null;
            this.emergencyhname = null;
        }
        else
            this.presentAlert("Enter details");
    };
    HomePage.prototype.addpoints = function (eid) {
        for (var _i = 0, _a = this.outputvalues; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.eid == eid) {
                i.points.push({ date: new Date(), point: 500 });
                this.amplify.api().put('pointsapi', '/points', i);
            }
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], aws_amplify_angular__WEBPACK_IMPORTED_MODULE_2__["AmplifyService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map