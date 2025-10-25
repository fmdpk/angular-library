import { Component, inject } from '@angular/core';
import { LoggingLibService } from 'logging-lib'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-app';

  private logService: LoggingLibService = inject(LoggingLibService)

  ngOnInit(): void {
    this.logService.log(this.title + '/hello');
  }
}
