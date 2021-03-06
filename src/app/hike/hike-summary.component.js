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
var hike_1 = require("./hike");
var HikeSummaryComponent = (function () {
    function HikeSummaryComponent() {
        this.addhikeasfavorite = new core_1.EventEmitter();
    }
    HikeSummaryComponent.prototype.toggleAsTodoHike = function (isAdded) {
        console.log(isAdded);
        if (isAdded) {
            this.addhikeasfavorite.emit(this.hk);
        }
    };
    return HikeSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hike_1.Hike)
], HikeSummaryComponent.prototype, "hk", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HikeSummaryComponent.prototype, "addhikeasfavorite", void 0);
HikeSummaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hike-summary',
        templateUrl: 'hike-summary.component.html',
        styleUrls: ['./hike-summary.component.css']
    })
], HikeSummaryComponent);
exports.HikeSummaryComponent = HikeSummaryComponent;
//# sourceMappingURL=hike-summary.component.js.map