(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tcc-gamer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'cadastro', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["CadastroComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["CadastroComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/*!*************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col l3 s12 offset-l9\">\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <input id=\"email\" type=\"email\"class=\"validate\" [(ngModel)]=\"email\">\n        <label for=\"email\">Email</label>\n      </div>\n      <div class=\"input-field col s12\">\n        <input id=\"email\" type=\"text\" [(ngModel)]=\"gamertag\">\n        <label for=\"email\">Gamertag</label>\n      </div>\n      <div class=\"input-field col s12\">\n        <input id=\"password\" type=\"password\" [(ngModel)]=\"password\">\n        <label for=\"password\">Senha</label>\n      </div>\n      <div class=\"input-field col s12\">\n        <input id=\"password\" type=\"password\" [(ngModel)]=\"passwordConfirm\">\n        <label for=\"password\">Confirmar Senha</label>\n      </div>\n    </div>\n    <button class=\"right btn waves-effect\"  [disabled]=\"password !== passwordConfirm || (!password && !passwordConfirm)\"  (click)=\"cadastrar()\">\n      Cadastrar\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cadastro_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.model */ "./src/app/cadastro/cadastro.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(router, service) {
        this.router = router;
        this.service = service;
        this.email = '';
        this.gamertag = '';
        this.password = '';
        this.avatar = '';
        this.users = [];
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent.prototype.cadastrar = function () {
        var user = new _cadastro_model__WEBPACK_IMPORTED_MODULE_1__["User"]('', this.avatar, this.email, this.gamertag, this.password);
        this.service.saveUsuario(user).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        /*if (!(localStorage.getItem('users'))) {
          this.users.push(user);
          localStorage.setItem('users', JSON.stringify(this.users));
          this.router.navigateByUrl('login')
        } else {
          this.users = JSON.parse(localStorage.getItem('users'));
          user = new User('', this.avatar, this.email, this.gamertag, this.password);
          this.users.push(user);
          localStorage.setItem('users', JSON.stringify(this.users));
          this.router.navigateByUrl('login')
        }*/
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro/cadastro.component.css")],
            providers: [_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.model.ts":
/*!********************************************!*\
  !*** ./src/app/cadastro/cadastro.model.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, avatar, email, gamertag, senha) {
        if (id === void 0) { id = ''; }
        if (avatar === void 0) { avatar = ''; }
        if (email === void 0) { email = ''; }
        if (gamertag === void 0) { gamertag = ''; }
        if (senha === void 0) { senha = ''; }
        this.id = id;
        this.avatar = avatar;
        this.email = email;
        this.gamertag = gamertag;
        this.senha = senha;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.saveLogged = function (user) {
        var jsonUser = JSON.stringify(user);
        localStorage.setItem('user', jsonUser);
    };
    DataService.prototype.getLogged = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    DataService.prototype.clearStorage = function () {
        localStorage.clear();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-ranking {\n  font-size: 18px;\n}\n\n.font-ranking-number {\n  font-size: 50px;\n}\n\n.font-ranking-cases {\n  font-size: 12px;\n}\n\n.list-ranking {\n  margin-top: 30px;\n}\n\n.logo {\n  margin: 10px;\n}\n\n.menu-panel {\n  background-color: #00070C;\n  min-height: 100vh;\n}\n\n.feed-panel {\n  background-color: #01001D;\n  overflow-y: scroll;\n  height: 100vh !important;\n}\n\n.ranking-panel {\n  background-color: #00070C;\n  min-height: 100vh;\n}\n\n.avatar {\n  padding: 6px;\n  border: 1px solid #dd2651;\n}\n\n.avatar-container {\n  margin-top: 60px;\n}\n\n#gamertag {\n  font-size: 20px;\n}\n\n.cinza-tcc {\n  color: #F0F0F0;\n}\n\n.azul-tcc {\n  color: #16959c;\n}\n\n.vermelho-tcc {\n  color: #dd2651;\n}\n\n.cinza-mais-tcc {\n  color: #6D6D6C;\n}\n\n.branco {\n  color: white;\n}\n\n.details {\n\n}\n\n.details-item {\n  font-size: 15px;\n  padding: 8px\n}\n\n.ranking-number {\n  font-weight: bold;\n  font-size: 80px;\n}\n\n.ranking-game {\n  font-size: 25px;\n}\n\n.ranking-detail {\n  margin-top: 20px;\n}\n\n.report-card {\nbackground-color: #14171A;\n}\n\na:hover {\n  color: #16959c;\n}\n\nhtml, body, a:hover {\n  font-family: \"Lato\", cursive, sans-serif;\n  font-size: 17px;\n}\n\ncol l12 cinza-mais-tcc details-item, span:hover {\n  color: #16959c;\n  cursor: pointer;\n}\n\nhr{\n  margin-top: 0px; \n  margin-right: 10px;\n  margin-bottom: 25px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col l2 menu-panel fixed\">\n      <br>\n      <div class=\"center avatar-container\">\n        <img src=\"../../assets/imgs/perfil.png\" class=\"circle avatar\" alt=\"\" width=\"170\" height=\"170\">\n        <div class=\"row\">\n          <br>\n          <span class=\"col l12 cinza-tcc\" id=\"gamertag\">{{user.gamertag}}</span>\n          <span class=\"col l12 azul-tcc\">{{user.email}}</span>\n        </div>\n        <br>\n        <div class=\"row details\">\n          <span class=\"col l12 cinza-mais-tcc details-item\"> Casos Reportados</span>\n          <span class=\"col l12 cinza-mais-tcc details-item\"> Capturas de Tela</span>\n          <span class=\"col l12 cinza-mais-tcc details-item\"> Jogos Registrados</span>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col l7 feed-panel\">\n      <nav>\n        <div class=\"nav-wrapper black\">\n          <a href=\"#\" class=\"brand-logo\"><img src=\"../../assets/imgs/logo.png\" height=\"50\" class=\"logo\"/></a>\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a >Configurações</a></li>\n            <li><a >Sobre</a></li>\n            <li><a (click)=\"logout()\">Sair</a></li>\n          </ul>\n        </div>\n      </nav>\n\n      <div class=\"row\">\n        <div class=\"col l12\" *ngFor=\"let post of posts\">\n          <div class=\"card report-card\">\n              <div class=\"card-content\">\n                  <span class=\"card-title activator grey-text text-darken-4\"><span class=\"cinza-tcc\">Sofri Assédio no </span><span class=\"vermelho-tcc\">{{post.jogo}}</span></span>\n                  <span class=\"azul-tcc\">{{post.gamertag}}</span>\n                  <p class=\"cinza-mais-tcc\">{{post.description}}</p>\n              </div>\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"https://tcc-milla-backend.herokuapp.com/public/{{post.imagem}}\">\n              </div>\n              \n              <div class=\"card-action\">\n                  <a href=\"#\">Dar suporte</a>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col l3 ranking-panel\">\n      <div class=\"row\">\n        <h5 class=\"col l12 cinza-tcc\">Ranking de jogos reportados</h5>\n      </div>\n      <div class=\"row ranking-item\">\n          <div class=\"col l3\">\n            <span class=\"ranking-number vermelho-tcc\">1º</span>            \n          </div>\n          <div class=\"col l9\" style=\"margin-top: 20px;\">\n              <div class=\"col l12\">\n                <span class=\"ranking-game branco\">Fortnite</span>                \n              </div>\n              <div class=\"col l12\">\n                <span class=\"ranking-detail cinza-mais-tcc\">Casos reportados</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"row ranking-item\">\n          <div class=\"col l3\">\n            <span class=\"ranking-number vermelho-tcc\">2º</span>            \n          </div>\n          <div class=\"col l9\" style=\"margin-top: 20px;\">\n              <div class=\"col l12\">\n                <span class=\"ranking-game branco\">Fortnite</span>                \n              </div>\n              <div class=\"col l12\">\n                <span class=\"ranking-detail cinza-mais-tcc\">Casos reportados</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"row ranking-item\">\n          <div class=\"col l3\">\n            <span class=\"ranking-number vermelho-tcc\">3º</span>            \n          </div>\n          <div class=\"col l9\" style=\"margin-top: 20px;\">\n              <div class=\"col l12\">\n                <span class=\"ranking-game branco\">Fortnite</span>                \n              </div>\n              <div class=\"col l12\">\n                <span class=\"ranking-detail cinza-mais-tcc\">Casos reportados</span>\n              </div>\n          </div>\n      </div>\n    </div>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.service */ "./src/app/home/report.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(service, dataService, router) {
        this.service = service;
        this.dataService = dataService;
        this.router = router;
        this.bodyTag = document.getElementsByTagName('body')[0];
        this.posts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bodyTag.classList.add('background-feed');
        this.service.getReports().subscribe(function (data) {
            _this.posts = data;
            console.log(_this.posts);
        });
        this.user = this.dataService.getLogged();
    };
    HomeComponent.prototype.logout = function () {
        this.dataService.clearStorage();
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.bodyTag.classList.remove('background-feed');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/report.service.ts":
/*!****************************************!*\
  !*** ./src/app/home/report.service.ts ***!
  \****************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.url = 'https://tccbackend.herokuapp.com/api/posts';
    }
    ReportService.prototype.getReports = function () {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field input {\n  color: white !important;\n}\n\n.gg-logo {\n  width: 100px;\n  height: 60px;\n  margin-top: 30px;\n\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container\">\n  <div class=\"row\">\n    <img src=\"../../assets/imgs/gg.png\" class=\"gg-logo\" />\n    <div class=\"right\" style=\"margin-top: 50px\">\n      <a class=\"white-text\" (click)=\"toggleForm=false\">Cadastrar</a>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 60px !important;\">\n    <div class=\"col l3 offset-l9 center white-text\">\n      <span (click)=\"toggleForm=true\" class=\"pointer\">Entrar</span> | <span (click)=\"toggleForm=false\" class=\"pointer\">Criar Conta</span>\n    </div>\n  </div>\n  <ng-template [ngIf]=\"toggleForm\" [ngIfElse]=\"cadastro\">\n    <div class=\"row\">\n      <div class=\"col l3 s12 offset-l9\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"email\" type=\"email\" [(ngModel)]=\"email\">\n            <label for=\"email\">Email ou gamertag</label>\n          </div>\n          <div class=\"input-field col s12\">\n            <input id=\"password\" type=\"password\" [(ngModel)]=\"senha\">\n            <label for=\"password\">Senha</label>\n          </div>\n        </div>\n        <a href=\"\" class=\"white-text\">Esqueceu sua senha ?</a>\n        <button class=\"right btn waves-effect\" (click)=\"logar()\">\n          Entrar\n        </button>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #cadastro>\n    <app-cadastro></app-cadastro>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, usuarioService, dataService) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.dataService = dataService;
        this.email = '';
        this.senha = '';
        this.allUsers = [];
        this.bodyTag = document.getElementsByTagName('body')[0];
        this.toggleForm = true;
    }
    LoginComponent.prototype.logar = function () {
        var _this = this;
        this.usuarioService.logar({ email: this.email, senha: this.senha }).subscribe(function (data) {
            console.log(data);
            _this.dataService.saveLogged(data);
            _this.router.navigateByUrl('/home');
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.bodyTag.classList.add('login-page');
        this.allUsers = JSON.parse(localStorage.getItem('users'));
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.bodyTag.classList.remove('login-page');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/usuario.service.ts":
/*!************************************!*\
  !*** ./src/app/usuario.service.ts ***!
  \************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
        this.url = 'https://tccbackend.herokuapp.com/api/usuarios';
    }
    UsuarioService.prototype.saveUsuario = function (usuario) {
        return this.http.post(this.url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsuarioService.prototype.logar = function (user) {
        return this.http.post(this.url + "/signin", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Camilla\Desktop\v3\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map