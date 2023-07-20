import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventSerivce } from './events/sherd/event.serivce';

@NgModule({
  declarations: [EventsAppComponent, EventsListComponent,EventThumbnailComponent,NavbarComponent],
  imports: [BrowserModule],
  providers: [EventSerivce],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
