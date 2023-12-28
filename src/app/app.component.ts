import { Component } from '@angular/core';
import { faCircleDot, faCircleArrowRight, faCircleArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internship-winter-mohaymen';
  faArrowLeft = faCircleArrowLeft
  faArrowRight = faCircleArrowRight
  faBars = faBars
}
