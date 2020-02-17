import {Component, OnInit}  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
moduleId:module.id,
templateUrl:'hike-details.component.html'
})
export class HikeDetailsComponent implements OnInit{
   title :string;
  
   constructor(private _route:ActivatedRoute, private _router:Router){}
  
  
   ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
         this.title = `details de la rondonnées ${id}`;
      
    };
    goBack(){
   this._router.navigate(['/hikes']);
    }

   
}
