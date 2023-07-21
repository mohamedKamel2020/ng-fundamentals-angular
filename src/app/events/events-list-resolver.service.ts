import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventSerivce } from './sherd/event.serivce'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventSerivce) {

  }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events))
  }
}
