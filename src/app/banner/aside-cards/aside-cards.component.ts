import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-cards',
  templateUrl: './aside-cards.component.html',
  styleUrls: ['./aside-cards.component.scss']
})
export class AsideCardsComponent implements OnInit {
  @Input() data!: {title: string, imageURL: string};
  constructor() { }

  ngOnInit(): void {
  }

}
