import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss']
})
export class SalesCardComponent implements OnInit {
  @Input() data!: { title: string; discount: number; price: number; imageSrc: string };
  constructor() { }

  ngOnInit(): void {
  }

}
