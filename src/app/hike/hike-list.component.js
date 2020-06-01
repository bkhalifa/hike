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
var hike_service_1 = require("./hike.service");
var router_1 = require("@angular/router");
var HikeListComponent = (function () {
    function HikeListComponent(_hikeService, route) {
        this._hikeService = _hikeService;
        this.route = route;
    }
    HikeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.hikes = this.route.snapshot.data.hikes;
        this._hikeService.GetHikesFromApiWithCache()
            .subscribe(function (res) { return _this.hikes = res; }, function (err) { return console.log(err.status); });
        console.log(this.hikes);
    };
    HikeListComponent.prototype.addToMyToDoHike = function (hiketoadd) {
        console.log("rando  " + hiketoadd.name + " ajout\u00E9e");
    };
    return HikeListComponent;
}());
HikeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hike-list',
        templateUrl: 'hike-list.component.html'
    }),
    __metadata("design:paramtypes", [hike_service_1.HikeService,
        router_1.ActivatedRoute])
], HikeListComponent);
exports.HikeListComponent = HikeListComponent;
//# sourceMappingURL=hike-list.component.js.map