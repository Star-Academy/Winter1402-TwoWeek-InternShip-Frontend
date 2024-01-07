import { Component, OnInit } from '@angular/core';
import {faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    protected readonly faFacebook = faFacebook;
    protected readonly faChevronUp = faChevronUp;
    protected readonly faTwitter = faTwitter;
    protected readonly faYoutube = faYoutube;
}
