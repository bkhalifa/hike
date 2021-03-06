import {NgModule} from '@angular/core';
import {CommonModule}  from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HikeListComponent} from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from './hike-filter.pipe';
import { HikeSummaryComponent } from './hike-summary.component';
// import { HikeResolveService } from './hike-resolver.service';



@NgModule({
    imports:[CommonModule, RouterModule, FormsModule],
    declarations:[HikeListComponent, HikeDetailsComponent, HikeFilterPipe, HikeSummaryComponent],
    exports:[HikeListComponent],
    providers:[HikeService,
      // HikeResolveService
    ]
})


export class HikeModule {}
