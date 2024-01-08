import { Component, Input } from '@angular/core';
import { AsideCard } from "../../../models/types";

@Component({
  selector: 'app-aside-cards',
  templateUrl: './aside-cards.component.html',
  styleUrls: ['./aside-cards.component.scss']
})
export class AsideCardsComponent {
  @Input() public data!: AsideCard;
}
