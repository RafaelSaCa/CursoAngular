import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Rafael';

  userData = {
    email: 'test@gmail',
    role:  'admin',
  }

  title = 'curso-angular';
}
