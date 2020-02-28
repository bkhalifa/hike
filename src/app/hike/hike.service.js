"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
var of_1 = require("rxjs/observable/of");
var Observable_1 = require("rxjs/Observable");
var HikeService = (function () {
    function HikeService(_http) {
        var _this = this;
        this._http = _http;
        this.url = 'app/api/hikes.json';
        this.GetHikesFromApiWithCache = function () {
            //propriéte qui servira de cache
            //les données sont elles déja en cache
            // oui en cache , une requette est elle en chemin
            //non pas en cache , une requette est en chemin
            // si pas de données en cache et pas de requette en cours , requette au service web
            if (_this.data) {
                var d = of_1.of(_this.data);
                return d;
            }
            else if (_this.observable) {
                return _this.observable;
            }
            else {
                _this.observable = _this._http
                    .get(_this.url)
                    .map(function (response) {
                    _this.observable = null;
                    _this.data = response.json();
                    return _this.data;
                })
                    .catch(function (error) {
                    var errorMessage = "Une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
                    return Observable_1.Observable.throw(errorMessage);
                });
                return _this.observable;
            }
        };
    }
    HikeService.prototype.GetHikesFromApi = function () {
        return this._http.get('app/api/hikes.json')
            .do(function (x) { return console.log(x); })
            .map(function (hikes) { return hikes.json(); })
            .catch(function (error) {
            var errorMsg = "une erreur " + error.status + " est survenue en tentant de joindre " + error.url;
            return errorMsg;
        });
    };
    return HikeService;
}());
HikeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HikeService);
exports.HikeService = HikeService;
//# sourceMappingURL=hike.service.js.map