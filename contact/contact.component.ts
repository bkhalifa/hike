import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactService } from "./contact.service";

@Component({
  moduleId:module.id,
  selector:'contact',
  templateUrl:'./contact.component.html'
})
export class ContactComponent{
  subject : string;
  isVisible :boolean= false;
constructor(private _contactSvc : ContactService){}

  sendMessage(form: NgForm) {
  this._contactSvc.postContactForm(form);
  }

}
