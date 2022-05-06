import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  searchItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

