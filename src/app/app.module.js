"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var hike_module_1 = require("./hike/hike.module");
var home_module_1 = require("./home/home.module");
var page_not_found_component_1 = require("./page-not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var contact_module_1 = require("./contact/contact.module");
var about_module_1 = require("./about/about.module");
// import { HikeResolveService } from './hike/hike-resolver.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            hike_module_1.HikeModule,
            home_module_1.HomeModule,
            contact_module_1.ContactModule,
            about_module_1.AboutModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFound],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map