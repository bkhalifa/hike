
import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactService } from "./contact.service";

@NgModule({
imports:[CommonModule, FormsModule],
declarations:[ContactComponent],
exports:[ContactComponent],
providers:[ContactService]
})
export class ContactModule{}
