import { Component } from '@angular/core';
import { faCircleDot, faCircleArrowRight, faCircleArrowLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internship-winter-mohaymen';
  faArrowLeft = faCircleArrowLeft
  faArrowRight = faCircleArrowRight
  faTwitter = faTwitter
  protected readonly faFacebook = faFacebook;
  protected readonly faYoutube = faYoutube;
  protected readonly faChevronUp = faChevronUp;
}
