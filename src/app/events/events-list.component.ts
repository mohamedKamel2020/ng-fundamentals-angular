import { Component, OnInit } from '@angular/core';
import { EventSerivce } from './sherd/event.serivce';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
 events!: any[];

 constructor(private eventService:EventSerivce) {
 }
 ngOnInit(){
  this.events = this.eventService.getEvents()
 }
}
