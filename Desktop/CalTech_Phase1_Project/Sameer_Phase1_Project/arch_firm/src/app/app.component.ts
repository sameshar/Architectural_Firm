import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientFormComponent, ClientListComponent, NewMeetingComponent, CalendarViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arch_firm';
}
