import { Component, OnInit } from '@angular/core'
import { EventSerivce } from './sherd/event.serivce'
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr: { success: (arg0: any) => void; }

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
 events!: any[];

 constructor(private eventService:EventSerivce, private toastr:ToastrService, private route:ActivatedRoute) {}
 ngOnInit(){
  this.events =  this.route.snapshot.data['events']
 }
 handleThumbnailClick(eventName: any){
  this.toastr.success(eventName)
 }
}
