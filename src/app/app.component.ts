import { Component } from '@angular/core';
import booksData from './books.json';
interface Book {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: {
    currency: string;
    value: number;
    displayValue: string;
  };
}

interface newBook {
  author: string;
  image: string;
  summary: string;
  title: string;
  price: {
    displayValue: string;
    currency: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  response: Book[] = booksData;

  state: newBook[] = this.response.map((item) => {
    const [name, surname] = item.author.split(' ');
    return {
      author: `${name[0]}.${surname}`,
      image: item.image,
      summary: item.summary,
      title: item.title,
      price: {
        displayValue: item.price.displayValue,
        currency: item.price.currency,
      },
    };
  });

  books = [...this.state];
  filterItem(e: string) {
    this.books = this.state.filter((book) =>
      book.title.toLowerCase().includes(e.toLowerCase())
    );
  }

  myInput: string = 'I am parent component';
  text = 'Hello';
}
