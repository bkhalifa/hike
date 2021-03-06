"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var hike_list_component_1 = require("./hike/hike-list.component");
var hike_details_component_1 = require("./hike/hike-details.component");
var page_not_found_component_1 = require("./page-not-found.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'hikes', component: hike_list_component_1.HikeListComponent },
    { path: 'hikes/:id', component: hike_details_component_1.HikeDetailsComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFound }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map