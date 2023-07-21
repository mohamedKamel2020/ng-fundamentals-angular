import { Component } from "@angular/core"
import { ActivatedRoute } from '@angular/router'
import { EventSerivce } from "../sherd/event.serivce"

@Component({
  templateUrl:'./event-details.component.html',
  styles:[`
  .container{ padding-left:20px;padding-right:20px;}
  `]
})
export class EventDetailsComponent{
  event:any

  constructor(private eventService:EventSerivce, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
