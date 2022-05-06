import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() books = [
    {
      author: '',
      title: '',
      summary: '',
      image: '',
      price: {
        currency: '',
        displayValue: '',
      },
    },
  ];
}
