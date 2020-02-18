import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hike } from "./hike";


@Component({
  moduleId:module.id,
  selector:'hike-summary',
  templateUrl:'hike-summary.component.html',
  styleUrls:['./hike-summary.component.css']
})
export class HikeSummaryComponent{
  @Input() hk:Hike;
  @Output() addhikeasfavorite = new EventEmitter<Hike>();

  toggleAsTodoHike(isAdded:any){
      console.log(isAdded);
      if(isAdded){
        this.addhikeasfavorite.emit(this.hk);
      }
  }
}
