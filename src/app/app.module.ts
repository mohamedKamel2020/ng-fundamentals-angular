import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventSerivce } from './events/sherd/event.serivce';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent, EventListResolver, EventRouteActivator } from './events';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
  providers: [
    EventSerivce,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
