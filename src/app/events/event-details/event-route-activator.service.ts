import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventSerivce } from '../sherd/event.serivce'

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService:EventSerivce, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists)
      this.router.navigate(['/404'])
    return eventExists
  }
}
