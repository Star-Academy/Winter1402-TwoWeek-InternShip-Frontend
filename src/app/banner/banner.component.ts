import { Component, OnInit } from '@angular/core';
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    protected readonly faArrowRight = faCircleArrowRight;
    protected readonly faArrowLeft = faCircleArrowLeft;
}
